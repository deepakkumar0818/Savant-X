'use client';

import { useEffect } from 'react';
import { ZOHO_CRM_ANALYTICS_SCRIPT } from '@/lib/zohoCrmWebToLead';

function injectZohoAnalytics() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('wf_anal')) return;

  const script = document.createElement('script');
  script.id = 'wf_anal';
  script.src = ZOHO_CRM_ANALYTICS_SCRIPT;
  script.async = true;
  document.body.appendChild(script);
}

/** Loads Zoho CRM Web Form analytics after idle / first interaction — do not remove. */
export default function ZohoCrmAnalytics() {
  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const load = () => {
      if (cancelled) return;
      injectZohoAnalytics();
    };

    const onInteract = () => load();
    window.addEventListener('pointerdown', onInteract, { once: true, passive: true });
    window.addEventListener('keydown', onInteract, { once: true });

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(() => load(), { timeout: 5000 });
    } else {
      timeoutId = setTimeout(load, 4000);
    }

    return () => {
      cancelled = true;
      window.removeEventListener('pointerdown', onInteract);
      window.removeEventListener('keydown', onInteract);
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
