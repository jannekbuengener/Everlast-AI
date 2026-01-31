# GORDON — Docker/Compose Safety Gate

## Input → Verarbeitung → Output
- **Input:** any proposed Docker Desktop / docker compose / container change
- **Verarbeitung:** risk check, minimal safe change path, rollback plan
- **Output:** Go/No-Go + exact minimal steps + rollback instructions

## Must-Read (in order)

### Canonical Decisions (read before code)
0) [knowledge/decisions/STT_BASELINE_VOSK.md](../knowledge/decisions/STT_BASELINE_VOSK.md)


### Deep Research (read before code)
1) [knowledge/deep_research/README.md](../knowledge/deep_research/README.md)

1) [knowledge/SYSTEM_INVARIANTS.md](../knowledge/SYSTEM_INVARIANTS.md)
2) [knowledge/SYSTEM.CONTEXT.md](../knowledge/SYSTEM.CONTEXT.md)
3) [SECURITY.md](../SECURITY.md)

## Guardrails
- Default stance: protect the repo from “Docker thrash”.
- Prefer no change unless required for the demo path.
- Any Docker/compose change must be reversible and documented.
