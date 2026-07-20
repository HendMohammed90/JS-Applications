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

        // task12
        'card.task12.title': 'ساحة اللعب الخلفية',
        'card.task12.desc': 'تعلم كيفية تغيير لون الخلفية باستخدام جافا سكريبت والتخزين المحلي.',

        // task13
        'card.task13.title': 'عرض الملف الشخصي',
        'card.task13.desc': 'تعلم كيفيه عرض المعلومات بطريقة مميزة',

        // task14
        'card.task14.title': 'Set & Map',
        'card.task14.desc': 'تعلم كيفية استخدام Sets and Maps في جافا سكريبت',

        // task15
        'card.task15.title': 'أداة التحقق من صحة النموذج',
        'card.task15.desc': 'هذه الأداة تعمل كأداة أساسية للتحقق من صحة النموذج',

        //task16
        'card.task16.title': 'مدقق نموذج تسجيل الدخول',
        'card.task16.desc': 'هذا يعمل كسيناريو للتحقق من صحة نموذج تسجيل الدخول',


        //task17
        'card.task17.title': 'دالة البناء',
        'card.task17.desc': 'تعرّف على كيفية إنشاء الكائنات من دالة البناء',


        //task18
        'card.task18.title': 'نظام إدارة المكتبات',
        'card.task18.desc': 'تعلم كيفية التعامل مع معلومات الكتب وعرضها باستخدام JavaScript، بالإضافة إلى بناء واجهة تفاعلية لعرض تفاصيل الكتب.',

        // task19
        'card.task19.title': 'مؤقت العد التنازلي للحدث',
        'card.task19.desc': 'تعرف على كيفية تنفيذ العد التنازلي للحدث باستخدام JavaScript، وإضافة بعض التأثيرات المتقدمة لتحسين تجربة المستخدم.',

        // task20
        'card.task20.title': 'إنشاء تطبيق',
        'card.task20.desc': 'تعلم كيفية إنشاء رقم عشوائي جديد باستخدام جافا سكريبت.',

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
        "task11.goToLink": "اذهب إلى رابط",

        // task12
        "task12.title": "مُحدد ألوان الخلفية",
        "task12.red": "أحمر",
        "task12.yellow": "أصفر",
        "task12.green": "أخضر",
        "task12.reset": "إعادة الضبط",
        "task12.footer": "استمتع بتجربة تغيير الألوان! 😊",

        //task13
        "task13.title": "عرض تطبيقي",
        "task13.nameLabel": "الاسم:",
        "task13.nameValue": "اسامة زينهم",
        "task13.ageLabel": "العمر:",
        "task13.ageValue": "30",
        "task13.jobLabel": "الوظيفة:",
        "task13.jobValue": "مهندس برمجيات",
        "task13.cityLabel": "المدينة:",
        "task13.cityValue": "المنيا",
        "task13.zipLabel": "الرمز البريدي:",
        "task13.zipValue": "12345",
        "task13.langLabel": "اللغة:",
        "task13.langValue": "العربية",
        "task13.showWelcome": "عرض رسالة ترحيب",

        //task14
        "task14.title": "متابع المنتجات (Product Tracker)",
        "task14.productNamePlaceholder": "اسم المنتج",
        "task14.productPricePlaceholder": "السعر",
        "task14.add": "إضافة منتج",
        "task14.check": "التحقق من وجوده",
        "task14.totalCost": "إجمالي التكلفة:",
        "task14.productListTitle": "قائمة المنتجات المتوفرة:",
        "task14.currency": "جنيه",

        // task15
        "task15.title": "أداة التحقق من البيانات (Form Validation)",
        "task15.userNamePlaceholder": "الاسم (من 3 إلى 10 أحرف دون رموز خاصة)",
        "task15.userEmailPlaceholder": "البريد الإلكتروني (مثال: name@domain.com)",
        "task15.userPhonePlaceholder": "رقم الهاتف (10 أرقام بالضبط)",
        "task15.submit": "التحقق من البيانات",
        "task15.successMessage": "تهانينا! تم التحقق من جميع البيانات بنجاح.",
        "task15.nameError": "الاسم غير صالح! يجب أن يتراوح طوله بين 3 إلى 10 أحرف وبدون رموز خاصة.",
        "task15.emailError": "البريد الإلكتروني غير صالح! يرجى إدخال صيغة بريد صحيحة.",
        "task15.phoneError": "رقم الهاتف غير صالح! يجب أن يتكون من 10 أرقام بالضبط.",
        "task15.formErrorMessage": "يرجى تصحيح الحقول المميزة.",

        //task16
        "task16.title": "تسجيل الدخول والتحقق من البيانات",
        "task16.usernamePlaceholder": "اسم المستخدم (يبدأ بحرف، من 5 إلى 15 حرفاً)",
        "task16.passwordPlaceholder": "كلمة المرور (من 8 إلى 20 حرفاً، تحتوي على حرف كبير ورقم)",
        "task16.submit": "تسجيل الدخول",
        "task16.usernameError": "اسم المستخدم غير صالح! يجب أن يبدأ بحرف ويتراوح بين 5 إلى 15 حرفاً.",
        "task16.passwordError": "كلمة المرور غير صالحة! يجب أن تكون بين 8 إلى 20 حرفاً وتحتوي على حرف كبير واحد ورقم واحد على الأقل.",
        "task16.successMessage": "تم التحقق من البيانات المدخلة بنجاح! جاري تسجيل الدخول...",

        // task17
        "task17.title": "عرض تقديمي لتطبيقي",
        "task17.hello": "مرحباً",
        // "task17.name": "",
        "task17.youAre": "أنت عمرك هو",
        // "task17.years": "", "",
        "task17.yourEmail": " وعنوان بريدك الإلكتروني ",
        // "task17.email": "", "",
        "task17.changeName": "تغيير الاسم",
        "task17.user1Name": "احمد",
        "task17.user2Name": "سارة",
        "task17.user1Age": "٣٠",
        "task17.user2Age": "٢٠",
        "task17.user1Email": "ahmed@gmail.com",
        "task17.user2Email": "sara@gmail.com",

        // task18
        "task18.title": "عرض تطبيقي",
        "task18.startReading": "ابدأ القراءة",
        "task18.totalSizeLabel": "إجمالي حجم ملفات الكتب الإلكترونية:",
        "reading": "جاري القرآة...",
        "finish": "انتهيت الحمد لله",
        "book": "كتاب",
        "by": "بواسطة",
        "pages": "صفحة",

        // task19
        "task19.title": "عرض تطبيقي",
        "task19.placeholder": "انقر على الزر لبدء العد التنازلي",
        "task19.start": "ابدأ العد التنازلي",
        "task19.please": "من فضلك اختر الوقت المطلوب...",

        // task20
        "task20.title": "عرض تطبيقي",
        "task20.generate": "توليد رقم عشوائي جديد",
        "task20.showAll": "عرض جميع الأرقام",

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


        // task12
        'card.task12.title': 'Background PlayGround',
        'card.task12.desc': 'Learn how to change backgroundColor using JS and LocalStorage.',

        // task13
        'card.task13.title': 'View Profile',
        'card.task13.desc': 'Learn how to present information in a unique way',

        // task14
        'card.task14.title': 'Set and Map',
        'card.task14.desc': 'Learn how to working with Sets and Maps in javascript',

        // task15
        'card.task15.title': 'Form Validator tool',
        'card.task15.desc': 'This acts like a basic form validation tool',

        //task16
        'card.task16.title': 'Login Form Validator',
        'card.task16.desc': 'This acts like a login form validation senario',

        //task17
        'card.task17.title': 'Constractor function',
        'card.task17.desc': 'Learn about creating opjects from Constractor function',

        //task18
        'card.task18.title': 'Library Management System',
        'card.task18.desc': 'Learn how to handle and display book information using JavaScript, as well as build an interactive interface to display book details.',


        // task19
        'card.task19.title': 'Event Countdown Timer',
        'card.task19.desc': 'Learn how to implement an Event countdown using JavaScript, adding some advanced effects to improve the user experience.',

        // task20
        'card.task20.title': 'Generateing App',
        'card.task20.desc': 'Learn how to Generate a new random number using JavaScript.',

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
        "task11.goToLink": "Go to link",

        // task12
        "task12.title": "Background Color Selector",
        "task12.red": "Red",
        "task12.yellow": "Yellow",
        "task12.green": "Green",
        "task12.reset": "Reset",
        "task12.footer": "Enjoy the color change experience! 😊",

        //task13

        "task13.title": "My Application",
        "task13.nameLabel": "Name:",
        "task13.nameValue": "Osama Zeinhom",
        "task13.ageLabel": "Age:",
        "task13.ageValue": "30",
        "task13.jobLabel": "Job:",
        "task13.jobValue": "Software Engineer",
        "task13.cityLabel": "City:",
        "task13.cityValue": "Minya",
        "task13.zipLabel": "Postal Code:",
        "task13.zipValue": "12345",
        "task13.langLabel": "Language:",
        "task13.langValue": "Arabic",
        "task13.showWelcome": "Displays a welcome message",

        // task14
        "task14.title": "Product Tracker",
        "task14.productNamePlaceholder": "Product Name",
        "task14.productPricePlaceholder": "Price",
        "task14.add": "Add Product",
        "task14.check": "Check Existence",
        "task14.totalCost": "Total Cost:",
        "task14.productListTitle": "List of Available Products:",
        "task14.currency": "Pound",

        // task15
        "task15.title": "Form Validation Tool",
        "task15.userNamePlaceholder": "Name (3-10 characters without special characters)",
        "task15.userEmailPlaceholder": "Email (example: name@domain.com)",
        "task15.userPhonePlaceholder": "Phone number (exactly 10 digits)",
        "task15.submit": "Data Verification",
        "task15.successMessage": "Congratulations! All data has been verified successfully.",
        "task15.nameError": "The name is invalid! It must be 3 to 10 characters long and no special characters.",
        "task15.emailError": "The email is invalid! Please enter a valid email format.",
        "task15.phoneError": "Invalid phone number! Must be exactly 10 digits long.",
        "task15.formErrorMessage": "Please correct the highlighted fields.",

        // task16
        "task16.title": "Login and data verification",
        "task16.usernamePlaceholder": "Username (starts with a letter, 5 to 15 characters)",
        "task16.passwordPlaceholder": "Password (8 to 20 characters, contains at least one capital letter and one number)",
        "task16.submit": "Login",
        "task16.usernameError": "Invalid username! Must start with a letter and be between 5 and 15 characters.",
        "task16.passwordError": "Invalid password! Must be between 8 and 20 characters and contain at least one capital letter and one number.",
        "task16.successMessage": "Data verified successfully! Logging in...",

        // task17
        "task17.title": "My application presentation",
        "task17.hello": "Hello",
        // "task17.name": "",
        "task17.youAre": "You are",
        // "task17.years": "",
        "task17.yourEmail": "years old, and your email address is",
        // "task17.email": "",
        "task17.changeName": "Change Name",
        "task17.user1Name": "Ahmed",
        "task17.user2Name": "Sara",
        "task17.user1Age": "30",
        "task17.user2Age": "20",
        "task17.user1Email": "ahmed@gmail.com",
        "task17.user2Email": "sara@gmail.com",

        // task18
        "task18.title": "View my application",
        "task18.startReading": "Start Reading",
        "task18.totalSizeLabel": "Total eBook file size:",
        "reading": "Reading...",
        "finish": "Done",
        "by": "By",
        "pages": "pages",
        "book": "",

        // task19
        "task19.title": "View my application",
        "task19.placeholder": "Click the button to start the countdown",
        "task19.start": "Start the countdown",
        "task19.please": "Please select a target date",

        // task20
        "task20.title": "Show my application",
        "task20.generate": "Generate a new random number",
        "task20.showAll": "Show all numbers",

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
