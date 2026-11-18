/**
 * KGMC Campus Safety Learning Program - Google Sheets backend.
 *
 * This script lives inside the instructor's Google Sheet (Extensions > Apps Script).
 * It handles learner accounts, progress, quiz marking, confirmation emails, the final
 * certificate and anonymous feedback. The course website talks to it through the
 * web-app URL created by Deploy > New deployment.
 *
 * Things you are likely to change are in CONFIG and MODULES below. Nothing else needs editing.
 */

var CONFIG = {
  PROGRAM_NAME: 'KGMC Campus Safety Learning Program',
  COLLEGE: 'Khyber Girls Medical College, Peshawar',
  PASS_PERCENT: 70,                       // must match PASS_PERCENT in the site's config.js
  // The certificate is issued when ALL of these are passed.
  // To test the certificate with Module 1 only, temporarily change this to ['m1'].
  REQUIRED_MODULES: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10'],
  SIGNATORIES: [
    { name: 'Prof. Raheelah Amin', title: 'Chairperson, Safety Tour and Infection Control Committee' },
    { name: 'Dean’s Office', title: 'Khyber Girls Medical College' }
  ],
  LOGO_URL: '',                           // optional: web address of a different logo. Leave empty to use the KGMC logo stored at the bottom of this file.
  SITE_URL: '',                           // optional: address of the course site, used in emails
  CERT_PREFIX: 'KGMC-CSLP',
  SESSION_DAYS: 30
};

/**
 * One entry per module that is live.
 * sections: the section ids from the module's content file, in order.
 * key: the correct option for each quiz question, in order (must match the content file).
 */
var MODULES = {
  m1: {
    title: 'Fire Safety and Safe Evacuation',
    titleUr: 'آگ سے حفاظت اور محفوظ انخلا',
    sections: ['start', 'objectives', 'prevent', 'discover', 'evacuate', 'assist', 'extinguisher', 'practice', 'apply'],
    key: ['b', 'a', 'c', 'a', 'c', 'b', 'b', 'c']
  },
  m2: {
    title: 'Everyday Campus Safety and Accessibility',
    titleUr: 'روزمرہ کیمپس سیفٹی اور رسائی',
    sections: ['start', 'objectives', 'slips', 'stairs', 'electrical', 'access', 'respect', 'report', 'practice', 'apply'],
    key: ['b', 'a', 'c', 'b', 'a', 'c', 'b', 'c']
  },
  m3: {
    title: 'Emergency Response and First-Aid Awareness',
    titleUr: 'ہنگامی ردِعمل اور ابتدائی طبی امداد سے آگاہی',
    sections: ['start', 'objectives', 'response', 'call', 'collapse', 'choking', 'bleeding', 'seizures', 'burns', 'resources', 'practice', 'apply'],
    key: ['b', 'a', 'c', 'b', 'a', 'c', 'b', 'a']
  },
  m4: {
    title: 'Infection Prevention and Hand Hygiene',
    titleUr: 'انفیکشن سے بچاؤ اور ہاتھوں کی صفائی',
    sections: ['start', 'objectives', 'everyone', 'when', 'choice', 'how', 'ppe', 'respiratory', 'surfaces', 'report', 'practice', 'apply'],
    key: ['b', 'a', 'c', 'b', 'a', 'c', 'b', 'a']
  }
};

/* ------------------------------------------------------------------ sheet layout */

var TABS = {
  'Students': ['Email', 'Full name', 'Role', 'Department', 'Language', 'Registered', 'Last active', 'Modules completed',
               'Certificate ID', 'Certificate date', 'Salt', 'Password hash', 'Reset hash', 'Reset expiry', 'Program feedback given'],
  'Progress': ['Email', 'Full name', 'Module', 'Sections done', 'Sections total', 'Progress %', 'Quiz attempts', 'Best score %',
               'Passed', 'Passed date', 'Confirmation emailed', 'Feedback given', 'Last updated', 'Section list'],
  'Quiz attempts': ['Timestamp', 'Email', 'Module', 'Score', 'Out of', 'Score %', 'Passed', 'Answers'],
  'Feedback': ['Timestamp', 'About', 'Role', 'Department', 'Language', 'Content was clear (1-5)', 'Relevant to me (1-5)',
               'Easy to use (1-5)', 'Most useful', 'To improve'],
  'Certificates': ['Certificate ID', 'Full name', 'Email', 'Role', 'Department', 'Issued', 'Emailed'],
  'Visits': ['Date', 'Visits']
};
var S = { EMAIL: 0, NAME: 1, ROLE: 2, DEPT: 3, LANG: 4, REG: 5, ACTIVE: 6, DONE: 7, CERT: 8, CERTDATE: 9, SALT: 10, HASH: 11, RHASH: 12, REXP: 13, FB: 14 };
var P = { EMAIL: 0, NAME: 1, MOD: 2, DONE: 3, TOTAL: 4, PCT: 5, ATT: 6, BEST: 7, PASSED: 8, PDATE: 9, MAILED: 10, FB: 11, UPD: 12, LIST: 13 };

