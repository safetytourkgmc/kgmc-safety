/* Module 8: Cleaning, Food and Water Hygiene.
   Every piece of text is a pair: [English, Urdu].
   URDU IS A DRAFT TRANSLATION - to be reviewed and corrected by Prof. Amin before launch.
   KGMC's cleaning schedules, cafeteria procedures, water-testing arrangements and contacts were
   left blank in the source document; this module uses role names until those are confirmed.
   Block types are the same as in module1.js. */
window.KGMC_CONTENT = window.KGMC_CONTENT || {};
window.KGMC_CONTENT.m8 = {
  version: "1.0",
  title: ["Cleaning, food and water hygiene", "صفائی، خوراک اور پانی کی حفظانِ صحت"],
  sections: [
    {
      id: "start",
      title: ["Start: It looks clean, but is it safe?", "آغاز: صاف تو لگتا ہے، مگر کیا محفوظ ہے؟"],
      blocks: [
        { t: "p", x: ["At lunchtime, cooked rice has been standing on the cafeteria counter since morning. A worker wipes the serving table with a cloth that was used around the sink. Nearby, a drinking-water dispenser has a dirty nozzle. The dining area looks tidy.",
                      "دوپہر کے کھانے کے وقت پکے ہوئے چاول صبح سے کیفے ٹیریا کے کاؤنٹر پر رکھے ہیں۔ ایک کارکن کھانے کی میز کو اس کپڑے سے صاف کرتا ہے جو سنک کے آس پاس استعمال ہوا تھا۔ قریب ہی پینے کے پانی کے ڈسپنسر کی ٹونٹی گندی ہے۔ کھانے کی جگہ صاف ستھری نظر آتی ہے۔"] },
        { t: "think", x: ["Think: Which hazards cannot be seen just by looking? What should the cafeteria worker do? What should a student report?",
                          "سوچیں: کون سے خطرات صرف دیکھنے سے نظر نہیں آتے؟ کیفے ٹیریا کے کارکن کو کیا کرنا چاہیے؟ طالبہ کو کس بات کی اطلاع دینی چاہیے؟"] },
        { t: "key", x: ["Clean correctly. Handle food safely. Protect drinking water. Report problems early.",
                        "درست طریقے سے صفائی کریں۔ خوراک کو احتیاط سے سنبھالیں۔ پینے کے پانی کی حفاظت کریں۔ مسائل کی جلد اطلاع دیں۔"] }
      ]
    },
    {
      id: "objectives",
      title: ["What you will learn", "آپ کیا سیکھیں گے"],
      blocks: [
        { t: "p", x: ["After completing this module, you should be able to:", "یہ ماڈیول مکمل کرنے کے بعد آپ اس قابل ہوں گے کہ:"] },
        { t: "ol", items: [
          ["Explain the difference between cleaning and disinfection.", "صفائی اور جراثیم کشی میں فرق بیان کر سکیں۔"],
          ["Describe safe cleaning practices for college facilities.", "کالج کی جگہوں کی صفائی کے محفوظ طریقے بیان کر سکیں۔"],
          ["Apply basic food-hygiene principles.", "خوراک کی حفظانِ صحت کے بنیادی اصول اپنا سکیں۔"],
          ["Recognize unsafe drinking-water conditions.", "پینے کے پانی کی غیر محفوظ حالت کو پہچان سکیں۔"],
          ["Report pests, seepage, damaged surfaces and suspected food- or water-related illness.", "کیڑوں، سیلن، خراب سطحوں اور خوراک یا پانی سے ہونے والی مشتبہ بیماری کی اطلاع دے سکیں۔"],
          ["Identify the responsibilities that go with your role.", "اپنے کردار سے متعلق ذمہ داریوں کو پہچان سکیں۔"]
        ] }
      ]
    },
    {
      id: "roles",
      title: ["Everyone has a role", "ہر ایک کا کردار ہے"],
      blocks: [
        { t: "table",
          head: [["Group", "گروہ"], ["Main responsibilities", "اہم ذمہ داریاں"]],
          rows: [
            [["Students, faculty and office staff", "طلبہ، اساتذہ اور دفتری عملہ"], ["Keep shared areas tidy, use bins, clean your hands and report concerns.", "مشترکہ جگہیں صاف رکھیں، کوڑے دان استعمال کریں، ہاتھ صاف رکھیں اور مسائل کی اطلاع دیں۔"]],
            [["Cleaning staff", "صفائی کا عملہ"], ["Follow cleaning schedules, use products safely and avoid carrying contamination between areas.", "صفائی کے شیڈول پر عمل کریں، اشیاء احتیاط سے استعمال کریں اور آلودگی کو ایک جگہ سے دوسری جگہ نہ لے جائیں۔"]],
            [["Cafeteria staff", "کیفے ٹیریا کا عملہ"], ["Keep up personal hygiene, prevent food contamination and control food temperatures.", "ذاتی صفائی برقرار رکھیں، خوراک کو آلودگی سے بچائیں اور خوراک کا درجۂ حرارت قابو میں رکھیں۔"]],
            [["Hostel staff", "ہاسٹل کا عملہ"], ["Monitor shared kitchens, washrooms, waste areas and drinking-water points.", "مشترکہ باورچی خانوں، غسل خانوں، کچرے کی جگہوں اور پینے کے پانی کے مقامات کی نگرانی کریں۔"]],
            [["Maintenance staff", "مرمت کا عملہ"], ["Repair leaks, damaged surfaces, drainage faults and water-system problems.", "رِساؤ، خراب سطحوں، نکاسی کی خرابیوں اور پانی کے نظام کے مسائل کی مرمت کریں۔"]],
            [["Supervisors and committees", "سپروائزر اور کمیٹیاں"], ["Provide supplies, verify work, review records and make sure problems are corrected.", "سامان فراہم کریں، کام کی تصدیق کریں، ریکارڈ کا جائزہ لیں اور مسائل کی درستگی یقینی بنائیں۔"]]
          ] },
        { t: "note", x: ["Cleanliness is a shared responsibility. Technical repairs, water treatment and specialist cleaning need trained people.",
                         "صفائی سب کی مشترکہ ذمہ داری ہے۔ تکنیکی مرمت، پانی کی صفائی اور خصوصی صفائی کے لیے تربیت یافتہ افراد درکار ہیں۔"] }
      ]
    },
    {
      id: "cleaning",
      title: ["Cleaning and disinfection are different", "صفائی اور جراثیم کشی الگ الگ ہیں"],
      blocks: [
        { t: "ul", items: [
          ["Cleaning removes dirt and contamination using water, detergent and scrubbing.", "صفائی پانی، ڈٹرجنٹ اور رگڑ سے میل اور آلودگی کو ہٹاتی ہے۔"],
          ["Disinfection uses a suitable product to inactivate germs left on a surface.", "جراثیم کشی مناسب محلول سے سطح پر بچ جانے والے جراثیم کو غیر مؤثر کرتی ہے۔"]
        ] },
        { t: "p", x: ["Routine cleaning is usually enough for ordinary campus surfaces. Extra disinfection depends on the risk, for example after contamination linked to illness, or under laboratory procedures.",
                      "کیمپس کی عام سطحوں کے لیے عموماً معمول کی صفائی کافی ہے۔ اضافی جراثیم کشی خطرے پر منحصر ہے، مثلاً بیماری سے جڑی آلودگی کے بعد یا لیبارٹری کے طریقۂ کار کے تحت۔"] },
        { t: "h", x: ["Using products safely", "اشیاء کا محفوظ استعمال"] },
        { t: "ul", items: [
          ["Use the approved product for the surface and the task.", "سطح اور کام کے لیے منظور شدہ چیز استعمال کریں۔"],
          ["Follow the dilution instructions.", "ملاوٹ کی ہدایات پر عمل کریں۔"],
          ["Keep the surface wet for the stated contact time.", "سطح کو بتائے گئے وقت تک گیلا رکھیں۔"],
          ["Wear the PPE required and keep the area ventilated.", "درکار حفاظتی سامان پہنیں اور جگہ کو ہوادار رکھیں۔"],
          ["Store products securely in labelled containers, away from food.", "اشیاء کو لیبل والے ڈبوں میں محفوظ طور پر، خوراک سے دور رکھیں۔"],
          ["Never apply surface disinfectants to skin.", "سطح کے جراثیم کش کبھی جلد پر نہ لگائیں۔"]
        ] },
        { t: "warn", x: ["Never mix bleach with toilet cleaner, acids, ammonia or other cleaning products.",
                         "بلیچ کو کبھی ٹوائلٹ کلینر، تیزاب، امونیا یا صفائی کی دوسری اشیاء کے ساتھ نہ ملائیں۔"] },
        { t: "note", x: ["A strong smell does not prove that cleaning has worked.", "تیز بو اس بات کا ثبوت نہیں کہ صفائی مؤثر رہی۔"] }
      ]
    },
    {
      id: "method",
      title: ["Clean systematically and safely", "ترتیب اور احتیاط سے صفائی کریں"],
      blocks: [
        { t: "h", x: ["For cleaning staff", "صفائی کے عملے کے لیے"] },
        { t: "ol", items: [
          ["Prepare the correct supplies and PPE.", "درست سامان اور حفاظتی سامان تیار کریں۔"],
          ["Check for hazards, including sharps or unknown spills.", "خطرات دیکھیں، بشمول نوکیلی اشیاء یا نامعلوم گرا ہوا مواد۔"],
          ["Work from cleaner areas toward dirtier areas.", "صاف جگہوں سے گندی جگہوں کی طرف کام کریں۔"],
          ["Work from higher surfaces to lower ones, and clean floors last.", "اونچی سطحوں سے نچلی کی طرف جائیں اور فرش سب سے آخر میں صاف کریں۔"],
          ["Pay attention to surfaces that are touched often.", "ان سطحوں پر توجہ دیں جنہیں بار بار چھوا جاتا ہے۔"],
          ["Change cloths, mop heads and solutions as the procedure says and when they are contaminated.", "کپڑے، پوچے اور محلول طریقۂ کار کے مطابق اور آلودہ ہونے پر بدلیں۔"],
          ["Clean and dry reusable equipment before storing it.", "دوبارہ استعمال ہونے والا سامان رکھنے سے پہلے صاف اور خشک کریں۔"],
          ["Remove PPE safely and clean your hands.", "حفاظتی سامان احتیاط سے اتاریں اور ہاتھ صاف کریں۔"]
        ] },
        { t: "table",
          head: [["Area", "جگہ"], ["Particular attention", "خاص توجہ"]],
          rows: [
            [["Classrooms and offices", "کلاس روم اور دفاتر"], ["Desks, door handles, switches and shared equipment.", "میزیں، دروازوں کے ہینڈل، سوئچ اور مشترکہ آلات۔"]],
            [["Washrooms", "غسل خانے"], ["Toilets, taps, handles, soap dispensers and wet floors.", "ٹوائلٹ، نلکے، ہینڈل، صابن کے ڈسپنسر اور گیلے فرش۔"]],
            [["Cafeteria", "کیفے ٹیریا"], ["Surfaces that touch food, serving utensils, sinks and refrigerator handles.", "خوراک سے لگنے والی سطحیں، کھانا ڈالنے کے برتن، سنک اور فریج کے ہینڈل۔"]],
            [["Hostels", "ہاسٹل"], ["Shared bathrooms, kitchen surfaces and drinking-water points.", "مشترکہ غسل خانے، باورچی خانے کی سطحیں اور پینے کے پانی کے مقامات۔"]],
            [["Laboratories", "لیبارٹریاں"], ["The department’s own cleaning and decontamination procedures.", "شعبے کے اپنے صفائی اور آلودگی دور کرنے کے طریقے۔"]],
            [["High surfaces", "اونچی سطحیں"], ["Shelves, vents and other areas in the planned cleaning schedule.", "شیلف، ہوا کے راستے اور صفائی کے شیڈول میں شامل دیگر جگہیں۔"]]
          ] },
        { t: "h", x: ["Important precautions", "اہم احتیاطیں"] },
        { t: "ul", items: [
          ["Keep toilet-cleaning tools separate from those used in classrooms or food areas.", "ٹوائلٹ کی صفائی کا سامان کلاس روم یا کھانے کی جگہوں کے سامان سے الگ رکھیں۔"],
          ["Keep people off wet floors and provide a safe alternative route.", "لوگوں کو گیلے فرش سے دور رکھیں اور محفوظ متبادل راستہ دیں۔"],
          ["Do not stand on chairs or desks to clean high places; use authorized equipment and trained staff.", "اونچی جگہیں صاف کرنے کے لیے کرسیوں یا میزوں پر کھڑے نہ ہوں؛ منظور شدہ سامان اور تربیت یافتہ عملہ استعمال کریں۔"],
          ["Do not treat laboratory spills or loose sharps as ordinary cleaning tasks.", "لیبارٹری میں گرے مواد یا کھلی نوکیلی اشیاء کو صفائی کا عام کام نہ سمجھیں۔"]
        ] }
      ]
    },
    {
      id: "food",
      title: ["Food hygiene: five essential principles", "خوراک کی حفظانِ صحت: پانچ بنیادی اصول"],
      blocks: [
        { t: "p", x: ["The World Health Organization’s five keys are: keep clean; separate raw and cooked; cook thoroughly; keep food at safe temperatures; and use safe water and raw materials.",
                      "عالمی ادارۂ صحت کے پانچ اصول یہ ہیں: صفائی رکھیں؛ کچی اور پکی خوراک الگ رکھیں؛ اچھی طرح پکائیں؛ خوراک کو محفوظ درجۂ حرارت پر رکھیں؛ اور محفوظ پانی اور خام اشیاء استعمال کریں۔"] },
        { t: "h", x: ["1. Keep clean", "1۔ صفائی رکھیں"] },
        { t: "ul", items: [
          ["Wash hands with soap and water before preparing or serving food.", "خوراک تیار کرنے یا پیش کرنے سے پہلے صابن اور پانی سے ہاتھ دھوئیں۔"],
          ["Wash again after using the toilet, handling waste or touching raw food.", "ٹوائلٹ جانے، کچرا اٹھانے یا کچی خوراک کو چھونے کے بعد دوبارہ دھوئیں۔"],
          ["Wear clean work clothing and cover your hair.", "صاف کام کا لباس پہنیں اور بال ڈھانپیں۔"],
          ["Use clean utensils or suitable gloves for ready-to-eat food.", "تیار خوراک کے لیے صاف برتن یا مناسب دستانے استعمال کریں۔"],
          ["Change gloves between tasks; gloves do not replace handwashing.", "ہر کام کے بعد دستانے بدلیں؛ دستانے ہاتھ دھونے کا متبادل نہیں۔"],
          ["Do not handle money and then ready-to-eat food without cleaning your hands and changing gloves.", "پیسے پکڑنے کے بعد ہاتھ صاف کیے اور دستانے بدلے بغیر تیار خوراک کو ہاتھ نہ لگائیں۔"]
        ] },
        { t: "h", x: ["2. Separate raw and cooked food", "2۔ کچی اور پکی خوراک الگ رکھیں"] },
        { t: "ul", items: [
          ["Keep raw meat and poultry away from cooked food and salads.", "کچا گوشت اور مرغی پکی خوراک اور سلاد سے دور رکھیں۔"],
          ["Use separate equipment, or clean and sanitize it between tasks.", "الگ برتن اور اوزار استعمال کریں، یا ہر کام کے درمیان انہیں صاف اور جراثیم سے پاک کریں۔"],
          ["Store raw meat in sealed containers below ready-to-eat foods, so that it cannot drip on them.", "کچا گوشت بند ڈبوں میں تیار خوراک کے نیچے رکھیں تاکہ اس کے قطرے ان پر نہ گریں۔"],
          ["Never put cooked food on an unwashed plate that held raw meat.", "پکی خوراک کبھی اس بغیر دھلی پلیٹ میں نہ رکھیں جس میں کچا گوشت تھا۔"]
        ] },
        { t: "h", x: ["3. Cook thoroughly", "3۔ اچھی طرح پکائیں"] },
        { t: "p", x: ["Use a food thermometer and the approved temperature chart; appearance alone is unreliable. For example, poultry and reheated leftovers should reach 74°C inside. Other foods may have different requirements.",
                      "خوراک کا تھرمامیٹر اور منظور شدہ درجۂ حرارت کا چارٹ استعمال کریں؛ صرف ظاہری شکل قابلِ اعتبار نہیں۔ مثلاً مرغی اور دوبارہ گرم کیا گیا بچا ہوا کھانا اندر سے 74 ڈگری سینٹی گریڈ تک پہنچنا چاہیے۔ دوسری خوراک کے تقاضے مختلف ہو سکتے ہیں۔"] },
        { t: "h", x: ["4. Keep food at safe temperatures", "4۔ خوراک کو محفوظ درجۂ حرارت پر رکھیں"] },
        { t: "table",
          head: [["Situation", "صورتِ حال"], ["Basic rule", "بنیادی اصول"]],
          rows: [
            [["Cold storage", "ٹھنڈا ذخیرہ"], ["Keep perishable food below 5°C, or follow a stricter approved limit.", "جلد خراب ہونے والی خوراک 5 ڈگری سینٹی گریڈ سے نیچے رکھیں، یا اس سے سخت منظور شدہ حد پر عمل کریں۔"]],
            [["Hot holding", "گرم رکھنا"], ["Keep cooked food above 60°C, or follow a stricter approved limit.", "پکی خوراک 60 ڈگری سینٹی گریڈ سے اوپر رکھیں، یا اس سے سخت منظور شدہ حد پر عمل کریں۔"]],
            [["Food at room temperature", "کمرے کے درجۂ حرارت پر خوراک"], ["Do not leave cooked or perishable food out for more than 2 hours.", "پکی یا جلد خراب ہونے والی خوراک 2 گھنٹے سے زیادہ باہر نہ چھوڑیں۔"]],
            [["Very hot surroundings, above 32°C", "بہت گرم ماحول، 32 ڈگری سینٹی گریڈ سے اوپر"], ["Refrigerate perishable food within 1 hour.", "جلد خراب ہونے والی خوراک 1 گھنٹے کے اندر فریج میں رکھیں۔"]],
            [["Thawing", "برف پگھلانا"], ["Use a safe method such as the refrigerator; do not thaw on the counter.", "فریج جیسا محفوظ طریقہ استعمال کریں؛ کاؤنٹر پر نہ پگھلائیں۔"]]
          ] },
        { t: "warn", x: ["Use small, shallow containers to cool large amounts quickly. Do not leave a large pot of rice or curry out until evening. If you cannot be sure of the time or temperature, stop serving it. Reheating does not reliably make mishandled food safe.",
                         "زیادہ مقدار کو جلد ٹھنڈا کرنے کے لیے چھوٹے، کم گہرے برتن استعمال کریں۔ چاول یا سالن کی بڑی دیگچی شام تک باہر نہ چھوڑیں۔ اگر وقت یا درجۂ حرارت کا یقین نہ ہو تو اسے پیش کرنا بند کر دیں۔ دوبارہ گرم کرنے سے غلط طریقے سے رکھی گئی خوراک یقینی طور پر محفوظ نہیں ہوتی۔"] },
        { t: "h", x: ["5. Use safe ingredients and water", "5۔ محفوظ اجزاء اور پانی استعمال کریں"] },
        { t: "ul", items: [
          ["Buy food from approved suppliers.", "خوراک منظور شدہ فراہم کنندگان سے لیں۔"],
          ["Check packaging, expiry dates and storage conditions.", "پیکنگ، میعاد کی تاریخ اور ذخیرے کی حالت دیکھیں۔"],
          ["Use safe water for preparing food, washing produce and making ice.", "خوراک تیار کرنے، سبزی پھل دھونے اور برف بنانے کے لیے محفوظ پانی استعمال کریں۔"],
          ["Prefer pasteurized milk.", "پاسچرائزڈ دودھ کو ترجیح دیں۔"],
          ["Do not use food that is visibly spoiled or mouldy.", "واضح طور پر خراب یا پھپھوندی لگی خوراک استعمال نہ کریں۔"]
        ] }
      ]
    },
    {
      id: "ill",
      title: ["When a food handler is ill", "جب خوراک سنبھالنے والا بیمار ہو"],
      blocks: [
        { t: "key", x: ["A person with vomiting or diarrhoea must tell the supervisor and stop preparing or serving food.",
                        "جسے قے یا دست ہوں اسے سپروائزر کو بتانا چاہیے اور خوراک تیار یا پیش کرنا بند کر دینا چاہیے۔"] },
        { t: "p", x: ["For suspected infectious gastroenteritis, the teaching rule is to stay away from food handling for at least 48 hours after symptoms stop, and longer if clinical advice or the approved policy requires it.",
                      "معدے اور آنتوں کے مشتبہ متعدی انفیکشن میں اصول یہ ہے کہ علامات ختم ہونے کے بعد کم از کم 48 گھنٹے تک خوراک کے کام سے دور رہیں، اور اگر طبی مشورہ یا منظور شدہ پالیسی تقاضا کرے تو اس سے زیادہ۔"] },
        { t: "warn", x: ["Hand sanitizer does not replace washing with soap and water in food handling.",
                         "خوراک کے کام میں ہینڈ سینیٹائزر صابن اور پانی سے ہاتھ دھونے کا متبادل نہیں۔"] },
        { t: "note", x: ["Food allergies: know the ingredients, stop one food getting into another by accident, and never guess when someone asks about an allergen. If unsure, ask the cafeteria supervisor.",
                         "خوراک کی الرجی: اجزاء جانیں، ایک خوراک کو غلطی سے دوسری میں شامل ہونے سے روکیں، اور جب کوئی الرجی پیدا کرنے والی چیز کے بارے میں پوچھے تو کبھی اندازہ نہ لگائیں۔ یقین نہ ہو تو کیفے ٹیریا سپروائزر سے پوچھیں۔"] }
      ]
    },
    {
      id: "water",
      title: ["Protect drinking water", "پینے کے پانی کی حفاظت کریں"],
      blocks: [
        { t: "key", x: ["Clear water is not necessarily safe water.", "شفاف پانی ضروری نہیں کہ محفوظ پانی ہو۔"] },
        { t: "img", src: "images/m8-drinking-water-station-main-building-kgmc.jpg",
          alt: ["A steel drinking-water cooler in the main building veranda at KGMC", "کے جی ایم سی کی مرکزی عمارت کے برآمدے میں اسٹیل کا واٹر کولر"],
          cap: ["A drinking-water point in the main building. Do not touch the taps with hands, cups or bottle openings.", "مرکزی عمارت میں پینے کے پانی کا ایک مقام۔ نلکوں کو ہاتھ، گلاس یا بوتل کے منہ سے نہ چھوئیں۔"] },
        { t: "h", x: ["For everyone", "سب کے لیے"] },
        { t: "ul", items: [
          ["Drink only from designated safe sources.", "صرف مقررہ محفوظ ذرائع سے پانی پئیں۔"],
          ["Do not touch dispenser nozzles with hands, cups or bottle openings.", "ڈسپنسر کی ٹونٹی کو ہاتھ، گلاس یا بوتل کے منہ سے نہ چھوئیں۔"],
          ["Avoid sharing drinking cups.", "ایک ہی گلاس مل کر استعمال کرنے سے گریز کریں۔"],
          ["Report dirty dispensers, unusual appearance or smell, leaks and damaged covers.", "گندے ڈسپنسر، غیر معمولی رنگت یا بو، رِساؤ اور ٹوٹے ڈھکن کی اطلاع دیں۔"],
          ["Do not assume that a filter guarantees safety.", "یہ فرض نہ کریں کہ فلٹر لگا ہونا حفاظت کی ضمانت ہے۔"]
        ] },
        { t: "h", x: ["For responsible staff", "ذمہ دار عملے کے لیے"] },
        { t: "ul", items: [
          ["Keep storage tanks and containers properly covered.", "پانی کی ٹینکیاں اور برتن اچھی طرح ڈھکے رکھیں۔"],
          ["Maintain dispensers, filters and plumbing on an approved schedule.", "ڈسپنسر، فلٹر اور پائپ لائن کی دیکھ بھال منظور شدہ شیڈول کے مطابق کریں۔"],
          ["Use clean, food-grade containers; never reuse chemical containers.", "صاف، خوراک کے لیے موزوں برتن استعمال کریں؛ کیمیکل کے ڈبے کبھی دوبارہ استعمال نہ کریں۔"],
          ["Dispense through a tap or by pouring, never by dipping hands or cups into stored water.", "پانی نلکے سے یا انڈیل کر دیں، کبھی ہاتھ یا گلاس ذخیرہ شدہ پانی میں ڈبو کر نہیں۔"],
          ["Keep maintenance and cleaning records.", "دیکھ بھال اور صفائی کا ریکارڈ رکھیں۔"],
          ["Arrange a professional investigation if contamination is suspected.", "آلودگی کا شبہ ہو تو ماہرانہ تحقیق کا انتظام کریں۔"]
        ] },
        { t: "h", x: ["Water testing", "پانی کی جانچ"] },
        { t: "p", x: ["Drinking water should be tested on a planned schedule, at least every three months, covering sources, storage and drinking points. E. coli should not be detectable in a 100 mL sample; if it is found, the supply needs immediate investigation. A good E. coli result alone does not show that every chemical hazard is absent.",
                      "پینے کے پانی کی جانچ طے شدہ شیڈول کے مطابق، کم از کم ہر تین ماہ بعد، ہونی چاہیے جس میں ذرائع، ذخیرہ اور پینے کے مقامات شامل ہوں۔ 100 ملی لیٹر کے نمونے میں ای کولائی نہیں ملنا چاہیے؛ اگر مل جائے تو فوری تحقیق ضروری ہے۔ صرف ای کولائی کا اچھا نتیجہ یہ ثابت نہیں کرتا کہ کوئی کیمیائی خطرہ موجود نہیں۔"] },
        { t: "note", x: ["Extra testing may be needed after flooding, major repairs, suspected contamination or reports of illness. Do not wait for the next routine test.",
                         "سیلاب، بڑی مرمت، مشتبہ آلودگی یا بیماری کی اطلاع کے بعد اضافی جانچ کی ضرورت پڑ سکتی ہے۔ اگلی معمول کی جانچ کا انتظار نہ کریں۔"] },
        { t: "h", x: ["If contamination is suspected", "اگر آلودگی کا شبہ ہو"] },
        { t: "ol", items: [
          ["Tell the responsible officer immediately.", "فوراً ذمہ دار افسر کو بتائیں۔"],
          ["Stop using the affected supply for drinking and preparing food.", "متاثرہ پانی کو پینے اور خوراک کی تیاری کے لیے استعمال کرنا بند کریں۔"],
          ["Provide an approved safe alternative and clear notices.", "منظور شدہ محفوظ متبادل اور واضح نوٹس فراہم کریں۔"],
          ["Investigate, correct and retest as directed.", "ہدایت کے مطابق تحقیق، درستگی اور دوبارہ جانچ کریں۔"],
          ["Resume use only after authorized clearance.", "مجاز منظوری کے بعد ہی استعمال دوبارہ شروع کریں۔"]
        ] },
        { t: "warn", x: ["Boiling deals with many germs but does not make chemically contaminated water safe. Follow the specific advice given, not a general “boil it” instruction.",
                         "ابالنے سے بہت سے جراثیم ختم ہو جاتے ہیں مگر کیمیائی طور پر آلودہ پانی محفوظ نہیں ہوتا۔ دی گئی مخصوص ہدایت پر عمل کریں، محض ”ابال لو“ کی عمومی ہدایت پر نہیں۔"] }
      ]
    },
    {
      id: "pests",
      title: ["Pests, seepage and damaged surfaces", "کیڑے، سیلن اور خراب سطحیں"],
      blocks: [
        { t: "h", x: ["Report:", "اطلاع دیں:"] },
        { t: "ul", items: [
          ["Rodents, cockroaches, flies, droppings or damaged food packaging.", "چوہے، لال بیگ، مکھیاں، ان کا فضلہ یا خوراک کی کٹی پھٹی پیکنگ۔"],
          ["Standing water, blocked drains and leaking pipes.", "کھڑا پانی، بند نالیاں اور رِستے ہوئے پائپ۔"],
          ["Ceiling seepage, loose ceiling material or damaged walls.", "چھت کی سیلن، چھت کا ڈھیلا مواد یا خراب دیواریں۔"],
          ["Cracked surfaces that are hard to clean.", "دراڑ والی سطحیں جنہیں صاف کرنا مشکل ہو۔"],
          ["Uncovered food and overflowing waste bins.", "کھلی خوراک اور ابلتے ہوئے کوڑے دان۔"]
        ] },
        { t: "h", x: ["Daily prevention", "روزانہ بچاؤ"] },
        { t: "ul", items: [
          ["Keep food covered and properly stored.", "خوراک ڈھکی ہوئی اور درست طریقے سے رکھی ہو۔"],
          ["Remove food waste promptly.", "خوراک کا کچرا فوراً ہٹائیں۔"],
          ["Keep bins closed and waste areas clean.", "کوڑے دان بند اور کچرے کی جگہیں صاف رکھیں۔"],
          ["Report gaps around doors, windows and pipes.", "دروازوں، کھڑکیوں اور پائپوں کے گرد خلا کی اطلاع دیں۔"],
          ["Keep drains working and remove standing water.", "نالیاں چالو رکھیں اور کھڑا پانی ختم کریں۔"]
        ] },
        { t: "warn", x: ["Pest control is done by competent people under the college’s approved arrangements. Cafeteria workers should not spray pesticides near exposed food or utensils.",
                         "کیڑوں کا خاتمہ کالج کے منظور شدہ انتظامات کے تحت اہل افراد کرتے ہیں۔ کیفے ٹیریا کے کارکن کھلی خوراک یا برتنوں کے قریب کیڑے مار دوا نہ چھڑکیں۔"] },
        { t: "note", x: ["Do not simply paint over seepage. The source of the moisture and any damaged material need assessment and repair. Keep people away where material could fall.",
                         "سیلن پر محض رنگ نہ کر دیں۔ نمی کی وجہ اور خراب مواد کا جائزہ اور مرمت ضروری ہے۔ جہاں مواد گر سکتا ہو وہاں لوگوں کو دور رکھیں۔"] }
      ]
    },
    {
      id: "illness",
      title: ["Suspected food- or water-related illness", "خوراک یا پانی سے ہونے والی مشتبہ بیماری"],
      blocks: [
        { t: "p", x: ["If several people develop vomiting or diarrhoea after a shared meal or water source:", "اگر ایک ہی کھانے یا پانی کے ذریعے کے بعد کئی افراد کو قے یا دست ہو جائیں:"] },
        { t: "ul", items: [
          ["Tell the college’s health or infection-control contact promptly.", "کالج کے صحت یا انفیکشن کنٹرول کے رابطہ فرد کو فوراً بتائیں۔"],
          ["Arrange clinical assessment for the people affected.", "متاثرہ افراد کے طبی معائنے کا انتظام کریں۔"],
          ["Stop serving the suspected food or using the suspected water until it has been assessed.", "جائزہ ہونے تک مشتبہ خوراک پیش کرنا یا مشتبہ پانی استعمال کرنا بند کریں۔"],
          ["Keep the suspected food and relevant records for the authorized investigation; do not serve it, taste it or collect samples yourself.", "مشتبہ خوراک اور متعلقہ ریکارڈ مجاز تحقیق کے لیے محفوظ رکھیں؛ اسے پیش نہ کریں، نہ چکھیں اور نہ خود نمونے لیں۔"],
          ["Record what was eaten or drunk, when symptoms began and who is affected.", "لکھیں کہ کیا کھایا یا پیا گیا، علامات کب شروع ہوئیں اور کون متاثر ہے۔"],
          ["Follow instructions for notification, cleaning and reopening.", "اطلاع، صفائی اور دوبارہ کھولنے کی ہدایات پر عمل کریں۔"]
        ] },
        { t: "warn", x: ["Do not wait for laboratory confirmation before reporting a possible cluster. Protect the privacy of the people affected.",
                         "ممکنہ اجتماعی بیماری کی اطلاع دینے کے لیے لیبارٹری کی تصدیق کا انتظار نہ کریں۔ متاثرہ افراد کی رازداری کا خیال رکھیں۔"] },
        { t: "contacts", title: ["Who to tell at KGMC", "کے جی ایم سی میں کسے بتائیں"], items: [
          ["Cleaning problems: the Cleanliness In-charge.", "صفائی کے مسائل: صفائی انچارج۔"],
          ["Food concerns: the cafeteria supervisor.", "خوراک سے متعلق خدشات: کیفے ٹیریا سپروائزر۔"],
          ["Leaks, seepage and damaged surfaces: the Facility In-charge.", "رِساؤ، سیلن اور خراب سطحیں: فیسیلٹی انچارج۔"],
          ["Suspected illness from food or water: the Safety Tour and Infection Control Committee.", "خوراک یا پانی سے مشتبہ بیماری: سیفٹی ٹور اینڈ انفیکشن کنٹرول کمیٹی۔"]
        ] }
      ]
    },
    {
      id: "practice",
      title: ["Practice: three short scenarios", "مشق: تین مختصر صورتِ حال"],
      blocks: [
        { t: "p", x: ["Read each situation and decide what you would do. Then open the answer to check.", "ہر صورتِ حال پڑھیں اور سوچیں کہ آپ کیا کریں گے۔ پھر جواب کھول کر دیکھیں۔"] },
        { t: "scenario",
          title: ["Scenario A: One cloth for every surface", "صورتِ حال الف: ہر سطح کے لیے ایک ہی کپڑا"],
          situation: ["A cleaner uses the washroom cloth to wipe a cafeteria table.", "صفائی والا غسل خانے کے کپڑے سے کیفے ٹیریا کی میز صاف کرتا ہے۔"],
          answer: ["Stop the practice, replace the cloth and clean the table again using the food-area procedure. Review how cleaning equipment is kept separate.", "یہ طریقہ روکیں، کپڑا بدلیں اور میز کو کھانے کی جگہ کے طریقۂ کار کے مطابق دوبارہ صاف کریں۔ صفائی کا سامان الگ رکھنے کے انتظام کا جائزہ لیں۔"] },
        { t: "scenario",
          title: ["Scenario B: Rice on the counter", "صورتِ حال ب: کاؤنٹر پر چاول"],
          situation: ["Cooked rice has been left at room temperature for five hours. A worker proposes reheating it for lunch.", "پکے ہوئے چاول پانچ گھنٹے سے کمرے کے درجۂ حرارت پر رکھے ہیں۔ ایک کارکن انہیں دوپہر کے کھانے کے لیے دوبارہ گرم کرنے کی تجویز دیتا ہے۔"],
          answer: ["Do not serve it. Follow the disposal procedure and review how food is cooked, cooled and held.", "اسے پیش نہ کریں۔ تلفی کے طریقۂ کار پر عمل کریں اور پکانے، ٹھنڈا کرنے اور رکھنے کے انتظامات کا جائزہ لیں۔"] },
        { t: "scenario",
          title: ["Scenario C: A bad water report", "صورتِ حال ج: پانی کی خراب رپورٹ"],
          situation: ["A routine drinking-water sample contains E. coli. The water looks clear.", "پینے کے پانی کے معمول کے نمونے میں ای کولائی ملتا ہے۔ پانی شفاف نظر آتا ہے۔"],
          answer: ["Stop use of the affected supply, provide safe alternative water, investigate, and follow the corrective-action and clearance procedures.", "متاثرہ پانی کا استعمال روکیں، محفوظ متبادل پانی فراہم کریں، تحقیق کریں اور درستگی اور منظوری کے طریقۂ کار پر عمل کریں۔"] }
      ]
    },
    {
      id: "apply",
      type: "checklist",
      title: ["Apply: check one shared area", "عمل: ایک مشترکہ جگہ کا جائزہ لیں"],
      blocks: [
        { t: "p", x: ["Look at a cafeteria, hostel kitchen, washroom or drinking-water point without entering restricted areas. Tick each item once you have checked it, and report any concern. Do not taste suspect food or water to judge its safety.",
                      "ممنوعہ جگہوں میں داخل ہوئے بغیر کسی کیفے ٹیریا، ہاسٹل کے باورچی خانے، غسل خانے یا پینے کے پانی کے مقام کا جائزہ لیں۔ ہر چیز کو دیکھ لینے کے بعد اس پر نشان لگائیں اور کسی بھی خدشے کی اطلاع دیں۔ مشتبہ خوراک یا پانی کو جانچنے کے لیے نہ چکھیں۔"] },
        { t: "h", x: ["I have checked whether:", "میں نے دیکھ لیا ہے کہ آیا:"] }
      ],
      items: [
        ["Floors and frequently touched surfaces are clean.", "فرش اور بار بار چھوئی جانے والی سطحیں صاف ہیں۔"],
        ["Cleaning tools are kept separate for each area.", "صفائی کا سامان ہر جگہ کے لیے الگ رکھا گیا ہے۔"],
        ["Soap and a way to dry hands are available.", "صابن اور ہاتھ خشک کرنے کا انتظام موجود ہے۔"],
        ["Food is covered and protected.", "خوراک ڈھکی ہوئی اور محفوظ ہے۔"],
        ["Drinking-water nozzles and the area around them are clean.", "پینے کے پانی کی ٹونٹیاں اور ان کے آس پاس کی جگہ صاف ہے۔"],
        ["Waste bins are covered and not overflowing.", "کوڑے دان ڈھکے ہیں اور ابل نہیں رہے۔"],
        ["No pests, seepage or damaged surfaces are visible.", "کوئی کیڑے، سیلن یا خراب سطح نظر نہیں آ رہی۔"],
        ["I know how to report a hygiene concern.", "مجھے معلوم ہے کہ صفائی کے مسئلے کی اطلاع کیسے دینی ہے۔"]
      ]
    }
  ],
  /* answer: the id of the correct option. The same answer key must also be in the Apps Script (MODULES.m8.key). */
  quiz: [
    { q: ["A disinfectant’s contact time is:", "جراثیم کش کے رابطے کا وقت کیا ہے؟"],
      options: { a: ["The time spent opening the bottle", "بوتل کھولنے میں لگنے والا وقت"], b: ["The time the surface must stay wet, as directed", "ہدایت کے مطابق وہ وقت جس میں سطح گیلی رہنی چاہیے"], c: ["Always one minute", "ہمیشہ ایک منٹ"] },
      answer: "b", feedback: ["Follow the product’s wet-contact time.", "چیز پر درج گیلے رابطے کے وقت پر عمل کریں۔"] },
    { q: ["Which cleaning practice is appropriate?", "صفائی کا کون سا طریقہ درست ہے؟"],
      options: { a: ["Work from cleaner to dirtier areas", "صاف جگہوں سے گندی جگہوں کی طرف کام کرنا"], b: ["Use one cloth for toilets and dining tables", "ٹوائلٹ اور کھانے کی میزوں کے لیے ایک ہی کپڑا استعمال کرنا"], c: ["Mix bleach and toilet cleaner", "بلیچ اور ٹوائلٹ کلینر ملانا"] },
      answer: "a", feedback: ["This stops contamination moving into cleaner areas.", "اس سے آلودگی صاف جگہوں میں نہیں پھیلتی۔"] },
    { q: ["Raw chicken should be stored:", "کچی مرغی کہاں رکھنی چاہیے؟"],
      options: { a: ["Above uncovered salads", "کھلے سلاد کے اوپر"], b: ["Beside cooked food without packaging", "پکی خوراک کے ساتھ بغیر پیکنگ کے"], c: ["In a sealed container below ready-to-eat food", "بند ڈبے میں تیار خوراک کے نیچے"] },
      answer: "c", feedback: ["This stops raw-food drips reaching ready-to-eat food.", "اس سے کچی خوراک کے قطرے تیار خوراک پر نہیں گرتے۔"] },
    { q: ["Cooked rice has stood at room temperature for five hours. You should:", "پکے ہوئے چاول پانچ گھنٹے سے کمرے کے درجۂ حرارت پر رکھے ہیں۔ آپ کو چاہیے کہ:"],
      options: { a: ["Taste it to check it is safe", "چکھ کر دیکھیں کہ محفوظ ہیں"], b: ["Stop serving it and follow the disposal procedure", "انہیں پیش کرنا بند کریں اور تلفی کے طریقۂ کار پر عمل کریں"], c: ["Reheat it and assume it is safe", "دوبارہ گرم کریں اور محفوظ سمجھ لیں"] },
      answer: "b", feedback: ["Reheating does not reliably correct unsafe storage.", "دوبارہ گرم کرنا غیر محفوظ ذخیرے کو یقینی طور پر درست نہیں کرتا۔"] },
    { q: ["A food handler has vomiting and diarrhoea. They should:", "خوراک سنبھالنے والے کو قے اور دست ہیں۔ اسے چاہیے کہ:"],
      options: { a: ["Report the illness and stop handling food", "بیماری کی اطلاع دے اور خوراک کا کام روک دے"], b: ["Continue if wearing gloves", "دستانے پہن کر کام جاری رکھے"], c: ["Use sanitizer and continue working", "سینیٹائزر لگا کر کام جاری رکھے"] },
      answer: "a", feedback: ["Ill food handlers can contaminate food.", "بیمار کارکن خوراک کو آلودہ کر سکتے ہیں۔"] },
    { q: ["Which statement about drinking water is correct?", "پینے کے پانی کے بارے میں کون سا بیان درست ہے؟"],
      options: { a: ["Clear water is always safe", "شفاف پانی ہمیشہ محفوظ ہوتا ہے"], b: ["A filter removes every hazard for ever", "فلٹر ہر خطرہ ہمیشہ کے لیے ختم کر دیتا ہے"], c: ["Safety needs protection, maintenance and testing", "حفاظت کے لیے بچاؤ، دیکھ بھال اور جانچ ضروری ہے"] },
      answer: "c", feedback: ["Appearance and filters alone do not prove safety.", "صرف ظاہری شکل اور فلٹر حفاظت ثابت نہیں کرتے۔"] },
    { q: ["E. coli is detected in a drinking-water sample. You should:", "پینے کے پانی کے نمونے میں ای کولائی ملتا ہے۔ آپ کو چاہیے کہ:"],
      options: { a: ["Wait for the next routine test", "اگلی معمول کی جانچ کا انتظار کریں"], b: ["Stop use of the affected supply and start corrective action", "متاثرہ پانی کا استعمال روکیں اور درستگی کے اقدامات شروع کریں"], c: ["Ignore it if nobody complains", "کوئی شکایت نہ کرے تو نظرانداز کریں"] },
      answer: "b", feedback: ["Contamination needs immediate action.", "آلودگی پر فوری کارروائی ضروری ہے۔"] },
    { q: ["Ceiling seepage above a food-preparation area should be:", "خوراک تیار کرنے کی جگہ کے اوپر چھت کی سیلن کو:"],
      options: { a: ["Reported for assessment and repair, with the area protected", "جائزے اور مرمت کے لیے رپورٹ کیا جائے اور جگہ کو محفوظ کیا جائے"], b: ["Covered with paint only", "صرف رنگ سے چھپا دیا جائے"], c: ["Ignored until the next inspection", "اگلے معائنے تک نظرانداز کیا جائے"] },
      answer: "a", feedback: ["Deal with the cause and protect people and food.", "وجہ کو دور کریں اور لوگوں اور خوراک کو محفوظ رکھیں۔"] }
  ]
};
