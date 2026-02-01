# Voice Capture Overlay (72h Challenge)

A minimal desktop voice capture tool for power users.
Press a hotkey, speak your thoughts, get clean text directly where you work.

No avatars. No AI theater. No noise.

## Quick links
- Challenge brief: [README_CHALLENGE.md](README_CHALLENGE.md)
- Definition of Done: [EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md](EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md)
- Demo script: [DEMO_RUN.md](DEMO_RUN.md)
- Reviewer summary: [REVIEW_SUMMARY.md](REVIEW_SUMMARY.md)

---

## What this is

A quiet desktop overlay that captures spoken input and turns it into usable text.

- Built for focus
- Built for control
- Built for offline-first workflows

This is a tool, not an assistant.

---

## Core Flow

1. Hotkey pressed
2. Overlay appears (bottom of screen)
3. Shows `Listening` (once)
4. User speaks
5. Speech end detected automatically
6. Visual-only processing state
7. Overlay dims
8. Text appears in the active window

---

## Input

- Hotkey activated
- Default: Push-to-talk (hold)
- Optional: Toggle mode (tap start / tap stop)
- Audio input only
- No text-to-speech

---

## Overlay & Presence

- Only visible when active
- Minimal light-based presence
- No anthropomorphism
- No system chatter

Behavior:
- Start: shows `Listening` once
- Speaking: overlay retracts slightly
- End: visual processing → dim → disappear

---

## Output

- Text-only output
- Inserted directly into the active window
- No confirmation dialogs
- No forced previews

Optional:
- Hover overlay → pop-up
- Click to view & copy text

---

## Presets

Opt-in only.

- Meeting Notes
- Dev Ticket
- Executive Summary

Default: raw text.

---

## Offline-first

- Works without internet
- Local STT required
- Graceful degradation
- No silent failures

---

## Deliberately avoided

- Avatars
- Voice output
- Cloud dependency
- Always-on listening
- Feature bloat

---

## Demo

Press hotkey → speak → text appears.

---

## Status

Concept final.
Scope frozen.
Ready for implementation.
