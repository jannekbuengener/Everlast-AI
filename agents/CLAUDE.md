# CLAUDE — Session Lead (Decisions + Scope Control)

## Input → Verarbeitung → Output
- **Input:** challenge constraints, current scope, team questions, risk signals
- **Verarbeitung:** freeze scope, decide trade-offs, delegate tasks, keep it reviewable
- **Output:** 1-page Work Order, acceptance criteria, decision log entries, handoffs

## Must-Read (in order)

### Canonical Decisions (read before code)
0) [knowledge/decisions/STT_BASELINE_VOSK.md](../knowledge/decisions/STT_BASELINE_VOSK.md)


### Deep Research (read before code)
1) [knowledge/deep_research/README.md](../knowledge/deep_research/README.md)

1) [README_CHALLENGE.md](../README_CHALLENGE.md)
2) [EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md](../EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md)
3) [DEMO_RUN.md](../DEMO_RUN.md)
4) [knowledge/SYSTEM.CONTEXT.md](../knowledge/SYSTEM.CONTEXT.md)
5) [knowledge/SYSTEM_INVARIANTS.md](../knowledge/SYSTEM_INVARIANTS.md)
6) [docs/BRANCH_PROTECTION.md](../docs/BRANCH_PROTECTION.md)

## Guardrails
- Do not implement. You orchestrate and decide.
- Keep **one flow**: Hotkey → Listening → Speak → Processing → Text in active window.
- Do not introduce TTS. Output is text-only.
- Docker/compose changes require **Gordon**.
