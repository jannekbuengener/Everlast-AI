# Execution Order — Everlast AI Challenge

This document defines the **single, canonical execution order** for the project.
It exists to prevent agent drift, parallel confusion, and scope leakage.

AGENTS.md is the bootloader.
This file explains **when** each agent is activated and **why**.

---

## 1. Claude Code — Session Lead (Start)

**Purpose:** Freeze scope and create execution clarity.

**Input:**
- Final concept decisions
- README (concept)
- Challenge constraints

**Processing:**
- Translate decisions into Definition of Done
- Define acceptance criteria
- Assign work to agents

**Output:**
- WORK ORDER
- Clear non-goals
- Agent handoff instructions

---

## 2. Gemini — Audit & Risk Reduction

**Purpose:** Remove hidden risk before implementation.

**Input:**
- WORK ORDER
- Challenge rules
- Offline-first requirements

**Processing:**
- Audit for scope leaks
- Identify offline / demo risks
- Classify MUST / SHOULD / NICE

**Output:**
- Risk list
- Stop-doing list
- Green-light conditions for execution

---

## 3. Codex — Execution (MVP Only)

**Purpose:** Build the minimal working product.

**Input:**
- WORK ORDER
- Gemini MUSTs

**Processing:**
- Implement only the core flow
- No speculative features
- No governance interpretation

**Output:**
- Running MVP
- Happy-path demo readiness
- Minimal local persistence

---

## 4. Jules — Repo, PR & Quality Gates

**Purpose:** Make the work reviewable and mergeable.

**Input:**
- Codex changes

**Processing:**
- Enforce repo hygiene
- Ensure checks pass
- Verify no secret leaks
- Evidence completeness

**Output:**
- PR-ready state
- Clean commit history
- Reviewer-safe repo

---

## 5. Claude Code — Finalization

**Purpose:** Prepare external-facing artifacts.

**Input:**
- Implemented MVP
- Audit notes

**Processing:**
- Finalize README
- Prepare demo script
- Document trade-offs

**Output:**
- Final README
- Demo narrative (2–3 min)
- Known limitations

---

## 6. Gordon — Docker / Ops Gate (Conditional)

**Purpose:** Prevent infrastructure mistakes.

**Rule:**
If Docker Desktop, docker compose, or container setup is touched:
→ Gordon MUST be consulted first.

**Output:**
- Go / No-Go
- Minimal fix or rollback guidance

---

## Invariant Rules

- No agent skips the order
- No parallel execution without Session Lead approval
- No Docker changes without Gordon
- No scope changes after Codex starts

---

Status: **Canonical**
