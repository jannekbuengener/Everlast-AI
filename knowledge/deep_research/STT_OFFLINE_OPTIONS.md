# Deep Research — Offline STT Options (Windows-first)

Goal: pick **one** offline transcription path that is predictable inside an Electron + Next.js desktop app.

## Candidates

### Option A — Vosk (fast, light, simple)
- Offline speech recognition toolkit with small (~50MB) models and streaming/low-latency API. Supports many languages incl. German.  
  Sources: Vosk API repo + npm wrapper.  
  - Repo: https://github.com/alphacep/vosk-api  
  - npm (FFI-NAPI wrapper): https://www.npmjs.com/package/vosk

**Pros**
- Small-ish models, low latency, CPU friendly.
- Node integration exists (vosk npm), so Electron can run it without a Python sidecar.

**Cons**
- Accuracy is generally below Whisper on messy audio.
- The npm wrapper is older (published years ago) → expect occasional native-build friction on Windows.

### Option B — whisper.cpp (better accuracy, heavier)
- C/C++ port of OpenAI Whisper with model-size/memory table and quantization support.  
  Source: whisper.cpp repo.  
  - Repo: https://github.com/ggerganov/whisper.cpp

**Pros**
- Strong transcription quality vs. traditional offline engines.
- Quantization reduces memory/disk requirements; supports multiple model sizes.

**Cons**
- More moving parts: native build + model management.
- CPU-only inference can be slow on mid-range machines, especially with bigger models.

## Practical recommendation (for this challenge)
**Baseline Offline Mode:** Vosk (lowest risk to ship in 72h).  
**Optional “Quality Mode”:** whisper.cpp behind a feature flag, only if time permits.

Reason: the challenge is scored on end-to-end delivery. Vosk gets you deterministic offline transcription quickly; whisper.cpp is the upgrade path.

## Packaging notes (repo-level)
- Do **not** commit models into git. Download on first run or provide a manual “models/” folder.
- Always display which mode is active: `OFFLINE (Vosk)` vs `SMART/QUALITY (Whisper.cpp or API)`.

## Acceptance checklist
- Works without internet.
- Produces text within seconds for a 5–15s utterance.
- No silent fail: on error, show “STT failed” and keep raw audio file for retry.

