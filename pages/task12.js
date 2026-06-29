import { t } from '../i18n.js';

export const styles = `
    .color-picker-container {
        max-width: 800px;
        margin: 60px auto;
        padding: 50px 40px;
        border-radius: 24px;
        background: linear-gradient(180deg, #2a1c18 0%, #1a100e 100%);
        border: 1px solid #4a332d;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        text-align: center;
        font-family: system-ui, -apple-system, sans-serif;
        direction: rtl;
    }

    .color-picker-title {
        color: #fbf6f3;
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 50px;
        letter-spacing: 0.5px;
    }

    .button-container {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }

    .color-btn {
        min-width: 130px;
        padding: 16px 24px;
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

    .color-btn:hover {
        opacity: 0.95;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(199, 107, 79, 0.4);
    }

    .color-btn:active {
        transform: translateY(0);
    }

    .color-picker-footer {
        color: rgba(251, 246, 243, 0.4);
        font-size: 16px;
        font-weight: 500;
    }
`;

export function render() {
    return `
        <div class="color-picker-container" id="productsContainer">
            <h1 class="color-picker-title">${t('task12.title')}</h1>

            <div class="button-container">
                <button id="redBtn" class="color-btn">
                    ${t('task12.red')}
                </button>
                <button id="yellowBtn" class="color-btn">
                    ${t('task12.yellow')}
                </button>
                <button id="greenBtn" class="color-btn">
                    ${t('task12.green')}
                </button>
                <button id="resetBtn" class="color-btn">
                    ${t('task12.reset')}
                </button>
            </div>

            <p class="color-picker-footer">${t('task12.footer')}</p>
        </div>
    `;
}

export function init() {
    const redBtn = document.getElementById('redBtn');
    const yellowBtn = document.getElementById('yellowBtn');
    const greenBtn = document.getElementById('greenBtn');
    const resetBtn = document.getElementById('resetBtn');
    const container = document.getElementById('productsContainer');
    let localVariableStorage
    const body = document.body
    console.log(body)
    let backgroundColor = ''

    function handleColorChange(color) {
        backgroundColor = 'the color'
        body.style.backgroundColor = color;
        localVariableStorage = localStorage.setItem(backgroundColor, color);
    }

    function handleColorReset() {
        body.style.backgroundColor = ''
    }

    const handleRed = () => handleColorChange('red');
    const handleYellow = () => handleColorChange('yellow');
    const handleGreen = () => handleColorChange('green');
    const resetFunc = () => handleColorReset()


    redBtn?.addEventListener('click', handleRed);
    yellowBtn?.addEventListener('click', handleYellow);
    greenBtn?.addEventListener('click', handleGreen);
    resetBtn?.addEventListener('click', resetFunc);

    return function cleanup() {
        redBtn?.removeEventListener('click', handleRed);
        yellowBtn?.removeEventListener('click', handleYellow);
        greenBtn?.removeEventListener('click', handleGreen);
        resetBtn?.removeEventListener('click', resetFunc);
    };
}