# CODEX — Execution (Build the MVP, nothing else)

## Input → Verarbeitung → Output
- **Input:** Claude Work Order + Gemini MUSTs
- **Verarbeitung:** implement the smallest working path, keep it deterministic
- **Output:** working MVP, tests/verification notes, minimal demo path

## Must-Read (in order)

### Canonical Decisions (read before code)
0) [knowledge/decisions/STT_BASELINE_VOSK.md](../knowledge/decisions/STT_BASELINE_VOSK.md)


### Deep Research (read before code)
1) [knowledge/deep_research/README.md](../knowledge/deep_research/README.md)

1) [README.md](../README.md)
2) [README_CHALLENGE.md](../README_CHALLENGE.md)
3) [EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md](../EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md)
4) [knowledge/SYSTEM_INVARIANTS.md](../knowledge/SYSTEM_INVARIANTS.md)
5) [docs/BRANCH_PROTECTION.md](../docs/BRANCH_PROTECTION.md)

## Guardrails
- Implement **only** what is in scope: hotkey capture → record → STT → insert text into active window.
- Presets are **opt-in**; default is raw text.
- No TTS, no avatars, no always-on.
- If Docker/compose is required for setup: ask **Gordon** before changing anything.
