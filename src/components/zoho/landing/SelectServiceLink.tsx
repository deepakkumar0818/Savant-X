'use client';

import { trackEvent } from '@/lib/analytics';
import type { ServiceId } from './data';

export const SELECT_SERVICE_EVENT = 'zoho:select-service';

/**
 * Jumps to the enquiry form and pre-selects a service. Without JavaScript it is
 * still a plain link to #enquiry. `event` is sent to analytics on click.
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
      onClick={() => {
        trackEvent(event, { service, page: 'zoho' });
        window.dispatchEvent(new CustomEvent<ServiceId>(SELECT_SERVICE_EVENT, { detail: service }));
      }}
    >
      {children}
    </a>
  );
}
