'use client';

import { useEffect, useRef } from 'react';

/** Fired by any lead form once a lead has been sent. */
export const LEAD_SENT_EVENT = 'savantx:lead-sent';

/** The automatic popup opens once per visit (browser session), on whichever page comes first… */
const SHOWN_KEY = 'savantx:lead-popup:shown';
/** …and not at all for a week after the visitor has sent a lead. */
const LEAD_SENT_KEY = 'savantx:lead-popup:lead-sent';
const LEAD_SENT_QUIET_MS = 7 * 24 * 60 * 60 * 1000;
const AUTO_OPEN_DELAY_MS = 8_000;
const AUTO_OPEN_SCROLL = 0.35;

function alreadySeen() {
  try {
    if (sessionStorage.getItem(SHOWN_KEY)) return true;
    const sentAt = Number(localStorage.getItem(LEAD_SENT_KEY));
    return Number.isFinite(sentAt) && sentAt > 0 && Date.now() - sentAt < LEAD_SENT_QUIET_MS;
  } catch {
    return false;
  }
}

function markSeen(reason: 'shown' | 'lead') {
  try {
    if (reason === 'lead') localStorage.setItem(LEAD_SENT_KEY, String(Date.now()));
    else sessionStorage.setItem(SHOWN_KEY, '1');
  } catch {
    // Private mode or blocked storage: the popup may open again later.
  }
}

/** True while the visitor is busy: typing in a field, or another dialog is open. */
function visitorIsBusy() {
  const active = document.activeElement;
  if (active && active.matches('input, textarea, select')) return true;
  return document.body.style.overflow === 'hidden' || document.querySelector('[role="dialog"]') !== null;
}

/**
 * Calls `open` once per visit, 8 seconds after arrival or a third of the way down the page,
 * whichever comes first. Waits while the visitor is busy or `blocked()` is true, and stays quiet
 * for a week after a lead is sent.
 */
export function useAutoLeadPopup(open: () => void, blocked: () => boolean = () => false) {
  const openRef = useRef(open);
  const blockedRef = useRef(blocked);
  openRef.current = open;
  blockedRef.current = blocked;

  useEffect(() => {
    const onLeadSent = () => markSeen('lead');
    window.addEventListener(LEAD_SENT_EVENT, onLeadSent);
    return () => window.removeEventListener(LEAD_SENT_EVENT, onLeadSent);
  }, []);

  useEffect(() => {
    if (alreadySeen()) return;
    const arrivedAt = Date.now();
    let done = false;
    const tryOpen = () => {
      if (done || alreadySeen()) return;
      if (visitorIsBusy() || blockedRef.current()) return; // try again on the next trigger
      done = true;
      markSeen('shown');
      openRef.current();
      cleanup();
    };
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= AUTO_OPEN_SCROLL) tryOpen();
    };
    const timer = window.setTimeout(tryOpen, AUTO_OPEN_DELAY_MS);
    // If the visitor was busy when the timer fired, retry every few seconds.
    const retry = window.setInterval(() => {
      if (Date.now() - arrivedAt >= AUTO_OPEN_DELAY_MS) tryOpen();
    }, 4000);
    window.addEventListener('scroll', onScroll, { passive: true });
    const cleanup = () => {
      window.clearTimeout(timer);
      window.clearInterval(retry);
      window.removeEventListener('scroll', onScroll);
    };
    return cleanup;
  }, []);
}
