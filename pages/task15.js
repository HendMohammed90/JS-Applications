import { t } from '../i18n.js';

export const styles = `
    .validation-container {
        max-width: 750px;
        margin: 40px auto;
        padding: 50px 40px;
        border-radius: 24px;
        background: linear-gradient(180deg, #2a1c18 0%, #1a100e 100%);
        border: 1px solid #4a332d;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        font-family: system-ui, -apple-system, sans-serif;
        direction: rtl;
    }

    .validation-title {
        color: #fbf6f3;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 35px;
        text-align: center;
    }

    .form-group {
        margin-bottom: 24px;
        text-align: right;
    }

    .form-input {
        width: 100%;
        height: 56px;
        padding: 0 20px;
        border-radius: 12px;
        border: 2px solid #4a332d;
        background-color: rgba(0, 0, 0, 0.25);
        color: #ffffff;
        font-size: 16px;
        outline: none;
        box-sizing: border-box;
        transition: border-color .2s ease, box-shadow .2s ease;
    }

    .form-input::placeholder {
        color: rgba(237, 210, 201, 0.5);
    }

    .form-input:focus {
        border-color: #c76b4f;
        box-shadow: 0 0 10px rgba(199, 107, 79, 0.15);
    }

    .error-hint {
        color: #e74c3c;
        font-size: 14px;
        margin-top: 8px;
        font-weight: 500;
        display: none; /* Controlled dynamically by validation state */
    }

    .submit-btn {
        width: 100%;
        height: 58px;
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

    .submit-btn:hover {
        opacity: 0.95;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(199, 107, 79, 0.4);
    }

    .submit-btn:active {
        transform: translateY(0);
    }

    .feedback-message {
        margin-top: 25px;
        padding: 16px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        display: none;
    }

    .feedback-message.success {
        background-color: rgba(46, 204, 113, 0.15);
        border: 1px solid #2ecc71;
        color: #2ecc71;
        display: block;
    }

    .feedback-message.error {
        background-color: rgba(231, 76, 60, 0.15);
        border: 1px solid #e74c3c;
        color: #e74c3c;
        display: block;
    }
`;

export function render() {
    return `
        <div class="validation-container">
            <h1 class="validation-title">${t('task16.title')}</h1>

            <form id="userForm" novalidate>
                <div class="form-group">
                    <input
                        type="text"
                        id="userName"
                        class="form-input"
                        placeholder="${t('task16.userNamePlaceholder')}"
                        required
                    />
                    <div id="nameError" class="error-hint">${t('task16.nameError')}</div>
                </div>

                <div class="form-group">
                    <input
                        type="email"
                        id="userEmail"
                        class="form-input"
                        placeholder="${t('task16.userEmailPlaceholder')}"
                        required
                    />
                    <div id="emailError" class="error-hint">${t('task16.emailError')}</div>
                </div>

                <div class="form-group">
                    <input
                        type="tel"
                        id="userPhone"
                        class="form-input"
                        placeholder="${t('task16.userPhonePlaceholder')}"
                        required
                    />
                    <div id="phoneError" class="error-hint">${t('task16.phoneError')}</div>
                </div>

                <button type="submit" id="submitBtn" class="submit-btn">
                    ${t('task16.submit')}
                </button>
            </form>

            <div id="message" class="feedback-message"></div>
        </div>
    `;
}

export function init() {
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const phoneInput = document.getElementById('userPhone');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageContainer = document.getElementById('message');

    function checkName(name) {
        // check on this pattern * - Name pattern: /^[a-zA-Z0-9\u0600-\u06FF]{3,10}$/ (letters, numbers, Arabic script, length 3-10, no special symbols)
        // and return a message for this filed which data come from creation array
        const pattern = /^[a-zA-Z0-9\u0600-\u06FF]{3,10}$/;
        const valid = pattern.test(name);

        nameError.style.display = valid ? "none" : "block";
        return valid;
    }

    function checkEmail(email) {
        // check on this pattern * - Email pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        // and return a message for this filed which data come from creation array
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valid = pattern.test(email)

        emailError.style.display = valid ? "none" : "block";
        return valid;

    }

    function checkPhone(phone) {
        // check on this pattern * - Phone pattern: /^\d{10}$/
        // and return a message for this filed which data come from creation array
        const pattern = /^\d{10}$/
        const valid = pattern.test(phone);

        phoneError.style.display = valid ? "none" : "block";
        return valid;

    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(form)
        // console.log(nameInput.value)
        // console.log(emailInput.value)
        // console.log(phoneInput.value)

        // get data
        let name = nameInput.value;
        let email = emailInput.value;
        let phone = phoneInput.value;


        //check for empty
        if (!name && !email && !phone) {
            return;
        }

        const results = [
            checkName(name),
            checkEmail(email),
            checkPhone(phone)
        ];

        // const validators = [
        //     () => checkName(name),
        //     () => checkEmail(email),
        //     () => checkPhone(phone)
        // ];
        // const isValid = [...validators].every(fn => fn());

        // console.log(results)

        const isValid = results.every(result => result);

        // const isValid = [
        //     checkName(name),
        //     checkEmail(email),
        //     checkPhone(phone)
        // ].every(Boolean);

        if (isValid) {
            messageContainer.textContent = "Form submitted successfully!";
            messageContainer.className = "feedback-message success";
        } else {
            // messageContainer.textContent = `t${task16.formErrorMessage}`;
            messageContainer.textContent = t('task16.formErrorMessage');
            messageContainer.className = "feedback-message error";
        }


        // clear inputs
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
    }

    form?.addEventListener('submit', handleSubmit);

    return function cleanup() {
        form?.removeEventListener('submit', handleSubmit);
    };
}