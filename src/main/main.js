const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const HOTKEY = 'Control+Shift+Space';
const WORKER_SCRIPT = path.join(__dirname, '..', '..', 'scripts', 'vosk_worker.py');
const REPORTS_DIR = path.join(__dirname, '..', '..', 'reports');

let mainWindow = null;
let currentState = 'idle';
let audioChunks = [];
let sttProcess = null;
let stdoutCache = '';
let finalTranscript = '';
let lastPresets = {};
let selectedPreset = 'meeting';

const ENRICHMENT_TEMPLATES = {
  meeting: (text) => `Meeting Notes
- Summary: 
- Transcript:
${text}`,
  dev: (text) => `Dev Ticket
## Problem

## Proposal
- Capture details in transcript
## Transcript
${text}`,
  executive: (text) => `Executive Summary
- Key highlights: 
- Full text:
${text}`
};

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 420,
    height: 360,
    frame: false,
    resizable: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, '..', 'preload.js'),
      contextIsolation: true,
      sandbox: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, '..', 'renderer', 'index.html'));
  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function sendStateChange(payload) {
  if (!mainWindow || mainWindow.isDestroyed()) {
    return;
  }
  mainWindow.webContents.send('state-change', payload);
}

function derivePresets(text) {
  const normalized = text.trim();
  const safe = normalized || '';
  return Object.fromEntries(
    Object.entries(ENRICHMENT_TEMPLATES).map(([key, fn]) => [key, fn(safe)])
  );
}

function resetToIdle() {
  audioChunks = [];
  cleanupStt();
  currentState = 'idle';
  finalTranscript = '';
  lastPresets = {};
  selectedPreset = 'meeting';
  sendStateChange({ state: 'idle' });
}

function handleError(message) {
  cleanupStt();
  currentState = 'error';
  sendStateChange({ state: 'error', message: message || 'STT unavailable' });
}

function startListening() {
  if (currentState === 'listening') return;
  resetToIdle();
  currentState = 'listening';
  sendStateChange({ state: 'listening' });
}

function finishListening() {
  if (currentState !== 'listening') return;
  currentState = 'processing';
  sendStateChange({ state: 'processing', message: 'Processing audio...' });
  processAudio();
}

function processAudio() {
  if (!audioChunks.length) {
    handleError('No audio recorded');
    return;
  }

  const pythonCmd = process.env.PYTHON || 'python';
  try {
    sttProcess = spawn(pythonCmd, [WORKER_SCRIPT], {
      cwd: path.dirname(WORKER_SCRIPT),
      env: process.env
    });
  } catch (error) {
    handleError('STT worker could not start');
    return;
  }

  sttProcess.stderr.on('data', (chunk) => {
    console.error('STT stderr:', chunk.toString().trim());
  });

  sttProcess.stdout.on('data', (chunk) => {
    stdoutCache += chunk.toString();
    const lines = stdoutCache.split('\n');
    stdoutCache = lines.pop();
    for (const line of lines) {
      handleWorkerLine(line);
    }
  });

  sttProcess.on('close', (code) => {
    if (finalTranscript) return;
    handleError(code === 0 ? 'STT finished without transcript' : 'STT worker exited');
  });

  sttProcess.on('error', () => {
    handleError('STT worker failed to spawn');
  });

  for (const chunk of audioChunks) {
    const payload = { type: 'audio', pcm16le_b64: chunk.data, sample_rate: chunk.sampleRate };
    sttProcess.stdin.write(`${JSON.stringify(payload)}\n`);
  }

  sttProcess.stdin.write(`${JSON.stringify({ type: 'end' })}\n`);
}

function cleanupStt() {
  if (sttProcess) {
    sttProcess.stdin.end();
    sttProcess.kill();
    sttProcess = null;
  }
  stdoutCache = '';
}

function handleWorkerLine(line) {
  if (!line.trim()) return;
  let message;
  try {
    message = JSON.parse(line);
  } catch {
    return;
  }

  if (message.type === 'partial' && message.text) {
    sendStateChange({
      state: 'processing',
      message: `Processing: ${message.text}`
    });
    return;
  }

  if (message.type === 'final') {
    finalTranscript = message.text || '';
    const presets = derivePresets(finalTranscript);
    lastPresets = presets;
    selectedPreset = 'meeting';
    currentState = 'done';
    sendStateChange({
      state: 'done',
      transcript: finalTranscript,
      presets,
      selectedPreset,
      autoHideAfterMs: 1800
    });
    cleanupStt();
    return;
  }

  if (message.type === 'error') {
    handleError(message.message);
  }
}

function convertChunk(payload) {
  if (!payload) {
    return null;
  }
  const floatArray = ArrayBuffer.isView(payload)
    ? new Float32Array(payload.buffer, payload.byteOffset, payload.byteLength / Float32Array.BYTES_PER_ELEMENT)
    : new Float32Array(payload);
  const pcm = Buffer.alloc(floatArray.length * 2);
  for (let i = 0; i < floatArray.length; i += 1) {
    const sample = Math.max(-1, Math.min(floatArray[i], 1));
    const value = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
    pcm.writeInt16LE(Math.round(value), i * 2);
  }
  return pcm.toString('base64');
}

function registerHotkey() {
  if (!globalShortcut.register(HOTKEY, () => {
    if (currentState === 'listening') {
      finishListening();
    } else {
      startListening();
    }
  })) {
    console.warn(`Could not register hotkey ${HOTKEY}`);
  }
}

ipcMain.on('audio-chunk', (_, data) => {
  if (currentState !== 'listening') return;
  const sampleRate = data?.sampleRate || 48000;
  const chunk = convertChunk(data?.payload);
  if (!chunk) return;
  audioChunks.push({ sampleRate, data: chunk });
});

ipcMain.on('retry', () => {
  resetToIdle();
});

ipcMain.on('preset-select', (_, preset) => {
  if (!preset || !lastPresets[preset]) return;
  selectedPreset = preset;
  if (currentState === 'done') {
    sendStateChange({
      state: 'done',
      transcript: finalTranscript,
      presets: lastPresets,
      selectedPreset,
      autoHideAfterMs: 1800
    });
  }
});

ipcMain.handle('save-markdown', (_, details = {}) => {
  const text = details.text || '';
  const preset = details.preset || 'capture';
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const fileName = `${preset}-${Date.now()}.md`;
  const target = path.join(REPORTS_DIR, fileName);
  const body = `# ${preset}

${text}
`;
  fs.writeFileSync(target, body, 'utf8');
  return { path: target };
});

app.whenReady().then(() => {
  createWindow();
  registerHotkey();
  resetToIdle();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
  cleanupStt();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
