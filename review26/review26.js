const reviewQuestions = [
  {
    text: "{words} の母音は全て同じ発音記号です。どの音になる？",
    words: ["m*ee*t", "f*ee*l", "s*ee*", "fr*ee*"],
    reference: "p4 / track5",
    audio: "assets/review-audio/q1.mp3",
    detail: [
      { word: "meet", ipa: "/mit/", meaning: "会う" },
      { word: "feel", ipa: "/fil/", meaning: "感じる" },
      { word: "see", ipa: "/si/", meaning: "見る、会う" },
      { word: "free", ipa: "/fri/", meaning: "自由な、無料の" },
    ],
    answer: "/i/",
  },
  {
    text: "{words} の母音は全て同じ発音記号です。どの音になる？",
    words: ["s*i*t", "g*i*ve", "th*i*s", "d*i*nner"],
    reference: "p5 / track8",
    audio: "assets/review-audio/q2.mp3",
    detail: [
      { word: "sit", ipa: "/sɪt/", meaning: "座る" },
      { word: "give", ipa: "/ɡɪv/", meaning: "与える" },
      { word: "this", ipa: "/ðɪs/", meaning: "これ、この" },
      { word: "dinner", ipa: "/ˈdɪnɚ/", meaning: "夕食" },
    ],
    answer: "/ɪ/",
  },
  {
    text: "以下のセットに共通する母音は何？",
    reference: "p6 / track13",
    audio: "assets/review-audio/q3.mp3",
    detail: [
      { word: "late", ipa: "/leɪt/", meaning: "遅い、遅れて" },
      { word: "came", ipa: "/keɪm/", meaning: "来た" },
      { word: "take", ipa: "/teɪk/", meaning: "取る、連れて行く" },
      { word: "save", ipa: "/seɪv/", meaning: "救う、保存する" },
      { word: "rain", ipa: "/reɪn/", meaning: "雨、雨が降る" },
      { word: "wait", ipa: "/weɪt/", meaning: "待つ" },
      { word: "pain", ipa: "/peɪn/", meaning: "痛み" },
      { word: "aim", ipa: "/eɪm/", meaning: "狙う、目的" },
      { word: "say", ipa: "/seɪ/", meaning: "言う" },
      { word: "away", ipa: "/əˈweɪ/", meaning: "離れて" },
      { word: "play", ipa: "/pleɪ/", meaning: "遊ぶ、演奏する" },
      { word: "Monday", ipa: "/ˈmʌndeɪ/", meaning: "月曜日" },
      { word: "they", ipa: "/ðeɪ/", meaning: "彼らは、それらは" },
      { word: "survey", ipa: "/ˈsɝveɪ/", meaning: "調査" },
      { word: "obey", ipa: "/oʊˈbeɪ/", meaning: "従う" },
      { word: "weigh", ipa: "/weɪ/", meaning: "重さがある、量る" },
      { word: "eight", ipa: "/eɪt/", meaning: "8" },
      { word: "neighbor", ipa: "/ˈneɪbɚ/", meaning: "隣人" },
      { word: "freight", ipa: "/freɪt/", meaning: "貨物" },
    ],
    sections: [
      {
        label: "a + 子音 + e",
        words: ["l*a*te", "c*a*me", "t*a*ke", "s*a*ve"],
      },
      {
        label: "ai",
        words: ["r*ai*n", "w*ai*t", "p*ai*n", "*ai*m"],
      },
      {
        label: "ay",
        words: ["s*ay*", "aw*ay*", "pl*ay*", "Mond*ay*"],
      },
      {
        label: "ey",
        words: ["th*ey*", "surv*ey*", "ob*ey*"],
      },
      {
        label: "eigh",
        words: ["w*eigh*", "*eigh*t", "n*eigh*bor", "fr*eigh*t"],
      },
    ],
    answer: "/eɪ/",
  },
  {
    text: "{words} の母音は全て同じ発音記号です。どの音になる？",
    words: ["g*e*t", "*e*nd", "h*ea*vy", "h*ea*d"],
    reference: "p7 / track16",
    audio: "assets/review-audio/q4.mp3",
    detail: [
      { word: "get", ipa: "/ɡɛt/", meaning: "得る、着く" },
      { word: "end", ipa: "/ɛnd/", meaning: "終わり、終わる" },
      { word: "heavy", ipa: "/ˈhɛvi/", meaning: "重い" },
      { word: "head", ipa: "/hɛd/", meaning: "頭" },
    ],
    answer: "/ɛ/ （辞書によっては/e/）",
  },
  {
    text: "{words} の母音は全て同じ発音記号です。どの音になる？",
    words: ["h*a*t", "*a*pple", "m*a*n", "*a*nswer"],
    reference: "p8 / track21",
    audio: "assets/review-audio/q5.mp3",
    detail: [
      { word: "hat", ipa: "/hæt/", meaning: "帽子" },
      { word: "apple", ipa: "/ˈæpəl/", meaning: "りんご" },
      { word: "man", ipa: "/mæn/", meaning: "男性" },
      { word: "answer", ipa: "/ˈænsɚ/", meaning: "答え、答える" },
    ],
    answer: "/æ/",
  },
  {
    text: "{words} の母音は全て同じ発音記号です。どの音になる？",
    words: ["st*o*p", "m*o*dern", "f*a*ther", "w*a*nt"],
    reference: "p9 / track26",
    audio: "assets/review-audio/q6.mp3",
    detail: [
      { word: "stop", ipa: "/stɑp/", meaning: "止まる、止める" },
      { word: "modern", ipa: "/ˈmɑdɚn/", meaning: "現代の" },
      { word: "father", ipa: "/ˈfɑðɚ/", meaning: "父" },
      { word: "want", ipa: "/wɑnt/", meaning: "欲しい、望む" },
    ],
    answer: "/ɑ/",
  },
  {
    text: "以下のセットに共通する母音は何？",
    reference: "p10 / track32",
    audio: "assets/review-audio/q7.mp3",
    detail: [
      { word: "but", ipa: "/bʌt/", meaning: "しかし" },
      { word: "fun", ipa: "/fʌn/", meaning: "楽しいこと" },
      { word: "summer", ipa: "/ˈsʌmɚ/", meaning: "夏" },
      { word: "drunk", ipa: "/drʌŋk/", meaning: "酔った" },
      { word: "love", ipa: "/lʌv/", meaning: "愛、愛する" },
      { word: "done", ipa: "/dʌn/", meaning: "終わった、済んだ" },
      { word: "come", ipa: "/kʌm/", meaning: "来る" },
      { word: "son", ipa: "/sʌn/", meaning: "息子" },
      { word: "cousin", ipa: "/ˈkʌzən/", meaning: "いとこ" },
      { word: "country", ipa: "/ˈkʌntri/", meaning: "国、田舎" },
      { word: "enough", ipa: "/ɪˈnʌf/", meaning: "十分な" },
    ],
    sections: [
      {
        label: "u",
        words: ["b*u*t", "f*u*n", "s*u*mmer", "dr*u*nk"],
      },
      {
        label: "o",
        words: ["l*o*ve", "d*o*ne", "c*o*me", "s*o*n"],
      },
      {
        label: "ou",
        words: ["c*ou*sin", "c*ou*ntry", "en*ou*gh"],
      },
    ],
    answer: "/ʌ/",
  },
  {
    text: "以下のセットに共通する母音は何？",
    reference: "p12 / track37",
    audio: "assets/review-audio/q8.mp3",
    sections: [
      {
        label: "aw",
        words: ["s*aw*", "l*aw*", "*aw*ful", "*aw*esome"],
      },
      {
        label: "au",
        words: ["*au*thor", "*Au*gust", "appl*au*d", "*au*dition"],
      },
      {
        label: "al",
        words: ["sm*al*l", "w*al*k", "t*al*l", "*al*ways"],
      },
      {
        label: "ought",
        words: ["b*ought*", "th*ought*", "f*ought*"],
      },
      {
        label: "aught",
        words: ["d*aught*er", "c*aught*"],
      },
      {
        label: "o",
        words: ["g*o*ne", "*o*ff", "l*o*ng"],
      },
    ],
    answer: "/ɔ/",
  },
  {
    text: "以下のセットに共通する母音は何？",
    reference: "p13 / track42",
    audio: "assets/review-audio/q9.mp3",
    sections: [
      {
        label: "o",
        words: ["n*o*", "d*o*n’t", "h*o*me", "*o*nly"],
      },
      {
        label: "oa",
        words: ["r*oa*d", "c*oa*t", "b*oa*t"],
      },
      {
        label: "ow",
        words: ["*ow*n", "sl*ow*", "wind*ow*"],
      },
      {
        label: "ough",
        words: ["th*ough*", "alth*ough*"],
      },
    ],
    answer: "/oʊ/",
  },
  {
    text: "以下のセットに共通する母音は何？",
    reference: "p14 / track47",
    audio: "assets/review-audio/q10.mp3",
    sections: [
      {
        label: "oo",
        words: ["g*oo*d", "l*oo*k", "childh*oo*d", "underst*oo*d"],
      },
      {
        label: "u",
        words: ["p*u*sh", "f*u*ll", "p*u*ll", "s*u*gar"],
      },
      {
        label: "ould",
        words: ["w*ould*", "c*ould*", "sh*ould*"],
      },
    ],
    answer: "/ʊ/",
  },
  {
    text: "以下のセットに共通する母音は何？",
    reference: "p15 / track50",
    audio: "assets/review-audio/q11.mp3",
    sections: [
      {
        label: "oo",
        words: ["t*oo*", "f*oo*d", "sch*oo*l", "t*oo*l"],
      },
      {
        label: "ue",
        words: ["tr*ue*", "bl*ue*", "aven*ue*"],
      },
      {
        label: "o",
        words: ["d*o*", "wh*o*", "l*o*se", "pr*o*ve"],
      },
      {
        label: "ew",
        words: ["n*ew*", "bl*ew*", "dr*ew*"],
      },
      {
        label: "u",
        words: ["s*u*per", "r*u*le", "d*u*ty", "st*u*dent"],
      },
    ],
    answer: "/u/",
  },
  {
    text: "以下のセットに共通する母音は何？",
    reference: "p16 / track55",
    audio: "assets/review-audio/q12.mp3",
    sections: [
      {
        label: "er",
        words: ["h*er*", "m*er*cy", "moth*er*", "winn*er*"],
      },
      {
        label: "ear",
        words: ["h*ear*d", "l*ear*n", "*ear*th"],
      },
      {
        label: "ir",
        words: ["f*ir*st", "g*ir*l", "f*ir*m"],
      },
      {
        label: "or",
        words: ["doct*or*", "w*or*d", "w*or*ry"],
      },
      {
        label: "ur",
        words: ["occ*ur*", "c*ur*tain", "j*ur*y"],
      },
      {
        label: "re",
        words: ["insec*ure*", "cult*ure*"],
      },
      {
        label: "ar",
        words: ["gramm*ar*", "coll*ar*"],
      },
    ],
    answer: "/ɝ/ （無強勢の場合/ɚ/）",
  },
  {
    text: "以下のセットに共通する母音は何？",
    reference: "p17 / track58",
    audio: "assets/review-audio/q13.mp3",
    sections: [
      {
        label: "y",
        words: ["fl*y*", "sk*y*", "appl*y*", "st*y*le"],
      },
      {
        label: "i",
        words: ["n*i*ce", "k*i*nd", "f*i*ne", "s*i*gn"],
      },
      {
        label: "igh",
        words: ["l*igh*t", "f*igh*t", "s*igh*t", "n*igh*t"],
      },
      {
        label: "ie",
        words: ["l*ie*", "t*ie*", "tr*ie*d"],
      },
    ],
    answer: "/aɪ/",
  },
  {
    text: "{words} の母音は全て同じ発音記号です。どの音になる？",
    words: ["f*ou*nd", "th*ou*sand", "n*ow*", "cr*ow*d"],
    reference: "p17 / track61",
    audio: "assets/review-audio/q14.mp3",
    answer: "/aʊ/",
  },
  {
    text: "{words}の母音は全て同じ発音記号です。どの音になる？",
    words: ["m*oi*st", "*oi*l", "enj*oy*", "r*oy*al"],
    reference: "p18 / track64",
    audio: "assets/review-audio/q15.mp3",
    answer: "/ɔɪ/",
  },
  {
    tag: "子音",
    text: "破裂音は何個ありますか？また破裂音を全て教えてください。",
    answer: ["6個", "/p/", "/b/", "/t/", "/d/", "/k/", "/g/"],
  },
  {
    tag: "子音",
    text: "鼻音は何個ありますか？また鼻音を全て教えてください。",
    answer: ["3個", "/m/", "/n/", "/ŋ/"],
  },
  {
    tag: "子音",
    text: "この中に無声子音は何個ありますか？また全て教えてください。",
    choices: [
      "/p/",
      "/b/",
      "/t/",
      "/d/",
      "/k/",
      "/g/",
      "/f/",
      "/v/",
      "/θ/",
      "/ð/",
      "/s/",
      "/z/",
      "/ʃ/",
      "/ʒ/",
      "/tʃ/",
      "/dʒ/",
      "/m/",
      "/n/",
      "/ŋ/",
      "/l/",
      "/r/",
      "/w/",
      "/j/",
      "/h/",
    ],
    answer: ["9個", "/p/", "/t/", "/k/", "/f/", "/θ/", "/s/", "/ʃ/", "/tʃ/", "/h/"],
  },
  {
    tag: "子音",
    text: "母音＋無声子音（例：bet）になるときと、母音＋有声子音（例：bed）になるときの違いは何？",
    audio: "assets/review-audio/q19.mp3",
    answer: "母音の長さが違う（有声子音の時が長い傾向にある）",
  },
  {
    tag: "子音",
    text: "次の音声を聞いて正しい選択肢をそれぞれ選ぼう。",
    hideAnswer: true,
    listeningItems: [
      {
        audio: "assets/review-audio/vowel-length-1.mp3",
        first: "advice",
        second: "advise",
        ipa1: "/ədˈvaɪs/",
        ipa2: "/ədˈvaɪz/",
        answer: "advice → advise",
      },
      {
        audio: "assets/review-audio/vowel-length-6.mp3",
        first: "bet",
        second: "bed",
        ipa1: "/bɛt/",
        ipa2: "/bɛd/",
        answer: "bet → bed",
      },
      {
        audio: "assets/review-audio/vowel-length-9.mp3",
        first: "dock",
        second: "dog",
        ipa1: "/dɑk/",
        ipa2: "/dɔɡ/",
        answer: "dock → dog",
      },
    ],
    answer: ["advice → advise", "bet → bed", "dock → dog"],
  },
  {
    tag: "子音",
    text: "{words}のような単語は2種類の読み方ができます。それぞれの読み方を教えてください。",
    words: ["sto*p*", "clu*b*", "sa*d*", "cu*t*"],
    audio: {
      src: "assets/review-audio/q21.mp3",
      note: "こちらの音声は破裂させないパターンです。",
    },
    answer: {
      lines: ["1: 破裂音を破裂させて読む", "2: 破裂させずにタイミングだけ残す"],
    },
  },
  {
    tag: "子音",
    text: "過去形-edの読み方は3種類ありますが、それぞれの条件と読み方を教えてください。",
    audio: "assets/review-audio/q22.mp3",
    sections: [
      {
        label: "パターンA",
        words: ["need*ed*", "wait*ed*"],
        answer: "dかtの後は /ɪd/",
      },
      {
        label: "パターンB",
        words: ["open*ed*", "show*ed*"],
        answer: "有声子音、母音の直後は /d/",
      },
      {
        label: "パターンC",
        words: ["pass*ed*", "help*ed*"],
        answer: "無声子音の直後は /t/",
      },
    ],
    noGlobalAnswer: true,
  },
  {
    tag: "子音",
    text: "過去形-edの読み方は3種類ありますが、以下の単語を3つの読み方でそれぞれグループに分けてください。",
    audio: {
      note: "こちらは音声がない問題になります。",
    },
    choices: [
      "admitted",
      "controlled",
      "developed",
      "ended",
      "finished",
      "hugged",
      "liked",
      "pretended",
      "pulled",
    ],
    answer: {
      groups: [
        { label: "/ɪd/", items: ["admitted", "ended", "pretended"] },
        { label: "/d/", items: ["controlled", "hugged", "pulled"] },
        { label: "/t/", items: ["developed", "finished", "liked"] },
      ],
    },
  },
  {
    text: "3つのペアにおいて、ハイライトされている部分の母音をそれぞれ教えてください。",
    soundGuideTag: "母音",
    sections: [
      {
        label: "ペアA",
        words: ["m*a*n", "salesm*a*n"],
        audio: "assets/review-audio/q24-a.mp3",
        answer: "/æ/ → /ə/",
        detail: [
          { word: "man", meaning: "男性", ipa: "/mæn/" },
          { word: "salesman", meaning: "販売員、営業員", ipa: "/ˈseɪlzmən/" },
        ],
      },
      {
        label: "ペアB",
        words: ["p*o*se", "purp*o*se"],
        audio: "assets/review-audio/q24-b.mp3",
        answer: "/oʊ/ → /ə/",
        detail: [
          { word: "pose", meaning: "ポーズをとる、提示する", ipa: "/poʊz/" },
          { word: "purpose", meaning: "目的", ipa: "/ˈpɝpəs/" },
        ],
      },
      {
        label: "ペアC",
        words: ["f*a*st", "breakf*a*st"],
        audio: "assets/review-audio/q24-c.mp3",
        answer: "/æ/ → /ə/",
        detail: [
          { word: "fast", meaning: "速い", ipa: "/fæst/" },
          { word: "breakfast", meaning: "朝食", ipa: "/ˈbrɛkfəst/" },
        ],
      },
      {
        label: "ペアD",
        words: ["*a*d", "*a*dvice"],
        audio: "assets/review-audio/q24-d.mp3",
        answer: "/æ/ → /ə/",
        detail: [
          { word: "ad", meaning: "広告", ipa: "/æd/" },
          { word: "advice", meaning: "助言、アドバイス", ipa: "/ədˈvaɪs/" },
        ],
      },
      {
        label: "ペアE",
        words: ["*o*ff", "*o*ffend"],
        audio: "assets/review-audio/q24-e.mp3",
        answer: "/ɔ/ → /ə/",
        detail: [
          { word: "off", meaning: "離れて、オフの状態で", ipa: "/ɔf/" },
          { word: "offend", meaning: "怒らせる、不快にさせる", ipa: "/əˈfɛnd/" },
        ],
      },
    ],
    noGlobalAnswer: true,
  },
  {
    text: "名前動後とは何か教えてください。",
    answer:
      "同じ綴りの単語において、名詞の時は単語の前に強勢がかかることが多く、動詞の時は後ろに強勢がかかることが多いという傾向",
  },
  {
    text: "次の5つのペアはそれぞれどの順番で読まれているかを教えてください。",
    hideAnswer: true,
    hideSpeed: true,
    listeningItems: [
      {
        title: "1 addict",
        audio: "assets/review-audio/name-verb-26-1.mp3",
        choices: ["名詞 → 動詞", "動詞 → 名詞"],
        answer: "名詞 → 動詞",
      },
      {
        title: "2 contest",
        audio: "assets/review-audio/name-verb-26-2.mp3",
        choices: ["名詞 → 動詞", "動詞 → 名詞"],
        answer: "動詞 → 名詞",
      },
      {
        title: "3 produce",
        audio: "assets/review-audio/name-verb-26-3.mp3",
        choices: ["名詞 → 動詞", "動詞 → 名詞"],
        answer: "名詞 → 動詞",
      },
      {
        title: "4 progress",
        audio: "assets/review-audio/name-verb-26-4.mp3",
        choices: ["名詞 → 動詞", "動詞 → 名詞"],
        answer: "名詞 → 動詞",
      },
      {
        title: "5 research",
        audio: "assets/review-audio/name-verb-26-5.mp3",
        choices: ["名詞 → 動詞", "動詞 → 名詞"],
        answer: "動詞 → 名詞",
      },
    ],
  },
  {
    text: "次の3つの単語 / フレーズの強勢をそれぞれ教えてください。",
    audio: "assets/review-audio/q27.mp3",
    pickItems: [
      {
        title: "1 parking lot",
        choices: ["parking", "lot"],
        answer: "parking",
      },
      {
        title: "2 credit card",
        choices: ["credit", "card"],
        answer: "credit",
      },
      {
        title: "3 baseball",
        choices: ["base", "ball"],
        answer: "base",
      },
    ],
    hideAnswer: true,
  },
  {
    text: "次の2つのフレーズで一番目立つ箇所を教えてください。",
    audio: "assets/review-audio/q28.mp3",
    pickItems: [
      {
        title: "1 cell phone number",
        choices: ["cell", "phone", "number"],
        answer: "cell",
      },
      {
        title: "2 website address",
        choices: ["web", "site", "address"],
        answer: "web",
      },
    ],
    hideAnswer: true,
  },
  {
    text: "次の3つのフレーズでどちらが目立つかを教えてください。",
    audio: "assets/review-audio/q29.mp3",
    pickItems: [
      {
        title: "1 nice day",
        choices: ["nice", "day"],
        answer: "day",
      },
      {
        title: "2 long time",
        choices: ["long", "time"],
        answer: "time",
      },
      {
        title: "3 first grade",
        choices: ["first", "grade"],
        answer: "grade",
      },
    ],
    hideAnswer: true,
  },
  {
    text: "次の3つの会話の「B」のセリフで、一番目立つ箇所はどれか選んでください。",
    pickItems: [
      {
        title: "1",
        promptLines: ["A. We don’t need the heater.", "B. Turn it off."],
        audio: "assets/review-audio/q30-1.mp3",
        choices: ["Turn", "it", "off"],
        answer: "off",
      },
      {
        title: "2",
        promptLines: ["A. Did he ask her out?", "B. She turned him down."],
        audio: "assets/review-audio/q30-2.mp3",
        choices: ["She", "turned", "him", "down"],
        answer: "down",
      },
      {
        title: "3",
        promptLines: ["A. He told me he’d be at the party.", "B. He didn’t turn up."],
        audio: "assets/review-audio/q30-3.mp3",
        choices: ["He", "didn’t", "turn", "up"],
        answer: "up",
      },
    ],
    hideAnswer: true,
  },
  {
    text: "次のセットでそれぞれ核になる場所を選んでください。",
    sections: [
      {
        label: "1",
        promptLines: ["A I worked out yesterday.", "B I had a great workout."],
        audio: "assets/review-audio/review2-q32-1.mp3",
        answer: {
          lines: ["A I worked *out* yesterday.", "B I had a great *work*out."],
        },
        detail: [
          { word: "I worked out yesterday.", ipa: "/aɪ wɝkt aʊt ˈjɛstɚdeɪ/", meaning: "昨日、運動しました。" },
          { word: "I had a great workout.", ipa: "/aɪ hæd ə ɡreɪt ˈwɝkaʊt/", meaning: "とても良い運動ができました。" },
        ],
      },
      {
        label: "2",
        promptLines: ["A They let me down.", "B It was a big letdown."],
        audio: "assets/review-audio/review2-q32-2.mp3",
        answer: {
          lines: ["A They let me *down*.", "B It was a big *let*down."],
        },
        detail: [
          { word: "They let me down.", ipa: "/ðeɪ lɛt mi daʊn/", meaning: "彼らは私をがっかりさせました。" },
          { word: "It was a big letdown.", ipa: "/ɪt wəz ə bɪɡ ˈlɛtdaʊn/", meaning: "それは大きながっかりでした。" },
        ],
      },
      {
        label: "3",
        promptLines: ["A The order was mixed up.", "B We're sorry about the mix-up."],
        audio: "assets/review-audio/review2-q32-3.mp3",
        answer: {
          lines: ["A The order was mixed *up*.", "B We're sorry about the *mix*-up."],
        },
        detail: [
          { word: "The order was mixed up.", ipa: "/ði ˈɔrdɚ wəz mɪkst ʌp/", meaning: "注文が混ざってしまいました。" },
          { word: "We're sorry about the mix-up.", ipa: "/wɪr ˈsɑri əˈbaʊt ðə ˈmɪksʌp/", meaning: "その取り違えについて申し訳ありません。" },
        ],
      },
    ],
    noGlobalAnswer: true,
  },
  {
    text: "人の名前で目立つのはどこ？",
    sections: [
      {
        label: "A",
        promptLines: ["Tom Cruise"],
        audio: "assets/review-audio/review2-q32-a.mp3",
        answer: {
          lines: ["Tom *Cruise*"],
        },
        detail: [
          { word: "Tom Cruise", ipa: "/tɑm kruz/", meaning: "トム・クルーズ" },
        ],
      },
      {
        label: "B",
        promptLines: ["Julia Roberts"],
        audio: "assets/review-audio/review2-q32-b.mp3",
        answer: {
          lines: ["Julia *Ro*berts"],
        },
        detail: [
          { word: "Julia Roberts", ipa: "/ˈdʒuliə ˈrɑbɚts/", meaning: "ジュリア・ロバーツ" },
        ],
      },
      {
        label: "C",
        promptLines: ["John F Kennedy"],
        audio: "assets/review-audio/review2-q32-c.mp3",
        answer: {
          lines: ["John F *Ke*nnedy"],
        },
        detail: [
          { word: "John F Kennedy", ipa: "/dʒɑn ɛf ˈkɛnədi/", meaning: "ジョン・F・ケネディ" },
        ],
      },
    ],
    noGlobalAnswer: true,
  },
  {
    text: "短縮語や数字の表現に関して、一番目立つ箇所はどこ？",
    audio: "assets/review-audio/q31.mp3",
    pickItems: [
      {
        title: "1 MBA",
        choices: ["M", "B", "A"],
        answer: "A",
      },
      {
        title: "2 JFK",
        choices: ["J", "F", "K"],
        answer: "K",
      },
      {
        title: "3 1997",
        choices: ["nineteen", "ninety", "seven"],
        answer: "seven",
      },
    ],
    hideAnswer: true,
  },
  {
    text: "次の文は何箇所、どこがリンキングしていている？",
    sections: [
      {
        label: "1",
        words: ["Have a good evening."],
        audio: "assets/review-audio/q32-1.mp3",
        answer: {
          lines: ["2箇所", "❶ Ha*ve a*", "❷ goo*d e*vening"],
        },
      },
      {
        label: "2",
        words: ["That’s a really good idea."],
        audio: "assets/review-audio/q32-2.mp3",
        answer: {
          lines: ["2箇所", "❶ That’*s a*", "❷ goo*d i*dea"],
        },
      },
      {
        label: "3",
        words: ["Do you speak English?"],
        audio: "assets/review-audio/q32-3.mp3",
        answer: {
          lines: ["1箇所", "❶ spea*k E*nglish"],
        },
      },
      {
        label: "4",
        words: ["I live in an apartment."],
        audio: "assets/review-audio/q32-4.mp3",
        answer: {
          lines: ["3箇所", "❶ li*ve i*n", "❷ i*n a*n", "❸ a*n a*partment"],
        },
      },
    ],
    noGlobalAnswer: true,
  },
  {
    text: "次の3つの文で、それぞれリンキングする箇所を教えてください。",
    sections: [
      {
        label: "1",
        words: ["I’m married, and I’m miserable."],
        audio: "assets/review-audio/q33-2.mp3",
        answer: {
          lines: ["3箇所", "❶ I’*m m*arried", "❷ an*d I*’m", "❸ I’*m m*iserable"],
        },
      },
      {
        label: "2",
        words: ["She's single, and she’s so happy."],
        audio: "assets/review-audio/q33-1.mp3",
        answer: {
          lines: ["2箇所", "❶ She'*s s*ingle", "❷ she’*s s*o"],
        },
      },
      {
        label: "3",
        words: ["I*t w*as so nice to mee*t T*om."],
        promptHighlight: "consonant",
        audio: "assets/review-audio/q33-3.mp3",
        answer: {
          lines: ["1箇所", "❶ wa*s s*o", "※tは破裂音なので、タイミングを残す形で発音しよう"],
        },
      },
    ],
    noGlobalAnswer: true,
  },
  {
    text: "次の3つの文で、それぞれリンキングする箇所を教えてください。",
    sections: [
      {
        label: "1",
        words: ["I ate out."],
        audio: "assets/review-audio/q34-1.mp3",
        answer: {
          lines: [
            "2箇所",
            "❶ *I a*te",
            "※イ系の母音＋母音なので「わたり音のY」が入ります。",
            "❷ a*te ou*t",
          ],
        },
      },
      {
        label: "2",
        words: ["May I come in?"],
        audio: "assets/review-audio/q34-2.mp3",
        answer: {
          lines: [
            "2箇所",
            "❶ Ma*y I*",
            "※イ系の母音＋母音なので「わたり音のY」が入ります。",
            "❷ co*me i*n",
          ],
        },
      },
      {
        label: "3",
        words: ["I'll buy it."],
        audio: "assets/review-audio/q34-3.mp3",
        answer: {
          lines: ["1箇所", "❶ bu*y i*t", "※イ系の母音＋母音なので「わたり音のY」が入ります。"],
        },
      },
    ],
    noGlobalAnswer: true,
  },
  {
    text: "次の2つの文で、それぞれリンキングする箇所を教えてください。",
    sections: [
      {
        label: "1",
        words: ["Go on."],
        audio: "assets/review-audio/q35-1.mp3",
        answer: {
          lines: ["1箇所", "❶ G*o o*n", "※ウ系の母音＋母音なので「わたり音のW」が入ります。"],
        },
      },
      {
        label: "2",
        words: ["I know it."],
        audio: "assets/review-audio/q35-2.mp3",
        answer: {
          lines: ["1箇所", "❶ kno*w i*t", "※ウ系の母音＋母音なので「わたり音のW」が入ります。"],
        },
      },
    ],
    noGlobalAnswer: true,
  },
  {
    text: "次の会話文で、それぞれリンキングする箇所を教えてください。",
    sections: [
      {
        label: "A",
        words: ["Who is he?"],
        audio: "assets/review-audio/q36-1.mp3",
        answer: {
          lines: [
            "2箇所",
            "❶ Wh*o i*s",
            "※ウ系の母音＋母音なので「わたり音のW」が入ります。",
            "❷ i*s h*e",
            "※heのhを脱落させる場合はリンキングします。",
          ],
        },
      },
      {
        label: "B",
        words: ["He is the announcer."],
        audio: "assets/review-audio/q36-2.mp3",
        answer: {
          lines: [
            "2箇所",
            "❶ H*e i*s",
            "※イ系の母音＋母音なので「わたり音のY」が入ります。",
            "❷ th*e a*nnouncer",
            "※イ系の母音＋母音なので「わたり音のY」が入ります。",
          ],
        },
      },
    ],
    noGlobalAnswer: true,
  },
  {
    tag: "リンキング",
    text: "それぞれリンキングをする時に起こる現象はなんでしょうか？",
    sections: [
      {
        label: "1",
        promptLines: ["I love her."],
        audio: "assets/review-audio/review2-q42-1.mp3",
        answer: {
          lines: ["Hが脱落する。", "I love her → I lover"],
        },
      },
      {
        label: "2",
        promptLines: ["I knew her."],
        audio: "assets/review-audio/review2-q42-2.mp3",
        answer: {
          lines: ["Hが脱落する。", "I knew her → I newer"],
        },
      },
      {
        label: "3",
        promptLines: ["did he"],
        audio: "assets/review-audio/review2-q42-3.mp3",
        answer: {
          lines: ["Hが脱落する。", "did he → didee"],
        },
      },
    ],
    noGlobalAnswer: true,
  },
  {
    tag: "リズム",
    text: "内容語と核を全て教えてください。",
    sections: [
      {
        label: "1",
        promptLines: ["I like bacon."],
        audio: "assets/review-audio/review2-q39-1.mp3",
        answer: {
          lines: ["内容語の個数: 2個", "内容語: I *like* *bacon*.", "核: *ba*con"],
        },
      },
      {
        label: "2",
        promptLines: ["I like bacon and eggs."],
        audio: "assets/review-audio/review2-q39-2.mp3",
        answer: {
          lines: ["内容語の個数: 3個", "内容語: I *like* *bacon* and *eggs*.", "核: *eggs*"],
        },
      },
      {
        label: "3",
        promptLines: ["I saw him."],
        audio: "assets/review-audio/review2-q39-3.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: I *saw* him.", "核: *saw*"],
        },
      },
      {
        label: "4",
        promptLines: ["I saw the man."],
        audio: "assets/review-audio/review2-q39-4.mp3",
        answer: {
          lines: ["内容語の個数: 2個", "内容語: I *saw* the *man*.", "核: *man*"],
        },
      },
      {
        label: "5",
        promptLines: ["I saw the man you told me about."],
        audio: "assets/review-audio/review2-q39-5.mp3",
        answer: {
          lines: ["内容語の個数: 3個", "内容語: I *saw* the *man* you *told* me about.", "核: *told*"],
        },
      },
    ],
    noGlobalAnswer: true,
  },
  {
    tag: "リズム",
    text: "内容語を全て教えてください。",
    sections: [
      {
        label: "1",
        promptLines: ["Wait!"],
        audio: "assets/review-audio/review2-q40-1.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: *Wait*!"],
        },
      },
      {
        label: "2",
        promptLines: ["I’ll wait for you."],
        audio: "assets/review-audio/review2-q40-2.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: I’ll *wait* for you."],
        },
      },
      {
        label: "3",
        promptLines: ["I can wait for you."],
        audio: "assets/review-audio/review2-q40-3.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: I can *wait* for you."],
        },
      },
      {
        label: "4",
        promptLines: ["I am waiting for you."],
        audio: "assets/review-audio/review2-q40-4.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: I am *waiting* for you."],
        },
      },
      {
        label: "5",
        promptLines: ["I’ll be waiting for you."],
        audio: "assets/review-audio/review2-q40-5.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: I’ll be *waiting* for you."],
        },
      },
      {
        label: "6",
        promptLines: ["I’ve been waiting for you."],
        audio: "assets/review-audio/review2-q40-6.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: I’ve been *waiting* for you."],
        },
      },
      {
        label: "7",
        promptLines: ["I could’ve waited for you."],
        audio: "assets/review-audio/review2-q40-7.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: I could’ve *waited* for you."],
        },
      },
      {
        label: "8",
        promptLines: ["I could’ve been waiting for you."],
        audio: "assets/review-audio/review2-q40-8.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: I could’ve been *waiting* for you."],
        },
      },
      {
        label: "9",
        promptLines: ["I’ll wait for you in the car."],
        audio: "assets/review-audio/review2-q40-9.mp3",
        answer: {
          lines: ["内容語の個数: 2個", "内容語: I’ll *wait* for you in the *car*."],
        },
      },
      {
        label: "10",
        promptLines: ["I should’ve been waiting for you in the car."],
        audio: "assets/review-audio/review2-q40-10.mp3",
        answer: {
          lines: ["内容語の個数: 2個", "内容語: I should’ve been *waiting* for you in the *car*."],
        },
      },
    ],
    noGlobalAnswer: true,
  },
  {
    tag: "リズム",
    text: "内容語を全て教えてください。",
    sections: [
      {
        label: "1",
        promptLines: ["Tell her."],
        audio: "assets/review-audio/review2-q41-1.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: *Tell* her."],
        },
      },
      {
        label: "2",
        promptLines: ["He’ll tell her."],
        audio: "assets/review-audio/review2-q41-2.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: He’ll *tell* her."],
        },
      },
      {
        label: "3",
        promptLines: ["He’ll be telling her."],
        audio: "assets/review-audio/review2-q41-3.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: He’ll be *telling* her."],
        },
      },
      {
        label: "4",
        promptLines: ["He didn’t tell her."],
        audio: "assets/review-audio/review2-q41-4.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: He didn’t *tell* her."],
        },
      },
      {
        label: "5",
        promptLines: ["He should have told her."],
        audio: "assets/review-audio/review2-q41-5.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: He should have *told* her."],
        },
      },
      {
        label: "6",
        promptLines: ["He should’ve been telling her."],
        audio: "assets/review-audio/review2-q41-6.mp3",
        answer: {
          lines: ["内容語の個数: 1個", "内容語: He should’ve been *telling* her."],
        },
      },
      {
        label: "7",
        promptLines: ["He didn’t tell his wife."],
        audio: "assets/review-audio/review2-q41-7.mp3",
        answer: {
          lines: ["内容語の個数: 2個", "内容語: He didn’t *tell* his *wife*."],
        },
      },
      {
        label: "8",
        promptLines: ["He should’ve been telling his wife."],
        audio: "assets/review-audio/review2-q41-8.mp3",
        answer: {
          lines: ["内容語の個数: 2個", "内容語: He should’ve been *telling* his *wife*."],
        },
      },
      {
        label: "9",
        promptLines: ["He didn’t tell his wife about the situation."],
        audio: "assets/review-audio/review2-q41-9.mp3",
        answer: {
          lines: ["内容語の個数: 3個", "内容語: He didn’t *tell* his *wife* about the *situation*."],
        },
      },
      {
        label: "10",
        promptLines: ["He should’ve been telling his wife about the situation."],
        audio: "assets/review-audio/review2-q41-10.mp3",
        answer: {
          lines: ["内容語の個数: 3個", "内容語: He should’ve been *telling* his *wife* about the *situation*."],
        },
      },
    ],
    noGlobalAnswer: true,
  },
  {
    tag: "リズム",
    text: "次の前置詞はそれぞれ読み方が違います。何がどう違うでしょうか？",
    soundGuideTag: "母音",
    sections: [
      {
        label: "1",
        promptLines: ["1-1 I’m looking *for* you.", "1-2 Who are you looking *for*?"],
        audio: "assets/review-audio/review2-q43-1.mp3",
        answer: {
          lines: ["1-1: 弱形の /fɚ/", "1-2: 強形の /fɔr/"],
        },
      },
      {
        label: "2",
        promptLines: ["2-1 He's *at* the bank.", "2-2 Are you laughing with me or *at* me?"],
        audio: "assets/review-audio/review2-q43-2.mp3",
        answer: {
          lines: ["2-1: 弱形の /ət/", "2-2: 強形の /æt/"],
        },
      },
    ],
    noGlobalAnswer: true,
  },
];

