import { t } from '../i18n.js';

export const styles = `
    .container {
        max-width: 600px;
        margin: 40px auto;
        padding: 50px;
        border-radius: 24px;
          background: linear-gradient(180deg, #06142d 0%, #c76b4f 100%);
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 20px 50px rgba(0,0,0,0.35);
    }

    .page-title {
        text-align: center;
        color: #ffffff;
        font-size: 56px;
        font-weight: 700;
        margin-bottom: 50px;
    }

    .form-group {
        margin-bottom: 30px;
    }

    .form-input {
        width: 100%;
        height: 90px;
        padding: 0 30px;
        border-radius: 16px;
        border: 2px solid rgba(255,255,255,0.12);
        background-color: rgba(0,0,0,0.25);
        color: #ffffff;
        font-size: 24px;
        outline: none;
        transition: border-color .2s ease;
    }

    .form-input::placeholder {
        color: rgba(255,255,255,0.55);
    }

    .form-input:focus {
        border-color: #6a4b42;
    }

    #showBtn {
        width: 100%;
        height: 90px;
        border: none;
        border-radius: 18px;
        cursor: pointer;
        color: white;
        font-size: 32px;
        font-weight: 600;
        background: linear-gradient(
            100deg,
            #c76b4f,
            #a5533a
        );
        transition: opacity .2s ease;
    }

    #showBtn:hover {
        opacity: .9;
    }

    #message {
        margin-top: 40px;
        text-align: center;
        color: white;
        display: none;
        font-size: 38px;
        font-weight: 700;
    }
`;

export function render() {
    return `
        <div class="container">

            <h1 class="page-title">
                ${t('task1.title')}
            </h1>

            <div class="form-group">
                <input
                    type="text"
                    id="userName"
                    class="form-input"
                    placeholder="${t('task1.name')}"
                />
            </div>

            <div class="form-group">
                <input
                    type="number"
                    id="userAge"
                    class="form-input"
                    placeholder="${t('task1.age')}"
                />
            </div>

            <div class="form-group">
                <input
                    type="text"
                    id="userHobby"
                    class="form-input"
                    placeholder="${t('task1.hobby')}"
                />
            </div>

            <button id="showBtn">
                ${t('task1.showMessage')}
            </button>

            <h1 id="message"></h1>

        </div>
    `;
}

export function init() {
    const nameInput = document.getElementById("userName");
    const ageInput = document.getElementById("userAge");
    const hobbyInput = document.getElementById("userHobby");
    const showBtn = document.getElementById('showBtn');
    const message = document.getElementById('message');

    function handleShowMessage() {
        // get values
        let name = nameInput.value;
        let age = ageInput.value;
        let hobby = hobbyInput.value;

        console.log(name , age , hobby)
        let generatedMessage = `hello ${name} your age is ${age} and you love to do ${hobby}`

        message.textContent = generatedMessage;
        message.style.display = 'block';

    }

    showBtn.addEventListener('click', handleShowMessage);

    return function cleanup() {
        showBtn?.removeEventListener('click', handleShowMessage);
    };
}
