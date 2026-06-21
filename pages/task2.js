// here we have a trick on the input text we need to check on it if numbers
// legal arabic, then normalize it, then check for corresponding message
//  legal english, then extract its message
import { t } from '../i18n.js';

export const styles = `
.container {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  margin: auto auto;
  margin-top: 5%;
  padding: 40px 20px;
  background: #c76b4f;
  box-sizing: border-box;
}

.day-checker {
  width: 100%;
  max-width: 900px;
  text-align: center;
  color: white;
}

.day-checker h1 {
  font-size: 24px;
  margin-bottom: 40px;
  font-weight: 700;
}

.day-input {
  width: 100%;
  max-width: 800px;
  height: 70px;
  border: 4px solid rgba(255,255,255,0.15);
  border-radius: 18px;
  background: #f7e9e3;
  color: #a5533a;
  font-size: 32px;
  text-align: right;
  padding: 0 30px;
  outline: none;
  box-sizing: border-box;
}

.day-input::placeholder {
  color: #a5533a;
  font-size:28px
}

.check-btn {
  margin-top: 20px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  padding: 30px 40px;
  font-size: 32px;
  color: white;
  background: linear-gradient(135deg, #c76b4f, #a5533a);
  box-shadow: 0 0 30px #c76b4f;
  transition: transform 0.2s ease;
}

.check-btn:hover {
  transform: translateY(-2px);
}

.result {
  margin-top: 20px;
  min-height: 50px;
  border-radius: 20px;
  background: #f7e9e3;
  color: #a5533a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
  padding: 10px;
}

.message{
  margin-top: 25px;
  min-height: 50px;
  border-radius: 20px;
  background: #f7e9e3;
  color: #a5533a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 200;
  padding: 10px;

}
`;

export function render() {
  return `
    <div class="container">
    <div class="day-checker">
      <h1>${t('task3.title')}</h1>

      <input
        id="favorite-day"
        class="day-input"
        type="text"
        placeholder="${t('task3.placeholder')}"
      />

      <br />

      <button id="check-btn" class="check-btn">
        ${t('task3.btn')}
      </button>
      <div id="message" class="message"></div>
      <div id="result" class="result"></div>
    </div>
    </div>
  `;
}

export function init() {
  const input = document.getElementById("favorite-day");
  const result = document.getElementById("result");
  const message = document.getElementById("message");

  const uiLang = document.documentElement.lang;
  input.dir = uiLang === 'ar' ? 'rtl' : 'ltr';
  input.style.textAlign = uiLang === 'ar' ? 'right' : 'left';

  const messages = {
    "السبت": "السبت بداية أسبوع جديدة!",
    "الاحد": "الأحد يوم مميز للكثيرين! ",
    "الاثنين": "الاثنين يوم الإنتاجية",
    "الثلاثاء": "الثلاثاء منتصف الطريق.",
    "الاربعاء": "الأربعاء يوم ممتاز للعمل.",
    "الخميس": "الخميس يحمل أجواء نهاية الأسبوع.",
    "الجمعه": "الجمعة يوم رائع للاسترخاء.",
    // English keys (lowercase) mapped to the same Arabic messages
    "saturday": "saturday is a new start",
    "sunday": "sunday is a special for everyone!",
    "monday": "monday is the active day",
    "tuesday": "tuesday have way have been cut.",
    "wednesday": "wednesday is almost to get break",
    "thursday": "thursday is the key for holiday",
    "friday": "relax it's friday"
  };

  function normalizeArabic(text) {
    if (!text) return "";

    return text
      .trim()
      // 1. Remove Arabic diacritics (Tashkeel)
      .replace(/[\u064B-\u0652]/g, "")

      // 2. Remove Tatweel (Kashida)
      .replace(/\u0640/g, "")

      // 3. Unify Alef variants (أ , إ , آ) to a plain Alef (ا)
      .replace(/[\u0623\u0625\u0622]/g, "\u0627")

      // 4. Unify Taa Marbuta (ة) to Haa (ه)
      .replace(/ة/g, "ه")

      // 5. Unify Alef Maksura (ى) to Yeh (ي)
      .replace(/ى/g, "ي");
  }

  function normalizeEnglishDay(text) {
    if (!text) return "";
    // 1. Clean the text (lowercase, remove spaces and trailing periods)
    const cleanStr = text.trim().toLowerCase().replace(/\./g, "");
    // console.log("cleanStr:", JSON.stringify(cleanStr));
    return cleanStr;
  }

  //check language fun
  const checkLang = (input) => {
    // clear previous error messages
    message.textContent = "";

    // check val language detection
    const hasArabic = /[\u0600-\u06FF]/.test(input);
    const hasEnglish = /[a-zA-Z]/.test(input);

    let res;
    switch (true) {
      case (hasArabic && hasEnglish):
        message.textContent = t('task3.errMixed');
        break;
      case (hasArabic && uiLang === 'en'):
        message.textContent = t('task3.errWrongScript');
        break;
      case (hasEnglish && uiLang === 'ar'):
        message.textContent = t('task3.errWrongScript');
        break;
      case hasArabic:
        res = normalizeArabic(input);
        handleClick(res);
        break;
      case hasEnglish:
        res = normalizeEnglishDay(input);
        handleClick(res);
        break;
      default:
        message.textContent = t('task3.errInvalid');
        break;
    }
  }

  // handel input click
  const handleInputValidation = (e) => {
    // get value of the input field and replace any digits (0-9) or (١-٩) with an empty string
    const currentInputValue = e.target.value.replace(/[\d\u0660-\u0669\-=\/'\[\],.؛،;]/g, '');;
    // console.log(`currentInputValue before fixing ${currentInputValue}`)

    checkLang(currentInputValue)
  };


  const handleClick = (currentDataVal) => {

    if (!currentDataVal) {
      result.textContent = t('task3.errEmpty');
      return;
    }

    // exact lookup or return user data
    result.textContent = messages[currentDataVal] || `${t('task3.unknown')} ${currentDataVal}`;
  };

  input.addEventListener('input', handleInputValidation);

  return () => {
    input.removeEventListener("input", handleInputValidation);
  };
}
