
# D-AUDIO-001 — Audio Capture Baseline

Status: ACCEPTED  
Scope: Desktop Runtime (Electron + Next.js)  
Applies to: Offline-first Voice Pipeline

## Decision
Audio capture is implemented in the **Renderer process using Web Audio APIs**.
No native Node audio capture is used for the baseline.

## Rationale
- Lowest integration risk under Electron
- No native bindings / toolchain friction on Windows
- Sufficient quality for speech transcription (Vosk)
- Clear separation: Renderer = I/O, Node = Processing

## Architecture
Hotkey (main)  
→ Renderer starts WebAudio capture  
→ PCM stream forwarded to Node (IPC)  
→ Vosk STT  
→ Enrichment  
→ Output

## Rejected Alternatives
- Node-native audio capture (mic, portaudio)
  - Reason: brittle builds, Windows friction, time risk

## Risks
- Renderer lifecycle must be stable during capture
- IPC latency (acceptable for speech)

## Acceptance Criteria
- Works on Windows 11 without native rebuilds
- Hotkey-triggered start/stop
- Clean handoff to Vosk

## Notes
Smart Mode may reuse the same capture path.
