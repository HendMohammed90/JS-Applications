// featured task card
export function TaskCard({ taskId, icon, titleKey, descKey }) {
    return `
        <div class="task-card">
            <i class="fas ${icon}"></i>
            <h4 data-i18n="${titleKey}"></h4>
            <p  data-i18n="${descKey}"></p>
            <a href="#${taskId}" data-task="${taskId}" class="task-link" data-i18n="card.viewApp"></a>
        </div>
    `;
}
