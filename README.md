# JavaScript Applications — Tasks Platform

A lightweight, single-page application (SPA) that hosts a collection of small
JavaScript task apps (calculator, to-do list, etc.) under one shell page.
There are **no frameworks** and **no build step** — just plain HTML, CSS, and
ES Modules served by any static server.

---

## 📁 Project Structure

```
Tasks/
├── index.html      # The shell page (header, sidebar, hero, empty task area)
├── main.js         # Boots the app: UI events + kicks off the router & i18n
├── router.js       # The mini SPA router (hash-based, lazy-loaded pages)
├── i18n.js         # Translation engine (ar/en dictionaries, digit localization)
└── pages/
    └── task1.js    # One file per task. Exports: styles, render(), init()
    └── task2.js    # (add more as you build them)
```

---

## 🚀 How to Run

Any of these work:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .

# VS Code
# Use the "Live Server" extension
```

Then open `http://localhost:8000`.

---

## 🧠 How the Code Works (Deep but Simple)

### The Big Picture

Think of the app as a **TV set** with channels:

- `index.html` is the **TV** itself — frame, buttons, screen. It never changes.
- Each task in `pages/` is a **channel** — its own picture and sound.
- `router.js` is the **remote control** — it decides which channel to show
  on the screen based on what the user clicks.
- `main.js` is the **wiring** — connects the buttons (menu, theme, links) and
  tells the remote to start listening.

### Step-by-step Flow

1. **Page loads** → Browser reads `index.html`, paints the header, sidebar,
   hero (welcome) section, and an empty `<div id="task-content">`.
2. `index.html` loads `main.js` as a module.
3. `main.js`:
   - Wires the **menu button** (opens/closes the sidebar).
   - Wires the **theme toggle** (adds/removes `dark-mode` on `<body>`).
   - Catches clicks on every nav link and task card. Instead of letting the
     browser jump, it sets `window.location.hash = "task1"` (etc.).
   - Listens for two events that trigger the router:
     - `load` → first time the page opens.
     - `hashchange` → every time the URL hash changes (`#task1` → `#task2`).
4. The router reads the hash and decides what to show.

---

## 🧭 The Routing System (In Depth)

The router lives in `router.js`. It's ~100 lines and does four jobs:

### 1. The Route Map

```js
const routes = {
    task1: () => import('./pages/task1.js'),
    // task2: () => import('./pages/task2.js'),
};
```

Each value is a **thunk** (a function that returns a promise) instead of a
direct import. This is **lazy loading**: `pages/task2.js` is only downloaded
the first time the user actually visits `#task2`. Faster initial load, no
wasted bandwidth on pages the user never opens.

### 2. Reading the URL — `handleRoute()`

```js
const taskId = window.location.hash.slice(1); // "#task1" → "task1"
navigate(taskId || null);
```

### 3. The Navigate Function (the brain)

`navigate(taskId)` runs every time the route changes. It does this in order:

1. **Clean up the previous page** — calls the `cleanup` function the previous
   page returned (removes event listeners), strips its injected `<style>` tag,
   and empties `#task-content`. This prevents memory leaks and "ghost" events.
2. **If no taskId** → show the hero (welcome) section, clear the active link.
3. **If taskId not in `routes`** → show a styled "Page not found" card.
4. **Otherwise**:
   - Hide the hero, show the task area.
   - `await loader()` — dynamic `import()` fetches the page module on demand.
   - **Inject the page's CSS** via `injectStyles()`. Important trick: any
     `body { … }` rules inside the page are rewritten to `#task-content { … }`
     so they style the inner container, not the whole site shell.
   - **Inject the HTML** by calling the page's `render()` and assigning the
     returned string to `taskContent.innerHTML`.
   - **Wire the page** by calling `init()`. Whatever `init()` returns (usually
     a `cleanup` function) is stored in `currentCleanup` for next time.
   - Highlight the matching sidebar link with the `.active` class.

### 4. The Page Contract

Every file in `pages/` must export three things:

| Export   | Type     | Purpose                                                       |
| -------- | -------- | ------------------------------------------------------------- |
| `styles` | `string` | CSS for this page only. Auto-scoped to `#task-content`.       |
| `render` | function | Returns the page's HTML as a string.                          |
| `init`   | function | Runs after HTML is inserted. Attaches events. Returns cleanup.|

Look at `pages/task1.js` for a complete example.

### Visualising the Flow