const reviewQuestionsEl = document.querySelector("#reviewQuestions");
const reviewEmptyEl = document.querySelector("#reviewEmpty");
const filterButtons = document.querySelectorAll(".review-filter-btn");
const reviewArchiveEl = document.querySelector("#reviewArchive");
const maxQuestionCount = Number(document.body.dataset.maxQuestions || Infinity);
const state = {
  activeFilter: "all",
};

const referencesByQuestionNumber = {
  16: "p34 / track113",
  17: "p34 / track113",
  18: "p34 / track113",
  19: "p35 / track114",
  20: "p35 / track115",
  21: "p37 / track119",
  22: "p46 / track152",
  23: "p46 / track なし",
  24: "pp74-75 / track237",
  25: "p80 / track246",
  26: "p80 / track246",
  27: "p89 / track266",
  28: "p90 / track267",
  29: "p91 / track269",
  30: "p94 / track278",
  31: "p94 / track280",
  32: "p96 / track285",
  33: "p95 / track283",
  34: "p116 / track346 & p118 / track348",
  35: "p120 / track354",
  36: "p122 / track361",
  37: "p122 / track361",
  38: "p122 / track362",
  39: "p104 / track311",
  40: "pp98-99 / track292",
  41: "p100 / track298",
  42: "p100 / track298",
  43: "p105 / track315",
};

