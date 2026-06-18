const sets = {
  set1: {
    label: "SET 1",
    image: "../assets/images/set1.png",
    phrases: [
      "go for a walk",
      "a glass of water",
      "at the airport",
      "by the way",
      "in the morning",
      "one of them",
      "a police officer",
      "at the library",
      "just a little thing"
    ]
  },
  set2: {
    label: "SET 2",
    image: "../assets/images/set2.png",
    phrases: [
      "answering machine",
      "tomorrow morning",
      "personal computer",
      "New Year holidays",
      "a phone call",
      "grocery shopping",
      "a little girl",
      "special performance",
      "the international airport"
    ]
  },
  set3: {
    label: "SET 3",
    image: "../assets/images/set3.png",
    phrases: [
      "have a good day",
      "back and forth",
      "beautiful flowers",
      "boys and girls",
      "looks good",
      "man and woman",
      "fantastic view",
      "black and white picture",
      "a severe storm"
    ]
  },
  set4: {
    label: "SET 4",
    image: "../assets/images/set4.png",
    phrases: [
      "Christmas holiday",
      "at my office",
      "open your heart",
      "pretty women",
      "heavy rain and strong wind",
      "graduate from high school",
      "family relationship",
      "do the homework",
      "pass the exam"
    ]
  }
};

const conversations = {
  conversation1: {
    label: "SET 1",
    image: "../assets/images/set1.png",
    lines: [
      "Why don’t we have Chinese food for dinner?",
      "Chinese food? I’m not in the mood for that.",
      "Then, do you have anything in mind?",
      "What kind of bag are you looking for?",
      "I’m looking for a small black one that I can use every day."
    ]
  },
  conversation2: {
    label: "SET 2",
    image: "../assets/images/set2.png",
    lines: [
      "I’m home!",
      "Hey, how was your day?",
      "It was great, I ran into John during lunch.",
      "Oh, you did?",
      "I’ll have a glass of water.",
      "Sure, no problem."
    ]
  },
  conversation3: {
    label: "SET 3",
    image: "../assets/images/set3.png",
    lines: [
      "Would you like anything to drink?",
      "Yes, what do you have?",
      "We have soda, water, and orange juice.",
      "How about ordering pizza delivery?",
      "Not bad at all."
    ]
  },
  conversation4: {
    label: "SET 4",
    image: "../assets/images/set4.png",
    lines: [
      "How’s the weather tomorrow?",
      "The weather news said it’s going to be rainy.",
      "I haven’t seen John in a long time! How is he doing?",
      "He is doing well. He just moved into a new apartment in Boston."
    ]
  }
};

const mixes = {
  mix1: {
    label: "SET 1",
    image: "../assets/images/mix.png",
    lines: [
      "as soon as possible",
      "top of the mountain",
      "What do you want for your birthday this year?",
      "Let me think···· I would like to get a new bag.",
      "That sounds really nice.",
      "make an appointment",
      "the broken window"
    ]
  },
  mix2: {
    label: "SET 2",
    image: "../assets/images/mix.png",
    lines: [
      "sightseeing tour",
      "personal question",
      "draw a picture",
      "Oh, no!",
      "What’s wrong?",
      "I’m supposed to go on a picnic tomorrow!",
      "try it on",
      "send an Email"
    ]
  }
};

