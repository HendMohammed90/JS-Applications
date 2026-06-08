import { onLanguageChange } from './i18n.js';

// import all pages using (lazy loading).
const routes = {
    task1:  () => import('./pages/task1.js'),
    task2:  () => import('./pages/task2.js'),
    task3:  () => import('./pages/task3.js'),
    task4:  () => import('./pages/task4.js'),
    task5:  () => import('./pages/task5.js'),
    task6:  () => import('./pages/task6.js'),
    task7:  () => import('./pages/task7.js'),
    task8:  () => import('./pages/task8.js'),
    task9:  () => import('./pages/task9.js'),
    task10: () => import('./pages/task10.js'),
    task11: () => import('./pages/task11.js'),
    task12: () => import('./pages/task12.js'),
    task13: () => import('./pages/task13.js'),
    task14: () => import('./pages/task14.js'),
    task15: () => import('./pages/task15.js'),
    task16: () => import('./pages/task16.js'),
    task17: () => import('./pages/task17.js'),
    task18: () => import('./pages/task18.js'),
    task19: () => import('./pages/task19.js'),
    task20: () => import('./pages/task20.js'),
    task21: () => import('./pages/task21.js'),
    task22: () => import('./pages/task22.js'),
};

// ── get DOM refs ───────────────────────────────────────────────────
const taskContent = document.getElementById('task-content');
const hero        = document.querySelector('.hero');

// cleanup the old page content to prevent memory leak
let currentCleanup = null;
// remember the currently mounted task so we can re-render it on language change
let currentTaskId  = null;

// ── helpers ───────────────────────────────────────────
// ──────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────

function showHero() {
    hero.style.display        = 'flex';
    taskContent.style.display = 'none';
    taskContent.innerHTML     = '';
}

function showTaskArea() {
    hero.style.display        = 'none';
    taskContent.style.display = 'block';
}

function updateActiveLink(taskId) {
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    if (!taskId) return;
    const link = document.querySelector(`nav a[data-task="${taskId}"]`);
    if (link) link.classList.add('active');
}

function injectStyles(css, taskId) {
    // Scope "body" rules to #task-content so they don't break the wrapper layout
    const el = document.createElement('style');
    el.textContent = css.replace(/\bbody\b/g, '#task-content');
    el.setAttribute('data-task-style', taskId);
    document.head.appendChild(el);
}

function cleanupPreviousTask() {
    if (currentCleanup) {
        currentCleanup();
        currentCleanup = null;
    }
    //the router removes the previous page's CSS without affecting the shell's stylesheet
    document.querySelectorAll('[data-task-style]').forEach(el => el.remove());
    taskContent.innerHTML = '';
}
// ──────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────


// ── core navigate function ─────────────────────────────────────
async function navigate(taskId) {
    cleanupPreviousTask();
    currentTaskId = taskId || null;

    if (!taskId) {
        showHero();
        updateActiveLink(null);
        return;
    }

    const loader = routes[taskId];

    if (!loader) {
        showTaskArea();
        taskContent.innerHTML = `
            <div style="padding:48px 16px;text-align:center;">
                <div style="display:inline-block;background:var(--card-bg);border-radius:var(--radius-card);
                            box-shadow:var(--shadow);padding:40px;border-left:4px solid #e74c3c;max-width:420px;">
                    <p style="color:#e74c3c;font-weight:bold;font-size:16px;margin-bottom:8px;">Page not found</p>
                    <p style="color:var(--text-label);font-size:14px;">${taskId} has no registered route yet.</p>
                </div>
            </div>`;
        return;
    }

    showTaskArea();

    try {
        const module = await loader();           // dynamic import
        if (module.styles) injectStyles(module.styles, taskId);
        taskContent.innerHTML = module.render(); // inject HTML
        if (module.init) currentCleanup = module.init() ?? null; // attach events, store cleanup
        updateActiveLink(taskId);
    } catch (err) {
        console.error('Router error:', err);
        taskContent.innerHTML = `
            <div style="padding:48px 16px;text-align:center;">
                <div style="display:inline-block;background:var(--card-bg);border-radius:var(--radius-card);
                            box-shadow:var(--shadow);padding:40px;border-left:4px solid #e74c3c;max-width:420px;">
                    <p style="color:#e74c3c;font-weight:bold;font-size:16px;margin-bottom:8px;">Failed to load</p>
                    <p style="color:var(--text-label);font-size:14px;">${err.message}</p>
                </div>
            </div>`;
    }
}

// ── Route handler (reads the current hash) ─────────────────────
export function handleRoute() {
    const taskId = window.location.hash.slice(1); // e.g. "task1"
    navigate(taskId || null);
}

// When the language changes, re-mount the current page so its render()
// runs again and produces HTML in the newly selected language.
onLanguageChange(() => {
    if (currentTaskId) navigate(currentTaskId);
});