function onOpen() {
  SpreadsheetApp.getUi().createMenu('Safety Training')
    .addItem('Set up / repair sheets', 'setup')
    .addItem('Send me a test certificate', 'sendTestCertificate')
    .addItem('Re-send emails that failed', 'resendFailedCertificates')
    .addToUi();
}

/** Creates the tabs and headings. Safe to run again at any time; it never deletes data. */
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(TABS).forEach(function (name) {
    var sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.getRange(1, 1, 1, TABS[name].length).setValues([TABS[name]]).setFontWeight('bold');
    sh.setFrozenRows(1);
  });
  // Password data is unreadable (salted and hashed) and hidden so it is not edited by accident.
  ss.getSheetByName('Students').hideColumns(S.SALT + 1, 4);
  ss.getSheetByName('Progress').hideColumns(P.LIST + 1, 1);

  var sum = ss.getSheetByName('Summary') || ss.insertSheet('Summary', 0);
  var rows = [
    [CONFIG.PROGRAM_NAME + ': summary', '', ''],
    ['', '', ''],
    ['Registered learners', '=COUNTA(Students!A2:A)', ''],
    ['Students', '=COUNTIF(Students!C2:C,"Student")', ''],
    ['Faculty', '=COUNTIF(Students!C2:C,"Faculty")', ''],
    ['Staff', '=COUNTIF(Students!C2:C,"Staff")', ''],
    ['Certificates issued', '=COUNTA(Certificates!A2:A)', ''],
    ['Feedback responses', '=COUNTA(Feedback!A2:A)', ''],
    ['Average: content was clear', '=IFERROR(ROUND(AVERAGE(Feedback!F2:F),1),"")', ''],
    ['Average: relevant to me', '=IFERROR(ROUND(AVERAGE(Feedback!G2:G),1),"")', ''],
    ['Average: easy to use', '=IFERROR(ROUND(AVERAGE(Feedback!H2:H),1),"")', ''],
    ['Total visits to the site', '=SUM(Visits!B2:B)', ''],
    ['', '', ''],
    ['Module', 'Learners started', 'Learners passed']
  ];
  CONFIG.REQUIRED_MODULES.forEach(function (id) {
    rows.push([id + (MODULES[id] ? ': ' + MODULES[id].title : ' (not yet live)'),
               '=COUNTIF(Progress!C2:C,"' + id + '")', '=COUNTIFS(Progress!C2:C,"' + id + '",Progress!I2:I,"Yes")']);
  });
  sum.getRange(1, 1, rows.length, 3).setValues(rows);
  sum.getRange(1, 1).setFontWeight('bold');
  sum.getRange(14, 1, 1, 3).setFontWeight('bold');
  getSecret_();
}

/* ------------------------------------------------------------------ web entry points */

function doGet() {
  return json_({ ok: true, service: CONFIG.PROGRAM_NAME, status: 'running' });
}

