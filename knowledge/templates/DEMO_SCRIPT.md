# Demo Script (2–3 Minuten) — CTO‑tauglich

## 0) Intro (10s)
„Ich habe eine Desktop-App für Power-User gebaut: Hotkey drücken, kurz sprechen, sofort ein nutzbares Artefakt.“

## 1) Problem (20s)
„Viele arbeiten am Desktop und verlieren Zeit beim Nachdokumentieren: Notes, Tickets, Executive Updates.“

## 2) Lösung / Flow (30s)
„Capture → Transform → Deliver“:
- Hotkey öffnet Overlay
- Push-to-talk Aufnahme
- Transkription + LLM Enrichment
- Ergebnis als Markdown + Copy

## 3) Live Demo (60–90s)
- Hotkey drücken
- 30s sprechen (z.B. Mini-Meeting oder Bug)
- Preset wählen (z.B. Dev Ticket)
- Output zeigen:
  - Copy to Clipboard
  - Save as .md
  - History Entry

## 4) 2 Design-Entscheidungen (20–30s)
1) **Electron**: 72h-safe, OS-Integrationen (Hotkey/Clipboard) leicht.
2) **3 Presets, kein Dropdown-Friedhof**: Reviewable Prompt-Templates, klarer Nutzen.

## 5) Abschluss (10s)
„Das ist bewusst minimal, aber produktionsnah: der Kernflow sitzt, Erweiterungen wären trivial.“
