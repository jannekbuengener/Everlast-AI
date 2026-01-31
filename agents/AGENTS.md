# AGENTS — Bootloader (Single Source of Truth)

This file is the **only boot entry**. Every agent starts here.

## Boot Sequence (mandatory)
1) Read this file
2) Open your role file
3) Read the linked documents (in order)
4) Act strictly inside your role

## Canonical Decisions (mandatory before code)
- [knowledge/decisions/README.md](../knowledge/decisions/README.md)
- [knowledge/decisions/STT_BASELINE_VOSK.md](../knowledge/decisions/STT_BASELINE_VOSK.md)

## Deep Research (mandatory before code)
- [knowledge/deep_research/README.md](../knowledge/deep_research/README.md)


## Roles (entry points)
- **Claude Code (Session Lead / Governance / Decisions):** [agents/CLAUDE.md](CLAUDE.md)
- **Codex (Execution / Implementation):** [agents/CODEX.md](CODEX.md)
- **Gemini (Audit / Review / Compliance):** [agents/GEMINI.md](GEMINI.md)
- **Jules (Repo Gate / PR Hygiene / CI):** [agents/JULES.md](JULES.md)
- **Gordon (Docker/Compose Safety Gate):** [agents/GORDON.md](GORDON.md)
- **Canonical execution order:** D:\Dev\Workspaces\Repos\Everlast-AI\EXECUTION_ORDER.md


## Global Guardrails (apply to everyone)
- **One flow, one result.** No feature sprawl.
- **Offline-first is mandatory.** Degradation mode allowed, silent fail forbidden.
- **No secrets in repo.**
- **If Docker Desktop / docker compose is touched:** stop and ask **Gordon** first.
