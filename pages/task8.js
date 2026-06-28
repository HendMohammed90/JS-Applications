import { t } from '../i18n.js';

export const styles = `
    /* ── Layout ─────────────────────────────── */
    .lib-wrapper {
        width: min(100%, 1220px);
        margin: 34px auto;
        padding: 42px;
        background:
            radial-gradient(circle at 18% 12%, rgba(199, 107, 79, 0.08), transparent 28%),
            var(--bg);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border: 1px solid var(--border);
        border-radius: var(--radius-card);
        box-shadow: var(--shadow);
        color: #b66c30ff;

        /* Inherit page direction */
        direction: inherit;
    }

    /* ── Page title ──────────────────────────── */
    .lib-title {
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        color:rgb(172, 78, 1);
        margin-bottom: 40px;
        letter-spacing: 0.5px;
    }

    /* ── Category section ────────────────────── */
    .lib-category {
        margin-bottom: 40px;
    }

    /* Category Banner */
    .lib-category-banner {
        width: 100%;
        padding: 18px 28px;
        border-radius: 10px;
        background: linear-gradient(to right, #c76b4f, #a5533a);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 28px;
        text-align: start;
    }

    .lib-category-name {
        font-size: 1.15rem;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.3px;
        text-align: start;
    }

    /* ── Books Grid ─────────────────────────── */
    .lib-books-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px 40px;
    }

    /* Book Card */
    .lib-book-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        padding: 8px 0;
        text-align: start;
    }

    .lib-book-details {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .lib-book-category {
        font-size: 1.05rem;
        font-weight: 700;
        color: rgb(0, 0, 0);
        text-align: start;
    }

    .lib-book-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: rgb(0, 0, 0);
        text-align: start;
    }

    .lib-book-meta {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.9rem;
        color: rgb(230, 85, 1);
        text-align: start;
    }

    .lib-book-meta .meta-label {
        color: #6a4b42;
    }

    .lib-book-meta .meta-value {
        color: rgb(0, 0, 0);
        font-weight: 500;
    }

    /* ── Footer ─────────────────────────────── */
    .lib-total {
        margin-top: 48px;
        text-align: center;

        font-size: 1.05rem;
        font-weight: 500;
        color: #c76b4f;
    }

    .lib-total-count {
        font-weight: 700;
        color: #a5533a;
    }

    /* ── Responsive ─────────────────────────── */
    @media (max-width: 600px) {
        .lib-books-grid {
            grid-template-columns: 1fr;
        }

        .lib-wrapper {
            padding: 32px 16px 48px;
        }
    }
`;

export function render() {
    return `
        <div class="lib-wrapper">

            <h1 class="lib-title">${t('task8.title')}</h1>          

            <div id="libraryContainer">
            </div> 
            <p class="lib-total" id="totalPages">
                ${t('task8.totalPages')}
                <span class="lib-total-count" id="totalPagesCount">0</span>
            </p>

        </div>
    `;
}

export function init() {
    // ── DOM references ──────────────────────────────────────────────────
    const libraryContainer = document.getElementById('libraryContainer');
    const totalPagesCount = document.getElementById('totalPagesCount');
    const uiLang = document.documentElement.lang;
    // console.log(uiLang);
    console.log(document.documentElement.dir);
    console.log(document.documentElement.lang);
document.documentElement.lang 

    const library = {
        fiction: [
            { title: "Neon Dreams", author: "Cyber", pages: 150  },
            { title: "Electric Shadows", author: "Spark", pages: 200  }
        ],
        science: [
            { title: "Quantum Realms", author: "Quark", pages: 300 },
            { title: "Cosmic Light", author: "Astro", pages: 250 }
        ]
    };


    // extract book data to loop on it:
    const allBooks = Object.values(library).flat();
    // console.log(allBooks);

    // create book card
    function buildBookCard(books) {
        let singleBookCard = '';
        // console.log(allBooks);
        for (let singleBook of books) {
         singleBookCard += `
                <div class="lib-book-card">
                <span class="lib-book-details">
                <span class="lib-book-category">${t('task8.categoryLabel')}:</span>
                <span class="lib-book-title">${singleBook.title}</span>
                </span>
                    <span class="lib-book-meta">
                        <span class="meta-label">${t('task8.authorLabel')}</span>
                        <span class="meta-value">${singleBook.author}</span>
                    </span>
                    <span class="lib-book-meta">
                    <span class="meta-label">${t('task8.pagesLabel')}</span>
                        <span class="meta-value">${singleBook.pages}</span>
                    </span>
                </div>
            `;
            // console.log(singleBookCard);
        }
        // return singleBookCard;
        return `<div class="lib-books-grid">${singleBookCard}</div>`;

    }

    function buildCategoryBanner(category) {
        // console.log(category);
        return `
            <div class="lib-category-banner">
                <span class="lib-category-name">${category}</span>
            </div>
        `;
    }

    function buildLipSection(categoryName, books) {
        // console.log(categoryData);
        const categoryBanner = buildCategoryBanner(categoryName);
        // console.log(categoryBanner);
        const singleBookHTML = buildBookCard(books);
        return `
            <div class="lib-category">
                ${categoryBanner}
                ${singleBookHTML}
            </div>
        `;
    }

    function calculateTotalPages(data) {
            // console.log(data);
            const totalPages = data.reduce((acc, book) => acc + book.pages, 0);
            totalPagesCount.textContent = totalPages;
            return totalPages;
    }

    function renderLibrary() {
        calculateTotalPages(allBooks);
        let allSectionsHTML = '';
        for (let categoryName of Object.keys(library)) {
            // console.log(categoryName);
            const books = library[categoryName];
            // console.log(books);
            allSectionsHTML += buildLipSection(categoryName, books);
        }
        libraryContainer.innerHTML = allSectionsHTML;
    }

    renderLibrary();
}