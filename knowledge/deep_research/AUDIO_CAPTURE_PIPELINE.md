# Deep Research — Audio Capture Pipeline (Electron)

Goal: Capture mic audio reliably and feed STT.

## Two viable capture strategies

### Strategy A — Renderer capture (Web APIs)
Use `navigator.mediaDevices.getUserMedia({ audio: true })` + `MediaRecorder` in the renderer.
- Lowest friction (no native deps).
- Export a blob, convert to PCM/WAV if needed for the chosen STT backend.

Notes:
- Some STT engines want 16kHz mono PCM. You may need a conversion step.

### Strategy B — Main process capture (Node/native)
Use a Node audio library (PortAudio bindings etc.) to capture PCM directly.
- More control; less browser-media variability.
- Higher risk for Windows native builds and packaging.

## Practical recommendation (for this challenge)
Start with Strategy A (renderer). It is the fastest path to “record → file → transcribe”.
If the chosen STT requires strict PCM input, do a minimal conversion step (prefer a tiny JS/WASM converter over bundling ffmpeg).

## Acceptance checklist
- Press hotkey → audio starts immediately.
- Release hotkey → audio stops and produces a file/blob.
- Recording works while another app is focused (overlay still click-through).
- “Retry” works by re-running STT against the saved audio.

