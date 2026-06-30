import { t } from '../i18n.js';

export const styles = `
    .container {
        width: min(100%, 1220px);
        margin: 34px auto;
        padding: 42px;
        background:
            radial-gradient(circle at 18% 12%, rgba(199, 107, 79, 0.08), transparent 28%),
            var(--bg);
        border: 1px solid var(--border);
        border-radius: var(--radius-card);
        box-shadow: var(--shadow);
    }

    .page-title {
        text-align: center;
        color: var(--text-main);
        font-size: 44px;
        font-weight: 800;
        margin-bottom: 44px;
    }


    .products-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 28px;
        direction: ltr;
    }

    .product-card {
        min-height: 178px;
        display: grid;
        grid-template-columns: 150px 1fr;
        align-items: center;
        gap: 28px;
        padding: 20px;
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: var(--radius-card);
        box-shadow: var(--shadow);
    }

    html[dir="rtl"] .product-card {
        direction: rtl;
    }

    html[dir="ltr"] .product-card {
        direction: ltr;
    }

    .product-visual {
        width: 142px;
        aspect-ratio: 1;
        display: grid;
        place-items: center;
        border-radius: var(--radius-card);
        background:
            radial-gradient(circle at 30% 20%, #ffffff 0 18%, transparent 19%),
            linear-gradient(145deg, #fbefe8, #f6e3d9);
        color: var(--primary);
        font-size: 70px;
        box-shadow: inset 0 -16px 28px rgba(199, 107, 79, 0.08);
    }

    .product-info {
        min-width: 0;
    }

    .product-name {
        color: var(--text-main);
        font-size: 25px;
        font-weight: 800;
        line-height: 1.35;
        margin-bottom: 18px;
    }

    .product-price {
        color: #d75d34;
        font-size: 22px;
        font-weight: 800;
    }
        .delete-btn, .edit-btn {
            border: none;
            cursor: pointer;
            font-size: 18px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-weight: 800;
            padding: 12px 24px;
            border-radius: var(--radius-input);
            box-shadow: 0 12px 24px rgba(165, 83, 58, 0.24);
            background: linear-gradient(135deg, #d75d34, var(--primary-dark));
            color: #ffffff;
            cursor: pointer;
        }
        .delete-btn:hover, .edit-btn:hover {
            background: linear-gradient(135deg, var(--primary), #8f432c);
            transform: translateY(-1px);
        }

        .modal-overlay {
    position: fixed;
    inset: 0;                    /* top/right/bottom/left = 0 */
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: var(--card-bg);
    padding: 40px;
    border-radius: var(--radius-card);
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

    .footer {
        margin-top: 30px;
        padding: 20px;
        background: var(--result-bg);
        border: 1px solid var(--border);
        border-radius: var(--radius-card);
        text-align: center;
        color: var(--text-main);
        font-size: 21px;
        font-weight: 800;
    }

    .footer span {
        color: #d75d34;
    }

    .empty-state {
        grid-column: 1 / -1;
        padding: 32px;
        text-align: center;
        color: var(--text-label);
        background: var(--card-bg);
        border: 1px dashed var(--border);
        border-radius: var(--radius-card);
        font-size: 18px;
        font-weight: 700;
    }

    html[dir="ltr"] .product-card {
        grid-template-columns: 150px 1fr;
    }

    @media (max-width: 980px) {

        .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 680px) {
        .container {
            padding: 22px;
            margin: 20px auto;
        }

        .page-title {
            font-size: 32px;
            margin-bottom: 28px;
        }

        .products-grid {
            grid-template-columns: 1fr;
        }

        .product-card {
            grid-template-columns: 110px 1fr;
            gap: 18px;
        }

        .product-visual {
            width: 108px;
            font-size: 50px;
        }

        .product-name {
            font-size: 21px;
        }
    }
`;

export function render() {
    return `
        <div class="container">
            <h1 class="page-title">
                ${t('task5.title')}
            </h1>


            <div id="productsContainer" class="products-grid"></div>

            <div class="footer">
                ${t('task5.productsCount')}:
                <span id="productsCount">0</span>
            </div>
        </div>
    `;
}

