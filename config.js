/* ─────────────────────────────────────────────────────────────
   Settings for the wedding site.

   This file is separate on purpose: when index.html is replaced
   with a newer version, your settings here are untouched.

   endpoint : Google Apps Script Web app URL, ending in /exec.
              Empty = replies go by WhatsApp instead.
   whatsapp : digits only, with country code. Used when the
              endpoint is empty, or cannot be reached.
   ───────────────────────────────────────────────────────────── */
window.RSVP_CONFIG = {
  endpoint: 'https://script.google.com/macros/s/AKfycbzyyO2_5g_2t-f20fb2wDFO7-xI7wE84xuMnDXcyI_KPXaE-9XX1X6bHd-mfARpHmn6/exec',
  whatsapp: '916397305023'
};
