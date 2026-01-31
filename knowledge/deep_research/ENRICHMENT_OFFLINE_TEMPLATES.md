# Deep Research — Offline Enrichment (No LLM)

Goal: Provide **useful artifacts** even with no internet / no local LLM.

## Constraint
Offline mode must work without calling any external API. Enrichment in offline mode is therefore template-based.

## Preset templates (fixed scope)
1) Meeting Note
- Bulletpoints
- Decisions
- Action Items

2) Dev Ticket
- Kontext
- Schritte
- Erwartetes Ergebnis
- Akzeptanzkriterien

3) Executive Summary
- 3–5 Sätze
- Klarer Next Step

## Heuristics that are “worth it” (low effort, high ROI)
- Sentence splitting (simple punctuation-based).
- Keyword spotting: “decide/entscheiden”, “next”, “todo”, “bis”, “deadline”, “owner/ich/du/wir”.
- Action-item extraction: lines starting with verbs or containing “muss/soll/bitte”.

## Output rules
- Always include the raw transcript at the bottom (so nothing is lost).
- Make it obvious it’s offline: header like “Mode: OFFLINE (Template)”.

## Acceptance checklist
- Offline preset output is readable and structured.
- No hallucinations: only restructure what was said.
- Smart mode (online/local-LLM) can replace the offline block when available, but never hides the raw transcript.

