import { t } from '../i18n.js';

export const styles = `
    .clock-container {
        max-width: 700px;
        margin: 60px auto;
        padding: 60px 40px;
        border-radius: 24px;
        background: linear-gradient(180deg, #2a1c18 0%, #1a100e 100%);
        border: 1px solid #4a332d;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        text-align: center;
        font-family: system-ui, -apple-system, sans-serif;
        direction: rtl;
    }

    .clock-title {
        color: #fbf6f3;
        font-size: 38px;
        font-weight: 700;
        margin-bottom: 40px;
        letter-spacing: 1px;
    }

    .clock-display {
        font-size: 64px;
        font-weight: 700;
        color: #c76b4f;
        margin-bottom: 50px;
        font-family: monospace, sans-serif;
        letter-spacing: 2px;
        text-shadow: 0 0 20px rgba(199, 107, 79, 0.3);
        direction: ltr;
    }

    .button-group {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .clock-btn {
        min-width: 150px;
        padding: 16px 28px;
        border: none;
        border-radius: 14px;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        background: linear-gradient(135deg, #a5533a 0%, #c76b4f 100%);
        box-shadow: 0 4px 15px rgba(165, 83, 58, 0.25);
    }

    .clock-btn:hover {
        opacity: 0.95;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(199, 107, 79, 0.4);
    }

    .clock-btn:active {
        transform: translateY(0);
    }
`;

export function render() {
    return `
        <div class="clock-container">
            <h1 class="clock-title">${t('task11.title')}</h1>

            <div id="result" class="clock-display">
                ${t('task11.timePlaceholder')}
            </div>

            <div class="button-group">
                <button id="startBtn" class="clock-btn">
                    ${t('task11.start')}
                </button>
                <button id="stopBtn" class="clock-btn">
                    ${t('task11.stop')}
                </button>
                <button id="linkBtn" class="clock-btn">
                    ${t('task11.goToLink')}
                </button>
            </div>
        </div>
    `;
}

export function init() {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const linkBtn = document.getElementById('linkBtn');
    const clockDisplay = document.getElementById('result');
    let intervalId = null;


    function handleStartClock() {
        if (intervalId) return;
        //nodeJs and express
        intervalId = setInterval(() => {
            // update the display
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            // console.log(timeString)
            clockDisplay.innerHTML = timeString
        }, 1000);
    }

    function handleStopClock() {
        clearInterval(intervalId);
        intervalId = null;
    }

    function handleGoToLink() {
        // TODO: Prompt an alert/input dialog to capture URL and perform safe redirect here
        const url = prompt('Enter URL');
        // https://www.google.com/
        if (!url) return;
        if (!url.startsWith('https://') && !url.startsWith('http://')) return;
        // console.log(url)
        window.location.href = url;
    }

    // Attach listeners
    startBtn?.addEventListener('click', handleStartClock);
    stopBtn?.addEventListener('click', handleStopClock);
    linkBtn?.addEventListener('click', handleGoToLink);

    // Return mandatory cleanup function
    return function cleanup() {
        startBtn?.removeEventListener('click', handleStartClock);
        stopBtn?.removeEventListener('click', handleStopClock);
        linkBtn?.removeEventListener('click', handleGoToLink);
        clearInterval(intervalId);
    };
}