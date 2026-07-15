import { t } from '../i18n.js';

export const styles = `
    .tracker-container {
    max-width: 750px;
    margin: 40px auto;
    padding: 45px 35px;
    border-radius: 24px;
    background: linear-gradient(180deg, #2a1c18 0 %, #1a100e 100 %);
    border: 1px solid #4a332d;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    font-family: system-ui, -apple-system, sans-serif;
    direction: rtl;
}

    .tracker-title {
    color: #fbf6f3;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 35px;
    text-align: center;
}

    .form-group-inline {
    display: flex;
    gap: 12px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

    .form-input {
    flex: 1;
    min-width: 160px;
    height: 54px;
    padding: 0 16px;
    border-radius: 12px;
    border: 2px solid #4a332d;
    background-color: rgba(0, 0, 0, 0.25);
    color: #ffffff;
    font-size: 16px;
    outline: none;
    transition: border-color .2s ease;
}

    .form-input:focus {
    border-color: #c76b4f;
}

    .action-btn {
    height: 54px;
    padding: 0 24px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    background: linear-gradient(135deg, #a5533a 0 %, #c76b4f 100 %);
    transition: opacity 0.2s;
}

    .action-btn.secondary {
    background: #4a332d;
    border: 1px solid #c76b4f;
}

    .action-btn:hover {
    opacity: 0.9;
}

    .summary-card {
    background: rgba(199, 107, 79, 0.1);
    border: 1px solid rgba(199, 107, 79, 0.2);
    padding: 20px;
    border-radius: 14px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fbf6f3;
    font-size: 20px;
    font-weight: 700;
}

    .total-amount {
    color: #c76b4f;
}

    .list-heading {
    color: #edd2c9;
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 600;
}

    .products-container {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 14px;
    padding: 10px;
    min-height: 100px;
}

    .product-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, .05);
    color: #ffffff;
}

    .product-row:last-child {
    border-bottom: none;
}

    .delete-item-btn {
    padding: 6px 14px;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    background-color: #a5533a;
    transition: background .2s;
}

    .delete-item-btn:hover {
    background-color: #c76b4f;
}
`;

export function render() {
    return `
    <div class="tracker-container">
            <h1 class="tracker-title">${t('task14.title')}</h1>

            <div class="form-group-inline">
                <input type="text" id="userName" class="form-input" placeholder="${t('task14.productNamePlaceholder')}" />
                <input type="number" id="userAge" class="form-input" placeholder="${t('task14.productPricePlaceholder')}" />

                <button id="addBtn" class="action-btn">
                    ${t('task14.add')}
                </button>
                <button id="submitBtn" class="action-btn secondary">
                    ${t('task14.check')}
                </button>
            </div>

            <div class="summary-card">
                <span>${t('task14.totalCost')}</span>
                <span id="message" class="total-amount">0 ${t('task14.currency')}</span>
            </div>

            <h2 class="list-heading">${t('task14.productListTitle')}</h2>
            <div id="productsContainer" class="products-container">
                </div>
        </div>
    `;
}

export function init() {
    const productNameInput = document.getElementById('userName');
    const productPriceInput = document.getElementById('userAge');
    const addBtn = document.getElementById('addBtn');
    const checkBtn = document.getElementById('submitBtn');
    const totalCostContainer = document.getElementById('message');
    const productsContainer = document.getElementById('productsContainer');

    // Hint: Initialize your structures inside init scope
    const productSet = new Set();
    const productMap = new Map();

    function createProductRow(name, price) {
        const row = document.createElement('div');
        row.classList.add('product-row');
        row.innerHTML = `
        <span>${name}</span>
        <span>${price} ${t('task14.currency')}</span>
        <button class="delete-item-btn">×</button>
    `;
        row.querySelector('.delete-item-btn')
            .addEventListener('click', () => handleRemoveProduct(name, row));
        return row;
    }

    // recalculation of total cost and update layout
    function updateTotalCost(map) {
        let totalCost = 0;
        for (let price of map.values()) {
            totalCost += +price;
        }
        // console.log(totalCost)
        totalCostContainer.textContent = `${totalCost} ${t('task14.currency')}`
    }

    // done
    function handleAddProduct() {
        const prodName = productNameInput.value.trim();
        const proPrice = productPriceInput.value.trim();

        if (!prodName || !proPrice) return;  // validation

        if (productMap.has(prodName)) {
            alert("already in list");
            return;
        }


        productSet.add(prodName);
        productMap.set(prodName, proPrice);
        updateTotalCost(productMap);
        productsContainer.appendChild(createProductRow(prodName, proPrice));

        // clear inputs
        productNameInput.value = '';
        productPriceInput.value = '';
    }

    function handleCheckProduct() {
        let prodName = productNameInput.value;
        let found = productMap.has(prodName)
        // console.log(found)
        if (found) {
            alert("this product already in the list")
        } else {
            return null
        }
    }

    function handleRemoveProduct(name, row) {
        // 1. Delete element from productSet and productMap
        // 2. Recalculate total cost & redraw your UI rows

        // console.log(name)
        // let found = productMap.has(name)
        // // console.log(found)
        // if (found) {
        //     alert("this product will be removed from the list")
        //     productMap.delete(name)
        //     productSet.delete(name)
        //     updateTotalCost(productMap);
        //     // here I need to remove the li created with that product
        //     productsContainer.removeChild(row);
        //     return;
        // }


        if (!productMap.has(name)) return;
        alert("this product will be removed from the list")
        productMap.delete(name);
        productSet.delete(name);

        row.remove();
        updateTotalCost(productMap);
    }

    // Attach listeners
    addBtn?.addEventListener('click', handleAddProduct);
    checkBtn?.addEventListener('click', handleCheckProduct);

    return function cleanup() {
        addBtn?.removeEventListener('click', handleAddProduct);
        checkBtn?.removeEventListener('click', handleCheckProduct);
    };
}
