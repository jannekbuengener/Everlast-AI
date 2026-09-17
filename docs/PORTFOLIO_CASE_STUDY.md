# Everlast-AI — Portfolio Case Study

## Ausgangsproblem und Ziel

Eine 72-Stunden-Challenge verlangte eine Desktop Voice Intelligence App: Sprache aufnehmen, transkribieren, per KI oder LLM weiterverarbeiten und ein nutzbares Ergebnis ausgeben. Vorgesehen waren eine Desktop-Runtime, Next.js als Frontend-Basis, Hotkey-Bedienung, README und ein kurzes Demo-Video. Enrichment war bewusst offen definiert; die [Definition of Done](../EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md) nennt Entscheidungsqualität als Bewertungspunkt.

Die Produktfrage lautete deshalb: Welcher kleine Voice-Flow ist unter enger Zeitgrenze verständlich, kontrollierbar und überprüfbar?

## Meine Rolle und AI-assisted Delivery

Mein Beitrag ist Product Scoping: Anforderungen aus der Challenge in einen Kern-Flow übersetzen, Nicht-Ziele festhalten, technische Grenzen benennen und Review-/Demo-Kriterien vorbereiten. Die Repository-Arbeit ist AI-assisted. Dieser Case beansprucht weder alleinige manuelle Autorschaft des Codes noch eine bewiesene vollständige Challenge-Abgabe.

## Zerlegung und Trade-offs

```text
Hotkey → Aufnahme → lokale Transkription → optionales Enrichment → nutzbarer Text
```

- **Interaktion vor Effekt:** Die [Review-Entscheidung](../REVIEW_SUMMARY.md) priorisiert ein stilles Overlay und Text im Arbeitskontext. Text-to-Speech, Avatare und Always-on wurden ausgeschlossen.
- **Offline-first als Produktentscheidung:** Die [Challenge-Kriterien](../EVERLAST_AI_CHALLENGE_DEFINITION_OF_DONE.md) erlaubten lokale oder API-basierte STT/LLM-Lösungen. Die [STT-Entscheidung](../knowledge/decisions/STT_BASELINE_VOSK.md) wählt Vosk lokal und verlangt sichtbare Fehler statt stillen Ausfalls. Ein tatsächlich durchlaufener Offline-Flow ist damit noch nicht bewiesen.
- **Kleiner Ergebnisraum:** Dokumente planen Rohtext als Standard und drei optionale Format-Presets. Das begrenzt Bedienung und Demo-Scope. [Review](../REVIEW_SUMMARY.md), [Challenge-README](../README_CHALLENGE.md).

## Was die Repository-Evidence trägt

Auf dem Default-Branch `master` liegt [Electron-Main-Code](../src/main/main.js) für Hotkey, Zustände, STT-Worker-Aufruf und Preset-Templates. Die dafür referenzierten Renderer-, Preload- und Worker-Dateien sowie ein Paketmanifest sind im versionierten Branch-Baum nicht vorhanden. Ein startbarer End-to-End-Pfad lässt sich daraus nicht ableiten. [Implementierungsplan](../reports/IMPLEMENTATION_PLAN.md) und [Review](../REVIEW_SUMMARY.md) sind Design- und Planungsbelege.

Der divergierte Branch [`main`](https://github.com/jannekbuengener/Everlast-AI/tree/main) beschreibt in seiner README einen weitergehenden Stand. Sein [Smoke-Bericht](https://github.com/jannekbuengener/Everlast-AI/blob/main/reports/SYNTAX_ERROR_FIX_EVIDENCE.md) dokumentiert einen Operator-Start, Idle-Zustand und eine sichtbare Action-Palette; der [Screenshot](https://github.com/jannekbuengener/Everlast-AI/blob/main/reports/evidence/idle_state_ui.png) zeigt nur diese GUI-Evidence. Er belegt weder Aufnahme, Vosk-Transkription, Enrichment, Einfügen ins aktive Fenster noch das geforderte Demo-Video. `master` und `main` sind in der GitHub-Historie divergiert; ihre Aussagen dürfen nicht zu einem einzigen „shipped“-Status addiert werden.

Bei der Portfolio-Prüfung am 17. September 2026 bestand `node --check src/main/main.js`. Dieser Syntaxcheck ist kein Runtime-Test.

## Beruflicher Beweiswert und Grenze

Dieser Case demonstriert Requirement Extraction, Product Discovery, Scope Control, Voice-UX-Priorisierung, Offline-first-Denken, Definition of Done und kritischen Umgang mit Evidence. Er behauptet keine fertig ausgelieferte Voice-App, keine vollständige Challenge-Erfüllung und keine klassische manuelle Implementierungsleistung.

Die nächste sinnvolle Stufe ist ein separater technischer Abgleich der Branches mit einem reproduzierbaren Hotkey-zu-Output-Test und nachweisbarer Challenge-Abgabe. Eine Historienzusammenführung oder Änderung des Default-Branches gehört nicht zu diesem Portfolio-Case.
