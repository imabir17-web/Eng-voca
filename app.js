const categories = [
  "工作與辦公室",
  "會議與溝通",
  "人資與職涯",
  "財務與合約",
  "行銷與銷售",
  "差旅與交通",
  "購物與服務",
  "物流與製造",
  "科技與資料",
  "日常實用"
];

const rows = [
  ["agenda", "n.", "議程", "Please check the agenda before the meeting.", "開會前請先查看議程。", "工作與辦公室"],
  ["appointment", "n.", "預約；約會", "I have an appointment with the sales manager at two.", "我兩點和業務經理有約。", "工作與辦公室"],
  ["available", "adj.", "有空的；可取得的", "The meeting room is available after three o'clock.", "這間會議室三點後可以使用。", "工作與辦公室"],
  ["colleague", "n.", "同事", "My colleague helped me finish the report.", "我的同事幫我完成了報告。", "工作與辦公室"],
  ["department", "n.", "部門", "She works in the marketing department.", "她在行銷部門工作。", "工作與辦公室"],
  ["document", "n.", "文件", "Please sign the document at the bottom of the page.", "請在文件的頁面底部簽名。", "工作與辦公室"],
  ["equipment", "n.", "設備；器材", "All safety equipment must be checked regularly.", "所有安全設備都必須定期檢查。", "工作與辦公室"],
  ["expense", "n.", "費用；支出", "Keep your receipts for travel expenses.", "請保留差旅費用的收據。", "工作與辦公室"],
  ["headquarters", "n.", "總公司；總部", "The company's headquarters is in Seattle.", "這家公司的總部位於西雅圖。", "工作與辦公室"],
  ["inventory", "n.", "庫存", "We check the store's inventory every Friday.", "我們每週五清點店內庫存。", "工作與辦公室"],
  ["manager", "n.", "經理；主管", "The manager will review your application tomorrow.", "經理明天會審查你的申請。", "工作與辦公室"],
  ["office", "n.", "辦公室", "Our new office is close to the train station.", "我們的新辦公室離火車站很近。", "工作與辦公室"],
  ["policy", "n.", "政策；規定", "The company has a new work-from-home policy.", "公司有新的居家工作規定。", "工作與辦公室"],
  ["project", "n.", "專案；計畫", "The project should be completed by the end of May.", "這個專案應在五月底前完成。", "工作與辦公室"],
  ["report", "n.", "報告", "Could you send me the monthly sales report?", "你可以把每月銷售報告寄給我嗎？", "工作與辦公室"],
  ["schedule", "n./v.", "行程表；安排", "The training session is scheduled for Monday morning.", "培訓課程安排在星期一早上。", "工作與辦公室"],
  ["staff", "n.", "員工；職員", "All staff members must wear an identification card.", "所有員工都必須佩戴識別證。", "工作與辦公室"],
  ["supply", "n./v.", "用品；供應", "We need to order more office supplies.", "我們需要訂購更多辦公用品。", "工作與辦公室"],
  ["task", "n.", "任務；工作", "This task will take about two hours.", "這項任務大約需要兩個小時。", "工作與辦公室"],
  ["workplace", "n.", "工作場所", "The company is trying to create a safer workplace.", "公司正努力打造更安全的工作環境。", "工作與辦公室"],

  ["announce", "v.", "宣布", "The company will announce the results this afternoon.", "公司今天下午會公布結果。", "會議與溝通"],
  ["arrange", "v.", "安排", "I will arrange a meeting with the design team.", "我會安排和設計團隊開會。", "會議與溝通"],
  ["attend", "v.", "參加；出席", "More than fifty people attended the workshop.", "超過五十人參加了這場工作坊。", "會議與溝通"],
  ["confirm", "v.", "確認", "Please confirm your attendance by Friday.", "請在星期五前確認是否出席。", "會議與溝通"],
  ["contact", "v./n.", "聯絡；聯絡人", "Contact customer service if you need help.", "如果需要協助，請聯絡客服。", "會議與溝通"],
  ["discuss", "v.", "討論", "We need to discuss the budget before making a decision.", "做決定前，我們需要先討論預算。", "會議與溝通"],
  ["explain", "v.", "說明；解釋", "The technician explained how to use the machine.", "技術人員說明了如何操作這台機器。", "會議與溝通"],
  ["improve", "v.", "改善；提升", "The new system will improve customer service.", "新系統將提升客戶服務品質。", "會議與溝通"],
  ["inform", "v.", "通知；告知", "We will inform you when your order is ready.", "訂單準備好後，我們會通知你。", "會議與溝通"],
  ["introduce", "v.", "介紹；推出", "Let me introduce our new team member.", "讓我介紹我們的新團隊成員。", "會議與溝通"],
  ["invite", "v.", "邀請", "We invited several clients to the opening event.", "我們邀請了幾位客戶參加開幕活動。", "會議與溝通"],
  ["mention", "v.", "提到", "He mentioned the problem during the meeting.", "他在會議中提到了這個問題。", "會議與溝通"],
  ["negotiate", "v.", "協商；談判", "The two companies are negotiating a new contract.", "兩家公司正在協商一份新合約。", "會議與溝通"],
  ["postpone", "v.", "延後；延期", "They postponed the conference because of the storm.", "他們因暴風雨而延後了會議。", "會議與溝通"],
  ["prepare", "v.", "準備", "Please prepare a short presentation for the meeting.", "請為會議準備一份簡短的簡報。", "會議與溝通"],
  ["present", "v.", "發表；呈現", "Maria will present the sales plan to the board.", "瑪麗亞將向董事會說明銷售計畫。", "會議與溝通"],
  ["recommend", "v.", "推薦；建議", "I recommend taking the earlier train.", "我建議搭較早的那班火車。", "會議與溝通"],
  ["respond", "v.", "回覆；回應", "Please respond to the email by tomorrow.", "請在明天前回覆這封電子郵件。", "會議與溝通"],
  ["submit", "v.", "提交", "Employees must submit their forms online.", "員工必須在線上提交表格。", "會議與溝通"],
  ["update", "n./v.", "最新消息；更新", "I'll update you after I speak with the client.", "我和客戶談過後會告訴你最新情況。", "會議與溝通"],

  ["accommodation", "n.", "住宿", "The tour price includes hotel accommodation.", "旅遊費用包含飯店住宿。", "差旅與交通"],
  ["airline", "n.", "航空公司", "The airline offers three flights a day.", "這家航空公司每天提供三個航班。", "差旅與交通"],
  ["arrival", "n.", "抵達；到達", "Please call us upon your arrival at the hotel.", "抵達飯店時請打電話給我們。", "差旅與交通"],
  ["baggage", "n.", "行李", "Each passenger may check one piece of baggage.", "每位乘客可以託運一件行李。", "差旅與交通"],
  ["boarding", "n.", "登機", "Boarding will begin thirty minutes before departure.", "登機將在起飛前三十分鐘開始。", "差旅與交通"],
  ["cancel", "v.", "取消", "You can cancel the reservation without a fee.", "你可以免費取消預訂。", "差旅與交通"],
  ["delay", "n./v.", "延誤；延遲", "The flight was delayed due to bad weather.", "航班因天候不佳而延誤。", "差旅與交通"],
  ["destination", "n.", "目的地", "Paris is our final destination.", "巴黎是我們的最終目的地。", "差旅與交通"],
  ["departure", "n.", "出發；離開", "Check the screen for the departure time.", "請查看螢幕上的出發時間。", "差旅與交通"],
  ["flight", "n.", "航班；飛行", "My flight leaves at six in the morning.", "我的航班早上六點起飛。", "差旅與交通"],
  ["itinerary", "n.", "行程表", "The travel agent emailed us the final itinerary.", "旅行社把最終行程表寄給了我們。", "差旅與交通"],
  ["luggage", "n.", "行李", "You can leave your luggage at the front desk.", "你可以把行李寄放在櫃台。", "差旅與交通"],
  ["passenger", "n.", "乘客", "Passengers should remain seated until the bus stops.", "乘客應保持就座，直到巴士停妥。", "差旅與交通"],
  ["passport", "n.", "護照", "Make sure your passport is still valid.", "請確認你的護照仍在有效期限內。", "差旅與交通"],
  ["reservation", "n.", "預訂；訂位", "I'd like to make a dinner reservation for two.", "我想預訂兩人晚餐的座位。", "差旅與交通"],
  ["route", "n.", "路線", "This bus takes the fastest route to the airport.", "這班巴士走的是前往機場最快的路線。", "差旅與交通"],
  ["shuttle", "n.", "接駁車", "A free shuttle runs between the hotel and the airport.", "飯店和機場之間有免費接駁車。", "差旅與交通"],
  ["ticket", "n.", "票；票券", "Tickets can be purchased at the station.", "車票可以在車站購買。", "差旅與交通"],
  ["transfer", "v./n.", "轉乘；轉移", "You need to transfer to Line Two at Central Station.", "你需要在中央車站轉乘二號線。", "差旅與交通"],
  ["vehicle", "n.", "車輛", "Company vehicles are parked behind the building.", "公司的車輛停在大樓後方。", "差旅與交通"],

  ["advertise", "v.", "刊登廣告；宣傳", "The store advertises its weekly specials online.", "這家商店會在網路上宣傳每週特價商品。", "購物與服務"],
  ["bargain", "n.", "便宜貨；划算的交易", "This jacket was a real bargain.", "這件外套真的買得很划算。", "購物與服務"],
  ["cashier", "n.", "收銀員", "Please pay the cashier near the entrance.", "請向入口附近的收銀員付款。", "購物與服務"],
  ["charge", "n./v.", "費用；收費", "The hotel does not charge for breakfast.", "這家飯店的早餐不另外收費。", "購物與服務"],
  ["customer", "n.", "顧客", "Customers can return items within thirty days.", "顧客可以在三十天內退貨。", "購物與服務"],
  ["discount", "n.", "折扣", "Members receive a ten percent discount.", "會員可享九折優惠。", "購物與服務"],
  ["exchange", "n./v.", "交換；換貨", "Can I exchange this shirt for a larger size?", "我可以把這件襯衫換成大一號嗎？", "購物與服務"],
  ["fee", "n.", "費用；手續費", "There is a small fee for same-day delivery.", "當日配送需支付少許費用。", "購物與服務"],
  ["guarantee", "n./v.", "保證", "We guarantee that your package will arrive on time.", "我們保證你的包裹會準時送達。", "購物與服務"],
  ["invoice", "n.", "發票；請款單", "The invoice includes the cost of shipping.", "這張請款單包含運費。", "購物與服務"],
  ["order", "n./v.", "訂單；訂購", "Your order will be ready for pickup tomorrow.", "你的訂單明天可以取貨。", "購物與服務"],
  ["payment", "n.", "付款", "We accept payment by credit card.", "我們接受信用卡付款。", "購物與服務"],
  ["price", "n.", "價格", "The price includes tax and delivery.", "這個價格包含稅金和運費。", "購物與服務"],
  ["product", "n.", "產品；商品", "This product is made from recycled materials.", "這項產品由回收材料製成。", "購物與服務"],
  ["purchase", "n./v.", "購買；購買物", "You can purchase tickets through our website.", "你可以透過我們的網站購票。", "購物與服務"],
  ["receipt", "n.", "收據", "Would you like a printed receipt?", "你需要紙本收據嗎？", "購物與服務"],
  ["refund", "n./v.", "退款；退費", "It may take five days to receive your refund.", "退款可能需要五天才會入帳。", "購物與服務"],
  ["repair", "n./v.", "修理；維修", "The repair should be finished by Wednesday.", "維修應該會在星期三前完成。", "購物與服務"],
  ["service", "n.", "服務", "The restaurant is known for its excellent service.", "這家餐廳以優質服務聞名。", "購物與服務"],
  ["warranty", "n.", "保固", "This computer comes with a two-year warranty.", "這台電腦附有兩年保固。", "購物與服務"],

  ["accept", "v.", "接受", "The restaurant accepts online reservations.", "這家餐廳接受線上訂位。", "日常實用"],
  ["achieve", "v.", "達成；實現", "The team worked hard to achieve its goal.", "團隊努力工作以達成目標。", "日常實用"],
  ["apologize", "v.", "道歉", "We apologize for the inconvenience.", "造成不便，我們深感抱歉。", "日常實用"],
  ["apply", "v.", "申請；應用", "You can apply for the position online.", "你可以在線上申請這個職位。", "日常實用"],
  ["avoid", "v.", "避免", "Try to avoid traveling during rush hour.", "請盡量避免在尖峰時段出行。", "日常實用"],
  ["borrow", "v.", "借入", "May I borrow your pen for a moment?", "我可以借用一下你的筆嗎？", "日常實用"],
  ["choose", "v.", "選擇", "You can choose from three different plans.", "你可以從三種不同方案中選擇。", "日常實用"],
  ["complete", "v./adj.", "完成；完整的", "Please complete this form before your visit.", "請在來訪前填完這份表格。", "日常實用"],
  ["convenient", "adj.", "方便的", "The hotel is in a convenient location.", "這家飯店的位置很方便。", "日常實用"],
  ["deliver", "v.", "遞送；交付", "The package will be delivered this afternoon.", "包裹將在今天下午送達。", "日常實用"],
  ["describe", "v.", "描述", "Could you describe the item you lost?", "你可以描述一下遺失的物品嗎？", "日常實用"],
  ["experience", "n./v.", "經驗；體驗", "She has five years of sales experience.", "她有五年的銷售經驗。", "日常實用"],
  ["include", "v.", "包含", "The meal includes soup and a drink.", "這份餐點包含湯和飲料。", "日常實用"],
  ["offer", "n./v.", "提議；提供", "The company offers free training to new employees.", "公司為新進員工提供免費培訓。", "日常實用"],
  ["prefer", "v.", "較喜歡；偏好", "I prefer a window seat, if possible.", "可以的話，我比較想坐靠窗的位置。", "日常實用"],
  ["provide", "v.", "提供", "The hotel provides towels and toiletries.", "飯店提供毛巾和盥洗用品。", "日常實用"],
  ["receive", "v.", "收到；接收", "You will receive a confirmation email shortly.", "你很快就會收到確認信。", "日常實用"],
  ["request", "n./v.", "要求；請求", "We received your request for a room change.", "我們已收到你的換房需求。", "日常實用"],
  ["require", "v.", "需要；要求", "This job requires basic computer skills.", "這份工作需要基本的電腦技能。", "日常實用"],
  ["support", "n./v.", "支援；支持", "Our technical support team is available all day.", "我們的技術支援團隊全天候提供服務。", "日常實用"]
];

