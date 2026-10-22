'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

/** Below this, navigation feels instant and no indicator is shown. */
const BAR_DELAY_MS = 150;
/** Only slow navigations get the logo card. */
const CARD_DELAY_MS = 800;
/** Never leave an indicator on screen if a navigation fails or stalls. */
const SAFETY_TIMEOUT_MS = 12000;

const MESSAGES = ['Getting things ready…', 'Loading your next destination…', 'Preparing your experience…'];

type Phase = 'idle' | 'bar' | 'card' | 'done';

const normalize = (path: string) => (path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path);

/** Is this click an in-app page navigation that Next will handle client-side? */
function navigationTarget(event: MouseEvent): string | null {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  const anchor = (event.target as Element | null)?.closest?.('a');
  if (!anchor || !anchor.href) return null;
  if (anchor.target && anchor.target !== '_self') return null;
  if (anchor.hasAttribute('download') || anchor.getAttribute('rel')?.includes('external')) return null;
  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname.startsWith('/api/') || /\.[a-z0-9]{2,5}$/i.test(url.pathname)) return null;
  // Same page (including #anchor links): nothing to load.
  if (normalize(url.pathname) === normalize(window.location.pathname)) return null;
  return normalize(url.pathname);
}

/**
 * Global route-change feedback for the App Router: a thin gradient bar for navigations
 * that take a moment, and a small logo card for slow ones. It never blocks clicks and
 * clears itself when the new route renders, on back/forward, or after a safety timeout.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('idle');
  const [message, setMessage] = useState(MESSAGES[0]);
  const timers = useRef<number[]>([]);
  const navId = useRef(0);
  const renderedPath = useRef(pathname);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => {
    const start = () => {
      const id = ++navId.current;
      clearTimers();
      setMessage(MESSAGES[id % MESSAGES.length]);
      timers.current.push(
        window.setTimeout(() => navId.current === id && setPhase('bar'), BAR_DELAY_MS),
        window.setTimeout(() => navId.current === id && setPhase('card'), CARD_DELAY_MS),
        window.setTimeout(() => navId.current === id && setPhase('idle'), SAFETY_TIMEOUT_MS),
      );
    };
    const onClick = (event: MouseEvent) => {
      if (navigationTarget(event)) start();
    };
    // Capture phase: next/link calls preventDefault() during bubbling to take over the navigation.
    document.addEventListener('click', onClick, true);
    // Back/forward. Hash-only changes also fire popstate, so require a different page.
    const onPopState = () => {
      if (normalize(window.location.pathname) !== normalize(renderedPath.current ?? '')) start();
    };
    window.addEventListener('popstate', onPopState);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('popstate', onPopState);
      clearTimers();
    };
  }, []);

  // The new route has rendered: finish the bar, then fade everything out.
  useEffect(() => {
    renderedPath.current = pathname;
    navId.current += 1;
    clearTimers();
    setPhase((current) => (current === 'idle' ? 'idle' : 'done'));
    timers.current.push(window.setTimeout(() => setPhase('idle'), 400));
  }, [pathname]);

  const active = phase === 'bar' || phase === 'card';

  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] transition-opacity duration-300 ${phase === 'idle' ? 'opacity-0' : 'opacity-100'}`}
      >
        <div
          data-nav-progress="bar"
          className={`h-full origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] ${
            phase === 'done' ? 'nav-progress-done' : active ? 'nav-progress-run' : 'scale-x-0'
          }`}
        />
      </div>

      <div
        data-nav-progress="card"
        className={`pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-white/70 backdrop-blur-[2px] transition-opacity duration-300 ${
          phase === 'card' ? 'opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={phase !== 'card'}
      >
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-8 py-7 shadow-[0_24px_60px_-30px_rgba(79,70,229,0.5)] ring-1 ring-slate-200/80">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <span className="nav-spinner absolute inset-0 rounded-full" />
            {/* eslint-disable-next-line @next/next/no-img-element -- tiny logo, already cached from the navbar */}
            <img src="/images/logos/Logo.png" alt="" width={34} height={12} className="relative h-auto w-[34px]" />
          </div>
          <p className="text-sm font-medium text-slate-600">{message}</p>
        </div>
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {active ? 'Loading page' : ''}
      </p>
    </>
  );
}
