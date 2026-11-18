/* Module 7: Laboratory, Chemical and Biological Safety.
   Every piece of text is a pair: [English, Urdu].
   URDU IS A DRAFT TRANSLATION - to be reviewed and corrected by Prof. Amin before launch.
   KGMC's laboratory contacts, eyewash and spill-kit locations were left blank in the source document;
   this module points learners to the laboratory supervisor or Lab In-charge until those are confirmed.
   Block types are the same as in module1.js. */
window.KGMC_CONTENT = window.KGMC_CONTENT || {};
window.KGMC_CONTENT.m7 = {
  version: "1.0",
  title: ["Laboratory, chemical and biological safety", "لیبارٹری، کیمیائی اور حیاتیاتی حفاظت"],
  sections: [
    {
      id: "start",
      title: ["Start: An unidentified spill", "آغاز: ایک نامعلوم مائع کا گرنا"],
      blocks: [
        { t: "p", x: ["A bottle falls from a laboratory shelf. Liquid spreads across the floor, and its label cannot be read. A cleaner approaches with a mop while a student suggests adding bleach.",
                      "لیبارٹری کی شیلف سے ایک بوتل گرتی ہے۔ مائع فرش پر پھیل جاتا ہے اور اس کا لیبل پڑھا نہیں جا سکتا۔ صفائی والا پوچا لے کر آتا ہے جبکہ ایک طالبہ بلیچ ڈالنے کا مشورہ دیتی ہے۔"] },
        { t: "think", x: ["Think: Can either person safely identify the hazard? Could adding another chemical make things worse? Who should take control?",
                          "سوچیں: کیا دونوں میں سے کوئی خطرے کو محفوظ طریقے سے پہچان سکتا ہے؟ کیا کوئی اور کیمیکل ڈالنے سے صورتِ حال بگڑ سکتی ہے؟ ذمہ داری کسے سنبھالنی چاہیے؟"] },
        { t: "key", x: ["Know the hazard. Follow the procedure. Use the correct protection. Stop and report when unsure.",
                        "خطرے کو جانیں۔ طریقۂ کار پر عمل کریں۔ درست حفاظتی سامان استعمال کریں۔ یقین نہ ہو تو رک جائیں اور اطلاع دیں۔"] },
        { t: "note", x: ["This module gives basic awareness. Working alone in a laboratory and cleaning up spills need task-specific training and authorization.",
                         "یہ ماڈیول بنیادی آگاہی دیتا ہے۔ لیبارٹری میں اکیلے کام کرنے اور گرے ہوئے مواد کی صفائی کے لیے مخصوص تربیت اور اجازت ضروری ہے۔"] }
      ]
    },
    {
      id: "objectives",
      title: ["What you will learn", "آپ کیا سیکھیں گے"],
      blocks: [
        { t: "p", x: ["After completing this module, you should be able to:", "یہ ماڈیول مکمل کرنے کے بعد آپ اس قابل ہوں گے کہ:"] },
        { t: "ol", items: [
          ["Recognize common laboratory, chemical and biological hazards.", "لیبارٹری کے عام کیمیائی اور حیاتیاتی خطرات کو پہچان سکیں۔"],
          ["Find and use essential information on labels and safety data sheets.", "لیبل اور سیفٹی ڈیٹا شیٹ پر موجود ضروری معلومات تلاش اور استعمال کر سکیں۔"],
          ["Explain safe storage, handling and basic laboratory practices.", "محفوظ ذخیرہ، استعمال اور لیبارٹری کے بنیادی اصول بیان کر سکیں۔"],
          ["Tell apart the purposes of a chemical fume hood and a biological safety cabinet.", "کیمیکل فیوم ہڈ اور بائیولوجیکل سیفٹی کیبنٹ کے مقاصد میں فرق کر سکیں۔"],
          ["Describe safe first actions after a spill or exposure.", "مواد گرنے یا اس کے رابطے میں آنے کے بعد ابتدائی محفوظ اقدامات بیان کر سکیں۔"],
          ["Identify when trained help is needed.", "پہچان سکیں کہ تربیت یافتہ مدد کب ضروری ہے۔"]
        ] }
      ]
    },
    {
      id: "hazards",
      title: ["Recognize the hazards", "خطرات کو پہچانیں"],
      blocks: [
        { t: "table",
          head: [["Hazard", "خطرہ"], ["College examples", "کالج کی مثالیں"], ["Possible harm", "ممکنہ نقصان"]],
          rows: [
            [["Chemical", "کیمیائی"], ["Formalin, acids, solvents and disinfectants", "فارملین، تیزاب، محلل اور جراثیم کش"], ["Burns, poisoning, irritation or harmful vapours", "جلنا، زہر، جلن یا نقصان دہ بخارات"]],
            [["Biological", "حیاتیاتی"], ["Blood, specimens, cultures and human tissue", "خون، نمونے، کلچر اور انسانی بافتیں"], ["Infection through cuts, splashes or breathing in", "کٹ، چھینٹوں یا سانس کے ذریعے انفیکشن"]],
            [["Sharps", "نوکیلی اشیاء"], ["Needles, blades and broken glass", "سوئیاں، بلیڈ اور ٹوٹا شیشہ"], ["Cuts and puncture injuries", "کٹ اور چبھنے کی چوٹیں"]],
            [["Equipment and physical hazards", "آلات اور طبعی خطرات"], ["Centrifuges, hot equipment, electrical devices and gas cylinders", "سینٹری فیوج، گرم آلات، برقی آلات اور گیس سلنڈر"], ["Mechanical injury, burns, electric shock or pressure injury", "مشینی چوٹ، جلنا، بجلی کا جھٹکا یا دباؤ سے چوٹ"]]
          ] },
        { t: "p", x: ["Before a task begins, the department should assess what could go wrong, who could be harmed and which controls are needed, and review this when procedures, equipment or materials change.",
                      "کوئی کام شروع ہونے سے پہلے شعبے کو جائزہ لینا چاہیے کہ کیا غلط ہو سکتا ہے، کسے نقصان پہنچ سکتا ہے اور کون سی احتیاطیں درکار ہیں، اور طریقۂ کار، آلات یا مواد بدلنے پر اس کا دوبارہ جائزہ لینا چاہیے۔"] },
        { t: "key", x: ["Your responsibility: do not start an unfamiliar task without instructions and appropriate supervision.",
                        "آپ کی ذمہ داری: ہدایات اور مناسب نگرانی کے بغیر کوئی انجان کام شروع نہ کریں۔"] },
        { t: "img", src: "images/m7-practical-lab-kgmc.jpg",
          alt: ["A practical laboratory at KGMC with microscopes on long benches and rows of stools", "کے جی ایم سی کی ایک عملی لیبارٹری جس میں لمبی میزوں پر خوردبینیں اور اسٹولوں کی قطاریں ہیں"],
          cap: ["A practical laboratory at KGMC. Keep benches orderly and routes clear.", "کے جی ایم سی کی ایک عملی لیبارٹری۔ میزیں ترتیب سے اور راستے صاف رکھیں۔"] }
      ]
    },
    {
      id: "labels",
      title: ["Read the label and find the safety data sheet", "لیبل پڑھیں اور سیفٹی ڈیٹا شیٹ تلاش کریں"],
      blocks: [
        { t: "h", x: ["Chemical labels", "کیمیکل کے لیبل"] },
        { t: "p", x: ["Check the chemical’s identity, its concentration where relevant, the hazard warnings and the handling instructions.",
                      "کیمیکل کی شناخت، جہاں متعلقہ ہو اس کا ارتکاز، خطرے کی تنبیہات اور استعمال کی ہدایات دیکھیں۔"] },
        { t: "table",
          head: [["Hazard word", "خطرے کا لفظ"], ["What it tells you", "یہ کیا بتاتا ہے"]],
          rows: [
            [["Flammable", "آتش گیر"], ["Can catch fire; keep away from ignition sources.", "آگ پکڑ سکتا ہے؛ آگ لگانے والی چیزوں سے دور رکھیں۔"]],
            [["Corrosive", "تیزابی / گلانے والا"], ["Can damage skin, eyes or materials.", "جلد، آنکھوں یا اشیاء کو نقصان پہنچا سکتا ہے۔"]],
            [["Toxic", "زہریلا"], ["Can cause serious harm through exposure.", "رابطے سے سنگین نقصان پہنچا سکتا ہے۔"]],
            [["Irritant or sensitizer", "جلن یا حساسیت پیدا کرنے والا"], ["May cause irritation or an allergic response.", "جلن یا الرجی کا ردِعمل پیدا کر سکتا ہے۔"]],
            [["Oxidizing", "آکسیڈائزنگ"], ["Can intensify fire or react dangerously with other materials.", "آگ کو تیز کر سکتا ہے یا دوسری اشیاء سے خطرناک ردِعمل کر سکتا ہے۔"]]
          ] },
        { t: "warn", x: ["Never identify a chemical by its colour, smell or bottle shape. If a label is missing or unreadable, do not use, open or smell the contents. Tell the responsible laboratory staff.",
                         "کیمیکل کو کبھی اس کے رنگ، بو یا بوتل کی شکل سے نہ پہچانیں۔ اگر لیبل غائب ہو یا پڑھا نہ جائے تو اسے استعمال نہ کریں، نہ کھولیں اور نہ سونگھیں۔ لیبارٹری کے ذمہ دار عملے کو بتائیں۔"] },
        { t: "h", x: ["Safety Data Sheet (SDS)", "سیفٹی ڈیٹا شیٹ (ایس ڈی ایس)"] },
        { t: "p", x: ["An SDS, formerly often called an MSDS, explains a chemical’s hazards and how to manage it safely. Before use, find the information on:",
                      "ایس ڈی ایس، جسے پہلے اکثر ایم ایس ڈی ایس کہا جاتا تھا، کیمیکل کے خطرات اور اسے محفوظ طریقے سے سنبھالنے کی وضاحت کرتی ہے۔ استعمال سے پہلے یہ معلومات تلاش کریں:"] },
        { t: "ul", items: [
          ["Hazards and how exposure can happen.", "خطرات اور رابطہ کیسے ہو سکتا ہے۔"],
          ["First aid.", "ابتدائی طبی امداد۔"],
          ["Accidental releases and spills.", "حادثاتی اخراج اور گرنا۔"],
          ["Safe handling and storage.", "محفوظ استعمال اور ذخیرہ۔"],
          ["Exposure controls and PPE.", "رابطے سے بچاؤ اور حفاظتی سامان۔"],
          ["Incompatible substances and disposal.", "ناموافق اشیاء اور تلفی۔"]
        ] },
        { t: "note", x: ["Know where the SDS is kept before you start work, and leave original container labels intact.",
                         "کام شروع کرنے سے پہلے جان لیں کہ ایس ڈی ایس کہاں رکھی ہے، اور ڈبوں کے اصل لیبل برقرار رکھیں۔"] }
      ]
    },
    {
      id: "storage",
      title: ["Store chemicals safely", "کیمیکل محفوظ طریقے سے ذخیرہ کریں"],
      blocks: [
        { t: "p", x: ["Temperature is only one part of safe storage.", "درجۂ حرارت محفوظ ذخیرے کا صرف ایک پہلو ہے۔"] },
        { t: "ul", items: [
          ["Store chemicals according to their SDS and compatibility.", "کیمیکل کو ان کی ایس ڈی ایس اور باہمی موافقت کے مطابق رکھیں۔"],
          ["Keep incompatible substances apart, such as acids and alkalis, or oxidizers and flammable materials.", "ناموافق اشیاء کو الگ رکھیں، جیسے تیزاب اور الکلی، یا آکسیڈائزر اور آتش گیر مواد۔"],
          ["Use suitable designated cabinets and secondary containment where required.", "جہاں ضروری ہو مناسب مقررہ الماریاں اور ثانوی حفاظتی برتن استعمال کریں۔"],
          ["Keep containers closed and correctly labelled.", "ڈبے بند اور درست لیبل کے ساتھ رکھیں۔"],
          ["Never store chemicals in food or drink bottles.", "کیمیکل کبھی کھانے یا پینے کی بوتلوں میں نہ رکھیں۔"],
          ["Do not store food in laboratory refrigerators.", "لیبارٹری کے فریج میں کھانا نہ رکھیں۔"],
          ["Keep heavy containers on suitable lower shelves.", "بھاری ڈبے مناسب نچلی شیلفوں پر رکھیں۔"],
          ["Do not use a fume hood as a general storage cupboard.", "فیوم ہڈ کو عام الماری کے طور پر استعمال نہ کریں۔"],
          ["Where flammable chemicals need refrigeration, use only a refrigerator rated for them.", "جہاں آتش گیر کیمیکل کو ٹھنڈا رکھنا ہو، صرف اسی مقصد کے لیے موزوں فریج استعمال کریں۔"],
          ["Report damaged, leaking, expired or unidentified containers.", "خراب، رِستے ہوئے، زائد المیعاد یا نامعلوم ڈبوں کی اطلاع دیں۔"]
        ] },
        { t: "warn", x: ["Alphabetical order alone is not a safe storage system. Chemicals with similar names, or in the same broad hazard group, may still be incompatible.",
                         "صرف حروفِ تہجی کی ترتیب محفوظ ذخیرے کا نظام نہیں۔ ملتے جلتے ناموں والے یا ایک ہی قسم کے خطرے والے کیمیکل بھی ناموافق ہو سکتے ہیں۔"] },
        { t: "note", x: ["Each department keeps an inventory: chemical name, concentration, quantity, location, relevant dates, hazards and SDS availability. It is updated when materials arrive, move or are disposed of.",
                         "ہر شعبہ ایک فہرست رکھتا ہے: کیمیکل کا نام، ارتکاز، مقدار، جگہ، متعلقہ تاریخیں، خطرات اور ایس ڈی ایس کی دستیابی۔ مواد آنے، منتقل ہونے یا تلف ہونے پر اسے تازہ کیا جاتا ہے۔"] }
      ]
    },
    {
      id: "rules",
      title: ["Everyday laboratory rules", "لیبارٹری کے روزمرہ اصول"],
      blocks: [
        { t: "ul", items: [
          ["Enter only areas you are authorized to enter.", "صرف انہی جگہوں میں داخل ہوں جہاں آپ کو اجازت ہے۔"],
          ["Follow the written standard operating procedure (SOP).", "تحریری معیاری طریقۂ کار (ایس او پی) پر عمل کریں۔"],
          ["Do not eat, drink, apply cosmetics or pipette by mouth.", "نہ کھائیں، نہ پئیں، نہ میک اپ کریں اور نہ منہ سے پپیٹ کریں۔"],
          ["Wear closed footwear and secure loose hair or clothing.", "بند جوتے پہنیں اور کھلے بال یا ڈھیلے کپڑے سمیٹ لیں۔"],
          ["Keep benches orderly and emergency routes clear.", "میزیں ترتیب سے اور ہنگامی راستے صاف رکھیں۔"],
          ["Use mechanical pipetting devices.", "پپیٹ کے لیے میکانکی آلات استعمال کریں۔"],
          ["Keep specimens in suitable closed, labelled containers.", "نمونے مناسب بند اور لیبل والے ڈبوں میں رکھیں۔"],
          ["Use secondary containment when moving specimens.", "نمونے منتقل کرتے وقت ثانوی حفاظتی برتن استعمال کریں۔"],
          ["Remove contaminated gloves before touching phones, keyboards or door handles.", "فون، کی بورڈ یا دروازے کے ہینڈل کو چھونے سے پہلے آلودہ دستانے اتار دیں۔"],
          ["Remove laboratory clothing before entering clean or public areas.", "صاف یا عوامی جگہوں میں جانے سے پہلے لیبارٹری کا لباس اتار دیں۔"],
          ["Clean your hands before leaving.", "جانے سے پہلے ہاتھ صاف کریں۔"],
          ["Do not work alone on tasks that the departmental risk assessment prohibits.", "وہ کام اکیلے نہ کریں جن سے شعبے کا خطرات کا جائزہ منع کرتا ہے۔"]
        ] },
        { t: "note", x: ["Biological exposure can happen through splashes, sharps injuries and fine droplets (aerosols) made during activities such as mixing or centrifuging.",
                         "حیاتیاتی رابطہ چھینٹوں، نوکیلی اشیاء کی چوٹ اور ان باریک قطروں (ایروسول) سے ہو سکتا ہے جو ملانے یا سینٹری فیوج کرنے جیسے کاموں میں بنتے ہیں۔"] }
      ]
    },
    {
      id: "protection",
      title: ["Choose the correct protection", "درست حفاظت کا انتخاب کریں"],
      blocks: [
        { t: "h", x: ["PPE must match the task", "حفاظتی سامان کام کے مطابق ہونا چاہیے"] },
        { t: "table",
          head: [["Task or hazard", "کام یا خطرہ"], ["Protection to consider under the SOP", "ایس او پی کے تحت قابلِ غور حفاظت"]],
          rows: [
            [["Routine specimen handling", "نمونوں کا معمول کا کام"], ["Suitable gloves and protective laboratory clothing.", "مناسب دستانے اور لیبارٹری کا حفاظتی لباس۔"]],
            [["Risk of splash to eyes or face", "آنکھوں یا چہرے پر چھینٹوں کا خطرہ"], ["Splash goggles, with extra face protection where indicated.", "حفاظتی چشمے، اور جہاں ضروری ہو چہرے کی اضافی حفاظت۔"]],
            [["Chemical handling", "کیمیکل کا استعمال"], ["Gloves chosen for that specific chemical, plus suitable clothing and eye protection.", "اس مخصوص کیمیکل کے لیے منتخب دستانے، ساتھ مناسب لباس اور آنکھوں کی حفاظت۔"]],
            [["Biological work that creates aerosols", "ایروسول پیدا کرنے والا حیاتیاتی کام"], ["Appropriate containment; respiratory protection where the risk assessment requires it.", "مناسب حفاظتی بندوبست؛ جہاں خطرات کا جائزہ تقاضا کرے وہاں سانس کی حفاظت۔"]],
            [["Cleaning or spill response", "صفائی یا گرے ہوئے مواد سے نمٹنا"], ["Hazard-specific PPE, for trained responders.", "خطرے کے مطابق حفاظتی سامان، تربیت یافتہ افراد کے لیے۔"]]
          ] },
        { t: "warn", x: ["Ordinary examination gloves do not protect against every chemical. A face shield adds to eye protection; it does not automatically replace it. PPE cannot make up for failed ventilation or unsuitable equipment.",
                         "عام معائنے کے دستانے ہر کیمیکل سے نہیں بچاتے۔ فیس شیلڈ آنکھوں کی حفاظت میں اضافہ کرتی ہے؛ خود بخود اس کی جگہ نہیں لیتی۔ حفاظتی سامان خراب ہوا داری یا نامناسب آلات کی تلافی نہیں کر سکتا۔"] },
        { t: "h", x: ["Know which cabinet you are using", "جانیں کہ آپ کون سی کیبنٹ استعمال کر رہے ہیں"] },
        { t: "table",
          head: [["Equipment", "آلہ"], ["Main purpose", "بنیادی مقصد"], ["Important limit", "اہم حد"]],
          rows: [
            [["Chemical fume hood", "کیمیکل فیوم ہڈ"], ["Controls hazardous chemical vapours and fumes.", "خطرناک کیمیائی بخارات اور دھوئیں کو قابو کرتا ہے۔"], ["Does not give the biological containment needed for infectious aerosol work.", "متعدی ایروسول والے کام کے لیے درکار حیاتیاتی حفاظت فراہم نہیں کرتا۔"]],
            [["Biological safety cabinet (BSC)", "بائیولوجیکل سیفٹی کیبنٹ (بی ایس سی)"], ["Controls biological aerosols when correctly chosen and used.", "درست انتخاب اور استعمال پر حیاتیاتی ایروسول کو قابو کرتی ہے۔"], ["Most routine BSCs are not suitable for hazardous volatile chemicals.", "زیادہ تر عام بی ایس سی خطرناک اُڑنے والے کیمیکل کے لیے موزوں نہیں۔"]],
            [["Clean bench", "کلین بینچ"], ["Protects the work or product from contamination.", "کام یا مواد کو آلودگی سے بچاتا ہے۔"], ["Does not protect the worker from infectious materials.", "کارکن کو متعدی مواد سے نہیں بچاتا۔"]]
          ] },
        { t: "key", x: ["These devices are not interchangeable. Use only the equipment approved for the task. Stop and report an airflow alarm or equipment fault.",
                        "یہ آلات ایک دوسرے کا متبادل نہیں۔ صرف وہی آلہ استعمال کریں جو اس کام کے لیے منظور شدہ ہو۔ ہوا کے بہاؤ کا الارم یا آلے کی خرابی ہو تو رک جائیں اور اطلاع دیں۔"] }
      ]
    },
    {
      id: "biological",
      title: ["Biological materials and anatomy work", "حیاتیاتی مواد اور اناٹومی کا کام"],
      blocks: [
        { t: "h", x: ["Specimens and cultures", "نمونے اور کلچر"] },
        { t: "ul", items: [
          ["Treat materials according to their assessed risk.", "مواد کو اس کے جانچے گئے خطرے کے مطابق سنبھالیں۔"],
          ["Avoid splashing and creating aerosols unnecessarily.", "چھینٹے اڑانے اور غیر ضروری ایروسول بنانے سے گریز کریں۔"],
          ["Use approved sealed centrifuge rotors or safety cups where required.", "جہاں ضروری ہو منظور شدہ بند سینٹری فیوج روٹر یا سیفٹی کپ استعمال کریں۔"],
          ["Balance the centrifuge and inspect tubes as the equipment SOP says.", "آلے کے ایس او پی کے مطابق سینٹری فیوج کو متوازن کریں اور ٹیوبوں کا معائنہ کریں۔"],
          ["Do not open a centrifuge until it has completely stopped.", "سینٹری فیوج کو مکمل رکنے سے پہلے نہ کھولیں۔"],
          ["If you suspect a breakage, keep it closed, alert the supervisor and follow the incident procedure.", "اگر ٹیوب ٹوٹنے کا شبہ ہو تو اسے بند رکھیں، سپروائزر کو بتائیں اور واقعے کے طریقۂ کار پر عمل کریں۔"]
        ] },
        { t: "warn", x: ["Do not guess a waiting time or open a centrifuge to investigate a suspected biological spill.",
                         "مشتبہ حیاتیاتی اخراج دیکھنے کے لیے انتظار کا وقت خود طے نہ کریں اور سینٹری فیوج نہ کھولیں۔"] },
        { t: "h", x: ["Cadavers and preserved tissue", "میتیں اور محفوظ شدہ بافتیں"] },
        { t: "ul", items: [
          ["Follow the Anatomy Department’s procedures and maintain dignity and confidentiality.", "شعبہ اناٹومی کے طریقۂ کار پر عمل کریں اور احترام اور رازداری برقرار رکھیں۔"],
          ["Do not assume preserved material is free of biological risk.", "یہ فرض نہ کریں کہ محفوظ شدہ مواد حیاتیاتی خطرے سے پاک ہے۔"],
          ["Use the specified gloves, clothing and splash protection.", "مقررہ دستانے، لباس اور چھینٹوں سے حفاظت استعمال کریں۔"],
          ["Handle dissection instruments safely.", "چیر پھاڑ کے اوزار احتیاط سے استعمال کریں۔"],
          ["Keep preservation containers covered when not in use.", "استعمال میں نہ ہوں تو محفوظ کرنے والے برتن ڈھکے رکھیں۔"],
          ["Report ventilation problems, eye irritation, coughing or skin symptoms promptly.", "ہوا داری کے مسائل، آنکھوں کی جلن، کھانسی یا جلد کی علامات کی فوراً اطلاع دیں۔"]
        ] },
        { t: "warn", x: ["Formalin is a chemical hazard as well as a tissue-handling risk. Formaldehyde can irritate and sensitize and is classified as a human carcinogen, so ventilation and exposure controls matter. Ordinary surgical masks do not control formaldehyde vapour.",
                         "فارملین بافتوں کے خطرے کے ساتھ ساتھ ایک کیمیائی خطرہ بھی ہے۔ فارمل ڈی ہائیڈ جلن اور حساسیت پیدا کر سکتا ہے اور انسانوں میں سرطان پیدا کرنے والا قرار دیا گیا ہے، اس لیے ہوا داری اور رابطے سے بچاؤ اہم ہیں۔ عام سرجیکل ماسک فارمل ڈی ہائیڈ کے بخارات کو نہیں روکتے۔"] }
      ]
    },
    {
      id: "spill",
      title: ["A spill: what should everyone do?", "مواد گر جائے تو ہر ایک کو کیا کرنا چاہیے؟"],
      blocks: [
        { t: "key", x: ["Stop. Warn. Keep clear. Report.", "رکیں۔ خبردار کریں۔ دور رہیں۔ اطلاع دیں۔"] },
        { t: "ol", items: [
          ["Stop the activity if you can do so safely.", "اگر محفوظ طریقے سے ممکن ہو تو کام روک دیں۔"],
          ["Warn nearby people and prevent access.", "قریبی لوگوں کو خبردار کریں اور داخلہ روکیں۔"],
          ["Move away from the affected area.", "متاثرہ جگہ سے دور ہو جائیں۔"],
          ["Tell the laboratory supervisor or the designated emergency contact.", "لیبارٹری سپروائزر یا مقررہ ہنگامی رابطہ فرد کو بتائیں۔"],
          ["Get urgent help for anyone exposed or injured.", "جو بھی متاثر یا زخمی ہو اس کے لیے فوری مدد حاصل کریں۔"],
          ["Follow instructions about evacuation and re-entry.", "انخلا اور دوبارہ داخلے کی ہدایات پر عمل کریں۔"]
        ] },
        { t: "h", x: ["Do not attempt cleanup when:", "صفائی کی کوشش نہ کریں جب:"] },
        { t: "ul", items: [
          ["The material is unknown.", "مواد نامعلوم ہو۔"],
          ["There are significant fumes, or people have symptoms.", "کافی بخارات ہوں، یا لوگوں میں علامات ہوں۔"],
          ["The spill is beyond your training or the equipment available.", "اخراج آپ کی تربیت یا دستیاب سامان سے بڑھ کر ہو۔"],
          ["There is a risk of fire, explosion or major aerosols.", "آگ، دھماکے یا زیادہ ایروسول کا خطرہ ہو۔"]
        ] },
        { t: "warn", x: ["Small does not automatically mean safe.", "چھوٹا ہونے کا مطلب خود بخود محفوظ ہونا نہیں۔"] },
        { t: "table",
          head: [["Spill type", "اخراج کی قسم"], ["Key restriction", "اہم پابندی"]],
          rows: [
            [["Chemical", "کیمیائی"], ["Do not add bleach, neutralizers or another chemical unless the approved procedure requires it and you are trained.", "بلیچ، نیوٹرلائزر یا کوئی اور کیمیکل نہ ڈالیں جب تک منظور شدہ طریقۂ کار تقاضا نہ کرے اور آپ تربیت یافتہ نہ ہوں۔"]],
            [["Biological", "حیاتیاتی"], ["Trained staff use the approved disinfectant, contact time, containment and waste procedure.", "تربیت یافتہ عملہ منظور شدہ جراثیم کش، رابطے کا وقت، حفاظتی بندوبست اور کچرے کا طریقہ استعمال کرتا ہے۔"]],
            [["Mercury", "پارہ"], ["Never vacuum, sweep, mop or pour mercury down a drain. Keep people away and call trained responders.", "پارے کو کبھی ویکیوم نہ کریں، جھاڑو یا پوچا نہ لگائیں اور نالی میں نہ بہائیں۔ لوگوں کو دور رکھیں اور تربیت یافتہ افراد کو بلائیں۔"]],
            [["Mixed chemical and biological", "ملا جلا کیمیائی اور حیاتیاتی"], ["Get specialist advice; the routine biological procedure may not be suitable.", "ماہرانہ مشورہ لیں؛ حیاتیاتی اخراج کا عام طریقہ موزوں نہیں ہو سکتا۔"]]
          ] },
        { t: "note", x: ["A spill kit being present does not authorize everyone to use it. Its contents must match the hazards, and trained responders must know its limits.",
                         "اسپل کٹ کی موجودگی ہر کسی کو اسے استعمال کرنے کی اجازت نہیں دیتی۔ اس کا سامان خطرات کے مطابق ہونا چاہیے اور تربیت یافتہ افراد کو اس کی حدود معلوم ہونی چاہییں۔"] }
      ]
    },
    {
      id: "exposure",
      title: ["Immediate action after exposure", "رابطے کے بعد فوری اقدام"],
      blocks: [
        { t: "table",
          head: [["Exposure", "رابطے کی نوعیت"], ["First action", "پہلا اقدام"]],
          rows: [
            [["Chemical splash to the eyes", "آنکھوں میں کیمیکل کے چھینٹے"], ["Start flushing at once at the eyewash with clean, gently flowing water. Continue for at least 15 minutes, or longer if the SDS or medical advice says so. Get urgent medical assessment.", "فوراً آئی واش پر صاف، آہستہ بہتے پانی سے دھونا شروع کریں۔ کم از کم 15 منٹ، یا ایس ڈی ایس یا طبی مشورے کے مطابق اس سے زیادہ دیر جاری رکھیں۔ ہنگامی طبی معائنہ کروائیں۔"]],
            [["Chemical splash to the skin", "جلد پر کیمیکل کے چھینٹے"], ["Start the chemical-specific emergency procedure promptly. For most liquid splashes, use plenty of water and remove contaminated clothing safely. Dry or specially reactive chemicals may need other first steps.", "اس کیمیکل کا مخصوص ہنگامی طریقہ فوراً شروع کریں۔ زیادہ تر مائع چھینٹوں کے لیے خوب پانی استعمال کریں اور آلودہ کپڑے احتیاط سے اتاریں۔ خشک یا خاص ردِعمل والے کیمیکل کے لیے ابتدائی اقدامات مختلف ہو سکتے ہیں۔"]],
            [["Breathing in fumes", "بخارات سانس میں جانا"], ["Move to fresh air if it is safe. Do not enter a contaminated area to rescue someone without training and protection. Call for emergency help.", "اگر محفوظ ہو تو تازہ ہوا میں جائیں۔ تربیت اور حفاظت کے بغیر کسی کو بچانے کے لیے آلودہ جگہ میں داخل نہ ہوں۔ ہنگامی مدد بلائیں۔"]],
            [["Accidental swallowing", "غلطی سے نگل لینا"], ["Get urgent medical advice. Do not induce vomiting or give a neutralizing substance.", "فوری طبی مشورہ لیں۔ قے نہ کروائیں اور کوئی نیوٹرلائز کرنے والی چیز نہ دیں۔"]],
            [["Biological splash or needlestick", "حیاتیاتی چھینٹے یا سوئی چبھنا"], ["Follow Module 6: immediate first aid, prompt reporting and urgent assessment.", "ماڈیول 6 پر عمل کریں: فوری ابتدائی امداد، فوری اطلاع اور ہنگامی معائنہ۔"]]
          ] },
        { t: "warn", x: ["For eye splashes, do not delay flushing to look for an SDS or to remove contact lenses. Ask another person to get the chemical information and call for help.",
                         "آنکھوں میں چھینٹے پڑیں تو ایس ڈی ایس ڈھونڈنے یا کانٹیکٹ لینز اتارنے کے لیے دھونے میں تاخیر نہ کریں۔ کسی اور سے کہیں کہ کیمیکل کی معلومات لائے اور مدد بلائے۔"] },
        { t: "note", x: ["Know your equipment: find the eyewash and safety shower before work starts, and keep the way to them clear. A small eyewash bottle alone may not give the long flushing that is needed.",
                         "اپنے آلات جانیں: کام شروع کرنے سے پہلے آئی واش اور سیفٹی شاور کی جگہ معلوم کریں اور ان تک راستہ صاف رکھیں۔ صرف چھوٹی آئی واش بوتل سے اتنی دیر دھونا ممکن نہیں ہو سکتا جتنا ضروری ہے۔"] },
        { t: "contacts", title: ["Who to tell at KGMC", "کے جی ایم سی میں کسے بتائیں"], items: [
          ["Spills, unlabelled containers and equipment faults: the laboratory supervisor or Lab In-charge of that department.", "گرا ہوا مواد، بغیر لیبل کے ڈبے اور آلات کی خرابی: اس شعبے کا لیبارٹری سپروائزر یا لیب انچارج۔"],
          ["Injury or exposure: tell the supervisor at once and get urgent medical assessment.", "چوٹ یا رابطہ: فوراً سپروائزر کو بتائیں اور ہنگامی طبی معائنہ کروائیں۔"]
        ] }
      ]
    },
    {
      id: "practice",
      title: ["Practice: three short scenarios", "مشق: تین مختصر صورتِ حال"],
      blocks: [
        { t: "p", x: ["Read each situation and decide what you would do. Then open the answer to check.", "ہر صورتِ حال پڑھیں اور سوچیں کہ آپ کیا کریں گے۔ پھر جواب کھول کر دیکھیں۔"] },
        { t: "scenario",
          title: ["Scenario A: The unlabelled bottle", "صورتِ حال الف: بغیر لیبل کی بوتل"],
          situation: ["A student finds a clear liquid and suggests smelling it to identify it.", "ایک طالبہ کو ایک شفاف مائع ملتا ہے اور وہ اسے پہچاننے کے لیے سونگھنے کا مشورہ دیتی ہے۔"],
          answer: ["Do not open or smell it. Leave it undisturbed and tell the laboratory supervisor.", "اسے نہ کھولیں اور نہ سونگھیں۔ اسے ویسے ہی رہنے دیں اور لیبارٹری سپروائزر کو بتائیں۔"] },
        { t: "scenario",
          title: ["Scenario B: The wrong cabinet", "صورتِ حال ب: غلط کیبنٹ"],
          situation: ["A worker plans to use formalin in a routine biological safety cabinet because “it has a filter.”", "ایک کارکن فارملین کو عام بائیولوجیکل سیفٹی کیبنٹ میں استعمال کرنے کا ارادہ کرتا ہے کیونکہ ”اس میں فلٹر ہے۔“"],
          answer: ["Stop and check the approved procedure. A biological filter does not necessarily remove hazardous vapours; use the specified ventilation system.", "رکیں اور منظور شدہ طریقۂ کار دیکھیں۔ حیاتیاتی فلٹر ضروری نہیں کہ خطرناک بخارات کو ہٹائے؛ مقررہ ہوا داری کا نظام استعمال کریں۔"] },
        { t: "scenario",
          title: ["Scenario C: The eager cleanup", "صورتِ حال ج: جلد بازی میں صفائی"],
          situation: ["A cleaner is asked to mop up an unknown laboratory spill.", "صفائی والے سے کہا جاتا ہے کہ لیبارٹری میں گرے ہوئے نامعلوم مائع پر پوچا لگا دے۔"],
          answer: ["Keep people away and tell the responsible laboratory staff. The cleaner should not clean up an unknown spill without identification, training and equipment.", "لوگوں کو دور رکھیں اور لیبارٹری کے ذمہ دار عملے کو بتائیں۔ صفائی والے کو شناخت، تربیت اور سامان کے بغیر نامعلوم مواد صاف نہیں کرنا چاہیے۔"] }
      ]
    },
    {
      id: "apply",
      type: "checklist",
      title: ["Apply: my laboratory safety check", "عمل: میری لیبارٹری کی حفاظتی جانچ"],
      blocks: [
        { t: "p", x: ["Look around without opening containers, testing equipment or handling hazardous material. Tick each item once you have checked it. Report any gap; do not correct an unfamiliar storage or equipment problem yourself.",
                      "ڈبے کھولے، آلات آزمائے یا خطرناک مواد کو چھوئے بغیر جائزہ لیں۔ ہر چیز کو دیکھ لینے کے بعد اس پر نشان لگا دیں۔ کوئی کمی ہو تو اطلاع دیں؛ ذخیرے یا آلات کا کوئی انجان مسئلہ خود ٹھیک نہ کریں۔"] },
        { t: "h", x: ["I have checked whether:", "میں نے دیکھ لیا ہے کہ آیا:"] }
      ],
      items: [
        ["I am authorized and trained for my assigned task.", "مجھے اپنے مقررہ کام کی اجازت اور تربیت حاصل ہے۔"],
        ["The relevant SOP is available.", "متعلقہ ایس او پی دستیاب ہے۔"],
        ["Chemicals and specimens are labelled.", "کیمیکل اور نمونوں پر لیبل لگے ہیں۔"],
        ["I know where to find the SDS.", "مجھے معلوم ہے کہ ایس ڈی ایس کہاں ملے گی۔"],
        ["The PPE needed is available and suitable.", "درکار حفاظتی سامان موجود اور موزوں ہے۔"],
        ["The correct ventilation or containment equipment is available.", "درست ہوا داری یا حفاظتی آلہ دستیاب ہے۔"],
        ["The eyewash and emergency routes are not blocked.", "آئی واش اور ہنگامی راستے بند نہیں ہیں۔"],
        ["Spill kits are identified and I know who the trained responders are.", "اسپل کٹ کی نشاندہی ہے اور مجھے معلوم ہے کہ تربیت یافتہ افراد کون ہیں۔"],
        ["Sharps and waste containers are suitable and below their fill limits.", "شارپس اور کچرے کے ڈبے موزوں ہیں اور بھرنے کی حد سے نیچے ہیں۔"],
        ["I know whom to contact after a spill or exposure.", "مجھے معلوم ہے کہ مواد گرنے یا رابطے کے بعد کس سے رابطہ کرنا ہے۔"]
      ]
    }
  ],
  /* answer: the id of the correct option. The same answer key must also be in the Apps Script (MODULES.m7.key). */
  quiz: [
    { q: ["You find a bottle with an unreadable label. You should:", "آپ کو ایک بوتل ملتی ہے جس کا لیبل پڑھا نہیں جاتا۔ آپ کو چاہیے کہ:"],
      options: { a: ["Smell it carefully", "اسے احتیاط سے سونگھیں"], b: ["Not use it, and tell the responsible staff", "اسے استعمال نہ کریں اور ذمہ دار عملے کو بتائیں"], c: ["Pour it down the sink", "اسے سنک میں بہا دیں"] },
      answer: "b", feedback: ["Unknown chemicals must not be used or investigated by smelling.", "نامعلوم کیمیکل کو استعمال نہیں کرنا چاہیے اور نہ سونگھ کر جانچنا چاہیے۔"] },
    { q: ["Where should you find chemical-specific first-aid information?", "کسی کیمیکل کی مخصوص ابتدائی امداد کی معلومات کہاں ملنی چاہییں؟"],
      options: { a: ["The SDS", "ایس ڈی ایس میں"], b: ["Any general cleaning poster", "صفائی کے کسی عام پوسٹر میں"], c: ["The bottle’s colour alone", "صرف بوتل کے رنگ سے"] },
      answer: "a", feedback: ["The SDS gives chemical-specific safety information.", "ایس ڈی ایس کیمیکل کی مخصوص حفاظتی معلومات دیتی ہے۔"] },
    { q: ["The safest chemical-storage system is based on:", "کیمیکل ذخیرہ کرنے کا سب سے محفوظ نظام کس پر مبنی ہے؟"],
      options: { a: ["Alphabetical order only", "صرف حروفِ تہجی کی ترتیب"], b: ["Bottle size only", "صرف بوتل کا سائز"], c: ["Compatibility and the chemical’s storage requirements", "باہمی موافقت اور کیمیکل کے ذخیرے کی ضروریات"] },
      answer: "c", feedback: ["Incompatible chemicals need to be kept apart.", "ناموافق کیمیکل کو الگ رکھنا ضروری ہے۔"] },
    { q: ["A routine biological safety cabinet:", "ایک عام بائیولوجیکل سیفٹی کیبنٹ:"],
      options: { a: ["Is always suitable for formalin vapour", "فارملین کے بخارات کے لیے ہمیشہ موزوں ہے"], b: ["Is not automatically suitable for hazardous volatile chemicals", "خطرناک اُڑنے والے کیمیکل کے لیے خود بخود موزوں نہیں"], c: ["Replaces all PPE", "تمام حفاظتی سامان کی جگہ لے لیتی ہے"] },
      answer: "b", feedback: ["Biological and chemical containment are different.", "حیاتیاتی اور کیمیائی حفاظت الگ الگ چیزیں ہیں۔"] },
    { q: ["A centrifuge may contain a broken specimen tube. You should:", "سینٹری فیوج میں نمونے کی ٹیوب ٹوٹی ہو سکتی ہے۔ آپ کو چاہیے کہ:"],
      options: { a: ["Keep it closed and follow the supervisor’s incident procedure", "اسے بند رکھیں اور سپروائزر کے بتائے ہوئے طریقۂ کار پر عمل کریں"], b: ["Open it immediately", "اسے فوراً کھول دیں"], c: ["Ask an untrained cleaner to investigate", "غیر تربیت یافتہ صفائی والے سے دیکھنے کو کہیں"] },
      answer: "a", feedback: ["Opening the equipment can release aerosols.", "آلہ کھولنے سے ایروسول خارج ہو سکتے ہیں۔"] },
    { q: ["An unknown spill should first be managed by:", "نامعلوم مائع گرنے پر سب سے پہلے کیا کرنا چاہیے؟"],
      options: { a: ["Adding bleach", "بلیچ ڈالنا"], b: ["Mopping immediately", "فوراً پوچا لگانا"], c: ["Warning others, keeping clear and reporting it", "دوسروں کو خبردار کرنا، دور رہنا اور اطلاع دینا"] },
      answer: "c", feedback: ["Prevent further exposure and get trained help.", "مزید رابطے کو روکیں اور تربیت یافتہ مدد حاصل کریں۔"] },
    { q: ["After a chemical splash to the eyes, you should:", "آنکھوں میں کیمیکل کے چھینٹے پڑنے کے بعد آپ کو چاہیے کہ:"],
      options: { a: ["Wait for the SDS before doing anything", "کچھ بھی کرنے سے پہلے ایس ڈی ایس کا انتظار کریں"], b: ["Begin flushing immediately and arrange urgent assessment", "فوراً دھونا شروع کریں اور ہنگامی معائنے کا انتظام کریں"], c: ["Rub the eyes with a cloth", "آنکھوں کو کپڑے سے رگڑیں"] },
      answer: "b", feedback: ["Flushing must not be delayed.", "دھونے میں تاخیر نہیں ہونی چاہیے۔"] },
    { q: ["Which action is unsafe after a mercury spill?", "پارہ گرنے کے بعد کون سا عمل غیر محفوظ ہے؟"],
      options: { a: ["Using a vacuum cleaner", "ویکیوم کلینر استعمال کرنا"], b: ["Keeping people away", "لوگوں کو دور رکھنا"], c: ["Calling trained responders", "تربیت یافتہ افراد کو بلانا"] },
      answer: "a", feedback: ["Vacuuming spreads mercury contamination and vapour.", "ویکیوم کرنے سے پارے کی آلودگی اور بخارات پھیلتے ہیں۔"] }
  ]
};
