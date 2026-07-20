import { t } from '../i18n.js';

export const styles = `
    .countdown-container {
        max-width: 1000px;
        margin: 40px auto;
        padding: 40px;
        border-radius: 24px;
        background: linear-gradient(180deg, #2a1c18 0%, #1a100e 100%);
        border: 1px solid #4a332d;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        font-family: system-ui, -apple-system, sans-serif;
        direction: rtl;
    }

    .countdown-title {
        color: #fbf6f3;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
        text-align: right;
    }

    .display-card {
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 40px 20px;
        margin-bottom: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100px;
    }

    .status-text {
        color: rgba(251, 246, 243, 0.6);
        font-size: 20px;
        font-weight: 500;
        text-align: center;
    }

    .start-btn {
        width: 100%;
        height: 60px;
        border: none;
        border-radius: 14px;
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
        cursor: pointer;
        background: linear-gradient(135deg, #a5533a 0%, #c76b4f 100%);
        box-shadow: 0 4px 15px rgba(165, 83, 58, 0.25);
        transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
    }

    .start-btn:hover {
        opacity: 0.95;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(199, 107, 79, 0.4);
    }

    .start-btn:active {
        transform: translateY(0);
    }
`;

export function render() {
    return `
        <div class="countdown-container">
            <h1 class="countdown-title">${t('task19.title')}</h1>
            <div style="margin-bottom:20px;">
                <input id="targetDate" type="datetime-local"
                style="
                padding:30px;
                width: 100%;
                height: 60px;
                border: none;
                border-radius: 14px;
                font-size: 18px;
                font-weight: 700;
                color: #ffffff;
                cursor: pointer;
                background: linear-gradient(135deg, #a5533a 0%, #c76b4f 100%);
                box-shadow: 0 4px 15px rgba(165, 83, 58, 0.25);
                transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
                "
                />
            </div>

            <!-- Output Display Container -->
            <div class="display-card">
                <div id="message" class="status-text">
                    ${t('task19.placeholder')}
                </div>
            </div>

            <!-- Trigger Action Button -->
            <button id="showBtn" class="start-btn">
                ${t('task19.start')}
            </button>

            <button id="resetBtn" class="start-btn" style="margin-top:10px;background:#666;">
                Reset
            </button>
        </div>
    `;
}

export function init() {
    const startCountdownBtn = document.getElementById('showBtn');
    const messageDisplay = document.getElementById('message');
    const dateInput = document.getElementById("targetDate");
    const resetBtn = document.getElementById("resetBtn");
    const savedDate = localStorage.getItem("countdownDate");
    if (savedDate) {
        dateInput.value = savedDate;
    }
    let timerInterval = null;


    function handleShowMessage() {
        if (!dateInput.value) {
            messageDisplay.textContent = t("task19.please");
            return;
        }

        localStorage.setItem("countdownDate", dateInput.value);

        // const targetDate = new Date("Jul 20, 2026 12:07:00").getTime();
        const targetDate = new Date(dateInput.value).getTime();

        if (timerInterval) {
            clearInterval(timerInterval);
        }

        timerInterval = setInterval(function () {

            // Get the current date and time in milliseconds
            const now = new Date().getTime();

            // Find the total distance between now and the target date
            const distance = targetDate - now;

            // 3. Perform time calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // 4. Format numbers to always include a leading zero if they are single digits
            const formattedDays = String(days).padStart(2, '0');
            const formattedHours = String(hours).padStart(2, '0');
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');

            // 5. Output the result into the HTML element
            messageDisplay.innerHTML =
                `${formattedDays}d ${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;

            // 6. If the countdown hits zero, stop the timer and display a message
            if (distance < 0) {
                clearInterval(timerInterval);
                messageDisplay.innerHTML = "COUNTDOWN FINISHED";
            }
        }, 1000);


    }


    function handleReset() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }

        dateInput.value = "";

        messageDisplay.textContent = t("task19.placeholder");

        localStorage.removeItem("countdownDate");
    }

    startCountdownBtn?.addEventListener('click', handleShowMessage);
    resetBtn?.addEventListener("click", handleReset);

    return function cleanup() {
        startCountdownBtn?.removeEventListener('click', handleShowMessage);
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        resetBtn.removeEventListener("click", handleReset);
    };
}