import { t } from '../i18n.js';

export const styles = `
    .container {
        background-color: #ffffff;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 450px;
        margin: auto auto;
        margin-top: 5%;
    }

    #cal-heading {
        text-align: center;
        margin-bottom: 30px;
        color: #333333;
        font-size: 24px;
    }

    .form-group { margin-bottom: 20px; }

    label {
        display: block;
        margin-bottom: 6px;
        color: #555555;
        font-weight: bold;
        font-size: 14px;
    }

    input[type="number"] {
        width: 100%;
        padding: 10px 14px;
        border: 1px solid #cccccc;
        border-radius: 6px;
        font-size: 15px;
        outline: none;
        transition: border-color 0.2s;
    }

    input[type="number"]:focus { border-color: #4a90e2; }

    .btn-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
    }

    button {
        padding: 12px;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        transition: opacity 0.2s;
    }

    button:hover { opacity: 0.85; }

    #addBtn      { background-color: #4a90e2; }
    #subtractBtn { background-color: #e67e22; }
    #multiplyBtn { background-color: #27ae60; }
    #divideBtn   { background-color: #8e44ad; }

    #result {
        margin-top: 25px;
        padding: 16px;
        background-color: #eaf3fb;
        border-left: 4px solid #4a90e2;
        border-radius: 6px;
        display: none;
    }

    #result p   { color: #333333; font-size: 15px; }
    #result span { font-weight: bold; color: #4a90e2; font-size: 18px; }
`;

export function render() {
    return `
        <div class="container">
            <h1 id="cal-heading">${t('task1.title')}</h1>

            <div class="form-group">
                <label for="numA">${t('task1.firstNum')}</label>
                <input type="number" id="numA" placeholder="10" />
            </div>

            <div class="form-group">
                <label for="numB">${t('task1.secondNum')}</label>
                <input type="number" id="numB" placeholder="5" />
            </div>

            <div class="btn-grid">
                <button id="addBtn">${t('task1.add')}</button>
                <button id="subtractBtn">${t('task1.subtract')}</button>
                <button id="multiplyBtn">${t('task1.multiply')}</button>
                <button id="divideBtn">${t('task1.divide')}</button>
            </div>

            <div id="result">
                <p>${t('task1.result')} <span id="displayResult"></span></p>
            </div>
        </div>
    `;
}

export function init() {
    function getValues() {
        const a = parseFloat(document.getElementById('numA').value);
        const b = parseFloat(document.getElementById('numB').value);
        return { a, b };
    }

    function showResult(value) {
        document.getElementById('displayResult').innerText = value;
        document.getElementById('result').style.display = 'block';
    }

    function isValid(a, b) {
        if (isNaN(a) || isNaN(b)) {
            showResult(t('task1.errInvalid'));
            return false;
        }
        return true;
    }

    function handleAdd() { const { a, b } = getValues(); if (isValid(a, b)) showResult(a + b); }
    function handleSubtract() { const { a, b } = getValues(); if (isValid(a, b)) showResult(a - b); }
    // ternary operator case
    // function handleSubtract() {
    //     const { a, b } = getValues();
    //     isValid(a, b) ? showResult(a - b) : showResult(t('task1.errDivZero'));
    // }
    function handleMultiply() { const { a, b } = getValues(); if (isValid(a, b)) showResult(a * b); }
    function handleDivide() {
        const { a, b } = getValues();
        if (!isValid(a, b)) return;
        if (b === 0) { showResult(t('task1.errDivZero')); return; }
        showResult(a / b);
    }

    document.getElementById('addBtn').addEventListener('click', handleAdd);
    document.getElementById('subtractBtn').addEventListener('click', handleSubtract);
    document.getElementById('multiplyBtn').addEventListener('click', handleMultiply);
    document.getElementById('divideBtn').addEventListener('click', handleDivide);

    // Return cleanup so the router can remove listeners when navigating away
    return function cleanup() {
        document.getElementById('addBtn')?.removeEventListener('click', handleAdd);
        document.getElementById('subtractBtn')?.removeEventListener('click', handleSubtract);
        document.getElementById('multiplyBtn')?.removeEventListener('click', handleMultiply);
        document.getElementById('divideBtn')?.removeEventListener('click', handleDivide);
    };
}