const sentenceHints = {
  "Why don’t we have Chinese food for dinner?": "/waɪ doʊnt wi hæv ˌtʃaɪˈniz fud fər ˈdɪnɚ/",
  "Chinese food? I’m not in the mood for that.": "/ˌtʃaɪˈniz fud/ /aɪm nɑt ɪn ðə mud fɚ ðæt/",
  "Then, do you have anything in mind?": "/ðɛn du ju hæv ˈɛniˌθɪŋ ɪn maɪnd/",
  "What kind of bag are you looking for?": "/wʌt kaɪnd əv bæɡ ɑr ju ˈlʊkɪŋ fɔr/",
  "I’m looking for a small black one that I can use every day.": "/aɪm ˈlʊkɪŋ fɔr ə smɔl blæk wʌn ðət aɪ kən juz ˈɛvri deɪ/",
  "I’m home!": "/aɪm hoʊm/",
  "Hey, how was your day?": "/heɪ haʊ wəz jʊr deɪ/",
  "It was great, I ran into John during lunch.": "/ɪt wəz ɡreɪt aɪ ræn ˈɪntu dʒɑn ˈdʊrɪŋ lʌntʃ/",
  "Oh, you did?": "/oʊ ju dɪd/",
  "I’ll have a glass of water.": "/aɪl hæv ə ɡlæs əv ˈwɔt̬ɚ/",
  "Sure, no problem.": "/ʃʊr noʊ ˈprɑbləm/",
  "Would you like anything to drink?": "/wʊd ju laɪk ˈɛniˌθɪŋ tə drɪŋk/",
  "Yes, what do you have?": "/jɛs wʌt du ju hæv/",
  "We have soda, water, and orange juice.": "/wi hæv ˈsoʊdə ˈwɔt̬ɚ ənd ˈɔrɪndʒ dʒus/",
  "How about ordering pizza delivery?": "/haʊ əˈbaʊt ˈɔrdɚɪŋ ˈpitsə dɪˈlɪvɚi/",
  "Not bad at all.": "/nɑt bæd ət ɔl/",
  "How’s the weather tomorrow?": "/haʊz ðə ˈwɛðɚ təˈmɑroʊ/",
  "The weather news said it’s going to be rainy.": "/ðə ˈwɛðɚ nuz sɛd ɪts ˈɡoʊɪŋ tə bi ˈreɪni/",
  "I haven’t seen John in a long time! How is he doing?": "/aɪ ˈhævənt sin dʒɑn ɪn ə lɔŋ taɪm/ /haʊ ɪz hi ˈduɪŋ/",
  "He is doing well. He just moved into a new apartment in Boston.": "/hi ɪz ˈduɪŋ wɛl/ /hi dʒʌst muvd ˈɪntu ə nu əˈpɑrtmənt ɪn ˈbɔstən/",
  "What do you want for your birthday this year?": "/wʌt du ju wɑnt fər jʊr ˈbɝθˌdeɪ ðɪs jɪr/",
  "Let me think···· I would like to get a new bag.": "/lɛt mi θɪŋk/ /aɪ wʊd laɪk tə ɡɛt ə nu bæɡ/",
  "That sounds really nice.": "/ðæt saʊndz ˈrɪəli naɪs/",
  "Oh, no!": "/oʊ noʊ/",
  "What’s wrong?": "/wʌts rɔŋ/",
  "I’m supposed to go on a picnic tomorrow!": "/aɪm səˈpoʊzd tə ɡoʊ ɑn ə ˈpɪknɪk təˈmɑroʊ/"
};

const sentenceJapanese = {
  "Why don’t we have Chinese food for dinner?": "夕食に中華料理を食べない？",
  "Chinese food? I’m not in the mood for that.": "中華料理？今はそういう気分じゃないな。",
  "Then, do you have anything in mind?": "じゃあ、何か考えているものはある？",
  "What kind of bag are you looking for?": "どんなバッグを探しているの？",
  "I’m looking for a small black one that I can use every day.": "毎日使える小さな黒いものを探しています。",
  "I’m home!": "ただいま！",
  "Hey, how was your day?": "ねえ、今日はどうだった？",
  "It was great, I ran into John during lunch.": "よかったよ。昼食中にジョンに偶然会ったんだ。",
  "Oh, you did?": "あ、そうなの？",
  "I’ll have a glass of water.": "水を一杯もらうね。",
  "Sure, no problem.": "もちろん、いいよ。",
  "Would you like anything to drink?": "何か飲み物はいかがですか。",
  "Yes, what do you have?": "はい、何がありますか。",
  "We have soda, water, and orange juice.": "ソーダ、水、オレンジジュースがあります。",
  "How about ordering pizza delivery?": "ピザの配達を頼むのはどう？",
  "Not bad at all.": "全然悪くないね。",
  "How’s the weather tomorrow?": "明日の天気はどう？",
  "The weather news said it’s going to be rainy.": "天気予報では雨になると言っていたよ。",
  "I haven’t seen John in a long time! How is he doing?": "ジョンに長い間会っていないな！彼は元気？",
  "He is doing well. He just moved into a new apartment in Boston.": "元気だよ。ボストンの新しいアパートに引っ越したばかりだよ。",
  "What do you want for your birthday this year?": "今年の誕生日には何が欲しい？",
  "Let me think···· I would like to get a new bag.": "考えさせて……新しいバッグが欲しいな。",
  "That sounds really nice.": "それはとてもいいね。",
  "Oh, no!": "あ、まずい！",
  "What’s wrong?": "どうしたの？",
  "I’m supposed to go on a picnic tomorrow!": "明日ピクニックに行く予定だったんだ！"
};

