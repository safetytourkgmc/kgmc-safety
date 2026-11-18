/* Module 2: Everyday Campus Safety and Accessibility.
   Every piece of text is a pair: [English, Urdu].
   URDU IS A DRAFT TRANSLATION - to be reviewed and corrected by Prof. Amin before launch.
   Block types are the same as in module1.js. */
window.KGMC_CONTENT = window.KGMC_CONTENT || {};
window.KGMC_CONTENT.m2 = {
  version: "1.0",
  title: ["Everyday campus safety and accessibility", "روزمرہ کیمپس سیفٹی اور رسائی"],
  sections: [
    {
      id: "start",
      title: ["Start: A familiar situation", "آغاز: ایک جانی پہچانی صورتِ حال"],
      blocks: [
        { t: "img", src: "images/m2-corridors-groung-floors-kgmc.jpg",
          alt: ["A long ground-floor corridor at KGMC with a polished floor and columns", "کے جی ایم سی کی زمینی منزل کی لمبی راہداری جس کا فرش چمکدار ہے اور ستون ہیں"],
          cap: ["A ground-floor corridor, KGMC.", "زمینی منزل کی راہداری، کے جی ایم سی۔"] },
        { t: "p", x: ["It is a busy morning at the college. A corridor has just been mopped. An extension cable crosses the walkway. Boxes partly block the entrance ramp. A student using crutches is trying to reach a classroom.",
                      "کالج میں مصروف صبح ہے۔ ایک راہداری میں ابھی ابھی پونچھا لگایا گیا ہے۔ ایک ایکسٹینشن تار راستے کے آر پار پڑی ہے۔ داخلی ریمپ پر ڈبے راستہ جزوی طور پر روک رہے ہیں۔ بیساکھیوں کے سہارے چلنے والی ایک طالبہ کلاس روم تک پہنچنے کی کوشش کر رہی ہے۔"] },
        { t: "img", src: "images/illus-m2-hazards.svg", cmd: true,
          alt: ["Illustration: a wet floor, a cable across a walkway and boxes blocking a ramp, numbered 1 to 3, with a person on crutches", "خاکہ: گیلا فرش، راستے کے آر پار تار اور ریمپ پر رکھے ڈبے، جن پر 1 سے 3 تک نمبر ہیں، اور بیساکھیوں والا ایک فرد"],
          cap: ["What could cause an injury here?", "یہاں کس چیز سے چوٹ لگ سکتی ہے؟"] },
        { t: "think", x: ["Think: What could cause an injury? What stops the student from moving independently? What should you do without putting yourself at risk?",
                          "سوچیں: کس چیز سے چوٹ لگ سکتی ہے؟ طالبہ کو خود سے آنے جانے میں کیا رکاوٹ ہے؟ خود کو خطرے میں ڈالے بغیر آپ کو کیا کرنا چاہیے؟"] },
        { t: "key", x: ["Notice hazards. Keep routes clear. Offer respectful assistance. Report problems promptly.",
                        "خطرات پر نظر رکھیں۔ راستے صاف رکھیں۔ احترام کے ساتھ مدد کی پیشکش کریں۔ مسائل کی فوراً اطلاع دیں۔"] }
      ]
    },
    {
      id: "objectives",
      title: ["What you will learn", "آپ کیا سیکھیں گے"],
      blocks: [
        { t: "p", x: ["By the end of this module, you should be able to:", "اس ماڈیول کے اختتام پر آپ اس قابل ہوں گے کہ:"] },
        { t: "ol", items: [
          ["Identify common slip, trip, fall and electrical hazards.", "پھسلنے، ٹھوکر لگنے، گرنے اور بجلی کے عام خطرات کو پہچانیں۔"],
          ["Describe safe use of stairs.", "سیڑھیوں کے محفوظ استعمال کو بیان کر سکیں۔"],
          ["Recognize barriers affecting people with disabilities or temporary mobility difficulties.", "ان رکاوٹوں کو پہچانیں جو معذور افراد یا عارضی طور پر چلنے پھرنے میں دشواری والے افراد کو متاثر کرتی ہیں۔"],
          ["Offer assistance respectfully and with consent.", "احترام اور رضامندی کے ساتھ مدد کی پیشکش کر سکیں۔"],
          ["Report a hazard or near miss using the college’s reporting procedure.", "کالج کے طریقۂ کار کے مطابق کسی خطرے یا بال بال بچنے کے واقعے کی اطلاع دے سکیں۔"]
        ] }
      ]
    },
    {
      id: "slips",
      title: ["Prevent slips, trips and falls", "پھسلنے، ٹھوکر لگنے اور گرنے سے بچاؤ"],
      blocks: [
        { t: "p", x: ["A slip happens when your foot loses grip. A trip happens when your foot catches on something. Either can cause a fall.",
                      "پھسلنا تب ہوتا ہے جب پاؤں کی گرفت ختم ہو جائے۔ ٹھوکر تب لگتی ہے جب پاؤں کسی چیز سے اٹک جائے۔ دونوں صورتوں میں آپ گر سکتے ہیں۔"] },
        { t: "table",
          head: [["Common hazard", "عام خطرہ"], ["Safe action", "محفوظ اقدام"]],
          rows: [
            [["Wet or slippery floor", "گیلا یا پھسلن والا فرش"],
             ["Avoid the affected area, warn others and notify cleaning staff.", "متاثرہ جگہ سے بچیں، دوسروں کو خبردار کریں اور صفائی کے عملے کو اطلاع دیں۔"]],
            [["Loose cable across a walkway", "راستے کے آر پار پڑی کھلی تار"],
             ["Report it for safe rerouting or protection. Do not handle damaged wiring.", "اطلاع دیں تاکہ اسے محفوظ طریقے سے ہٹایا یا ڈھانپا جائے۔ خراب تار کو ہاتھ نہ لگائیں۔"]],
            [["Bags, boxes or equipment in a passage", "راستے میں رکھے بیگ، ڈبے یا سامان"],
             ["Keep personal belongings clear of routes; arrange safe removal of obstructions.", "اپنا سامان راستوں سے ہٹا کر رکھیں؛ رکاوٹوں کو محفوظ طریقے سے ہٹوانے کا انتظام کریں۔"]],
            [["Broken tiles, uneven paving or curled mats", "ٹوٹی ٹائلیں، ناہموار فرش یا مڑے ہوئے پائیدان"],
             ["Report the location and keep people away where necessary.", "جگہ کی اطلاع دیں اور ضرورت ہو تو لوگوں کو وہاں سے دور رکھیں۔"]],
            [["Poor lighting", "ناکافی روشنی"],
             ["Report it promptly; use a safer, well-lit route.", "فوراً اطلاع دیں؛ زیادہ محفوظ اور روشن راستہ استعمال کریں۔"]],
            [["Damaged stair edges or loose handrails", "سیڑھیوں کے ٹوٹے کنارے یا ڈھیلی ریلنگ"],
             ["Avoid the affected section and request urgent maintenance.", "متاثرہ حصے سے بچیں اور فوری مرمت کی درخواست کریں۔"]]
          ] },
        { t: "img", src: "images/m2-main-entrance-groung-floor-kgmc.jpg",
          alt: ["Entrance hall of the main building with a polished marble floor and a staircase", "مرکزی عمارت کا داخلی ہال جس میں چمکدار سنگِ مرمر کا فرش اور سیڑھیاں ہیں"],
          cap: ["Polished floors like this become slippery when wet.", "ایسے چمکدار فرش گیلے ہونے پر پھسلن والے ہو جاتے ہیں۔"] },
        { t: "h", x: ["Your daily habits matter", "آپ کی روزمرہ عادات اہم ہیں"] },
        { t: "ul", items: [
          ["Walk without rushing.", "جلد بازی کے بغیر چلیں۔"],
          ["Look ahead rather than at your phone.", "چلتے وقت فون کے بجائے سامنے دیکھیں۔"],
          ["Use stair handrails.", "سیڑھیوں پر ریلنگ پکڑ کر چلیں۔"],
          ["Do not carry objects that block your view.", "ایسا سامان نہ اٹھائیں جو آپ کی نظر کے سامنے رکاوٹ بنے۔"],
          ["Wear footwear suitable for your work and the floor conditions.", "اپنے کام اور فرش کی حالت کے مطابق مناسب جوتے پہنیں۔"]
        ] },
        { t: "note", x: ["For cleaning staff: keep people off wet floors until they are dry, and leave a safe alternative route open. A warning sign alone does not stop someone walking onto a slippery floor. Remove signs when the floor is safe. Do not block emergency exits.",
                         "صفائی کے عملے کے لیے: فرش خشک ہونے تک لوگوں کو گیلے حصے سے دور رکھیں اور ایک محفوظ متبادل راستہ کھلا چھوڑیں۔ صرف انتباہی بورڈ کسی کو پھسلن والے فرش پر چلنے سے نہیں روکتا۔ فرش محفوظ ہو جائے تو بورڈ ہٹا دیں۔ ہنگامی راستے بند نہ کریں۔"] },
        { t: "warn", x: ["Do not clean an unknown chemical or biological spill as if it were ordinary water. Keep others away and call the designated trained staff.",
                         "کسی نامعلوم کیمیائی یا حیاتیاتی مادے کے گرنے کو عام پانی سمجھ کر صاف نہ کریں۔ دوسروں کو دور رکھیں اور مقررہ تربیت یافتہ عملے کو بلائیں۔"] }
      ]
    },
    {
      id: "stairs",
      title: ["Use the stairs safely", "سیڑھیوں کا محفوظ استعمال"],
      blocks: [
        { t: "img", src: "images/m2-stairs-main-building.jpg",
          alt: ["Marble staircase in the main building with wooden handrails on both sides", "مرکزی عمارت کی سنگِ مرمر کی سیڑھیاں جن کے دونوں طرف لکڑی کی ریلنگ ہے"],
          cap: ["Stairs in the main building. Use the handrail.", "مرکزی عمارت کی سیڑھیاں۔ ریلنگ پکڑ کر چلیں۔"] },
        { t: "ul", items: [
          ["Use the handrail and take one step at a time.", "ریلنگ پکڑیں اور ایک وقت میں ایک سیڑھی چڑھیں یا اتریں۔"],
          ["Keep stairs and landings free of storage.", "سیڑھیوں اور ان کے درمیانی چبوتروں پر سامان نہ رکھیں۔"],
          ["Report missing or worn slip-resistant strips.", "پھسلن روکنے والی پٹیاں غائب یا گھسی ہوئی ہوں تو اطلاع دیں۔"],
          ["Report loose handrails, damaged steps and poor lighting.", "ڈھیلی ریلنگ، ٹوٹی سیڑھیوں اور ناکافی روشنی کی اطلاع دیں۔"],
          ["Arrange help or suitable equipment for bulky loads.", "بھاری یا بڑے سامان کے لیے مدد یا مناسب آلات کا انتظام کریں۔"]
        ] },
        { t: "note", x: ["Slip-resistant strips must be maintained: loose or damaged strips can themselves cause a trip.",
                         "پھسلن روکنے والی پٹیوں کی دیکھ بھال ضروری ہے: ڈھیلی یا خراب پٹیاں خود ٹھوکر کا سبب بن سکتی ہیں۔"] }
      ]
    },
    {
      id: "electrical",
      title: ["Electrical safety is everyone’s concern", "بجلی سے حفاظت سب کی ذمہ داری ہے"],
      blocks: [
        { t: "h", x: ["Warning signs", "خطرے کی علامات"] },
        { t: "ul", items: [
          ["Exposed wires or damaged insulation.", "ننگی تاریں یا تار کا خراب غلاف۔"],
          ["Loose or broken plugs and sockets.", "ڈھیلے یا ٹوٹے ہوئے پلگ اور ساکٹ۔"],
          ["Sparks, unusual heat or a burning smell.", "چنگاریاں، غیر معمولی گرمی یا جلنے کی بو۔"],
          ["Electrical equipment near leaking water.", "ٹپکتے پانی کے قریب برقی آلات۔"],
          ["Overloaded sockets or improvised connections.", "ضرورت سے زیادہ بوجھ والے ساکٹ یا جگاڑ سے بنائے گئے کنکشن۔"]
        ] },
        { t: "img", src: "images/illus-m2-cable.svg", cmd: true,
          alt: ["Illustration: a damaged cable with exposed wire; taping it is crossed out and unplugged equipment is marked with a tick", "خاکہ: خراب تار جس کی ننگی تار نظر آ رہی ہے؛ اس پر ٹیپ لگانے پر کراس اور آلہ بند کرنے پر درست کا نشان ہے"],
          cap: ["Damaged cable? Stop using it. Report it.", "تار خراب ہے؟ استعمال روک دیں۔ اطلاع دیں۔"] },
        { t: "h", x: ["What you should do", "آپ کو کیا کرنا چاہیے"] },
        { t: "ol", items: [
          ["Stop using equipment that appears unsafe.", "جو آلہ غیر محفوظ لگے اس کا استعمال روک دیں۔"],
          ["Keep yourself and others away from exposed wires or wet electrical areas.", "خود کو اور دوسروں کو ننگی تاروں یا گیلی برقی جگہوں سے دور رکھیں۔"],
          ["Report the problem to maintenance immediately.", "مسئلے کی اطلاع فوراً مینٹیننس کو دیں۔"],
          ["Leave isolation, repair and testing to authorized personnel.", "بجلی منقطع کرنا، مرمت اور جانچ مجاز عملے پر چھوڑ دیں۔"],
          ["Do not make taped wire joints, bypass safety devices or keep using a damaged item.", "تاروں کو ٹیپ سے نہ جوڑیں، حفاظتی آلات کو نظرانداز نہ کریں اور خراب چیز کا استعمال جاری نہ رکھیں۔"]
        ] },
        { t: "note", x: ["Damaged electrical equipment must stay out of use until it has been properly repaired and checked.",
                         "خراب برقی آلہ اس وقت تک استعمال نہ کیا جائے جب تک اس کی باقاعدہ مرمت اور جانچ نہ ہو جائے۔"] },
        { t: "warn", x: ["If there is smoke or fire, follow Module 1: raise the alarm, evacuate safely and report the emergency.",
                         "اگر دھواں یا آگ ہو تو ماڈیول 1 پر عمل کریں: الارم بجائیں، محفوظ طریقے سے باہر نکلیں اور ہنگامی صورتِ حال کی اطلاع دیں۔"] }
      ]
    },
    {
      id: "access",
      title: ["Make the campus accessible", "کیمپس کو سب کے لیے قابلِ رسائی بنائیں"],
      blocks: [
        { t: "key", x: ["Accessibility means people can reach and use college facilities safely and with dignity.",
                        "رسائی کا مطلب ہے کہ لوگ کالج کی سہولیات تک محفوظ طریقے سے اور وقار کے ساتھ پہنچ سکیں اور انہیں استعمال کر سکیں۔"] },
        { t: "p", x: ["This includes people with permanent disabilities, temporary injuries, reduced vision or hearing, and other access needs. Some disabilities are not visible.",
                      "اس میں مستقل معذوری، عارضی چوٹ، کمزور نظر یا سماعت اور رسائی کی دیگر ضروریات والے افراد شامل ہیں۔ کچھ معذوریاں نظر نہیں آتیں۔"] },
        { t: "img", src: "images/m2-ramp-main-entrance.jpg",
          alt: ["Concrete ramp with a steel handrail beside the steps at the main entrance", "مرکزی دروازے پر سیڑھیوں کے ساتھ کنکریٹ کا ریمپ جس پر اسٹیل کی ریلنگ لگی ہے"],
          cap: ["The ramp at the main entrance, KGMC. Keep it clear at all times.", "کے جی ایم سی کے مرکزی دروازے کا ریمپ۔ اسے ہر وقت خالی رکھیں۔"] },
        { t: "table",
          head: [["Location", "جگہ"], ["What to check or protect", "کیا دیکھنا یا محفوظ رکھنا ہے"]],
          rows: [
            [["Entrances and ramps", "داخلی راستے اور ریمپ"], ["Keep routes clear of boxes, furniture and parked vehicles.", "راستوں کو ڈبوں، فرنیچر اور کھڑی گاڑیوں سے خالی رکھیں۔"]],
            [["Corridors and doorways", "راہداریاں اور دروازے"], ["Keep space for people using wheelchairs, walkers or crutches.", "وہیل چیئر، واکر یا بیساکھی استعمال کرنے والوں کے لیے جگہ چھوڑیں۔"]],
            [["Stairs", "سیڑھیاں"], ["Keep handrails accessible; report damaged edges and poor lighting.", "ریلنگ تک رسائی برقرار رکھیں؛ ٹوٹے کناروں اور ناکافی روشنی کی اطلاع دیں۔"]],
            [["Accessible washrooms", "قابلِ رسائی واش روم"], ["Keep them available for use; report loose grab bars, faulty locks and wet floors.", "انہیں استعمال کے لیے دستیاب رکھیں؛ ڈھیلے سہارے کے ڈنڈوں، خراب تالوں اور گیلے فرش کی اطلاع دیں۔"]],
            [["Classrooms and offices", "کلاس روم اور دفاتر"], ["Arrange furniture so people can enter, move and take part.", "فرنیچر اس طرح رکھیں کہ لوگ داخل ہو سکیں، چل پھر سکیں اور شریک ہو سکیں۔"]],
            [["Signs and directions", "نشانات اور رہنمائی"], ["Give clear directions, including the accessible route.", "واضح رہنمائی فراہم کریں، جس میں قابلِ رسائی راستہ بھی شامل ہو۔"]]
          ] },
        { t: "note", x: ["A ramp alone is not enough. The route must continue all the way to the destination, including entrances, classrooms and other facilities.",
                         "صرف ریمپ کافی نہیں۔ راستہ منزل تک مسلسل ہونا چاہیے، جس میں داخلی دروازے، کلاس روم اور دیگر سہولیات شامل ہیں۔"] },
        { t: "img", src: "images/m2-main-building-entrance-kgmc.jpg",
          alt: ["Wide level entrance to the main building with open doors", "مرکزی عمارت کا کشادہ اور ہموار داخلی راستہ جس کے دروازے کھلے ہیں"],
          cap: ["The main building entrance. An accessible route has to continue from the ramp through the doors.", "مرکزی عمارت کا داخلی راستہ۔ قابلِ رسائی راستہ ریمپ سے دروازوں کے اندر تک جاری رہنا چاہیے۔"] },
        { t: "warn", x: ["Do not use an accessible washroom as a store. If an accessible route is out of use, report it and arrange a suitable alternative, such as moving a session to an accessible room.",
                         "قابلِ رسائی واش روم کو اسٹور کے طور پر استعمال نہ کریں۔ اگر قابلِ رسائی راستہ دستیاب نہ ہو تو اطلاع دیں اور مناسب متبادل کا انتظام کریں، مثلاً سیشن کو کسی قابلِ رسائی کمرے میں منتقل کرنا۔"] }
      ]
    },
    {
      id: "respect",
      title: ["Offer help respectfully", "احترام کے ساتھ مدد کی پیشکش کریں"],
      blocks: [
        { t: "key", x: ["Ask first: “Would you like any assistance?”", "پہلے پوچھیں: ”کیا آپ کو کسی مدد کی ضرورت ہے؟“"] },
        { t: "ul", items: [
          ["Speak directly to the person.", "براہِ راست اسی شخص سے بات کریں۔"],
          ["Listen to how they would like to be helped.", "سنیں کہ وہ کس طرح کی مدد چاہتے ہیں۔"],
          ["Accept their decision if they decline.", "اگر وہ انکار کریں تو ان کا فیصلہ قبول کریں۔"],
          ["Do not push a wheelchair or move a mobility aid without permission.", "اجازت کے بغیر وہیل چیئر کو نہ دھکیلیں اور چلنے میں مدد دینے والے کسی آلے کو نہ ہلائیں۔"],
          ["For a person with visual impairment, say who you are and offer your arm if they ask; do not grab or pull them.", "نظر کی کمزوری والے فرد کو اپنا تعارف کرائیں اور ان کے کہنے پر اپنا بازو پیش کریں؛ انہیں پکڑیں یا کھینچیں نہیں۔"],
          ["Ask how they prefer to communicate instead of assuming.", "خود سے اندازہ لگانے کے بجائے پوچھیں کہ وہ کس طرح بات چیت کرنا پسند کرتے ہیں۔"],
          ["Do not ask someone to disclose a diagnosis in order to receive ordinary assistance.", "عام مدد کے لیے کسی سے اس کی بیماری یا تشخیص بتانے کا مطالبہ نہ کریں۔"]
        ] },
        { t: "scenario",
          title: ["Example: the blocked ramp", "مثال: بند ریمپ"],
          situation: ["A visitor using a wheelchair arrives at a ramp blocked by boxes.", "وہیل چیئر استعمال کرنے والا ایک مہمان ایسے ریمپ پر پہنچتا ہے جو ڈبوں سے بند ہے۔"],
          answer: ["Ask whether assistance is wanted, arrange for the obstruction to be removed and explain the accessible route. Do not try to lift the person or the wheelchair over the obstruction without an agreed, safe procedure.",
                   "پوچھیں کہ آیا انہیں مدد چاہیے، رکاوٹ ہٹوانے کا انتظام کریں اور قابلِ رسائی راستہ بتائیں۔ کسی طے شدہ محفوظ طریقے کے بغیر اس فرد یا وہیل چیئر کو رکاوٹ کے اوپر سے اٹھانے کی کوشش نہ کریں۔"] }
      ]
    },
    {
      id: "report",
      title: ["Report hazards and near misses", "خطرات اور بال بال بچنے کے واقعات کی اطلاع دیں"],
      blocks: [
        { t: "p", x: ["A hazard is something that could cause harm. A near miss is an event that could have caused injury but did not, for example when someone trips over a cable but does not fall.",
                      "خطرہ وہ چیز ہے جو نقصان پہنچا سکتی ہے۔ بال بال بچنا وہ واقعہ ہے جس میں چوٹ لگ سکتی تھی مگر نہیں لگی، مثلاً کوئی تار سے ٹھوکر کھائے مگر گرے نہیں۔"] },
        { t: "h", x: ["Reporting steps", "اطلاع دینے کے مراحل"] },
        { t: "ol", items: [
          ["Protect: move away and warn others without putting yourself at risk.", "تحفظ: خود کو خطرے میں ڈالے بغیر وہاں سے ہٹ جائیں اور دوسروں کو خبردار کریں۔"],
          ["Report: contact the designated person. For immediate danger, use the emergency contact instead of only filling in a form.", "اطلاع: مقررہ شخص سے رابطہ کریں۔ فوری خطرے کی صورت میں صرف فارم بھرنے کے بجائے ہنگامی رابطہ استعمال کریں۔"],
          ["Record: give a brief description and the exact location.", "اندراج: مختصر تفصیل اور درست جگہ بتائیں۔"],
          ["Follow up: if the hazard is still there, report it again to the next level.", "پیروی: اگر خطرہ برقرار رہے تو اگلی سطح پر دوبارہ اطلاع دیں۔"]
        ] },
        { t: "h", x: ["What to include in a report", "اطلاع میں کیا شامل کریں"] },
        { t: "ul", items: [
          ["The date and time.", "تاریخ اور وقت۔"],
          ["The exact location, for example “ground-floor corridor outside the library”.", "درست جگہ، مثلاً ”لائبریری کے باہر زمینی منزل کی راہداری“۔"],
          ["What the hazard or near miss was.", "خطرہ یا بال بال بچنے کا واقعہ کیا تھا۔"],
          ["What you did straight away.", "آپ نے فوری طور پر کیا کیا۔"],
          ["Who you told.", "آپ نے کسے بتایا۔"],
          ["A photo, if it is safe and appropriate; avoid showing identifiable people.", "تصویر، اگر محفوظ اور مناسب ہو؛ ایسی تصویر سے گریز کریں جس میں لوگ پہچانے جا سکیں۔"]
        ] },
        { t: "contacts", title: ["Who to contact at KGMC", "کے جی ایم سی میں کس سے رابطہ کریں"], items: [
          ["Routine safety reports and unresolved hazards: Facility In-charge.", "معمول کی سیفٹی رپورٹیں اور حل نہ ہونے والے خطرات: فیسیلٹی انچارج۔"],
          ["Maintenance: Facility Manager or Store Department.", "مرمت: فیسیلٹی مینیجر یا اسٹور ڈیپارٹمنٹ۔"],
          ["Accessibility assistance: guards at the main gate.", "رسائی میں مدد: مرکزی گیٹ کے گارڈز۔"],
          ["Immediate emergencies: Security In-charge.", "فوری ہنگامی صورتِ حال: سیکیورٹی انچارج۔"],
          ["If you do not know the number, ask your supervisor and save it in your phone.", "اگر آپ کو نمبر معلوم نہیں تو اپنے سپروائزر سے پوچھیں اور اسے اپنے فون میں محفوظ کر لیں۔"]
        ] }
      ]
    },
    {
      id: "practice",
      title: ["Practice: three short scenarios", "مشق: تین مختصر صورتِ حال"],
      blocks: [
        { t: "p", x: ["Read each situation and decide what you would do. Then open the answer to check.", "ہر صورتِ حال پڑھیں اور سوچیں کہ آپ کیا کریں گے۔ پھر جواب کھول کر دیکھیں۔"] },
        { t: "scenario",
          title: ["Scenario A: The wet corridor", "صورتِ حال الف: گیلی راہداری"],
          situation: ["A cleaner has mopped the whole corridor. A warning sign is present, but people must cross the wet floor to reach classrooms.", "صفائی کرنے والے نے پوری راہداری میں پونچھا لگا دیا ہے۔ انتباہی بورڈ موجود ہے، مگر کلاس روم تک پہنچنے کے لیے لوگوں کو گیلے فرش سے گزرنا پڑتا ہے۔"],
          answer: ["Restrict access to the wet section and provide a safe alternative route. Review cleaning arrangements so that a dry route always remains available.", "گیلے حصے تک رسائی روکیں اور محفوظ متبادل راستہ فراہم کریں۔ صفائی کے انتظامات کا جائزہ لیں تاکہ ایک خشک راستہ ہمیشہ دستیاب رہے۔"] },
        { t: "scenario",
          title: ["Scenario B: The damaged cable", "صورتِ حال ب: خراب تار"],
          situation: ["An office worker notices a damaged cable. A colleague suggests covering it with tape and carrying on.", "دفتر کا ایک ملازم خراب تار دیکھتا ہے۔ ایک ساتھی مشورہ دیتا ہے کہ اس پر ٹیپ لگا کر کام جاری رکھا جائے۔"],
          answer: ["Stop using the equipment and report it for authorized repair. Do not attempt a temporary repair yourself.", "آلے کا استعمال روک دیں اور مجاز عملے سے مرمت کے لیے اطلاع دیں۔ خود عارضی مرمت کی کوشش نہ کریں۔"] },
        { t: "scenario",
          title: ["Scenario C: The inaccessible meeting", "صورتِ حال ج: ناقابلِ رسائی اجلاس"],
          situation: ["A faculty member using crutches cannot reach a meeting because it is being held on an upper floor.", "بیساکھیاں استعمال کرنے والی ایک فیکلٹی ممبر اجلاس میں نہیں پہنچ سکتیں کیونکہ اجلاس بالائی منزل پر ہو رہا ہے۔"],
          answer: ["Ask about their needs, then move the meeting to a ground-floor room or arrange another suitable way for them to take part.", "ان کی ضرورت کے بارے میں پوچھیں، پھر اجلاس کو زمینی منزل کے کسی کمرے میں منتقل کریں یا ان کی شرکت کا کوئی اور مناسب طریقہ ترتیب دیں۔"] }
      ]
    },
    {
      id: "apply",
      type: "checklist",
      title: ["Apply: five-minute campus safety check", "عمل: پانچ منٹ کا کیمپس سیفٹی جائزہ"],
      blocks: [
        { t: "p", x: ["Look at your usual work or study area, without testing equipment or entering restricted spaces. Tick each item once you have checked it. If you find a problem, report it.",
                      "اپنے کام یا پڑھائی کی معمول کی جگہ کا جائزہ لیں، کسی آلے کو آزمائے یا ممنوعہ جگہ میں داخل ہوئے بغیر۔ ہر چیز کو دیکھ لینے کے بعد اس پر نشان لگا دیں۔ اگر کوئی مسئلہ ملے تو اس کی اطلاع دیں۔"] },
        { t: "note", x: ["Finding a hazard does not stop you completing the module. Recognizing and reporting it is the aim.",
                         "کوئی خطرہ مل جانا ماڈیول مکمل کرنے میں رکاوٹ نہیں۔ اسے پہچاننا اور اس کی اطلاع دینا ہی اصل مقصد ہے۔"] },
        { t: "h", x: ["I have checked whether:", "میں نے دیکھ لیا ہے کہ آیا:"] }
      ],
      items: [
        ["Walkways are clear of cables, bags and boxes.", "راستے تاروں، بیگوں اور ڈبوں سے خالی ہیں۔"],
        ["Floors are dry and free of visible damage.", "فرش خشک ہیں اور ان میں کوئی واضح ٹوٹ پھوٹ نہیں۔"],
        ["Stairs have handrails within reach and intact slip-resistant surfaces.", "سیڑھیوں پر ریلنگ پہنچ میں ہے اور پھسلن روکنے والی سطح درست حالت میں ہے۔"],
        ["Lighting is adequate along the route.", "راستے میں روشنی کافی ہے۔"],
        ["No visibly damaged electrical equipment is in use.", "کوئی واضح طور پر خراب برقی آلہ استعمال میں نہیں۔"],
        ["The accessible entrance and route are unobstructed.", "قابلِ رسائی داخلی راستے میں کوئی رکاوٹ نہیں۔"],
        ["Accessible washrooms are usable and free of storage.", "قابلِ رسائی واش روم قابلِ استعمال ہیں اور ان میں سامان نہیں رکھا گیا۔"],
        ["I know how to report a hazard and request accessibility assistance.", "مجھے معلوم ہے کہ خطرے کی اطلاع کیسے دینی ہے اور رسائی میں مدد کیسے مانگنی ہے۔"]
      ]
    }
  ],
  /* answer: the id of the correct option. The same answer key must also be in the Apps Script (MODULES.m2.key). */
  quiz: [
    { q: ["A corridor floor is wet after cleaning. What gives the best protection?", "صفائی کے بعد راہداری کا فرش گیلا ہے۔ سب سے بہتر تحفظ کس سے ملتا ہے؟"],
      options: { a: ["A sign while everyone continues walking through", "بورڈ لگا ہو اور سب وہیں سے گزرتے رہیں"], b: ["Restricting access until dry and providing a safe alternative route", "خشک ہونے تک راستہ بند رکھنا اور محفوظ متبادل راستہ فراہم کرنا"], c: ["Asking people to walk faster", "لوگوں سے تیز چلنے کو کہنا"] },
      answer: "b", feedback: ["Keep people off the wet floor; signs alone are not enough.", "لوگوں کو گیلے فرش سے دور رکھیں؛ صرف بورڈ کافی نہیں۔"] },
    { q: ["You notice a loose stair handrail. What should you do?", "آپ دیکھتے ہیں کہ سیڑھیوں کی ریلنگ ڈھیلی ہے۔ آپ کو کیا کرنا چاہیے؟"],
      options: { a: ["Avoid using it and report the defect promptly", "اسے استعمال نہ کریں اور فوراً خرابی کی اطلاع دیں"], b: ["Test it by pulling harder", "زور سے کھینچ کر آزمائیں"], c: ["Ignore it unless someone falls", "جب تک کوئی گر نہ جائے نظرانداز کریں"] },
      answer: "a", feedback: ["A loose handrail needs prompt attention.", "ڈھیلی ریلنگ پر فوری توجہ ضروری ہے۔"] },
    { q: ["You need to carry a large box down the stairs and it blocks your view of the steps. What should you do?", "آپ کو ایک بڑا ڈبہ سیڑھیوں سے نیچے لے جانا ہے اور وہ آپ کو سیڑھیاں دیکھنے نہیں دیتا۔ آپ کو کیا کرنا چاہیے؟"],
      options: { a: ["Carry it down quickly", "اسے جلدی سے نیچے لے جائیں"], b: ["Carry it on your shoulder without holding the handrail", "ریلنگ پکڑے بغیر اسے کندھے پر اٹھا کر لے جائیں"], c: ["Get help or suitable equipment so you can see the steps and use the handrail", "مدد یا مناسب آلات حاصل کریں تاکہ آپ سیڑھیاں دیکھ سکیں اور ریلنگ پکڑ سکیں"] },
      answer: "c", feedback: ["Do not carry loads that block your view; arrange help for bulky items.", "ایسا سامان نہ اٹھائیں جو نظر کے سامنے رکاوٹ بنے؛ بڑے سامان کے لیے مدد کا انتظام کریں۔"] },
    { q: ["A power cable has exposed wires. What is the safest response?", "بجلی کی تار کی اندرونی تاریں ننگی ہیں۔ سب سے محفوظ ردِعمل کیا ہے؟"],
      options: { a: ["Cover it with tape and continue", "ٹیپ لگا کر کام جاری رکھیں"], b: ["Stop using the equipment, keep clear and report it", "آلے کا استعمال روک دیں، دور رہیں اور اطلاع دیں"], c: ["Ask a student to reconnect it", "کسی طالب علم سے کہیں کہ اسے دوبارہ جوڑ دے"] },
      answer: "b", feedback: ["Unsafe electrical equipment must not stay in use.", "غیر محفوظ برقی آلہ استعمال میں نہیں رہنا چاہیے۔"] },
    { q: ["Boxes block the only entrance ramp. What is the right action?", "واحد داخلی ریمپ ڈبوں سے بند ہے۔ درست اقدام کیا ہے؟"],
      options: { a: ["Arrange their safe removal and keep the route clear", "انہیں محفوظ طریقے سے ہٹوائیں اور راستہ خالی رکھیں"], b: ["Leave them until the end of the week", "ہفتے کے آخر تک وہیں رہنے دیں"], c: ["Carry anyone who cannot use the stairs", "جو سیڑھیاں استعمال نہ کر سکے اسے اٹھا کر لے جائیں"] },
      answer: "a", feedback: ["Accessible routes must stay usable.", "قابلِ رسائی راستے ہمیشہ قابلِ استعمال رہنے چاہییں۔"] },
    { q: ["Before helping someone who uses a wheelchair, you should:", "وہیل چیئر استعمال کرنے والے کسی فرد کی مدد سے پہلے آپ کو چاہیے کہ:"],
      options: { a: ["Start pushing the chair", "کرسی دھکیلنا شروع کر دیں"], b: ["Ask their companion instead of them", "ان کے بجائے ان کے ساتھی سے پوچھیں"], c: ["Ask the person whether and how they would like assistance", "اسی فرد سے پوچھیں کہ آیا اور کس طرح کی مدد چاہیے"] },
      answer: "c", feedback: ["Assistance requires respect and consent.", "مدد کے لیے احترام اور رضامندی ضروری ہے۔"] },
    { q: ["Someone trips over a cable but does not fall. This is:", "کوئی تار سے ٹھوکر کھاتا ہے مگر گرتا نہیں۔ یہ:"],
      options: { a: ["Not worth reporting", "اطلاع دینے کے قابل نہیں"], b: ["A near miss that should be reported", "بال بال بچنے کا واقعہ ہے جس کی اطلاع دینی چاہیے"], c: ["Only a concern if equipment is damaged", "صرف تب تشویش کی بات ہے جب کوئی آلہ خراب ہو"] },
      answer: "b", feedback: ["Reporting near misses helps prevent future injuries.", "بال بال بچنے کے واقعات کی اطلاع آئندہ چوٹوں سے بچاتی ہے۔"] },
    { q: ["An accessible washroom is being used for storage. What should happen?", "ایک قابلِ رسائی واش روم کو سامان رکھنے کے لیے استعمال کیا جا رہا ہے۔ کیا ہونا چاہیے؟"],
      options: { a: ["Keep it locked", "اسے تالا لگا کر رکھیں"], b: ["Leave the items if another washroom exists upstairs", "اگر اوپر کی منزل پر دوسرا واش روم ہے تو سامان وہیں رہنے دیں"], c: ["Report the obstruction and restore its intended use", "رکاوٹ کی اطلاع دیں اور اسے اس کے اصل مقصد کے لیے بحال کریں"] },
      answer: "c", feedback: ["Accessible facilities must stay available.", "قابلِ رسائی سہولیات ہمیشہ دستیاب رہنی چاہییں۔"] }
  ]
};
