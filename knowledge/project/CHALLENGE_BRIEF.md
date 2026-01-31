# Challenge Brief — Voice Intelligence App (72h)

Stand: 2026-01-30

## Ziel
Eine **Desktop-App für Power-User**, die Spracheingaben in **sofort nutzbare Arbeitsartefakte** verwandelt.

Der Kern ist nicht „Speech-to-Text“, sondern: **Capture → Transform → Deliver** in einem schnellen Desktop-Workflow.

## Zielgruppe
Primär:
- Developer / Tech-Leads
- Product / Engineering Manager
- IT-nahe Wissensarbeiter („Power-User“)

Kontext:
- Viel Zeit am Desktop
- Hoher Bedarf an „schnell sauber runtergeschrieben“
- Output wird direkt weiterverarbeitet (Tickets, Notes, Mails, Docs)

## Erfolgskriterium (2‑Minuten Review)
Ein Reviewer kann in <2 Minuten sehen:
1) **Hotkey drücken**
2) **30–90 Sek sprechen**
3) Ergebnis kommt als **sauberes Artefakt**:
   - sofort kopierbar (Clipboard)
   - gespeichert als Markdown
   - sichtbar in einer kleinen History

## Scope (IN) — MVP
- Desktop-App (Electron) mit Next.js UI
- Hotkey/Push-to-talk Overlay
- Voice-Pipeline:
  - Aufnahme
  - Transkription (API-based ist OK)
  - Enrichment (LLM) via **3 Presets**
- Outputs:
  - Copy-to-Clipboard
  - Save as `.md`
  - History (letzte 10)

### Presets (fix, kein Feature-Friedhof)
1) **Meeting Note**
   - Bulletpoints, Decisions, Actions (Owner + Due optional)
2) **Dev Ticket**
   - Context, Steps, Expected, Acceptance Criteria
3) **Executive Summary**
   - 3–5 Sätze + „Next Step“

## Out of Scope (OUT) — bewusst
- Kein Login, keine Cloud-Sync
- Keine Multi-User Accounts / Teams
- Kein Audio-Editing, keine Speaker-Diarization
- Kein „Agent Network“ im Produkt
- Keine Offline‑STT Pflicht (API-first, solange Datenschutz sauber dokumentiert ist)

## Nicht-funktionale Leitplanken
- „Fast path“: vom Hotkey bis Output <10s (bei API-Verfügbarkeit)
- Kein Secret im Repo (ENV / .env.local pattern)
- Deterministische Prompt-Templates pro Preset (reviewbar, änderbar)

## Abgabe
- Repo-Link oder ZIP
- README: Problem, Persona, Architektur, Setup in 3 Minuten, Trade-offs
- Video (2–3 Minuten): Hotkey → Output + 2 Design-Entscheidungen


## Offline-first (Pflicht)
Muss auch ohne Internet funktionieren.

Definition (pragmatisch):
- **Transkription offline** über lokales Modell (z. B. Whisper lokal / Vosk).  
- **Enrichment offline** als „Degradation Mode“: strukturierte Templates + Heuristiken (kein LLM nötig).  
- Wenn Internet/API/Local‑LLM verfügbar ist: Upgrade auf „Smart Mode“ (LLM‑Enrichment).

Wichtig: Kein „stiller Fail“. Die App zeigt klar an, ob sie im Degradation‑ oder Smart‑Mode läuft.