function doPost(e) {
  var out;
  var lock = LockService.getScriptLock();
  try {
    var body = JSON.parse(e.postData.contents);
    lock.waitLock(25000);
    out = route_(body);
  } catch (err) {
    console.error(err && err.stack ? err.stack : err);
    out = { ok: false, error: 'server' };
  } finally {
    try { lock.releaseLock(); } catch (ignore) {}
  }
  return json_(out);
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function route_(b) {
  switch (b.action) {
    case 'visit': return visit_();
    case 'register': return register_(b);
    case 'login': return login_(b);
    case 'resetRequest': return resetRequest_(b);
    case 'resetConfirm': return resetConfirm_(b);
  }
  var email = verifyToken_(b.token);
  var st = email ? findStudent_(email) : null;
  if (!st) return { ok: false, error: 'session' };
  switch (b.action) {
    case 'state': return state_(st);
    case 'setLang': setStudent_(st, S.LANG, b.lang === 'ur' ? 'ur' : 'en'); return { ok: true };
    case 'progress': return progress_(st, b);
    case 'quiz': return quiz_(st, b);
    case 'feedback': return feedback_(st, b);
  }
  return { ok: false, error: 'server' };
}

/* ------------------------------------------------------------------ sheet helpers */

function tab_(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name);
  if (!sh) { setup(); sh = ss.getSheetByName(name); }
  return sh;
}
function rows_(name) {
  var sh = tab_(name), n = sh.getLastRow();
  return n < 2 ? [] : sh.getRange(2, 1, n - 1, TABS[name].length).getValues();
}
/** Every value written to the sheet passes through here, so typed text can never run as a spreadsheet formula. */
function safe_(v) { return (typeof v === 'string' && /^[=+\-@]/.test(v)) ? "'" + v : v; }
function writeRow_(name, index, row) { tab_(name).getRange(index + 2, 1, 1, row.length).setValues([row.map(safe_)]); }
function append_(name, row) { tab_(name).appendRow(row.map(safe_)); }

/** Tidies typed text and trims its length. */
function clean_(v, max) {
  return String(v == null ? '' : v).replace(/[\u0000-\u001f]+/g, ' ').trim().slice(0, max || 200);
}
function normEmail_(v) { return String(v || '').trim().toLowerCase().slice(0, 150); }
function validEmail_(e) { return /^[a-z0-9][^\s@]*@[^\s@]+\.[^\s@]+$/.test(e); }

function findStudent_(email) {
  var rows = rows_('Students');
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i][S.EMAIL]).toLowerCase() === email) return { index: i, row: rows[i] };
  }
  return null;
}
function setStudent_(st, col, value) {
  st.row[col] = value;
  tab_('Students').getRange(st.index + 2, col + 1).setValue(safe_(value));
}
function progressRows_(email) {
  var rows = rows_('Progress'), out = [];
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i][P.EMAIL]).toLowerCase() === email) out.push({ index: i, row: rows[i] });
  }
  return out;
}
function iso_(d) { return d instanceof Date ? d.toISOString() : (d ? String(d) : ''); }

/* ------------------------------------------------------------------ visit counter */

/**
 * Called once each time someone opens the site. Adds one to today's row in the Visits tab
 * and returns the running total, which the home page shows. Every visit counts, including
 * repeat visits by the same person.
 */
function visit_() {
  function day(v) { return v instanceof Date ? Utilities.formatDate(v, 'Asia/Karachi', 'yyyy-MM-dd') : String(v); }
  var today = Utilities.formatDate(new Date(), 'Asia/Karachi', 'yyyy-MM-dd');
  var rows = rows_('Visits'), total = 0, last = rows.length - 1;
  rows.forEach(function (r) { total += Number(r[1]) || 0; });
  if (last >= 0 && day(rows[last][0]) === today) writeRow_('Visits', last, [rows[last][0], (Number(rows[last][1]) || 0) + 1]);
  else append_('Visits', [today, 1]);
  return { ok: true, visits: total + 1 };
}

/* ------------------------------------------------------------------ passwords and sessions */

function getSecret_() {
  var props = PropertiesService.getScriptProperties();
  var s = props.getProperty('SECRET');
  if (!s) { s = Utilities.getUuid() + Utilities.getUuid(); props.setProperty('SECRET', s); }
  return s;
}
function hash_(password, salt) {
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, salt + ':' + password, Utilities.Charset.UTF_8);
  for (var i = 0; i < 1000; i++) bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, bytes);
  return 'h1:' + Utilities.base64Encode(bytes);   // the prefix stops Sheets reading it as a formula
}
function makeToken_(email) {
  var payload = email + '|' + (Date.now() + CONFIG.SESSION_DAYS * 86400000);
  var sig = Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(payload, getSecret_()));
  return Utilities.base64EncodeWebSafe(payload, Utilities.Charset.UTF_8) + '.' + sig;
}
function verifyToken_(token) {
  try {
    var parts = String(token || '').split('.');
    if (parts.length !== 2) return null;
    var payload = Utilities.newBlob(Utilities.base64DecodeWebSafe(parts[0])).getDataAsString();
    var sig = Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(payload, getSecret_()));
    if (sig !== parts[1]) return null;
    var bits = payload.split('|');
    if (Number(bits[1]) < Date.now()) return null;
    return bits[0];
  } catch (err) { return null; }
}
/** Counts attempts in a 15-minute window. Returns true when the limit is exceeded. */
function tooMany_(key, limit) {
  var cache = CacheService.getScriptCache();
  var n = Number(cache.get(key) || 0) + 1;
  cache.put(key, String(n), 900);
  return n > limit;
}

