/* Module 1: Fire Safety and Safe Evacuation.
   Every piece of text is a pair: [English, Urdu].
   URDU IS A DRAFT TRANSLATION - to be reviewed and corrected by Dr Amin before launch.

   Block types: p (paragraph), h (sub-heading), key (key message), warn (warning), note,
   think (reflection prompt), ul / ol (lists), table, img (add cmd:true to show the caption as a bold command), scenario, contacts,
   reveal (a hidden list of answers: {t:"reveal", label:[..], items:[..]}),
   media ({t:"media", kind:"video" or "audio", src:"media/file.mp4", title:[..], transcript:[..]}).
   A media block with an empty src is not shown, so placeholders are safe to leave in. */
window.KGMC_CONTENT = window.KGMC_CONTENT || {};
window.KGMC_CONTENT.m1 = {
  version: "1.0",
  title: ["Fire safety and safe evacuation", "آگ سے حفاظت اور محفوظ انخلا"],
  sections: [
    {
      id: "start",
      title: ["Start: What would you do?", "آغاز: آپ کیا کریں گے؟"],
      blocks: [
        { t: "img", src: "images/kgmc-main-building-stairs.jpg",
          alt: ["Ground-floor corridor at KGMC with a staircase and a red EXIT sign on the wall", "کے جی ایم سی کی راہداری جس میں سیڑھیاں اور دیوار پر سرخ ایگزٹ کا نشان ہے"],
          cap: ["A corridor in the main building, KGMC.", "مرکزی عمارت کی ایک راہداری، کے جی ایم سی۔"] },
        { t: "media", kind: "audio", src: "", title: ["Listen to this situation", "یہ صورتِ حال سنیں"] },
        { t: "p", x: ["You are working or studying on the first floor. You notice smoke coming from a nearby storeroom. A colleague wants to open the door to investigate. Another person starts collecting personal belongings.",
                      "آپ پہلی منزل پر کام کر رہے ہیں یا پڑھ رہے ہیں۔ آپ دیکھتے ہیں کہ قریبی اسٹور روم سے دھواں نکل رہا ہے۔ ایک ساتھی دروازہ کھول کر دیکھنا چاہتا ہے کہ اندر کیا ہے۔ ایک اور شخص اپنا ذاتی سامان سمیٹنے لگتا ہے۔"] },
        { t: "img", src: "images/illus-opening-smoke.svg",
          alt: ["Illustration: smoke coming from a storeroom door; one person reaches for the handle and another picks up a bag", "خاکہ: اسٹور روم کے دروازے سے دھواں نکل رہا ہے؛ ایک شخص ہینڈل کی طرف ہاتھ بڑھا رہا ہے اور دوسرا بیگ اٹھا رہا ہے"],
          cmd: true, cap: ["Smoke from the storeroom. What would you do?", "اسٹور روم سے دھواں۔ آپ کیا کریں گے؟"] },
        { t: "think", x: ["Think: What should you do first?", "سوچیں: آپ کو سب سے پہلے کیا کرنا چاہیے؟"] },
        { t: "key", x: ["Raise the alarm. Leave safely. Report to the assembly area. Stay outside.",
                        "الارم بجائیں۔ محفوظ طریقے سے باہر نکلیں۔ اجتماع کے مقام پر پہنچ کر حاضری دیں۔ باہر ہی رہیں۔"] }
      ]
    },
    {
      id: "objectives",
      title: ["What you will learn", "آپ کیا سیکھیں گے"],
      blocks: [
        { t: "p", x: ["After completing this module, you should be able to:", "یہ ماڈیول مکمل کرنے کے بعد آپ اس قابل ہوں گے کہ:"] },
        { t: "ol", items: [
          ["Recognize common fire hazards and report them.", "آگ کے عام خطرات کو پہچانیں اور ان کی اطلاع دیں۔"],
          ["Explain how to raise the alarm and report a fire.", "بتا سکیں کہ الارم کیسے بجایا جائے اور آگ کی اطلاع کیسے دی جائے۔"],
          ["Identify your nearest safe exit, an alternative exit and your designated assembly area.", "اپنے قریب ترین محفوظ راستے، متبادل راستے اور مقررہ اجتماع کے مقام کی نشاندہی کر سکیں۔"],
          ["Describe safe evacuation, including arrangements for people needing assistance.", "محفوظ انخلا کا طریقہ بیان کر سکیں، بشمول ان افراد کے انتظامات جنہیں مدد کی ضرورت ہو۔"],
          ["Explain when to evacuate instead of attempting to use a fire extinguisher.", "بتا سکیں کہ آگ بجھانے والا آلہ استعمال کرنے کی کوشش کے بجائے کب عمارت خالی کرنی چاہیے۔"]
        ] }
      ]
    },
    {
      id: "prevent",
      title: ["Preventing fires", "آگ سے بچاؤ"],
      blocks: [
        { t: "key", x: ["Fire safety is everyone’s responsibility.", "آگ سے حفاظت ہر ایک کی ذمہ داری ہے۔"] },
        { t: "table",
          head: [["What to look for", "کن چیزوں پر نظر رکھیں"], ["What you should do", "آپ کو کیا کرنا چاہیے"]],
          rows: [
            [["Damaged wires, sparking sockets or overheating equipment", "خراب تاریں، چنگاریاں دینے والے ساکٹ یا ضرورت سے زیادہ گرم ہونے والے آلات"],
             ["Stop using the equipment if safe and report it. Do not attempt repairs.", "اگر محفوظ ہو تو آلے کا استعمال روک دیں اور اطلاع دیں۔ خود مرمت کی کوشش نہ کریں۔"]],
            [["Overloaded sockets or unsafe extension connections", "ضرورت سے زیادہ بوجھ والے ساکٹ یا غیر محفوظ ایکسٹینشن کنکشن"],
             ["Report the hazard and use only approved electrical arrangements.", "خطرے کی اطلاع دیں اور صرف منظور شدہ برقی انتظامات استعمال کریں۔"]],
            [["Boxes or furniture blocking exits and stairs", "اخراج کے راستوں اور سیڑھیوں میں رکاوٹ بننے والے ڈبے یا فرنیچر"],
             ["Keep escape routes clear; report obstructions immediately.", "نکلنے کے راستے صاف رکھیں؛ رکاوٹوں کی فوراً اطلاع دیں۔"]],
            [["Fire doors held open", "فائر ڈور (آگ روکنے والے دروازے) جنہیں کھلا اٹکا دیا گیا ہو"],
             ["Do not wedge fire doors open.", "فائر ڈور کو کسی چیز سے اٹکا کر کھلا نہ رکھیں۔"]],
            [["Paper, chemicals or other combustible materials near heat sources", "حرارت کے ذرائع کے قریب کاغذ، کیمیکل یا دیگر آتش گیر اشیاء"],
             ["Report unsafe storage; follow departmental storage procedures.", "غیر محفوظ ذخیرے کی اطلاع دیں؛ اپنے شعبے کے ذخیرہ کرنے کے طریقۂ کار پر عمل کریں۔"]],
            [["Missing, obstructed or visibly damaged fire equipment", "آگ بجھانے کا سامان جو غائب ہو، جس تک رسائی میں رکاوٹ ہو یا جو واضح طور پر خراب ہو"],
             ["Notify the designated safety representative. Do not tamper with equipment.", "مقررہ سیفٹی نمائندے کو مطلع کریں۔ سامان سے چھیڑ چھاڑ نہ کریں۔"]]
          ] },
        { t: "note", x: ["Laboratories, generator rooms, server rooms, stores, record rooms and kitchens need particular attention.",
                         "لیبارٹریوں، جنریٹر روم، سرور روم، اسٹورز، ریکارڈ روم اور کچن پر خاص توجہ کی ضرورت ہے۔"] },
        { t: "img", src: "images/illus-spot-hazards.svg",
          alt: ["Illustration of a corridor with three numbered fire hazards", "خاکہ: ایک راہداری جس میں آگ کے تین خطرات پر نمبر لگے ہیں"],
          cmd: true, cap: ["Find the three fire hazards.", "آگ کے تین خطرات تلاش کریں۔"] },
        { t: "reveal", label: ["Show the answers", "جوابات دیکھیں"], items: [
          ["An exit blocked by boxes.", "ڈبوں سے بند اخراج کا راستہ۔"],
          ["An overloaded socket with too many plugs.", "بہت زیادہ پلگ لگا ہوا، ضرورت سے زیادہ بوجھ والا ساکٹ۔"],
          ["A fire door wedged open.", "فائر ڈور جسے اٹکا کر کھلا رکھا گیا ہے۔"]
        ] },
        { t: "think", x: ["Look around your own area today. Can you see a blocked exit, an overloaded socket or a fire door wedged open?",
                          "آج اپنے اردگرد نظر ڈالیں۔ کیا آپ کو کوئی بند راستہ، ضرورت سے زیادہ بوجھ والا ساکٹ یا اٹکا کر کھلا رکھا ہوا فائر ڈور نظر آتا ہے؟"] }
      ]
    },
    {
      id: "discover",
      title: ["If you discover a fire or smoke", "اگر آپ کو آگ یا دھواں نظر آئے"],
      blocks: [
        { t: "ol", items: [
          ["Move away from immediate danger. Do not enter a smoke-filled room or open a door to investigate.", "فوری خطرے سے دور ہٹ جائیں۔ دھوئیں سے بھرے کمرے میں داخل نہ ہوں اور دیکھنے کے لیے دروازہ نہ کھولیں۔"],
          ["Raise the alarm immediately. Use the nearest accessible alarm point if safe and warn people nearby.", "فوراً الارم بجائیں۔ اگر محفوظ ہو تو قریب ترین قابلِ رسائی الارم پوائنٹ استعمال کریں اور آس پاس کے لوگوں کو خبردار کریں۔"],
          ["Evacuate by the nearest safe exit. Do not delay to collect belongings.", "قریب ترین محفوظ راستے سے باہر نکلیں۔ سامان اٹھانے کے لیے دیر نہ کریں۔"],
          ["Report the emergency from a safe location, using the college’s reporting procedure.", "کسی محفوظ جگہ پہنچ کر کالج کے طریقۂ کار کے مطابق ہنگامی صورتِ حال کی اطلاع دیں۔"],
          ["Go to your designated assembly area.", "اپنے مقررہ اجتماع کے مقام پر جائیں۔"]
        ] },
        { t: "img", src: "images/fire-alarm-kgmc.jpg",
          alt: ["Red fire alarm call point marked: Fire, break glass, press here", "سرخ فائر الارم پوائنٹ جس پر لکھا ہے: فائر، شیشہ توڑیں، یہاں دبائیں"],
          cap: ["A fire alarm point at KGMC. Break the glass and press to raise the alarm.", "کے جی ایم سی میں ایک فائر الارم پوائنٹ۔ الارم بجانے کے لیے شیشہ توڑیں اور بٹن دبائیں۔"] },
        { t: "img", src: "images/emergency-alaram.jpg",
          alt: ["A red Emergency Alarm sign on a wall above an alarm box, with a fire extinguisher below", "دیوار پر سرخ ایمرجنسی الارم کا نشان، اس کے نیچے الارم باکس اور آگ بجھانے والا آلہ"],
          cap: ["Look for the red Emergency Alarm sign. Find the one nearest to where you work or study.", "سرخ ایمرجنسی الارم کا نشان تلاش کریں۔ اپنے کام یا پڑھائی کی جگہ کے قریب ترین الارم معلوم کر لیں۔"] },
        { t: "h", x: ["When reporting, state:", "اطلاع دیتے وقت یہ بتائیں:"] },
        { t: "ul", items: [
          ["Your name and contact number.", "اپنا نام اور رابطہ نمبر۔"],
          ["The building, floor and room or location.", "عمارت، منزل اور کمرہ یا جگہ۔"],
          ["What you saw: smoke, flames or another hazard.", "آپ نے کیا دیکھا: دھواں، شعلے یا کوئی اور خطرہ۔"],
          ["Whether anyone may be trapped or need assistance.", "آیا کوئی شخص اندر پھنسا ہو سکتا ہے یا کسی کو مدد کی ضرورت ہے۔"]
        ] },
        { t: "warn", x: ["Do not assume that an alarm automatically calls the fire service.", "یہ فرض نہ کریں کہ الارم بجنے سے فائر سروس کو خود بخود اطلاع ہو جاتی ہے۔"] },
        { t: "contacts", title: ["Emergency contacts", "ہنگامی رابطے"], items: [
          ["Fire and rescue (external): Rescue 1122", "فائر اور ریسکیو (بیرونی): ریسکیو 1122"],
          ["Inside the college: ask your supervisor for the safety contact number for your department, and save it in your phone.", "کالج کے اندر: اپنے شعبے کے سیفٹی رابطہ نمبر کے لیے اپنے سپروائزر سے پوچھیں اور اسے اپنے فون میں محفوظ کر لیں۔"],
          ["Alarm: near the main gate and in the main building.", "الارم: مرکزی گیٹ کے قریب اور مرکزی عمارت میں۔"]
        ] }
      ]
    },
    {
      id: "evacuate",
      title: ["Evacuating safely", "محفوظ انخلا"],
      blocks: [
        { t: "key", x: ["When the fire alarm sounds, act immediately, even if you think it may be a drill.", "جب فائر الارم بجے تو فوراً عمل کریں، چاہے آپ کو لگے کہ یہ صرف مشق ہے۔"] },
        { t: "media", kind: "video", src: "", title: ["Campus evacuation walkthrough", "کیمپس سے انخلا کا عملی مظاہرہ"] },
        { t: "ul", items: [
          ["Walk promptly and calmly. Do not push.", "تیزی سے مگر پرسکون ہو کر چلیں۔ دھکا نہ دیں۔"],
          ["Use the nearest safe exit and stairs.", "قریب ترین محفوظ راستہ اور سیڑھیاں استعمال کریں۔"],
          ["If your usual route is blocked by smoke or fire, use the approved alternative route.", "اگر آپ کا معمول کا راستہ دھوئیں یا آگ کی وجہ سے بند ہو تو منظور شدہ متبادل راستہ استعمال کریں۔"],
          ["Close doors behind you if safe, without delaying your escape. Do not lock them.", "اگر محفوظ ہو تو اپنے پیچھے دروازے بند کرتے جائیں، مگر اس میں دیر نہ لگائیں۔ انہیں تالا نہ لگائیں۔"],
          ["Do not enter dense smoke. If you meet smoke while escaping, stay low.", "گہرے دھوئیں میں داخل نہ ہوں۔ اگر نکلتے وقت دھواں ملے تو جھک کر نیچے رہیں۔"],
          ["Do not open a door that feels hot.", "ایسا دروازہ نہ کھولیں جو چھونے پر گرم محسوس ہو۔"],
          ["Follow the directions of designated evacuation staff.", "انخلا کے لیے مقرر عملے کی ہدایات پر عمل کریں۔"]
        ] },
        { t: "img", src: "images/illus-stay-low.svg",
          alt: ["Illustration: a person staying low under a layer of smoke and moving toward the exit", "خاکہ: ایک شخص دھوئیں کی تہہ کے نیچے جھک کر اخراج کے راستے کی طرف بڑھ رہا ہے"],
          cmd: true, cap: ["Stay low under smoke.", "دھوئیں میں نیچے جھک کر رہیں۔"] },
        { t: "img", src: "images/exit-signs.jpg",
          alt: ["Red EXIT sign with a running figure and an arrow pointing right", "سرخ ایگزٹ کا نشان جس پر دوڑتی ہوئی شکل اور دائیں طرف تیر ہے"],
          cap: ["Follow the red EXIT signs to the nearest safe exit.", "قریب ترین محفوظ راستے تک پہنچنے کے لیے سرخ ایگزٹ کے نشانات پر چلیں۔"] },
        { t: "img", src: "images/evacuation-plan-first-floor.jpg",
          alt: ["Framed evacuation plan showing green arrows along escape routes to an assembly point", "فریم میں لگا انخلا کا نقشہ جس میں سبز تیر نکلنے کے راستے اور اجتماع کا مقام دکھاتے ہیں"],
          cap: ["An evacuation plan displayed in the main building. Find the plan for your own floor and note your route and assembly point.", "مرکزی عمارت میں آویزاں انخلا کا نقشہ۔ اپنی منزل کا نقشہ تلاش کریں اور اپنا راستہ اور اجتماع کا مقام ذہن نشین کر لیں۔"] },
        { t: "warn", x: ["If you cannot escape: move into a room away from the fire if possible, close the door, call for help and give your exact location. Signal your location through a window if safe. Do not hide or attempt a dangerous jump.",
                         "اگر آپ باہر نہ نکل سکیں: ممکن ہو تو آگ سے دور کسی کمرے میں چلے جائیں، دروازہ بند کریں، مدد کے لیے کال کریں اور اپنی درست جگہ بتائیں۔ اگر محفوظ ہو تو کھڑکی سے اشارہ کر کے اپنی موجودگی ظاہر کریں۔ چھپیں نہیں اور خطرناک چھلانگ لگانے کی کوشش نہ کریں۔"] },
        { t: "h", x: ["At the assembly area", "اجتماع کے مقام پر"] },
        { t: "img", src: "images/assembly-area-kgmc.jpg",
          alt: ["Open paved area with lawns outside the college buildings", "کالج کی عمارتوں کے باہر کھلا پختہ میدان اور سبزہ زار"],
          cap: ["Assembly area, KGMC.", "اجتماع کا مقام، کے جی ایم سی۔"] },
        { t: "ul", items: [
          ["Report to the person taking attendance.", "حاضری لینے والے شخص کو اپنی موجودگی کی اطلاع دیں۔"],
          ["Stay with your department or assigned group.", "اپنے شعبے یا مقررہ گروپ کے ساتھ رہیں۔"],
          ["Report missing people and their last known location.", "لاپتہ افراد اور ان کی آخری معلوم جگہ کے بارے میں بتائیں۔"],
          ["Keep access routes clear for emergency vehicles.", "ہنگامی گاڑیوں کے لیے راستے کھلے رکھیں۔"],
          ["Never re-enter to search for someone.", "کسی کو ڈھونڈنے کے لیے ہرگز دوبارہ اندر نہ جائیں۔"],
          ["Return only when the authorized emergency lead says that re-entry is safe.", "صرف اس وقت واپس جائیں جب مجاز ہنگامی سربراہ بتائے کہ دوبارہ داخل ہونا محفوظ ہے۔"]
        ] },
        { t: "img", src: "images/assembly-area.jpg",
          alt: ["Wide paved forecourt in front of the Khyber Girls Medical College building", "خیبر گرلز میڈیکل کالج کی عمارت کے سامنے کھلا پختہ صحن"],
          cap: ["Assembly area in front of the college building.", "کالج کی عمارت کے سامنے اجتماع کا مقام۔"] }
      ]
    },
    {
      id: "assist",
      title: ["Supporting people who need assistance", "ان افراد کی مدد جنہیں معاونت درکار ہو"],
      blocks: [
        { t: "p", x: ["Some people may need assistance because of mobility, vision or hearing difficulties, injury or another temporary condition.",
                      "کچھ افراد کو چلنے پھرنے، دیکھنے یا سننے میں دشواری، چوٹ یا کسی اور عارضی کیفیت کی وجہ سے مدد کی ضرورت ہو سکتی ہے۔"] },
        { t: "media", kind: "video", src: "", title: ["Offering assistance respectfully", "احترام کے ساتھ مدد کی پیشکش"] },
        { t: "ul", items: [
          ["Arrange an individual evacuation plan before an emergency.", "ہنگامی صورتِ حال سے پہلے ہی انفرادی انخلا کا منصوبہ طے کر لیں۔"],
          ["Identify trained helpers and backup helpers.", "تربیت یافتہ مددگار اور ان کے متبادل مددگار مقرر کریں۔"],
          ["Ask the person what assistance they need.", "متعلقہ شخص سے پوچھیں کہ انہیں کس طرح کی مدد درکار ہے۔"],
          ["Use approved accessible routes and evacuation equipment according to the plan.", "منصوبے کے مطابق منظور شدہ قابلِ رسائی راستے اور انخلا کا سامان استعمال کریں۔"],
          ["Do not improvise carrying someone downstairs.", "کسی کو اپنے طور پر اٹھا کر سیڑھیوں سے نیچے لے جانے کی کوشش نہ کریں۔"],
          ["Where a designated refuge forms part of the approved plan, it must have communication and an arranged onward evacuation procedure. It is not a place to leave someone indefinitely.", "جہاں منظور شدہ منصوبے میں کوئی مقررہ پناہ گاہ (ریفیوج) شامل ہو، وہاں رابطے کا ذریعہ اور آگے انخلا کا طے شدہ طریقہ ہونا ضروری ہے۔ یہ کسی کو غیر معینہ مدت تک چھوڑ دینے کی جگہ نہیں۔"]
        ] }
      ]
    },
    {
      id: "extinguisher",
      title: ["Fire extinguishers: know your limits", "آگ بجھانے والے آلات: اپنی حدود جانیں"],
      blocks: [
        { t: "key", x: ["For most people, the priority is to raise the alarm and evacuate.", "زیادہ تر افراد کے لیے ترجیح یہ ہے کہ الارم بجائیں اور عمارت خالی کریں۔"] },
        { t: "p", x: ["Only designated, practically trained and authorized people should consider using an extinguisher under the college’s policy. They must have the correct extinguisher, a very small fire and a clear escape route. If smoke, heat or fire increases, or there is any doubt, they must leave immediately.",
                      "کالج کی پالیسی کے تحت صرف مقررہ، عملی تربیت یافتہ اور مجاز افراد ہی آگ بجھانے والے آلے کے استعمال پر غور کریں۔ ان کے پاس درست قسم کا آلہ ہو، آگ بہت چھوٹی ہو اور نکلنے کا راستہ کھلا ہو۔ اگر دھواں، حرارت یا آگ بڑھے، یا ذرا بھی شک ہو، تو انہیں فوراً نکل جانا چاہیے۔"] },
        { t: "img", src: "images/fire-extinguisher.jpg",
          alt: ["Red fire extinguisher mounted on a wall with an inspection label", "دیوار پر نصب سرخ آگ بجھانے والا آلہ جس پر معائنے کا لیبل لگا ہے"],
          cap: ["A fire extinguisher in the main building. Know where the nearest one is, but use it only if you are trained and authorized.", "مرکزی عمارت میں آگ بجھانے والا آلہ۔ جان لیں کہ قریب ترین آلہ کہاں ہے، لیکن اسے صرف اسی صورت استعمال کریں جب آپ تربیت یافتہ اور مجاز ہوں۔"] },
        { t: "media", kind: "video", src: "", title: ["Extinguisher demonstration with a fire-safety trainer", "فائر سیفٹی ٹرینر کے ساتھ آلے کے استعمال کا مظاہرہ"] },
        { t: "h", x: ["For awareness, many extinguishers use PASS:", "آگاہی کے لیے: بہت سے آلات PASS کے طریقے سے استعمال ہوتے ہیں:"] },
        { t: "table",
          head: [["Letter", "حرف"], ["Meaning", "مطلب"]],
          rows: [
            [["P: Pull", "P: کھینچیں (Pull)"], ["Pull the safety pin.", "حفاظتی پن کھینچیں۔"]],
            [["A: Aim", "A: نشانہ لیں (Aim)"], ["Aim at the base of the fire.", "آگ کی جڑ یعنی نچلے حصے کی طرف نشانہ لیں۔"]],
            [["S: Squeeze", "S: دبائیں (Squeeze)"], ["Squeeze the operating handle.", "ہینڈل دبائیں۔"]],
            [["S: Sweep", "S: گھمائیں (Sweep)"], ["Sweep from side to side at the base.", "آگ کی جڑ پر دائیں بائیں گھماتے جائیں۔"]]
          ] },
        { t: "img", src: "images/illus-pass-steps.svg",
          alt: ["Illustration of the four PASS steps: pull the pin, aim at the base of the fire, squeeze the handle, sweep from side to side", "خاکہ: PASS کے چار مراحل: پن کھینچیں، آگ کی جڑ پر نشانہ لیں، ہینڈل دبائیں، دائیں بائیں گھمائیں"],
          cmd: true, cap: ["Pull. Aim. Squeeze. Sweep.", "کھینچیں۔ نشانہ لیں۔ دبائیں۔ گھمائیں۔"] },
        { t: "warn", x: ["PASS does not replace practical training or the instructions for the particular extinguisher. The extinguisher must match the type of fire.",
                         "PASS عملی تربیت یا مخصوص آلے کی ہدایات کا متبادل نہیں۔ آلہ آگ کی نوعیت کے مطابق ہونا چاہیے۔"] },
        { t: "img", src: "images/pass-sign-and-emergency-numbers.jpg",
          alt: ["Safety notices on a wall beside a fire extinguisher and an alarm bell", "دیوار پر آگ بجھانے والے آلے اور الارم کی گھنٹی کے ساتھ لگی حفاظتی ہدایات"],
          cap: ["Safety notices beside an extinguisher, including the PASS steps and emergency instructions. Read the notices posted in your own area.", "آلے کے ساتھ لگی حفاظتی ہدایات، جن میں PASS کے مراحل اور ہنگامی ہدایات شامل ہیں۔ اپنے علاقے میں لگی ہدایات ضرور پڑھیں۔"] },
        { t: "img", src: "images/water-supply-for-fire-control.jpg",
          alt: ["Red fire hose cabinet on a wall with a water valve below it", "دیوار پر سرخ فائر ہوز کیبنٹ اور اس کے نیچے پانی کا والو"],
          cap: ["Fire hose cabinet and water supply point. These are for trained responders and the fire service.", "فائر ہوز کیبنٹ اور پانی کی فراہمی کا مقام۔ یہ تربیت یافتہ عملے اور فائر سروس کے استعمال کے لیے ہیں۔"] }
      ]
    },
    {
      id: "practice",
      title: ["Practice: make the safe choice", "مشق: محفوظ فیصلہ کریں"],
      blocks: [
        { t: "p", x: ["Read each situation and decide what you would do. Then open the answer to check.", "ہر صورتِ حال پڑھیں اور سوچیں کہ آپ کیا کریں گے۔ پھر جواب کھول کر دیکھیں۔"] },
        { t: "scenario",
          title: ["Scenario 1: Smoke in the corridor", "صورتِ حال 1: راہداری میں دھواں"],
          situation: ["The alarm sounds. Your usual exit route contains thick smoke. A colleague suggests running through it quickly.", "الارم بجتا ہے۔ آپ کے معمول کے راستے میں گہرا دھواں ہے۔ ایک ساتھی مشورہ دیتا ہے کہ اس میں سے تیزی سے دوڑ کر گزر جائیں۔"],
          answer: ["Use a safe alternative escape route. Do not enter thick smoke. If no safe route is available, seek protection and communicate your exact location.", "محفوظ متبادل راستہ استعمال کریں۔ گہرے دھوئیں میں داخل نہ ہوں۔ اگر کوئی محفوظ راستہ دستیاب نہ ہو تو محفوظ جگہ پر پناہ لیں اور اپنی درست جگہ کی اطلاع دیں۔"] },
        { t: "scenario",
          title: ["Scenario 2: Someone is missing", "صورتِ حال 2: کوئی لاپتہ ہے"],
          situation: ["At the assembly area, you notice a colleague is missing. Their bag is still inside.", "اجتماع کے مقام پر آپ دیکھتے ہیں کہ ایک ساتھی موجود نہیں۔ ان کا بیگ ابھی تک اندر ہے۔"],
          answer: ["Immediately tell the attendance officer or emergency lead, including the colleague’s last known location. Do not go back inside.", "فوراً حاضری لینے والے افسر یا ہنگامی سربراہ کو بتائیں، اور ساتھی کی آخری معلوم جگہ بھی بتائیں۔ خود واپس اندر نہ جائیں۔"] },
        { t: "scenario",
          title: ["Scenario 3: A wheelchair user needs help", "صورتِ حال 3: وہیل چیئر استعمال کرنے والے فرد کو مدد درکار ہے"],
          situation: ["A wheelchair user is on an upper floor when the alarm sounds.", "الارم بجتے وقت وہیل چیئر استعمال کرنے والا ایک فرد بالائی منزل پر ہے۔"],
          answer: ["Activate their agreed evacuation assistance arrangements and alert the designated helpers. Follow the approved plan; do not attempt an untrained carry.", "ان کے لیے پہلے سے طے شدہ انخلا کی مدد کے انتظامات پر عمل شروع کریں اور مقررہ مددگاروں کو اطلاع دیں۔ منظور شدہ منصوبے پر چلیں؛ بغیر تربیت کے کسی کو اٹھا کر لے جانے کی کوشش نہ کریں۔"] }
      ]
    },
    {
      id: "apply",
      type: "checklist",
      title: ["Apply: know your own workplace", "عمل: اپنے کام کی جگہ کو جانیں"],
      blocks: [
        { t: "p", x: ["Before taking the quiz, find out each of these for your own workplace or classroom. Tick each one when you know it. If you are unsure, ask your supervisor.",
                      "کوئز سے پہلے اپنے کام یا پڑھائی کی جگہ کے بارے میں یہ سب باتیں معلوم کر لیں۔ جب معلوم ہو جائے تو نشان لگا دیں۔ اگر یقین نہ ہو تو اپنے سپروائزر سے پوچھیں۔"] },
        { t: "h", x: ["I know:", "مجھے معلوم ہے:"] }
      ],
      items: [
        ["My nearest exit and an alternative exit.", "میرا قریب ترین اخراج کا راستہ اور ایک متبادل راستہ۔"],
        ["The nearest alarm point.", "قریب ترین الارم پوائنٹ۔"],
        ["My designated assembly area.", "میرا مقررہ اجتماع کا مقام۔"],
        ["The emergency contact number.", "ہنگامی رابطہ نمبر۔"],
        ["My departmental safety representative.", "میرے شعبے کا سیفٹی نمائندہ۔"],
        ["How to request evacuation assistance.", "انخلا میں مدد کی درخواست کیسے کی جائے۔"]
      ]
    }
  ],
  /* answer: the id of the correct option. The same answer key must also be in the Apps Script (MODULES.m1.key). */
  quiz: [
    { q: ["You discover smoke coming from a storeroom. What should you do?", "آپ دیکھتے ہیں کہ اسٹور روم سے دھواں نکل رہا ہے۔ آپ کو کیا کرنا چاہیے؟"],
      options: { a: ["Open the door to investigate", "دروازہ کھول کر دیکھیں"], b: ["Raise the alarm and begin safe evacuation", "الارم بجائیں اور محفوظ طریقے سے انخلا شروع کریں"], c: ["Finish your work first", "پہلے اپنا کام مکمل کریں"] },
      answer: "b", feedback: ["Raise the alarm promptly and move to safety.", "فوراً الارم بجائیں اور محفوظ جگہ پر چلے جائیں۔"] },
    { q: ["Your usual exit route is blocked by smoke. What is the safest action?", "آپ کا معمول کا راستہ دھوئیں کی وجہ سے بند ہے۔ سب سے محفوظ قدم کیا ہے؟"],
      options: { a: ["Use a safe alternative exit", "محفوظ متبادل راستہ استعمال کریں"], b: ["Wait in your room for the smoke to clear", "اپنے کمرے میں دھواں چھٹنے کا انتظار کریں"], c: ["Run through the smoke", "دھوئیں میں سے دوڑ کر گزر جائیں"] },
      answer: "a", feedback: ["Use a safe alternative route.", "محفوظ متبادل راستہ استعمال کریں۔"] },
    { q: ["After leaving the building, where should you go?", "عمارت سے نکلنے کے بعد آپ کو کہاں جانا چاہیے؟"],
      options: { a: ["Home", "گھر"], b: ["The main gate, regardless of instructions", "ہدایات سے قطع نظر مرکزی گیٹ پر"], c: ["Your designated assembly area", "اپنے مقررہ اجتماع کے مقام پر"] },
      answer: "c", feedback: ["Assembly areas allow people to be accounted for.", "اجتماع کے مقام پر سب افراد کی گنتی ہو سکتی ہے۔"] },
    { q: ["A colleague is missing at the assembly area. What should you do?", "اجتماع کے مقام پر ایک ساتھی موجود نہیں۔ آپ کو کیا کرنا چاہیے؟"],
      options: { a: ["Report their name and last known location to the responsible person", "ذمہ دار شخص کو ان کا نام اور آخری معلوم جگہ بتائیں"], b: ["Re-enter and search", "دوبارہ اندر جا کر تلاش کریں"], c: ["Wait until the event ends", "واقعہ ختم ہونے تک انتظار کریں"] },
      answer: "a", feedback: ["Give responders the information; do not re-enter.", "امدادی عملے کو معلومات دیں؛ خود دوبارہ اندر نہ جائیں۔"] },
    { q: ["Who should attempt to use a fire extinguisher under the college’s policy?", "کالج کی پالیسی کے تحت آگ بجھانے والا آلہ استعمال کرنے کی کوشش کسے کرنی چاہیے؟"],
      options: { a: ["Anyone who has watched a video", "ہر وہ شخص جس نے ویڈیو دیکھی ہو"], b: ["Anyone standing nearest to it", "جو بھی اس کے سب سے قریب کھڑا ہو"], c: ["A designated, practically trained and authorized person, when conditions are safe", "مقررہ، عملی تربیت یافتہ اور مجاز شخص، جب حالات محفوظ ہوں"] },
      answer: "c", feedback: ["An online lesson alone does not qualify someone to fight a fire.", "صرف آن لائن سبق کسی کو آگ بجھانے کا اہل نہیں بناتا۔"] },
    { q: ["Which is a fire hazard?", "ان میں سے آگ کا خطرہ کون سا ہے؟"],
      options: { a: ["A clear stairway", "صاف اور کھلی سیڑھیاں"], b: ["An exit blocked by boxes", "ڈبوں سے بند اخراج کا راستہ"], c: ["An accessible alarm point", "قابلِ رسائی الارم پوائنٹ"] },
      answer: "b", feedback: ["Blocked exits delay escape.", "بند راستے باہر نکلنے میں تاخیر کا باعث بنتے ہیں۔"] },
    { q: ["How should evacuation assistance be organized?", "انخلا میں مدد کا انتظام کیسے ہونا چاہیے؟"],
      options: { a: ["Decide everything during the fire", "سب کچھ آگ لگنے کے وقت طے کریں"], b: ["Use an agreed plan with trained helpers", "تربیت یافتہ مددگاروں کے ساتھ پہلے سے طے شدہ منصوبہ استعمال کریں"], c: ["Ask any two people to carry the person downstairs", "کسی بھی دو افراد سے کہیں کہ اس شخص کو اٹھا کر نیچے لے جائیں"] },
      answer: "b", feedback: ["Assistance must be planned before an emergency.", "مدد کی منصوبہ بندی ہنگامی صورتِ حال سے پہلے ہونی چاہیے۔"] },
    { q: ["When can you re-enter the building?", "آپ عمارت میں دوبارہ کب داخل ہو سکتے ہیں؟"],
      options: { a: ["When the alarm stops", "جب الارم بند ہو جائے"], b: ["When you no longer see smoke", "جب دھواں نظر آنا بند ہو جائے"], c: ["When authorized clearance is communicated", "جب مجاز شخص کی طرف سے اجازت کا اعلان ہو"] },
      answer: "c", feedback: ["A silent alarm does not establish that the building is safe.", "الارم کا خاموش ہونا اس بات کا ثبوت نہیں کہ عمارت محفوظ ہے۔"] }
  ]
};
