'use client';

import { useEffect } from 'react';
import { ZOHO_CRM_ANALYTICS_SCRIPT } from '@/lib/zohoCrmWebToLead';

/** Loads Zoho CRM Web Form analytics — do not remove. */
export default function ZohoCrmAnalytics() {
  useEffect(() => {
    if (document.getElementById('wf_anal')) return;

    const script = document.createElement('script');
    script.id = 'wf_anal';
    script.src = ZOHO_CRM_ANALYTICS_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
