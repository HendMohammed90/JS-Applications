import { t } from '../i18n.js';

export const styles = `
    body {
        font-family: Arial, sans-serif;
        background-color: #fbf6f3;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
    }

    .stub-card {
        background-color: #ffffff;
        padding: 40px;
        margin:auto auto;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 480px;
        width: 100%;
        border-left: 4px solid #c76b4f;
        margin: auto auto;
        margin-top: 5%;
    }

    .stub-card i {
        font-size: 48px;
        color: #a5533a;
        margin-bottom: 16px;
    }

    .stub-card h1 {
        font-size: 22px;
        color: #333333;
        margin-bottom: 10px;
    }

    .stub-card p {
        font-size: 14px;
        color: #555555;
        line-height: 1.6;
    }

    .stub-card .badge {
        display: inline-block;
        margin-top: 18px;
        padding: 6px 14px;
        background-color: #eaf3fb;
        color: #c76b4f;
        border-radius: 999px;
        font-size: 13px;
        font-weight: bold;
    }
`;

export function render() {
    return `
        <div class="stub-card">
            <i class="fas fa-hourglass-half"></i>
            <h1>${t('stub.taskLabel')} 16 — ${t('stub.comingSoon')}</h1>
            <p>${t('stub.description')}</p>
            <span class="badge">#task16</span>
        </div>
    `;
}

export function init() {
    return function cleanup() {};
}
