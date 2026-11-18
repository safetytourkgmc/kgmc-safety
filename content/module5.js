/* Module 5: Waste Segregation and Sharps Safety.
   Every piece of text is a pair: [English, Urdu].
   URDU IS A DRAFT TRANSLATION - to be reviewed and corrected by Prof. Amin before launch.
   The colour chart follows the Unit 5 source document and must match KGMC's approved system.
   Block types are the same as in module1.js. */
window.KGMC_CONTENT = window.KGMC_CONTENT || {};
window.KGMC_CONTENT.m5 = {
  version: "1.0",
  title: ["Waste segregation and sharps safety", "کچرے کی علیحدگی اور نوکیلی اشیاء سے حفاظت"],
  sections: [
    {
      id: "start",
      title: ["Start: A hidden danger", "آغاز: ایک چھپا ہوا خطرہ"],
      blocks: [
        { t: "p", x: ["A cleaner lifts a waste bag from a laboratory bin. A used needle hidden among paper towels pierces the bag and injures her hand. The needle was thrown away by someone who assumed that sorting waste was the cleaner’s job.",
                      "صفائی کے عملے کی ایک رکن لیبارٹری کے کوڑے دان سے کچرے کا تھیلا اٹھاتی ہے۔ کاغذی تولیوں میں چھپی ایک استعمال شدہ سوئی تھیلے کو چھید کر اس کا ہاتھ زخمی کر دیتی ہے۔ یہ سوئی کسی ایسے شخص نے پھینکی تھی جس نے سمجھا کہ کچرا الگ کرنا صفائی والے کا کام ہے۔"] },
        { t: "think", x: ["Think: Who should have separated the needle? Which container should have been used? What should the cleaner do immediately?",
                          "سوچیں: سوئی کو الگ کس نے کرنا چاہیے تھا؟ کون سا ڈبہ استعمال ہونا چاہیے تھا؟ صفائی والی کو فوراً کیا کرنا چاہیے؟"] },
        { t: "key", x: ["Separate waste where it is produced. Dispose of sharps immediately. Protect the next person who handles it.",
                        "کچرے کو وہیں الگ کریں جہاں وہ پیدا ہو۔ نوکیلی اشیاء کو فوراً ٹھکانے لگائیں۔ اسے اگلا سنبھالنے والے شخص کی حفاظت کریں۔"] }
      ]
    },
    {
      id: "objectives",
      title: ["What you will learn", "آپ کیا سیکھیں گے"],
      blocks: [
        { t: "p", x: ["After completing this module, you should be able to:", "یہ ماڈیول مکمل کرنے کے بعد آپ اس قابل ہوں گے کہ:"] },
        { t: "ol", items: [
          ["Tell apart general, infectious, sharps and other hazardous waste.", "عام، متعدی، نوکیلے اور دیگر خطرناک کچرے میں فرق کر سکیں۔"],
          ["Choose the correct labelled container using KGMC’s system.", "کے جی ایم سی کے نظام کے مطابق درست لیبل والا ڈبہ منتخب کر سکیں۔"],
          ["Describe safe disposal of needles and other sharps.", "سوئیوں اور دیگر نوکیلی اشیاء کو محفوظ طریقے سے ٹھکانے لگانا بیان کر سکیں۔"],
          ["Recognize unsafe or overfilled containers.", "غیر محفوظ یا ضرورت سے زیادہ بھرے ہوئے ڈبوں کو پہچان سکیں۔"],
          ["Explain safe waste collection and transport within your role.", "اپنے کام کے دائرے میں کچرا محفوظ طریقے سے جمع کرنے اور منتقل کرنے کی وضاحت کر سکیں۔"],
          ["Respond promptly to a needlestick injury or other exposure.", "سوئی چبھنے یا کسی اور جراثیمی رابطے پر فوری ردِعمل دے سکیں۔"]
        ] }
      ]
    },
    {
      id: "types",
      title: ["What type of waste is it?", "یہ کس قسم کا کچرا ہے؟"],
      blocks: [
        { t: "p", x: ["Waste segregation means separating waste into the correct category at the place and time it is produced.",
                      "کچرے کی علیحدگی کا مطلب ہے کچرے کو اسی جگہ اور اسی وقت درست قسم میں الگ کرنا جہاں وہ پیدا ہو۔"] },
        { t: "table",
          head: [["Waste category", "کچرے کی قسم"], ["Examples", "مثالیں"], ["Where it goes", "کہاں ڈالنا ہے"]],
          rows: [
            [["General, non-hazardous waste", "عام، غیر خطرناک کچرا"], ["Clean paper, packaging and ordinary food waste", "صاف کاغذ، پیکنگ اور عام کھانے کا کچرا"], ["The general-waste container.", "عام کچرے کا ڈبہ۔"]],
            [["Infectious waste", "متعدی کچرا"], ["Blood-contaminated dressings and items classed as infectious by your department", "خون آلود پٹیاں اور وہ اشیاء جنہیں آپ کا شعبہ متعدی قرار دیتا ہے"], ["The infectious-waste container.", "متعدی کچرے کا ڈبہ۔"]],
            [["Sharps", "نوکیلی اشیاء"], ["Needles, lancets, disposable scalpel blades and contaminated broken glass", "سوئیاں، لینسٹ، ڈسپوزایبل جراحی بلیڈ اور آلودہ ٹوٹا ہوا شیشہ"], ["An approved rigid, puncture-resistant sharps container.", "منظور شدہ سخت، نہ چھدنے والا شارپس کنٹینر۔"]],
            [["Anatomical or pathological waste", "جسمانی اعضاء یا پیتھالوجی کا کچرا"], ["Human tissue and specimens designated for disposal", "انسانی بافتیں اور تلف کرنے کے لیے مقرر نمونے"], ["Follow the anatomy or pathology department’s arrangements.", "شعبہ اناٹومی یا پیتھالوجی کے انتظامات پر عمل کریں۔"]],
            [["Chemical or pharmaceutical waste", "کیمیائی یا دواؤں کا کچرا"], ["Laboratory chemicals, formalin waste, expired medicines and items containing mercury", "لیبارٹری کے کیمیکل، فارملین والا کچرا، زائد المیعاد دوائیں اور پارے والی اشیاء"], ["Keep separate and follow the hazardous-waste procedure.", "الگ رکھیں اور خطرناک کچرے کے طریقۂ کار پر عمل کریں۔"]]
          ] },
        { t: "note", x: ["Some items have more than one hazard, such as broken glass that held a chemical. Ask the responsible laboratory or waste officer for the correct route.",
                         "کچھ اشیاء میں ایک سے زیادہ خطرے ہوتے ہیں، جیسے وہ ٹوٹا شیشہ جس میں کیمیکل تھا۔ درست طریقے کے لیے متعلقہ لیبارٹری یا ویسٹ افسر سے پوچھیں۔"] },
        { t: "warn", x: ["Not all waste in a medical college is infectious. But hazardous waste must never go into ordinary waste or recycling.",
                         "میڈیکل کالج کا سارا کچرا متعدی نہیں ہوتا۔ لیکن خطرناک کچرا کبھی عام کچرے یا ری سائیکلنگ میں نہیں جانا چاہیے۔"] }
      ]
    },
    {
      id: "source",
      title: ["Segregation starts with the person producing the waste", "علیحدگی کا آغاز کچرا پیدا کرنے والے سے ہوتا ہے"],
      blocks: [
        { t: "h", x: ["Before you begin a procedure", "کوئی کام شروع کرنے سے پہلے"] },
        { t: "ul", items: [
          ["Identify the correct containers.", "درست ڈبوں کی نشاندہی کریں۔"],
          ["Check that they are available, correctly labelled and not full.", "دیکھیں کہ وہ موجود ہیں، ان پر درست لیبل ہے اور وہ بھرے ہوئے نہیں۔"],
          ["Make sure a sharps container is safely placed close to where you are working.", "یقینی بنائیں کہ شارپس کنٹینر آپ کے کام کی جگہ کے قریب محفوظ طور پر رکھا ہے۔"],
          ["Arrange replacement supplies beforehand if needed.", "ضرورت ہو تو متبادل سامان کا پہلے سے انتظام کر لیں۔"]
        ] },
        { t: "h", x: ["When you discard waste", "کچرا پھینکتے وقت"] },
        { t: "ul", items: [
          ["Put it directly into the correct container.", "اسے سیدھا درست ڈبے میں ڈالیں۔"],
          ["Read the label; do not rely only on colour.", "لیبل پڑھیں؛ صرف رنگ پر انحصار نہ کریں۔"],
          ["Never place sharps in a plastic waste bag.", "نوکیلی اشیاء کبھی پلاسٹک کے کچرے کے تھیلے میں نہ ڈالیں۔"],
          ["Never leave waste for a cleaner to sort later.", "کچرا کبھی اس لیے نہ چھوڑیں کہ صفائی والا بعد میں الگ کر لے گا۔"],
          ["Do not put food, paper or gloves into a sharps container.", "شارپس کنٹینر میں کھانا، کاغذ یا دستانے نہ ڈالیں۔"],
          ["If unsure, ask before you dispose of it.", "یقین نہ ہو تو پھینکنے سے پہلے پوچھ لیں۔"]
        ] },
        { t: "h", x: ["KGMC colour chart", "کے جی ایم سی کا رنگوں کا چارٹ"] },
        { t: "table",
          head: [["Colour", "رنگ"], ["Waste", "کچرا"]],
          rows: [
            [["White", "سفید"], ["General waste: paper, packaging and wrappers.", "عام کچرا: کاغذ، پیکنگ اور ریپر۔"]],
            [["Green", "سبز"], ["Food and organic waste.", "کھانے اور نامیاتی کچرا۔"]],
            [["Blue", "نیلا"], ["Recyclables: plastic bottles, cans and clean paper.", "دوبارہ قابلِ استعمال اشیاء: پلاسٹک کی بوتلیں، ڈبے اور صاف کاغذ۔"]],
            [["Yellow", "پیلا"], ["Infectious and anatomical waste: blood-soaked gauze, cotton and dressings, human tissue, lab cultures, used gloves, catheters and urine bags.", "متعدی اور جسمانی اعضاء کا کچرا: خون آلود گاز، روئی اور پٹیاں، انسانی بافتیں، لیب کلچر، استعمال شدہ دستانے، کیتھیٹر اور پیشاب کی تھیلیاں۔"]],
            [["Red", "سرخ"], ["Sharps: needles, syringes, surgical blades, scalpels, lancets and broken glass, in a rigid puncture-resistant container.", "نوکیلی اشیاء: سوئیاں، سرنجیں، جراحی بلیڈ، نشتر، لینسٹ اور ٹوٹا شیشہ، سخت اور نہ چھدنے والے کنٹینر میں۔"]],
            [["Brown", "بھورا"], ["Chemical and pharmaceutical waste: expired medicines, laboratory reagents, formalin, disinfectants and heavy-metal waste.", "کیمیائی اور دواؤں کا کچرا: زائد المیعاد دوائیں، لیبارٹری ری ایجنٹ، فارملین، جراثیم کش اور بھاری دھاتوں کا کچرا۔"]]
          ] },
        { t: "img", src: "images/m5-genreal-waste-kgmc-2.jpg",
          alt: ["A labelled waste bin on a stand outside the Anatomy Department", "شعبہ اناٹومی کے باہر اسٹینڈ پر لگا لیبل والا کوڑے دان"],
          cap: ["A waste bin outside the Anatomy Department, KGMC. Always read the label as well as the colour.", "کے جی ایم سی کے شعبہ اناٹومی کے باہر ایک کوڑے دان۔ رنگ کے ساتھ ساتھ لیبل بھی ہمیشہ پڑھیں۔"] }
      ]
    },
    {
      id: "sharps",
      title: ["Sharps: small objects, serious risks", "نوکیلی اشیاء: چھوٹی چیزیں، سنگین خطرات"],
      blocks: [
        { t: "p", x: ["A sharp is any object that can cut or puncture the skin. Injuries can happen during use, disposal, cleaning or waste collection.",
                      "نوکیلی چیز وہ ہے جو جلد کو کاٹ یا چھید سکے۔ چوٹ استعمال، پھینکنے، صفائی یا کچرا جمع کرنے کے دوران لگ سکتی ہے۔"] },
        { t: "h", x: ["Safe disposal rules", "محفوظ طریقے سے ٹھکانے لگانے کے اصول"] },
        { t: "ol", items: [
          ["Dispose of used sharps immediately after use.", "استعمال شدہ نوکیلی اشیاء کو استعمال کے فوراً بعد ٹھکانے لگائیں۔"],
          ["Activate the device’s safety feature as you were trained.", "آلے کا حفاظتی نظام اپنی تربیت کے مطابق فعال کریں۔"],
          ["Place the needle and syringe, still connected, directly into a sharps container.", "سوئی اور سرنج کو جڑی ہوئی حالت میں سیدھا شارپس کنٹینر میں ڈالیں۔"],
          ["Do not recap, bend, break or detach used needles by hand as a routine.", "استعمال شدہ سوئیوں پر معمول کے طور پر ڈھکن نہ چڑھائیں، انہیں نہ موڑیں، نہ توڑیں اور نہ ہاتھ سے الگ کریں۔"],
          ["Do not leave sharps on trays, desks, beds or sinks.", "نوکیلی اشیاء ٹرے، میز، بستر یا سنک پر نہ چھوڑیں۔"],
          ["Never put your hand inside a sharps container.", "کبھی شارپس کنٹینر کے اندر ہاتھ نہ ڈالیں۔"],
          ["Never force an item through the opening or push the contents down.", "کسی چیز کو زبردستی اندر نہ ٹھونسیں اور اندر کی چیزوں کو نیچے نہ دبائیں۔"],
          ["Do not retrieve an item once it has been discarded.", "ایک بار پھینکی ہوئی چیز کو واپس نہ نکالیں۔"]
        ] },
        { t: "warn", x: ["Gloves can reduce some exposures, but they do not make handling a needle safe.",
                         "دستانے کچھ خطرات کم کر سکتے ہیں، مگر وہ سوئی کو سنبھالنا محفوظ نہیں بنا دیتے۔"] }
      ]
    },
    {
      id: "container",
      title: ["Check the sharps container", "شارپس کنٹینر کا جائزہ لیں"],
      blocks: [
        { t: "h", x: ["A suitable container is:", "ایک مناسب کنٹینر:"] },
        { t: "ul", items: [
          ["Rigid, puncture-resistant and leak-resistant.", "سخت، نہ چھدنے والا اور نہ رِسنے والا ہوتا ہے۔"],
          ["Clearly labelled.", "اس پر واضح لیبل ہوتا ہے۔"],
          ["Upright, stable and securely positioned.", "سیدھا، مضبوط اور محفوظ طور پر رکھا ہوتا ہے۔"],
          ["Close enough that nobody has to carry an exposed sharp.", "اتنا قریب ہوتا ہے کہ کسی کو کھلی نوکیلی چیز اٹھا کر نہ لے جانی پڑے۔"],
          ["Able to be closed securely for removal.", "ہٹانے کے لیے مضبوطی سے بند کیا جا سکتا ہے۔"],
          ["Placed where unauthorized people cannot reach it.", "ایسی جگہ ہوتا ہے جہاں غیر مجاز افراد نہ پہنچ سکیں۔"]
        ] },
        { t: "key", x: ["Close and replace the container at its fill line, or when it is three-quarters full if there is no line.",
                        "کنٹینر کو اس کی بھرنے کی لکیر پر، یا لکیر نہ ہو تو تین چوتھائی بھر جانے پر، بند کر کے بدل دیں۔"] },
        { t: "warn", x: ["Never shake, compress or reopen a container to make more space.", "جگہ بنانے کے لیے کنٹینر کو کبھی نہ ہلائیں، نہ دبائیں اور نہ دوبارہ کھولیں۔"] },
        { t: "h", x: ["If a container is full, damaged or has sharps sticking out", "اگر کنٹینر بھرا ہو، خراب ہو یا اس سے نوکیلی چیزیں باہر نکلی ہوں"] },
        { t: "ul", items: [
          ["Stop using it.", "اس کا استعمال روک دیں۔"],
          ["Keep others away.", "دوسروں کو دور رکھیں۔"],
          ["Ask for a replacement and trained help.", "متبادل کنٹینر اور تربیت یافتہ مدد طلب کریں۔"],
          ["Do not force the lid over sharps that are sticking out.", "باہر نکلی ہوئی نوکیلی چیزوں پر زبردستی ڈھکن نہ لگائیں۔"]
        ] }
      ]
    },
    {
      id: "found",
      title: ["If a sharp is found in the wrong place", "اگر نوکیلی چیز غلط جگہ ملے"],
      blocks: [
        { t: "h", x: ["A needle on the floor", "فرش پر پڑی سوئی"] },
        { t: "ul", items: [
          ["Keep people away from the area.", "لوگوں کو اس جگہ سے دور رکھیں۔"],
          ["Tell the designated trained person.", "مقررہ تربیت یافتہ شخص کو بتائیں۔"],
          ["Do not pick it up with your fingers, even when wearing gloves.", "اسے انگلیوں سے نہ اٹھائیں، چاہے دستانے پہنے ہوں۔"],
          ["Trained staff use tools such as forceps or tongs and place it in a sharps container.", "تربیت یافتہ عملہ چمٹی جیسے اوزار استعمال کر کے اسے شارپس کنٹینر میں ڈالتا ہے۔"]
        ] },
        { t: "h", x: ["A sharp inside a waste bag", "کچرے کے تھیلے کے اندر نوکیلی چیز"] },
        { t: "ul", items: [
          ["Stop handling the bag.", "تھیلے کو ہاتھ لگانا بند کر دیں۔"],
          ["Do not squeeze, search or sort through it.", "اسے نہ دبائیں، نہ ٹٹولیں اور نہ اس میں سے چیزیں الگ کریں۔"],
          ["Keep others away and tell the waste supervisor.", "دوسروں کو دور رکھیں اور ویسٹ سپروائزر کو بتائیں۔"],
          ["Follow the approved procedure for containing and removing wrongly sorted waste.", "غلط الگ کیے گئے کچرے کو محفوظ کرنے اور ہٹانے کے منظور شدہ طریقے پر عمل کریں۔"]
        ] },
        { t: "warn", x: ["Broken glass: never collect the pieces with bare hands. Trained staff use suitable tools and the container that matches any biological or chemical contamination.",
                         "ٹوٹا ہوا شیشہ: ٹکڑے کبھی ننگے ہاتھوں سے نہ اٹھائیں۔ تربیت یافتہ عملہ مناسب اوزار اور حیاتیاتی یا کیمیائی آلودگی کے مطابق کنٹینر استعمال کرتا ہے۔"] }
      ]
    },
    {
      id: "handling",
      title: ["Safe collection, transport and storage", "محفوظ طریقے سے جمع کرنا، منتقلی اور ذخیرہ"],
      blocks: [
        { t: "note", x: ["This section matters most for cleaners and waste handlers.", "یہ حصہ خاص طور پر صفائی کے عملے اور کچرا سنبھالنے والوں کے لیے اہم ہے۔"] },
        { t: "h", x: ["During collection", "جمع کرتے وقت"] },
        { t: "ul", items: [
          ["Wear the PPE specified for the task, including suitable gloves and closed protective footwear.", "کام کے لیے مقررہ حفاظتی سامان پہنیں، بشمول مناسب دستانے اور بند حفاظتی جوتے۔"],
          ["Check the bag or container for leaks, damage and anything sticking out.", "تھیلے یا ڈبے کا جائزہ لیں کہ رِس تو نہیں رہا، خراب تو نہیں اور کوئی چیز باہر تو نہیں نکلی۔"],
          ["Do not compress waste with your hands or feet.", "کچرے کو ہاتھوں یا پیروں سے نہ دبائیں۔"],
          ["Seal bags at the approved fill limit; do not overfill.", "تھیلوں کو مقررہ حد پر بند کریں؛ ضرورت سے زیادہ نہ بھریں۔"],
          ["Label the bag as required, including where it came from and the date.", "تھیلے پر حسبِ ضرورت لیبل لگائیں، بشمول یہ کہ کہاں سے آیا اور تاریخ۔"],
          ["Hold bags away from your body; never carry them on your shoulder.", "تھیلوں کو جسم سے دور رکھیں؛ کبھی کندھے پر نہ اٹھائیں۔"],
          ["Clean your hands after removing gloves.", "دستانے اتارنے کے بعد ہاتھ صاف کریں۔"]
        ] },
        { t: "h", x: ["During transport", "منتقلی کے دوران"] },
        { t: "ul", items: [
          ["Use designated, cleanable, covered trolleys.", "مقررہ، قابلِ صفائی اور ڈھکی ہوئی ٹرالیاں استعمال کریں۔"],
          ["Keep hazardous and general waste separate.", "خطرناک اور عام کچرے کو الگ رکھیں۔"],
          ["Follow the approved collection route.", "جمع کرنے کے منظور شدہ راستے پر چلیں۔"],
          ["Do not leave waste unattended in corridors.", "کچرے کو راہداریوں میں بغیر نگرانی کے نہ چھوڑیں۔"],
          ["Clean trolleys and any contaminated equipment as required.", "ٹرالیوں اور آلودہ آلات کو حسبِ ضرورت صاف کریں۔"]
        ] },
        { t: "h", x: ["At temporary storage", "عارضی ذخیرے کی جگہ پر"] },
        { t: "ul", items: [
          ["Use the designated secure area and keep unauthorized people out.", "مقررہ محفوظ جگہ استعمال کریں اور غیر مجاز افراد کو دور رکھیں۔"],
          ["Protect waste from animals, pests and weather.", "کچرے کو جانوروں، کیڑوں اور موسم سے بچائیں۔"],
          ["Record collection and handover.", "جمع کرنے اور حوالے کرنے کا اندراج کریں۔"],
          ["Report missed collections promptly.", "کچرا نہ اٹھائے جانے کی فوراً اطلاع دیں۔"]
        ] },
        { t: "warn", x: ["Open burning, informal dumping and handing hazardous waste to unauthorized recyclers are unsafe. Moving waste to storage is not final disposal.",
                         "کھلے میں جلانا، غیر رسمی طور پر پھینکنا اور خطرناک کچرا غیر مجاز کباڑیوں کو دینا غیر محفوظ ہے۔ کچرے کو ذخیرے میں منتقل کر دینا اسے حتمی طور پر ٹھکانے لگانا نہیں ہے۔"] }
      ]
    },
    {
      id: "exposure",
      title: ["What to do after a needlestick or splash", "سوئی چبھنے یا چھینٹے پڑنے کے بعد کیا کریں"],
      blocks: [
        { t: "key", x: ["Act immediately, even if the injury looks small.", "فوراً عمل کریں، چاہے چوٹ معمولی لگے۔"] },
        { t: "table",
          head: [["Exposure", "رابطے کی نوعیت"], ["Immediate action", "فوری اقدام"]],
          rows: [
            [["Needlestick or cut", "سوئی چبھنا یا کٹ لگنا"], ["Wash the area with soap and water.", "اس جگہ کو صابن اور پانی سے دھوئیں۔"]],
            [["Splash to the eyes", "آنکھوں میں چھینٹے"], ["Rinse with clean water or saline.", "صاف پانی یا سیلائن سے دھوئیں۔"]],
            [["Splash to the mouth, nose or skin", "منہ، ناک یا جلد پر چھینٹے"], ["Flush with water.", "پانی سے اچھی طرح دھوئیں۔"]]
          ] },
        { t: "h", x: ["Then:", "پھر:"] },
        { t: "ol", items: [
          ["Report immediately to your supervisor or the exposure contact.", "فوراً اپنے سپروائزر یا مقررہ رابطہ فرد کو اطلاع دیں۔"],
          ["Get urgent clinical assessment.", "ہنگامی طبی معائنہ کروائیں۔"],
          ["Follow instructions for testing, vaccination review and any preventive treatment.", "ٹیسٹ، ویکسینیشن کے جائزے اور کسی بھی حفاظتی علاج کی ہدایات پر عمل کریں۔"],
          ["Complete the incident record once urgent care has started.", "ہنگامی نگہداشت شروع ہو جانے کے بعد واقعے کا اندراج مکمل کریں۔"],
          ["Attend follow-up appointments.", "بعد کے معائنوں میں ضرور جائیں۔"]
        ] },
        { t: "warn", x: ["Do not apply bleach or corrosive chemicals to the wound. Do not delay care to complete paperwork or to find out whose needle it was.",
                         "زخم پر بلیچ یا تیزابی کیمیکل نہ لگائیں۔ کاغذی کارروائی مکمل کرنے یا یہ جاننے کے لیے کہ سوئی کس کی تھی، علاج میں تاخیر نہ کریں۔"] },
        { t: "contacts", title: ["Who to contact at KGMC", "کے جی ایم سی میں کس سے رابطہ کریں"], items: [
          ["Waste management questions: Chairperson, Waste Management Committee.", "کچرے کے انتظام سے متعلق سوالات: چیئرپرسن، ویسٹ مینجمنٹ کمیٹی۔"],
          ["Replacement bins, bags and sharps containers: Store In-charge.", "متبادل کوڑے دان، تھیلے اور شارپس کنٹینر: اسٹور انچارج۔"],
          ["Unsafe waste, spills and urgent help after an exposure: Cleanliness In-charge.", "غیر محفوظ کچرا، گرا ہوا مواد اور جراثیمی رابطے کے بعد ہنگامی مدد: صفائی انچارج۔"],
          ["Incident reporting form: Facility In-charge.", "واقعے کی رپورٹ کا فارم: فیسیلٹی انچارج۔"]
        ] }
      ]
    },
    {
      id: "practice",
      title: ["Practice: three short scenarios", "مشق: تین مختصر صورتِ حال"],
      blocks: [
        { t: "p", x: ["Read each situation and decide what you would do. Then open the answer to check.", "ہر صورتِ حال پڑھیں اور سوچیں کہ آپ کیا کریں گے۔ پھر جواب کھول کر دیکھیں۔"] },
        { t: "scenario",
          title: ["Scenario A: One more needle", "صورتِ حال الف: بس ایک اور سوئی"],
          situation: ["A sharps container is already at its fill line. A student pushes down the contents to fit in another syringe.", "شارپس کنٹینر پہلے ہی اپنی بھرنے کی لکیر تک پہنچ چکا ہے۔ ایک طالبہ ایک اور سرنج ڈالنے کے لیے اندر کی چیزوں کو نیچے دباتی ہے۔"],
          answer: ["Stop using the container and arrange a replacement. Never compress the contents or force in another item.", "کنٹینر کا استعمال روک دیں اور متبادل کا انتظام کریں۔ اندر کی چیزوں کو کبھی نہ دبائیں اور کوئی اور چیز زبردستی نہ ڈالیں۔"] },
        { t: "scenario",
          title: ["Scenario B: Wrong bin", "صورتِ حال ب: غلط کوڑے دان"],
          situation: ["A used needle is visible among paper towels in a general-waste bin.", "عام کچرے کے ڈبے میں کاغذی تولیوں کے درمیان ایک استعمال شدہ سوئی نظر آ رہی ہے۔"],
          answer: ["Keep others away and tell trained staff. Do not ask the cleaner to reach into the bin and take it out.", "دوسروں کو دور رکھیں اور تربیت یافتہ عملے کو بتائیں۔ صفائی والے سے یہ نہ کہیں کہ ڈبے میں ہاتھ ڈال کر اسے نکالے۔"] },
        { t: "scenario",
          title: ["Scenario C: “I will report it later”", "صورتِ حال ج: ”میں بعد میں بتا دوں گی“"],
          situation: ["A cleaner receives a needlestick injury and plans to finish the shift before seeking help.", "صفائی کے عملے کی ایک رکن کو سوئی چبھ جاتی ہے اور وہ مدد لینے سے پہلے شفٹ مکمل کرنے کا ارادہ کرتی ہے۔"],
          answer: ["Wash the injury, report immediately and get urgent clinical assessment. Small injuries can still need prompt treatment.", "زخم دھوئیں، فوراً اطلاع دیں اور ہنگامی طبی معائنہ کروائیں۔ معمولی چوٹ کو بھی فوری علاج کی ضرورت ہو سکتی ہے۔"] }
      ]
    },
    {
      id: "apply",
      type: "checklist",
      title: ["Apply: check your work area", "عمل: اپنے کام کی جگہ کا جائزہ لیں"],
      blocks: [
        { t: "p", x: ["Look around your work area without opening containers or touching waste. Tick each item once you have checked it. If you find a problem, report it; do not handle unsafe waste yourself.",
                      "ڈبے کھولے یا کچرے کو چھوئے بغیر اپنے کام کی جگہ کا جائزہ لیں۔ ہر چیز کو دیکھ لینے کے بعد اس پر نشان لگا دیں۔ کوئی مسئلہ ملے تو اطلاع دیں؛ غیر محفوظ کچرے کو خود ہاتھ نہ لگائیں۔"] },
        { t: "h", x: ["I have checked whether:", "میں نے دیکھ لیا ہے کہ آیا:"] }
      ],
      items: [
        ["Waste containers are clearly labelled.", "کچرے کے ڈبوں پر واضح لیبل لگے ہیں۔"],
        ["The segregation chart is displayed.", "علیحدگی کا چارٹ آویزاں ہے۔"],
        ["The containers match the waste produced in this area.", "ڈبے اس جگہ پیدا ہونے والے کچرے کے مطابق ہیں۔"],
        ["Sharps containers are available where needed, upright, secure and below the fill limit.", "جہاں ضرورت ہے وہاں شارپس کنٹینر موجود ہیں، سیدھے اور محفوظ رکھے ہیں اور بھرنے کی حد سے نیچے ہیں۔"],
        ["No loose sharps are visible.", "کوئی کھلی نوکیلی چیز نظر نہیں آ رہی۔"],
        ["Bags are not overflowing or leaking.", "تھیلے نہ ابل رہے ہیں اور نہ رِس رہے ہیں۔"],
        ["I know how to request replacement supplies.", "مجھے معلوم ہے کہ متبادل سامان کیسے منگوانا ہے۔"],
        ["I know where to get help after an exposure.", "مجھے معلوم ہے کہ جراثیمی رابطے کے بعد مدد کہاں سے ملے گی۔"]
      ]
    }
  ],
  /* answer: the id of the correct option. The same answer key must also be in the Apps Script (MODULES.m5.key). */
  quiz: [
    { q: ["Who should segregate waste first?", "کچرے کو سب سے پہلے کس نے الگ کرنا چاہیے؟"],
      options: { a: ["The cleaner at the end of the day", "دن کے آخر میں صفائی والا"], b: ["The person producing it, at the point of use", "اسے پیدا کرنے والا شخص، استعمال کی جگہ پر"], c: ["The waste contractor after collection", "جمع کرنے کے بعد ٹھیکیدار"] },
      answer: "b", feedback: ["Segregate where waste is produced.", "کچرے کو وہیں الگ کریں جہاں وہ پیدا ہو۔"] },
    { q: ["Where should a used needle and attached syringe go?", "استعمال شدہ سوئی اور اس سے جڑی سرنج کہاں جانی چاہیے؟"],
      options: { a: ["Directly into an approved sharps container", "سیدھا منظور شدہ شارپس کنٹینر میں"], b: ["Into an infectious-waste bag", "متعدی کچرے کے تھیلے میں"], c: ["Onto a tray for later collection", "بعد میں اٹھانے کے لیے ٹرے پر"] },
      answer: "a", feedback: ["Sharps need a suitable rigid container.", "نوکیلی اشیاء کے لیے مناسب سخت کنٹینر ضروری ہے۔"] },
    { q: ["Before disposing of a used needle, you should routinely:", "استعمال شدہ سوئی پھینکنے سے پہلے معمول کے طور پر آپ کو چاہیے کہ:"],
      options: { a: ["Bend it", "اسے موڑ دیں"], b: ["Recap it", "اس پر ڈھکن چڑھا دیں"], c: ["Avoid handling it and dispose of it safely", "اسے چھیڑنے سے گریز کریں اور محفوظ طریقے سے ٹھکانے لگائیں"] },
      answer: "c", feedback: ["Avoid unnecessary handling of used needles.", "استعمال شدہ سوئیوں کو غیر ضروری طور پر نہ چھیڑیں۔"] },
    { q: ["A sharps container reaches its fill limit. What should happen?", "شارپس کنٹینر اپنی بھرنے کی حد تک پہنچ جاتا ہے۔ کیا ہونا چاہیے؟"],
      options: { a: ["Shake it to make space", "جگہ بنانے کے لیے اسے ہلائیں"], b: ["Close and replace it according to procedure", "طریقۂ کار کے مطابق اسے بند کر کے بدل دیں"], c: ["Empty it into a larger container", "اسے کسی بڑے ڈبے میں خالی کر دیں"] },
      answer: "b", feedback: ["Replace containers before they are overfilled.", "کنٹینر ضرورت سے زیادہ بھرنے سے پہلے بدل دیں۔"] },
    { q: ["A needle is found on the floor. An untrained person should:", "فرش پر ایک سوئی ملتی ہے۔ غیر تربیت یافتہ شخص کو چاہیے کہ:"],
      options: { a: ["Keep others away and call trained staff", "دوسروں کو دور رکھے اور تربیت یافتہ عملے کو بلائے"], b: ["Pick it up with gloved fingers", "دستانے پہن کر انگلیوں سے اٹھا لے"], c: ["Kick it toward a bin", "اسے ٹھوکر مار کر کوڑے دان کی طرف کر دے"] },
      answer: "a", feedback: ["Do not pick up discarded sharps by hand.", "پھینکی گئی نوکیلی اشیاء کو ہاتھ سے نہ اٹھائیں۔"] },
    { q: ["Why are bin labels needed even when colours are used?", "رنگ استعمال ہونے کے باوجود کوڑے دانوں پر لیبل کیوں ضروری ہیں؟"],
      options: { a: ["They are only decorative", "وہ صرف سجاوٹ کے لیے ہیں"], b: ["They replace the need for suitable containers", "وہ مناسب ڈبوں کی ضرورت ختم کر دیتے ہیں"], c: ["They identify the type of waste and help avoid colour mistakes", "وہ کچرے کی قسم بتاتے ہیں اور رنگ کی غلطیوں سے بچاتے ہیں"] },
      answer: "c", feedback: ["Use labels and suitable containers, not colour alone.", "صرف رنگ نہیں، لیبل اور مناسب ڈبے استعمال کریں۔"] },
    { q: ["After a needlestick injury, the right action is to:", "سوئی چبھنے کے بعد درست اقدام یہ ہے کہ:"],
      options: { a: ["Finish work before reporting", "اطلاع دینے سے پہلے کام مکمل کریں"], b: ["Wash, report immediately and get urgent assessment", "دھوئیں، فوراً اطلاع دیں اور ہنگامی معائنہ کروائیں"], c: ["Apply bleach to the wound", "زخم پر بلیچ لگائیں"] },
      answer: "b", feedback: ["An exposure needs immediate action.", "جراثیمی رابطے پر فوری کارروائی ضروری ہے۔"] },
    { q: ["How should a waste handler make room in a full bag?", "کچرا سنبھالنے والا بھرے ہوئے تھیلے میں جگہ کیسے بنائے؟"],
      options: { a: ["Push it down with a hand", "ہاتھ سے نیچے دبائے"], b: ["Compress it with a foot", "پاؤں سے دبائے"], c: ["Do not compress it; close it and use a new bag", "اسے نہ دبائے؛ بند کر کے نیا تھیلا استعمال کرے"] },
      answer: "c", feedback: ["Compressing waste can cause puncture injuries.", "کچرا دبانے سے نوکیلی چیز چبھ سکتی ہے۔"] }
  ]
};
