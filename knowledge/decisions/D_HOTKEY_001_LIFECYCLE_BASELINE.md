
# D-HOTKEY-001 — Hotkey & Lifecycle Baseline

Status: ACCEPTED  
Scope: Desktop Runtime (Electron + Next.js)  
Applies to: Voice Capture Lifecycle

## Decision
A **single global hotkey** controls the full voice lifecycle.

Lifecycle states:
Idle → Listening → Processing → Done → Auto-hide

## Behavior
- Hotkey press:
  - Idle → start listening
  - Listening → stop + process
- Visual feedback via subtle bottom-screen glow
- After Done:
  - 1–2s delay
  - Optional mini actions (Copy default, Save MD, Retry)
  - Full disappearance (non-intrusive)

## Rationale
- Zero UI friction
- Muscle-memory friendly
- No window management
- Matches power-user expectations

## Implementation Notes
- Electron `globalShortcut` (Main process)
- State machine owned by Main
- Renderer is purely visual/reactive

## Rejected Alternatives
- Multiple hotkeys (cognitive load)
- Persistent window (violates non-intrusive UX)

## Acceptance Criteria
- Works system-wide
- No stuck states
- App fully disappears after completion

## Non-Goals
- Tray menus
- Settings UI
- Custom hotkey editor