const sentenceAudioLines = new Set([
  "Why don’t we have Chinese food for dinner?",
  "Chinese food? I’m not in the mood for that.",
  "Then, do you have anything in mind?",
  "What kind of bag are you looking for?",
  "I’m looking for a small black one that I can use every day.",
  "I’m home!",
  "Hey, how was your day?",
  "It was great, I ran into John during lunch.",
  "Oh, you did?",
  "I’ll have a glass of water.",
  "Sure, no problem.",
  "Would you like anything to drink?",
  "Yes, what do you have?",
  "We have soda, water, and orange juice.",
  "How about ordering pizza delivery?",
  "Not bad at all.",
  "How’s the weather tomorrow?",
  "The weather news said it’s going to be rainy.",
  "I haven’t seen John in a long time! How is he doing?",
  "He is doing well. He just moved into a new apartment in Boston.",
  "What do you want for your birthday this year?",
  "Let me think···· I would like to get a new bag.",
  "That sounds really nice.",
  "Oh, no!",
  "What’s wrong?",
  "I’m supposed to go on a picnic tomorrow!"
]);

const phraseHints = {
  "special performance": {
    ipa: "/ˈspɛʃəl pɚˈfɔrməns/",
    japanese: "特別公演"
  },
  "do the homework": {
    ipa: "/du ðə ˈhoʊmˌwɝk/",
    japanese: "宿題をする"
  },
  "try it on": {
    ipa: "/traɪ ɪt ɑn/",
    japanese: "試着する"
  },
  "black and white picture": {
    ipa: "/blæk ən waɪt ˈpɪktʃɚ/",
    japanese: "白黒写真"
  },
  "a severe storm": {
    ipa: "/ə səˈvɪr stɔrm/",
    japanese: "激しい嵐"
  },
  "at the library": {
    ipa: "/ət ðə ˈlaɪˌbrɛri/",
    japanese: "図書館で"
  },
  "just a little thing": {
    ipa: "/dʒʌst ə ˈlɪt̬əl θɪŋ/",
    japanese: "ほんの小さなこと"
  },
  "the international airport": {
    ipa: "/ði ˌɪntɚˈnæʃənəl ˈɛrˌpɔrt/",
    japanese: "国際空港"
  },
  "pass the exam": {
    ipa: "/pæs ði ɪɡˈzæm/",
    japanese: "試験に合格する"
  },
  "send an Email": {
    ipa: "/sɛnd ən ˈiˌmeɪl/",
    japanese: "メールを送る"
  },
  "go for a walk": {
    ipa: "/ɡoʊ fər ə wɔk/",
    japanese: "散歩に行く"
  },
  "as soon as possible": {
    ipa: "/əz sun əz ˈpɑsəbəl/",
    japanese: "できるだけ早く"
  },
  "answering machine": {
    ipa: "/ˈænsərɪŋ məˌʃin/",
    japanese: "留守番電話"
  },
  "a glass of water": {
    ipa: "/ə ɡlæs əv ˈwɔt̬ɚ/",
    japanese: "コップ一杯の水"
  },
  "tomorrow morning": {
    ipa: "/təˈmɑroʊ ˈmɔrnɪŋ/",
    japanese: "明日の朝"
  },
  "have a good day": {
    ipa: "/hæv ə ɡʊd deɪ/",
    japanese: "よい一日を"
  },
  "top of the mountain": {
    ipa: "/tɑp əv ðə ˈmaʊntən/",
    japanese: "山の頂上"
  },
  "at my office": {
    ipa: "/ət maɪ ˈɑfəs/",
    japanese: "私のオフィスで"
  },
  "Christmas holiday": {
    ipa: "/ˈkrɪsməs ˈhɑlədeɪ/",
    japanese: "クリスマス休暇"
  },
  "back and forth": {
    ipa: "/bæk ən fɔrθ/",
    japanese: "行ったり来たり / 前後に"
  },
  "at the airport": {
    ipa: "/ət ði ˈɛrˌpɔrt/",
    japanese: "空港で"
  },
  "make an appointment": {
    ipa: "/meɪk ən əˈpɔɪntmənt/",
    japanese: "予約をする"
  },
  "by the way": {
    ipa: "/baɪ ðə weɪ/",
    japanese: "ところで"
  },
  "personal computer": {
    ipa: "/ˈpɝsənəl kəmˈpjut̬ɚ/",
    japanese: "パソコン"
  },
  "boys and girls": {
    ipa: "/bɔɪz ən ɡɝlz/",
    japanese: "男の子たちと女の子たち"
  },
  "open your heart": {
    ipa: "/ˈoʊpən jʊr hɑrt/",
    japanese: "心を開く"
  },
  "beautiful flowers": {
    ipa: "/ˈbjut̬əfəl ˈflaʊɚz/",
    japanese: "美しい花々"
  },
  "New Year holidays": {
    ipa: "/ˌnu ˈjɪr ˈhɑlədeɪz/",
    japanese: "年末年始の休暇"
  },
  "a phone call": {
    ipa: "/ə foʊn kɔl/",
    japanese: "電話"
  },
  "the broken window": {
    ipa: "/ðə ˈbroʊkən ˈwɪndoʊ/",
    japanese: "壊れた窓"
  },
  "in the morning": {
    ipa: "/ɪn ðə ˈmɔrnɪŋ/",
    japanese: "朝に"
  },
  "looks good": {
    ipa: "/lʊks ɡʊd/",
    japanese: "よさそう"
  },
  "pretty women": {
    ipa: "/ˈprɪt̬i ˈwɪm.ɪn/",
    japanese: "きれいな女性たち"
  },
  "heavy rain and strong wind": {
    ipa: "/ˈhɛvi reɪn ən strɔŋ wɪnd/",
    japanese: "激しい雨と強い風"
  },
  "sightseeing tour": {
    ipa: "/ˈsaɪtˌsiɪŋ tʊr/ ( /tɔr/でもOK）",
    japanese: "観光ツアー"
  },
  "a little girl": {
    ipa: "/ə ˈlɪt̬əl ɡɝl/",
    japanese: "小さな女の子"
  },
  "graduate from high school": {
    ipa: "/ˈɡrædʒuˌeɪt frəm haɪ skul/",
    japanese: "高校を卒業する"
  },
  "grocery shopping": {
    ipa: "/ˈɡroʊsəri ˈʃɑpɪŋ/",
    japanese: "食料品の買い物"
  },
  "personal question": {
    ipa: "/ˈpɝsənəl ˈkwɛstʃən/",
    japanese: "個人的な質問"
  },
  "family relationship": {
    ipa: "/ˈfæməli rɪˈleɪʃənˌʃɪp/",
    japanese: "家族関係"
  },
  "one of them": {
    ipa: "/ˈwʌn əv ðɛm/",
    japanese: "彼らのうちの一人 / それらのうちの一つ"
  },
  "man and woman": {
    ipa: "/mæn ən ˈwʊmən/",
    japanese: "男性と女性"
  },
  "fantastic view": {
    ipa: "/fænˈtæstɪk vju/",
    japanese: "素晴らしい眺め"
  },
  "a police officer": {
    ipa: "/ə pəˈlis ˈɔfəsɚ/",
    japanese: "警察官"
  },
  "draw a picture": {
    ipa: "/drɔ ə ˈpɪktʃɚ/",
    japanese: "絵を描く"
  }
};

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function renderAudioSlot(audioFile) {
  return `
    <div class="audio-slot">
      <audio controls preload="metadata" src="${audioFile}"></audio>
      <div class="speed-row" aria-label="Playback speed">
        <button class="speed-button" type="button" data-speed="0.25">0.25</button>
        <button class="speed-button" type="button" data-speed="0.5">0.5</button>
        <button class="speed-button" type="button" data-speed="0.75">0.75</button>
        <button class="speed-button is-active" type="button" data-speed="1">1.0</button>
      </div>
    </div>
  `;
}

