# Decision — STT Baseline: Vosk (Offline-First)

Date: 2026-01-31  
Status: **ACCEPTED (canonical)**  
Scope: Everlast desktop app voice pipeline (Hotkey → Record → STT → Enrichment → Output)

## Decision "D-STT-001"
We use **Vosk** as the **offline baseline** speech-to-text engine.

- Offline mode must work without internet.
- If STT cannot start, the app must show an explicit **STT error state** (no silent fail).
- "Smart Mode" (online STT/LLM) is optional and must be an explicit user choice.

## Why (rationale)
- Works fully offline on CPU (Windows-first), aligns with the project’s "offline-first" intent.
- Predictable latency and deployability for a 72h challenge.
- Keeps the core flow deterministic; avoids GPU assumptions and heavy runtime complexity.

## Acceptance criteria
- From hotkey press to transcript created: **works offline** on Windows 11.
- A transcript is produced as plain text and fed into the 3 fixed presets.
- Clear status transitions: Idle → Listening → Processing → Done.
- Failure mode is explicit: "STT unavailable" with a one-line reason.

## Risks / gotchas
- Node bindings / native build friction on Windows (toolchain variance).
- Model size and language quality depend on the chosen Vosk model.

## Mitigations
- Pin a known-good Vosk package + model in docs.
- Provide a one-command “verify STT” check in the runbook.
- Keep the capture pipeline modular so engine swap is isolated.

## Fallback plan (controlled)
If Vosk build/install is blocked on a target machine:
1) Use a prebuilt Vosk bundle (documented), OR
2) Enable Smart Mode and route STT via a hosted API **only with explicit user toggle**.

## Implications for agents
- Do not propose alternative STT engines unless a build-blocker is proven.
- All implementation decisions must reference this file before changing STT scope.

