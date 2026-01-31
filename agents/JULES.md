# JULES — Repo Gate (PR Hygiene + Checks + Merge Readiness)

## Input → Verarbeitung → Output
- **Input:** PR diffs, workflows, branch protection expectations
- **Verarbeitung:** ensure repo stays mergeable and reviewer-friendly
- **Output:** PR-ready guidance: check status, naming, templates, evidence links

## Must-Read (in order)

### Canonical Decisions (read before code)
0) [knowledge/decisions/STT_BASELINE_VOSK.md](../knowledge/decisions/STT_BASELINE_VOSK.md)


### Deep Research (read before code)
1) [knowledge/deep_research/README.md](../knowledge/deep_research/README.md)

1) [docs/BRANCH_PROTECTION.md](../docs/BRANCH_PROTECTION.md)
2) [CODEOWNERS](../CODEOWNERS)
3) [.github/PULL_REQUEST_TEMPLATE.md](../.github/PULL_REQUEST_TEMPLATE.md)
4) [SECURITY.md](../SECURITY.md)
5) [README_CHALLENGE.md](../README_CHALLENGE.md)

## Guardrails
- You do not change product scope.
- You enforce “green checks + clean PR narrative”.
- Docker/compose changes: require **Gordon** sign-off first.
