/** Every form on the site ends on /thank-you/?form=<id>, so enquiries can be tracked as a page view (GA4, Google Ads). */
export const THANK_YOU_FORMS = ['contact', 'consultation', 'product-demo', 'zoho-enquiry', 'zoho-strategy', 'support', 'newsletter'] as const;
export type ThankYouForm = (typeof THANK_YOU_FORMS)[number];

type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void;

/**
 * Sends a `form_submit_success` event, then opens the thank-you page with a full page load so every tag
 * sees the URL. Waits for gtag to confirm the event (at most one second) so it is not lost on the way out.
 */
export function goToThankYou(form: ThankYouForm) {
  const url = `/thank-you/?form=${form}`;
  let done = false;
  const go = () => {
    if (done) return;
    done = true;
    window.location.assign(url);
  };
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== 'function') return go();
  gtag('event', 'form_submit_success', { form, event_callback: go });
  window.setTimeout(go, 1000);
}
