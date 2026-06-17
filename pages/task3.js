// the logic here is to working with the array data object and how we add elements to the dom


import { t } from '../i18n.js';

export const styles = `
    .container {
        max-width: 900px;
        margin: 40px auto;
        padding: 40px;
        border-radius: 24px;
        background: linear-gradient(180deg, #06142d 0%, #c76b4f 100%);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    }

    .task-title {
        text-align: center;
        color: #ffffff;
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 40px;
    }

    .task-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;
    }

    .task-input {
        width: 100%;
        max-width: 700px;
        height: 64px;
        padding: 0 24px;
        border-radius: 14px;
        border: 2px solid rgba(255,255,255,0.12);
        background: rgba(0,0,0,0.25);
        color: #ffffff;
        font-size: 18px;
        outline: none;
    }

    .task-input::placeholder {
        color: rgba(255,255,255,0.55);
    }

    .task-input:focus {
        border-color: #f7e9e3;
    }

    .add-btn {
        min-width: 220px;
        height: 64px;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        color: #ffffff;
        font-size: 22px;
        font-weight: 600;
        background: linear-gradient(
            135deg,
            #06142d 0%,
            #a5533a 100%
        );
        box-shadow: 0 0 24px rgba(63, 169, 255, 0.35);
        transition: transform .2s ease;
    }

    .add-btn:hover {
        transform: translateY(-2px);
    }

    .task-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .task-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 22px 28px;
        border-radius: 16px;
        background: #f7e9e3;
    }

    .task-text {
        color: #c76b4f;
        font-size: 20px;
    }

    .delete-btn {
        width: 64px;
        height: 64px;
        border: none;
        border-radius: 14px;
        cursor: pointer;
        color: #ffffff;
        font-size: 24px;
        background: linear-gradient(
            135deg,
            #f7e9e3 0%,
            #c76b4f 100%
            );
    }
`;

export function render() {
    return `
        <div class="container">

            <h1 class="task-title">
                ${t('task3.title')}
            </h1>

            <div class="task-form">
                <input
                    id="taskInput"
                    class="task-input"
                    type="text"
                    placeholder="${t('task3.placeholder')}"
                />

                <button id="addTaskBtn" class="add-btn">
                    + ${t('task3.add')}
                </button>
            </div>

            <div id="taskList" class="task-list">
                <!-- Tasks rendered here -->
            </div>

        </div>
    `;
}

export function init() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    const createElementFunc = (type, props, ...children) => {
        const newItem = document.createElement(type);
        props ? newItem.classList.add(props) : null;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                if (typeof (children[i]) === 'string') {
                    let node = document.createTextNode(children[i]);
                    newItem.appendChild(node)
                } else {
                    newItem.appendChild(children[i])
                }
            }
        }
        // console.log(newItem);
        return newItem
    }


    function handleAddTask() {
        // console.log(taskInput.value);
        if (!taskInput.value.trim()) return;
        const newTaskElement = createElementFunc("div", "task-item")
        const textSpan = createElementFunc("span", "", taskInput.value)
        const taskPara = createElementFunc("p", "task-text", textSpan)
        const iconSpan = createElementFunc("span", "", "×")
        const deleteBtn = createElementFunc("button", "delete-btn", iconSpan)


        deleteBtn.addEventListener("click", () => {
            newTaskElement.remove();
        });

        // console.log(newTaskElement);
        taskList.appendChild(newTaskElement);
        newTaskElement.appendChild(taskPara);
        newTaskElement.appendChild(deleteBtn);

        // clear the value
        taskInput.value = "";
    }

    addTaskBtn.addEventListener('click', handleAddTask);

    return function cleanup() {
        addTaskBtn?.removeEventListener('click', handleAddTask);
    };
}