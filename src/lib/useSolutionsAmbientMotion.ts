'use client';

import { useCallback, useEffect, useRef } from 'react';

/**
 * Pointer spotlight for the solutions section — writes CSS variables only (no React re-renders).
 */
export function useSolutionsAmbientMotion() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarse = window.matchMedia('(pointer: coarse)');
    const applyReduced = () => {
      reducedRef.current = mq.matches || coarse.matches;
      const el = sectionRef.current;
      if (!el) return;
      if (reducedRef.current) {
        el.style.setProperty('--sol-sx', '50%');
        el.style.setProperty('--sol-sy', '28%');
        el.style.setProperty('--sol-px', '0');
        el.style.setProperty('--sol-py', '0');
      }
    };
    applyReduced();
    mq.addEventListener('change', applyReduced);
    coarse.addEventListener('change', applyReduced);
    return () => {
      mq.removeEventListener('change', applyReduced);
      coarse.removeEventListener('change', applyReduced);
    };
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reducedRef.current) return;
    const el = sectionRef.current;
    if (!el) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      const nx = (x / 100 - 0.5) * 2;
      const ny = (y / 100 - 0.5) * 2;
      el.style.setProperty('--sol-sx', `${Math.min(100, Math.max(0, x))}%`);
      el.style.setProperty('--sol-sy', `${Math.min(100, Math.max(0, y))}%`);
      el.style.setProperty('--sol-px', String(nx));
      el.style.setProperty('--sol-py', String(ny));
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty('--sol-sx', '50%');
    el.style.setProperty('--sol-sy', '28%');
    el.style.setProperty('--sol-px', '0');
    el.style.setProperty('--sol-py', '0');
  }, []);

  return {
    sectionRef,
    handlers: { onMouseMove, onMouseLeave },
  };
}
