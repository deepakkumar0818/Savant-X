/**
 * Sends a GA4 event through the gtag snippet loaded in the root layout.
 * A no-op when gtag has not loaded (ad blockers, local development).
 */
type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void;

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === 'function') gtag('event', name, params);
}
