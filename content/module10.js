/* Module 10: IT Safety and Responsible Use of Learning Resources.
   Every piece of text is a pair: [English, Urdu].
   URDU IS A DRAFT TRANSLATION - to be reviewed and corrected by Prof. Amin before launch.
   KGMC's IT helpdesk, approved platforms, library addresses and policies were left blank in the
   source document; this module points learners to the IT Lab staff and library staff until confirmed.
   Block types are the same as in module1.js. */
window.KGMC_CONTENT = window.KGMC_CONTENT || {};
window.KGMC_CONTENT.m10 = {
  version: "1.0",
  title: ["IT safety and responsible use of learning resources", "آئی ٹی کی حفاظت اور تعلیمی وسائل کا ذمہ دارانہ استعمال"],
  sections: [
    {
      id: "start",
      title: ["Start: “Your account will be blocked”", "آغاز: ”آپ کا اکاؤنٹ بند کر دیا جائے گا“"],
      blocks: [
        { t: "p", x: ["A student receives a message showing the college logo: “Your learning account will be blocked today. Open this link and enter your password and verification code immediately.” She is preparing for an examination and is worried about losing access.",
                      "ایک طالبہ کو کالج کے لوگو والا پیغام ملتا ہے: ”آپ کا تعلیمی اکاؤنٹ آج بند کر دیا جائے گا۔ یہ لنک کھولیں اور فوراً اپنا پاس ورڈ اور تصدیقی کوڈ درج کریں۔“ وہ امتحان کی تیاری کر رہی ہے اور رسائی کھونے سے پریشان ہے۔"] },
        { t: "think", x: ["Think: Does the logo prove that the message is genuine? Should a verification code ever be shared? How can she check safely?",
                          "سوچیں: کیا لوگو سے ثابت ہوتا ہے کہ پیغام اصلی ہے؟ کیا تصدیقی کوڈ کبھی کسی کو دینا چاہیے؟ وہ محفوظ طریقے سے کیسے تصدیق کر سکتی ہے؟"] },
        { t: "key", x: ["Protect your account. Check before clicking. Share information carefully. Use learning resources honestly.",
                        "اپنے اکاؤنٹ کی حفاظت کریں۔ کلک کرنے سے پہلے تصدیق کریں۔ معلومات احتیاط سے شیئر کریں۔ تعلیمی وسائل دیانت داری سے استعمال کریں۔"] }
      ]
    },
    {
      id: "objectives",
      title: ["What you will learn", "آپ کیا سیکھیں گے"],
      blocks: [
        { t: "p", x: ["After completing this module, you should be able to:", "یہ ماڈیول مکمل کرنے کے بعد آپ اس قابل ہوں گے کہ:"] },
        { t: "ol", items: [
          ["Apply basic account and device-security practices.", "اکاؤنٹ اور آلات کی حفاظت کے بنیادی طریقے اپنا سکیں۔"],
          ["Recognize and report suspicious messages.", "مشکوک پیغامات کو پہچان اور رپورٹ کر سکیں۔"],
          ["Protect confidential college, student, staff and patient information.", "کالج، طلبہ، عملے اور مریضوں کی خفیہ معلومات کی حفاظت کر سکیں۔"],
          ["Store work safely and understand what backups are for.", "اپنا کام محفوظ طریقے سے رکھ سکیں اور بیک اپ کا مقصد سمجھ سکیں۔"],
          ["Use library resources and AI tools responsibly.", "لائبریری کے وسائل اور اے آئی ٹولز ذمہ داری سے استعمال کر سکیں۔"],
          ["Report technical problems and security incidents promptly.", "تکنیکی مسائل اور سکیورٹی کے واقعات کی فوراً اطلاع دے سکیں۔"]
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
            [["Students and all staff", "طلبہ اور تمام عملہ"], ["Protect accounts, use approved services, handle information carefully and report concerns.", "اکاؤنٹ کی حفاظت کریں، منظور شدہ خدمات استعمال کریں، معلومات احتیاط سے سنبھالیں اور خدشات کی اطلاع دیں۔"]],
            [["Faculty", "اساتذہ"], ["Protect assessment materials, check teaching content and explain acceptable use of digital tools.", "امتحانی مواد کی حفاظت کریں، تدریسی مواد کی جانچ کریں اور ڈیجیٹل ٹولز کا قابلِ قبول استعمال سمجھائیں۔"]],
            [["Administrative staff", "انتظامی عملہ"], ["Restrict access to sensitive records and check recipients before sharing.", "حساس ریکارڈ تک رسائی محدود رکھیں اور شیئر کرنے سے پہلے وصول کنندہ کی جانچ کریں۔"]],
            [["Library staff", "لائبریری کا عملہ"], ["Explain subscriptions, access conditions, reliable searching and responsible reuse.", "سبسکرپشن، رسائی کی شرائط، قابلِ اعتماد تلاش اور ذمہ دارانہ دوبارہ استعمال سمجھائیں۔"]],
            [["IT staff", "آئی ٹی عملہ"], ["Maintain secure systems, accounts, backups, connectivity and incident response.", "محفوظ نظام، اکاؤنٹ، بیک اپ، انٹرنیٹ اور واقعات سے نمٹنے کا انتظام برقرار رکھیں۔"]],
            [["College management", "کالج انتظامیہ"], ["Approve policies, provide resources and review service and security performance.", "پالیسیاں منظور کریں، وسائل فراہم کریں اور خدمات اور سکیورٹی کی کارکردگی کا جائزہ لیں۔"]]
          ] },
        { t: "note", x: ["Anyone with little digital experience can ask for help, and should never have to reveal a password to get it.",
                         "جسے ڈیجیٹل تجربہ کم ہو وہ مدد مانگ سکتا ہے، اور مدد لینے کے لیے اسے کبھی پاس ورڈ بتانا نہیں پڑنا چاہیے۔"] },
        { t: "img", src: "images/m10-it-lab-kgmc.jpg",
          alt: ["The IT Lab at KGMC with rows of computers along the walls", "کے جی ایم سی کی آئی ٹی لیب جس میں دیواروں کے ساتھ کمپیوٹروں کی قطاریں ہیں"],
          cap: ["The IT Lab, KGMC. Sign out of every account when you finish.", "کے جی ایم سی کی آئی ٹی لیب۔ کام ختم ہونے پر ہر اکاؤنٹ سے سائن آؤٹ کریں۔"] }
      ]
    },
    {
      id: "account",
      title: ["Protect your account", "اپنے اکاؤنٹ کی حفاظت کریں"],
      blocks: [
        { t: "ul", items: [
          ["Use a long, unique password or passphrase for each important account.", "ہر اہم اکاؤنٹ کے لیے لمبا اور الگ پاس ورڈ یا پاس فریز استعمال کریں۔"],
          ["Use a password manager approved by the college, where one is available.", "جہاں دستیاب ہو، کالج کا منظور شدہ پاس ورڈ مینیجر استعمال کریں۔"],
          ["Turn on multi-factor authentication (MFA).", "ملٹی فیکٹر تصدیق (ایم ایف اے) چالو کریں۔"],
          ["Never share passwords, one-time codes or recovery codes.", "پاس ورڈ، ایک بار کے کوڈ یا ریکوری کوڈ کبھی کسی کو نہ بتائیں۔"],
          ["Do not approve a login request you were not expecting.", "ایسی لاگ اِن درخواست منظور نہ کریں جس کی آپ کو توقع نہ تھی۔"],
          ["Keep recovery details up to date and recovery codes secure.", "ریکوری کی تفصیلات تازہ اور ریکوری کوڈ محفوظ رکھیں۔"],
          ["Lock your screen when you step away.", "اٹھتے وقت اسکرین لاک کریں۔"],
          ["Sign out when using a shared computer.", "مشترکہ کمپیوٹر استعمال کرنے کے بعد سائن آؤٹ کریں۔"],
          ["Do not save passwords in a shared browser.", "مشترکہ براؤزر میں پاس ورڈ محفوظ نہ کریں۔"]
        ] },
        { t: "note", x: ["MFA adds a second check, which makes it harder for someone to get in even if your password is stolen.",
                         "ایم ایف اے ایک دوسری تصدیق کا اضافہ کرتی ہے، جس سے پاس ورڈ چوری ہونے پر بھی کسی کا داخل ہونا مشکل ہو جاتا ہے۔"] },
        { t: "warn", x: ["Do not give your password to someone who says they are from IT support. Use the approved password-reset process.",
                         "اپنا پاس ورڈ کسی ایسے شخص کو نہ دیں جو خود کو آئی ٹی سپورٹ کا بتائے۔ پاس ورڈ بدلنے کا منظور شدہ طریقہ استعمال کریں۔"] }
      ]
    },
    {
      id: "phishing",
      title: ["Recognize phishing and impersonation", "فشنگ اور جعل سازی کو پہچانیں"],
      blocks: [
        { t: "p", x: ["Phishing is an attempt to trick someone into revealing information, opening harmful content or doing something unsafe. It can arrive by email, SMS, messaging apps, phone calls or QR codes.",
                      "فشنگ کسی کو دھوکا دے کر معلومات نکلوانے، نقصان دہ مواد کھلوانے یا کوئی غیر محفوظ کام کروانے کی کوشش ہے۔ یہ ای میل، ایس ایم ایس، میسجنگ ایپس، فون کال یا کیو آر کوڈ کے ذریعے آ سکتی ہے۔"] },
        { t: "h", x: ["Warning signs", "خطرے کی علامات"] },
        { t: "ul", items: [
          ["Pressure to act immediately.", "فوراً عمل کرنے کا دباؤ۔"],
          ["Requests for passwords, codes or confidential records.", "پاس ورڈ، کوڈ یا خفیہ ریکارڈ کا مطالبہ۔"],
          ["Unexpected attachments or login links.", "غیر متوقع منسلکات یا لاگ اِن لنک۔"],
          ["An address or website that differs from the genuine one.", "ایسا پتا یا ویب سائٹ جو اصلی سے مختلف ہو۔"],
          ["Unusual requests about payments or account changes.", "ادائیگی یا اکاؤنٹ میں تبدیلی کی غیر معمولی درخواستیں۔"],
          ["A message that does not match normal college procedures.", "ایسا پیغام جو کالج کے معمول کے طریقوں سے میل نہ کھائے۔"]
        ] },
        { t: "warn", x: ["A familiar name, a logo or correct grammar does not prove a message is genuine.", "جانا پہچانا نام، لوگو یا درست زبان پیغام کے اصلی ہونے کا ثبوت نہیں۔"] },
        { t: "h", x: ["What to do", "کیا کریں"] },
        { t: "ol", items: [
          ["Pause.", "رک جائیں۔"],
          ["Do not open unexpected links or attachments.", "غیر متوقع لنک یا منسلکات نہ کھولیں۔"],
          ["Check through a website you know, a saved bookmark or a contact you found independently.", "کسی جانی پہچانی ویب سائٹ، محفوظ بک مارک یا خود تلاش کیے گئے رابطے کے ذریعے تصدیق کریں۔"],
          ["Report it through the college’s IT channel.", "کالج کے آئی ٹی ذریعے سے اس کی اطلاع دیں۔"],
          ["Follow instructions about keeping or deleting the message.", "پیغام محفوظ رکھنے یا حذف کرنے کی ہدایات پر عمل کریں۔"]
        ] },
        { t: "note", x: ["Never use the phone number or link inside a suspicious message to check it. Open the learning platform from your own saved bookmark.",
                         "مشکوک پیغام کی تصدیق کے لیے اسی میں دیا گیا فون نمبر یا لنک کبھی استعمال نہ کریں۔ تعلیمی پلیٹ فارم اپنے محفوظ بک مارک سے کھولیں۔"] }
      ]
    },
    {
      id: "devices",
      title: ["Use devices and networks safely", "آلات اور نیٹ ورک محفوظ طریقے سے استعمال کریں"],
      blocks: [
        { t: "ul", items: [
          ["Install updates through the approved arrangements.", "اپ ڈیٹس منظور شدہ طریقے سے انسٹال کریں۔"],
          ["Use licensed, approved software.", "لائسنس یافتہ اور منظور شدہ سافٹ ویئر استعمال کریں۔"],
          ["Do not switch off security protection.", "حفاظتی نظام بند نہ کریں۔"],
          ["Do not plug in an unknown USB drive.", "نامعلوم یو ایس بی نہ لگائیں۔"],
          ["Check the official campus Wi-Fi name with IT.", "کیمپس کے سرکاری وائی فائی کا نام آئی ٹی سے معلوم کریں۔"],
          ["Do not bypass browser security warnings.", "براؤزر کی حفاظتی تنبیہات کو نظرانداز نہ کریں۔"],
          ["Keep liquids away from computers and power equipment.", "مائعات کو کمپیوٹر اور بجلی کے آلات سے دور رکھیں۔"],
          ["Report overheating, damaged cables or unusual device behaviour.", "زیادہ گرم ہونے، خراب تاروں یا آلے کے غیر معمولی رویے کی اطلاع دیں۔"],
          ["Get permission before installing applications on college computers.", "کالج کے کمپیوٹروں پر ایپلیکیشن انسٹال کرنے سے پہلے اجازت لیں۔"]
        ] },
        { t: "h", x: ["On shared computers", "مشترکہ کمپیوٹروں پر"] },
        { t: "ul", items: [
          ["Check that the previous user has signed out.", "دیکھیں کہ پچھلے صارف نے سائن آؤٹ کر دیا ہے۔"],
          ["Do not download confidential records unless you are explicitly authorized.", "واضح اجازت کے بغیر خفیہ ریکارڈ ڈاؤن لوڈ نہ کریں۔"],
          ["Do not leave sensitive files in shared folders or printer trays.", "حساس فائلیں مشترکہ فولڈروں یا پرنٹر کی ٹرے میں نہ چھوڑیں۔"],
          ["Sign out of every account when you finish.", "کام ختم ہونے پر ہر اکاؤنٹ سے سائن آؤٹ کریں۔"]
        ] },
        { t: "note", x: ["Private or incognito browsing does not make a shared computer secure or make your activity invisible.",
                         "پرائیویٹ یا اِن کاگنیٹو براؤزنگ مشترکہ کمپیوٹر کو محفوظ نہیں بناتی اور نہ آپ کی سرگرمی کو چھپاتی ہے۔"] },
        { t: "img", src: "images/m10-slrc-kgmc.jpg",
          alt: ["The entrance to the Self Learning Resource Center at KGMC", "کے جی ایم سی کے سیلف لرننگ ریسورس سینٹر کا دروازہ"],
          cap: ["The Self Learning Resource Center (SLRC), KGMC.", "کے جی ایم سی کا سیلف لرننگ ریسورس سینٹر (ایس ایل آر سی)۔"] }
      ]
    },
    {
      id: "confidential",
      title: ["Protect confidential information", "خفیہ معلومات کی حفاظت کریں"],
      blocks: [
        { t: "h", x: ["Examples", "مثالیں"] },
        { t: "ul", items: [
          ["Student marks and personal details.", "طلبہ کے نمبر اور ذاتی تفصیلات۔"],
          ["Examination questions, answer keys and assessment banks.", "امتحانی سوالات، جوابی کلید اور سوالات کے ذخیرے۔"],
          ["Staff records and disciplinary information.", "عملے کے ریکارڈ اور تادیبی معلومات۔"],
          ["Patient information and identifiable clinical photographs.", "مریضوں کی معلومات اور شناخت ظاہر کرنے والی طبی تصاویر۔"],
          ["Research participant data.", "تحقیق کے شرکاء کا ڈیٹا۔"],
          ["Vaccination and occupational-exposure records.", "ویکسینیشن اور پیشہ ورانہ رابطے کے ریکارڈ۔"],
          ["Passwords, access codes and system information.", "پاس ورڈ، رسائی کے کوڈ اور نظام کی معلومات۔"]
        ] },
        { t: "h", x: ["Before sharing, check:", "شیئر کرنے سے پہلے دیکھیں:"] },
        { t: "ol", items: [
          ["Purpose: does the recipient need this information?", "مقصد: کیا وصول کنندہ کو اس معلومات کی ضرورت ہے؟"],
          ["Recipient: is the address or account correct?", "وصول کنندہ: کیا پتا یا اکاؤنٹ درست ہے؟"],
          ["Content: can unnecessary identifying details be removed?", "مواد: کیا غیر ضروری شناختی تفصیلات ہٹائی جا سکتی ہیں؟"],
          ["Method: is the sharing platform approved?", "طریقہ: کیا شیئر کرنے کا پلیٹ فارم منظور شدہ ہے؟"],
          ["Permission: is access limited to the intended people?", "اجازت: کیا رسائی صرف مطلوبہ افراد تک محدود ہے؟"]
        ] },
        { t: "warn", x: ["For confidential material, use restricted sharing links, not “anyone with the link”. Do not move sensitive information to personal email or public messaging groups without authorization.",
                         "خفیہ مواد کے لیے محدود شیئرنگ لنک استعمال کریں، ”لنک رکھنے والا کوئی بھی“ نہیں۔ اجازت کے بغیر حساس معلومات ذاتی ای میل یا عوامی میسجنگ گروپوں میں منتقل نہ کریں۔"] },
        { t: "note", x: ["Photographs and recordings: get the permission required and follow college policy. Removing a name may not remove everything that identifies a person.",
                         "تصاویر اور ریکارڈنگ: درکار اجازت لیں اور کالج کی پالیسی پر عمل کریں۔ صرف نام ہٹانے سے ضروری نہیں کہ شناخت ظاہر کرنے والی ہر چیز ہٹ جائے۔"] }
      ]
    },
    {
      id: "backups",
      title: ["Save your work and understand backups", "اپنا کام محفوظ کریں اور بیک اپ کو سمجھیں"],
      blocks: [
        { t: "table",
          head: [["Term", "اصطلاح"], ["What it does", "یہ کیا کرتا ہے"]],
          rows: [
            [["Saving", "محفوظ کرنا"], ["Keeps the current file.", "موجودہ فائل کو برقرار رکھتا ہے۔"]],
            [["Synchronization", "سنکرونائزیشن"], ["Updates copies across locations.", "مختلف جگہوں پر موجود نقول کو تازہ کرتا ہے۔"]],
            [["Backup", "بیک اپ"], ["Gives a copy you can recover if work is lost, corrupted or compromised.", "ایسی نقل دیتا ہے جسے کام ضائع، خراب یا متاثر ہونے پر بحال کیا جا سکے۔"]]
          ] },
        { t: "warn", x: ["A deletion or infection that is synchronized can affect every copy. Synchronization alone is not a complete backup.",
                         "حذف ہونا یا وائرس اگر سنک ہو جائے تو ہر نقل متاثر ہو سکتی ہے۔ صرف سنکرونائزیشن مکمل بیک اپ نہیں۔"] },
        { t: "h", x: ["For learners and staff", "طلبہ اور عملے کے لیے"] },
        { t: "ul", items: [
          ["Save college work in approved storage.", "کالج کا کام منظور شدہ جگہ پر محفوظ کریں۔"],
          ["Use clear file names and version information.", "فائلوں کے واضح نام اور ورژن کی معلومات استعمال کریں۔"],
          ["Check that important work has saved successfully.", "دیکھ لیں کہ اہم کام کامیابی سے محفوظ ہو گیا ہے۔"],
          ["Do not keep the only copy on a laptop or USB drive.", "واحد نقل صرف لیپ ٹاپ یا یو ایس بی پر نہ رکھیں۔"],
          ["Ask IT which locations are backed up.", "آئی ٹی سے پوچھیں کہ کن جگہوں کا بیک اپ لیا جاتا ہے۔"],
          ["Do not make unauthorized personal copies of confidential records.", "خفیہ ریکارڈ کی بلا اجازت ذاتی نقول نہ بنائیں۔"]
        ] },
        { t: "note", x: ["For IT staff: keep protected backups, including copies kept apart from everyday systems, and test regularly that they can be restored. Off-site copies protect against building incidents such as fire; offline copies reduce the risk from ransomware.",
                         "آئی ٹی عملے کے لیے: محفوظ بیک اپ رکھیں، بشمول روزمرہ نظام سے الگ رکھی گئی نقول، اور باقاعدگی سے جانچیں کہ انہیں بحال کیا جا سکتا ہے۔ عمارت سے باہر رکھی نقول آگ جیسے واقعات سے بچاتی ہیں؛ آف لائن نقول رینسم ویئر کا خطرہ کم کرتی ہیں۔"] }
      ]
    },
    {
      id: "library",
      title: ["Use library and learning resources responsibly", "لائبریری اور تعلیمی وسائل ذمہ داری سے استعمال کریں"],
      blocks: [
        { t: "img", src: "images/m10-library-area-for-students-kgmc.jpg",
          alt: ["The KGMC library with reading tables and bookshelves", "کے جی ایم سی کی لائبریری جس میں مطالعے کی میزیں اور کتابوں کی الماریاں ہیں"],
          cap: ["The library, KGMC. Ask library staff if you cannot find or open a resource.", "کے جی ایم سی کی لائبریری۔ کوئی وسیلہ نہ ملے یا نہ کھلے تو لائبریری کے عملے سے پوچھیں۔"] },
        { t: "ul", items: [
          ["Reach resources through the official library route, using your own account.", "وسائل تک سرکاری لائبریری کے راستے سے، اپنے اکاؤنٹ کے ذریعے پہنچیں۔"],
          ["Do not share subscription passwords.", "سبسکرپشن کے پاس ورڈ کسی کو نہ دیں۔"],
          ["Follow licence conditions and download limits.", "لائسنس کی شرائط اور ڈاؤن لوڈ کی حدود پر عمل کریں۔"],
          ["Do not use automated bulk downloading without authorization.", "اجازت کے بغیر خودکار طریقے سے بڑی تعداد میں ڈاؤن لوڈ نہ کریں۔"],
          ["Ask library staff about unavailable articles, accessible formats or legitimate alternatives.", "دستیاب نہ ہونے والے مضامین، قابلِ رسائی شکلوں یا جائز متبادل کے بارے میں لائبریری کے عملے سے پوچھیں۔"],
          ["Cite sources when you use their ideas, words, images or data.", "جب کسی کے خیالات، الفاظ، تصاویر یا ڈیٹا استعمال کریں تو حوالہ دیں۔"],
          ["Check permissions or licences before passing material on.", "مواد آگے دینے سے پہلے اجازت یا لائسنس دیکھیں۔"]
        ] },
        { t: "key", x: ["Citation and permission are different. Giving credit does not automatically allow copying or public distribution.",
                        "حوالہ اور اجازت الگ چیزیں ہیں۔ حوالہ دینے سے نقل کرنے یا عام تقسیم کی خود بخود اجازت نہیں مل جاتی۔"] },
        { t: "h", x: ["Check information before you use it", "معلومات استعمال کرنے سے پہلے جانچیں"] },
        { t: "ul", items: [
          ["Who produced it, and what are their qualifications?", "اسے کس نے تیار کیا اور ان کی اہلیت کیا ہے؟"],
          ["Is it supported by evidence you can identify?", "کیا اس کی تائید قابلِ شناخت شواہد سے ہوتی ہے؟"],
          ["When was it published or updated?", "یہ کب شائع یا تازہ ہوئی؟"],
          ["Does it apply to the relevant population and setting?", "کیا یہ متعلقہ آبادی اور ماحول پر لاگو ہوتی ہے؟"],
          ["Are commercial interests or conflicts disclosed?", "کیا تجارتی مفادات یا تضادات ظاہر کیے گئے ہیں؟"],
          ["Do other reliable sources support the claim?", "کیا دوسرے قابلِ اعتماد ذرائع اس دعوے کی تائید کرتے ہیں؟"]
        ] },
        { t: "note", x: ["Check medical information against authoritative sources and the original evidence. A search result or social-media post is not enough.",
                         "طبی معلومات کو مستند ذرائع اور اصل شواہد سے جانچیں۔ سرچ کا نتیجہ یا سوشل میڈیا کی پوسٹ کافی نہیں۔"] }
      ]
    },
    {
      id: "ai",
      title: ["Responsible use of AI and online learning", "اے آئی اور آن لائن تعلیم کا ذمہ دارانہ استعمال"],
      blocks: [
        { t: "p", x: ["AI tools can help explain concepts, organize material and draft text, but what they produce can contain errors, invented references and misleading conclusions.",
                      "اے آئی ٹولز تصورات سمجھانے، مواد ترتیب دینے اور متن کا مسودہ بنانے میں مدد دے سکتے ہیں، مگر ان کے نتائج میں غلطیاں، من گھڑت حوالے اور گمراہ کن نتائج ہو سکتے ہیں۔"] },
        { t: "ul", items: [
          ["Follow the permitted-use instructions for each assignment or assessment.", "ہر اسائنمنٹ یا امتحان کے لیے اجازت شدہ استعمال کی ہدایات پر عمل کریں۔"],
          ["Check factual claims and references.", "حقائق کے دعووں اور حوالوں کی جانچ کریں۔"],
          ["Do not submit AI-generated work as entirely your own where this breaks assessment rules.", "جہاں یہ امتحانی اصولوں کے خلاف ہو، اے آئی کا تیار کردہ کام مکمل طور پر اپنا بنا کر جمع نہ کروائیں۔"],
          ["Say that you used AI help when this is required.", "جب ضروری ہو تو بتائیں کہ آپ نے اے آئی کی مدد لی۔"],
          ["Do not upload confidential patient, student, staff, research or examination material to an unapproved AI service.", "مریضوں، طلبہ، عملے، تحقیق یا امتحان کا خفیہ مواد کسی غیر منظور شدہ اے آئی سروس پر اپ لوڈ نہ کریں۔"],
          ["You remain responsible for the final work.", "حتمی کام کی ذمہ داری آپ ہی کی رہتی ہے۔"]
        ] },
        { t: "h", x: ["For this safety program", "اس حفاظتی پروگرام کے لیے"] },
        { t: "ul", items: [
          ["Complete your own quiz.", "اپنا کوئز خود مکمل کریں۔"],
          ["Do not ask someone else to log in and earn your certificate.", "کسی اور سے یہ نہ کہیں کہ آپ کی جگہ لاگ اِن ہو کر سرٹیفکیٹ حاصل کرے۔"],
          ["Help with reading, language or navigation is welcome, but your answers should show your own understanding.", "پڑھنے، زبان یا استعمال میں مدد لینا درست ہے، مگر جوابات آپ کی اپنی سمجھ کے مطابق ہونے چاہییں۔"],
          ["If something is hard to access, report it; do not share your login.", "اگر رسائی میں کوئی دشواری ہو تو اطلاع دیں؛ اپنا لاگ اِن کسی کو نہ دیں۔"]
        ] }
      ]
    },
    {
      id: "incident",
      title: ["Respond to an IT incident", "آئی ٹی کے واقعے پر ردِعمل"],
      blocks: [
        { t: "h", x: ["Report:", "اطلاع دیں:"] },
        { t: "ul", items: [
          ["A suspicious message or an unexpected MFA request.", "مشکوک پیغام یا غیر متوقع ایم ایف اے درخواست۔"],
          ["A lost device that holds college information.", "گم شدہ آلہ جس میں کالج کی معلومات ہوں۔"],
          ["A password or code entered into a suspicious website.", "مشکوک ویب سائٹ میں درج کیا گیا پاس ورڈ یا کوڈ۔"],
          ["Confidential information sent to the wrong person.", "غلط شخص کو بھیجی گئی خفیہ معلومات۔"],
          ["Files that are unexpectedly locked, ransom messages or apparent malware.", "اچانک لاک ہو جانے والی فائلیں، تاوان کے پیغامات یا بظاہر نقصان دہ سافٹ ویئر۔"],
          ["Unauthorized access or changes to records.", "ریکارڈ تک بلا اجازت رسائی یا ان میں تبدیلی۔"]
        ] },
        { t: "h", x: ["If you already clicked or shared information", "اگر آپ پہلے ہی کلک کر چکے یا معلومات دے چکے ہیں"] },
        { t: "ol", items: [
          ["Stop interacting with the suspicious content.", "مشکوک مواد سے مزید رابطہ روک دیں۔"],
          ["Contact IT immediately through a trusted channel.", "فوراً قابلِ اعتماد ذریعے سے آئی ٹی سے رابطہ کریں۔"],
          ["Explain what happened, when, and what information may be involved.", "بتائیں کہ کیا ہوا، کب ہوا اور کون سی معلومات متاثر ہو سکتی ہیں۔"],
          ["If you gave away a password, change it promptly from a trusted device on the genuine service, with IT’s help for college accounts.", "اگر پاس ورڈ دے دیا ہے تو قابلِ اعتماد آلے سے اصلی سروس پر اسے فوراً بدلیں، کالج کے اکاؤنٹ کے لیے آئی ٹی کی مدد سے۔"],
          ["Keep the details; do not erase files or investigate by yourself.", "تفصیلات محفوظ رکھیں؛ فائلیں حذف نہ کریں اور خود تحقیق نہ کریں۔"]
        ] },
        { t: "warn", x: ["Suspected ransomware: disconnect the computer from the network if you can do so safely, and contact IT from another device. Do not reconnect it, pay a demand or wipe the device.",
                         "رینسم ویئر کا شبہ ہو تو: اگر محفوظ طریقے سے ممکن ہو تو کمپیوٹر کو نیٹ ورک سے الگ کریں اور کسی دوسرے آلے سے آئی ٹی سے رابطہ کریں۔ اسے دوبارہ نہ جوڑیں، تاوان ادا نہ کریں اور آلے کو صاف نہ کریں۔"] },
        { t: "key", x: ["Do not hide an accidental click or a mistaken disclosure. Early reporting reduces harm.",
                        "غلطی سے کیے گئے کلک یا غلطی سے ظاہر ہونے والی معلومات کو نہ چھپائیں۔ جلد اطلاع دینے سے نقصان کم ہوتا ہے۔"] },
        { t: "contacts", title: ["Who to tell at KGMC", "کے جی ایم سی میں کسے بتائیں"], items: [
          ["IT problems and security incidents: the IT staff at the IT Lab.", "آئی ٹی کے مسائل اور سکیورٹی کے واقعات: آئی ٹی لیب کا آئی ٹی عملہ۔"],
          ["Library access and resources: the library staff.", "لائبریری تک رسائی اور وسائل: لائبریری کا عملہ۔"]
        ] }
      ]
    },
    {
      id: "itduties",
      title: ["Extra responsibilities for IT and library staff", "آئی ٹی اور لائبریری عملے کی اضافی ذمہ داریاں"],
      blocks: [
        { t: "table",
          head: [["Area", "شعبہ"], ["What management must do", "انتظامیہ کو کیا کرنا ہے"]],
          rows: [
            [["Server-room access", "سرور روم تک رسائی"], ["Keep access authorized, control visitors and keep access records.", "رسائی صرف مجاز افراد تک رکھیں، مہمانوں کو کنٹرول کریں اور رسائی کا ریکارڈ رکھیں۔"]],
            [["Fire and environmental safety", "آگ اور ماحول کی حفاظت"], ["Maintain suitable protection, tidiness and temperature monitoring; investigate alarms and faults.", "مناسب حفاظت، صفائی اور درجۂ حرارت کی نگرانی برقرار رکھیں؛ الارم اور خرابیوں کی تحقیق کریں۔"]],
            [["Backups", "بیک اپ"], ["Define who is responsible, how often, secure separate locations and restoration testing.", "طے کریں کہ ذمہ دار کون ہے، کتنی بار، محفوظ الگ جگہیں اور بحالی کی جانچ۔"]],
            [["Campus internet", "کیمپس انٹرنیٹ"], ["Check coverage, performance and accessibility where students and faculty work.", "جہاں طلبہ اور اساتذہ کام کرتے ہیں وہاں کوریج، کارکردگی اور رسائی کی جانچ کریں۔"]],
            [["Accounts", "اکاؤنٹ"], ["Give suitable permissions and review access promptly when roles change or users leave.", "مناسب اجازتیں دیں اور کردار بدلنے یا صارف کے جانے پر فوراً رسائی کا جائزہ لیں۔"]],
            [["Library resources", "لائبریری کے وسائل"], ["Keep a current subscription list, access instructions and a way to identify gaps.", "سبسکرپشن کی تازہ فہرست، رسائی کی ہدایات اور کمی معلوم کرنے کا طریقہ رکھیں۔"]],
            [["Support", "معاونت"], ["Provide accessible reporting, ticket tracking and escalation.", "آسان رپورٹنگ، شکایات کا اندراج اور آگے پہنچانے کا انتظام فراہم کریں۔"]]
          ] },
        { t: "note", x: ["These checks need records and technical verification. Completing this module does not show that the infrastructure meets requirements.",
                         "ان جانچوں کے لیے ریکارڈ اور تکنیکی تصدیق ضروری ہے۔ یہ ماڈیول مکمل کرنے سے یہ ثابت نہیں ہوتا کہ بنیادی ڈھانچہ تقاضوں پر پورا اترتا ہے۔"] }
      ]
    },
    {
      id: "practice",
      title: ["Practice: three short scenarios", "مشق: تین مختصر صورتِ حال"],
      blocks: [
        { t: "p", x: ["Read each situation and decide what you would do. Then open the answer to check.", "ہر صورتِ حال پڑھیں اور سوچیں کہ آپ کیا کریں گے۔ پھر جواب کھول کر دیکھیں۔"] },
        { t: "scenario",
          title: ["Scenario A: The urgent account warning", "صورتِ حال الف: اکاؤنٹ کی فوری تنبیہ"],
          situation: ["A message asks for a password and verification code to stop an account being closed.", "ایک پیغام اکاؤنٹ بند ہونے سے بچانے کے لیے پاس ورڈ اور تصدیقی کوڈ مانگتا ہے۔"],
          answer: ["Do not use its link. Check the account through the official route and report the message.", "اس کا لنک استعمال نہ کریں۔ سرکاری راستے سے اکاؤنٹ دیکھیں اور پیغام کی اطلاع دیں۔"] },
        { t: "scenario",
          title: ["Scenario B: Examination questions in an AI tool", "صورتِ حال ب: اے آئی ٹول میں امتحانی سوالات"],
          situation: ["A faculty member plans to upload an unreleased examination paper to a public AI service for editing.", "ایک استاد غیر جاری شدہ امتحانی پرچہ ترمیم کے لیے کسی عوامی اے آئی سروس پر اپ لوڈ کرنے کا ارادہ رکھتی ہیں۔"],
          answer: ["Do not upload it to an unapproved service. Use the authorized confidential review process.", "اسے غیر منظور شدہ سروس پر اپ لوڈ نہ کریں۔ مجاز خفیہ جائزے کا طریقہ استعمال کریں۔"] },
        { t: "scenario",
          title: ["Scenario C: A shared-computer session", "صورتِ حال ج: مشترکہ کمپیوٹر کا سیشن"],
          situation: ["A student finishes using the digital library but leaves the account open.", "ایک طالبہ ڈیجیٹل لائبریری استعمال کر کے اکاؤنٹ کھلا چھوڑ دیتی ہے۔"],
          answer: ["Sign out. If another user finds the session open, they should not look through the previous user’s information; they should sign out or ask staff for help.", "سائن آؤٹ کریں۔ اگر کسی اور کو سیشن کھلا ملے تو وہ پچھلے صارف کی معلومات نہ دیکھے؛ سائن آؤٹ کر دے یا عملے سے مدد لے۔"] }
      ]
    },
    {
      id: "apply",
      type: "checklist",
      title: ["Apply: my digital safety checklist", "عمل: میری ڈیجیٹل حفاظت کی فہرست"],
      blocks: [
        { t: "p", x: ["Tick each item when it is true for you. Fix one routine issue today, such as turning on MFA or saving the IT contact. Never send passwords, recovery codes or sensitive screenshots as proof.",
                      "جب کوئی بات آپ پر صادق آئے تو اس پر نشان لگا دیں۔ آج ایک معمول کا مسئلہ درست کریں، جیسے ایم ایف اے چالو کرنا یا آئی ٹی کا رابطہ محفوظ کرنا۔ ثبوت کے طور پر کبھی پاس ورڈ، ریکوری کوڈ یا حساس اسکرین شاٹ نہ بھیجیں۔"] }
      ],
      items: [
        ["I use unique passwords for important accounts.", "میں اہم اکاؤنٹس کے لیے الگ الگ پاس ورڈ استعمال کرتا/کرتی ہوں۔"],
        ["MFA is turned on where it is available.", "جہاں دستیاب ہے وہاں ایم ایف اے چالو ہے۔"],
        ["I know the official learning-platform and library addresses.", "مجھے تعلیمی پلیٹ فارم اور لائبریری کے سرکاری پتے معلوم ہیں۔"],
        ["I know how to contact IT through a trusted channel.", "مجھے معلوم ہے کہ قابلِ اعتماد ذریعے سے آئی ٹی سے کیسے رابطہ کرنا ہے۔"],
        ["I lock my screen and sign out of shared devices.", "میں اسکرین لاک کرتا/کرتی ہوں اور مشترکہ آلات سے سائن آؤٹ کرتا/کرتی ہوں۔"],
        ["I save college work in approved locations.", "میں کالج کا کام منظور شدہ جگہوں پر محفوظ کرتا/کرتی ہوں۔"],
        ["I know which information must stay confidential.", "مجھے معلوم ہے کہ کون سی معلومات خفیہ رہنی چاہییں۔"],
        ["I understand the rules for sharing resources and using AI.", "میں وسائل شیئر کرنے اور اے آئی کے استعمال کے اصول سمجھتا/سمجھتی ہوں۔"],
        ["I can report a security incident or an accessibility problem.", "میں سکیورٹی کے واقعے یا رسائی کے مسئلے کی اطلاع دے سکتا/سکتی ہوں۔"]
      ]
    }
  ],
  /* answer: the id of the correct option. The same answer key must also be in the Apps Script (MODULES.m10.key). */
  quiz: [
    { q: ["Which is the safest account practice?", "اکاؤنٹ کا سب سے محفوظ طریقہ کون سا ہے؟"],
      options: { a: ["Reuse one password everywhere", "ہر جگہ ایک ہی پاس ورڈ استعمال کرنا"], b: ["Use unique passwords and MFA", "الگ الگ پاس ورڈ اور ایم ایف اے استعمال کرنا"], c: ["Share a password with a colleague", "ساتھی کو پاس ورڈ بتانا"] },
      answer: "b", feedback: ["Unique passwords and MFA strengthen protection.", "الگ پاس ورڈ اور ایم ایف اے حفاظت کو مضبوط کرتے ہیں۔"] },
    { q: ["An unexpected message asks for your verification code. You should:", "ایک غیر متوقع پیغام آپ کا تصدیقی کوڈ مانگتا ہے۔ آپ کو چاہیے کہ:"],
      options: { a: ["Share it if the logo looks genuine", "لوگو اصلی لگے تو دے دیں"], b: ["Reply asking who sent it", "جواب میں پوچھیں کہ کس نے بھیجا"], c: ["Check independently and report the request", "خود الگ سے تصدیق کریں اور اس کی اطلاع دیں"] },
      answer: "c", feedback: ["Check through a route you trust.", "قابلِ اعتماد راستے سے تصدیق کریں۔"] },
    { q: ["After using a shared computer, you should:", "مشترکہ کمپیوٹر استعمال کرنے کے بعد آپ کو چاہیے کہ:"],
      options: { a: ["Sign out of all accounts", "تمام اکاؤنٹس سے سائن آؤٹ کریں"], b: ["Leave the account open for convenience", "سہولت کے لیے اکاؤنٹ کھلا چھوڑ دیں"], c: ["Save your password in the browser", "براؤزر میں پاس ورڈ محفوظ کر لیں"] },
      answer: "a", feedback: ["Protect your accounts on shared devices.", "مشترکہ آلات پر اپنے اکاؤنٹس کی حفاظت کریں۔"] },
    { q: ["Before sharing student records, first check:", "طلبہ کا ریکارڈ شیئر کرنے سے پہلے سب سے پہلے دیکھیں:"],
      options: { a: ["Whether the attachment is small", "کہ منسلکہ فائل چھوٹی ہے یا نہیں"], b: ["The recipient, the purpose, what is necessary and the approved method", "وصول کنندہ، مقصد، ضروری معلومات اور منظور شدہ طریقہ"], c: ["Whether a messaging group is available", "کہ کوئی میسجنگ گروپ دستیاب ہے یا نہیں"] },
      answer: "b", feedback: ["Share only what is necessary, through approved channels.", "صرف ضروری معلومات، منظور شدہ ذرائع سے شیئر کریں۔"] },
    { q: ["Synchronization alone:", "صرف سنکرونائزیشن:"],
      options: { a: ["Always protects against ransomware", "ہمیشہ رینسم ویئر سے بچاتی ہے"], b: ["Makes backups unnecessary", "بیک اپ کو غیر ضروری بنا دیتی ہے"], c: ["May also copy deletions or unwanted changes", "حذف شدہ چیزوں یا ناپسندیدہ تبدیلیوں کو بھی نقل کر سکتی ہے"] },
      answer: "c", feedback: ["Synchronization is not a complete backup.", "سنکرونائزیشن مکمل بیک اپ نہیں۔"] },
    { q: ["When using a journal image in teaching, you should:", "تدریس میں کسی جریدے کی تصویر استعمال کرتے وقت آپ کو چاہیے کہ:"],
      options: { a: ["Check the reuse conditions and give proper credit", "دوبارہ استعمال کی شرائط دیکھیں اور مناسب حوالہ دیں"], b: ["Assume everything online is free to reuse", "یہ سمجھ لیں کہ آن لائن ہر چیز آزادانہ استعمال ہو سکتی ہے"], c: ["Remove the author’s name", "مصنف کا نام ہٹا دیں"] },
      answer: "a", feedback: ["Credit and permission both matter.", "حوالہ اور اجازت دونوں اہم ہیں۔"] },
    { q: ["AI-generated references should be:", "اے آئی کے تیار کردہ حوالوں کو:"],
      options: { a: ["Accepted if they look professional", "پیشہ ورانہ نظر آئیں تو قبول کر لیا جائے"], b: ["Checked against real sources", "اصل ذرائع سے جانچا جائے"], c: ["Used without checking the dates", "تاریخیں دیکھے بغیر استعمال کیا جائے"] },
      answer: "b", feedback: ["AI can produce inaccurate or non-existent references.", "اے آئی غلط یا غیر موجود حوالے بنا سکتی ہے۔"] },
    { q: ["You entered a college password into a suspicious website. You should:", "آپ نے کالج کا پاس ورڈ ایک مشکوک ویب سائٹ میں درج کر دیا۔ آپ کو چاہیے کہ:"],
      options: { a: ["Wait to see whether anything happens", "انتظار کریں کہ کچھ ہوتا ہے یا نہیں"], b: ["Delete the message and tell nobody", "پیغام حذف کریں اور کسی کو نہ بتائیں"], c: ["Report immediately and secure the account through the genuine process", "فوراً اطلاع دیں اور اصلی طریقے سے اکاؤنٹ محفوظ کریں"] },
      answer: "c", feedback: ["Early reporting and securing the account reduce harm.", "جلد اطلاع اور اکاؤنٹ کی حفاظت سے نقصان کم ہوتا ہے۔"] }
  ]
};
