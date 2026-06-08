// ── Tiny i18n module ──────────────────────────────────────────

const STORAGE_KEY  = 'app-lang';
const DEFAULT_LANG = 'ar';
const SUPPORTED    = ['ar', 'en'];

// Arabic-Indic digit glyphs, indexed 0..9
const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

// ── Dictionaries ───────────────────────────────────────────────
const dict = {
    ar: {
        'app.title':        'تطبيقات الجافاسكريبت',
        'aria.menu':        'القائمة',
        'aria.language':    'تبديل اللغة',
        'lang.toggleLabel': 'EN',

        'hero.welcome':     'مرحباً بك في منصة تطبيقات الجافاسكريبت',

        'card.task1.title': 'آلة حاسبة تفاعلية',
        'card.task1.desc':  'آلة حاسبة متطورة تدعم العمليات الحسابية الأساسية',
        'card.viewApp':     'عرض التطبيق',

        'nav.taskPrefix':   'تطبيق',

        // Shared stub-page strings
        'stub.comingSoon':  'قريباً',
        'stub.description': 'هذه المهمة مسجلة في الراوتر وجاهزة للتنفيذ.',
        'stub.taskLabel':   'مهمة',

        // task1 (calculator) strings
        'task1.title':      'نموذج الآلة الحاسبة',
        'task1.firstNum':   'الرقم الأول',
        'task1.secondNum':  'الرقم الثاني',
        'task1.add':        '➕ جمع',
        'task1.subtract':   '➖ طرح',
        'task1.multiply':   '✖ ضرب',
        'task1.divide':     '➗ قسمة',
        'task1.result':     'النتيجة:',
        'task1.errInvalid': 'الرجاء إدخال أرقام صحيحة في الحقلين.',
        'task1.errDivZero': 'لا يمكن القسمة على صفر.',
    },
    en: {
        'app.title':        'JavaScript Applications',
        'aria.menu':        'Menu',
        'aria.language':    'Toggle language',
        'lang.toggleLabel': 'ع',

        'hero.welcome':     'Welcome to simple JS Applications Platform',

        'card.task1.title': 'Interactive Calculator',
        'card.task1.desc':  'A modern calculator supporting basic arithmetic operations.',
        'card.viewApp':     'View App',

        'nav.taskPrefix':   'Task',

        // Shared stub-page strings
        'stub.comingSoon':  'Coming Soon',
        'stub.description': 'This task is registered in the router and ready to be implemented.',
        'stub.taskLabel':   'Task',

        // task1 (calculator) strings
        'task1.title':      'Calculator Form',
        'task1.firstNum':   'First Number',
        'task1.secondNum':  'Second Number',
        'task1.add':        '➕ Add',
        'task1.subtract':   '➖ Subtract',
        'task1.multiply':   '✖ Multiply',
        'task1.divide':     '➗ Divide',
        'task1.result':     'Result:',
        'task1.errInvalid': 'Please enter valid numbers in both fields.',
        'task1.errDivZero': 'Cannot divide by zero.',
    },
};

// ── State ──────────────────────────────────────────────────────
let currentLang = SUPPORTED.includes(localStorage.getItem(STORAGE_KEY))
    ? localStorage.getItem(STORAGE_KEY)
    : DEFAULT_LANG;

const listeners = new Set();

// ── Public API ─────────────────────────────────────────────────
export function t(key) {
    return dict[currentLang]?.[key] ?? dict[DEFAULT_LANG][key] ?? key;
}

// Convert Western Arabic digits (0-9) to Arabic-Indic digits (٠-٩) in Arabic mode
function localizeDigits(input) {
    const s = String(input);
    if (currentLang !== 'ar') return s;
    return s.replace(/[0-9]/g, d => AR_DIGITS[+d]);
}

export function onLanguageChange(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

function setLanguage(lang) {
    if (!SUPPORTED.includes(lang) || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Freeze transitions so the sidebar doesn't visibly slide across the
    // screen when the directional CSS rules swap.
    const html = document.documentElement;
    html.classList.add('lang-switching');

    applyDocumentDirection();
    applyShellTranslations();
    listeners.forEach(fn => fn(lang));

    // Re-enable transitions after the browser has painted the new state.
    requestAnimationFrame(() => {
        requestAnimationFrame(() => html.classList.remove('lang-switching'));
    });
}

export function toggleLanguage() {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

// Walks the DOM and fills any element marked with data-i18n / data-i18n-aria
export function applyShellTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    // For future use
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    document.querySelectorAll('[data-num]').forEach(el => {
        el.textContent = localizeDigits(el.getAttribute('data-num'));
    });
}

function applyDocumentDirection() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir  = currentLang === 'ar' ? 'rtl' : 'ltr';
}

export function initI18n() {
    applyDocumentDirection();
    applyShellTranslations();
}
