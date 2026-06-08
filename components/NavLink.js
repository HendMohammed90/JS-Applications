// navLink
export function NavLink({ taskId, num, icon = 'fa-tasks' }) {
    return `
        <li>
            <a href="#${taskId}" data-task="${taskId}">
                <i class="fas ${icon}"></i>
                <span data-i18n="nav.taskPrefix">تطبيق</span>
                <span data-num="${num}">${num}</span>
            </a>
        </li>
    `;
}
