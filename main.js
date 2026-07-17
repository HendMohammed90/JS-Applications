import { handleRoute } from './router.js';
import { initI18n, toggleLanguage } from './i18n.js';
import { NavLink } from './components/NavLink.js';
import { TaskCard } from './components/TaskCard.js';

// ── DOM refs ───────────────────────────────────────────────────
const sidebar = document.getElementById('sidebar');
const sidebarList = sidebar.querySelector('ul');
const featured = document.querySelector('.featured-boxes');
const menuBtn = document.querySelector('.menu-btn');
const langToggle = document.querySelector('.lang-toggle');

// ── Data ──────────────────────────────────────────────────────
const TOTAL_TASKS = 22;

const featuredCards = [
    { taskId: 'task1', icon: 'fa-solid fa-message', titleKey: 'card.task1.title', descKey: 'card.task1.desc' },
    { taskId: 'task2', icon: 'fa-calculator', titleKey: 'card.task2.title', descKey: 'card.task2.desc' },
    { taskId: 'task3', icon: 'fa-solid fa-calendar-week', titleKey: 'card.task3.title', descKey: 'card.task3.desc' },
    { taskId: 'task4', icon: 'fa-solid fa-list-check', titleKey: 'card.task4.title', descKey: 'card.task4.desc' },
    { taskId: 'task5', icon: 'fa-solid fa-store', titleKey: 'card.task5.title', descKey: 'card.task5.desc' },
    { taskId: 'task6', icon: 'fa-solid fa-store', titleKey: 'card.task6.title', descKey: 'card.task6.desc' },
    { taskId: 'task7', icon: 'fa-solid fa-store', titleKey: 'card.task6.title', descKey: 'card.task6.desc' },
    { taskId: 'task8', icon: 'fa-solid fa-book', titleKey: 'card.task8.title', descKey: 'card.task8.desc' },
    { taskId: 'task9', icon: 'fa-solid fa-store', titleKey: 'card.task9.title', descKey: 'card.task9.desc' },
    { taskId: 'task10', icon: 'fa-solid fa-users', titleKey: 'card.task10.title', descKey: 'card.task10.desc' },
    { taskId: 'task11', icon: 'fa-solid fa-clock', titleKey: 'card.task11.title', descKey: 'card.task11.desc' },
    { taskId: 'task12', icon: 'fa-solid fa-brush', titleKey: 'card.task12.title', descKey: 'card.task12.desc' },
    { taskId: 'task13', icon: 'fa-solid fa-user', titleKey: 'card.task13.title', descKey: 'card.task13.desc' },
    { taskId: 'task14', icon: 'fa-solid fa-map', titleKey: 'card.task14.title', descKey: 'card.task14.desc' },
    { taskId: 'task15', icon: 'fa-solid fa-check', titleKey: 'card.task15.title', descKey: 'card.task15.desc' },
    { taskId: 'task16', icon: 'fa-solid fa-right-to-bracket', titleKey: 'card.task16.title', descKey: 'card.task16.desc' },
    { taskId: 'task17', icon: 'fa-solid fa-object-group', titleKey: 'card.task17.title', descKey: 'card.task17.desc' },
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