if (Array.isArray(window.TOEIC_ADDITIONAL_ROWS)) {
  rows.push(...window.TOEIC_ADDITIONAL_ROWS);
}

const words = rows.map(([word, pos, meaning, example, translation, category], index) => ({
  id: `${String(index + 1).padStart(3, "0")}-${word}`,
  word, pos, meaning, example, translation, category
}));

const STORAGE_KEY = "word-sprout-state-v1";
const defaultState = { statuses: {}, quizCorrect: 0, quizTotal: 0, topic: "全部", currentId: words[0].id, rate: 0.85 };
let state = loadState();
let currentWord = words.find((item) => item.id === state.currentId) || words[0];
let quizWord = null;
let quizAnswered = false;
let deferredInstallPrompt = null;
let toastTimer = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...saved, statuses: saved?.statuses || {} };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1900);
}

function getPool(topic = state.topic, includeLearned = false) {
  return words.filter((item) =>
    (topic === "全部" || item.category === topic) &&
    (includeLearned || state.statuses[item.id] !== "learned")
  );
}

function chooseNext(topic = state.topic) {
  let pool = getPool(topic).filter((item) => item.id !== currentWord?.id);
  if (!pool.length) pool = getPool(topic);
  if (!pool.length && topic !== "全部") {
    state.topic = "全部";
    renderTopicFilters();
    showToast("這個分類已完成，已切換到全部單字");
    pool = getPool("全部");
  }
  if (!pool.length) {
    currentWord = null;
    renderCompletedDeck();
    return null;
  }
  currentWord = pool[Math.floor(Math.random() * pool.length)];
  state.currentId = currentWord.id;
  saveState();
  renderWord();
  return currentWord;
}