/* ------------------------------------------------------------------ accounts */

function register_(b) {
  var email = normEmail_(b.email);
  var name = clean_(b.name, 100);
  var role = ['Student', 'Faculty', 'Staff'].indexOf(b.role) >= 0 ? b.role : '';
  var dept = role === 'Student' ? '' : clean_(b.department, 80);
  var password = String(b.password || '');
  if (!validEmail_(email) || !name || !role || (role !== 'Student' && !dept)) return { ok: false, error: 'invalid' };
  if (password.length < 8 || password.length > 200) return { ok: false, error: 'weak_password' };
  if (findStudent_(email)) return { ok: false, error: 'email_exists' };
  var salt = Utilities.getUuid(), now = new Date();
  append_('Students', [email, name, role, dept, b.lang === 'ur' ? 'ur' : 'en', now, now, 0, '', '', salt, hash_(password, salt), '', '', '']);
  return state_(findStudent_(email), true);
}

function login_(b) {
  var email = normEmail_(b.email);
  if (tooMany_('login:' + email, 10)) return { ok: false, error: 'too_many' };
  var st = findStudent_(email);
  if (!st || hash_(String(b.password || ''), st.row[S.SALT]) !== st.row[S.HASH]) return { ok: false, error: 'bad_login' };
  CacheService.getScriptCache().remove('login:' + email);
  setStudent_(st, S.ACTIVE, new Date());
  return state_(st, true);
}

function resetRequest_(b) {
  var email = normEmail_(b.email);
  if (tooMany_('reset:' + email, 3)) return { ok: true };          // silently ignore floods
  var st = findStudent_(email);
  if (st) {
    var code = String(Math.floor(100000 + Math.random() * 900000));
    setStudent_(st, S.RHASH, hash_(code, st.row[S.SALT]));
    setStudent_(st, S.REXP, Date.now() + 30 * 60000);
    sendMail_(email, CONFIG.PROGRAM_NAME + ': password reset code',
      '<p>Your password reset code is:</p><p style="font-size:26px;letter-spacing:4px"><b>' + code + '</b></p>' +
      '<p>It is valid for 30 minutes. If you did not ask for this, you can ignore this email.</p>' +
      '<div dir="rtl" style="text-align:right"><p>آپ کا پاس ورڈ تبدیل کرنے کا کوڈ اوپر دیا گیا ہے۔ یہ 30 منٹ تک کارآمد ہے۔</p></div>');
  }
  return { ok: true };                                             // never reveals whether the email exists
}

function resetConfirm_(b) {
  var email = normEmail_(b.email);
  if (tooMany_('code:' + email, 8)) return { ok: false, error: 'too_many' };
  var st = findStudent_(email), password = String(b.password || '');
  if (password.length < 8 || password.length > 200) return { ok: false, error: 'weak_password' };
  var code = String(b.code || '').trim();
  if (!st || !st.row[S.RHASH] || Number(st.row[S.REXP]) < Date.now() || hash_(code, st.row[S.SALT]) !== st.row[S.RHASH]) {
    return { ok: false, error: 'bad_code' };
  }
  var salt = Utilities.getUuid();
  var row = st.row.slice();
  row[S.SALT] = salt; row[S.HASH] = hash_(password, salt); row[S.RHASH] = ''; row[S.REXP] = '';
  writeRow_('Students', st.index, row);
  return { ok: true };
}

/* ------------------------------------------------------------------ progress */

function state_(st, withToken) {
  var email = String(st.row[S.EMAIL]).toLowerCase(), progress = {};
  progressRows_(email).forEach(function (p) {
    progress[p.row[P.MOD]] = {
      sections: String(p.row[P.LIST] || '').split(',').filter(String),
      attempts: Number(p.row[P.ATT]) || 0, best: Number(p.row[P.BEST]) || 0,
      passed: p.row[P.PASSED] === 'Yes', passedDate: iso_(p.row[P.PDATE]), feedback: p.row[P.FB] === 'Yes'
    };
  });
  var out = {
    ok: true,
    user: { name: st.row[S.NAME], email: email, role: st.row[S.ROLE], department: st.row[S.DEPT], lang: st.row[S.LANG] },
    progress: progress, required: CONFIG.REQUIRED_MODULES,
    certificate: st.row[S.CERT] ? { id: st.row[S.CERT], date: iso_(st.row[S.CERTDATE]) } : null,
    feedback: st.row[S.FB] === 'Yes'
  };
  if (withToken) out.token = makeToken_(email);
  return out;
}

