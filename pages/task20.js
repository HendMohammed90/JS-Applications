import { t } from '../i18n.js';

export const styles = `
    .generator-container {
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

    .generator-title {
        color: #fbf6f3;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
        text-align: right;
    }

    .output-box {
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 20px;
        min-height: 60px;
        display: flex;
        align-items: center;
        color: #edd2c9;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 24px;
        word-break: break-all;
    }

    .actions-row {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        margin-bottom: 24px;
    }

    .generator-btn {
        min-width: 160px;
        height: 54px;
        padding: 0 24px;
        border: none;
        border-radius: 14px;
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        background: linear-gradient(135deg, #a5533a 0%, #c76b4f 100%);
        box-shadow: 0 4px 15px rgba(165, 83, 58, 0.25);
    }

    .generator-btn:hover {
        opacity: 0.95;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(199, 107, 79, 0.4);
    }

    .generator-btn:active {
        transform: translateY(0);
    }
`;

export function render() {
    return `
        <div class="generator-container">
            <h1 class="generator-title">${t('task20.title')}</h1>

            <!-- Target Single Number Display Box -->
            <div id="result" class="output-box"></div>

            <!-- Operational Trigger Grid controls -->
            <div class="actions-row">
                <button id="addBtn" class="generator-btn">
                    ${t('task20.generate')}
                </button>
                <button id="showBtn" class="generator-btn">
                    ${t('task20.showAll')}
                </button>
            </div>

            <!-- Accumulated Storage Array Listing Display Box -->
            <div id="productsContainer" class="output-box"></div>
        </div>
    `;
}


export function init() {
    const generateBtn = document.getElementById('addBtn');
    const showAllBtn = document.getElementById('showBtn');
    const result = document.getElementById('result');
    const arrayDisplay = document.getElementById('productsContainer');
    let generatedNumbers = [];


    function* randomNumberGenerator() {
        while (true) {
            yield Math.floor(Math.random() * 100) + 1;
        }
    }

    const generator = randomNumberGenerator();

    function handleAddTask() {

        const { value  , done} = generator.next();
        console.log(done);

        generatedNumbers.push(value);

        if (result) {
            result.textContent = String(value);
        }
    }

    function handleShowMessage() {
        if (arrayDisplay) {
            arrayDisplay.textContent = generatedNumbers.length
                ? generatedNumbers.join(', ')
                : '—';
        }
    }

    generateBtn?.addEventListener('click', handleAddTask);
    showAllBtn?.addEventListener('click', handleShowMessage);

    return function cleanup() {
        generateBtn?.removeEventListener('click', handleAddTask);
        showAllBtn?.removeEventListener('click', handleShowMessage);
    };
}