const vowelReferenceList = ["ɑ", "æ", "ʌ", "ə", "ɝ", "ɚ", "i", "ɪ", "u", "ʊ", "ɛ", "ɔ", "eɪ", "oʊ", "aɪ", "aʊ", "ɔɪ"];
const consonantReferenceList = ["/p/", "/b/", "/t/", "/d/", "/k/", "/g/", "/f/", "/v/", "/θ/", "/ð/", "/s/", "/z/", "/ʃ/", "/ʒ/", "/tʃ/", "/dʒ/", "/m/", "/n/", "/ŋ/", "/l/", "/r/", "/w/", "/j/", "/h/"];
const voicedConsonants = new Set(["/b/", "/d/", "/g/", "/v/", "/ð/", "/z/", "/ʒ/", "/dʒ/", "/m/", "/n/", "/ŋ/", "/l/", "/r/", "/w/", "/j/"]);

const detailsByQuestionNumber = {
  8: [
    { word: "saw", ipa: "/sɔ/", meaning: "見た" },
    { word: "law", ipa: "/lɔ/", meaning: "法律" },
    { word: "awful", ipa: "/ˈɔfəl/", meaning: "ひどい" },
    { word: "awesome", ipa: "/ˈɔsəm/", meaning: "すばらしい" },
    { word: "author", ipa: "/ˈɔθɚ/", meaning: "著者" },
    { word: "August", ipa: "/ˈɔɡəst/", meaning: "8月" },
    { word: "applaud", ipa: "/əˈplɔd/", meaning: "拍手する" },
    { word: "audition", ipa: "/ɔˈdɪʃən/", meaning: "オーディション" },
    { word: "small", ipa: "/smɔl/", meaning: "小さい" },
    { word: "walk", ipa: "/wɔk/", meaning: "歩く" },
    { word: "tall", ipa: "/tɔl/", meaning: "背が高い" },
    { word: "always", ipa: "/ˈɔlweɪz/", meaning: "いつも" },
    { word: "bought", ipa: "/bɔt/", meaning: "買った" },
    { word: "thought", ipa: "/θɔt/", meaning: "考えた、考え" },
    { word: "fought", ipa: "/fɔt/", meaning: "戦った" },
    { word: "daughter", ipa: "/ˈdɔtɚ/", meaning: "娘" },
    { word: "caught", ipa: "/kɔt/", meaning: "捕まえた" },
    { word: "gone", ipa: "/ɡɔn/", meaning: "行ってしまった" },
    { word: "off", ipa: "/ɔf/", meaning: "離れて、オフで" },
    { word: "long", ipa: "/lɔŋ/", meaning: "長い" },
  ],
  9: [
    { word: "no", ipa: "/noʊ/", meaning: "いいえ" },
    { word: "don’t", ipa: "/doʊnt/", meaning: "しない" },
    { word: "home", ipa: "/hoʊm/", meaning: "家" },
    { word: "only", ipa: "/ˈoʊnli/", meaning: "ただ、唯一の" },
    { word: "road", ipa: "/roʊd/", meaning: "道" },
    { word: "coat", ipa: "/koʊt/", meaning: "コート" },
    { word: "boat", ipa: "/boʊt/", meaning: "ボート" },
    { word: "own", ipa: "/oʊn/", meaning: "自分自身の、所有する" },
    { word: "slow", ipa: "/sloʊ/", meaning: "遅い" },
    { word: "window", ipa: "/ˈwɪndoʊ/", meaning: "窓" },
    { word: "though", ipa: "/ðoʊ/", meaning: "けれども" },
    { word: "although", ipa: "/ɔlˈðoʊ/", meaning: "だけれども" },
  ],
  10: [
    { word: "good", ipa: "/ɡʊd/", meaning: "良い" },
    { word: "look", ipa: "/lʊk/", meaning: "見る" },
    { word: "childhood", ipa: "/ˈtʃaɪldhʊd/", meaning: "子ども時代" },
    { word: "understood", ipa: "/ˌʌndɚˈstʊd/", meaning: "理解した" },
    { word: "push", ipa: "/pʊʃ/", meaning: "押す" },
    { word: "full", ipa: "/fʊl/", meaning: "いっぱいの" },
    { word: "pull", ipa: "/pʊl/", meaning: "引く" },
    { word: "sugar", ipa: "/ˈʃʊɡɚ/", meaning: "砂糖" },
    { word: "would", ipa: "/wʊd/", meaning: "〜だろう" },
    { word: "could", ipa: "/kʊd/", meaning: "〜できた、〜かもしれない" },
    { word: "should", ipa: "/ʃʊd/", meaning: "〜すべき" },
  ],
  11: [
    { word: "too", ipa: "/tu/", meaning: "〜も、あまりに" },
    { word: "food", ipa: "/fud/", meaning: "食べ物" },
    { word: "school", ipa: "/skul/", meaning: "学校" },
    { word: "tool", ipa: "/tul/", meaning: "道具" },
    { word: "true", ipa: "/tru/", meaning: "本当の" },
    { word: "blue", ipa: "/blu/", meaning: "青い" },
    { word: "avenue", ipa: "/ˈævənu/", meaning: "大通り" },
    { word: "do", ipa: "/du/", meaning: "する" },
    { word: "who", ipa: "/hu/", meaning: "誰" },
    { word: "lose", ipa: "/luz/", meaning: "失う" },
    { word: "prove", ipa: "/pruv/", meaning: "証明する" },
    { word: "new", ipa: "/nu/", meaning: "新しい" },
    { word: "blew", ipa: "/blu/", meaning: "吹いた" },
    { word: "drew", ipa: "/dru/", meaning: "描いた、引いた" },
    { word: "super", ipa: "/ˈsupɚ/", meaning: "すごい、超" },
    { word: "rule", ipa: "/rul/", meaning: "規則、支配する" },
    { word: "duty", ipa: "/ˈduti/", meaning: "義務" },
    { word: "student", ipa: "/ˈstudənt/", meaning: "学生" },
  ],
  12: [
    { word: "her", ipa: "/hɝ/", meaning: "彼女を、彼女の" },
    { word: "mercy", ipa: "/ˈmɝsi/", meaning: "慈悲" },
    { word: "mother", ipa: "/ˈmʌðɚ/", meaning: "母" },
    { word: "winner", ipa: "/ˈwɪnɚ/", meaning: "勝者" },
    { word: "heard", ipa: "/hɝd/", meaning: "聞いた" },
    { word: "learn", ipa: "/lɝn/", meaning: "学ぶ" },
    { word: "earth", ipa: "/ɝθ/", meaning: "地球、大地" },
    { word: "first", ipa: "/fɝst/", meaning: "最初の" },
    { word: "girl", ipa: "/ɡɝl/", meaning: "女の子" },
    { word: "firm", ipa: "/fɝm/", meaning: "会社、固い" },
    { word: "doctor", ipa: "/ˈdɑktɚ/", meaning: "医者" },
    { word: "word", ipa: "/wɝd/", meaning: "単語" },
    { word: "worry", ipa: "/ˈwɝi/", meaning: "心配する" },
    { word: "occur", ipa: "/əˈkɝ/", meaning: "起こる" },
    { word: "curtain", ipa: "/ˈkɝtən/", meaning: "カーテン" },
    { word: "jury", ipa: "/ˈdʒʊri/", meaning: "陪審" },
    { word: "insecure", ipa: "/ˌɪnsəˈkjʊr/", meaning: "不安な" },
    { word: "culture", ipa: "/ˈkʌltʃɚ/", meaning: "文化" },
    { word: "grammar", ipa: "/ˈɡræmɚ/", meaning: "文法" },
    { word: "collar", ipa: "/ˈkɑlɚ/", meaning: "襟" },
  ],
  13: [
    { word: "fly", ipa: "/flaɪ/", meaning: "飛ぶ" },
    { word: "sky", ipa: "/skaɪ/", meaning: "空" },
    { word: "apply", ipa: "/əˈplaɪ/", meaning: "申し込む、適用する" },
    { word: "style", ipa: "/staɪl/", meaning: "様式、スタイル" },
    { word: "nice", ipa: "/naɪs/", meaning: "すてきな" },
    { word: "kind", ipa: "/kaɪnd/", meaning: "親切な、種類" },
    { word: "fine", ipa: "/faɪn/", meaning: "元気な、良い" },
    { word: "sign", ipa: "/saɪn/", meaning: "標識、署名する" },
    { word: "light", ipa: "/laɪt/", meaning: "光、軽い" },
    { word: "fight", ipa: "/faɪt/", meaning: "戦う" },
    { word: "sight", ipa: "/saɪt/", meaning: "視界、光景" },
    { word: "night", ipa: "/naɪt/", meaning: "夜" },
    { word: "lie", ipa: "/laɪ/", meaning: "横になる、うそ" },
    { word: "tie", ipa: "/taɪ/", meaning: "結ぶ、ネクタイ" },
    { word: "tried", ipa: "/traɪd/", meaning: "試した" },
  ],
  14: [
    { word: "found", ipa: "/faʊnd/", meaning: "見つけた" },
    { word: "thousand", ipa: "/ˈθaʊzənd/", meaning: "千" },
    { word: "now", ipa: "/naʊ/", meaning: "今" },
    { word: "crowd", ipa: "/kraʊd/", meaning: "群衆" },
  ],
  15: [
    { word: "moist", ipa: "/mɔɪst/", meaning: "湿った" },
    { word: "oil", ipa: "/ɔɪl/", meaning: "油" },
    { word: "enjoy", ipa: "/ɪnˈdʒɔɪ/", meaning: "楽しむ" },
    { word: "royal", ipa: "/ˈrɔɪəl/", meaning: "王室の" },
  ],
  19: [
    { word: "bet", ipa: "/bɛt/", meaning: "賭ける、賭け" },
    { word: "bed", ipa: "/bɛd/", meaning: "ベッド" },
  ],
  20: [
    { word: "advice", ipa: "/ədˈvaɪs/", meaning: "助言" },
    { word: "advise", ipa: "/ədˈvaɪz/", meaning: "助言する" },
    { word: "bet", ipa: "/bɛt/", meaning: "賭ける、賭け" },
    { word: "bed", ipa: "/bɛd/", meaning: "ベッド" },
    { word: "dock", ipa: "/dɑk/", meaning: "ドック、波止場" },
    { word: "dog", ipa: "/dɔɡ/", meaning: "犬" },
  ],
  21: [
    { word: "stop", ipa: "/stɑp/", meaning: "止まる、止める" },
    { word: "club", ipa: "/klʌb/", meaning: "クラブ" },
    { word: "sad", ipa: "/sæd/", meaning: "悲しい" },
    { word: "cut", ipa: "/kʌt/", meaning: "切る" },
  ],
  22: [
    { word: "needed", ipa: "/ˈnidɪd/", meaning: "必要とした" },
    { word: "waited", ipa: "/ˈweɪtɪd/", meaning: "待った" },
    { word: "opened", ipa: "/ˈoʊpənd/", meaning: "開けた" },
    { word: "showed", ipa: "/ʃoʊd/", meaning: "見せた" },
    { word: "passed", ipa: "/pæst/", meaning: "通った、合格した" },
    { word: "helped", ipa: "/hɛlpt/", meaning: "助けた" },
  ],
  23: [
    { word: "admitted", ipa: "/ədˈmɪtɪd/", meaning: "認めた" },
    { word: "controlled", ipa: "/kənˈtroʊld/", meaning: "制御した" },
    { word: "developed", ipa: "/dɪˈvɛləpt/", meaning: "発達した、開発した" },
    { word: "ended", ipa: "/ˈɛndɪd/", meaning: "終えた" },
    { word: "finished", ipa: "/ˈfɪnɪʃt/", meaning: "終えた" },
    { word: "hugged", ipa: "/hʌɡd/", meaning: "抱きしめた" },
    { word: "liked", ipa: "/laɪkt/", meaning: "好きだった" },
    { word: "pretended", ipa: "/prɪˈtɛndɪd/", meaning: "ふりをした" },
    { word: "pulled", ipa: "/pʊld/", meaning: "引いた" },
  ],
  26: [
    { word: "addict（名詞）", ipa: "/ˈædɪkt/", meaning: "中毒者" },
    { word: "addict（動詞）", ipa: "/əˈdɪkt/", meaning: "依存させる" },
    { word: "contest（名詞）", ipa: "/ˈkɑntɛst/", meaning: "コンテスト" },
    { word: "contest（動詞）", ipa: "/kənˈtɛst/", meaning: "争う" },
    { word: "produce（名詞）", ipa: "/ˈproʊdus/", meaning: "農産物" },
    { word: "produce（動詞）", ipa: "/prəˈdus/", meaning: "生産する" },
    { word: "progress（名詞）", ipa: "/ˈprɑɡrɛs/", meaning: "進歩" },
    { word: "progress（動詞）", ipa: "/prəˈɡrɛs/", meaning: "進歩する" },
    { word: "research（名詞）", ipa: "/ˈrisɝtʃ/", meaning: "研究" },
    { word: "research（動詞）", ipa: "/rɪˈsɝtʃ/", meaning: "研究する" },
  ],
  27: [
    { word: "parking lot", ipa: "/ˈpɑrkɪŋ lɑt/", meaning: "駐車場" },
    { word: "credit card", ipa: "/ˈkrɛdɪt kɑrd/", meaning: "クレジットカード" },
    { word: "baseball", ipa: "/ˈbeɪsbɔl/", meaning: "野球" },
  ],
  28: [
    { word: "cell phone number", ipa: "/ˈsɛl foʊn ˌnʌmbɚ/", meaning: "携帯電話番号" },
    { word: "website address", ipa: "/ˈwɛbsaɪt əˌdrɛs/", meaning: "ウェブサイトのアドレス" },
  ],
  29: [
    { word: "nice day", ipa: "/naɪs ˈdeɪ/", meaning: "良い日" },
    { word: "long time", ipa: "/lɔŋ ˈtaɪm/", meaning: "長い時間" },
    { word: "first grade", ipa: "/fɝst ˈɡreɪd/", meaning: "1年生" },
  ],
  30: [
    { word: "Turn it off.", ipa: "/tɝn ɪt ˈɔf/", meaning: "それを消して" },
    { word: "She turned him down.", ipa: "/ʃi tɝnd hɪm ˈdaʊn/", meaning: "彼女は彼を断った" },
    { word: "He didn’t turn up.", ipa: "/hi ˈdɪdənt tɝn ˈʌp/", meaning: "彼は現れなかった" },
  ],
  33: [
    { word: "MBA", ipa: "/ˌɛm bi ˈeɪ/", meaning: "経営学修士" },
    { word: "JFK", ipa: "/ˌdʒeɪ ɛf ˈkeɪ/", meaning: "ジョン・F・ケネディ" },
    { word: "1997", ipa: "/ˌnaɪnˈtin ˌnaɪnti ˈsɛvən/", meaning: "1997年" },
  ],
  34: [
    { word: "Have a good evening.", ipa: "/hæv ə ɡʊd ˈivnɪŋ/", meaning: "良い夜を" },
    { word: "That’s a really good idea.", ipa: "/ðæts ə ˈrɪli ɡʊd aɪˈdiə/", meaning: "それは本当に良い考えです" },
    { word: "Do you speak English?", ipa: "/du ju spik ˈɪŋɡlɪʃ/", meaning: "英語を話しますか" },
    { word: "I live in an apartment.", ipa: "/aɪ lɪv ɪn ən əˈpɑrtmənt/", meaning: "私はアパートに住んでいます" },
    { word: "This is a good film.", ipa: "/ðɪs ɪz ə ɡʊd fɪlm/", meaning: "これは良い映画です" },
  ],
  35: [
    { word: "I’m married, and I’m miserable.", ipa: "/aɪm ˈmærid ən aɪm ˈmɪzərəbəl/", meaning: "私は結婚していて、不幸です" },
    { word: "She's single, and she’s so happy.", ipa: "/ʃiz ˈsɪŋɡəl ən ʃiz soʊ ˈhæpi/", meaning: "彼女は独身で、とても幸せです" },
    { word: "It was so nice to meet Tom.", ipa: "/ɪt wəz soʊ naɪs tə mit tɑm/", meaning: "トムに会えてとてもよかったです" },
  ],
  36: [
    { word: "I ate out.", ipa: "/aɪ eɪt aʊt/", meaning: "外食しました" },
    { word: "May I come in?", ipa: "/meɪ aɪ kʌm ɪn/", meaning: "入ってもいいですか" },
    { word: "I'll buy it.", ipa: "/aɪl baɪ ɪt/", meaning: "それを買います" },
  ],
  37: [
    { word: "Go on.", ipa: "/ɡoʊ ɑn/", meaning: "続けて" },
    { word: "I know it.", ipa: "/aɪ noʊ ɪt/", meaning: "それを知っています" },
  ],
  38: [
    { word: "Who is he?", ipa: "/hu ɪz hi/", meaning: "彼は誰ですか" },
    { word: "He is the announcer.", ipa: "/hi ɪz ði əˈnaʊnsɚ/", meaning: "彼がそのアナウンサーです" },
  ],
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.activeFilter = button.dataset.reviewFilter || "all";
    updateFilterButtons();
    renderReviewQuestions();
  });
});

