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

    .filter-section {
        display: grid;
        grid-template-columns: 1fr 0.85fr 0.85fr auto;
        gap: 28px;
        align-items: end;
        padding: 28px;
        margin-bottom: 28px;
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: var(--radius-card);
        box-shadow: var(--shadow);
    }

    .field-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .field-label {
        color: var(--text-main);
        font-size: 17px;
        font-weight: 700;
    }

    .filter-input,
    .filter-select {
        width: 100%;
        height: 58px;
        padding: 0 18px;
        border: 1px solid var(--border);
        border-radius: var(--radius-input);
        background: #ffffff;
        color: var(--text-main);
        font-size: 17px;
        outline: none;
        box-shadow: inset 0 0 0 1px rgba(42, 28, 24, 0.02);
    }

    .filter-input:focus,
    .filter-select:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(199, 107, 79, 0.14);
    }

    .filter-input::placeholder {
        color: rgba(106, 75, 66, 0.62);
        font-weight: 700;
    }

    .filter-select {
        cursor: pointer;
    }

    #filterBtn {
        min-width: 190px;
        height: 58px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        border: none;
        border-radius: var(--radius-input);
        background: linear-gradient(135deg, #d75d34, var(--primary-dark));
        color: #ffffff;
        font-size: 18px;
        font-weight: 800;
        cursor: pointer;
        box-shadow: 0 12px 24px rgba(165, 83, 58, 0.24);
    }

    #filterBtn:hover {
        background: linear-gradient(135deg, var(--primary), #8f432c);
        transform: translateY(-1px);
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
        .filter-section {
            grid-template-columns: 1fr 1fr;
        }

        #filterBtn {
            width: 100%;
        }

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

        .filter-section,
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

            <div class="filter-section">
                <div class="field-group">
                    <label class="field-label" for="maxPriceInput">
                        ${t('task5.maxPriceLabel')}
                    </label>
                    <input
                        id="maxPriceInput"
                        class="filter-input"
                        type="number"
                        min="0"
                        placeholder="${t('task5.maxPricePlaceholder')}"
                    />
                </div>

                <div class="field-group">
                    <label class="field-label" for="priceCategorySelect">
                        ${t('task5.priceCategory')}
                    </label>
                    <select id="priceCategorySelect" class="filter-select">
                        <option value="all">${t('task5.all')}</option>
                        <option value="low">${t('task5.low')}</option>
                        <option value="medium">${t('task5.medium')}</option>
                        <option value="high">${t('task5.high')}</option>
                    </select>
                </div>

                <div class="field-group">
                    <label class="field-label" for="startsWithInput">
                        ${t('task5.startsWithLabel')}
                    </label>
                    <input
                        id="startsWithInput"
                        class="filter-input"
                        type="text"
                        maxlength="1"
                        placeholder="${t('task5.startsWithPlaceholder')}"
                    />
                </div>

                <button id="filterBtn">
                    <span>${t('task5.filter')}</span>
                    <i class="fas fa-filter" aria-hidden="true"></i>
                </button>
            </div>

            <div id="productsContainer" class="products-grid"></div>

            <div class="footer">
                ${t('task5.productsCount')}:
                <span id="productsCount">0</span>
            </div>
        </div>
    `;
}

export function init() {
    const products = [
        { nameKey: 'task5.product.headphones', price: 150, icon: 'fa-headphones', startsWithAr: 'س', startsWithEn: 'h' },
        { nameKey: 'task5.product.backpack', price: 350, icon: 'fa-briefcase', startsWithAr: 'ح', startsWithEn: 'b' },
        { nameKey: 'task5.product.watch', price: 250, icon: 'fa-clock', startsWithAr: 'س', startsWithEn: 'w' },
        { nameKey: 'task5.product.notebook', price: 80, icon: 'fa-book', startsWithAr: 'د', startsWithEn: 'n' },
        { nameKey: 'task5.product.bottle', price: 60, icon: 'fa-tint', startsWithAr: 'ز', startsWithEn: 'b' },
    ];

    const productsContainer = document.getElementById('productsContainer');
    const productsCount = document.getElementById('productsCount');
    const maxPriceInput = document.getElementById('maxPriceInput');
    const startsWithInput = document.getElementById('startsWithInput');
    const priceCategorySelect = document.getElementById('priceCategorySelect');
    const filterBtn = document.getElementById('filterBtn');
    const uiLang = document.documentElement.lang;

    const createElementFunc = (type, props, ...children) => {
        const newItem = document.createElement(type);
        if (props) {
            Array.isArray(props) ? newItem.classList.add(...props) : newItem.classList.add(props)
        }
        if (children) {
            for (let i = 0; i < children.length; i++) {

                if (typeof children[i] === 'string') {
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

    function getItemCategory(price) {
        if (price <= 100) return 'low';

        if (price <= 250) return 'medium';

        return 'high';
    }

    function formatPrice(price) {
        return `${price} ${t('task5.currency')}`;
    }

    function renderProducts(items) {
        // console.log(items)
        productsContainer.innerHTML = ''
        for (let item of items) {
            const card = createElementFunc('div', 'product-card',
                createElementFunc('div', 'product-visual',
                    createElementFunc('i', ['fas', item.icon])
                ),
                createElementFunc('div', 'product-info',
                    createElementFunc('p', 'product-name', t(item.nameKey)),
                    createElementFunc('p', 'product-price', formatPrice(item.price))
                )
            );
            // console.log(`the card data is ${card}`)
            // const productsElement = document.createElement('div')
            // productsElement.classList.add('product-card')
            // const productView = document.createElement('div');
            // productView.classList.add('product-visual')
            // const prodIcon = document.createElement('i')
            // prodIcon.classList.add('fas', item.icon)
            // productView.appendChild(prodIcon)
            // const productInfo = document.createElement('div');
            // productInfo.classList.add('product-info')
            // const proName = document.createElement('p');
            // const proPrice = document.createElement('p');
            // proName.classList.add('product-name');
            // proName.textContent = t(item.nameKey)
            // proPrice.textContent = formatPrice(item.price)
            // proPrice.classList.add('product-price')
            // productInfo.appendChild(proName);
            // productInfo.appendChild(proPrice)
            // productsElement.appendChild(productView);
            // productsElement.appendChild(productInfo)
            productsContainer.appendChild(card)
        }
        productsCount.textContent = items.length
        // console.log(productsContainer)
    }

    function handleFilter() {
        const maxPrice = maxPriceInput.value;
        // console.log(maxPrice)
        const category = priceCategorySelect.value;
        const startsWith = startsWithInput.value.toLowerCase();
        // console.log(category)
        // let res = []
        const filtered = products.filter(item => {
            // condition 1
            // if (maxPrice) {
            //     item.price <= maxPrice ? res.push(item) : null;
            //     console.log(res)
            //     return item.price <= maxPrice
            // }
            const passPrice = maxPrice ? item.price <= Number(maxPrice) : true;


            // condition 2
            let itemCategory = getItemCategory(item.price)
            // console.log(itemCategory)
            const passesCategory = category && category !== "all" ? itemCategory === category : true;
            // const passCategory = category ? itemCategory === category : true
            // category == itemCategory ? res.push(item) : null;




            // condition 3
            let passesStartsWith;
            if (uiLang === 'ar') {
                // let itemStart = item.startsWithAr
                // startsWith == itemStart ? res.push(item) : null
                passesStartsWith = startsWith
                    ? item.startsWithAr == startsWith
                    : true;
            } else {
                // let itemStart = item.startsWithEn;
                // startsWith == itemStart ? res.push(item) : null
                passesStartsWith = startsWith
                    ? item.startsWithEn == startsWith
                    : true;
            }

            return passPrice && passesCategory && passesStartsWith;
        });

        renderProducts(filtered);
    }

    filterBtn.addEventListener('click', handleFilter);
    maxPriceInput.addEventListener('input', handleFilter);
    startsWithInput.addEventListener('input', handleFilter);
    priceCategorySelect.addEventListener('change', handleFilter);

    // to retrieve all items if. user delete filter data
    renderProducts(products);

    return function cleanup() {
        filterBtn?.removeEventListener('click', handleFilter);
        maxPriceInput?.removeEventListener('input', handleFilter);
        startsWithInput?.removeEventListener('input', handleFilter);
        priceCategorySelect?.removeEventListener('change', handleFilter);
    };
}
