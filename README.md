# Everlast-AI

Offline-first desktop voice tool for power users.

**Hotkey → Record → Transcribe → Enrich → Usable Output**

Built with **Electron + Next.js**, designed for deterministic workflows and fast capture of actionable artifacts.

---

## What this is

Everlast-AI is a minimalist desktop voice application that lets you press a hotkey, speak briefly, and immediately receive a **structured, usable result**.

Focus:
- Delivery over polish
- Deterministic behavior
- Offline-first operation
- No accounts, no cloud lock-in

Target users:
- Developers
- Tech leads
- Managers / knowledge workers

---

## Key Features

- Desktop app (Electron)
- Single global hotkey
- Offline-first speech-to-text
- Python STT sidecar (Vosk)
- Fixed enrichment presets (no prompt UI)
- Usable outputs (copy / markdown save)

---

## Quick Start

### Requirements

- Node.js **>= 18**
- npm
- Python **>= 3.9**

> Windows, macOS, Linux supported (Electron).

---

### Install

```bash
npm install
```

### Run

```bash
npm start
```

### Usage

- Start the app
- Press `Ctrl+Shift+Space`
- Speak

Observe lifecycle:
Idle → Listening → Processing → Done

Use the action palette:
- Copy
- Save Markdown
- Retry

### Enrichment Presets

The app intentionally supports exactly three presets:

**Meeting Note**
- Bullet points
- Decisions
- Action items

**Dev Ticket**
- Context
- Steps
- Expected result
- Acceptance criteria

**Executive Summary**
- 3–5 sentences
- Clear next step

Offline mode uses deterministic templates.
Online / LLM-based enrichment is optional and explicitly non-required.

### Architecture (High Level)

Renderer (Next.js)
↕ IPC
Main (Electron)
↕ stdin/stdout (JSON)
Python Sidecar (Vosk STT)

- No native Node bindings
- No node-gyp
- No Visual Studio dependency
- Clear process boundaries

### Offline-First Behavior

**Offline:**
- Local STT (Vosk)
- Template-based enrichment

**Online (optional):**
- Enhanced enrichment via LLM

There is no silent fail.
The app clearly signals whether it is running in offline or smart mode.

### Verification & Evidence

Operator-run smoke verification and GUI evidence are documented in:

reports/SYNTAX_ERROR_FIX_EVIDENCE.md

This includes:
- Bootstrap verification
- Idle-state confirmation
- Action palette visibility
- Screenshot evidence

### What this is NOT

- No login
- No cloud sync
- No multi-user system
- No UI playground
- No agent network
- No feature experimentation layer

### Status

- End-to-end flow implemented
- Electron bootstrap stable
- Evidence finalized
- Ready for review and submission

### License

See LICENSE.

### Philosophy

A stable system with a minimal interface is fixable.
A polished interface on an unstable system is not.

---

### Letzter Hinweis (wichtig)
Deine **Repo-Pack / Governance-README** bitte **nicht löschen**, sondern z. B. nach:

`docs/REPO_PACK.md`

Das hier ist jetzt die **Produkt-README**, die ein CTO erwartet.
