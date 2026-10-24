'use client';

import tx from '@/content/text/components/zoho/landing/ZohoLeadPopup.json';
import { useEffect, useRef, useState } from 'react';
import { CalendarCheck, X } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useDialog } from '@/lib/useDialog';
import { useAutoLeadPopup } from '@/lib/leadPopup';
import ZohoEnquiryForm from './ZohoEnquiryForm';
import { SELECT_SERVICE_EVENT } from './SelectServiceLink';
import type { ServiceId } from './data';

/**
 * Lead form in a popup for the Zoho landing page:
 * - every "Book consultation" / package button opens it with that service pre-selected;
 * - a floating button keeps it one tap away;
 * - it opens by itself once per visit (see useAutoLeadPopup), unless the form on the page is already in view.
 */
export default function ZohoLeadPopup() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<ServiceId>('consultation');
  const [auto, setAuto] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [inlineFormVisible, setInlineFormVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const show = (next: { service?: ServiceId; auto: boolean }) => {
    if (next.service) setService(next.service);
    setAuto(next.auto);
    setMounted(true);
    setOpen(true);
  };

  useDialog(open, () => setOpen(false), panelRef, auto);

  // Page buttons open the popup instead of scrolling to the form.
  useEffect(() => {
    const onSelect = (event: Event) => {
      event.preventDefault();
      show({ service: (event as CustomEvent<ServiceId>).detail, auto: false });
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, []);

  // Hide the floating button while the form on the page is already in view.
  useEffect(() => {
    const section = document.getElementById('enquiry');
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setInlineFormVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useAutoLeadPopup(
    () => {
      trackEvent('lead_popup_auto_open', { page: 'zoho' });
      show({ auto: true });
    },
    () => {
      const rect = document.getElementById('enquiry')?.getBoundingClientRect();
      return rect ? rect.top < window.innerHeight && rect.bottom > 0 : false;
    },
  );

  return (
    <>
      <button
        type="button"
        onClick={() => {
          trackEvent('consultation_cta_click', { service: 'consultation', page: 'zoho', placement: 'floating' });
          show({ service: 'consultation', auto: false });
        }}
        aria-hidden={open || inlineFormVisible}
        tabIndex={open || inlineFormVisible ? -1 : 0}
        className={`fixed bottom-6 left-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/30 transition duration-300 hover:brightness-110 sm:bottom-8 sm:left-8 ${
          open || inlineFormVisible ? 'pointer-events-none translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <CalendarCheck className="h-4 w-4" aria-hidden />{tx.get_a_free_consultation}</button>

      {mounted && (
        <div
          className={`fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6 ${open ? '' : 'pointer-events-none invisible'}`}
          aria-hidden={!open}
        >
          <div
            className={`absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setOpen(false)}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="zoho-lead-popup-title"
            tabIndex={-1}
            className={`relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl outline-none transition duration-200 sm:rounded-3xl ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-100 bg-white/95 px-6 py-5 backdrop-blur sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">{tx.free_consultation}</p>
                <h2 id="zoho-lead-popup-title" className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{tx.tell_us_about_your_zoho}</h2>
                <p className="mt-1 text-sm text-slate-500">{tx.share_a_few_details_and}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={tx.close}
                className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <ZohoEnquiryForm service={service} listenForServiceLinks={false} />
          </div>
        </div>
      )}
    </>
  );
}