export function init() {
    let products = [
        { nameKey: 'task5.product.headphones', price: 150, priceHistory: [], icon: 'fa-headphones', startsWithAr: 'س', startsWithEn: 'h' },
        { nameKey: 'task5.product.backpack', price: 350, priceHistory: [], icon: 'fa-briefcase', startsWithAr: 'ح', startsWithEn: 'b' },
        { nameKey: 'task5.product.watch', price: 250, priceHistory: [], icon: 'fa-clock', startsWithAr: 'س', startsWithEn: 'w' },
        { nameKey: 'task5.product.notebook', price: 80, priceHistory: [], icon: 'fa-book', startsWithAr: 'د', startsWithEn: 'n' },
        { nameKey: 'task5.product.bottle', price: 60, priceHistory: [], icon: 'fa-tint', startsWithAr: 'ز', startsWithEn: 'b' },
    ];

    const productsContainer = document.getElementById('productsContainer');
    const productsCount = document.getElementById('productsCount');

    const createElementFunc = (type, props, ...children) => {
        const element = document.createElement(type);

        if (props) {
            Array.isArray(props)
                ? element.classList.add(...props)
                : element.classList.add(props);
        }

        children.forEach(child => {
            element.appendChild(
                typeof child === 'string'
                    ? document.createTextNode(child)
                    : child
            );
        });

        return element;
    };

    function formatPrice(price) {
        return `${price} ${t('task5.currency')}`;
    }

    function renderProducts(items) {
        productsContainer.innerHTML = '';

        items.forEach(item => {
            const card = createElementFunc(
                'div',
                'product-card',

                createElementFunc(
                    'div',
                    'product-visual',
                    createElementFunc('i', ['fas', item.icon])
                ),

                createElementFunc(
                    'div',
                    'product-info',
                    createElementFunc('p', 'product-name', t(item.nameKey)),
                    createElementFunc('p', 'product-price', formatPrice(item.price))
                )
            );

            const deleteBtn = createElementFunc(
                'button',
                ['delete-btn'],
                t('task5.delete')
            );
            deleteBtn.innerHTML += ' <i class="fas fa-trash"></i>';

            const editBtn = createElementFunc(
                'button',
                ['edit-btn'],
                t('task5.edit')
            );
            editBtn.innerHTML += ' <i class="fas fa-edit"></i>';

            deleteBtn.addEventListener('click', () => handleDelete(item));
            editBtn.addEventListener('click', () => handleEdit(item));

            card.append(deleteBtn, editBtn);
            productsContainer.appendChild(card);
        });

        productsCount.textContent = items.length;
    }

    function handleDelete(item) {
        products = products.filter(product => product !== item);
        renderProducts(products);
    }

    function handleEdit(item) {

        //  TODO:saving the old price in a separate variable
        const overlay = createElementFunc('div', 'modal-overlay');
        // console.log(`the old price ${item.price}`)
        // console.log('Edit:', item);
        const priceInput = createElementFunc('input', 'modal-input');
        priceInput.value = item.price;
        const closeBtn = createElementFunc('button', 'modal-close');
        closeBtn.innerHTML += ' <i class="fas fa-times"></i>';
        const saveBtn = createElementFunc('button', 'modal-save');
        saveBtn.innerHTML += ' <i class="fas fa-save"></i>';
        closeBtn.addEventListener('click', () => {
            overlay.remove();
        });
        saveBtn.addEventListener('click', () => {
            // console.log(priceInput.value);
            // validation
            let oldPrice = item.price;
            const newPrice = Number(priceInput.value);
            if (!newPrice || newPrice <= 0) return;
            item.priceHistory = item.priceHistory;
            item.priceHistory.push(oldPrice);
            item.price = newPrice;
            // products = products.map(product => product === item ? { ...product, ...item } : product);
            renderProducts(products);
            // console.log(`the products result ${JSON.stringify(products)}`)
            overlay.remove();
        });
        const modal = createElementFunc('div', 'modal-content',
            createElementFunc('h2', 'modal-title', t('task5.edit')),
            priceInput,
            closeBtn,
            saveBtn,
        );
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.remove();
        });
    }

    renderProducts(products);

    return function cleanup() {
        productsContainer.innerHTML = '';
    };
}