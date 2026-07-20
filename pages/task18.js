import { t } from '../i18n.js';

export const styles = `
    .library-container {
        max-width: 1200px;
        margin: 40px auto;
        padding: 40px;
        border-radius: 24px;
        background: linear-gradient(180deg, #2a1c18 0%, #1a100e 100%);
        border: 1px solid #4a332d;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        font-family: system-ui, -apple-system, sans-serif;
        direction: rtl;
    }

    .library-title {
        color: #fbf6f3;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 35px;
        text-align: center;
    }

    .books-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 20px;
        margin-bottom: 35px;
    }

    .book-card {
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: 250px;
        text-align: center;
    }

    .book-info {
        color: #edd2c9;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 20px;
        // direction: ltr;
        text-align: start;
        unicode-bidi: plaintext;
    }

    .read-btn {
        width: 100%;
        padding: 12px;
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

    .read-btn:hover {
        opacity: 0.95;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(199, 107, 79, 0.4);
    }

    .summary-bar {
        background: rgba(199, 107, 79, 0.1);
        border: 1px solid rgba(199, 107, 79, 0.2);
        padding: 20px;
        border-radius: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fbf6f3;
        font-size: 18px;
        font-weight: 600;
    }

    .total-size-value {
        color: #c76b4f;
        font-weight: 700;
    }
`;

export function render() {
    return `
        <div class="library-container">
            <h1 class="library-title">${t('task18.title')}</h1>

            <div id="productsContainer" class="books-grid">

            </div>

            <div class="summary-bar">
                <span>${t('task18.totalSizeLabel')}</span>
                <span id="message" class="total-size-value">

                </span>
            </div>
        </div>
    `;
}

export function init() {
    class Book {
        constructor(title, author, pages) {
            this.title = title;
            this.author = author;
            this.pages = pages;
        }

        getDetails() {
            return `${t("book")} ${this.title} ${t("by")} ${this.author} - ${this.pages} ${t("pages")}.`;
        }
    }

    class EBook extends Book {
        constructor(title, author, pages, fileSize) {
            super(title, author, pages);
            this.fileSize = fileSize;
        }

        getEbookDetails() {
            return `${this.getDetails()} Ebook size: ${this.fileSize} MB.`;
        }


        static calculateTotalSize(ebooks) {
            // return ebooks.reduce((total, ebook) => total + ebook.fileSize, 0); //this return NANsize as it's depend on calculate undefined ebook.fileSize

            return ebooks
                .filter((book) => book instanceof EBook)
                .reduce((total, ebook) => total + ebook.fileSize, 0);
        }
    }

    const ebooks = [
        new EBook("HTML Essentials", "Alex Brown", 210, 2.8),
        new EBook("CSS Mastery", "Jane Doe", 280, 2.2),
        new EBook("JavaScript Basics", "John Smith", 320, 1.5),
        new Book("Clean Code", "Robert C. Martin", 464),
        new Book("Design Patterns", "GoF", 395)
    ];

    const booksHtml = ebooks
        .map(
            (book, index) => `
                <div class="book-card">
                    <p class="book-info">${book.getDetails()}</p>

                    <button
                        class="read-btn read-action-trigger"
                        data-index="${index}"
                    >
                        ${t('task18.startReading')}
                    </button>
                </div>
            `
        )
        .join("");

    const productsContainer = document.getElementById("productsContainer");

    if (productsContainer) {
        productsContainer.innerHTML = booksHtml;
        document.getElementById("message").textContent =
            `${EBook.calculateTotalSize(ebooks)} MB`;
    }


    const readButtons = document.querySelectorAll(".read-action-trigger");

    readButtons.forEach((button, index) => {
        const ebook = ebooks[index];
        if (!ebook) return;

        button.book = ebook;
        button.dataset.title = ebook.title;
        button.dataset.author = ebook.author;

        button.addEventListener("click", handleStartReading);
    });

    function handleStartReading(e) {
        const button = e.currentTarget;
        const book = button.book;

        if (!book) return;

        // console.log("Reading started");
        // console.log(book);

        alert(
            `Now Reading\n\n` +
            `Title: ${book.title}\n` +
            `Author: ${book.author}\n` +
            `Pages: ${book.pages}` +
            `\nFile Size: ${book.fileSize} MB`
        );

        button.disabled = true;
        button.textContent = t("reading");

        setTimeout(() => {
            button.disabled = false;
            button.textContent = t("finish");
        }, 2000);
    }

    return function cleanup() {
        readButtons.forEach((button) => {
            button.removeEventListener("click", handleStartReading);
        });
    };
}