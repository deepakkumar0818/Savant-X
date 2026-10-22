'use client';

import { trackEvent } from '@/lib/analytics';

/** Plain anchor (in-page, mailto: or tel:) that reports a click to analytics. */
export default function TrackedLink({
  href,
  event,
  className,
  children,
}: {
  href: string;
  event: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => trackEvent(event, { page: 'zoho' })}>
      {children}
    </a>
  );
}
