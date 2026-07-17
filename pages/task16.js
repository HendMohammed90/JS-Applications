// import { t } from '../i18n.js';

// export const styles = `
//     body {
//         font-family: Arial, sans-serif;
//         background-color: #fbf6f3;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         min-height: 100vh;
//         padding: 20px;
//     }

//     .stub-card {
//         background-color: #ffffff;
//         padding: 40px;
//         margin:auto auto;
//         border-radius: 10px;
//         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//         text-align: center;
//         max-width: 480px;
//         width: 100%;
//         border-left: 4px solid #c76b4f;
//         margin: auto auto;
//         margin-top: 5%;
//     }

//     .stub-card i {
//         font-size: 48px;
//         color: #a5533a;
//         margin-bottom: 16px;
//     }

//     .stub-card h1 {
//         font-size: 22px;
//         color: #333333;
//         margin-bottom: 10px;
//     }

//     .stub-card p {
//         font-size: 14px;
//         color: #555555;
//         line-height: 1.6;
//     }

//     .stub-card .badge {
//         display: inline-block;
//         margin-top: 18px;
//         padding: 6px 14px;
//         background-color: #eaf3fb;
//         color: #c76b4f;
//         border-radius: 999px;
//         font-size: 13px;
//         font-weight: bold;
//     }
// `;

// export function render() {
//     return `
//         <div class="stub-card">
//             <i class="fas fa-hourglass-half"></i>
//             <h1>${t('stub.taskLabel')} 16 — ${t('stub.comingSoon')}</h1>
//             <p>${t('stub.description')}</p>
//             <span class="badge">#task16</span>
//         </div>
//     `;
// }

// // console.log(Array.from("hendMohammed", (n) => n + "REST"))
// let myArr = [1, 1, 1, 2, 3, 4]
// let mySet = new Set(myArr);
// mySet.has(2);      // true
// mySet.add(5);
// mySet.delete(1);
// console.log(mySet);

// let arr = Array.from(mySet);
// arr.push(5);
// arr.map(x => x * 2);
// arr.filter(x => x > 2);
// console.log(arr);

// console.log(...new Set(myArr))
// console.log(1, 2, 3, 4);

// arr = [1, 1, 2, 3, 4];

// const unique = [...new Set(arr)];

// console.log(unique);

// // test on arr.copyWithin
// let cop = arr.copyWithin(0 ,3,4)
// console.log(cop)


// export function init() {
//     return function cleanup() { };
// }

import { t } from '../i18n.js';

export const styles = `
    .login-container {
        max-width: 600px;
        margin: 60px auto;
        padding: 50px 40px;
        border-radius: 24px;
        background: linear-gradient(180deg, #2a1c18 0%, #1a100e 100%);
        border: 1px solid #4a332d;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        font-family: system-ui, -apple-system, sans-serif;
        direction: rtl;
    }

    .login-title {
        color: #fbf6f3;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 40px;
        text-align: center;
    }

    .form-group {
        margin-bottom: 25px;
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
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
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
        display: none;
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
`;

export function render() {
    return `
        <div class="login-container">
            <h1 class="login-title">${t('task16.title')}</h1>

            <form id="userForm" novalidate>
                <!-- Username Field -->
                <div class="form-group">
                    <input
                        type="text"
                        id="userName"
                        class="form-input"
                        placeholder="${t('task16.usernamePlaceholder')}"
                        required
                    />
                    <div id="usernameError" class="error-hint">${t('task16.usernameError')}</div>
                </div>

                <!-- Password Field -->
                <div class="form-group">
                    <input
                        type="password"
                        id="userPassword"
                        class="form-input"
                        placeholder="${t('task16.passwordPlaceholder')}"
                        required
                    />
                    <div id="passwordError" class="error-hint">${t('task16.passwordError')}</div>
                </div>

                <!-- Submit Button -->
                <button type="submit" id="submitBtn" class="submit-btn">
                    ${t('task16.submit')}
                </button>
            </form>

            <!-- Global Success Feedback -->
            <div id="message" class="feedback-message"></div>
        </div>
    `;
}

export function init() {
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('userName');
    const passwordInput = document.getElementById('userPassword');

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const messageContainer = document.getElementById('message');

    function checkUsername(username) {
        const pattern = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/;
        const valid = pattern.test(username);

        usernameError.style.display = valid ? "none" : "block";
        return valid;
    }

    function checkPassword(password) {
        const pattern = /^(?=.*[A-Z])(?=.*\d).{8,20}$/;
        const valid = pattern.test(password);

        passwordError.style.display = valid ? "none" : "block";
        return valid;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const username = nameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username && !password) {
            return;
        }

        const results = [
            checkUsername(username),
            checkPassword(password)
        ];

        const isValid = results.every(result => result);

        if (isValid) {
            messageContainer.textContent = t('task16.successMessage');
            messageContainer.className = "feedback-message success";
        } else {
            messageContainer.textContent = t('task16.formErrorMessage');
            messageContainer.className = "feedback-message error";
        }

        nameInput.value = '';
        passwordInput.value = '';
    }

    form?.addEventListener('submit', handleSubmit);

    return function cleanup() {
        form?.removeEventListener('submit', handleSubmit);
    };
}