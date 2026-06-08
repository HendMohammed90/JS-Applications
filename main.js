import { handleRoute } from './router.js';
import { initI18n, toggleLanguage } from './i18n.js';
import { NavLink } from './components/NavLink.js';
import { TaskCard } from './components/TaskCard.js';

// ── DOM refs ───────────────────────────────────────────────────
const sidebar     = document.getElementById('sidebar');
const sidebarList = sidebar.querySelector('ul');
const featured    = document.querySelector('.featured-boxes');
const menuBtn     = document.querySelector('.menu-btn');
const langToggle  = document.querySelector('.lang-toggle');

// ── Data ──────────────────────────────────────────────────────
const TOTAL_TASKS = 22;

const featuredCards = [
    { taskId: 'task1', icon: 'fa-calculator', titleKey: 'card.task1.title', descKey: 'card.task1.desc' },
];

// ── Render shell components ───────────────────────────────────
sidebarList.innerHTML = Array.from({ length: TOTAL_TASKS }, (_, i) =>
    NavLink({ taskId: `task${i + 1}`, num: i + 1 })
).join('');

featured.innerHTML = featuredCards.map(TaskCard).join('');

// ── i18n boot (runs after rendering so data-i18n nodes exist) ─
initI18n();

// ── UI Controls ───────────────────────────────────────────────

menuBtn.addEventListener('click', () => sidebar.classList.toggle('visible'));

langToggle.addEventListener('click', () => toggleLanguage());

// Nav links + featured-card links — wired after the components have rendered
document.querySelectorAll('nav a, .task-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const taskId = link.getAttribute('data-task');
        if (taskId) window.location.hash = taskId;
        // if (window.innerWidth <= 900) sidebar.classList.remove('visible');
    });
});

// Close sidebar when clicking outside it
document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove('visible');
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') sidebar.classList.remove('visible');
});

// ── Boot ──────────────────────────────────────────────────────
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);
