# Deep Research — Hotkey + Overlay Window in Electron

Goal: **Non-intrusive** desktop UX: hotkey triggers recording + subtle “glow” overlay at bottom of screen.

## Global Hotkey (system-wide)
Electron provides `globalShortcut` to register global shortcuts (works without focus).  
Source: Electron docs for globalShortcut.  
- https://www.electronjs.org/docs/api/global-shortcut (mirrors exist; API is stable)

Key points:
- Register only after `app.whenReady()`.
- Provide a clean unregister on quit.

## Overlay window mechanics
Use a frameless, transparent `BrowserWindow` as an always-on-top overlay.

### Click-through behavior (don’t break the user’s workflow)
Electron supports click-through overlays via `win.setIgnoreMouseEvents(true[, { forward }])`.  
Sources:
- BrowserWindow docs: https://www.electronjs.org/docs/api/browser-window (setIgnoreMouseEvents)
- Frameless/Click-through docs + Windows forwarding: https://www.electronjs.org/docs/api/frameless-window
- Electron issue describing changes/regressions and the need for setIgnoreMouseEvents / forwarding: https://github.com/electron/electron/issues/23042

Practical approach:
- While “Idle/Listening/Processing”: window is click-through (`setIgnoreMouseEvents(true, { forward: true })` on Windows).
- When “Done” and mini-palette appears: temporarily make it interactive (`setIgnoreMouseEvents(false)`), then revert to click-through and hide after 1–2s.

## Risks & mitigations
- Transparent + click-through behavior differs by Electron version/platform → keep the overlay simple, Windows-first.
- Avoid focus stealing: consider `win.setFocusable(false)` (Windows) when click-through.

## Acceptance checklist
- Hotkey works from any app.
- Overlay never blocks normal clicking unless “Done palette” is visible.
- Overlay disappears entirely after the post-delay.