assignDefaultTags();
assignQuestionReferences();
assignQuestionDetails();
updateFilterButtons();
renderReviewQuestions();

function renderReviewQuestions() {
  reviewQuestionsEl.innerHTML = "";
  const isArchiveFilter = state.activeFilter === "アーカイブ";
  reviewArchiveEl?.classList.toggle("hidden", !isArchiveFilter);

  if (isArchiveFilter) {
    reviewEmptyEl.classList.add("hidden");
    return;
  }

  const filteredQuestions = getFilteredQuestions();
  reviewEmptyEl.classList.toggle("hidden", filteredQuestions.length > 0);

  filteredQuestions.forEach((question) => {
    if (question.type === "special") {
      reviewQuestionsEl.appendChild(renderSpecialSection(question));
      return;
    }

    const questionNumber = getQuestionNumber(question);
    const article = document.createElement("article");
    article.className = "review-question";
    article.classList.toggle("consonant-question", question.tag === "子音");
    article.classList.toggle("stress-question", question.tag === "強勢");
    article.classList.toggle("linking-question", question.tag === "リンキング");
    article.classList.toggle("rhythm-question", question.tag === "リズム");

    const tag = document.createElement("span");
    tag.className = `review-tag ${getTagClass(question.tag)}`;
    tag.textContent = question.tag;

    const title = document.createElement("h2");
    title.className = "review-question-title";
    title.innerHTML = `Q${questionNumber}. ${renderQuestionText(question)}`;

    const reference = document.createElement("details");
    reference.className = "review-reference";
    const referenceSummary = document.createElement("summary");
    referenceSummary.setAttribute("aria-label", `Q${questionNumber}のテキスト番号を見る`);
    referenceSummary.textContent = "📖";
    const referenceText = document.createElement("p");
    referenceText.textContent = question.reference || "未設定";
    reference.append(referenceSummary, referenceText);

    const soundGuide = renderSoundGuide(question.soundGuideTag || question.tag);
    if (soundGuide) {
      article.appendChild(soundGuide);
    }

    if (question.sections) {
      const sectionList = document.createElement("div");
      sectionList.className = "review-section-list";
      question.sections.forEach((section) => {
        const sectionEl = document.createElement("section");
        sectionEl.className = "review-word-section";

        const heading = document.createElement("h3");
        heading.textContent = section.label;

        if (section.promptLines) {
          const prompt = document.createElement("div");
          prompt.className = "review-section-prompt-lines";
          section.promptLines.forEach((line) => {
            const lineEl = document.createElement("p");
            lineEl.innerHTML = renderHighlightedWord(line);
            prompt.appendChild(lineEl);
          });
          sectionEl.append(heading, prompt);
        } else {
          const words = document.createElement("p");
          if (section.promptHighlight) {
            words.classList.add(`${section.promptHighlight}-prompt-highlight`);
          }
          words.innerHTML = renderWordList(section.words);
          sectionEl.append(heading, words);
        }
        if (section.note) {
          const note = document.createElement("p");
          note.className = "review-section-note";
          note.textContent = section.note;
          sectionEl.appendChild(note);
        }
        if (section.answer) {
          const sectionActions = document.createElement("div");
          sectionActions.className = "section-answer-actions";

          const sectionDetails = document.createElement("details");
          sectionDetails.className = "review-answer section-answer-details";
          sectionDetails.classList.toggle("consonant-answer", question.tag === "子音");
          sectionDetails.classList.toggle("stress-answer", question.tag === "強勢");
          sectionDetails.classList.toggle("linking-answer", question.tag === "リンキング");
          sectionDetails.classList.toggle("rhythm-answer", question.tag === "リズム");
          const sectionSummary = document.createElement("summary");
          sectionSummary.textContent = "answer";
          const sectionAnswer = renderAnswer(section.answer);
          sectionAnswer.classList.add("review-section-answer");
          sectionDetails.append(sectionSummary, sectionAnswer);
          sectionActions.appendChild(sectionDetails);

          if (section.audio) {
            sectionActions.appendChild(renderQuestionAudio(section.audio));
          }

          if (section.detail) {
            sectionActions.appendChild(renderQuestionDetail(section.detail));
          }

          sectionEl.appendChild(sectionActions);
        }
        sectionList.appendChild(sectionEl);
      });
      article.appendChild(sectionList);
    }

    if (question.choices) {
      const choiceList = document.createElement("ol");
      choiceList.className = "review-choice-list";
      question.choices.forEach((choice) => {
        const item = document.createElement("li");
        item.textContent = choice;
        choiceList.appendChild(item);
      });
      article.appendChild(choiceList);
    }

    if (question.listeningItems) {
      article.appendChild(renderListeningItems(question.listeningItems, { hideSpeed: question.hideSpeed }));
    }

    if (question.pickItems) {
      article.appendChild(renderPickItems(question.pickItems));
    }

    article.prepend(tag, title);
    if ((!question.hideAnswer && !question.noGlobalAnswer) || question.audio || question.detail) {
      const answerActions = document.createElement("div");
      answerActions.className = "review-answer-actions";

      if (!question.hideAnswer && !question.noGlobalAnswer) {
        const details = document.createElement("details");
        details.className = "review-answer";
        details.classList.toggle("consonant-answer", question.tag === "子音");
        details.classList.toggle("stress-answer", question.tag === "強勢");
        details.classList.toggle("linking-answer", question.tag === "リンキング");
        details.classList.toggle("rhythm-answer", question.tag === "リズム");

        const summary = document.createElement("summary");
        summary.textContent = "answer";

        const answer = renderAnswer(question.answer);

        details.append(summary, answer);
        answerActions.appendChild(details);
      }

      if (question.audio) {
        answerActions.appendChild(renderQuestionAudio(question.audio));
      }

      if (question.detail) {
        answerActions.appendChild(renderQuestionDetail(question.detail));
      }

      article.append(answerActions);
    }
    reviewQuestionsEl.appendChild(article);
  });
}

