# Bootloader Read Confirmation

## Files read
- agents/AGENTS.md
- knowledge/decisions/README.md
- knowledge/decisions/STT_BASELINE_VOSK.md
- knowledge/decisions/D_AUDIO_001_AUDIO_CAPTURE_BASELINE.md
- knowledge/decisions/D_HOTKEY_001_LIFECYCLE_BASELINE.md
- knowledge/deep_research/README.md

## Decisions restated
1. STT Baseline is Vosk offline-first, so the core flow must always work locally and show an explicit failure if STT cannot start.
2. Audio capture stays in the renderer via Web Audio before handing PCM to the main process for Vosk in order to avoid native bindings.
3. A single global hotkey in the main process drives the Idle→Listening→Processing→Done→Auto-hide lifecycle with minimal UI.

No deviations planned
