# Demo / Run Guide — Voice Intelligence App

Ein Weg. Kein Konfig-Zirkus.

## Voraussetzungen
- Node.js LTS
- (Optional) API Keys für STT/LLM als ENV (siehe .env.example falls vorhanden)

## Lokal starten (Dev)
1) Dependencies
   - `npm install`
2) App
   - `npm run dev`

## Demo-Flow
1) App läuft
2) Hotkey drücken (Overlay)
3) 30–90 Sek sprechen
4) Preset wählen
5) Output:
   - Copy-to-Clipboard
   - Save as .md
   - History sichtbar

> Wenn API Keys fehlen: App zeigt einen klaren Hinweis (keine stillen Fails).


## Offline/No-Key Mode
- App muss auch ohne Internet laufen.
- Wenn keine Keys/kein Internet: **Degradation Mode** (offline STT + Template-Enrichment).
- Wenn Keys/Internet: **Smart Mode** (LLM Enrichment).
