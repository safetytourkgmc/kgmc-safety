/* Settings for the course site. Edit this file only; no other file needs changing to go live. */
window.KGMC_CONFIG = {
  /* Paste the Google Apps Script web-app URL between the quotes.
     While this is empty the site runs in DEMO MODE: everything is stored only in the
     visitor's own browser, no emails are sent and nothing reaches the instructor. */
  BACKEND_URL: "https://script.google.com/macros/s/AKfycbxqbzyXHl6cR8xc02UvSM4dKkAWGKYEOgmS0YpclIOtRZ0_JF5zNBOduZtxNSk5FyCX/exec",

  PROGRAM: ["KGMC Campus Safety Learning Program", "کے جی ایم سی کیمپس سیفٹی لرننگ پروگرام"],
  COLLEGE: ["Khyber Girls Medical College, Peshawar", "خیبر گرلز میڈیکل کالج، پشاور"],

  /* The college name the registration box starts with. Anyone from another
     college can type over it, and whatever they enter is printed on their certificate. */
  DEFAULT_COLLEGE: ["Khyber Girls Medical College", "خیبر گرلز میڈیکل کالج"],

  /* Quiz pass mark in percent. Must match PASS_PERCENT in the Apps Script. */
  PASS_PERCENT: 70,

  /* Departments offered to faculty and staff at registration: [English, Urdu].
     DRAFT LIST - Dr Amin to correct. */
  DEPARTMENTS: [
    ["Anatomy", "اناٹومی"], ["Physiology", "فزیالوجی"], ["Biochemistry", "بائیو کیمسٹری"],
    ["Pathology", "پیتھالوجی"], ["Pharmacology", "فارماکولوجی"], ["Forensic Medicine", "فرانزک میڈیسن"],
    ["Community Medicine", "کمیونٹی میڈیسن"], ["Medical Education", "میڈیکل ایجوکیشن"],
    ["Clinical departments", "کلینیکل شعبہ جات"], ["Laboratory", "لیبارٹری"], ["Library", "لائبریری"],
    ["Administration", "انتظامیہ"], ["IT", "آئی ٹی"], ["Security", "سیکیورٹی"],
    ["Cleaning / housekeeping", "صفائی کا عملہ"], ["Maintenance / store", "مینٹیننس / اسٹور"],
    ["Cafeteria", "کیفے ٹیریا"], ["Hostel", "ہاسٹل"], ["Other", "دیگر"]
  ]
};