function renderQuestionAudio(audioConfig) {
  const src = typeof audioConfig === "string" ? audioConfig : audioConfig.src;
  const note = typeof audioConfig === "string" ? "" : audioConfig.note;
  const details = document.createElement("details");
  details.className = "review-audio";

  const summary = document.createElement("summary");
  summary.textContent = "Audio";

  const body = document.createElement("div");
  body.className = "review-audio-body";

  if (note) {
    const noteEl = document.createElement("p");
    noteEl.className = "review-audio-note";
    noteEl.textContent = note;
    body.appendChild(noteEl);
  }

  let audio;
  if (src) {
    audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "metadata";
    audio.src = src;
  }

  const speedRow = document.createElement("div");
  speedRow.className = "review-audio-speed-row";
  if (audio) {
    [0.25, 0.5, 0.75, 1].forEach((rate) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `review-audio-speed-btn${rate === 1 ? " active" : ""}`;
      button.textContent = rate.toFixed(rate === 1 ? 1 : 2).replace("0.50", "0.5").replace("0.75", "0.75").replace("0.25", "0.25");
      button.addEventListener("click", () => {
        audio.playbackRate = rate;
        speedRow.querySelectorAll(".review-audio-speed-btn").forEach((btn) => {
          btn.classList.toggle("active", btn === button);
        });
      });
      speedRow.appendChild(button);
    });
  }

  if (audio) {
    body.append(audio, speedRow);
    details.addEventListener("toggle", () => {
      if (details.open) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    });
  }
  details.append(summary, body);
  return details;
}

