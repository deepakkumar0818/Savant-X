'use client';

import { MotionConfig } from 'framer-motion';

/**
 * Respects the visitor's reduced-motion setting for every Framer Motion component:
 * movement is skipped and content only fades in. Components should therefore use the
 * same `initial` state on the server and the client instead of branching on
 * useReducedMotion(), which causes hydration mismatches and can leave content hidden.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
