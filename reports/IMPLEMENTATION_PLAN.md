# Implementation Plan

## Architecture (Main / Renderer roles)
- Main process owns the single global hotkey, the finite state machine (Idle → Listening → Processing → Done → Auto-hide), and IPC coordination with renderer and STT.
- Renderer process handles the Web Audio-based microphone capture and streams raw PCM chunks to the main process via IPC when hotkey transitions to Listening.
- Main receives PCM chunks, batches them, and feeds them into the Vosk STT worker (offline engine) before emitting transcript events back to the renderer.
- Renderer overlays a subtle glow at the bottom during capture to signal Listening and fades at Done; it also hosts the mini palette (Copy default/Save MD/Retry) once processing ends.
- State transitions are driven by main: Listening starts capture, Processing waits for Vosk, Done surfaces UI choices, Auto-hide clears the overlay after the palette delay.
- STT is offline-only by default; the Vosk model is bundled/pinned with Windows compatibility notes and returns plain text results for enrichment.
- Enrichment lives in the main process downstream of STT, where three presets (Meeting Note, Dev Ticket, Executive Summary) attach template headers/body heuristics before output.
- Output service copies the enriched text to the clipboard by default, while also allowing an explicit Save Markdown command that writes to a preconfigured local path (no cloud).
- Error handling surfaces a clear overlay status for Offline vs Smart mode (Smart optional) with explicit STT error messaging and no silent fail; fallback leaves app in Idle.
- IPC errors or Vosk failures trigger the error state, log the reason, and reset the state machine so retries can happen.
- Hotkey events and state machine notifications mirror each other so renderer visuals always align with main transitions.
- Data flow summary: Hotkey → Renderer WebAudio PCM → IPC stream → Main STT (Vosk) → Enrichment (preset templates) → Output (Clipboard + Save MD buttons).

## Error behavior
- The UI exposes explicit status text/color for Offline, Listening, Processing, Done, and STT failure (with a one-line reason); no silent failure or stuck states.
- If Vosk fails to initialize or decode, the main process returns to Idle, logs the error, and overlays an  STT unavailable state until retry.
- Any IPC disruption or renderer capture refusal surfaces a failure badge and keeps the app idle to allow the user to retry via the hotkey.

## Non-goals
- Tray icons, menus, or persistent windows beyond a transient overlay.
- Hotkey customization UI or per-user remapping; the single global hotkey is fixed for the baseline.
- Cloud sync, login flows, or any feature requiring online services beyond optional Smart mode that must be explicitly toggled.
- Custom prompt editors or dynamic preset creation; only the three offline templates are supported.
