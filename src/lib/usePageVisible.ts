'use client';

import { useEffect, useState } from 'react';

/** True when the browser tab is visible (pause timers/animations when hidden). */
export function usePageVisible() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const update = () => setVisible(document.visibilityState === 'visible');
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  return visible;
}
