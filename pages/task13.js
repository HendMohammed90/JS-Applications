import { t } from '../i18n.js';

export const styles = `
    .demo-container {
        max-width: 900px;
        margin: 40px auto;
        padding: 40px;
        border-radius: 24px;
        background: linear-gradient(180deg, #2a1c18 0%, #1a100e 100%);
        border: 1px solid #4a332d;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        font-family: system-ui, -apple-system, sans-serif;
        direction: rtl;
    }

    .demo-title {
        color: #fbf6f3;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
        text-align: right;
    }

    .info-card {
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 35px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .info-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;
        line-height: 1.6;
    }

    .info-label {
        color: #c76b4f;
        font-weight: 700;
        margin-left: 10px;
        min-width: 120px;
    }

    .info-value {
        color: #edd2c9;
        font-weight: 500;
    }

    .action-container {
        display: flex;
        justify-content: flex-end;
    }

    #showBtn {
        min-width: 180px;
        padding: 16px 32px;
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

    #showBtn:hover {
        opacity: 0.95;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(199, 107, 79, 0.4);
    }

    #showBtn:active {
        transform: translateY(0);
    }
`;

export function render() {
    return `
        <div class="demo-container">
            <h1 class="demo-title">${t('task13.title')}</h1>

            <div class="info-card" id="result">
                <div class="info-item">
                    <span class="info-label">${t('task13.nameLabel')}</span>
                    <span id="personName" class="info-value"></span>
                </div>
                <div class="info-item">
                    <span class="info-label">${t('task13.ageLabel')}</span>
                    <span id="personAge" class="info-value"></span>
                </div>
                <div class="info-item">
                    <span class="info-label">${t('task13.jobLabel')}</span>
                    <span id="personJop" class="info-value"></span>
                </div>
                <div class="info-item">
                    <span class="info-label">${t('task13.cityLabel')}</span>
                    <span id="personCity" class="info-value"></span>
                </div>
                <div class="info-item">
                    <span class="info-label">${t('task13.zipLabel')}</span>
                    <span id="personZip" class="info-value"></span>
                </div>
                <div class="info-item">
                    <span class="info-label">${t('task13.langLabel')}</span>
                    <span id="personLang" class="info-value"></span>
                </div>
            </div>

            <div class="action-container">
                <button id="showBtn">
                    ${t('task13.showWelcome')}
                </button>
            </div>
        </div>
    `;
}

export function init() {
    const showBtn = document.getElementById('showBtn');
    const nameEl = document.getElementById("personName");
    const ageEl = document.getElementById("personAge");
    const jobEl = document.getElementById("personJop");
    const cityEl = document.getElementById("personCity");
    const zipEl = document.getElementById("personZip");
    const langEl = document.getElementById("personLang");

    const person = {
        name: "HE Mo",
        age: 30,
        job: "Software Developer",
        address: { cityVal: "Giza", zipVal: "12345" },
        language: "English"
    };

    let { name, age, job, address: { cityVal, zipVal }, language } = person;


    name = 'HEND';
    age = 31;
    job = 'Freelancer'
    cityVal = "6th of October";
    zipVal = "123456";
    language = 'Arabic'


    function displayPersonData() {
        nameEl.textContent = name;
        ageEl.textContent = age;
        jobEl.textContent = job;
        cityEl.textContent = cityVal;
        zipEl.textContent = zipVal;
        langEl.textContent = language;
    }

    displayPersonData();


    function handleShowMessage(event) {
        alert(`Hello ${name}! Age: ${age}, Job: ${job}, City: ${cityVal}`);
    }

    showBtn?.addEventListener('click', handleShowMessage);

    return function cleanup() {
        showBtn?.removeEventListener('click', handleShowMessage);
    };
}