function renderCompletedDeck() {
  $("#wordTopic").textContent = `${words.length.toLocaleString("zh-TW")} 個全部完成`;
  $("#wordNumber").textContent = `${words.length.toLocaleString("zh-TW")} / ${words.length.toLocaleString("zh-TW")}`;
  const wordText = $("#wordText");
  wordText.textContent = "Excellent!";
  wordText.classList.remove("long-word", "very-long-word");
  $("#wordPos").textContent = "";
  $("#wordMeaning").textContent = "你已記住所有單字";
  $("#exampleEn").textContent = "Review your progress or try a quiz to keep practicing.";
  $("#exampleZh").textContent = "查看學習進度，或進行測驗繼續練習吧！";
  $("#learnedButton").disabled = true;
  $("#againButton").disabled = true;
  updateStats();
}

function renderWord() {
  if (!currentWord) return;
  $("#wordTopic").textContent = currentWord.category;
  $("#wordNumber").textContent = `${String(words.indexOf(currentWord) + 1).padStart(2, "0")} / ${words.length}`;
  const wordText = $("#wordText");
  wordText.textContent = currentWord.word;
  wordText.classList.toggle("long-word", currentWord.word.length > 18);
  wordText.classList.toggle("very-long-word", currentWord.word.length > 30);
  $("#wordPos").textContent = currentWord.pos;
  $("#wordMeaning").textContent = currentWord.meaning;
  $("#exampleEn").textContent = currentWord.example;
  $("#exampleZh").textContent = currentWord.translation;
  $("#learnedButton").disabled = false;
  $("#againButton").disabled = false;
  updateStats();
}