function renderQuestionDetail(items) {
  const detail = document.createElement("details");
  detail.className = "review-detail review-question-detail";
  const summary = document.createElement("summary");
  summary.textContent = "detail";
  const detailBody = document.createElement("div");
  detailBody.className = "review-detail-body";
  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "review-detail-row";
    row.innerHTML = `
      <span>${escapeHtml(item.word)}</span>
      <strong>${escapeHtml(item.ipa)}</strong>
      <em>${escapeHtml(item.meaning)}</em>
    `;
    detailBody.appendChild(row);
  });
  detail.append(summary, detailBody);
  return detail;
}

function renderSoundGuide(tag) {
  if (tag !== "母音" && tag !== "子音") {
    return null;
  }

  const details = document.createElement("details");
  details.className = `review-sound-guide ${tag === "母音" ? "vowel-guide" : "consonant-guide"}`;

  const summary = document.createElement("summary");
  summary.textContent = tag === "母音" ? "VOWELS" : "CONSONANTS";

  const list = document.createElement(tag === "母音" ? "ol" : "ul");
  list.className = "review-sound-guide-list";
  const items = tag === "母音" ? vowelReferenceList : consonantReferenceList;
  items.forEach((sound) => {
    const item = document.createElement("li");
    item.textContent = sound;
    if (tag === "子音" && voicedConsonants.has(sound)) {
      item.className = "voiced-consonant";
    }
    list.appendChild(item);
  });

  details.append(summary, list);
  return details;
}

