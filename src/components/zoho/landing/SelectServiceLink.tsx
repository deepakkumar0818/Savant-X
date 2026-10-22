'use client';

import { trackEvent } from '@/lib/analytics';
import type { ServiceId } from './data';

export const SELECT_SERVICE_EVENT = 'zoho:select-service';

/**
 * Opens the lead popup (or jumps to the enquiry form) with a service pre-selected.
 * Without JavaScript it is still a plain link to #enquiry. `event` is sent to analytics on click.
 */
export default function SelectServiceLink({
  service,
  event = 'consultation_cta_click',
  className,
  children,
}: {
  service: ServiceId;
  event?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#enquiry"
      className={className}
      onClick={(e) => {
        trackEvent(event, { service, page: 'zoho' });
        // The lead popup cancels the event when it opens, so the page does not also jump to #enquiry.
        const handled = !window.dispatchEvent(new CustomEvent<ServiceId>(SELECT_SERVICE_EVENT, { detail: service, cancelable: true }));
        if (handled) e.preventDefault();
      }}
    >
      {children}
    </a>
  );
}