function renderNav(current) {
  const nav = document.querySelector("[data-set-nav]");
  if (!nav) return;

  nav.innerHTML = Object.entries(sets)
    .map(([id, set]) => {
      const active = id === current ? " is-active" : "";
      return `<a class="set-link${active}" href="../${id}/">#${set.label.replace("SET ", "")}</a>`;
    })
    .join("");
}

function renderCategoryNav({ current, items, selector }) {
  const nav = document.querySelector(selector);
  if (!nav) return;

  nav.innerHTML = Object.entries(items)
    .map(([id, set]) => {
      const active = id === current ? " is-active" : "";
      return `<a class="set-link${active}" href="../${id}/">#${set.label.replace("SET ", "")}</a>`;
    })
    .join("");
}

function renderSetPage() {
  const page = document.querySelector("[data-set-page]");
  if (!page) return;

  const setId = page.dataset.setPage;
  const set = sets[setId];
  if (!set) return;

  document.body.dataset.set = setId;
  document.title = `Lesson 07 | ${set.label}`;

  document.querySelector("[data-hero]").src = set.image;
  document.querySelector("[data-title]").textContent = set.label;
  document.querySelector("[data-list]").innerHTML = set.phrases
    .map((phrase, index) => {
      const number = String(index + 1).padStart(2, "0");
      const hint = phraseHints[phrase] || {
        ipa: "発音記号は後ほど追加します。",
        japanese: "日本語訳は後ほど追加します。"
      };
      const audioFile = `../assets/audio/${slugify(phrase)}.mp3`;
      return `
        <article class="phrase-card">
          <div class="phrase-top">
            <div class="number">${number}</div>
            <p class="phrase">${phrase}</p>
          </div>
          <div class="placeholder">
            ${renderAudioSlot(audioFile)}
            <details>
              <summary>発音記号を確認する</summary>
              <div class="detail-body">${hint.ipa}</div>
            </details>
            <details>
              <summary>日本語を確認する</summary>
              <div class="detail-body">${hint.japanese}</div>
            </details>
          </div>
        </article>
      `;
    })
    .join("");

  renderNav(setId);
  bindSpeedButtons();
  renderBackButton("..");
}