function renderSpecialSection(section) {
  const article = document.createElement("article");
  article.className = "review-question review-special-section";

  const tag = document.createElement("span");
  tag.className = `review-tag ${getTagClass(section.tag)}`;
  tag.textContent = section.tag;

  const title = document.createElement("h2");
  title.className = "review-question-title";
  title.textContent = section.title;

  const details = document.createElement("details");
  details.className = "review-special-details";
  const summary = document.createElement("summary");
  summary.textContent = "詳細を見る";
  const image = document.createElement("img");
  image.src = section.image.src;
  image.alt = section.image.alt;
  details.append(summary, image);

  article.append(tag, title, details);
  return article;
}

function getQuestionNumber(question) {
  const index = reviewQuestions.indexOf(question);
  return reviewQuestions.slice(0, index + 1).filter((item) => item.type !== "special").length;
}

function getFilteredQuestions() {
  const availableQuestions = getAvailableQuestions();
  if (state.activeFilter === "all") {
    return availableQuestions;
  }
  return availableQuestions.filter((question) => question.tag === state.activeFilter);
}

function getAvailableQuestions() {
  let questionCount = 0;
  return reviewQuestions.filter((question) => {
    if (question.type === "special") {
      return questionCount < maxQuestionCount;
    }
    questionCount += 1;
    return questionCount <= maxQuestionCount;
  });
}

