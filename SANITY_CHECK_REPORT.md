# Sanity Check Report

Date: 2026-01-31

## 1) Link integrity
- Markdown links checked: 32
- Broken local links: 0
- None found.

## 2) Duplicated doc names (FYI)
This repo contains multiple files with identical names in different folders. This is normal for templates, but **reviewers should be guided to the root docs**.

Most relevant duplicates:

- **README.md**:
  - README.md
  - .github/README.md
  - knowledge/agent_trust/ledger/README.md
  - knowledge/logs/sessions/README.md

- **README_CHALLENGE.md**:
  - README_CHALLENGE.md
  - knowledge/project/README_CHALLENGE.md

## 3) Reviewer-clean entry points (recommended)
- Primary entry: **README.md** (now includes quick links)
- Challenge specifics: **README_CHALLENGE.md**
- Demo narrative: **DEMO_RUN.md**
- Review summary: **REVIEW_SUMMARY.md**

## 4) Agents structure (implemented)
- Bootloader remains **agents/AGENTS.md** only.
- Each role file contains:
  - Input → Verarbeitung → Output
  - Must-Read links (repo-relative)
  - Guardrails
- Added roles: **JULES** (repo gate) and **GORDON** (Docker/Compose safety gate)

## 5) Docker/Compose safeguard (canonical behavior)
- Any Docker Desktop / docker compose changes must be routed through **GORDON** first.

