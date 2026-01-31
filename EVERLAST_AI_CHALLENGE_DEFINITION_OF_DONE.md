# Everlast AI – 72h Challenge  
## Verbindliche Kriterien & Definition of Done

Dieses Dokument enthält **alle verpflichtenden Anforderungen**, die aus der Challenge-E-Mail hervorgehen.  
Es dient als **Checkliste / Definition of Done** für Umsetzung und Review.

---

## 1. Ziel der Challenge

Entwicklung einer **Desktop Voice Intelligence App**, die:

- Spracheingaben aufnimmt  
- diese **transkribiert**  
- und anschließend **KI-gestützt verarbeitet ("Enrichment")**  
- mit einem **direkt nutzbaren Output**

---

## 2. Technologischer Rahmen (Pflicht)

- **Frontend-Basis:** Next.js  
- **Desktop-Runtime:** Desktop-App via z. B. Electron oder Tauri  
- **Voice-to-Text:** frei wählbar (lokal oder API)  
- **LLM / KI-Verarbeitung:** frei wählbar (lokal oder API)

Keine Vorgaben zu Modellen, Anbietern oder Cloud.

---

## 3. Funktionale Mindestanforderungen

Die App muss:

- Als **eigenständige Desktop-App** laufen  
- Eine klare Pipeline besitzen:  
  **Aufnahme → Transkription → Enrichment → Output**
- **Per Hotkey aktivierbar** sein  
- Einen klaren, reproduzierbaren User-Flow haben:
  - App läuft
  - Hotkey drücken
  - sprechen
  - Ergebnis erhalten

---

## 4. Enrichment (bewusst offen)

Was „Enrichment“ bedeutet, ist nicht festgelegt.

Beispiele (nicht exklusiv):
- Strukturierung
- Zusammenfassung
- Kontext-Anpassung
- Formatierung

Bewertet wird **Entscheidungsqualität**, nicht Feature-Menge.

---

## 5. Offline-Fähigkeit

Nicht explizit gefordert, aber **zulässig**.

Empfohlen (und im Projekt umgesetzt):
- Offline-first mit Degradation Mode
- Kein stilles Fail
- Klarer Status (Offline vs. Smart)

---

## 6. Abgabeform (Pflicht)

Einzureichen sind:

### Code
- GitHub- oder GitLab-Repository  
  **oder**
- ZIP-Archiv

### README
Muss enthalten:
- kurze Problembeschreibung
- Architektur-Überblick
- Setup-Anleitung
- Design- und Architektur-Entscheidungen

### Video (Pflicht)
- 2–3 Minuten
- kurze persönliche Vorstellung
- Projektvorstellung / Demo

---

## 7. Zeitrahmen

- **72 Stunden** Bearbeitungszeit
- Fester Abgabetermin laut Mail

---

## 8. Bewertung & Outcome

- Auswahl der **Top 5**
- **Gespräch mit dem CTO**
- Ziel: **Job-Evaluation**, kein reiner Fun-Contest

---

## 9. Explizit NICHT gefordert

- Kein Login
- Keine Cloud-Skalierung
- Keine Multi-User-Funktion
- Keine perfekte UI
- Keine Performance-Benchmarks
- Keine Security-Zertifizierungen

---

## 10. Definition of Done (Kurzform)

Die Challenge ist erfüllt, wenn:

- Desktop-App mit Next.js ✔  
- Voice → Text → Enrichment ✔  
- Hotkey-basierter Flow ✔  
- Nutzbarer Output ✔  
- README vollständig ✔  
- 2–3 Min Video vorhanden ✔  

Alles Weitere ist Differenzierung, nicht Pflicht.

---

Stand: verbindlich nach Challenge-E-Mail