function updateFilterButtons() {
  filterButtons.forEach((button) => {
    const filter = button.dataset.reviewFilter || "all";
    button.classList.toggle("active", filter === state.activeFilter);
  });
}

function assignDefaultTags() {
  let questionNumber = 0;
  reviewQuestions.forEach((question) => {
    if (question.type === "special") {
      return;
    }
    questionNumber += 1;
    if (!question.tag) {
      if (questionNumber <= 15) {
        question.tag = "母音";
      } else if (questionNumber <= 23) {
        question.tag = "子音";
      } else if (questionNumber <= 33) {
        question.tag = "強勢";
      } else {
        question.tag = "リンキング";
      }
    }
  });
}

function assignQuestionReferences() {
  let questionNumber = 0;
  reviewQuestions.forEach((question) => {
    if (question.type === "special") {
      return;
    }
    questionNumber += 1;
    if (referencesByQuestionNumber[questionNumber]) {
      question.reference = referencesByQuestionNumber[questionNumber];
    }
  });
}

function assignQuestionDetails() {
  let questionNumber = 0;
  reviewQuestions.forEach((question) => {
    if (question.type === "special") {
      return;
    }
    questionNumber += 1;
    if (questionNumber >= 34 && detailsByQuestionNumber[questionNumber] && question.sections) {
      question.sections.forEach((section, index) => {
        if (!section.detail && detailsByQuestionNumber[questionNumber][index]) {
          section.detail = [detailsByQuestionNumber[questionNumber][index]];
        }
      });
      return;
    }
    if (detailsByQuestionNumber[questionNumber] && !question.detail) {
      question.detail = detailsByQuestionNumber[questionNumber];
    }
  });
}

function getTagClass(tag) {
  if (tag === "子音") return "consonant";
  if (tag === "強勢") return "stress";
  if (tag === "リンキング") return "linking";
  if (tag === "リズム") return "rhythm";
  return "vowel";
}

function renderQuestionText(question) {
  if (question.words) {
    return question.text.replace("{words}", renderWordList(question.words));
  }
  return escapeHtml(question.text);
}

function renderAnswer(answer) {
  if (answer && Array.isArray(answer.groups)) {
    const answerWrap = document.createElement("div");
    answerWrap.className = "review-answer-text answer-groups";
    answer.groups.forEach((group) => {
      const section = document.createElement("section");
      const heading = document.createElement("h4");
      heading.textContent = group.label;
      const list = document.createElement("p");
      list.textContent = group.items.join(", ");
      section.append(heading, list);
      answerWrap.appendChild(section);
    });
    return answerWrap;
  }

  if (answer && Array.isArray(answer.lines)) {
    const answerWrap = document.createElement("div");
    answerWrap.className = "review-answer-text answer-lines";
    answer.lines.forEach((line, index) => {
      const p = document.createElement("p");
      if (index === 0 && line.includes("箇所")) {
        p.className = "answer-line-count";
      }
      p.innerHTML = renderHighlightedWord(line);
      answerWrap.appendChild(p);
    });
    return answerWrap;
  }

  if (Array.isArray(answer)) {
    const answerWrap = document.createElement("div");
    answerWrap.className = "review-answer-text answer-stack";

    const [firstItem, ...remainingItems] = answer;
    const items = /個$/.test(firstItem) ? remainingItems : answer;

    if (/個$/.test(firstItem)) {
      const count = document.createElement("p");
      count.className = "answer-count";
      count.textContent = firstItem;
      answerWrap.appendChild(count);
    }

    const list = document.createElement("ul");
    list.className = "answer-list";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    answerWrap.appendChild(list);
    return answerWrap;
  }

  const answerEl = document.createElement("p");
  answerEl.className = "review-answer-text";
  answerEl.textContent = answer;
  return answerEl;
}

function renderListeningItems(items, options = {}) {
  const list = document.createElement("div");
  list.className = "review-listening-list";

  items.forEach((item, index) => {
    const card = document.createElement("section");
    card.className = "review-listening-card";

    const heading = document.createElement("h3");
    heading.textContent = item.title || `音声 ${index + 1}`;

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "metadata";
    audio.src = item.audio;

    const speedRow = document.createElement("div");
    speedRow.className = "review-speed-row";
    if (!options.hideSpeed) {
      [0.25, 0.5, 0.75, 1].forEach((rate) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `review-speed-btn${rate === 1 ? " active" : ""}`;
        button.textContent = `${rate}x`;
        button.addEventListener("click", () => {
          audio.playbackRate = rate;
          speedRow.querySelectorAll(".review-speed-btn").forEach((btn) => {
            btn.classList.toggle("active", btn === button);
          });
        });
        speedRow.appendChild(button);
      });
    }

    const choices = document.createElement("div");
    choices.className = "review-listening-choices";
    const feedback = document.createElement("p");
    feedback.className = "review-listening-feedback";
    feedback.setAttribute("aria-live", "polite");

    const labels = item.choices || [`${item.first} → ${item.second}`, `${item.second} → ${item.first}`];
    labels.forEach((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "review-listening-choice";
      button.textContent = label;
      button.addEventListener("click", () => {
        choices.querySelectorAll(".review-listening-choice").forEach((choice) => {
          choice.classList.toggle("correct", choice.textContent === item.answer);
          choice.classList.toggle("wrong", choice === button && choice.textContent !== item.answer);
        });
        feedback.textContent = button.textContent === item.answer ? "正解" : "残念！";
        feedback.classList.toggle("correct", button.textContent === item.answer);
        feedback.classList.toggle("wrong", button.textContent !== item.answer);
      });
      choices.appendChild(button);
    });

    card.append(heading, audio);
    if (!options.hideSpeed) {
      card.appendChild(speedRow);
    }
    card.append(choices, feedback);

    if (item.ipa1 && item.ipa2) {
      const hint = document.createElement("details");
      hint.className = "review-listening-hint";
      const summary = document.createElement("summary");
      summary.textContent = "発音記号のヒント";
      const hintBody = document.createElement("div");
      hintBody.className = "review-listening-hint-body";
      hintBody.innerHTML = `
        <p><span>${escapeHtml(item.first)}</span><strong>${escapeHtml(item.ipa1)}</strong></p>
        <p><span>${escapeHtml(item.second)}</span><strong>${escapeHtml(item.ipa2)}</strong></p>
      `;
      hint.append(summary, hintBody);
      card.appendChild(hint);
    }
    list.appendChild(card);
  });

  return list;
}

function renderPickItems(items) {
  const list = document.createElement("div");
  list.className = "review-listening-list review-pick-list";

  items.forEach((item) => {
    const card = document.createElement("section");
    card.className = "review-listening-card";

    const heading = document.createElement("h3");
    heading.textContent = item.title;

    if (item.promptLines) {
      const prompt = document.createElement("div");
      prompt.className = "review-pick-prompt";
      item.promptLines.forEach((line) => {
        const p = document.createElement("p");
        p.textContent = line;
        prompt.appendChild(p);
      });
      card.append(heading, prompt);
    } else {
      card.appendChild(heading);
    }

    if (item.audio) {
      card.appendChild(renderQuestionAudio(item.audio));
    }

    const choices = document.createElement("div");
    choices.className = "review-listening-choices";

    const feedback = document.createElement("p");
    feedback.className = "review-listening-feedback";
    feedback.setAttribute("aria-live", "polite");

    item.choices.forEach((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "review-listening-choice";
      button.textContent = label;
      button.addEventListener("click", () => {
        choices.querySelectorAll(".review-listening-choice").forEach((choice) => {
          choice.classList.toggle("correct", choice.textContent === item.answer);
          choice.classList.toggle("wrong", choice === button && choice.textContent !== item.answer);
        });
        feedback.textContent = button.textContent === item.answer ? "正解" : "残念！";
        feedback.classList.toggle("correct", button.textContent === item.answer);
        feedback.classList.toggle("wrong", button.textContent !== item.answer);
      });
      choices.appendChild(button);
    });

    card.append(choices, feedback);
    list.appendChild(card);
  });

  return list;
}

function renderWordList(words) {
  return words.map((word) => `<span class="review-inline-word">${renderHighlightedWord(word)}</span>`).join(", ");
}

function renderHighlightedWord(word) {
  const safeWord = escapeHtml(word);
  const parts = safeWord.split("*");
  return parts
    .map((part, index) => {
      if (index % 2 === 1) {
        return `<mark>${part}</mark>`;
      }
      return part;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
