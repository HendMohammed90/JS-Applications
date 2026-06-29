// ── Tiny i18n module ──────────────────────────────────────────

const STORAGE_KEY = 'app-lang';
const DEFAULT_LANG = 'ar';
const SUPPORTED = ['ar', 'en'];

// Arabic-Indic digit glyphs, indexed 0..9
const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

// ── Dictionaries ───────────────────────────────────────────────
const dict = {
    ar: {
        'app.title': 'تطبيقات الجافاسكريبت',
        'aria.menu': 'القائمة',
        'aria.language': 'تبديل اللغة',
        'lang.toggleLabel': 'EN',

        'hero.welcome': 'مرحباً بك في منصة تطبيقات الجافاسكريبت',

        //task 1
        'card.task1.title': 'رسالة ترحيب',
        'card.task1.desc': "أضف بياناتك، وسنرحب بك.",

        //task 2
        'card.task2.title': 'آلة حاسبة تفاعلية',
        'card.task2.desc': 'آلة حاسبة متطورة تدعم العمليات الحسابية الأساسية',

        //task 3
        'card.task3.title': 'مخطط ايام الاسبوع',
        'card.task3.desc': 'ما هو يومك المفضل وسنخبرك برساله مميزة',

        //task 4
        'card.task4.title': 'مدير قائمة المهام',
        'card.task4.desc': "أضف مهمتك المفضلة وابدأ العمل",

        //task 5
        'card.task5.title': 'قائمة المنتجات',
        'card.task5.desc': 'صف المنتجات حسب السعر أو حرف البداية',

        //task 6
        'card.task6.title': 'قائمة المنتجات مع القيمة الضريبية',
        'card.task6.desc': ' سعر المنتجات قبل وبعد الضريبة',

        // task 8
        'card.task8.title': ' المكتبة',
        'card.task8.desc': 'قائمة المكتبة مع أنواع مختلفة',

        // task 9
        'card.task9.title': 'قائمة المنتجات مع ميزة التعديل',
        'card.task9.desc': 'تعديل سعر المنتجات',

        //task 10
        'card.task10.title': 'نظام إدارة المستخدم',
        'card.task10.desc': 'تعرّف على كيفية إدارة جدول المستخدم مع إمكانيات الإضافة والحذف',

        //task 11
        'card.task11.title': 'الساعة التفاعلية',
        'card.task11.desc': 'تعلم كيفية إنشاء ساعة تفاعلية مع إمكانيات التحكم باستخدام JavaScript.',

        'card.viewApp': 'عرض التطبيق',

        'nav.taskPrefix': 'تطبيق',

        // Shared stub-page strings
        'stub.comingSoon': 'قريباً',
        'stub.description': 'هذه المهمة مسجلة في الراوتر وجاهزة للتنفيذ.',
        'stub.taskLabel': 'مهمة',

        // task1 user welcoming
        "task1.title": "أدخل معلوماتك",
        "task1.name": "اسمك",
        "task1.age": "عمرك",
        "task1.hobby": "هوايتك",
        "task1.showMessage": "عرض الرسالة",
        "task1.message": "الرسالة",
        "task1.errEmpty": "يرجى ملء جميع الحقول",

        // task2 (calculator) strings
        'task2.title': 'نموذج الآلة الحاسبة',
        'task2.firstNum': 'الرقم الأول',
        'task2.secondNum': 'الرقم الثاني',
        'task2.add': '➕ جمع',
        'task2.subtract': '➖ طرح',
        'task2.multiply': '✖ ضرب',
        'task2.divide': '➗ قسمة',
        'task2.result': 'النتيجة:',
        'task2.errInvalid': 'الرجاء إدخال أرقام صحيحة في الحقلين.',
        'task2.errDivZero': 'لا يمكن القسمة على صفر.',

        // task3 (favorite day) strings
        'task3.title': 'ما هو يومك المفضل؟',
        'task3.placeholder': 'اكتب هنا يومك المفضل',
        'task3.btn': '✓ تحقق',
        'task3.errMixed': 'لقد كتبت بالغتين العربية و الانجليزية اختر واحده',
        'task3.errInvalid': 'غير مسموح بالارقام او الرموز او المسافات من فضلك اختر يوم',
        'task3.errEmpty': 'من فضلك اكتب يوماً.',
        'task3.unknown': 'يبدو أنك اخترت:',
        'task3.errWrongScript': 'الرجاء الكتابة بالعربية',

        // task4 ToDo list
        "task4.title": "قائمة المهام",
        "task4.placeholder": "اضف مهمة جديدة",
        "task4.add": "اضافة",

        // task5 products menu
        "task5.title": "قائمة المنتجات",
        "task5.maxPriceLabel": "السعر الأقصى",
        "task5.maxPricePlaceholder": "السعر الأقصى",
        "task5.priceCategory": "الفئة السعرية",
        "task5.all": "الكل",
        "task5.low": "منخفض",
        "task5.medium": "متوسط",
        "task5.high": "مرتفع",
        "task5.startsWithLabel": "بحرف البداية",
        "task5.startsWithPlaceholder": "حرف البداية",
        "task5.filter": "تصفية",
        "task5.productsCount": "عدد المنتجات",
        "task5.currency": "جنيه",
        "task5.empty": "لا توجد منتجات مطابقة",
        "task5.product.watch": "ساعة يد",
        "task5.product.backpack": "حقيبة ظهر",
        "task5.product.headphones": "سماعة رأس",
        "task5.product.bottle": "زجاجة ماء",
        "task5.product.notebook": "دفتر ملاحظات",
        "task5.delete": "حذف",
        "task5.edit": "تعديل",

        // task6products with tax value
        "task6.tax": "بعد الضريبة ",

        // task8
        "task8.title": "مكتبتنا",
        "task8.labelBooks": "كتب",
        "task8.categoryLabel": "كتاب",
        "task8.authorLabel": "المؤلف:",
        "task8.pagesLabel": "الصفحات:",
        "task8.totalPages": "إجمالي الصفحات في المكتبة:",

        // task10 user mangment system
        "task10.title": "نظام ادارة المستخدمين",
        "task10.name": "الاسم",
        "task10.age": "العمر",
        "task10.email": "البريد الإلكتروني",
        "task10.showMessage": "إضافة مستخدم",
        "task10.errEmpty": "الرجاء ملء كافة الحقول",

        // task11
        "task11.title": "الساعة التفاعلية",
        "task11.timePlaceholder": "12:00:00 PM",
        "task11.start": "ابدأ الساعة",
        "task11.stop": "أوقف الساعة",
        "task11.goToLink": "اذهب إلى رابط"
    },
    en: {
        'app.title': 'JavaScript Applications',
        'aria.menu': 'Menu',
        'aria.language': 'Toggle language',
        'lang.toggleLabel': 'ع',

        'hero.welcome': 'Welcome to simple JS Applications Platform',

        //task 1
        'card.task1.title': 'welcoming message',
        'card.task1.desc': "Add your data, and we will greet you.",

        //task 2
        'card.task2.title': 'Interactive Calculator',
        'card.task2.desc': 'A modern calculator supporting basic arithmetic operations.',

        //task 3
        'card.task3.title': 'Weekly Planner',
        'card.task3.desc': "What's your favorite day and we'll tell you in a special message",

        //task 4
        'card.task4.title': 'Task list Manager',
        'card.task4.desc': "Add your favorite task and start working",

        //task 5
        'card.task5.title': 'Products Menu',
        'card.task5.desc': 'Filter products by price or starting letter',

        //task 6
        'card.task6.title': 'Products Menu with tax value',
        'card.task6.desc': 'products price befor and after tax',

        // task 8
        'card.task8.title': 'Library Menu',
        'card.task8.desc': 'Library Menu with varaities of types',

        // task 9
        'card.task9.title': 'Products Menu with edit feature',
        'card.task9.desc': 'Edit products price',

        //task 10
        'card.task10.title': 'User Management System',
        'card.task10.desc': 'Learn how to manage a user schedule with add and delete capabilities',

        //task 11
        'card.task11.title': 'Interactive Clock',
        'card.task11.desc': 'Learn how to create an interactive clock with control capabilities using JavaScript.',

        'card.viewApp': 'View App',

        'nav.taskPrefix': 'Task',

        // Shared stub-page strings
        'stub.comingSoon': 'Coming Soon',
        'stub.description': 'This task is registered in the router and ready to be implemented.',
        'stub.taskLabel': 'Task',

        // task1 user welcoming
        "task1.title": "Enter your information",
        "task1.name": "Your name",
        "task1.age": "Your age",
        "task1.hobby": "Your hobby",
        "task1.showMessage": "Show Message",
        "task1.message": "Message",
        "task1.errEmpty": "Please fill all fields",

        // task2 (calculator) strings
        'task2.title': 'Calculator Form',
        'task2.firstNum': 'First Number',
        'task2.secondNum': 'Second Number',
        'task2.add': '➕ Add',
        'task2.subtract': '➖ Subtract',
        'task2.multiply': '✖ Multiply',
        'task2.divide': '➗ Divide',
        'task2.result': 'Result:',
        'task2.errInvalid': 'Please enter valid numbers in both fields.',
        'task2.errDivZero': 'Cannot divide by zero.',

        // task3 (favorite day) strings
        'task3.title': 'What is your Favorite Day?',
        'task3.placeholder': 'Write your favorite day here',
        'task3.btn': '✓ Check',
        'task3.errMixed': 'You typed in both Arabic and English, please choose one',
        'task3.errInvalid': 'Numbers, symbols and spaces are not allowed, please enter a day',
        'task3.errEmpty': 'Please write a day.',
        'task3.unknown': 'It seems you chose:',
        'task3.errWrongScript': 'Please type in English',

        // task4 ToDo list
        "task4.title": "Task list",
        "task4.placeholder": "Add a new task",
        "task4.add": "Add",

        // task5 products menu
        "task5.title": "Products Menu",
        "task5.maxPriceLabel": "Max Price",
        "task5.maxPricePlaceholder": "Max price",
        "task5.priceCategory": "Price Category",
        "task5.all": "All",
        "task5.low": "Low",
        "task5.medium": "Medium",
        "task5.high": "High",
        "task5.startsWithLabel": "Starts With",
        "task5.startsWithPlaceholder": "Starting letter",
        "task5.filter": "Filter",
        "task5.productsCount": "Products count",
        "task5.currency": "EGP",
        "task5.empty": "No matching products",
        "task5.product.watch": "Watch",
        "task5.product.backpack": "Backpack",
        "task5.product.headphones": "Headphones",
        "task5.product.bottle": "Water Bottle",
        "task5.product.notebook": "Notebook",
        "task5.delete": "Delete",
        "task5.edit": "Edit",

        // task6products with tax value
        "task6.tax": "after tax ",

        // task8
        "task8.title": "Our Library",
        "task8.labelBooks": "Books",
        "task8.categoryLabel": "Book",
        "task8.authorLabel": "Author:",
        "task8.pagesLabel": "Pages:",
        "task8.totalPages": "Total Pages in Library:",

        // task10 user mangment system
        "task10.title": "User management system form",
        "task10.name": "Name",
        "task10.age": "Age",
        "task10.email": "Email",
        "task10.showMessage": "Add user",
        "task10.errEmpty": "Please fill all fields",

        // task11
        "task11.title": "Interactive Clock",
        "task11.timePlaceholder": "12:00:00 PM",
        "task11.start": "Start the clock",
        "task11.stop": "Stop the clock",
        "task11.goToLink": "Go to link"
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
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

export function initI18n() {
    applyDocumentDirection();
    applyShellTranslations();
}
