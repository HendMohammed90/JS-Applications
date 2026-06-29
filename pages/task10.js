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

    .users-table {
    width: 100%;
    margin-top: 40px;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 16px;
    background: rgba(0,0,0,0.2);
}

.users-table th,
.users-table td {
    padding: 18px;
    text-align: center;
    color: white;
    border-bottom: 1px solid rgba(255,255,255,.08);
    font-size: 20px;
}

.users-table th {
    background: rgba(255,255,255,.12);
    font-weight: 700;
}

.users-table tbody tr:nth-child(even) {
    background: rgba(255,255,255,.05);
    cursor: pointer;
}

.users-table tbody tr:hover {
    background: rgba(255,255,255,.1);
      cursor: pointer;
}

.deleteBtn{
    padding: 12px;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        transition: opacity 0.2s;
        background-color: #e67e22;
}
`;

export function render() {
    return `
<div class="container">

    <h1 class="page-title">
        ${t('task10.title')}
    </h1>

    <form id="userForm">

        <div class="form-group">
            <input
                type="text"
                id="userName"
                class="form-input"
                placeholder="${t('task10.name')}"
                required
            />
        </div>

        <div class="form-group">
            <input
                type="number"
                id="userAge"
                class="form-input"
                placeholder="${t('task10.age')}"
                required
            />
        </div>

        <div class="form-group">
            <input
                type="email"
                id="userEmail"
                class="form-input"
                placeholder="${t('task10.email')}"
                required
            />
        </div>

        <button type="submit" id="showBtn">
            ${t('task10.showMessage')}
        </button>

    </form>

    <div id="users-table"></div>

</div>
`;
}
export function init() {

    const form = document.getElementById("userForm");
    const nameInput = document.getElementById("userName");
    const ageInput = document.getElementById("userAge");
    const emailInput = document.getElementById("userEmail");
    const tableContainer = document.getElementById("users-table");

    tableContainer.innerHTML = `
        <table class="users-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="usersBody"></tbody>
        </table>
    `;

    const usersBody = document.getElementById("usersBody");

    function handleSubmit(e) {

        e.preventDefault();

        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const email = emailInput.value.trim();


        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'Delete';
        // console.log(deleteBtn)

        // create row
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${email}</td>
        <td id="action-cell"></td>
        `;

        row.querySelector('td:last-child').appendChild(deleteBtn);
        usersBody.appendChild(row);
        deleteBtn.addEventListener('click', () => row.remove())
        form.reset();
        nameInput.focus();
    }

    form.addEventListener("submit", handleSubmit);

    return function cleanup() {
        form.removeEventListener("submit", handleSubmit);
    };
}