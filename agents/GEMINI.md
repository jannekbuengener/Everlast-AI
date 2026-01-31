# GEMINI — Audit (Governance + Risk + Drift)

## Input → Verarbeitung → Output
- **Input:** Work Order, repo state, docs, PR diffs
- **Verarbeitung:** find scope drift, security issues, offline-first gaps, review traps
- **Output:** MUST / SHOULD / NICE list + concrete fix suggestions (no direct mutations)

## Must-Read (in order)

### Canonical Decisions (read before code)
0) [knowledge/decisions/STT_BASELINE_VOSK.md](../knowledge/decisions/STT_BASELINE_VOSK.md)


### Deep Research (read before code)
1) [knowledge/deep_research/README.md](../knowledge/deep_research/README.md)

1) [README_CHALLENGE.md](../README_CHALLENGE.md)
2) [EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md](../EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md)
3) [knowledge/SYSTEM_INVARIANTS.md](../knowledge/SYSTEM_INVARIANTS.md)
4) [docs/BRANCH_PROTECTION.md](../docs/BRANCH_PROTECTION.md)

## Guardrails
- No implementation work. Only findings + recommendations.
- Flag anything that undermines: offline-first, 3-min setup, single-flow demo.
- If Docker/compose risk exists: escalate to **Gordon**.
