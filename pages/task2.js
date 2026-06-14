// here we have a trick on the input text we need to check on it if numbers
// legal arabic, then normalize it, then check for corresponding message
//  legal english, then extract its message

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
  height: 90px;
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
  margin-top: 30px;
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
  margin-top: 40px;
  min-height: 110px;
  border-radius: 20px;
  background: #f7e9e3;
  color: #a5533a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  font-weight: 700;
  padding: 20px;
}

.message{
 display: none;
 margin-top: 40px;
  min-height: 110px;
  border-radius: 20px;
  background: #f7e9e3;
  color: #a5533a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  padding: 5px;

}
`;

export function render() {
  return `
    <div class="container">
    <div class="day-checker">
      <h1>ما هو يومك المفضل؟</h1>

      <input
        id="favorite-day"
        class="day-input"
        type="text"
        placeholder="اكتب هنا يومك المفضل "
      />

      <br />

      <button id="check-btn" class="check-btn">
        ✓ تحقق
      </button>
      <div id="message" class="message"></div>
      <div id="result" class="result"></div>
    </div>
    </div>
  `;
}

export function init() {
  const input = document.getElementById("favorite-day");
  const button = document.getElementById("check-btn");
  const result = document.getElementById("result");
  const message = document.getElementById("message");

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
    "monday": "sunday is the active day",
    "tuesday": "tuesday have way have been cut.",
    "wednesday": "wednesday is almost to get break",
    "thursday": "the key for holiday",
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
      .replace(/[\u0623\u0625\u0622]/g, "\u0627") ///this case is not working[آ]

      // 4. Unify Taa Marbuta (ة) to Haa (ه)
      .replace(/ة/g, "ه")//this check is not working

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


  //replace any digits (0-9) or (١-٩) with an empty string
  input.addEventListener('input', (event) => {
    // event.target.value = event.target.value.replace(/[\d\u0660-\u0669]/g, '');
    event.target.value = event.target.value.replace(/[\d\u0660-\u0669\-=\/'\[\],.؛،;]/g, '');
  });

  input.addEventListener("input", (e) => {
    //check on the userInput to prevent wrong typing and show a little error message if so
    // get value of the input field
    const currentInputValue = e.target.value;
    // console.log(`currentInputValue before fixing ${currentInputValue}`)
    // clear previous error messages
    message.textContent = "";
    // check on the val language detection
    const hasArabic = /[\u0600-\u06FF]/.test(currentInputValue);
    const hasEnglish = /[a-zA-Z]/.test(currentInputValue);
    if (hasArabic && !hasEnglish) {
      // console.log("Language: Pure Arabic");
      // textInput.style.direction = 'rtl';
      //TODO1:  using normalize function and check for the input day massage
      const res = normalizeArabic(currentInputValue)
      // console.log(`currentInputValue after fixing ${res}`)
      //TODO 1-1:retrieve the message
      handleClick(res);

    } else if (hasEnglish && !hasArabic) {
      // console.log("Language: Pure English");
      // textInput.style.direction = 'ltr';
      //TODO2: check for the input day massage with english
      const res = normalizeEnglishDay(currentInputValue);
      // console.log(`currentInputValue after fixing ${res}`)
      //TODO 2-1:retrieve the message
      handleClick(res);

    } else if (hasArabic && hasEnglish) {
      message.textContent = "لقد كتبت بالغتين العربية و الانجليزية اختر واحده ";
      // console.log("Language: Mixed (Both Arabic and English)");
    } else {
      message.textContent = "غير مسموح بالارقام او الرموز من فضلك اختر يوم ";
      // console.log("numbers is not working");
    }
  });


  const handleClick = (currentDataVal) => {

    if (!currentDataVal) {
      result.textContent = "من فضلك اكتب يوماً.";
      return;
    }

    // exact lookup or return user data
    result.textContent = messages[key] || `يبدو أنك اخترت: ${currentDataVal}`;
  };

  return () => {
    button.removeEventListener("click", handleClick);
  };
}