function bindSpeedButtons() {
  document.querySelectorAll(".audio-slot").forEach((slot) => {
    const audio = slot.querySelector("audio");
    slot.querySelectorAll("[data-speed]").forEach((button) => {
      button.addEventListener("click", () => {
        audio.playbackRate = Number(button.dataset.speed);
        slot.querySelectorAll("[data-speed]").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
      });
    });
  });
}

function renderHub() {
  const hub = document.querySelector("[data-hub]");
  if (!hub) return;

  document.body.dataset.set = "set1";
  hub.innerHTML = Object.entries(sets)
    .map(([id, set]) => `
      <a class="hub-card" href="${id}/">
        <img src="assets/images/${id}.png" alt="${set.label}">
        <div>
          <h2>${set.label}</h2>
          <p>${set.phrases.length} phrases</p>
        </div>
      </a>
    `)
    .join("");
}

function renderConversationHub() {
  const hub = document.querySelector("[data-conversation-hub]");
  if (!hub) return;

  hub.innerHTML = Object.entries(conversations)
    .map(([id, set]) => `
      <a class="hub-card" href="${id}/">
        <img src="assets/images/${id.replace("conversation", "set")}.png" alt="Conversation ${set.label}">
        <div>
          <h2>${set.label}</h2>
          <p>${set.lines.length} lines</p>
        </div>
      </a>
    `)
    .join("");
}

function renderMixHub() {
  const hub = document.querySelector("[data-mix-hub]");
  if (!hub) return;

  hub.innerHTML = Object.entries(mixes)
    .map(([id, set]) => `
      <a class="hub-card" href="${id}/">
        <img src="assets/images/mix.png" alt="Mix ${set.label}">
        <div>
          <h2>${set.label}</h2>
          <p>${set.lines.length} items</p>
        </div>
      </a>
    `)
    .join("");
}