function renderTopicFilters() {
  const container = $("#topicFilters");
  container.innerHTML = "";
  ["全部", ...categories].forEach((topic) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `topic-chip${state.topic === topic ? " active" : ""}`;
    button.textContent = topic;
    button.setAttribute("aria-pressed", state.topic === topic ? "true" : "false");
    button.addEventListener("click", () => {
      state.topic = topic;
      saveState();
      renderTopicFilters();
      chooseNext(topic);
    });
    container.appendChild(button);
  });
}

function setWordStatus(status) {
  if (!currentWord) return;
  state.statuses[currentWord.id] = status;
  saveState();
  showToast(status === "learned" ? "已加入記住的單字" : "已加入待複習");
  chooseNext();
}

function getEnglishVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  return voices.find((voice) => voice.lang === "en-US" && /Samantha|Google US English|Microsoft/.test(voice.name))
    || voices.find((voice) => voice.lang === "en-US")
    || voices.find((voice) => voice.lang.startsWith("en"));
}

function speak(text, button) {
  if (!("speechSynthesis" in window)) {
    showToast("這個瀏覽器不支援語音朗讀");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = state.rate;
  utterance.pitch = 1;
  const voice = getEnglishVoice();
  if (voice) utterance.voice = voice;
  button?.classList.add("speaking");
  utterance.onend = utterance.onerror = () => button?.classList.remove("speaking");
  window.speechSynthesis.speak(utterance);
}

function updateStats() {
  const learned = Object.values(state.statuses).filter((value) => value === "learned").length;
  const review = Object.values(state.statuses).filter((value) => value === "review").length;
  $("#learnedCount").textContent = learned;
  $("#totalCount").textContent = words.length.toLocaleString("zh-TW");
  $("#statLearned").textContent = learned;
  $("#statReview").textContent = review;
  if (state.quizTotal) {
    $("#statAccuracy").textContent = `${Math.round((state.quizCorrect / state.quizTotal) * 100)}%`;
    $("#statQuizDetail").textContent = `${state.quizCorrect} / ${state.quizTotal} 題答對`;
  } else {
    $("#statAccuracy").textContent = "—";
    $("#statQuizDetail").textContent = "尚未測驗";
  }
  const progress = $("#categoryProgress");
  progress.innerHTML = categories.map((category) => {
    const group = words.filter((item) => item.category === category);
    const done = group.filter((item) => state.statuses[item.id] === "learned").length;
    const percent = Math.round((done / group.length) * 100);
    return `<div class="progress-row"><div class="progress-label"><span>${category}</span><span>${done} / ${group.length}</span></div><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div></div>`;
  }).join("");
}

function newQuizQuestion() {
  quizAnswered = false;
  quizWord = words[Math.floor(Math.random() * words.length)];
  const quizWordText = $("#quizWord");
  quizWordText.textContent = quizWord.word;
  quizWordText.classList.toggle("long-word", quizWord.word.length > 18);
  quizWordText.classList.toggle("very-long-word", quizWord.word.length > 30);
  $("#quizPos").textContent = quizWord.pos;
  $("#quizTopic").textContent = quizWord.category;
  $("#quizFeedback").hidden = true;
  $("#nextQuestion").hidden = true;
  const distractors = words
    .filter((item) => item.id !== quizWord.id && item.meaning !== quizWord.meaning)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const options = [quizWord, ...distractors].sort(() => Math.random() - 0.5);
  const answerList = $("#answerList");
  answerList.innerHTML = "";
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.dataset.id = option.id;
    const label = document.createElement("span");
    label.textContent = String.fromCharCode(65 + index);
    button.append(label, document.createTextNode(option.meaning));
    button.addEventListener("click", () => answerQuiz(option.id));
    answerList.appendChild(button);
  });
}

