'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { useAutoLeadPopup } from '@/lib/leadPopup';

// Loaded only when the popup opens, so it adds nothing to the first page load.
const ConsultationDialog = dynamic(() => import('./ConsultationDialog'), { ssr: false });

/** Pages that already show a form: the Zoho page has its own popup, the contact page its own form. */
const SKIP = [/^\/expertise\/zoho-integrations\/?$/, /^\/contact\/?$/];

/** Opens the consultation form by itself once per visit, on every public page except those above. */
export default function SiteLeadPopup() {
  const pathname = usePathname() ?? '/';
  const pathRef = useRef(pathname);
  pathRef.current = pathname;
  const [openOn, setOpenOn] = useState<string | null>(null);

  useAutoLeadPopup(
    () => {
      trackEvent('lead_popup_auto_open', { page: pathRef.current });
      setOpenOn(pathRef.current);
    },
    () => SKIP.some((re) => re.test(pathRef.current)),
  );

  return openOn ? <ConsultationDialog source={`Auto popup (${openOn})`} onClose={() => setOpenOn(null)} /> : null;
}
