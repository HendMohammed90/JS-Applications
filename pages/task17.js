import { t } from '../i18n.js';

export const styles = `
    .constructor-container {
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

    .constructor-title {
        color: #fbf6f3;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
        text-align: center;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
        margin-bottom: 20px;
    }

    .user-card {
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 200px;
        text-align: center;
    }

    .user-description {
        color: #edd2c9;
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 24px;
        word-break: break-word;
    }

    .change-btn {
        min-width: 140px;
        padding: 12px 24px;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        background: linear-gradient(135deg, #a5533a 0%, #c76b4f 100%);
        box-shadow: 0 4px 15px rgba(165, 83, 58, 0.25);
    }

    .change-btn:hover {
        opacity: 0.95;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(199, 107, 79, 0.4);
    }

    .change-btn:active {
        transform: translateY(0);
    }
`;

export function render() {
    return `
        <div class="constructor-container">
            <h1 class="constructor-title">${t('task17.title')}</h1>

            <div id="productsContainer" class="cards-grid">
                <!-- User Card 1 -->
                <div class="user-card">
                    <p id="user1Text" class="user-description">
                    </p>
                    <button id="showBtn" class="change-btn">
                        ${t('task17.changeName')}
                    </button>
                </div>

                <!-- User Card 2 -->
                <div class="user-card">
                    <p id="user2Text" class="user-description">
                    </p>
                    <button id="submitBtn" class="change-btn">
                        ${t('task17.changeName')}
                    </button>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    const changeUser1Btn = document.getElementById('showBtn');
    const changeUser2Btn = document.getElementById('submitBtn');
    const user1Text = document.getElementById('user1Text');
    const user2Text = document.getElementById('user2Text');

    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;


        this.getGreeting = function () {
            return `${t('task17.hello')} ${this.name} ${t('task17.youAre')} ${this.age} ${t('task17.yourEmail')} ${this.email}`;
        };
    }

    const user1 = new User(t('task17.user1Name'), t('task17.user1Age'), t('task17.user1Email'));
    const user2 = new User(t('task17.user2Name'), t('task17.user2Age'), t('task17.user2Email'));

    user1Text.innerHTML = user1.getGreeting();
    user2Text.innerHTML = user2.getGreeting();

    function handleChangeUser1() {
        const newName = prompt("Enter a new name for User 1:");

        if (!newName) return;

        user1.name = newName;
        user1Text.innerHTML = user1.getGreeting();
    }

    function handleChangeUser2() {
        const newName = prompt("Enter a new name for User 2:");

        if (!newName) return;

        user2.name = newName;
        user2Text.innerHTML = user2.getGreeting();
    }

    changeUser1Btn?.addEventListener('click', handleChangeUser1);
    changeUser2Btn?.addEventListener('click', handleChangeUser2);

    return function cleanup() {
        changeUser1Btn?.removeEventListener('click', handleChangeUser1);
        changeUser2Btn?.removeEventListener('click', handleChangeUser2);
    };
}