function renderConversationPage() {
  const page = document.querySelector("[data-conversation-page]");
  if (!page) return;

  const setId = page.dataset.conversationPage;
  const set = conversations[setId];
  if (!set) return;

  const themeId = setId.replace("conversation", "set");
  document.body.dataset.set = themeId;
  document.title = `Lesson 07 | Sentences ${set.label}`;
  document.querySelector("[data-hero]").src = set.image;
  document.querySelector("[data-title]").textContent = set.label;
  document.querySelector("[data-list]").innerHTML = set.lines
    .map((line, index) => {
      const number = String(index + 1).padStart(2, "0");
      const ipa = sentenceHints[line] || "発音記号は後ほど追加します。";
      const japanese = sentenceJapanese[line] || "日本語訳は後ほど追加します。";
      return `
        <article class="phrase-card">
          <div class="phrase-top">
            <div class="number">${number}</div>
            <p class="phrase">${line}</p>
          </div>
          <div class="placeholder">
            ${renderAudioSlot(`../assets/sentence-audio/${slugify(line)}.mp3`)}
            <details>
              <summary>発音記号を確認する</summary>
              <div class="detail-body">${ipa}</div>
            </details>
            <details>
              <summary>日本語を確認する</summary>
              <div class="detail-body">${japanese}</div>
            </details>
          </div>
        </article>
      `;
    })
    .join("");
  renderCategoryNav({
    current: setId,
    items: conversations,
    selector: "[data-sentence-nav]"
  });
  bindSpeedButtons();
  renderBackButton("..");
}

function renderMixPage() {
  const page = document.querySelector("[data-mix-page]");
  if (!page) return;

  const setId = page.dataset.mixPage;
  const set = mixes[setId];
  if (!set) return;

  document.body.dataset.set = "set5";
  document.title = `Lesson 07 | Mix ${set.label}`;
  document.querySelector("[data-hero]").src = set.image;
  document.querySelector("[data-title]").textContent = set.label;
  document.querySelector("[data-list]").innerHTML = set.lines
    .map((line, index) => {
      const number = String(index + 1).padStart(2, "0");
      const hint = phraseHints[line];
      const sentenceIpa = sentenceHints[line];
      const sentenceJa = sentenceJapanese[line];
      const hasSentenceAudio = sentenceAudioLines.has(line);
      const audioFile = hint
        ? `../assets/audio/${slugify(line)}.mp3`
        : `../assets/sentence-audio/${slugify(line)}.mp3`;
      const audioBlock = hint ? `
        <div class="placeholder">
          ${renderAudioSlot(audioFile)}
          <details>
            <summary>発音記号を確認する</summary>
            <div class="detail-body">${hint.ipa}</div>
          </details>
          <details>
            <summary>日本語を確認する</summary>
            <div class="detail-body">${hint.japanese}</div>
          </details>
        </div>
      ` : hasSentenceAudio ? `
        <div class="placeholder">
          ${renderAudioSlot(audioFile)}
          <details>
            <summary>発音記号を確認する</summary>
            <div class="detail-body">${sentenceIpa || "発音記号は後ほど追加します。"}</div>
          </details>
          <details>
            <summary>日本語を確認する</summary>
            <div class="detail-body">${sentenceJa || "日本語訳は後ほど追加します。"}</div>
          </details>
        </div>
      ` : "";
      return `
        <article class="phrase-card">
          <div class="phrase-top">
            <div class="number">${number}</div>
            <p class="phrase">${line}</p>
          </div>
          ${audioBlock}
        </article>
      `;
    })
    .join("");
  renderCategoryNav({
    current: setId,
    items: mixes,
    selector: "[data-mix-nav]"
  });
  bindSpeedButtons();
  renderBackButton("..");
}

function renderBackButton(href) {
  const page = document.querySelector("[data-list]");
  if (!page) return;

  page.insertAdjacentHTML("afterend", `
    <div class="bottom-action">
      <a class="back-link" href="${href}/">Back</a>
    </div>
  `);
}

document.querySelector("[data-top]")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderSetPage();
renderHub();
renderConversationHub();
renderConversationPage();
renderMixHub();
renderMixPage();
