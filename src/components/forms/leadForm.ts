/** Shared by the website's lead forms that post to /api/leads. */
import forms from '@/content/forms.json';

/**
 * Budget ranges (edited in the admin: Forms). Priority in Zoho CRM is worked out from these,
 * so keep the ₹ amounts in them (see priorityFromBudget in src/lib/zohoLeads.ts).
 */
export const BUDGETS: string[] = forms.budgets;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;
export const MIN_MESSAGE = 20;

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];

/** Campaign parameters on the current URL, so the lead keeps its source. */
export function campaignParams() {
  const params = new URLSearchParams(window.location.search);
  return UTM_KEYS.filter((k) => params.get(k)).map((k) => `${k}: ${params.get(k)}`);
}
