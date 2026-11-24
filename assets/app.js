/* KGMC Campus Safety Learning Program - course site.
   Plain JavaScript, no build step. Settings are in config.js; module text is in content/. */
(function () {
  'use strict';

  var CFG = window.KGMC_CONFIG;
  var MODS = window.KGMC_MODULES;
  var CONTENT = window.KGMC_CONTENT || {};
  var INTRO = window.KGMC_INTRO || { title: ['About this course', ''], blocks: [] };
  var DEMO = !CFG.BACKEND_URL;
  /* Years of study offered to students. Must match YEARS in the Apps Script. */
  var YEARS = ['First year', 'Second year', 'Third year', 'Fourth year', 'Final year', 'Other'];
  function yearOptions(chosen) {
    return YEARS.map(function (y, i) {
      return '<option value="' + esc(y) + '"' + (chosen === y ? ' selected' : '') + '>' + esc(T('y' + (i + 1))) + '</option>';
    }).join('');
  }
  function collegeField(value) {
    return '<label class="field"><span>' + esc(T('collegeLabel')) + '</span>' +
      '<input id="f-college" type="text" maxlength="100" dir="auto" autocomplete="organization" value="' + esc(value || CFG.DEFAULT_COLLEGE[0]) + '">' +
      '<small>' + esc(T('collegeHint')) + '</small></label>';
  }
  var REQUIRED = MODS.map(function (m) { return m.id; });

  /* ---------- small storage wrapper (works even when the browser blocks storage) ---------- */
  var mem = {};
  var store = {
    get: function (k) {
      try { var v = window.localStorage.getItem('kgmc_' + k); if (v !== null) return JSON.parse(v); } catch (e) {}
      return (k in mem) ? mem[k] : null;
    },
    set: function (k, v) { mem[k] = v; try { window.localStorage.setItem('kgmc_' + k, JSON.stringify(v)); } catch (e) {} },
    del: function (k) { delete mem[k]; try { window.localStorage.removeItem('kgmc_' + k); } catch (e) {} }
  };

  var st = {
    lang: store.get('lang') || 'en',
    audio: !!store.get('audio'),
    token: store.get('token'),
    user: null, progress: {}, certificate: null,
    view: 'welcome', p: {}, busy: false, error: null, info: null
  };

  /* ---------- interface text: [English, Urdu] (Urdu is a draft for review) ---------- */
  var S = {
    langBtn: ['اردو', 'English'],
    home: ['Home', 'ہوم'],
    yearLabel: ['Year of study', 'سالِ تعلیم'],
    y1: ['First year', 'پہلا سال'],
    y2: ['Second year', 'دوسرا سال'],
    y3: ['Third year', 'تیسرا سال'],
    y4: ['Fourth year', 'چوتھا سال'],
    y5: ['Final year', 'آخری سال'],
    y6: ['Other', 'دیگر'],
    collegeLabel: ['Your college', 'آپ کا کالج'],
    collegeHint: ['This name will be printed on your certificate. Change it if you are from another college.', 'یہ نام آپ کے سرٹیفکیٹ پر چھپے گا۔ اگر آپ کسی اور کالج سے ہیں تو اسے تبدیل کر لیں۔'],
    profileTitle: ['One more detail', 'ایک اور تفصیل'],
    profileLead: ['Please confirm your college before you continue. It will be printed on your certificate.', 'جاری رکھنے سے پہلے براہِ کرم اپنے کالج کی تصدیق کر دیں۔ یہ آپ کے سرٹیفکیٹ پر چھپے گا۔'],
    saveOn: ['Save and continue', 'محفوظ کریں اور جاری رکھیں'],
    listen: ['Listen', 'سنیں'],
    listenOn: ['Listening on', 'سننا آن ہے'],
    listenOff: ['Listening off', 'سننا بند ہے'],
    listenHint: ['Turn this on to have each page read aloud in the language you chose.', 'اسے آن کریں تاکہ ہر صفحہ آپ کی منتخب کردہ زبان میں پڑھ کر سنایا جائے۔'],
    listenTitle: ['Listen to this page', 'یہ صفحہ سنیں'],
    play: ['Play', 'چلائیں'],
    pause: ['Pause', 'وقفہ'],
    resume: ['Continue', 'جاری رکھیں'],
    stopSay: ['Stop', 'بند کریں'],
    speed: ['Speed {r}', 'رفتار {r}'],
    sayStatus: ['Reading {i} of {n}', '{n} میں سے {i} پڑھا جا رہا ہے'],
    sayPaused: ['Paused', 'وقفہ'],
    sayDone: ['Finished this page. Press Next to continue.', 'یہ صفحہ مکمل ہوا۔ جاری رکھنے کے لیے اگلا دبائیں۔'],
    sayReady: ['Press Play to hear this page.', 'یہ صفحہ سننے کے لیے چلائیں دبائیں۔'],
    sayRecorded: ['Recorded voice', 'ریکارڈ شدہ آواز'],
    ttsNone: ['This browser cannot read pages aloud. Chrome, Edge and Safari can.', 'یہ براؤزر صفحات پڑھ کر نہیں سنا سکتا۔ کروم، ایج اور سفاری یہ کر سکتے ہیں۔'],
    ttsNoVoice: ['This device has no Urdu voice installed, so Urdu cannot be read aloud here. You can add an Urdu voice in your phone settings under Text-to-speech, or switch to English.', 'اس ڈیوائس پر اردو آواز نصب نہیں، اس لیے یہاں اردو پڑھ کر نہیں سنائی جا سکتی۔ آپ اپنے فون کی ترتیبات میں ٹیکسٹ ٹو اسپیچ سے اردو آواز شامل کر سکتے ہیں، یا انگریزی پر جا سکتے ہیں۔'],
    sideFeedback: ['Feedback', 'رائے'],
    sideFeedbackSub: ['Tell us how to improve', 'ہمیں بتائیں کہ کیسے بہتری لائی جائے'],
    fbLocked: ['After all {n} modules', 'تمام {n} ماڈیولز مکمل کرنے کے بعد'],
    fbGiven: ['Received, thank you', 'موصول ہو گئی، شکریہ'],
    loginToOpen: ['Please log in or register to continue. After that you will go straight to the page you chose.', 'جاری رکھنے کے لیے لاگ اِن کریں یا رجسٹر کریں۔ اس کے بعد آپ سیدھے اسی صفحے پر پہنچ جائیں گے جو آپ نے منتخب کیا۔'],
    logout: ['Log out', 'لاگ آؤٹ'],
    visits: ['Total visits to this site', 'اس ویب سائٹ پر کل وزٹ'],
    visitsDemo: ['Demo mode: counted on this device only', 'ڈیمو موڈ: صرف اسی ڈیوائس پر گنتی'],
    about: ['About this course', 'اس کورس کے بارے میں'],
    goModules: ['Go to my modules', 'میرے ماڈیولز پر جائیں'],
    demo: ['Demo mode: nothing is saved to the college record and no emails are sent.', 'ڈیمو موڈ: کچھ بھی کالج کے ریکارڈ میں محفوظ نہیں ہوتا اور کوئی ای میل نہیں بھیجی جاتی۔'],
    welcomeLead: ['Short online safety modules for students, faculty and staff. Complete all ten modules to receive your certificate of completion by email.', 'طلبہ، اساتذہ اور عملے کے لیے مختصر آن لائن سیفٹی ماڈیولز۔ تمام دس ماڈیول مکمل کریں اور تکمیل کا سرٹیفکیٹ ای میل پر حاصل کریں۔'],
    chooseLang: ['Choose your language', 'اپنی زبان منتخب کریں'],
    register: ['Create an account', 'اکاؤنٹ بنائیں'],
    login: ['Log in', 'لاگ اِن'],
    haveAccount: ['Already registered? Log in', 'پہلے سے رجسٹرڈ ہیں؟ لاگ اِن کریں'],
    noAccount: ['New here? Create an account', 'نئے ہیں؟ اکاؤنٹ بنائیں'],
    name: ['Full name (as it should appear on your certificate)', 'پورا نام (جیسا آپ کے سرٹیفکیٹ پر آنا چاہیے)'],
    email: ['Email address (your certificate will be sent here)', 'ای میل ایڈریس (آپ کا سرٹیفکیٹ یہاں بھیجا جائے گا)'],
    emailShort: ['Email address', 'ای میل ایڈریس'],
    password: ['Choose a password (at least 8 characters)', 'پاس ورڈ منتخب کریں (کم از کم 8 حروف)'],
    passwordShort: ['Password', 'پاس ورڈ'],
    password2: ['Type the password again', 'پاس ورڈ دوبارہ لکھیں'],
    role: ['I am a', 'میں ہوں'],
    student: ['Student', 'طالب علم'], faculty: ['Faculty', 'فیکلٹی (استاد)'], staff: ['Staff', 'عملہ'],
    dept: ['Department', 'شعبہ'],
    choose: ['Choose…', 'منتخب کریں…'],
    consent: ['I agree that my name, email, role and course progress will be recorded so the college can track completion and send my certificate.', 'میں متفق ہوں کہ میرا نام، ای میل، حیثیت اور کورس کی پیش رفت ریکارڈ کی جائے گی تاکہ کالج تکمیل کا ریکارڈ رکھ سکے اور میرا سرٹیفکیٹ بھیج سکے۔'],
    forgot: ['Forgot your password?', 'پاس ورڈ بھول گئے؟'],
    resetTitle: ['Reset your password', 'پاس ورڈ دوبارہ ترتیب دیں'],
    resetLead: ['Enter your email address and we will send you a 6-digit code.', 'اپنا ای میل ایڈریس درج کریں، ہم آپ کو 6 ہندسوں کا کوڈ بھیجیں گے۔'],
    sendCode: ['Send code', 'کوڈ بھیجیں'],
    code: ['6-digit code from the email', 'ای میل میں موصول 6 ہندسوں کا کوڈ'],
    newPassword: ['New password (at least 8 characters)', 'نیا پاس ورڈ (کم از کم 8 حروف)'],
    setPassword: ['Set new password', 'نیا پاس ورڈ محفوظ کریں'],
    codeSent: ['If that email is registered, a code has been sent. Check your inbox and spam folder.', 'اگر یہ ای میل رجسٹرڈ ہے تو کوڈ بھیج دیا گیا ہے۔ اپنا اِن باکس اور اسپیم فولڈر دیکھیں۔'],
    resetDone: ['Password changed. Please log in.', 'پاس ورڈ تبدیل ہو گیا۔ براہِ کرم لاگ اِن کریں۔'],
    back: ['Back', 'واپس'],
    hello: ['Welcome,', 'خوش آمدید،'],
    yourProgress: ['Your progress', 'آپ کی پیش رفت'],
    ofTen: ['of {n} modules completed', 'ماڈیول مکمل، کل {n} میں سے'],
    modules: ['Modules', 'ماڈیولز'],
    minutes: ['about {n} minutes', 'تقریباً {n} منٹ'],
    notStarted: ['Not started', 'شروع نہیں کیا'],
    inProgress: ['In progress', 'جاری ہے'],
    completed: ['Completed', 'مکمل'],
    comingSoon: ['Coming soon', 'جلد آ رہا ہے'],
    startBtn: ['Start', 'شروع کریں'], continueBtn: ['Continue', 'جاری رکھیں'], reviewBtn: ['Review', 'دوبارہ دیکھیں'],
    certTitle: ['Certificate of completion', 'تکمیل کا سرٹیفکیٹ'],
    certPending: ['Your certificate will be emailed to {email} automatically when you have completed all {n} modules.', 'تمام {n} ماڈیول مکمل ہوتے ہی آپ کا سرٹیفکیٹ خود بخود {email} پر بھیج دیا جائے گا۔'],
    certIssued: ['Congratulations! Your certificate ({id}) was emailed to {email}.', 'مبارک ہو! آپ کا سرٹیفکیٹ ({id}) {email} پر بھیج دیا گیا ہے۔'],
    certPreview: ['Preview a sample certificate', 'نمونے کا سرٹیفکیٹ دیکھیں'],
    step: ['Step {i} of {n}', 'مرحلہ {i}، کل {n} میں سے'],
    next: ['Next', 'آگے'], prev: ['Previous', 'پیچھے'],
    toDashboard: ['Back to my modules', 'میرے ماڈیولز پر واپس'],
    showAnswer: ['Show the safe response', 'محفوظ ردِعمل دیکھیں'],
    safeResponse: ['Safe response:', 'محفوظ ردِعمل:'],
    tickAll: ['Please tick every item to continue.', 'آگے بڑھنے کے لیے براہِ کرم ہر نکتے پر نشان لگائیں۔'],
    quiz: ['Quiz', 'کوئز'],
    quizLead: ['Choose one best answer for each question. You need {p}% to pass and can try as many times as you need.', 'ہر سوال کا ایک بہترین جواب منتخب کریں۔ کامیابی کے لیے {p}% درکار ہیں اور آپ جتنی بار چاہیں کوشش کر سکتے ہیں۔'],
    quizLocked: ['Please complete all the sections before taking the quiz.', 'کوئز سے پہلے براہِ کرم تمام حصے مکمل کریں۔'],
    answerAll: ['Please answer every question.', 'براہِ کرم ہر سوال کا جواب دیں۔'],
    submit: ['Submit answers', 'جوابات جمع کرائیں'],
    scoreLine: ['You scored {s} out of {t} ({p}%).', 'آپ نے {t} میں سے {s} درست جواب دیے ({p}%)۔'],
    passed: ['You passed this module.', 'آپ اس ماڈیول میں کامیاب ہو گئے۔'],
    passedMail: ['A confirmation has been emailed to you.', 'تصدیقی ای میل آپ کو بھیج دی گئی ہے۔'],
    failed: ['Not yet passed. Review the points below and try again.', 'ابھی کامیابی نہیں ملی۔ نیچے دیے گئے نکات دیکھیں اور دوبارہ کوشش کریں۔'],
    correct: ['Correct', 'درست'], incorrect: ['Not correct', 'درست نہیں'],
    tryAgain: ['Try the quiz again', 'کوئز دوبارہ دیں'],
    alreadyPassed: ['You have already passed this quiz (best score {p}%). You may take it again for practice.', 'آپ یہ کوئز پہلے ہی پاس کر چکے ہیں (بہترین اسکور {p}%)۔ مشق کے لیے دوبارہ دے سکتے ہیں۔'],
    giveFeedback: ['Give feedback on the program', 'پروگرام کے بارے میں رائے دیں'],
    fbTitle: ['Your feedback on the program', 'پروگرام کے بارے میں آپ کی رائے'],
    fbSub: ['All {n} modules completed', 'تمام {n} ماڈیولز مکمل'],
    fbNotYet: ['The feedback form opens once you have completed and passed all {n} modules. You have completed {d} so far.', 'رائے کا فارم اس وقت کھلے گا جب آپ تمام {n} ماڈیولز مکمل اور پاس کر لیں گے۔ اب تک آپ نے {d} مکمل کیے ہیں۔'],
    fbLead: ['Your feedback is anonymous. Your name and email are not attached; only your role and department are shared with the instructor.', 'آپ کی رائے گمنام ہے۔ آپ کا نام اور ای میل شامل نہیں کیے جاتے؛ انسٹرکٹر کو صرف آپ کی حیثیت اور شعبہ بتایا جاتا ہے۔'],
    fbClear: ['The content was clear and easy to understand.', 'مواد واضح اور سمجھنے میں آسان تھا۔'],
    fbRelevant: ['The program was relevant to my work or studies.', 'یہ پروگرام میرے کام یا تعلیم سے متعلق تھا۔'],
    fbEasy: ['The website was easy to use on my device.', 'ویب سائٹ میرے فون یا کمپیوٹر پر استعمال میں آسان تھی۔'],
    fbScale: ['1 = strongly disagree, 5 = strongly agree', '1 = بالکل متفق نہیں، 5 = مکمل متفق'],
    fbUseful: ['What was most useful? (optional)', 'سب سے مفید کیا تھا؟ (اختیاری)'],
    fbImprove: ['What should we improve? (optional)', 'ہمیں کیا بہتر کرنا چاہیے؟ (اختیاری)'],
    fbRate: ['Please choose a rating for each statement.', 'براہِ کرم ہر بیان کے لیے درجہ منتخب کریں۔'],
    fbSend: ['Send feedback', 'رائے بھیجیں'],
    fbThanks: ['Thank you. Your feedback has been sent.', 'شکریہ۔ آپ کی رائے بھیج دی گئی ہے۔'],
    fbDone: ['Feedback sent, thank you.', 'رائے موصول ہو گئی، شکریہ۔'],
    skip: ['Skip', 'چھوڑ دیں'],
    working: ['Please wait…', 'براہِ کرم انتظار کریں…'],
    offlineSaved: ['Your connection dropped. Your progress is kept on this device and will be sent when you are back online.', 'آپ کا کنکشن منقطع ہو گیا۔ آپ کی پیش رفت اس ڈیوائس پر محفوظ ہے اور کنکشن بحال ہوتے ہی بھیج دی جائے گی۔'],
    transcript: ['Transcript', 'تحریری متن'],
    e_invalid: ['Please fill in every field correctly.', 'براہِ کرم تمام خانے درست طور پر پُر کریں۔'],
    e_email: ['Please enter a valid email address.', 'براہِ کرم درست ای میل ایڈریس درج کریں۔'],
    e_weak_password: ['The password must be at least 8 characters.', 'پاس ورڈ کم از کم 8 حروف کا ہونا چاہیے۔'],
    e_mismatch: ['The two passwords do not match.', 'دونوں پاس ورڈ ایک جیسے نہیں ہیں۔'],
    e_consent: ['Please tick the box to agree before continuing.', 'آگے بڑھنے سے پہلے براہِ کرم خانے پر نشان لگا کر اتفاق کریں۔'],
    e_email_exists: ['An account with this email already exists. Please log in.', 'اس ای میل سے اکاؤنٹ پہلے سے موجود ہے۔ براہِ کرم لاگ اِن کریں۔'],
    e_bad_login: ['The email or password is not correct.', 'ای میل یا پاس ورڈ درست نہیں۔'],
    e_too_many: ['Too many attempts. Please wait 15 minutes and try again.', 'بہت زیادہ کوششیں ہو چکی ہیں۔ براہِ کرم 15 منٹ انتظار کر کے دوبارہ کوشش کریں۔'],
    e_session: ['Please log in again.', 'براہِ کرم دوبارہ لاگ اِن کریں۔'],
    e_bad_code: ['That code is not correct or has expired.', 'یہ کوڈ درست نہیں یا اس کی مدت ختم ہو چکی ہے۔'],
    e_not_ready: ['Please complete all the sections before taking the quiz.', 'کوئز سے پہلے براہِ کرم تمام حصے مکمل کریں۔'],
    e_network: ['Could not reach the server. Check your internet connection and try again.', 'سرور سے رابطہ نہیں ہو سکا۔ اپنا انٹرنیٹ کنکشن چیک کریں اور دوبارہ کوشش کریں۔'],
    e_server: ['Something went wrong. Please try again.', 'کچھ غلط ہو گیا۔ براہِ کرم دوبارہ کوشش کریں۔']
  };

  function ur() { return st.lang === 'ur'; }
  function L(x) { if (!x) return ''; return (ur() ? x[1] : x[0]) || x[0]; }
  function T(key, vars) {
    var s = L(S[key] || [key, key]);
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function errText(code) { return T(S['e_' + code] ? 'e_' + code : 'e_server'); }

  /* ---------- talking to the backend ---------- */
  function api(action, data) {
    var body = {}; Object.keys(data || {}).forEach(function (k) { body[k] = data[k]; });
    body.action = action;
    if (st.token) body.token = st.token;
    if (DEMO) return demoApi(body);
    return fetch(CFG.BACKEND_URL, {
      method: 'POST', redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body)
    }).then(function (r) { return r.json(); })
      .catch(function () { return { ok: false, error: 'network' }; });
  }

  function applyState(r) {
    if (r.token) { st.token = r.token; store.set('token', r.token); }
    if (r.user) st.user = r.user;
    if (r.progress) {
      st.progress = r.progress;
      /* keep any sections completed offline that the server has not received yet */
      (store.get('queue') || []).forEach(function (q) { localMark(q.module, q.section); });
    }
    if ('certificate' in r) st.certificate = r.certificate;
    if ('feedback' in r) st.feedbackDone = !!r.feedback;
    if (r.required) REQUIRED = r.required;
  }

  function modProg(id) {
    if (!st.progress[id]) st.progress[id] = { sections: [], attempts: 0, best: 0, passed: false, feedback: false };
    return st.progress[id];
  }
  function localMark(module, section) {
    var p = modProg(module);
    if (p.sections.indexOf(section) < 0) p.sections.push(section);
  }

  /* Section progress is saved in the background. If the connection is down it is queued and retried. */
  function saveSection(module, section) {
    if (modProg(module).sections.indexOf(section) >= 0) return;
    localMark(module, section);
    var q = store.get('queue') || [];
    q.push({ module: module, section: section });
    store.set('queue', q);
    flushQueue();
  }
  var flushing = false;
  function flushQueue() {
    var q = store.get('queue') || [];
    if (flushing || !q.length || !st.token) return Promise.resolve();
    flushing = true;
    var item = q[0];
    return api('progress', { module: item.module, section: item.section }).then(function (r) {
      flushing = false;
      if (r.ok) {
        var rest = (store.get('queue') || []).slice(1);
        store.set('queue', rest);
        if (st.info === 'offlineSaved') { st.info = null; }
        return flushQueue();
      }
      if (r.error === 'network') { st.info = 'offlineSaved'; render(true); }
      else if (r.error === 'session') { store.set('queue', []); }
    });
  }
  window.addEventListener('online', function () { flushQueue(); });

  /* ---------- demo backend: runs entirely in this browser ---------- */
  function demoApi(b) {
    if (b.action === 'visit') { var nv = (store.get('demo_visits') || 0) + 1; store.set('demo_visits', nv); return Promise.resolve({ ok: true, visits: nv }); }
    var db = store.get('demo_db') || { users: {} };
    function out(o) { store.set('demo_db', db); return Promise.resolve(o); }
    function state(u) {
      return { ok: true, token: u.email, user: { name: u.name, email: u.email, role: u.role, department: u.department, lang: u.lang,
                 college: u.college || '', year: u.year || '' },
               progress: u.progress, certificate: u.certificate || null, feedback: !!u.feedback,
               required: MODS.map(function (m) { return m.id; }) };
    }
    var email = String(b.email || '').trim().toLowerCase();
    if (b.action === 'register') {
      if (db.users[email]) return out({ ok: false, error: 'email_exists' });
      db.users[email] = { name: b.name, email: email, role: b.role, department: b.department || '', college: b.college || '',
                          year: b.year || '', lang: b.lang, password: b.password, progress: {} };
      return out(state(db.users[email]));
    }
    if (b.action === 'login') {
      var lu = db.users[email];
      if (!lu || lu.password !== b.password) return out({ ok: false, error: 'bad_login' });
      return out(state(lu));
    }
    if (b.action === 'resetRequest') return out({ ok: true });
    if (b.action === 'resetConfirm') {
      if (!db.users[email] || b.code !== '123456') return out({ ok: false, error: 'bad_code' });
      db.users[email].password = b.password; return out({ ok: true });
    }
    var u = db.users[b.token];
    if (!u) return out({ ok: false, error: 'session' });
    if (b.action === 'state') return out(state(u));
    if (b.action === 'profile') {
      if (!b.college) return out({ ok: false, error: 'invalid' });
      u.college = b.college;
      if (u.role === 'Student') u.year = b.year || '';
      return out(state(u));
    }
    if (b.action === 'setLang') { u.lang = b.lang; return out({ ok: true }); }
    if (b.action === 'feedback') {
      var allPassed = MODS.every(function (m) { return u.progress[m.id] && u.progress[m.id].passed; });
      if (!allPassed) return out({ ok: false, error: 'not_ready' });
      u.feedback = true; return out({ ok: true });
    }
    if (!CONTENT[b.module]) return out({ ok: false, error: 'server' });
    var mp = u.progress[b.module] = u.progress[b.module] || { sections: [], attempts: 0, best: 0, passed: false, feedback: false };
    if (b.action === 'progress') {
      if (mp.sections.indexOf(b.section) < 0) mp.sections.push(b.section);
      return out({ ok: true });
    }
    if (b.action === 'quiz') {
      var c = CONTENT[b.module];
      if (mp.sections.length < c.sections.length) return out({ ok: false, error: 'not_ready' });
      var correct = c.quiz.map(function (q, i) { return b.answers[i] === q.answer; });
      var score = correct.filter(Boolean).length, pct = Math.round(100 * score / c.quiz.length);
      mp.attempts++; mp.best = Math.max(mp.best, pct);
      var passed = pct >= CFG.PASS_PERCENT;
      if (passed && !mp.passed) { mp.passed = true; mp.passedDate = new Date().toISOString(); }
      var r = state(u); r.score = score; r.total = c.quiz.length; r.percent = pct; r.passed = passed; r.correct = correct;
      return out(r);
    }
    return out({ ok: false, error: 'server' });
  }

  /* ---------- navigation ---------- */
  function go(view, p) { st.view = view; st.p = p || {}; st.error = null; if (st.info !== 'offlineSaved') st.info = null; render(); }

  function call(action, data, onOk) {
    st.busy = true; st.error = null; render(true);
    return api(action, data).then(function (r) {
      st.busy = false;
      if (!r || !r.ok) {
        var code = (r && r.error) || 'server';
        if (code === 'session') { doLogout(); st.error = 'session'; render(); return; }
        st.error = code; render(true); return;
      }
      onOk(r);
    });
  }
  function doLogout() { st.token = null; st.user = null; st.progress = {}; st.certificate = null; store.del('token'); st.view = 'welcome'; st.p = {}; }

  /* ---------- rendering ---------- */
  var app = document.getElementById('app');

  function homeTab() {
    var on = st.view === 'welcome';
    return '<nav class="tabs" aria-label="' + esc(T('home')) + '"><button class="tab' + (on ? ' on' : '') + '" data-act="nav" data-v="welcome"' + (on ? ' aria-current="page"' : '') + '>' +
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>' +
      '<span>' + esc(T('home')) + '</span></button></nav>';
  }
  function header() {
    return '<div class="topwrap"><header class="top"><div class="brand"><span class="mark" aria-hidden="true">KGMC</span><span class="brand-text">' + esc(L(CFG.PROGRAM)) + '</span></div>' +
      '<div class="top-actions">' +
      '<button class="link-btn say-toggle' + (st.audio ? ' on' : '') + '" data-act="audio" aria-pressed="' + (st.audio ? 'true' : 'false') + '" title="' + esc(T('listen')) + '">' +
        '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/>' +
        (st.audio ? '<path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/>' : '<path d="M17 9.5l4 5"/><path d="M21 9.5l-4 5"/>') + '</svg>' +
        '<span>' + esc(T('listen')) + '</span></button>' +
      '<button class="link-btn lang" data-act="lang" lang="' + (ur() ? 'en' : 'ur') + '">' + esc(T('langBtn')) + '</button>' +
      (st.user ? '<button class="link-btn" data-act="logout">' + esc(T('logout')) + '</button>' : '') + '</div></header>' + homeTab() + '</div>' +
      (DEMO ? '<div class="demo">' + esc(T('demo')) + '</div>' : '');
  }
  function alerts() {
    return (st.error ? '<div class="alert err" role="alert">' + esc(errText(st.error)) + '</div>' : '') +
           (st.info ? '<div class="alert info" role="status">' + esc(T(st.info)) + '</div>' : '');
  }
  function field(id, label, type, extra) {
    return '<label class="field"><span>' + esc(label) + '</span><input id="' + id + '" type="' + type + '" ' + (extra || '') + '></label>';
  }
  function btn(act, label, cls, extra) {
    return '<button class="btn ' + (cls || '') + '" data-act="' + act + '" ' + (extra || '') + (st.busy ? ' disabled' : '') + '>' + esc(st.busy && cls !== 'ghost' ? T('working') : label) + '</button>';
  }

  var views = {};

  var HOME = {
    what: [['What this program is', 'یہ پروگرام کیا ہے؟'],
      ['The KGMC Campus Safety Learning Program is a series of ten short online modules that help everyone at Khyber Girls Medical College prevent harm, respond to emergencies and look after one another. Here, safety is not only a set of rules. It is the everyday habits that protect students, staff and patients, from keeping exits clear to washing hands properly.',
       'کے جی ایم سی کیمپس سیفٹی لرننگ پروگرام دس مختصر آن لائن ماڈیولز پر مشتمل ہے جو خیبر گرلز میڈیکل کالج کے ہر فرد کو یہ سیکھنے میں مدد دیتے ہیں کہ نقصان سے کیسے بچا جائے، ہنگامی صورتِ حال میں کیا کیا جائے اور ایک دوسرے کا خیال کیسے رکھا جائے۔ یہاں حفاظت صرف قواعد کا نام نہیں، بلکہ روزمرہ کی وہ عادات ہیں جو طلبہ، عملے اور مریضوں کو محفوظ رکھتی ہیں، راستوں کو کھلا رکھنے سے لے کر ہاتھ ٹھیک طرح دھونے تک۔']],
    who: [['Who created it', 'اسے کس نے تیار کیا؟'],
      ['The program was created by the Chairperson of the Safety Tour and Infection Control Committee of Khyber Girls Medical College. It uses photographs and plans from our own campus, so that what you learn matches the buildings where you study and work.',
       'یہ پروگرام خیبر گرلز میڈیکل کالج کی سیفٹی ٹور اینڈ انفیکشن کنٹرول کمیٹی کی چیئرپرسن نے تیار کیا ہے۔ اس میں ہمارے اپنے کیمپس کی تصاویر اور نقشے استعمال کیے گئے ہیں تاکہ جو کچھ آپ سیکھیں وہ ان عمارتوں سے مطابقت رکھے جہاں آپ پڑھتے یا کام کرتے ہیں۔']],
    name: ['Prof. Raheelah Amin', 'پروفیسر رحیلہ امین'],
    title: ['Chairperson, Safety Tour and Infection Control Committee, Department of Public Health and Community Medicine, KGMC', 'چیئرپرسن، سیفٹی ٹور اینڈ انفیکشن کنٹرول کمیٹی، شعبہ پبلک ہیلتھ اینڈ کمیونٹی میڈیسن، کے جی ایم سی']
  };

  function homeCard() {
    return '<section class="card hero">' +
      '<img class="logo" src="images/kgmc-logo.png" alt="' + esc(L(['Khyber Girls Medical College logo', 'خیبر گرلز میڈیکل کالج کا لوگو'])) + '">' +
      '<h1 class="home-title">' + esc(L(CFG.PROGRAM)) + '</h1><p class="sub home-title">' + esc(L(CFG.COLLEGE)) + '</p>' + hero() +
      '<div class="lang-pick"><span>' + esc(T('chooseLang')) + '</span>' +
      '<button class="chip' + (ur() ? '' : ' on') + '" data-act="setlang" data-v="en" lang="en">English</button>' +
      '<button class="chip' + (ur() ? ' on' : '') + '" data-act="setlang" data-v="ur" lang="ur">اردو</button>' +
      '<button class="chip say' + (st.audio ? ' on' : '') + '" data-act="audio" aria-pressed="' + (st.audio ? 'true' : 'false') + '">' +
        '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/></svg>' +
        esc(T('listen')) + '</button></div>' +
      '<p class="meta listen-hint">' + esc(T(st.audio ? 'listenOn' : 'listenHint')) + '</p>' +
      '<h2>' + esc(L(HOME.what[0])) + '</h2><p>' + esc(L(HOME.what[1])) + '</p>' +
      '<h2>' + esc(L(HOME.who[0])) + '</h2><p>' + esc(L(HOME.who[1])) + '</p>' +
      '<p>' + esc(T('welcomeLead')) + '</p>' +
      '<div class="signoff"><strong dir="auto">' + esc(L(HOME.name)) + '</strong><span>' + esc(L(HOME.title)) + '</span></div>' +
      alerts() +
      '<div class="row">' + (st.user
        ? btn('nav', T('goModules'), '', 'data-v="dashboard"')
        : btn('nav', T('register'), '', 'data-v="register"') + btn('nav', T('login'), 'ghost', 'data-v="login"')) + '</div>' +
      '<p><button class="link-btn" data-act="nav" data-v="about">' + esc(T('about')) + '</button></p></section>';
  }

  function sideMenu() {
    var keys = { soon: 'comingSoon', 'new': 'notStarted', doing: 'inProgress', done: 'completed' };
    var h = '<aside class="card side" aria-label="' + esc(T('modules')) + '"><h2>' + esc(T('modules')) + '</h2><ol class="side-list">';
    MODS.forEach(function (m, i) {
      var ms = moduleStatus(m), ok = ms.key !== 'soon';
      var inner = '<span class="n">' + (i + 1) + '</span><span class="t">' + esc(L(m.title)) +
        '<small>' + esc(!ok ? T('comingSoon') : (st.user ? T(keys[ms.key]) + (ms.key === 'doing' ? ' · ' + ms.pct + '%' : '') : T('minutes', { n: m.minutes }))) + '</small></span>';
      h += '<li class="' + (ok ? '' : 'soon') + (ms.key === 'done' ? ' done' : '') + '">' +
        (ok ? '<button class="side-item" data-act="side" data-v="' + m.id + '">' + inner + '</button>'
            : '<span class="side-item" aria-disabled="true">' + inner + '</span>') + '</li>';
    });
    var open = fbOpen();
    var note = st.feedbackDone ? T('fbGiven') : (open ? T('sideFeedbackSub') : T('fbLocked', { n: REQUIRED.length }));
    var fbInner = '<span class="n" aria-hidden="true">&#9998;</span><span class="t">' + esc(T('sideFeedback')) + '<small>' + esc(note) + '</small></span>';
    return h + '</ol>' + (open
      ? '<button class="side-item fb" data-act="side" data-v="feedback">' + fbInner + '</button>'
      : '<span class="side-item fb locked" aria-disabled="true">' + fbInner + '</span>') + '</aside>';
  }

  views.welcome = function () {
    return '<div class="home-layout">' + homeCard() + sideMenu() + '</div>';
  };

  function openTarget(t) {
    if (t.k === 'feedback') go('feedback');
    else openModule(t.id);
  }

  views.register = function () {
    var depts = CFG.DEPARTMENTS.map(function (d) { return '<option value="' + esc(d[0]) + '">' + esc(L(d)) + '</option>'; }).join('');
    return '<section class="card"><h1>' + esc(T('register')) + '</h1>' + alerts() + '<form data-form="register" novalidate>' +
      field('f-name', T('name'), 'text', 'autocomplete="name" dir="auto"') +
      field('f-email', T('email'), 'email', 'autocomplete="email" dir="ltr"') +
      '<label class="field"><span>' + esc(T('role')) + '</span><select id="f-role"><option value="">' + esc(T('choose')) + '</option>' +
      '<option value="Student">' + esc(T('student')) + '</option><option value="Faculty">' + esc(T('faculty')) + '</option><option value="Staff">' + esc(T('staff')) + '</option></select></label>' +
      '<label class="field" id="dept-wrap" hidden><span>' + esc(T('dept')) + '</span><select id="f-dept"><option value="">' + esc(T('choose')) + '</option>' + depts + '</select></label>' +
      '<label class="field" id="year-wrap" hidden><span>' + esc(T('yearLabel')) + '</span><select id="f-year"><option value="">' + esc(T('choose')) + '</option>' + yearOptions('') + '</select></label>' +
      collegeField('') +
      field('f-pass', T('password'), 'password', 'autocomplete="new-password" dir="ltr"') +
      field('f-pass2', T('password2'), 'password', 'autocomplete="new-password" dir="ltr"') +
      '<label class="check"><input type="checkbox" id="f-consent"><span>' + esc(T('consent')) + '</span></label>' +
      '<div class="row">' + btn('submit', T('register')) + '</div></form>' +
      '<p><button class="link-btn" data-act="nav" data-v="login">' + esc(T('haveAccount')) + '</button></p></section>';
  };

  /* An account registered before the college was asked for is completed once, here. */
  function profileNeeded() {
    /* Only once the Apps Script knows about these fields: an older deployment sends no
       college key at all, and asking then would strand the learner on a form it cannot save. */
    if (!st.user || !('college' in st.user)) return false;
    return !st.user.college || (st.user.role === 'Student' && !st.user.year);
  }

  views.profile = function () {
    var isStudent = st.user && st.user.role === 'Student';
    return '<section class="card"><h1>' + esc(T('profileTitle')) + '</h1><p>' + esc(T('profileLead')) + '</p>' + alerts() +
      '<form data-form="profile" novalidate>' +
      (isStudent ? '<label class="field"><span>' + esc(T('yearLabel')) + '</span><select id="f-year"><option value="">' + esc(T('choose')) + '</option>' + yearOptions(st.user.year) + '</select></label>' : '') +
      collegeField(st.user && st.user.college) +
      '<div class="row">' + btn('submit', T('saveOn')) + '</div></form></section>';
  };

  views.login = function () {
    return '<section class="card"><h1>' + esc(T('login')) + '</h1>' + alerts() + '<form data-form="login" novalidate>' +
      field('f-email', T('emailShort'), 'email', 'autocomplete="email" dir="ltr"') +
      field('f-pass', T('passwordShort'), 'password', 'autocomplete="current-password" dir="ltr"') +
      '<div class="row">' + btn('submit', T('login')) + '</div></form>' +
      '<p><button class="link-btn" data-act="nav" data-v="forgot">' + esc(T('forgot')) + '</button></p>' +
      '<p><button class="link-btn" data-act="nav" data-v="register">' + esc(T('noAccount')) + '</button></p></section>';
  };

  views.forgot = function () {
    var h = '<section class="card"><h1>' + esc(T('resetTitle')) + '</h1>' + alerts();
    if (!st.p.sent) {
      h += '<p>' + esc(T('resetLead')) + '</p><form data-form="resetRequest" novalidate>' +
        field('f-email', T('emailShort'), 'email', 'autocomplete="email" dir="ltr"') +
        '<div class="row">' + btn('submit', T('sendCode')) + '</div></form>';
    } else {
      h += '<form data-form="resetConfirm" novalidate>' +
        field('f-code', T('code'), 'text', 'inputmode="numeric" maxlength="6" dir="ltr" autocomplete="one-time-code"') +
        field('f-pass', T('newPassword'), 'password', 'autocomplete="new-password" dir="ltr"') +
        '<div class="row">' + btn('submit', T('setPassword')) + '</div></form>';
    }
    return h + '<p><button class="link-btn" data-act="nav" data-v="login">' + esc(T('back')) + '</button></p></section>';
  };

  var HERO = '<img class="hero-img" src="images/assembly-area.jpg" alt="';
  function hero() { return HERO + esc(L(['The Khyber Girls Medical College building and its forecourt', 'خیبر گرلز میڈیکل کالج کی عمارت اور اس کا صحن'])) + '">'; }

  views.about = function () {
    return '<section class="card">' + hero() + '<p class="sub">' + esc(L(CFG.PROGRAM)) + '</p><h1>' + esc(L(INTRO.title)) + '</h1>' +
      renderBlocks(INTRO.blocks) + '<div class="row">' +
      (st.user ? btn('nav', T('goModules'), '', 'data-v="dashboard"')
               : btn('nav', T('register'), '', 'data-v="register"') + btn('nav', T('back'), 'ghost', 'data-v="welcome"')) + '</div></section>';
  };

  function moduleStatus(m) {
    if (!m.available || !CONTENT[m.id]) return { key: 'soon', pct: 0 };
    var p = modProg(m.id), total = CONTENT[m.id].sections.length + 1;
    if (p.passed) return { key: 'done', pct: 100 };
    var done = Math.min(p.sections.length, total - 1);
    if (!done && !p.attempts) return { key: 'new', pct: 0 };
    return { key: 'doing', pct: Math.round(100 * done / total) };
  }

  views.dashboard = function () {
    var doneCount = REQUIRED.filter(function (id) { return st.progress[id] && st.progress[id].passed; }).length;
    var n = REQUIRED.length;
    var h = '<section class="card"><p class="sub">' + esc(T('hello')) + '</p><h1 dir="auto">' + esc(st.user.name) + '</h1>' + alerts() +
      '<p><button class="link-btn" data-act="nav" data-v="about">' + esc(T('about')) + '</button></p>' +
      '<h2>' + esc(T('yourProgress')) + '</h2><div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + n + '" aria-valuenow="' + doneCount + '"><i style="width:' + (100 * doneCount / n) + '%"></i></div>' +
      '<p><strong>' + doneCount + '</strong> ' + esc(T('ofTen', { n: n })) + '</p>' +
      '<div class="cert-box' + (st.certificate ? ' got' : '') + '"><h3>' + esc(T('certTitle')) + '</h3><p>' +
      (st.certificate ? esc(T('certIssued', { id: st.certificate.id, email: st.user.email })) : esc(T('certPending', { email: st.user.email, n: n }))) + '</p>' +
      (DEMO ? '<button class="link-btn" data-act="nav" data-v="certificate">' + esc(T('certPreview')) + '</button>' : '') + '</div></section>';
    h += '<section class="card"><h2>' + esc(T('modules')) + '</h2><ol class="mods">';
    MODS.forEach(function (m, i) {
      var s = moduleStatus(m);
      var label = { soon: 'comingSoon', 'new': 'notStarted', doing: 'inProgress', done: 'completed' }[s.key];
      var action = { 'new': 'startBtn', doing: 'continueBtn', done: 'reviewBtn' }[s.key];
      h += '<li class="mod ' + s.key + '"><div class="mod-num">' + (i + 1) + '</div><div class="mod-body"><h3>' + esc(L(m.title)) + '</h3>' +
        '<p class="meta"><span class="tag ' + s.key + '">' + esc(T(label)) + (s.key === 'doing' ? ' · ' + s.pct + '%' : '') + '</span>' +
        (s.key !== 'soon' ? ' <span>' + esc(T('minutes', { n: m.minutes })) + '</span>' : '') + '</p></div>' +
        (action ? '<button class="btn small' + (s.key === 'done' ? ' ghost' : '') + '" data-act="open" data-v="' + m.id + '">' + esc(T(action)) + '</button>' : '') + '</li>';
    });
    h += '</ol>';
    if (fbOpen()) h += '<div class="row">' + btn('nav', T('giveFeedback'), '', 'data-v="feedback"') + '</div>';
    else if (st.feedbackDone) h += '<p class="meta">' + esc(T('fbGiven')) + '</p>';
    return h + '</section>';
  };

  function renderBlocks(list) {
    var out = '', i = 0;
    while (i < list.length) {
      var b = list[i], nxt = list[i + 1];
      if (b && b.t === 'think' && nxt && nxt.t === 'key') {
        out += block(b) +
          '<details class="reveal"><summary>' + esc(T('showAnswer')) + '</summary>' + block(nxt) + '</details>';
        i += 2;
      } else {
        out += block(b);
        i += 1;
      }
    }
    return out;
  }

  function block(b) {
    switch (b.t) {
      case 'p': return '<p>' + esc(L(b.x)) + '</p>';
      case 'h': return '<h3>' + esc(L(b.x)) + '</h3>';
      case 'key': return '<div class="callout key">' + esc(L(b.x)) + '</div>';
      case 'warn': return '<div class="callout warn">' + esc(L(b.x)) + '</div>';
      case 'note': return '<div class="callout note">' + esc(L(b.x)) + '</div>';
      case 'think': return '<div class="callout think">' + esc(L(b.x)) + '</div>';
      case 'ul': case 'ol':
        return '<' + b.t + ' class="list">' + b.items.map(function (i) { return '<li>' + esc(L(i)) + '</li>'; }).join('') + '</' + b.t + '>';
      case 'table':
        return '<div class="table-wrap"><table><thead><tr>' + b.head.map(function (c) { return '<th>' + esc(L(c)) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return '<td data-label="' + esc(L(b.head[i])) + '">' + esc(L(c)) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      case 'img':
        return '<figure><img loading="lazy" src="' + esc(b.src) + '" alt="' + esc(L(b.alt)) + '"><figcaption' + (b.cmd ? ' class="cmd"' : '') + '>' + esc(L(b.cap)) + '</figcaption></figure>';
      case 'contacts':
        return '<div class="callout contacts"><h3>' + esc(L(b.title)) + '</h3><ul class="list">' + b.items.map(function (i) { return '<li>' + esc(L(i)) + '</li>'; }).join('') + '</ul></div>';
      case 'scenario':
        return '<div class="scenario"><h3>' + esc(L(b.title)) + '</h3><p>' + esc(L(b.situation)) + '</p><details><summary>' + esc(T('showAnswer')) + '</summary><p><strong>' + esc(T('safeResponse')) + '</strong> ' + esc(L(b.answer)) + '</p></details></div>';
      case 'reveal':
        return '<details class="reveal"><summary>' + esc(L(b.label)) + '</summary><ol class="list">' + b.items.map(function (i) { return '<li>' + esc(L(i)) + '</li>'; }).join('') + '</ol></details>';
      case 'media':
        if (!b.src) return '';
        return '<figure class="media"><figcaption>' + esc(L(b.title)) + '</figcaption>' +
          (b.kind === 'audio' ? '<audio controls preload="none" src="' + esc(b.src) + '"></audio>' : '<video controls preload="none" playsinline src="' + esc(b.src) + '"></video>') +
          (b.transcript ? '<details><summary>' + esc(T('transcript')) + '</summary><p>' + esc(L(b.transcript)) + '</p></details>' : '') + '</figure>';
    }
    return '';
  }

  views.module = function () {
    var id = st.p.m, c = CONTENT[id], p = modProg(id);
    var n = c.sections.length + 1, i = st.p.i;
    var h = '<section class="card"><button class="link-btn" data-act="nav" data-v="dashboard">‹ ' + esc(T('toDashboard')) + '</button>' +
      '<p class="sub">' + esc(L(c.title)) + '</p>' +
      '<div class="bar thin"><i style="width:' + (100 * (i + 1) / n) + '%"></i></div><p class="meta">' + esc(T('step', { i: i + 1, n: n })) + '</p>' + alerts();
    if (i < c.sections.length) {
      var s = c.sections[i];
      h += '<h1>' + esc(L(s.title)) + '</h1>' + renderBlocks(s.blocks);
      if (s.type === 'checklist') {
        var done = p.sections.indexOf(s.id) >= 0;
        h += '<div class="checklist">' + s.items.map(function (it, k) {
          return '<label class="check"><input type="checkbox" data-check="' + k + '"' + (done ? ' checked' : '') + '><span>' + esc(L(it)) + '</span></label>';
        }).join('') + '</div>';
      }
      h += '<div class="row nav">' + (i > 0 ? btn('step', T('prev'), 'ghost', 'data-v="-1"') : '<span></span>') + btn('step', T('next'), '', 'data-v="1"') + '</div>';
    } else {
      h += '<h1>' + esc(T('quiz')) + '</h1>' + quizHtml(id, c, p) ;
    }
    return h + '</section>';
  };

  function quizHtml(id, c, p) {
    var res = st.p.result;
    if (p.sections.length < c.sections.length) {
      return '<div class="callout warn">' + esc(T('quizLocked')) + '</div><div class="row nav">' + btn('step', T('prev'), 'ghost', 'data-v="-1"') + '<span></span></div>';
    }
    var h = '';
    if (res) {
      h += '<div class="result ' + (res.passed ? 'pass' : 'fail') + '" role="status"><p class="score">' + esc(T('scoreLine', { s: res.score, t: res.total, p: res.percent })) + '</p><p>' +
        esc(T(res.passed ? 'passed' : 'failed')) + (res.passed && !DEMO ? ' ' + esc(T('passedMail')) : '') + '</p></div>';
    } else if (p.passed) {
      h += '<div class="callout note">' + esc(T('alreadyPassed', { p: p.best })) + '</div>';
    } else {
      h += '<p>' + esc(T('quizLead', { p: CFG.PASS_PERCENT })) + '</p>';
    }
    h += '<form data-form="quiz" novalidate>';
    c.quiz.forEach(function (q, qi) {
      var chosen = res ? res.answers[qi] : null;
      var ok = res ? res.correct[qi] : null;
      h += '<fieldset class="q' + (res ? (ok ? ' ok' : ' bad') : '') + '"><legend>' + (qi + 1) + '. ' + esc(L(q.q)) + '</legend>';
      Object.keys(q.options).forEach(function (k) {
        h += '<label class="opt"><input type="radio" name="q' + qi + '" value="' + k + '"' + (chosen === k ? ' checked' : '') + (res ? ' disabled' : '') + '><span>' + esc(L(q.options[k])) + '</span></label>';
      });
      if (res) h += '<p class="fb"><strong>' + esc(T(ok ? 'correct' : 'incorrect')) + '.</strong> ' + esc(L(q.feedback)) + '</p>';
      h += '</fieldset>';
    });
    if (!res) {
      h += '<div class="row nav">' + btn('step', T('prev'), 'ghost', 'data-v="-1" type="button"') + btn('submit', T('submit')) + '</div></form>';
    } else {
      h += '</form><div class="row">' +
        (res.passed
          ? (fbOpen() ? btn('nav', T('giveFeedback'), '', 'data-v="feedback"') : '') + btn('nav', T('toDashboard'), 'ghost', 'data-v="dashboard"')
          : btn('retry', T('tryAgain')) + btn('nav', T('toDashboard'), 'ghost', 'data-v="dashboard"')) + '</div>';
    }
    return h;
  }

  views.feedback = function () {
    function rate(name, label) {
      var h = '<fieldset class="rate"><legend>' + esc(label) + '</legend><div class="rate-row">';
      for (var i = 1; i <= 5; i++) h += '<label><input type="radio" name="' + name + '" value="' + i + '"><span>' + i + '</span></label>';
      return h + '</div></fieldset>';
    }
    if (!fbOpen()) {
      return '<section class="card"><h1>' + esc(T('fbTitle')) + '</h1>' + alerts() +
        '<p>' + esc(st.feedbackDone ? T('fbThanks') : T('fbNotYet', { n: REQUIRED.length, d: doneCount() })) + '</p>' +
        '<div class="row">' + btn('nav', T('toDashboard'), 'ghost', 'data-v="dashboard"') + '</div></section>';
    }
    return '<section class="card"><h1>' + esc(T('fbTitle')) + '</h1><p class="sub">' + esc(T('fbSub', { n: REQUIRED.length })) + '</p><p>' + esc(T('fbLead')) + '</p>' + alerts() +
      '<form data-form="feedback" novalidate><p class="meta">' + esc(T('fbScale')) + '</p>' +
      rate('clear', T('fbClear')) + rate('relevant', T('fbRelevant')) + rate('easy', T('fbEasy')) +
      '<label class="field"><span>' + esc(T('fbUseful')) + '</span><textarea id="f-useful" rows="3" maxlength="1500" dir="auto"></textarea></label>' +
      '<label class="field"><span>' + esc(T('fbImprove')) + '</span><textarea id="f-improve" rows="3" maxlength="1500" dir="auto"></textarea></label>' +
      '<div class="row">' + btn('submit', T('fbSend')) + btn('nav', T('skip'), 'ghost', 'data-v="dashboard" type="button"') + '</div></form></section>';
  };

  /* Sample only (demo mode). The real certificate is a PDF produced and emailed by the Google script. */
  views.certificate = function () {
    return '<section class="card"><button class="link-btn" data-act="nav" data-v="dashboard">‹ ' + esc(T('toDashboard')) + '</button>' +
      '<div class="cert" dir="ltr" lang="en"><div class="cert-inner"><img class="cert-logo" src="images/kgmc-logo.png" alt="Khyber Girls Medical College logo"><p class="cert-college">Khyber Girls Medical College, Peshawar</p><h2>Certificate of Completion</h2><img class="cert-divider" src="images/cert-divider.png" alt="">' +
      '<p>This certifies that</p><p class="cert-name">' + esc(st.user.name) + '</p>' +
      '<p>' + esc(st.user.role + (st.user.department ? ', ' + st.user.department : '')) + '</p>' +
      '<p>has completed all ten modules of the<br><strong>KGMC Campus Safety Learning Program</strong><br>and passed each knowledge assessment.</p>' +
      '<p class="cert-meta">Date: [date of completion] · Certificate ID: KGMC-CSLP-2026-0001</p>' +
      '<div class="cert-sign"><div><span></span>Prof. Raheelah Amin<br><small>Chairperson, Safety Tour and Infection Control Committee</small></div><img class="cert-seal" src="images/cert-seal.png" alt="Gold seal with green ribbons reading Campus Safety Completed"><div><span></span>Dean’s Office<br><small>Khyber Girls Medical College</small></div></div>' +
      '<p class="cert-note">This certificate records online learning completion. Practical training and evacuation drill participation are recorded separately.</p></div></div></section>';
  };

  /* ---------- listening: the page read aloud by the device's own voice ---------- */
  var SPEECH = { items: [], idx: -1, playing: false, paused: false, rate: Number(store.get('rate')) || 1, keep: null, lastKey: '' };
  var TTS = typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance === 'function';
  var RATES = [0.8, 1, 1.2];

  function audioOn() { return !!st.audio; }

  function voiceFor(code) {
    if (!TTS) return null;
    var vs = window.speechSynthesis.getVoices() || [];
    var pref = code === 'ur' ? ['ur-pk', 'ur'] : ['en-gb', 'en-us', 'en-in', 'en'];
    for (var p = 0; p < pref.length; p++) {
      for (var i = 0; i < vs.length; i++) {
        var l = String(vs[i].lang || '').toLowerCase().replace(/_/g, '-');
        if (l.indexOf(pref[p]) === 0) return vs[i];
      }
    }
    return null;
  }

  /* A recorded file, when one has been added to the module content, is used instead of the device voice. */
  function recordedAudio() {
    var c = CONTENT[st.p.m];
    if (!c || st.view !== 'module') return null;
    var sec = c.sections[st.p.i];
    if (!sec || !sec.audio) return null;
    return sec.audio[st.lang] || sec.audio.en || null;
  }

  var SAY_SEL = 'h1, h2, h3, p, li, figcaption, summary, legend, .check span, .opt span';
  function sayNodes() {
    var root = app.querySelector('main');
    if (!root) return [];
    var out = [];
    Array.prototype.forEach.call(root.querySelectorAll(SAY_SEL), function (el) {
      if (el.closest('.listen') || el.closest('.row')) return;
      if (el.querySelector(SAY_SEL)) return;
      var d = el.closest('details');
      if (d && !d.open && !el.closest('summary')) return;
      var t = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (t.length < 2) return;
      out.push({ el: el, text: t });
    });
    return out;
  }

  function markSaying(el) {
    Array.prototype.forEach.call(app.querySelectorAll('.saying'), function (n) { n.classList.remove('saying'); });
    if (!el) return;
    el.classList.add('saying');
    if (el.scrollIntoView) el.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function sayBarUpdate() {
    var bar = app.querySelector('.listen');
    if (!bar) return;
    var status = bar.querySelector('.listen-status');
    var play = bar.querySelector('[data-v="play"]');
    if (play) play.textContent = SPEECH.paused ? T('resume') : (SPEECH.playing ? T('pause') : T('play'));
    if (status) {
      status.textContent = SPEECH.paused ? T('sayPaused')
        : SPEECH.playing ? T('sayStatus', { i: SPEECH.idx + 1, n: SPEECH.items.length })
        : (SPEECH.idx >= 0 ? T('sayDone') : T('sayReady'));
    }
    bar.classList.toggle('on', SPEECH.playing || SPEECH.paused);
  }

  function speakFrom(k) {
    if (!TTS) return;
    var synth = window.speechSynthesis;
    if (k >= SPEECH.items.length) { SPEECH.playing = false; SPEECH.paused = false; markSaying(null); keepAlive(false); sayBarUpdate(); return; }
    SPEECH.idx = k;
    var it = SPEECH.items[k];
    var u = new SpeechSynthesisUtterance(it.text);
    var v = voiceFor(st.lang);
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = ur() ? 'ur-PK' : 'en-US'; }
    u.rate = SPEECH.rate;
    u.onend = function () { if (SPEECH.playing && !SPEECH.paused) speakFrom(k + 1); };
    u.onerror = function () { if (SPEECH.playing && !SPEECH.paused) speakFrom(k + 1); };
    markSaying(it.el);
    sayBarUpdate();
    synth.speak(u);
  }

  /* Chrome stops a long reading after about fifteen seconds unless it is nudged. */
  function keepAlive(on) {
    if (SPEECH.keep) { clearInterval(SPEECH.keep); SPEECH.keep = null; }
    if (!on) return;
    SPEECH.keep = setInterval(function () {
      if (!SPEECH.playing || SPEECH.paused) return;
      try { window.speechSynthesis.pause(); window.speechSynthesis.resume(); } catch (e) {}
    }, 9000);
  }

  function startSpeech() {
    if (!TTS) return;
    window.speechSynthesis.cancel();
    SPEECH.items = sayNodes();
    SPEECH.idx = -1;
    if (!SPEECH.items.length) return;
    SPEECH.playing = true; SPEECH.paused = false;
    keepAlive(true);
    speakFrom(0);
  }

  function stopSpeech() {
    if (TTS) { try { window.speechSynthesis.cancel(); } catch (e) {} }
    SPEECH.playing = false; SPEECH.paused = false; SPEECH.idx = -1; SPEECH.items = [];
    keepAlive(false);
    markSaying(null);
  }

  function sayAction(v) {
    if (!TTS) return;
    var synth = window.speechSynthesis;
    if (v === 'play') {
      if (SPEECH.paused) { SPEECH.paused = false; synth.resume(); keepAlive(true); }
      else if (SPEECH.playing) { SPEECH.paused = true; synth.pause(); keepAlive(false); }
      else startSpeech();
    } else if (v === 'stop') {
      stopSpeech();
    } else if (v === 'rate') {
      var i = (RATES.indexOf(SPEECH.rate) + 1) % RATES.length;
      SPEECH.rate = RATES[i];
      store.set('rate', SPEECH.rate);
      var chip = app.querySelector('[data-v="rate"]');
      if (chip) chip.textContent = T('speed', { r: SPEECH.rate + '×' });
      if (SPEECH.playing) { var at = Math.max(0, SPEECH.idx); synth.cancel(); SPEECH.paused = false; speakFrom(at); }
    }
    sayBarUpdate();
  }

  /* The bar sits at the top of every module page and quiz while listening is on. */
  function listenBar() {
    if (!audioOn()) return '';
    var rec = recordedAudio();
    if (rec) {
      return '<div class="listen"><span class="listen-label">' + esc(T('sayRecorded')) + '</span>' +
        '<audio controls preload="none" src="' + esc(rec) + '"></audio></div>';
    }
    if (!TTS) return '<div class="listen plain">' + esc(T('ttsNone')) + '</div>';
    var noVoice = ur() && !voiceFor('ur');
    return '<div class="listen"><span class="listen-label">' + esc(T('listenTitle')) + '</span>' +
      '<div class="listen-btns">' +
        '<button type="button" class="btn small" data-act="say" data-v="play">' + esc(T('play')) + '</button>' +
        '<button type="button" class="btn small ghost" data-act="say" data-v="stop">' + esc(T('stopSay')) + '</button>' +
        '<button type="button" class="chip small" data-act="say" data-v="rate">' + esc(T('speed', { r: SPEECH.rate + '×' })) + '</button>' +
      '</div>' +
      '<span class="listen-status">' + esc(T('sayReady')) + '</span>' +
      (noVoice ? '<p class="listen-warn">' + esc(T('ttsNoVoice')) + '</p>' : '') + '</div>';
  }

  function render(keepScroll) {
    stopSpeech();
    document.documentElement.lang = st.lang;
    document.documentElement.dir = ur() ? 'rtl' : 'ltr';
    document.title = L(CFG.PROGRAM);
    /* an account missing its college is completed first; the welcome page stays reachable */
    if (profileNeeded() && st.view !== 'profile' && st.view !== 'welcome') st.view = 'profile';
    /* keep what the learner has typed when only a message changes */
    var saved = {};
    if (keepScroll) {
      Array.prototype.forEach.call(app.querySelectorAll('input,select,textarea'), function (el) {
        var key = el.id || (el.name ? el.name + ':' + el.value : (el.dataset.check ? 'c' + el.dataset.check : ''));
        if (!key) return;
        saved[key] = (el.type === 'checkbox' || el.type === 'radio') ? el.checked : el.value;
      });
    }
    app.innerHTML = header() + '<main' + (st.view === 'welcome' ? ' class="wide"' : '') + '>' + (views[st.view] || views.welcome)() + '</main>' +
      '<footer>' + (st.view === 'welcome' && st.visits != null
        ? '<p class="visits"><span>' + esc(T('visits')) + '</span> <strong dir="ltr">' + Number(st.visits).toLocaleString('en-US') + '</strong>' +
          (DEMO ? '<small>' + esc(T('visitsDemo')) + '</small>' : '') + '</p>' : '') +
      esc(L(CFG.COLLEGE)) + '</footer>';
    var key = st.view + ':' + (st.p.m || '') + ':' + (st.p.i == null ? '' : st.p.i) + ':' + st.lang;
    if (audioOn() && TTS && st.view === 'module' && !recordedAudio() && key !== SPEECH.lastKey) {
      SPEECH.lastKey = key;
      setTimeout(function () { if (audioOn() && st.view === 'module') startSpeech(); }, 400);
    } else if (key !== SPEECH.lastKey) {
      SPEECH.lastKey = key;
    }
    if (keepScroll) {
      Array.prototype.forEach.call(app.querySelectorAll('input,select,textarea'), function (el) {
        var key = el.id || (el.name ? el.name + ':' + el.value : (el.dataset.check ? 'c' + el.dataset.check : ''));
        if (!(key in saved)) return;
        if (el.type === 'checkbox' || el.type === 'radio') el.checked = saved[key]; else el.value = saved[key];
      });
      toggleDept();
    } else {
      window.scrollTo(0, 0);
    }
  }
  /* Faculty and staff choose a department; students choose a year of study. */
  function toggleDept() {
    var role = document.getElementById('f-role');
    var dept = document.getElementById('dept-wrap'), year = document.getElementById('year-wrap');
    if (!role) return;
    if (dept) dept.hidden = !(role.value === 'Faculty' || role.value === 'Staff');
    if (year) year.hidden = role.value !== 'Student';
  }
  function val(id) { var el = document.getElementById(id); return el ? String(el.value).trim() : ''; }
  function fail(code) { st.error = code; render(true); var a = app.querySelector('.alert'); if (a && a.scrollIntoView) a.scrollIntoView({ block: 'center' }); }

  /* ---------- actions ---------- */
  /* The program feedback form opens only after every required module is passed. */
  function doneCount() {
    return REQUIRED.filter(function (id) { return st.progress[id] && st.progress[id].passed; }).length;
  }
  function allDone() { return REQUIRED.length > 0 && doneCount() === REQUIRED.length; }
  function fbOpen() { return !!st.user && allDone() && !st.feedbackDone; }

  function openModule(id) {
    var c = CONTENT[id], p = modProg(id), i = 0;
    while (i < c.sections.length && p.sections.indexOf(c.sections[i].id) >= 0) i++;
    if (p.passed) i = 0;
    go('module', { m: id, i: i });
  }

  app.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!t || t.disabled) return;
    var act = t.getAttribute('data-act'), v = t.getAttribute('data-v');
    if (act === 'submit') return; /* handled by the form */
    e.preventDefault();
    if (act === 'lang' || act === 'setlang') {
      st.lang = act === 'lang' ? (ur() ? 'en' : 'ur') : v;
      store.set('lang', st.lang);
      if (st.token && st.user) api('setLang', { lang: st.lang });
      render(true);
    } else if (act === 'audio') {
      st.audio = !st.audio;
      store.set('audio', st.audio ? 1 : 0);
      SPEECH.lastKey = '';
      render(true);
    }
    else if (act === 'say') { sayAction(v); }
    else if (act === 'logout') { doLogout(); render(); }
    else if (act === 'nav') {
      if (v === 'welcome') st.next = null;
      go(v);
    }
    else if (act === 'side') {
      var tg = v === 'feedback' ? { k: 'feedback' } : { k: 'module', id: v };
      if (st.user) openTarget(tg);
      else { st.next = tg; go('login'); st.info = 'loginToOpen'; render(); }
    }
    else if (act === 'open') openModule(v);
    else if (act === 'retry') go('module', { m: st.p.m, i: st.p.i });
    else if (act === 'step') {
      var c = CONTENT[st.p.m], i = st.p.i, dir = Number(v);
      if (dir > 0 && i < c.sections.length) {
        var s = c.sections[i];
        if (s.type === 'checklist') {
          var boxes = app.querySelectorAll('[data-check]');
          var all = Array.prototype.every.call(boxes, function (b) { return b.checked; });
          if (!all) { st.info = 'tickAll'; render(true); return; }
        }
        saveSection(st.p.m, s.id);
      }
      go('module', { m: st.p.m, i: Math.max(0, Math.min(c.sections.length, i + dir)) });
    }
  });

  app.addEventListener('change', function (e) { if (e.target.id === 'f-role') toggleDept(); });

  app.addEventListener('submit', function (e) {
    e.preventDefault();
    if (st.busy) return;
    var form = e.target.getAttribute('data-form');
    var email = val('f-email').toLowerCase(), pass = (document.getElementById('f-pass') || {}).value || '';
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (form === 'register') {
      var role = val('f-role'), dept = val('f-dept'), year = val('f-year'), college = val('f-college');
      if (!val('f-name') || !role || (role !== 'Student' && !dept)) return fail('invalid');
      if (role === 'Student' && !year) return fail('invalid');
      if (!college) return fail('invalid');
      if (!emailOk) return fail('email');
      if (pass.length < 8) return fail('weak_password');
      if (pass !== document.getElementById('f-pass2').value) return fail('mismatch');
      if (!document.getElementById('f-consent').checked) return fail('consent');
      call('register', { name: val('f-name'), email: email, password: pass, role: role, department: role === 'Student' ? '' : dept,
                         year: role === 'Student' ? year : '', college: college, lang: st.lang },
        function (r) { applyState(r); if (st.next) { var t0 = st.next; st.next = null; openTarget(t0); } else go('about'); });
    } else if (form === 'profile') {
      var pCollege = val('f-college'), pYear = val('f-year');
      if (!pCollege || (st.user && st.user.role === 'Student' && !pYear)) return fail('invalid');
      call('profile', { college: pCollege, year: pYear }, function (r) {
        applyState(r);
        if (st.next) { var t2 = st.next; st.next = null; openTarget(t2); } else go('dashboard');
      });
    } else if (form === 'login') {
      if (!emailOk || !pass) return fail('bad_login');
      call('login', { email: email, password: pass }, function (r) {
        applyState(r);
        if (r.user && r.user.lang && !store.get('lang')) st.lang = r.user.lang;
        if (st.next) { var t1 = st.next; st.next = null; openTarget(t1); } else go('dashboard');
        flushQueue();
      });
    } else if (form === 'resetRequest') {
      if (!emailOk) return fail('email');
      call('resetRequest', { email: email, lang: st.lang }, function () { st.view = 'forgot'; st.p = { sent: true, email: email }; st.info = 'codeSent'; render(); });
    } else if (form === 'resetConfirm') {
      if (pass.length < 8) return fail('weak_password');
      call('resetConfirm', { email: st.p.email, code: val('f-code'), password: pass }, function () { st.view = 'login'; st.p = {}; st.info = 'resetDone'; render(); });
    } else if (form === 'quiz') {
      var c = CONTENT[st.p.m], answers = [];
      for (var i = 0; i < c.quiz.length; i++) {
        var sel = app.querySelector('input[name="q' + i + '"]:checked');
        if (!sel) return fail('answerAll');
        answers.push(sel.value);
      }
      var send = function () {
        call('quiz', { module: st.p.m, answers: answers }, function (r) {
          applyState(r);
          st.p.result = { score: r.score, total: r.total, percent: r.percent, passed: r.passed, correct: r.correct, answers: answers };
          render();
        });
      };
      /* make sure every completed section has reached the server before the quiz is marked */
      var pending = flushQueue();
      (pending && pending.then ? pending : Promise.resolve()).then(send);
    } else if (form === 'feedback') {
      var get = function (n) { var el = app.querySelector('input[name="' + n + '"]:checked'); return el ? Number(el.value) : 0; };
      var fb = { module: 'program', clear: get('clear'), relevant: get('relevant'), easy: get('easy'), useful: val('f-useful'), improve: val('f-improve'), lang: st.lang };
      if (!fb.clear || !fb.relevant || !fb.easy) return fail('fbRate');
      call('feedback', fb, function () { st.feedbackDone = true; st.view = 'dashboard'; st.p = {}; st.info = 'fbThanks'; render(); });
    }
  });
  S.e_answerAll = S.answerAll; S.e_fbRate = S.fbRate;

  if (TTS && typeof window.speechSynthesis.addEventListener === 'function') {
    window.speechSynthesis.addEventListener('voiceschanged', function () {
      if (audioOn() && app.querySelector('.listen')) render(true);
    });
  }
  window.addEventListener('beforeunload', function () { stopSpeech(); });

  /* ---------- start ---------- */
  /* count this visit once per page load and show the running total on the home page */
  st.visits = null;
  api('visit', {}).then(function (r) {
    if (r && r.ok && r.visits != null) { st.visits = r.visits; if (st.view === 'welcome') render(true); }
  });
  if (st.token) {
    render();
    api('state', {}).then(function (r) {
      if (r && r.ok) { applyState(r); go('dashboard'); flushQueue(); }
      else if (r && r.error === 'network') { st.error = 'network'; render(); }
      else { doLogout(); render(); }
    });
  } else {
    render();
  }
})();
