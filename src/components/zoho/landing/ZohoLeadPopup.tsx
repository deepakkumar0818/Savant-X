'use client';

import { useEffect, useRef, useState } from 'react';
import { CalendarCheck, X } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useDialog } from '@/lib/useDialog';
import ZohoEnquiryForm, { LEAD_SENT_EVENT } from './ZohoEnquiryForm';
import { SELECT_SERVICE_EVENT } from './SelectServiceLink';
import type { ServiceId } from './data';

/** Remembers that this visitor has already seen the automatic popup (or sent a lead). */
const SEEN_KEY = 'savantx:zoho-lead-popup';
const AUTO_OPEN_DELAY_MS = 20_000;
const AUTO_OPEN_SCROLL = 0.5;

function alreadySeen() {
  try {
    return localStorage.getItem(SEEN_KEY) !== null;
  } catch {
    return false;
  }
}

function markSeen(reason: string) {
  try {
    localStorage.setItem(SEEN_KEY, reason);
  } catch {
    // Private mode or blocked storage: the popup may open again on a later visit.
  }
}

/** True while the visitor is busy: typing in a field, or another dialog is open. */
function visitorIsBusy() {
  const active = document.activeElement;
  if (active && active.matches('input, textarea, select')) return true;
  return document.body.style.overflow === 'hidden' || document.querySelector('[role="dialog"]') !== null;
}

/**
 * Lead form in a popup for the Zoho landing page:
 * - every "Book consultation" / package button opens it with that service pre-selected;
 * - a floating button keeps it one tap away;
 * - it opens by itself once per visitor, after 20 seconds or halfway down the page,
 *   unless they are already filling in the form on the page.
 */
export default function ZohoLeadPopup() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<ServiceId>('consultation');
  const [auto, setAuto] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [inlineFormVisible, setInlineFormVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(false);
  openRef.current = open;

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

  // Someone who has sent a lead (from either form) never gets the automatic popup.
  useEffect(() => {
    const onLeadSent = () => markSeen('lead');
    window.addEventListener(LEAD_SENT_EVENT, onLeadSent);
    return () => window.removeEventListener(LEAD_SENT_EVENT, onLeadSent);
  }, []);

  // Open once by itself.
  useEffect(() => {
    if (alreadySeen()) return;
    const arrivedAt = Date.now();
    let done = false;
    const tryAutoOpen = () => {
      if (done || openRef.current || alreadySeen()) return;
      const section = document.getElementById('enquiry');
      const rect = section?.getBoundingClientRect();
      const inlineInView = rect ? rect.top < window.innerHeight && rect.bottom > 0 : false;
      if (inlineInView || visitorIsBusy()) return; // try again on the next trigger
      done = true;
      markSeen('shown');
      trackEvent('lead_popup_auto_open', { page: 'zoho' });
      show({ auto: true });
      cleanup();
    };
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= AUTO_OPEN_SCROLL) tryAutoOpen();
    };
    const timer = window.setTimeout(tryAutoOpen, AUTO_OPEN_DELAY_MS);
    // If the visitor was busy when the timer fired, retry every few seconds.
    const retry = window.setInterval(() => {
      if (Date.now() - arrivedAt >= AUTO_OPEN_DELAY_MS) tryAutoOpen();
    }, 5000);
    window.addEventListener('scroll', onScroll, { passive: true });
    const cleanup = () => {
      window.clearTimeout(timer);
      window.clearInterval(retry);
      window.removeEventListener('scroll', onScroll);
    };
    return cleanup;
  }, []);

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
        <CalendarCheck className="h-4 w-4" aria-hidden />
        Get a free consultation
      </button>

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
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Free consultation</p>
                <h2 id="zoho-lead-popup-title" className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  Tell us about your Zoho project
                </h2>
                <p className="mt-1 text-sm text-slate-500">Share a few details and our Zoho team will get back to you. No obligation.</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
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
