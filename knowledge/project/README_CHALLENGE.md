# 72h Challenge Guide — Voice Intelligence App

Dieses Projekt ist auf **schnelle Abgabe + CTO‑Review** optimiert.

Was du hier finden sollst:
- **1 Use Case**
- **1 Flow**
- **1 Ergebnis**
- saubere Entscheidungen statt Feature‑Zirkus

## Produkt-Claim
„Drücke Hotkey, sprich kurz, erhalte sofort ein nutzbares Artefakt (Notes/Ticket/Summary).“

## MVP Flow (einmal durchspielen)
1) App läuft im Hintergrund
2) Hotkey öffnet kleines Overlay (Push-to-talk)
3) Aufnahme → Transkription → Enrichment
4) Ergebnis erscheint + Buttons:
   - Copy
   - Save (.md)
   - Retry

## Presets (3 Stück, fix)
- Meeting Note
- Dev Ticket
- Executive Summary

## Setup-Prinzip
**Ein Setup-Weg.** Kein Konfig-Wiki, keine Alternativen.
- `npm install`
- `npm run dev` (für UI)
- `npm run desktop` (für Desktop build/run) — siehe DEMO_RUN.md

## Design-Entscheidungen (für Reviewer)
- Electron gewählt, weil: schnell, stabil, reviewbar, 72h-safe.
- API-first (STT/LLM), weil: zuverlässige Qualität unter Zeitdruck.
- Offline & Sync sind bewusst OUT OF SCOPE.

## Definition of Done
- Hotkey funktioniert
- 1 Recording verarbeitet sich end-to-end
- Output ist kopierbar + als Datei speicherbar
- README + Video sind verständlich


## Offline-first (Pflicht)
Muss auch ohne Internet funktionieren.

Definition (pragmatisch):
- **Transkription offline** über lokales Modell (z. B. Whisper lokal / Vosk).  
- **Enrichment offline** als „Degradation Mode“: strukturierte Templates + Heuristiken (kein LLM nötig).  
- Wenn Internet/API/Local‑LLM verfügbar ist: Upgrade auf „Smart Mode“ (LLM‑Enrichment).

Wichtig: Kein „stiller Fail“. Die App zeigt klar an, ob sie im Degradation‑ oder Smart‑Mode läuft.