```
User clicks "تطبيق 1"
        │
        ▼
main.js sets window.location.hash = "task1"
        │
        ▼
Browser fires "hashchange" event
        │
        ▼
router.handleRoute()  →  navigate("task1")
        │
        ├── cleanupPreviousTask()      (remove old listeners + styles)
        ├── routes.task1()             (dynamic import — first time only)
        ├── injectStyles(module.styles)
        ├── taskContent.innerHTML = module.render()
        ├── currentCleanup = module.init()
        └── updateActiveLink("task1")  (highlight sidebar item)
```

---

## ➕ Adding a New Task

1. Create `pages/taskN.js` exporting `styles`, `render()`, and `init()`.
2. Register it in `router.js`:
   ```js
   taskN: () => import('./pages/taskN.js'),
   ```
3. (Optional) Add a card on the hero in `index.html`. The sidebar link
   already exists for `task1`–`task22`.

That's it — no rebuild, no config.

---

## 🌐 Bilingual System (Arabic / English)

The app ships with a tiny custom i18n layer — no library, ~140 lines in
`i18n.js`. It handles strings, layout direction, and digit shapes.

### The i18n Module

`i18n.js` exposes a small public API:

| Export             | What it does                                                   |
| ------------------ | -------------------------------------------------------------- |
| `t(key)`           | Look up a translation in the active language's dictionary.    |
| `setLanguage(lng)` | Switches language, persists the choice, notifies listeners.   |
| `toggleLanguage()` | Convenience flip between `ar` ↔ `en`.                         |
| `onLanguageChange(fn)` | Subscribe to language changes (router uses this).         |
| `localizeDigits(s)`| Converts `123` → `١٢٣` when Arabic is active, no-op otherwise.|
| `initI18n()`       | Applies the saved language on boot.                           |

Translations live in a single `dict` object keyed by language, then by string ID:

```js
const dict = {
    ar: { 'app.title': 'تطبيقات الجافاسكريبت', /* … */ },
    en: { 'app.title': 'JavaScript Applications', /* … */ },
};
```

### Language Toggle

The header has an **EN / ع** button. Clicking it calls `toggleLanguage()`,
which:

1. Updates `currentLang` and writes it to `localStorage` (`app-lang`).
2. Sets `<html lang>` and `<html dir>` (so CSS direction switches).
3. Re-fills every DOM node marked with `data-i18n`, `data-i18n-aria`, or
   `data-i18n-title`.
4. Notifies subscribers — the **router** is one of them, and re-mounts the
   currently open task so its `render()` runs again in the new language.

To avoid a flash of mis-direction on first paint, an inline script in
`<head>` reads `localStorage` and sets `<html dir>` *before* the stylesheet
is applied:

```html
<script>
    (function () {
        var lang = localStorage.getItem('app-lang');
        if (lang === 'en') {
            document.documentElement.lang = 'en';
            document.documentElement.dir  = 'ltr';
        }
    })();
</script>
```

### Digit Localization (١٢٣ vs 123)

Any element marked with `data-num="N"` gets its `textContent` replaced on
every language change:

```html
<span data-num="5">5</span>
```

- In English (`ltr`) → displays `5`.
- In Arabic (`rtl`) → displays `٥` (Arabic-Indic numeral).

The sidebar numbers (1–22) use this so they look natural in both languages.
You can apply the same pattern to any page that shows numeric labels.

### Direction-Aware Sidebar

Instead of hardcoding `right: 0`, the sidebar uses CSS attribute selectors
on `<html>` so it slides in from the natural side per language:

```css
/* RTL (Arabic): sidebar on the right, slides in from the right */
html[dir="rtl"] nav { right: 0; transform: translateX(100%); }

/* LTR (English): sidebar on the left, slides in from the left */
html[dir="ltr"] nav { left: 0;  transform: translateX(-100%); }

nav.visible { transform: translateX(0); }
```

Because `<html dir>` is updated the moment the language flips, the sidebar
"jumps sides" automatically.

### Adding a Translatable Page

Inside `pages/taskN.js`, import `t` and use it in `render()`:

```js
import { t } from '../i18n.js';

export function render() {
    return `<h1>${t('taskN.title')}</h1>`;
}
```

Then add the keys to both `ar` and `en` dictionaries in `i18n.js`. The
router will automatically re-call `render()` whenever the user toggles
language, so you don't need to subscribe manually.