/** Finds the learner's row for a module, creating it if this is their first visit. */
function progressRow_(st, moduleId) {
  var email = String(st.row[S.EMAIL]).toLowerCase();
  var found = progressRows_(email).filter(function (p) { return p.row[P.MOD] === moduleId; })[0];
  if (found) return found;
  var row = [email, st.row[S.NAME], moduleId, 0, MODULES[moduleId].sections.length, 0, 0, 0, '', '', '', '', new Date(), ''];
  append_('Progress', row);
  return progressRows_(email).filter(function (p) { return p.row[P.MOD] === moduleId; })[0];
}

function progress_(st, b) {
  var mod = MODULES[b.module];
  if (!mod || mod.sections.indexOf(b.section) < 0) return { ok: false, error: 'invalid' };
  var p = progressRow_(st, b.module);
  var list = String(p.row[P.LIST] || '').split(',').filter(String);
  if (list.indexOf(b.section) < 0) list.push(b.section);
  p.row[P.LIST] = list.join(',');
  p.row[P.DONE] = list.length;
  p.row[P.TOTAL] = mod.sections.length;
  p.row[P.PCT] = Math.round(100 * list.length / mod.sections.length);
  p.row[P.UPD] = new Date();
  writeRow_('Progress', p.index, p.row);
  setStudent_(st, S.ACTIVE, new Date());
  return { ok: true };
}

function quiz_(st, b) {
  var mod = MODULES[b.module];
  if (!mod || !Array.isArray(b.answers) || b.answers.length !== mod.key.length) return { ok: false, error: 'invalid' };
  var p = progressRow_(st, b.module);
  if (Number(p.row[P.DONE]) < mod.sections.length) return { ok: false, error: 'not_ready' };

  var correct = mod.key.map(function (k, i) { return b.answers[i] === k; });
  var score = correct.filter(Boolean).length;
  var percent = Math.round(100 * score / mod.key.length);
  var passed = percent >= CONFIG.PASS_PERCENT;
  var now = new Date(), email = String(st.row[S.EMAIL]).toLowerCase();

  append_('Quiz attempts', [now, email, b.module, score, mod.key.length, percent, passed ? 'Yes' : 'No',
                            b.answers.map(function (a) { return clean_(a, 1); }).join(' ')]);
  var newlyPassed = passed && p.row[P.PASSED] !== 'Yes';
  p.row[P.ATT] = (Number(p.row[P.ATT]) || 0) + 1;
  p.row[P.BEST] = Math.max(Number(p.row[P.BEST]) || 0, percent);
  p.row[P.UPD] = now;
  if (newlyPassed) { p.row[P.PASSED] = 'Yes'; p.row[P.PDATE] = now; }
  writeRow_('Progress', p.index, p.row);
  setStudent_(st, S.ACTIVE, now);

  if (newlyPassed) {
    var passedIds = progressRows_(email).filter(function (r) { return r.row[P.PASSED] === 'Yes'; }).map(function (r) { return r.row[P.MOD]; });
    var doneRequired = CONFIG.REQUIRED_MODULES.filter(function (id) { return passedIds.indexOf(id) >= 0; }).length;
    setStudent_(st, S.DONE, doneRequired);
    p.row[P.MAILED] = sendModuleEmail_(st, b.module, percent, doneRequired);
    writeRow_('Progress', p.index, p.row);
    if (doneRequired === CONFIG.REQUIRED_MODULES.length && !st.row[S.CERT]) issueCertificate_(st);
  }

  var out = state_(st);
  out.score = score; out.total = mod.key.length; out.percent = percent; out.passed = passed; out.correct = correct;
  return out;
}

/**
 * Feedback is about the whole program and is only accepted once every required module has been passed.
 * It is stored without the learner's name or email. Only "feedback given" is noted on their Students row.
 */
