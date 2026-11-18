/* Module 6: Occupational Exposure and Vaccination.
   Every piece of text is a pair: [English, Urdu].
   URDU IS A DRAFT TRANSLATION - to be reviewed and corrected by Prof. Amin before launch.
   KGMC's exposure contact, clinic and after-hours service were left blank in the source document;
   this module tells learners to go to their supervisor or the Lab In-charge until those are confirmed.
   Block types are the same as in module1.js. */
window.KGMC_CONTENT = window.KGMC_CONTENT || {};
window.KGMC_CONTENT.m6 = {
  version: "1.0",
  title: ["Occupational exposure and vaccination", "پیشہ ورانہ خطرات اور ویکسینیشن"],
  sections: [
    {
      id: "start",
      title: ["Start: “I have been vaccinated. Am I safe?”", "آغاز: ”مجھے ویکسین لگ چکی ہے۔ کیا میں محفوظ ہوں؟“"],
      blocks: [
        { t: "p", x: ["A laboratory assistant gets a needlestick injury while clearing a work area. She remembers having hepatitis B injections several years ago but cannot find her vaccination record. She washes the wound and thinks about going back to work, because she believes vaccination protects her from every infection.",
                      "ایک لیبارٹری اسسٹنٹ کو کام کی جگہ صاف کرتے ہوئے سوئی چبھ جاتی ہے۔ اسے یاد ہے کہ کئی سال پہلے ہیپاٹائٹس بی کے ٹیکے لگے تھے مگر اسے اپنا ویکسینیشن ریکارڈ نہیں مل رہا۔ وہ زخم دھوتی ہے اور کام پر واپس جانے کا سوچتی ہے، کیونکہ اسے لگتا ہے کہ ویکسین اسے ہر انفیکشن سے بچاتی ہے۔"] },
        { t: "think", x: ["Think: Should she still report the injury? Does hepatitis B vaccination protect against hepatitis C or HIV? Why do vaccination records matter?",
                          "سوچیں: کیا اسے پھر بھی چوٹ کی اطلاع دینی چاہیے؟ کیا ہیپاٹائٹس بی کی ویکسین ہیپاٹائٹس سی یا ایچ آئی وی سے بچاتی ہے؟ ویکسینیشن ریکارڈ کیوں اہم ہیں؟"] },
        { t: "key", x: ["Prevent exposure. Report immediately. Get urgent assessment. Keep your vaccination records.",
                        "جراثیمی رابطے سے بچیں۔ فوراً اطلاع دیں۔ ہنگامی معائنہ کروائیں۔ اپنا ویکسینیشن ریکارڈ محفوظ رکھیں۔"] }
      ]
    },
    {
      id: "objectives",
      title: ["What you will learn", "آپ کیا سیکھیں گے"],
      blocks: [
        { t: "p", x: ["After completing this module, you should be able to:", "یہ ماڈیول مکمل کرنے کے بعد آپ اس قابل ہوں گے کہ:"] },
        { t: "ol", items: [
          ["Recognize occupational exposures that need prompt assessment.", "کام کے دوران ہونے والے ان جراثیمی رابطوں کو پہچانیں جن کا فوری معائنہ ضروری ہے۔"],
          ["Describe immediate first aid after a needlestick, cut or splash.", "سوئی چبھنے، کٹ لگنے یا چھینٹے پڑنے کے بعد فوری ابتدائی امداد بیان کر سکیں۔"],
          ["Explain how and where to report an exposure.", "بتا سکیں کہ جراثیمی رابطے کی اطلاع کیسے اور کہاں دینی ہے۔"],
          ["Explain the purpose of hepatitis B vaccination and of checking the response to it.", "ہیپاٹائٹس بی کی ویکسین اور اس کے اثر کی جانچ کا مقصد بیان کر سکیں۔"],
          ["Understand why follow-up, confidentiality and blame-free reporting matter.", "سمجھ سکیں کہ بعد کی نگرانی، رازداری اور بلا الزام اطلاع دینا کیوں اہم ہے۔"]
        ] }
      ]
    },
    {
      id: "what",
      title: ["What is an occupational exposure?", "پیشہ ورانہ جراثیمی رابطہ کیا ہے؟"],
      blocks: [
        { t: "p", x: ["An occupational exposure happens when a person comes into contact with potentially harmful infectious material while working or training.",
                      "پیشہ ورانہ جراثیمی رابطہ تب ہوتا ہے جب کوئی شخص کام یا تربیت کے دوران ممکنہ طور پر نقصان دہ متعدی مواد کے رابطے میں آئے۔"] },
        { t: "table",
          head: [["Exposure", "رابطے کی نوعیت"], ["College example", "کالج کی مثال"]],
          rows: [
            [["Needlestick or sharp injury", "سوئی یا نوکیلی چیز سے چوٹ"], ["A used needle punctures a cleaner’s hand.", "استعمال شدہ سوئی صفائی والے کے ہاتھ میں چبھ جاتی ہے۔"]],
            [["Cut from contaminated equipment", "آلودہ آلات سے کٹ لگنا"], ["A laboratory worker is cut by broken specimen glass.", "لیبارٹری کا کارکن نمونے کے ٹوٹے شیشے سے کٹ جاتا ہے۔"]],
            [["Splash to the eyes, nose or mouth", "آنکھوں، ناک یا منہ میں چھینٹے"], ["Blood or biological material splashes during specimen handling.", "نمونہ سنبھالتے وقت خون یا حیاتیاتی مواد کے چھینٹے پڑتے ہیں۔"]],
            [["Contact with broken skin", "کٹی پھٹی جلد سے رابطہ"], ["Contaminated fluid touches a cut or cracked skin.", "آلودہ مائع کسی کٹ یا پھٹی ہوئی جلد کو لگ جاتا ہے۔"]],
            [["Respiratory exposure", "سانس کے ذریعے رابطہ"], ["Unprotected close contact with someone who has a suspected airborne infection.", "بغیر حفاظت کے کسی ایسے شخص سے قریبی رابطہ جسے ہوا سے پھیلنے والے انفیکشن کا شبہ ہو۔"]]
          ] },
        { t: "note", x: ["Not every contact carries the same risk. If you are unsure, report it; do not decide for yourself that an exposure is harmless.",
                         "ہر رابطے میں خطرہ ایک جیسا نہیں ہوتا۔ یقین نہ ہو تو اطلاع دیں؛ خود یہ فیصلہ نہ کریں کہ رابطہ بے ضرر ہے۔"] },
        { t: "note", x: ["Suspected exposure to infections such as measles, chickenpox or tuberculosis is assessed differently. Report it to the health service; your vaccination history and the type of contact affect what is done.",
                         "خسرہ، چکن پاکس یا تپِ دق جیسے انفیکشن سے مشتبہ رابطے کا جائزہ مختلف طریقے سے لیا جاتا ہے۔ اس کی اطلاع صحت کی خدمت کو دیں؛ آپ کی ویکسینیشن کی تاریخ اور رابطے کی نوعیت پر منحصر ہے کہ کیا کیا جائے گا۔"] }
      ]
    },
    {
      id: "prevent",
      title: ["Prevent exposure before it happens", "رابطہ ہونے سے پہلے ہی بچاؤ کریں"],
      blocks: [
        { t: "p", x: ["Apply the precautions from Modules 4 and 5:", "ماڈیول 4 اور 5 کی احتیاطیں اپنائیں:"] },
        { t: "ul", items: [
          ["Clean your hands at the right times.", "صحیح اوقات پر ہاتھ صاف کریں۔"],
          ["Cover cuts with a suitable waterproof dressing.", "کٹ پر مناسب واٹر پروف پٹی لگائیں۔"],
          ["Choose gloves, protective clothing and eye or face protection to suit the task.", "کام کے مطابق دستانے، حفاظتی لباس اور آنکھوں یا چہرے کی حفاظت کا انتخاب کریں۔"],
          ["Use approved safety devices and procedures.", "منظور شدہ حفاظتی آلات اور طریقے استعمال کریں۔"],
          ["Dispose of sharps immediately, where you use them.", "نوکیلی اشیاء کو فوراً، وہیں ٹھکانے لگائیں جہاں استعمال ہوں۔"],
          ["Do not routinely recap, bend or detach used needles by hand.", "استعمال شدہ سوئیوں پر معمول کے طور پر ڈھکن نہ چڑھائیں، انہیں نہ موڑیں اور ہاتھ سے الگ نہ کریں۔"],
          ["Never search inside waste bags or sharps containers.", "کچرے کے تھیلوں یا شارپس کنٹینر کے اندر کبھی کچھ نہ ٹٹولیں۔"],
          ["Follow departmental procedures for specimens and cadavers.", "نمونوں اور میتوں کے لیے شعبے کے طریقۂ کار پر عمل کریں۔"],
          ["Report missing PPE, unsafe equipment and near misses.", "حفاظتی سامان کی کمی، غیر محفوظ آلات اور بال بال بچنے کے واقعات کی اطلاع دیں۔"],
          ["Complete recommended vaccinations before starting duties with exposure risk, where possible.", "جہاں ممکن ہو، خطرے والے کام شروع کرنے سے پہلے تجویز کردہ ویکسینیشن مکمل کریں۔"]
        ] },
        { t: "key", x: ["Vaccination is an extra layer of protection. It does not replace safe working practices.",
                        "ویکسینیشن حفاظت کی ایک اضافی تہہ ہے۔ یہ محفوظ طریقۂ کار کا متبادل نہیں۔"] }
      ]
    },
    {
      id: "action",
      title: ["Immediate action after an exposure", "رابطے کے بعد فوری اقدام"],
      blocks: [
        { t: "key", x: ["Stop the task safely and act promptly.", "کام کو محفوظ طریقے سے روکیں اور فوراً عمل کریں۔"] },
        { t: "table",
          head: [["Exposure", "رابطے کی نوعیت"], ["Immediate first aid", "فوری ابتدائی امداد"]],
          rows: [
            [["Needlestick or cut", "سوئی چبھنا یا کٹ لگنا"], ["Wash with soap and water.", "صابن اور پانی سے دھوئیں۔"]],
            [["Blood or body fluid on the skin", "جلد پر خون یا جسمانی رطوبت"], ["Wash the area with soap and water.", "اس جگہ کو صابن اور پانی سے دھوئیں۔"]],
            [["Splash to the eyes", "آنکھوں میں چھینٹے"], ["Rinse with clean water or saline.", "صاف پانی یا سیلائن سے دھوئیں۔"]],
            [["Splash to the nose or mouth", "ناک یا منہ میں چھینٹے"], ["Flush thoroughly with water.", "پانی سے اچھی طرح دھوئیں۔"]]
          ] },
        { t: "h", x: ["Then:", "پھر:"] },
        { t: "ol", items: [
          ["Tell the exposure contact immediately.", "فوراً مقررہ رابطہ فرد کو بتائیں۔"],
          ["Get urgent clinical assessment.", "ہنگامی طبی معائنہ کروائیں۔"],
          ["Give the details you have and your vaccination records.", "جو تفصیلات آپ کے پاس ہیں اور اپنا ویکسینیشن ریکارڈ فراہم کریں۔"],
          ["Complete the incident report once urgent care is under way.", "ہنگامی نگہداشت شروع ہو جانے کے بعد واقعے کی رپورٹ مکمل کریں۔"]
        ] },
        { t: "warn", x: ["Do not scrub hard, apply bleach or squeeze the wound. Do not delay care to finish a shift, find paperwork or wait for a supervisor’s permission.",
                         "زور سے نہ رگڑیں، بلیچ نہ لگائیں اور زخم کو نہ دبائیں۔ شفٹ مکمل کرنے، کاغذات ڈھونڈنے یا سپروائزر کی اجازت کے انتظار میں علاج میں تاخیر نہ کریں۔"] },
        { t: "contacts", title: ["Who to tell at KGMC", "کے جی ایم سی میں کسے بتائیں"], items: [
          ["Tell your supervisor or the Lab In-charge straight away. They will direct you to urgent clinical assessment.", "فوراً اپنے سپروائزر یا لیب انچارج کو بتائیں۔ وہ آپ کو ہنگامی طبی معائنے کے لیے بھیجیں گے۔"],
          ["If they cannot be reached, go to the nearest emergency department. A reporting form alone is not urgent care.", "اگر ان سے رابطہ نہ ہو سکے تو قریب ترین ایمرجنسی ڈیپارٹمنٹ جائیں۔ صرف رپورٹ کا فارم بھرنا ہنگامی علاج نہیں ہے۔"],
          ["Find out the after-hours contact now and save it in your phone.", "اوقاتِ کار کے بعد کا رابطہ ابھی معلوم کریں اور اپنے فون میں محفوظ کر لیں۔"]
        ] }
      ]
    },
    {
      id: "assessment",
      title: ["What happens during clinical assessment?", "طبی معائنے کے دوران کیا ہوتا ہے؟"],
      blocks: [
        { t: "h", x: ["The clinician will review:", "معالج ان باتوں کا جائزہ لے گا:"] },
        { t: "ul", items: [
          ["When and how the exposure happened.", "رابطہ کب اور کیسے ہوا۔"],
          ["The material involved and how it entered the body.", "کون سا مواد تھا اور جسم میں کیسے داخل ہوا۔"],
          ["How deep the injury was or how much contact there was.", "زخم کتنا گہرا تھا یا رابطہ کتنا ہوا۔"],
          ["Any information available about the source.", "ماخذ کے بارے میں دستیاب معلومات۔"],
          ["Your vaccination history and previous test results.", "آپ کی ویکسینیشن کی تاریخ اور پچھلے ٹیسٹوں کے نتائج۔"],
          ["Relevant health conditions, pregnancy, medicines and allergies.", "متعلقہ طبی حالتیں، حمل، دوائیں اور الرجی۔"]
        ] },
        { t: "p", x: ["They may arrange first blood tests, preventive treatment and follow-up. A negative first test does not prove that the exposure caused no infection, so follow-up may still be needed.",
                      "وہ ابتدائی خون کے ٹیسٹ، حفاظتی علاج اور بعد کی نگرانی کا انتظام کر سکتے ہیں۔ پہلا ٹیسٹ منفی آنا اس بات کا ثبوت نہیں کہ رابطے سے انفیکشن نہیں ہوا، اس لیے بعد کی نگرانی پھر بھی ضروری ہو سکتی ہے۔"] },
        { t: "note", x: ["Testing the source person is arranged by the clinical service, with consent and confidentiality. Do not personally pressure anyone to reveal a diagnosis or have a test.",
                         "ماخذ شخص کا ٹیسٹ طبی عملہ رضامندی اور رازداری کے ساتھ کرواتا ہے۔ کسی پر ذاتی طور پر تشخیص بتانے یا ٹیسٹ کروانے کے لیے دباؤ نہ ڈالیں۔"] },
        { t: "h", x: ["Different infections need different responses", "مختلف انفیکشن کے لیے مختلف اقدامات"] },
        { t: "table",
          head: [["Infection", "انفیکشن"], ["What you need to know", "آپ کو کیا جاننا چاہیے"]],
          rows: [
            [["Hepatitis B", "ہیپاٹائٹس بی"], ["Your vaccination and documented response guide what is done. Hepatitis B immunoglobulin, vaccination or both may be needed after an exposure.", "آپ کی ویکسینیشن اور اس کے اثر کا ریکارڈ طے کرتا ہے کہ کیا کیا جائے۔ رابطے کے بعد ہیپاٹائٹس بی امیونوگلوبولن، ویکسین یا دونوں کی ضرورت پڑ سکتی ہے۔"]],
            [["Hepatitis C", "ہیپاٹائٹس سی"], ["There is no vaccine and no routinely recommended preventive medicine after exposure. Testing and follow-up allow early detection and treatment.", "اس کی کوئی ویکسین نہیں اور رابطے کے بعد کوئی حفاظتی دوا معمول کے طور پر تجویز نہیں کی جاتی۔ ٹیسٹ اور بعد کی نگرانی سے جلد تشخیص اور علاج ممکن ہوتا ہے۔"]],
            [["HIV", "ایچ آئی وی"], ["Post-exposure prophylaxis (PEP) may be prescribed after a significant exposure. It is urgent, and it is not needed for every incident.", "نمایاں رابطے کے بعد پوسٹ ایکسپوژر پروفیلیکسس (پی ای پی) تجویز کی جا سکتی ہے۔ یہ فوری نوعیت کی ہے اور ہر واقعے میں اس کی ضرورت نہیں ہوتی۔"]]
          ] },
        { t: "warn", x: ["HIV PEP: timing matters. When it is indicated, it should start as soon as possible, ideally within hours and within 72 hours. Do not wait for the source person’s test results before seeking care. The usual course is 28 days. If more than 72 hours have passed, still get urgent assessment.",
                         "ایچ آئی وی پی ای پی: وقت بہت اہم ہے۔ جب اس کی ضرورت ہو تو اسے جلد از جلد شروع ہونا چاہیے، بہتر ہے چند گھنٹوں میں اور 72 گھنٹوں کے اندر۔ علاج کے لیے ماخذ شخص کے ٹیسٹ کے نتائج کا انتظار نہ کریں۔ عام کورس 28 دن کا ہوتا ہے۔ اگر 72 گھنٹے سے زیادہ گزر چکے ہوں تب بھی ہنگامی معائنہ کروائیں۔"] }
      ]
    },
    {
      id: "hepb",
      title: ["Hepatitis B vaccination", "ہیپاٹائٹس بی کی ویکسینیشن"],
      blocks: [
        { t: "p", x: ["Hepatitis B vaccination is especially important for people whose duties may involve blood, biological materials or contaminated sharps, including students, laboratory staff, cleaners and waste handlers.",
                      "ہیپاٹائٹس بی کی ویکسین ان افراد کے لیے خاص طور پر اہم ہے جن کے کام میں خون، حیاتیاتی مواد یا آلودہ نوکیلی اشیاء شامل ہو سکتی ہیں، بشمول طلبہ، لیبارٹری عملہ، صفائی کا عملہ اور کچرا سنبھالنے والے۔"] },
        { t: "h", x: ["What you should do", "آپ کو کیا کرنا چاہیے"] },
        { t: "ol", items: [
          ["Bring any existing vaccination records to the health service.", "اپنا موجودہ ویکسینیشن ریکارڈ صحت کی خدمت کے پاس لے جائیں۔"],
          ["Complete the recommended series for the vaccine being used.", "استعمال ہونے والی ویکسین کا تجویز کردہ کورس مکمل کریں۔"],
          ["Keep a dated record of every dose.", "ہر خوراک کا تاریخ کے ساتھ ریکارڈ رکھیں۔"],
          ["Attend any recommended blood test after vaccination.", "ویکسینیشن کے بعد تجویز کردہ خون کا ٹیسٹ کروائیں۔"],
          ["Get clinical advice if your records are missing or the response is inadequate.", "اگر ریکارڈ نہ ملے یا ویکسین کا اثر ناکافی ہو تو طبی مشورہ لیں۔"]
        ] },
        { t: "note", x: ["A commonly used adult schedule has doses at 0, 1 and 6 months, but schedules differ. If a dose is delayed, the series generally does not need to be restarted; the clinician will arrange completion.",
                         "بالغوں کے لیے عام طور پر 0، 1 اور 6 ماہ پر خوراکیں دی جاتی ہیں، مگر شیڈول مختلف ہو سکتے ہیں۔ اگر کوئی خوراک تاخیر سے لگے تو عموماً پورا کورس دوبارہ شروع کرنے کی ضرورت نہیں؛ معالج اسے مکمل کروا دے گا۔"] },
        { t: "h", x: ["Why check the response?", "اثر کی جانچ کیوں؟"] },
        { t: "p", x: ["For people at occupational risk of blood exposure, an anti-HBs blood test is generally done 1 to 2 months after the final dose. After a documented complete series, a result of 10 mIU/mL or more indicates a protective response. A lower result needs clinical review, not extra doses on your own initiative.",
                      "جن افراد کو کام کے دوران خون سے رابطے کا خطرہ ہو ان کا اینٹی ایچ بی ایس خون کا ٹیسٹ عموماً آخری خوراک کے 1 سے 2 ماہ بعد کیا جاتا ہے۔ مکمل کورس کے ریکارڈ کے بعد 10 mIU/mL یا اس سے زیادہ نتیجہ حفاظتی اثر کی نشاندہی کرتا ہے۔ کم نتیجے پر طبی جائزہ ضروری ہے، اپنی مرضی سے اضافی خوراکیں نہیں۔"] },
        { t: "note", x: ["Healthy people with a documented protective response generally do not need routine boosters or repeat antibody tests.",
                         "جن صحت مند افراد کا حفاظتی اثر ریکارڈ پر ہو انہیں عموماً معمول کی بوسٹر خوراک یا بار بار اینٹی باڈی ٹیسٹ کی ضرورت نہیں ہوتی۔"] },
        { t: "warn", x: ["Hepatitis B vaccination does not protect against hepatitis C or HIV. Report exposures even when you are fully vaccinated.",
                         "ہیپاٹائٹس بی کی ویکسین ہیپاٹائٹس سی یا ایچ آئی وی سے نہیں بچاتی۔ مکمل ویکسین لگی ہو تب بھی رابطے کی اطلاع دیں۔"] }
      ]
    },
    {
      id: "other",
      title: ["Other vaccinations may also be relevant", "دیگر ویکسینیں بھی اہم ہو سکتی ہیں"],
      blocks: [
        { t: "p", x: ["The health service reviews what you need according to your duties, previous immunity, age, health and current Pakistan guidance. Examples for review include:",
                      "صحت کی خدمت آپ کے کام، سابقہ مدافعت، عمر، صحت اور پاکستان کی موجودہ رہنمائی کے مطابق جائزہ لیتی ہے کہ آپ کو کیا درکار ہے۔ جائزے کی مثالیں:"] },
        { t: "ul", items: [
          ["Measles, mumps and rubella.", "خسرہ، کن پیڑے اور روبیلا۔"],
          ["Varicella (chickenpox).", "چکن پاکس۔"],
          ["Seasonal influenza.", "موسمی انفلوئنزا۔"],
          ["Tetanus, diphtheria and pertussis.", "تشنج، خناق اور کالی کھانسی۔"],
          ["COVID-19 and other vaccines where recommended under current local policy.", "کووڈ 19 اور دیگر ویکسینیں جہاں موجودہ مقامی پالیسی کے تحت تجویز ہوں۔"]
        ] },
        { t: "note", x: ["This is a list for clinical review, not an automatic requirement for every employee. Before vaccination, tell the clinician about pregnancy, treatment that weakens the immune system, or a previous serious reaction to a vaccine.",
                         "یہ طبی جائزے کے لیے فہرست ہے، ہر ملازم کے لیے خودکار شرط نہیں۔ ویکسین سے پہلے معالج کو حمل، مدافعت کمزور کرنے والے علاج یا کسی ویکسین سے پہلے ہونے والے شدید ردِعمل کے بارے میں بتائیں۔"] }
      ]
    },
    {
      id: "followup",
      title: ["Follow-up and confidential records", "بعد کی نگرانی اور خفیہ ریکارڈ"],
      blocks: [
        { t: "h", x: ["After an exposure", "رابطے کے بعد"] },
        { t: "ul", items: [
          ["Attend every scheduled review and blood test.", "ہر مقررہ معائنے اور خون کے ٹیسٹ میں جائیں۔"],
          ["Take prescribed treatment as directed.", "تجویز کردہ علاج ہدایت کے مطابق لیں۔"],
          ["Report side effects promptly; do not stop medicine without advice.", "ضمنی اثرات کی فوراً اطلاع دیں؛ مشورے کے بغیر دوا بند نہ کریں۔"],
          ["Ask for a review if new symptoms develop.", "نئی علامات ظاہر ہوں تو معائنہ کروائیں۔"],
          ["Follow the advice you are given about work, blood donation and other precautions.", "کام، خون کے عطیے اور دیگر احتیاطوں کے بارے میں دیے گئے مشورے پر عمل کریں۔"],
          ["Ask for support if the incident causes anxiety.", "اگر واقعہ پریشانی کا باعث بنے تو مدد طلب کریں۔"]
        ] },
        { t: "note", x: ["For example, hepatitis C follow-up, when indicated, may include an RNA test at 3 to 6 weeks and further testing at 4 to 6 months. The clinician should give you a written schedule.",
                         "مثال کے طور پر، ہیپاٹائٹس سی کی نگرانی میں، ضرورت ہو تو، 3 سے 6 ہفتوں پر آر این اے ٹیسٹ اور 4 سے 6 ماہ پر مزید ٹیسٹ شامل ہو سکتے ہیں۔ معالج کو آپ کو تحریری شیڈول دینا چاہیے۔"] },
        { t: "h", x: ["Two separate records", "دو الگ ریکارڈ"] },
        { t: "table",
          head: [["Record", "ریکارڈ"], ["What it contains", "اس میں کیا ہوتا ہے"]],
          rows: [
            [["Training record", "تربیتی ریکارڈ"], ["Modules completed, quiz scores and practical training.", "مکمل کیے گئے ماڈیول، کوئز کے نمبر اور عملی تربیت۔"]],
            [["Confidential occupational-health record", "پیشہ ورانہ صحت کا خفیہ ریکارڈ"], ["Vaccination dates, immunity results, exposure assessment, treatment and follow-up.", "ویکسینیشن کی تاریخیں، مدافعت کے نتائج، رابطے کا جائزہ، علاج اور بعد کی نگرانی۔"]]
          ] },
        { t: "warn", x: ["Never enter medical results into this course or its feedback form. A course certificate does not show your vaccination status or immunity.",
                         "اس کورس یا اس کے فیڈبیک فارم میں کبھی طبی نتائج درج نہ کریں۔ کورس کا سرٹیفکیٹ آپ کی ویکسینیشن یا مدافعت کی حیثیت ظاہر نہیں کرتا۔"] }
      ]
    },
    {
      id: "practice",
      title: ["Practice: three short scenarios", "مشق: تین مختصر صورتِ حال"],
      blocks: [
        { t: "p", x: ["Read each situation and decide what you would do. Then open the answer to check.", "ہر صورتِ حال پڑھیں اور سوچیں کہ آپ کیا کریں گے۔ پھر جواب کھول کر دیکھیں۔"] },
        { t: "scenario",
          title: ["Scenario A: “I was vaccinated years ago”", "صورتِ حال الف: ”مجھے برسوں پہلے ویکسین لگی تھی“"],
          situation: ["A staff member has a needlestick injury but has no vaccination records.", "عملے کے ایک رکن کو سوئی چبھ جاتی ہے مگر اس کے پاس ویکسینیشن کا کوئی ریکارڈ نہیں۔"],
          answer: ["Give immediate first aid and seek urgent assessment. Report the vaccination history as remembered, but do not assume documented protection.", "فوری ابتدائی امداد دیں اور ہنگامی معائنہ کروائیں۔ جو ویکسینیشن یاد ہے وہ بتائیں، مگر یہ فرض نہ کریں کہ حفاظت ریکارڈ سے ثابت ہے۔"] },
        { t: "scenario",
          title: ["Scenario B: Splash during specimen handling", "صورتِ حال ب: نمونہ سنبھالتے ہوئے چھینٹے"],
          situation: ["A student gets a splash in the eye and waits for the practical class to finish.", "ایک طالبہ کی آنکھ میں چھینٹے پڑتے ہیں اور وہ عملی کلاس ختم ہونے کا انتظار کرتی ہے۔"],
          answer: ["Rinse the eye immediately, tell the responsible person and get urgent assessment.", "فوراً آنکھ دھوئیں، ذمہ دار شخص کو بتائیں اور ہنگامی معائنہ کروائیں۔"] },
        { t: "scenario",
          title: ["Scenario C: Fear of blame", "صورتِ حال ج: الزام کا خوف"],
          situation: ["A cleaner hides an injury because she thinks she will be blamed for handling a bag incorrectly.", "صفائی کے عملے کی ایک رکن اپنی چوٹ چھپا لیتی ہے کیونکہ اسے لگتا ہے کہ تھیلا غلط طریقے سے اٹھانے پر اسے قصوروار ٹھہرایا جائے گا۔"],
          answer: ["Encourage immediate care and confidential reporting. Find out how the sharp got into the bag and fix that failure. Reporting should support care and prevention, not blame.", "اسے فوری علاج اور رازدارانہ اطلاع کی ترغیب دیں۔ معلوم کریں کہ نوکیلی چیز تھیلے میں کیسے پہنچی اور اس خرابی کو درست کریں۔ اطلاع دینے کا مقصد علاج اور بچاؤ ہے، الزام نہیں۔"] }
      ]
    },
    {
      id: "apply",
      type: "checklist",
      title: ["Apply: my protection and response checklist", "عمل: میری حفاظت اور ردِعمل کی فہرست"],
      blocks: [
        { t: "p", x: ["Tick each item when it is true for you. If you need a vaccination review, arrange one; it is confidential.",
                      "جب کوئی بات آپ پر صادق آئے تو اس پر نشان لگا دیں۔ اگر آپ کو ویکسینیشن کے جائزے کی ضرورت ہو تو اس کا انتظام کریں؛ یہ خفیہ ہوتا ہے۔"] }
      ],
      items: [
        ["I know the main exposure risks in my duties.", "مجھے اپنے کام میں جراثیمی رابطے کے بڑے خطرات معلوم ہیں۔"],
        ["I know the immediate first-aid steps.", "مجھے فوری ابتدائی امداد کے اقدامات معلوم ہیں۔"],
        ["I know where to get urgent assessment during and after working hours.", "مجھے معلوم ہے کہ اوقاتِ کار کے دوران اور بعد میں ہنگامی معائنہ کہاں سے ملے گا۔"],
        ["I have found my vaccination records or arranged a record review.", "میں نے اپنا ویکسینیشن ریکارڈ تلاش کر لیا ہے یا اس کے جائزے کا انتظام کر لیا ہے۔"],
        ["I understand that vaccination does not replace PPE or safe practices.", "میں سمجھتا/سمجھتی ہوں کہ ویکسینیشن حفاظتی سامان یا محفوظ طریقوں کا متبادل نہیں۔"],
        ["I know how to report an exposure or a near miss.", "مجھے معلوم ہے کہ جراثیمی رابطے یا بال بال بچنے کے واقعے کی اطلاع کیسے دینی ہے۔"]
      ]
    }
  ],
  /* answer: the id of the correct option. The same answer key must also be in the Apps Script (MODULES.m6.key). */
  quiz: [
    { q: ["Which event needs prompt occupational-exposure assessment?", "کس واقعے میں پیشہ ورانہ جراثیمی رابطے کا فوری معائنہ ضروری ہے؟"],
      options: { a: ["Blood splashing into an eye", "آنکھ میں خون کے چھینٹے پڑنا"], b: ["Touching a clean desk", "صاف میز کو چھونا"], c: ["Walking past a laboratory", "لیبارٹری کے پاس سے گزرنا"] },
      answer: "a", feedback: ["Blood in the eye needs prompt assessment.", "آنکھ میں خون جانے پر فوری معائنہ ضروری ہے۔"] },
    { q: ["After a needlestick, the immediate action is to:", "سوئی چبھنے کے بعد فوری اقدام یہ ہے کہ:"],
      options: { a: ["Finish work first", "پہلے کام مکمل کریں"], b: ["Wash with soap and water, report and seek urgent assessment", "صابن اور پانی سے دھوئیں، اطلاع دیں اور ہنگامی معائنہ کروائیں"], c: ["Apply bleach", "بلیچ لگائیں"] },
      answer: "b", feedback: ["First aid, reporting and assessment should be immediate.", "ابتدائی امداد، اطلاع اور معائنہ فوراً ہونا چاہیے۔"] },
    { q: ["A worker who is fully vaccinated against hepatitis B has an exposure. They should:", "ہیپاٹائٹس بی کی مکمل ویکسین لگوانے والے ایک کارکن کو جراثیمی رابطہ ہوتا ہے۔ اسے چاہیے کہ:"],
      options: { a: ["Ignore it", "نظرانداز کر دے"], b: ["Report only if symptoms develop", "صرف علامات ظاہر ہونے پر اطلاع دے"], c: ["Report promptly, because other risks may exist", "فوراً اطلاع دے، کیونکہ دیگر خطرات ہو سکتے ہیں"] },
      answer: "c", feedback: ["Vaccination does not remove all exposure risks.", "ویکسینیشن رابطے کے تمام خطرات ختم نہیں کرتی۔"] },
    { q: ["When HIV PEP is indicated, it should begin:", "جب ایچ آئی وی پی ای پی کی ضرورت ہو تو اسے شروع ہونا چاہیے:"],
      options: { a: ["As soon as possible; do not wait until the 72-hour limit", "جلد از جلد؛ 72 گھنٹے کی حد کا انتظار نہ کریں"], b: ["Only after symptoms appear", "صرف علامات ظاہر ہونے کے بعد"], c: ["At the end of the week", "ہفتے کے آخر میں"] },
      answer: "a", feedback: ["PEP is time-sensitive.", "پی ای پی وقت کی پابند ہے۔"] },
    { q: ["Which statement about hepatitis C is correct?", "ہیپاٹائٹس سی کے بارے میں کون سا بیان درست ہے؟"],
      options: { a: ["Hepatitis B vaccination prevents it", "ہیپاٹائٹس بی کی ویکسین اس سے بچاتی ہے"], b: ["Follow-up testing may be needed; routine preventive medicine after exposure is not recommended", "بعد میں ٹیسٹ کی ضرورت پڑ سکتی ہے؛ رابطے کے بعد معمول کی حفاظتی دوا تجویز نہیں کی جاتی"], c: ["Every exposure needs the same HIV medicines", "ہر رابطے پر ایچ آئی وی کی وہی دوائیں درکار ہیں"] },
      answer: "b", feedback: ["Testing supports early detection and treatment.", "ٹیسٹ سے جلد تشخیص اور علاج ممکن ہوتا ہے۔"] },
    { q: ["A hepatitis B vaccine dose is delayed. The learner should:", "ہیپاٹائٹس بی کی ویکسین کی ایک خوراک میں تاخیر ہو جاتی ہے۔ سیکھنے والے کو چاہیے کہ:"],
      options: { a: ["Automatically restart the whole series", "خود بخود پورا کورس دوبارہ شروع کرے"], b: ["Give up vaccination", "ویکسینیشن چھوڑ دے"], c: ["Ask the clinician to arrange completion; restarting is generally unnecessary", "معالج سے کورس مکمل کروانے کو کہے؛ دوبارہ شروع کرنا عموماً ضروری نہیں"] },
      answer: "c", feedback: ["Delayed doses usually need completion, not restarting.", "تاخیر والی خوراکوں میں عموماً کورس مکمل کیا جاتا ہے، دوبارہ شروع نہیں۔"] },
    { q: ["What is the purpose of anti-HBs testing after vaccination?", "ویکسینیشن کے بعد اینٹی ایچ بی ایس ٹیسٹ کا مقصد کیا ہے؟"],
      options: { a: ["To check the protective antibody response", "حفاظتی اینٹی باڈی کے اثر کی جانچ"], b: ["To test for every bloodborne infection", "خون سے پھیلنے والے ہر انفیکشن کا ٹیسٹ"], c: ["To replace the vaccination record", "ویکسینیشن ریکارڈ کی جگہ لینا"] },
      answer: "a", feedback: ["Anti-HBs shows the response to hepatitis B vaccine.", "اینٹی ایچ بی ایس ہیپاٹائٹس بی ویکسین کے اثر کو ظاہر کرتا ہے۔"] },
    { q: ["Where should vaccination and exposure test results be kept?", "ویکسینیشن اور رابطے کے ٹیسٹوں کے نتائج کہاں رکھے جانے چاہییں؟"],
      options: { a: ["In a public class discussion", "کلاس کی عوامی بحث میں"], b: ["In a confidential occupational-health record", "پیشہ ورانہ صحت کے خفیہ ریکارڈ میں"], c: ["On the course certificate", "کورس کے سرٹیفکیٹ پر"] },
      answer: "b", feedback: ["Medical information must stay confidential.", "طبی معلومات خفیہ رہنی چاہییں۔"] }
  ]
};
