'use client';

import { useEffect, useState, type RefObject } from 'react';

/** Whether `ref` element is intersecting the viewport (for pausing off-screen work). */
export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  options?: { rootMargin?: string; threshold?: number },
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        rootMargin: options?.rootMargin ?? '120px',
        threshold: options?.threshold ?? 0.05,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options?.rootMargin, options?.threshold]);

  return inView;
}