function feedback_(st, b) {
  var email = String(st.row[S.EMAIL]).toLowerCase(), passed = {};
  progressRows_(email).forEach(function (p) { if (p.row[P.PASSED] === 'Yes') passed[p.row[P.MOD]] = true; });
  for (var i = 0; i < CONFIG.REQUIRED_MODULES.length; i++) {
    if (!passed[CONFIG.REQUIRED_MODULES[i]]) return { ok: false, error: 'not_ready' };
  }
  if (st.row[S.FB] === 'Yes') return { ok: true };
  function rating(v) { v = Math.round(Number(v)); return v >= 1 && v <= 5 ? v : ''; }
  append_('Feedback', [new Date(), 'Program (all modules)', st.row[S.ROLE], st.row[S.DEPT], b.lang === 'ur' ? 'Urdu' : 'English',
                       rating(b.clear), rating(b.relevant), rating(b.easy), clean_(b.useful, 1500), clean_(b.improve, 1500)]);
  setStudent_(st, S.FB, 'Yes');
  return { ok: true };
}

/* ------------------------------------------------------------------ emails and certificate */

function esc_(s) {
  return String(s == null ? '' : s).replace(/^'/, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Returns 'Yes' or a short failure note, which is written to the sheet so nothing fails silently. */
function sendMail_(to, subject, html, attachments) {
  try {
    var msg = { to: to, subject: subject, htmlBody: html, name: CONFIG.PROGRAM_NAME };
    if (attachments) msg.attachments = attachments;
    MailApp.sendEmail(msg);
    return 'Yes';
  } catch (err) {
    console.error('Email to ' + to + ' failed: ' + err);
    return 'Failed: ' + String(err).slice(0, 80);
  }
}

function sendModuleEmail_(st, moduleId, percent, doneCount) {
  var mod = MODULES[moduleId], total = CONFIG.REQUIRED_MODULES.length, n = moduleId.replace('m', '');
  var link = CONFIG.SITE_URL ? '<p><a href="' + CONFIG.SITE_URL + '">' + CONFIG.SITE_URL + '</a></p>' : '';
  var html =
    '<p>Dear ' + esc_(st.row[S.NAME]) + ',</p>' +
    '<p>You have completed <b>Module ' + n + ': ' + esc_(mod.title) + '</b> with a quiz score of ' + percent + '%.</p>' +
    '<p>You have now completed <b>' + doneCount + ' of ' + total + '</b> modules. ' +
    (doneCount < total ? 'Your certificate of completion will be emailed to you when all ' + total + ' modules are complete.'
                       : 'Your certificate of completion is on its way in a separate email.') + '</p>' + link +
    '<hr><div dir="rtl" style="text-align:right;font-size:16px;line-height:2">' +
    '<p>محترم/محترمہ ' + esc_(st.row[S.NAME]) + '،</p>' +
    '<p>آپ نے <b>ماڈیول ' + n + ': ' + esc_(mod.titleUr) + '</b> ' + percent + '% اسکور کے ساتھ مکمل کر لیا ہے۔</p>' +
    '<p>آپ اب تک ' + total + ' میں سے <b>' + doneCount + '</b> ماڈیول مکمل کر چکے ہیں۔ تمام ماڈیول مکمل ہونے پر آپ کا سرٹیفکیٹ ای میل کر دیا جائے گا۔</p></div>' +
    '<p style="color:#666;font-size:12px">' + esc_(CONFIG.PROGRAM_NAME) + ', ' + esc_(CONFIG.COLLEGE) + '</p>';
  return sendMail_(st.row[S.EMAIL], CONFIG.PROGRAM_NAME + ': Module ' + n + ' completed', html);
}

function issueCertificate_(st) {
  var now = new Date();
  var number = tab_('Certificates').getLastRow();                  // header row counts as 1, so first ID is 0001
  var id = CONFIG.CERT_PREFIX + '-' + now.getFullYear() + '-' + ('000' + number).slice(-4);
  var sent = emailCertificate_(st.row[S.NAME], st.row[S.EMAIL], st.row[S.ROLE], st.row[S.DEPT], now, id);
  append_('Certificates', [id, st.row[S.NAME], st.row[S.EMAIL], st.row[S.ROLE], st.row[S.DEPT], now, sent]);
  setStudent_(st, S.CERT, id);
  setStudent_(st, S.CERTDATE, now);
}

function emailCertificate_(name, email, role, dept, date, id) {
  var pdf = Utilities.newBlob(certificateHtml_(name, role, dept, date, id), 'text/html', 'certificate.html')
    .getAs('application/pdf').setName('KGMC Safety Certificate ' + id + '.pdf');
  var html =
    '<p>Dear ' + esc_(name) + ',</p><p>Congratulations! You have completed all ' + CONFIG.REQUIRED_MODULES.length +
    ' modules of the ' + esc_(CONFIG.PROGRAM_NAME) + '. Your certificate of completion is attached.</p>' +
    '<p>Certificate ID: <b>' + id + '</b></p>' +
    '<hr><div dir="rtl" style="text-align:right;font-size:16px;line-height:2"><p>مبارک ہو! آپ نے پروگرام کے تمام ماڈیول مکمل کر لیے ہیں۔ آپ کا تکمیل کا سرٹیفکیٹ اس ای میل کے ساتھ منسلک ہے۔</p></div>' +
    '<p style="color:#666;font-size:12px">' + esc_(CONFIG.COLLEGE) + '</p>';
  return sendMail_(email, CONFIG.PROGRAM_NAME + ': your certificate of completion', html, [pdf]);
}

function certificateHtml_(name, role, dept, date, id) {
  var logo = '<img src="data:image/png;base64,' + LOGO_DATA + '" style="height:96px"><br>';   // KGMC logo, stored at the bottom of this file
  if (CONFIG.LOGO_URL) {
    try {
      var img = UrlFetchApp.fetch(CONFIG.LOGO_URL).getBlob();
      logo = '<img src="data:' + img.getContentType() + ';base64,' + Utilities.base64Encode(img.getBytes()) + '" style="height:96px"><br>';
    } catch (err) { console.error('Logo could not be loaded: ' + err); }
  }
  var dateText = Utilities.formatDate(date, 'Asia/Karachi', 'd MMMM yyyy');
  var who = esc_(role) + (dept ? ', ' + esc_(dept) : '');
  function sign(s) {
    return '<td style="width:36%;text-align:center;vertical-align:top;padding:0 10px;font-size:13px">' +
           '<div style="border-top:1px solid #222;padding-top:6px">' +
           (s.name ? '<b>' + esc_(s.name) + '</b><br>' + esc_(s.title) : '<b>' + esc_(s.title) + '</b>') + '</div></td>';
  }
  var seal = '<td rowspan="2" style="width:28%;text-align:center;vertical-align:bottom"><img src="data:image/png;base64,' + SEAL_DATA + '" style="height:170px"></td>';
  var divider = '<img src="data:image/png;base64,' + DIVIDER_DATA + '" style="width:420px"><br>';
  var first = CONFIG.SIGNATORIES[0] || { name: '', title: '' }, second = CONFIG.SIGNATORIES[1] || { name: '', title: '' };
  return '<html><body style="font-family:Georgia,serif;color:#1d2523;margin:0">' +
    '<div style="border:8px double #0f5c4d;padding:6px">' +                       // green outer frame
    '<div style="border:2px solid #d9ae3c;padding:30px 34px 22px;text-align:center">' + logo +   // gold inner frame
    '<p style="font-size:15px;letter-spacing:2px;text-transform:uppercase;margin:6px 0"><b>' + esc_(CONFIG.COLLEGE) + '</b></p>' +
    '<h1 style="font-size:40px;color:#0a4539;margin:20px 0 6px">Certificate of Completion</h1>' + divider +
    '<p style="font-size:16px;margin:14px 0 0">This certifies that</p>' +
    '<p style="font-size:32px;margin:8px 0 2px;color:#0a4539"><b>' + esc_(name) + '</b></p>' +
    '<p style="font-size:15px;margin:0 0 18px">' + who + '</p>' +
    '<p style="font-size:16px;line-height:1.7;margin:0">has completed all ' + CONFIG.REQUIRED_MODULES.length + ' modules of the<br>' +
    '<b style="font-size:19px">' + esc_(CONFIG.PROGRAM_NAME) + '</b><br>and passed each knowledge assessment.</p>' +
    '<p style="font-size:14px;margin:20px 0 10px">Date: <b>' + dateText + '</b> &nbsp;&nbsp;|&nbsp;&nbsp; Certificate ID: <b>' + id + '</b></p>' +
    '<table style="width:100%;border-collapse:collapse"><tr><td style="width:36%;height:96px"></td>' + seal + '<td style="width:36%"></td></tr>' +
    '<tr>' + sign(first) + sign(second) + '</tr></table>' +
    '<p style="font-size:11px;color:#555;margin-top:22px">This certificate records online learning completion. ' +
    'Practical training and evacuation drill participation are recorded separately.</p></div></div></body></html>';
}

/* ------------------------------------------------------------------ menu actions */

function sendTestCertificate() {
  var me = Session.getEffectiveUser().getEmail();
  var result = emailCertificate_('Sample Learner', me, 'Staff', 'Sample Department', new Date(), CONFIG.CERT_PREFIX + '-TEST-0000');
  SpreadsheetApp.getUi().alert(result === 'Yes' ? 'A sample certificate was sent to ' + me : 'The email could not be sent. ' + result);
}

/** Re-sends any certificate whose "Emailed" column is not "Yes" (for example after the daily email limit was reached). */
function resendFailedCertificates() {
  var rows = rows_('Certificates'), sent = 0;
  rows.forEach(function (r, i) {
    if (r[6] === 'Yes') return;
    var issued = r[5] instanceof Date ? r[5] : new Date();
    r[6] = emailCertificate_(r[1], r[2], r[3], r[4], issued, r[0]);
    writeRow_('Certificates', i, r);
    if (r[6] === 'Yes') sent++;
  });
  var prog = rows_('Progress'), students = rows_('Students');
  prog.forEach(function (r, i) {
    if (r[P.PASSED] !== 'Yes' || r[P.MAILED] === 'Yes') return;
    var st = null;
    for (var k = 0; k < students.length; k++) if (String(students[k][S.EMAIL]).toLowerCase() === String(r[P.EMAIL]).toLowerCase()) st = { index: k, row: students[k] };
    if (!st || !MODULES[r[P.MOD]]) return;
    r[P.MAILED] = sendModuleEmail_(st, r[P.MOD], Number(r[P.BEST]) || 0, Number(st.row[S.DONE]) || 0);
    writeRow_('Progress', i, r);
    if (r[P.MAILED] === 'Yes') sent++;
  });
  SpreadsheetApp.getUi().alert(sent + ' email(s) sent.');
}

/* ------------------------------------------------------------------ KGMC logo for the certificate
   This long line is the logo picture itself, stored as text so the certificate never depends on
   a web address. Do not edit it. To use a different logo, set LOGO_URL in CONFIG instead. */
var LOGO_DATA = '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';

/* Ribbon seal and gold divider for the certificate, stored as text in the same way as the logo. Do not edit. */
var SEAL_DATA = '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';
var DIVIDER_DATA = 'iVBORw0KGgoAAAANSUhEUgAAAoAAAAAwCAMAAAC2RjtNAAAAkFBMVEXg0K2whR/////YrTvr1ZziwmwPXEyofBrLpDe1iSK4lUasgyfbtEv06cr28umtgR3v59UaYEs1a0iXk0GxijS9kijDlyzInDDFqWnjxHLw6dq0mD3n3MLRuobXxJji1LQSXUwmZUtLdEhUeEZrgUV8iUOunD+9nFPAoVvdt1PgvmLozYf58t+qfyDLsXfcy6Wh94flAAACNElEQVR42u2dWVPCUAxGNcUGyiICirKICiKb+v//nYBQI5uO0ma057yVhzvTb8600+TecCIAjpwQASAgICD8iCiqEAICelFpqzZa5ICAPrQaWihosUoSCOhBtaiFIJgb2CELBEyfzvPCv4WB2iMNBEw9OdXLYMml6i15IGC63KpeBSuuVLskgoBp8qLaDGKaqtdkgoDpca2aDwx51SdSQcC0eNrwb2lgRC4ImAqVSM+DLc61TVMEAVOg2jD+DQbGQJoiCJg8reJ7+W9JPwz78QVNEQRMno7xL/8QznnIGwNpiiBgovTU+FcLl9SMgTRFEDBJXuP2x4d/1kCaIgh4HMqTUmlS3vy1a9of7fsw5r59qCmyey1AwP3k3nXKyWb5OW5/DC9Cw8Vwf1Nk91qAgAeef2udPj23Rqb8XP/k39zAuilJj75eC74nYC5jrG77Zi3Njckisv7dhRvc1fc0RbbWymimPxMwyBir2y6tr0tidt9/lJ8fwx08mpK0OSmytVZGM0XAXwoY6el3BTxFwGMJyCuYV7DrK5iPED5C+AqmDIOAmWM2HY+ns+MUonevBQgoSbTiXkkJAYXNCJkQ8OzfIb/djlUlNQRMNsqDG1JbpMYrWPy25LMhGgHF71ASk9oQUByPZXIwGAHF8WA6oxEQUBxHc7yQCQKK33AiToIgoOd4NmJEQPEbUPnMaWAEFMcRvZT/EFD8hpQzEQYBxa8kTfkZAcX1j2rIAAEBAQEQEP4ebww5I6/Liw3UAAAAAElFTkSuQmCC';
