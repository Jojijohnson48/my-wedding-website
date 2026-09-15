/* ─────────────────────────────────────────────────────────────
   Settings for the wedding site.

   This file is separate on purpose: when index.html is replaced
   with a newer version, your settings here are untouched.

   endpoint : your Google Apps Script Web app URL, ending in /exec.
              Leave empty to fall back to WhatsApp.
   whatsapp : digits only, with country code. Used if the endpoint
              is empty, or if it cannot be reached.
   ───────────────────────────────────────────────────────────── */
window.RSVP_CONFIG = {
  endpoint: '',
  whatsapp: '916397305023'
};
