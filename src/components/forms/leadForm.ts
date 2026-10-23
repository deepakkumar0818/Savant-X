/** Shared by the website's lead forms that post to /api/leads. */

/** Same ranges as the Zoho page, so CRM Priority is set the same way (Low / Medium / High). */
export const BUDGETS = ['Under ₹10,000', '₹10,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', 'Above ₹1,00,000', 'Not sure yet'] as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;
export const MIN_MESSAGE = 20;

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];

/** Campaign parameters on the current URL, so the lead keeps its source. */
export function campaignParams() {
  const params = new URLSearchParams(window.location.search);
  return UTM_KEYS.filter((k) => params.get(k)).map((k) => `${k}: ${params.get(k)}`);
}