function answerQuiz(selectedId) {
  if (quizAnswered) return;
  quizAnswered = true;
  const correct = selectedId === quizWord.id;
  state.quizTotal += 1;
  if (correct) state.quizCorrect += 1;
  saveState();
  $$(".answer-option").forEach((button) => {
    button.disabled = true;
    if (button.dataset.id === quizWord.id) button.classList.add("correct");
    if (button.dataset.id === selectedId && !correct) button.classList.add("incorrect");
  });
  const feedback = $("#quizFeedback");
  feedback.hidden = false;
  feedback.textContent = correct
    ? `答對了！${quizWord.word} 是「${quizWord.meaning}」。`
    : `正確答案是「${quizWord.meaning}」。`;
  $("#quizScore").textContent = state.quizCorrect;
  $("#quizTotal").textContent = state.quizTotal;
  $("#nextQuestion").hidden = false;
  updateStats();
}

function switchView(target, updateHash = true) {
  $$(".view").forEach((view) => {
    const active = view.dataset.view === target;
    view.hidden = !active;
    view.classList.toggle("active", active);
  });
  $$(".nav-item").forEach((button) => {
    const active = button.dataset.target === target;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
  if (target === "quiz" && !quizWord) newQuizQuestion();
  if (target === "progress") updateStats();
  if (updateHash) history.replaceState(null, "", `#${target}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupWebMCP() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const safely = (tool) => {
    try { Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch {}
  };
  safely({
    name: "read_current_word",
    title: "查看目前單字",
    description: "Read the English word currently displayed in the learning card, including its meaning and example.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute() {
      return currentWord ? { word: currentWord.word, meaning: currentWord.meaning, example: currentWord.example, category: currentWord.category } : { completed: true };
    }
  });
  safely({
    name: "mark_current_word_status",
    title: "更新目前單字狀態",
    description: "Mark the currently displayed vocabulary word as learned or needing review, then advance the visible card.",
    inputSchema: {
      type: "object",
      properties: { status: { type: "string", enum: ["learned", "review"] } },
      required: ["status"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (!input || !["learned", "review"].includes(input.status)) throw new Error("status must be learned or review");
      const updatedWord = currentWord?.word;
      setWordStatus(input.status);
      return { word: updatedWord, status: input.status, nextWord: currentWord?.word || null };
    }
  });
}

function init() {
  $("#todayLabel").textContent = new Intl.DateTimeFormat("zh-TW", { month: "long", day: "numeric", weekday: "short" }).format(new Date());
  renderTopicFilters();
  if (state.statuses[currentWord.id] === "learned") chooseNext(); else renderWord();
  $("#quizScore").textContent = state.quizCorrect;
  $("#quizTotal").textContent = state.quizTotal;
  $("#rateLabel").textContent = `${state.rate}×`;

  $("#speakWord").addEventListener("click", (event) => speak(currentWord?.word || $("#wordText").textContent, event.currentTarget));
  $("#speakExample").addEventListener("click", (event) => speak(currentWord?.example || $("#exampleEn").textContent, event.currentTarget));
  $("#speakQuizWord").addEventListener("click", (event) => speak(quizWord?.word || "", event.currentTarget));
  $("#learnedButton").addEventListener("click", () => setWordStatus("learned"));
  $("#againButton").addEventListener("click", () => setWordStatus("review"));
  $("#shuffleButton").addEventListener("click", () => chooseNext());
  $("#nextQuestion").addEventListener("click", newQuizQuestion);
  $("#rateButton").addEventListener("click", () => {
    state.rate = state.rate === 0.85 ? 1 : 0.85;
    $("#rateLabel").textContent = `${state.rate}×`;
    saveState();
    showToast(state.rate === 0.85 ? "已切換為慢速朗讀" : "已切換為正常語速");
  });
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.target)));

  const resetDialog = $("#resetDialog");
  $("#resetButton").addEventListener("click", () => resetDialog.showModal());
  resetDialog.addEventListener("close", () => {
    if (resetDialog.returnValue !== "confirm") return;
    state = { ...defaultState, statuses: {} };
    currentWord = words[0];
    quizWord = null;
    saveState();
    renderTopicFilters();
    renderWord();
    updateStats();
    $("#quizScore").textContent = "0";
    $("#quizTotal").textContent = "0";
    showToast("學習進度已重設");
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $("#installButton").hidden = false;
  });
  $("#installButton").addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    $("#installButton").hidden = true;
  });

  const initialView = ["learn", "quiz", "progress"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "learn";
  switchView(initialView, false);
  setupWebMCP();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
}

document.addEventListener("DOMContentLoaded", init);
