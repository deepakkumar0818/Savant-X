'use client';

import { useEffect } from 'react';

/**
 * Marks <html> while the user is scrolling so decorative CSS animations
 * can pause and free the main thread for smoother scroll.
 */
export default function ScrollPerfGuard() {
  useEffect(() => {
    const root = document.documentElement;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          root.dataset.scrolling = 'true';
          ticking = false;
        });
      }

      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        delete root.dataset.scrolling;
      }, 140);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeoutId) clearTimeout(timeoutId);
      delete root.dataset.scrolling;
    };
  }, []);

  return null;
}
