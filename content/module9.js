/* Module 9: Campus Security and Emergency Support.
   Every piece of text is a pair: [English, Urdu].
   URDU IS A DRAFT TRANSLATION - to be reviewed and corrected by Prof. Amin before launch.
   KGMC's security numbers, visitor procedure and reporting channels were left blank in the source
   document; this module uses role names until those are confirmed. Sensitive security arrangements
   (guard deployment, camera coverage) are deliberately not included in this public module.
   Block types are the same as in module1.js. */
window.KGMC_CONTENT = window.KGMC_CONTENT || {};
window.KGMC_CONTENT.m9 = {
  version: "1.0",
  title: ["Campus security and emergency support", "کیمپس کی سکیورٹی اور ہنگامی معاونت"],
  sections: [
    {
      id: "start",
      title: ["Start: “I am only going inside for a minute”", "آغاز: ”میں بس ایک منٹ کے لیے اندر جا رہا ہوں“"],
      blocks: [
        { t: "p", x: ["An unfamiliar person arrives at the college entrance and says they are delivering equipment to a department. They have no appointment details and ask a student to let them in through a side entrance. The student wants to be helpful.",
                      "ایک اجنبی شخص کالج کے دروازے پر آتا ہے اور کہتا ہے کہ وہ کسی شعبے کو سامان پہنچانے آیا ہے۔ اس کے پاس ملاقات کی کوئی تفصیل نہیں اور وہ ایک طالبہ سے کہتا ہے کہ اسے بغلی دروازے سے اندر جانے دے۔ طالبہ مدد کرنا چاہتی ہے۔"] },
        { t: "think", x: ["Think: Should the student let them in? Who can verify the visit? How can the student respond politely?",
                          "سوچیں: کیا طالبہ کو اسے اندر آنے دینا چاہیے؟ اس آمد کی تصدیق کون کر سکتا ہے؟ طالبہ شائستگی سے کیا جواب دے سکتی ہے؟"] },
        { t: "key", x: ["Follow access procedures. Report what you observe. Keep yourself safe. Help responders reach the right place.",
                        "داخلے کے طریقۂ کار پر عمل کریں۔ جو دیکھیں اس کی اطلاع دیں۔ خود کو محفوظ رکھیں۔ امدادی عملے کو صحیح جگہ پہنچنے میں مدد دیں۔"] },
        { t: "img", src: "images/m9-main-entrance-kgmc.jpg",
          alt: ["The main entrance of Khyber Girls Medical College with its covered gateway", "خیبر گرلز میڈیکل کالج کا مرکزی دروازہ اور اس کا چھتا ہوا راستہ"],
          cap: ["The main entrance, KGMC.", "کے جی ایم سی کا مرکزی دروازہ۔"] }
      ]
    },
    {
      id: "objectives",
      title: ["What you will learn", "آپ کیا سیکھیں گے"],
      blocks: [
        { t: "p", x: ["After completing this module, you should be able to:", "یہ ماڈیول مکمل کرنے کے بعد آپ اس قابل ہوں گے کہ:"] },
        { t: "ol", items: [
          ["Explain your role in keeping the campus secure.", "کیمپس کو محفوظ رکھنے میں اپنا کردار بیان کر سکیں۔"],
          ["Follow identification, visitor and restricted-access procedures.", "شناخت، مہمانوں اور محدود داخلے کے طریقۂ کار پر عمل کر سکیں۔"],
          ["Recognize and report security concerns without stereotyping.", "کسی کے بارے میں پہلے سے رائے قائم کیے بغیر سکیورٹی کے خدشات پہچان اور رپورٹ کر سکیں۔"],
          ["Describe safe responses to threatening behaviour or suspicious items.", "دھمکی آمیز رویے یا مشکوک اشیاء پر محفوظ ردِعمل بیان کر سکیں۔"],
          ["Support emergency communication, access and accountability.", "ہنگامی رابطے، رسائی اور افراد کی گنتی میں مدد دے سکیں۔"],
          ["Protect privacy when reporting incidents.", "واقعات کی اطلاع دیتے وقت رازداری کا خیال رکھ سکیں۔"]
        ] },
        { t: "note", x: ["Fire evacuation is covered in Module 1 and first aid in Module 3.", "آگ کی صورت میں انخلا ماڈیول 1 میں اور ابتدائی طبی امداد ماڈیول 3 میں شامل ہے۔"] }
      ]
    },
    {
      id: "shared",
      title: ["Security is a shared responsibility", "سکیورٹی سب کی مشترکہ ذمہ داری ہے"],
      blocks: [
        { t: "table",
          head: [["Group", "گروہ"], ["Main responsibilities", "اہم ذمہ داریاں"]],
          rows: [
            [["Students and all staff", "طلبہ اور تمام عملہ"], ["Follow access rules, look after ID and access cards, and report concerns.", "داخلے کے اصولوں پر عمل کریں، شناختی اور رسائی کارڈ سنبھال کر رکھیں اور خدشات کی اطلاع دیں۔"]],
            [["Security guards", "سکیورٹی گارڈ"], ["Apply entry procedures, monitor assigned areas, respond within their training and escalate incidents.", "داخلے کے طریقۂ کار نافذ کریں، مقررہ جگہوں کی نگرانی کریں، اپنی تربیت کے مطابق ردِعمل دیں اور واقعات آگے پہنچائیں۔"]],
            [["Reception staff", "استقبالیہ عملہ"], ["Verify visits, keep visitor records and contact hosts.", "آمد کی تصدیق کریں، مہمانوں کا ریکارڈ رکھیں اور میزبان سے رابطہ کریں۔"]],
            [["Visitor hosts", "مہمانوں کے میزبان"], ["Confirm appointments, explain safety instructions and supervise access where required.", "ملاقات کی تصدیق کریں، حفاظتی ہدایات سمجھائیں اور جہاں ضروری ہو رسائی کی نگرانی کریں۔"]],
            [["Hostel staff", "ہاسٹل کا عملہ"], ["Apply the approved visitor and after-hours procedures and respond to welfare concerns.", "مہمانوں اور اوقاتِ کار کے بعد کے منظور شدہ طریقے نافذ کریں اور فلاح سے متعلق خدشات پر توجہ دیں۔"]],
            [["Maintenance staff", "مرمت کا عملہ"], ["Report or repair damaged doors, locks, lighting and boundary structures.", "خراب دروازوں، تالوں، روشنی اور چار دیواری کی اطلاع دیں یا مرمت کریں۔"]],
            [["College management", "کالج انتظامیہ"], ["Provide staffing, training, clear responsibilities and communication systems, and review incidents.", "عملہ، تربیت، واضح ذمہ داریاں اور رابطے کا نظام فراہم کریں اور واقعات کا جائزہ لیں۔"]]
          ] },
        { t: "warn", x: ["Access controls must still allow safe emergency escape. Never chain or block an emergency exit to improve security.",
                         "داخلے کی پابندیوں کے باوجود ہنگامی اخراج محفوظ رہنا چاہیے۔ سکیورٹی بہتر کرنے کے لیے ہنگامی راستے کو کبھی زنجیر نہ لگائیں اور نہ بند کریں۔"] }
      ]
    },
    {
      id: "entry",
      title: ["Safe entry and visitor management", "محفوظ داخلہ اور مہمانوں کا انتظام"],
      blocks: [
        { t: "h", x: ["For students and staff", "طلبہ اور عملے کے لیے"] },
        { t: "ul", items: [
          ["Carry or display identification as college policy requires.", "کالج کی پالیسی کے مطابق شناخت ساتھ رکھیں یا آویزاں کریں۔"],
          ["Do not lend access cards, keys or identification.", "رسائی کارڈ، چابیاں یا شناخت کسی کو نہ دیں۔"],
          ["Report lost cards or keys promptly.", "گم شدہ کارڈ یا چابیوں کی فوراً اطلاع دیں۔"],
          ["Do not bypass a locked entrance, or let someone follow you into a restricted area without verification.", "بند دروازے سے بچ کر نہ نکلیں، اور تصدیق کے بغیر کسی کو اپنے پیچھے محدود جگہ میں نہ آنے دیں۔"],
          ["Direct visitors to the reception or security point.", "مہمانوں کو استقبالیہ یا سکیورٹی کے مقام کی طرف بھیجیں۔"],
          ["Do not share access codes or sensitive security information.", "رسائی کے کوڈ یا سکیورٹی کی حساس معلومات کسی کو نہ بتائیں۔"]
        ] },
        { t: "h", x: ["For reception and security staff", "استقبالیہ اور سکیورٹی عملے کے لیے"] },
        { t: "ol", items: [
          ["Greet the visitor respectfully.", "مہمان کا احترام سے استقبال کریں۔"],
          ["Confirm their identity and purpose using the approved procedure.", "منظور شدہ طریقے سے ان کی شناخت اور مقصد کی تصدیق کریں۔"],
          ["Verify the visit with the host through an established contact.", "طے شدہ رابطے کے ذریعے میزبان سے آمد کی تصدیق کریں۔"],
          ["Record only the details that are needed.", "صرف ضروری تفصیلات درج کریں۔"],
          ["Issue a visitor pass where required.", "جہاں ضروری ہو مہمان کا پاس جاری کریں۔"],
          ["Explain permitted areas, escort arrangements and signing out.", "اجازت والی جگہیں، ساتھ جانے کے انتظامات اور واپسی کا اندراج سمجھائیں۔"]
        ] },
        { t: "key", x: ["A polite reply: “Please come through reception so your visit can be verified. I will help you contact the department.”",
                        "ایک شائستہ جواب: ”براہِ کرم استقبالیہ سے آئیں تاکہ آپ کی آمد کی تصدیق ہو سکے۔ میں شعبے سے رابطہ کرنے میں آپ کی مدد کروں گی۔“"] },
        { t: "note", x: ["Visitors and contractors must also be accounted for in an emergency. Visitor records help, but hosts and wardens must check where people actually are.",
                         "ہنگامی حالت میں مہمانوں اور ٹھیکیداروں کی بھی گنتی ہونی چاہیے۔ مہمانوں کا ریکارڈ مدد دیتا ہے، مگر میزبانوں اور وارڈنوں کو دیکھنا چاہیے کہ لوگ حقیقت میں کہاں ہیں۔"] }
      ]
    },
    {
      id: "fair",
      title: ["Recognize concerns fairly", "خدشات کو انصاف سے پہچانیں"],
      blocks: [
        { t: "key", x: ["Report behaviour or conditions, not someone’s identity or appearance.", "رویے یا حالات کی اطلاع دیں، کسی کی شناخت یا ظاہری شکل کی نہیں۔"] },
        { t: "h", x: ["Examples of concerns", "خدشات کی مثالیں"] },
        { t: "ul", items: [
          ["Trying to force or bypass a controlled entrance.", "محفوظ دروازے کو زبردستی کھولنے یا اس سے بچ کر نکلنے کی کوشش۔"],
          ["Threatening, following or intimidating another person.", "کسی کو دھمکانا، اس کا پیچھا کرنا یا اسے ڈرانا۔"],
          ["Tampering with locks, alarms or other safety equipment.", "تالوں، الارم یا دیگر حفاظتی آلات سے چھیڑ چھاڑ۔"],
          ["Trying to enter a restricted laboratory, store or server room without authorization.", "اجازت کے بغیر محدود لیبارٹری، اسٹور یا سرور روم میں داخل ہونے کی کوشش۔"],
          ["A damaged boundary wall, broken lock or unlit entrance.", "ٹوٹی ہوئی چار دیواری، ٹوٹا تالا یا بغیر روشنی کا دروازہ۔"],
          ["An unattended item whose features or circumstances suggest a possible hazard.", "لاوارث چیز جس کی حالت یا حالات کسی ممکنہ خطرے کی طرف اشارہ کریں۔"]
        ] },
        { t: "warn", x: ["A person’s ethnicity, religion, language, disability or clothing is not evidence of wrongdoing.",
                         "کسی کی نسل، مذہب، زبان، معذوری یا لباس کسی غلط کام کا ثبوت نہیں۔"] },
        { t: "p", x: ["Describe what you observed, for example: “At 10:20 a.m., a person tried several locked laboratory doors and continued after being directed to reception.” Avoid unsupported labels such as “criminal” or “dangerous person”.",
                      "جو دیکھا وہ بیان کریں، مثلاً: ”صبح 10:20 پر ایک شخص نے لیبارٹری کے کئی بند دروازے کھولنے کی کوشش کی اور استقبالیہ بھیجے جانے کے بعد بھی ایسا کرتا رہا۔“ ”مجرم“ یا ”خطرناک شخص“ جیسے بے بنیاد القاب سے گریز کریں۔"] }
      ]
    },
    {
      id: "report",
      title: ["Report clearly and choose the right urgency", "واضح اطلاع دیں اور درست فوری پن کا انتخاب کریں"],
      blocks: [
        { t: "table",
          head: [["Situation", "صورتِ حال"], ["What to do", "کیا کریں"]],
          rows: [
            [["Immediate threat, violence, serious injury or a suspected dangerous item", "فوری خطرہ، تشدد، شدید چوٹ یا مشتبہ خطرناک چیز"], ["Move to safety and contact security or the emergency services immediately.", "محفوظ جگہ جائیں اور فوراً سکیورٹی یا ہنگامی خدمات سے رابطہ کریں۔"]],
            [["Broken lock, poor lighting or an access-control fault", "ٹوٹا تالا، کم روشنی یا داخلے کے نظام کی خرابی"], ["Report promptly through the security or maintenance channel.", "سکیورٹی یا مرمت کے ذریعے فوراً اطلاع دیں۔"]],
            [["Lost ID card or key", "گم شدہ شناختی کارڈ یا چابی"], ["Tell the responsible office immediately so that access can be reviewed.", "فوراً متعلقہ دفتر کو بتائیں تاکہ رسائی کا جائزہ لیا جا سکے۔"]],
            [["Harassment, intimidation or repeated unwanted following", "ہراسانی، ڈرانا یا بار بار ناپسندیدہ پیچھا"], ["Get to safety and use the security and confidential reporting channels.", "محفوظ جگہ پہنچیں اور سکیورٹی اور رازدارانہ اطلاع کے ذرائع استعمال کریں۔"]],
            [["Lost property with nothing suspicious", "گم شدہ سامان جس میں کچھ مشکوک نہ ہو"], ["Use the lost-property procedure.", "گم شدہ سامان کے طریقۂ کار پر عمل کریں۔"]]
          ] },
        { t: "h", x: ["A useful report includes:", "ایک مفید اطلاع میں شامل ہوتا ہے:"] },
        { t: "ul", items: [
          ["Your name and a number to call you back.", "آپ کا نام اور واپس رابطے کا نمبر۔"],
          ["The exact location.", "درست جگہ۔"],
          ["What is happening or what you observed, and when.", "کیا ہو رہا ہے یا آپ نے کیا دیکھا، اور کب۔"],
          ["Any injuries or immediate dangers.", "کوئی چوٹ یا فوری خطرہ۔"],
          ["Direction of movement, if relevant and safely seen.", "حرکت کی سمت، اگر متعلقہ ہو اور محفوظ طریقے سے دیکھی گئی ہو۔"],
          ["Actions already taken.", "جو اقدامات پہلے ہی کیے جا چکے ہیں۔"]
        ] },
        { t: "warn", x: ["Do not chase anyone, investigate a dangerous situation, or go closer to take a photograph. In immediate danger, do not wait for a form or for permission.",
                         "کسی کا پیچھا نہ کریں، خطرناک صورتِ حال کی خود تحقیق نہ کریں اور تصویر لینے کے لیے قریب نہ جائیں۔ فوری خطرے میں کسی فارم یا اجازت کا انتظار نہ کریں۔"] },
        { t: "contacts", title: ["Who to tell at KGMC", "کے جی ایم سی میں کسے بتائیں"], items: [
          ["Security concerns: the security staff at the main gate.", "سکیورٹی کے خدشات: مرکزی گیٹ پر سکیورٹی عملہ۔"],
          ["Broken locks, lights or boundary walls: the Facility In-charge.", "ٹوٹے تالے، روشنیاں یا چار دیواری: فیسیلٹی انچارج۔"],
          ["Police emergency: 15. Rescue, ambulance and fire: 1122.", "پولیس ایمرجنسی: 15۔ ریسکیو، ایمبولینس اور آگ: 1122۔"]
        ] }
      ]
    },
    {
      id: "threat",
      title: ["Threatening behaviour and personal safety", "دھمکی آمیز رویہ اور ذاتی حفاظت"],
      blocks: [
        { t: "h", x: ["If someone becomes aggressive", "اگر کوئی جارحانہ ہو جائے"] },
        { t: "ul", items: [
          ["Keep a safe distance and a clear way out.", "محفوظ فاصلہ رکھیں اور نکلنے کا راستہ کھلا رکھیں۔"],
          ["Speak calmly and briefly if it is safe to do so.", "اگر محفوظ ہو تو پرسکون اور مختصر بات کریں۔"],
          ["Do not argue, insult, threaten or make sudden physical contact.", "بحث نہ کریں، توہین یا دھمکی نہ دیں اور اچانک ہاتھ نہ لگائیں۔"],
          ["Do not surround the person or block their exit.", "اس شخص کو نہ گھیریں اور اس کا راستہ نہ روکیں۔"],
          ["Withdraw if the situation gets worse.", "صورتِ حال بگڑے تو پیچھے ہٹ جائیں۔"],
          ["Call trained security staff.", "تربیت یافتہ سکیورٹی عملے کو بلائیں۔"],
          ["Help nearby people move away when this can be done safely.", "جب محفوظ ہو تو قریبی لوگوں کو دور جانے میں مدد دیں۔"]
        ] },
        { t: "warn", x: ["Do not try to restrain, search or disarm anyone.", "کسی کو قابو کرنے، تلاشی لینے یا غیر مسلح کرنے کی کوشش نہ کریں۔"] },
        { t: "h", x: ["If a person reports harassment or feels unsafe", "اگر کوئی ہراسانی کی اطلاع دے یا خود کو غیر محفوظ محسوس کرے"] },
        { t: "ul", items: [
          ["Listen respectfully.", "احترام سے سنیں۔"],
          ["Help them reach a safe place.", "انہیں محفوظ جگہ پہنچنے میں مدد دیں۔"],
          ["Ask whether urgent medical or security help is needed.", "پوچھیں کہ کیا فوری طبی یا سکیورٹی مدد درکار ہے۔"],
          ["Explain the confidential reporting options.", "رازدارانہ اطلاع کے طریقے بتائیں۔"],
          ["Do not pressure them to confront the other person.", "ان پر دوسرے شخص کا سامنا کرنے کے لیے دباؤ نہ ڈالیں۔"],
          ["Share details only with those responsible for helping and investigating.", "تفصیلات صرف مدد اور تحقیق کے ذمہ دار افراد کو بتائیں۔"]
        ] }
      ]
    },
    {
      id: "items",
      title: ["Unattended and suspicious items", "لاوارث اور مشکوک اشیاء"],
      blocks: [
        { t: "p", x: ["An unattended bag is not automatically dangerous. But take care with an item that is linked to a threat, deliberately hidden, or has unusual hazardous features.",
                      "لاوارث بیگ خود بخود خطرناک نہیں ہوتا۔ لیکن ایسی چیز سے محتاط رہیں جو کسی دھمکی سے جڑی ہو، جان بوجھ کر چھپائی گئی ہو یا جس میں غیر معمولی خطرناک علامات ہوں۔"] },
        { t: "h", x: ["If you suspect danger", "اگر خطرے کا شبہ ہو"] },
        { t: "ol", items: [
          ["Do not touch, open, move or inspect the item.", "اس چیز کو نہ چھوئیں، نہ کھولیں، نہ ہلائیں اور نہ جانچیں۔"],
          ["Move away and alert others without going near it.", "دور ہو جائیں اور اس کے قریب گئے بغیر دوسروں کو خبردار کریں۔"],
          ["Contact security or the emergency services from a safe place away from the item.", "اس چیز سے دور محفوظ جگہ سے سکیورٹی یا ہنگامی خدمات سے رابطہ کریں۔"],
          ["Follow instructions about leaving the area.", "جگہ خالی کرنے کی ہدایات پر عمل کریں۔"],
          ["Do not return until you are told it is safe.", "جب تک محفوظ نہ بتایا جائے واپس نہ آئیں۔"]
        ] },
        { t: "warn", x: ["Do not gather nearby to take photographs.", "تصویریں لینے کے لیے قریب جمع نہ ہوں۔"] },
        { t: "h", x: ["A threatening call or message", "دھمکی آمیز کال یا پیغام"] },
        { t: "ul", items: [
          ["Take it seriously and tell security promptly.", "اسے سنجیدگی سے لیں اور فوراً سکیورٹی کو بتائیں۔"],
          ["Keep the message and note the time and exact wording where possible.", "پیغام محفوظ رکھیں اور جہاں ممکن ہو وقت اور عین الفاظ نوٹ کریں۔"],
          ["Do not circulate it in student or staff groups.", "اسے طلبہ یا عملے کے گروپوں میں نہ پھیلائیں۔"],
          ["Follow the college’s threat-response procedure.", "کالج کے دھمکی سے نمٹنے کے طریقۂ کار پر عمل کریں۔"]
        ] }
      ]
    },
    {
      id: "emergency",
      title: ["Supporting an emergency response", "ہنگامی کارروائی میں مدد"],
      blocks: [
        { t: "p", x: ["Different emergencies need different protective actions.", "مختلف ہنگامی حالات میں مختلف حفاظتی اقدامات درکار ہوتے ہیں۔"] },
        { t: "table",
          head: [["Instruction", "ہدایت"], ["Meaning", "مطلب"]],
          rows: [
            [["Evacuate", "انخلا کریں"], ["Leave by the safe route you are told to use and go to the designated safe location.", "بتائے گئے محفوظ راستے سے نکلیں اور مقررہ محفوظ جگہ جائیں۔"]],
            [["Shelter indoors", "اندر پناہ لیں"], ["Stay or move inside, because going outside may put you in danger.", "اندر رہیں یا اندر چلے جائیں، کیونکہ باہر جانا خطرناک ہو سکتا ہے۔"]],
            [["Security lockdown", "سکیورٹی لاک ڈاؤن"], ["Follow the college’s instructions to limit movement and secure occupied areas during a security threat.", "سکیورٹی کے خطرے کے دوران نقل و حرکت محدود کرنے اور موجود جگہوں کو محفوظ بنانے کی کالج کی ہدایات پر عمل کریں۔"]]
          ] },
        { t: "img", src: "images/m9-general-assembly-area-kgmc.jpg",
          alt: ["The paved general assembly area in front of the college building", "کالج کی عمارت کے سامنے پختہ عمومی اجتماع گاہ"],
          cap: ["The general assembly area, KGMC. In a security incident the safe place may be different: follow the instructions given.", "کے جی ایم سی کی عمومی اجتماع گاہ۔ سکیورٹی کے واقعے میں محفوظ جگہ مختلف ہو سکتی ہے: دی گئی ہدایات پر عمل کریں۔"] },
        { t: "warn", x: ["A fire assembly area may not be safe during a security incident. Follow verified instructions and do not move toward the reported danger.",
                         "سکیورٹی کے واقعے میں آگ کی اجتماع گاہ محفوظ نہیں بھی ہو سکتی۔ تصدیق شدہ ہدایات پر عمل کریں اور بتائے گئے خطرے کی طرف نہ جائیں۔"] },
        { t: "h", x: ["Everyone should:", "ہر ایک کو چاہیے کہ:"] },
        { t: "ul", items: [
          ["Follow official announcements.", "سرکاری اعلانات پر عمل کرے۔"],
          ["Keep emergency access routes clear.", "ہنگامی رسائی کے راستے صاف رکھے۔"],
          ["Help visitors who do not know the campus.", "ان مہمانوں کی مدد کرے جو کیمپس سے واقف نہیں۔"],
          ["Follow the agreed arrangements for helping people with disabilities.", "معذور افراد کی مدد کے طے شدہ انتظامات پر عمل کرے۔"],
          ["Report missing people and where they were last seen.", "لاپتہ افراد اور ان کے آخری بار دیکھے جانے کی جگہ کی اطلاع دے۔"],
          ["Not go back to collect belongings.", "سامان لینے کے لیے واپس نہ جائے۔"]
        ] },
        { t: "note", x: ["“Shelter” or “lockdown” is never a reason to stay in immediate fire or smoke danger. Move to safety by the safe route available.",
                         "”پناہ“ یا ”لاک ڈاؤن“ کبھی آگ یا دھوئیں کے فوری خطرے میں رکے رہنے کی وجہ نہیں۔ دستیاب محفوظ راستے سے محفوظ جگہ جائیں۔"] }
      ]
    },
    {
      id: "duties",
      title: ["Extra duties for security and reception staff", "سکیورٹی اور استقبالیہ عملے کی اضافی ذمہ داریاں"],
      blocks: [
        { t: "note", x: ["These duties need practical training and an approved local procedure.", "ان ذمہ داریوں کے لیے عملی تربیت اور منظور شدہ مقامی طریقۂ کار ضروری ہے۔"] },
        { t: "h", x: ["During an emergency", "ہنگامی حالت کے دوران"] },
        { t: "ul", items: [
          ["Start the reporting and escalation chain.", "اطلاع اور آگے پہنچانے کا سلسلہ شروع کریں۔"],
          ["Give responders the correct building and access information.", "امدادی عملے کو درست عمارت اور رسائی کی معلومات دیں۔"],
          ["Open the emergency access route when safe, and send someone to meet responders.", "جب محفوظ ہو تو ہنگامی رسائی کا راستہ کھولیں اور امدادی عملے سے ملنے کے لیے کسی کو بھیجیں۔"],
          ["Keep crowds and vehicles away from the response area.", "ہجوم اور گاڑیوں کو کارروائی کی جگہ سے دور رکھیں۔"],
          ["Give visitor information to the person leading the headcount.", "گنتی کی قیادت کرنے والے کو مہمانوں کی معلومات دیں۔"],
          ["Pass on known hazards without entering unsafe areas.", "غیر محفوظ جگہوں میں داخل ہوئے بغیر معلوم خطرات کی اطلاع دیں۔"],
          ["Give first aid only within your training and when it is safe.", "ابتدائی امداد صرف اپنی تربیت کے مطابق اور محفوظ ہونے پر دیں۔"],
          ["Keep relevant records and evidence.", "متعلقہ ریکارڈ اور شواہد محفوظ رکھیں۔"]
        ] },
        { t: "warn", x: ["Information about missing people goes to the incident lead. Untrained staff must not go back in to search.",
                         "لاپتہ افراد کی معلومات واقعے کے سربراہ کو دی جاتی ہیں۔ غیر تربیت یافتہ عملہ تلاش کے لیے واپس اندر نہ جائے۔"] },
        { t: "h", x: ["Routine checks", "معمول کی جانچ"] },
        { t: "ul", items: [
          ["Understand your assigned duties and shift handover.", "اپنی مقررہ ذمہ داریاں اور شفٹ کی حوالگی سمجھیں۔"],
          ["Check communication equipment as the procedure says.", "طریقۂ کار کے مطابق رابطے کے آلات کی جانچ کریں۔"],
          ["Report faults in doors, locks, lighting and boundary protection.", "دروازوں، تالوں، روشنی اور چار دیواری کی خرابیوں کی اطلاع دیں۔"],
          ["Keep duty and incident records factual.", "ڈیوٹی اور واقعات کے ریکارڈ حقائق پر مبنی رکھیں۔"],
          ["Escalate concerns that are not resolved.", "جو خدشات حل نہ ہوں انہیں آگے پہنچائیں۔"],
          ["Apply entry rules consistently and respectfully.", "داخلے کے اصول یکساں اور احترام کے ساتھ نافذ کریں۔"]
        ] }
      ]
    },
    {
      id: "privacy",
      title: ["Privacy and responsible communication", "رازداری اور ذمہ دارانہ رابطہ"],
      blocks: [
        { t: "ul", items: [
          ["Do not post photographs of injured people or incidents online.", "زخمیوں یا واقعات کی تصاویر آن لائن پوسٹ نہ کریں۔"],
          ["Do not share visitor registers, access codes or CCTV footage in informal messaging groups.", "مہمانوں کے رجسٹر، رسائی کے کوڈ یا سی سی ٹی وی فوٹیج غیر رسمی میسجنگ گروپوں میں شیئر نہ کریں۔"],
          ["Keep relevant messages and records, and pass them on through authorized channels.", "متعلقہ پیغامات اور ریکارڈ محفوظ رکھیں اور مجاز ذرائع سے آگے پہنچائیں۔"],
          ["Separate what you saw from what you assume.", "جو دیکھا اسے اپنے اندازوں سے الگ رکھیں۔"],
          ["Follow official updates; do not forward rumours.", "سرکاری اطلاعات پر عمل کریں؛ افواہیں آگے نہ بھیجیں۔"],
          ["After an incident, take part in the review so that it does not happen again.", "واقعے کے بعد جائزے میں حصہ لیں تاکہ وہ دوبارہ نہ ہو۔"]
        ] }
      ]
    },
    {
      id: "practice",
      title: ["Practice: three short scenarios", "مشق: تین مختصر صورتِ حال"],
      blocks: [
        { t: "p", x: ["Read each situation and decide what you would do. Then open the answer to check.", "ہر صورتِ حال پڑھیں اور سوچیں کہ آپ کیا کریں گے۔ پھر جواب کھول کر دیکھیں۔"] },
        { t: "scenario",
          title: ["Scenario A: An unverified delivery", "صورتِ حال الف: بغیر تصدیق کے ترسیل"],
          situation: ["A delivery person asks a student to open a side gate.", "سامان پہنچانے والا ایک شخص طالبہ سے بغلی گیٹ کھولنے کو کہتا ہے۔"],
          answer: ["Direct them to the reception or security point. The delivery is verified through the responsible department.", "اسے استقبالیہ یا سکیورٹی کے مقام کی طرف بھیجیں۔ ترسیل کی تصدیق متعلقہ شعبے کے ذریعے ہوتی ہے۔"] },
        { t: "scenario",
          title: ["Scenario B: Aggression at reception", "صورتِ حال ب: استقبالیہ پر جارحیت"],
          situation: ["A visitor raises their voice, threatens staff and blocks the counter area.", "ایک مہمان اونچی آواز میں بولتا ہے، عملے کو دھمکاتا ہے اور کاؤنٹر کی جگہ روک لیتا ہے۔"],
          answer: ["Keep your distance, avoid confrontation, move to safety and call security. Do not attempt physical restraint.", "فاصلہ رکھیں، تصادم سے بچیں، محفوظ جگہ جائیں اور سکیورٹی کو بلائیں۔ جسمانی طور پر قابو کرنے کی کوشش نہ کریں۔"] },
        { t: "scenario",
          title: ["Scenario C: An ambulance is delayed", "صورتِ حال ج: ایمبولینس کو تاخیر"],
          situation: ["There is a medical emergency, but parked vehicles are blocking the emergency access route.", "طبی ایمرجنسی ہے، مگر کھڑی گاڑیوں نے ہنگامی رسائی کا راستہ روک رکھا ہے۔"],
          answer: ["Tell security immediately, send someone to guide the responders and clear the way safely. Record the obstruction afterwards so that it is corrected.", "فوراً سکیورٹی کو بتائیں، امدادی عملے کی رہنمائی کے لیے کسی کو بھیجیں اور محفوظ طریقے سے راستہ صاف کریں۔ بعد میں رکاوٹ کا اندراج کریں تاکہ اسے درست کیا جائے۔"] }
      ]
    },
    {
      id: "apply",
      type: "checklist",
      title: ["Apply: my campus security checklist", "عمل: میری کیمپس سکیورٹی کی فہرست"],
      blocks: [
        { t: "p", x: ["Tick each item when it is true for you. Save the verified contact numbers and report any access or safety concern you see. Do not test security by trying to enter without authorization.",
                      "جب کوئی بات آپ پر صادق آئے تو اس پر نشان لگا دیں۔ تصدیق شدہ رابطہ نمبر محفوظ کریں اور رسائی یا حفاظت کا جو مسئلہ نظر آئے اس کی اطلاع دیں۔ بغیر اجازت داخل ہونے کی کوشش کر کے سکیورٹی کو نہ آزمائیں۔"] }
      ],
      items: [
        ["I know the designated visitor entrance.", "مجھے مہمانوں کا مقررہ دروازہ معلوم ہے۔"],
        ["I know how to report a lost access card or key.", "مجھے معلوم ہے کہ گم شدہ رسائی کارڈ یا چابی کی اطلاع کیسے دینی ہے۔"],
        ["I have saved the security and emergency contacts.", "میں نے سکیورٹی اور ہنگامی رابطے محفوظ کر لیے ہیں۔"],
        ["I know where to report harassment or intimidation.", "مجھے معلوم ہے کہ ہراسانی یا ڈرانے دھمکانے کی اطلاع کہاں دینی ہے۔"],
        ["I can describe my building and location clearly.", "میں اپنی عمارت اور جگہ واضح طور پر بتا سکتا/سکتی ہوں۔"],
        ["I know the official emergency communication channel.", "مجھے ہنگامی رابطے کا سرکاری ذریعہ معلوم ہے۔"],
        ["I understand that visitors may need help during emergencies.", "میں سمجھتا/سمجھتی ہوں کہ ہنگامی حالت میں مہمانوں کو مدد کی ضرورت پڑ سکتی ہے۔"],
        ["I know how to report a damaged lock, light or boundary structure.", "مجھے معلوم ہے کہ خراب تالے، روشنی یا چار دیواری کی اطلاع کیسے دینی ہے۔"]
      ]
    }
  ],
  /* answer: the id of the correct option. The same answer key must also be in the Apps Script (MODULES.m9.key). */
  quiz: [
    { q: ["Someone asks to borrow your access card. You should:", "کوئی آپ کا رسائی کارڈ ادھار مانگتا ہے۔ آپ کو چاہیے کہ:"],
      options: { a: ["Lend it for a short time", "تھوڑی دیر کے لیے دے دیں"], b: ["Decline and direct them to the approved access process", "انکار کریں اور انہیں داخلے کے منظور شدہ طریقے کی طرف بھیجیں"], c: ["Give them your access code instead", "اس کے بجائے اپنا رسائی کوڈ دے دیں"] },
      answer: "b", feedback: ["Access cards and codes must not be shared.", "رسائی کارڈ اور کوڈ کسی کو نہیں دینے چاہییں۔"] },
    { q: ["A security concern should be based mainly on:", "سکیورٹی کا خدشہ بنیادی طور پر کس پر مبنی ہونا چاہیے؟"],
      options: { a: ["Observable behaviour and circumstances", "نظر آنے والا رویہ اور حالات"], b: ["Religion or ethnicity", "مذہب یا نسل"], c: ["Unfamiliar clothing", "غیر مانوس لباس"] },
      answer: "a", feedback: ["Report facts fairly.", "حقائق کی انصاف سے اطلاع دیں۔"] },
    { q: ["A visitor arrives without a verified appointment. Reception should:", "ایک مہمان تصدیق شدہ ملاقات کے بغیر آتا ہے۔ استقبالیہ کو چاہیے کہ:"],
      options: { a: ["Allow unrestricted entry", "بلا روک ٹوک داخلے کی اجازت دے"], b: ["Refuse every visitor automatically", "ہر مہمان کو خود بخود منع کر دے"], c: ["Verify the visit through the approved procedure", "منظور شدہ طریقے سے آمد کی تصدیق کرے"] },
      answer: "c", feedback: ["Verification supports safe, respectful entry.", "تصدیق محفوظ اور باعزت داخلے میں مدد دیتی ہے۔"] },
    { q: ["You find an unattended item that may be dangerous. You should:", "آپ کو ایک لاوارث چیز ملتی ہے جو خطرناک ہو سکتی ہے۔ آپ کو چاہیے کہ:"],
      options: { a: ["Open it", "اسے کھولیں"], b: ["Keep clear and report from a safe place", "دور رہیں اور محفوظ جگہ سے اطلاع دیں"], c: ["Move it outside", "اسے باہر لے جائیں"] },
      answer: "b", feedback: ["Do not touch or investigate suspicious items.", "مشکوک اشیاء کو نہ چھوئیں اور نہ جانچیں۔"] },
    { q: ["A person becomes threatening. An untrained staff member should:", "ایک شخص دھمکی آمیز ہو جاتا ہے۔ غیر تربیت یافتہ عملے کے رکن کو چاہیے کہ:"],
      options: { a: ["Withdraw safely and call trained help", "محفوظ طریقے سے پیچھے ہٹے اور تربیت یافتہ مدد بلائے"], b: ["Physically restrain them", "اسے جسمانی طور پر قابو کرے"], c: ["Block their exit", "اس کا راستہ روکے"] },
      answer: "a", feedback: ["Personal safety comes first.", "ذاتی حفاظت سب سے پہلے ہے۔"] },
    { q: ["During an emergency, visitor records are useful for:", "ہنگامی حالت میں مہمانوں کا ریکارڈ کس کام آتا ہے؟"],
      options: { a: ["Posting names publicly", "نام عوامی طور پر شائع کرنا"], b: ["Replacing all headcounts", "تمام گنتی کی جگہ لینا"], c: ["Supporting the headcount, alongside information from hosts and wardens", "میزبانوں اور وارڈنوں کی معلومات کے ساتھ گنتی میں مدد دینا"] },
      answer: "c", feedback: ["Records support verification but do not replace it.", "ریکارڈ تصدیق میں مدد دیتے ہیں مگر اس کا متبادل نہیں۔"] },
    { q: ["During a security incident, you should go to:", "سکیورٹی کے واقعے کے دوران آپ کو کہاں جانا چاہیے؟"],
      options: { a: ["The usual fire assembly area, whatever the threat", "خطرہ کچھ بھی ہو، آگ کی معمول کی اجتماع گاہ"], b: ["The safe place given in the incident instructions", "واقعے کی ہدایات میں بتائی گئی محفوظ جگہ"], c: ["The incident scene, to watch", "واقعے کی جگہ، دیکھنے کے لیے"] },
      answer: "b", feedback: ["The safe place depends on the incident.", "محفوظ جگہ واقعے کی نوعیت پر منحصر ہے۔"] },
    { q: ["CCTV footage of an incident should be:", "کسی واقعے کی سی سی ٹی وی فوٹیج کو:"],
      options: { a: ["Kept and shared only through authorized channels", "محفوظ رکھا جائے اور صرف مجاز ذرائع سے شیئر کیا جائے"], b: ["Posted in a staff messaging group", "عملے کے میسجنگ گروپ میں پوسٹ کیا جائے"], c: ["Deleted immediately", "فوراً حذف کر دیا جائے"] },
      answer: "a", feedback: ["Protect evidence and privacy.", "شواہد اور رازداری کی حفاظت کریں۔"] }
  ]
};
