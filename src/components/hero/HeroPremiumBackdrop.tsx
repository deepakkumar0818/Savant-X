'use client';

import { useReducedMotion } from 'framer-motion';

type Props = {
  gridGlowActive: boolean;
};

/** Lightweight hero background — static gradients + optional pointer glow (no infinite JS animations). */
export default function HeroPremiumBackdrop({ gridGlowActive }: Props) {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_50%,#fafbff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_72%_at_50%_-15%,rgb(239_246_255_/_0.55),transparent_52%),radial-gradient(ellipse_90%_58%_at_100%_92%,rgb(238_242_255_/_0.4),transparent_48%)]" />

      <div
        className="absolute -top-28 left-1/2 h-[28rem] w-[min(92vw,44rem)] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-blue-100/35 via-indigo-50/20 to-transparent blur-3xl"
        style={{
          transform:
            'translate(-50%, 0) translate(calc((var(--hero-px, 0.5) - 0.5) * 18px), calc((var(--hero-py, 0.4) - 0.5) * 14px))',
        }}
      />
      <div
        className="absolute -top-36 -right-32 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-blue-100/30 to-indigo-100/20 blur-3xl"
        style={{
          transform:
            'translate(calc((var(--hero-px, 0.5) - 0.5) * 24px), calc((var(--hero-py, 0.4) - 0.5) * 20px))',
        }}
      />
      <div className="absolute -bottom-28 -left-32 h-[20rem] w-[20rem] rounded-full bg-indigo-100/25 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.14] motion-reduce:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(148 163 184 / 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.22) 1px, transparent 1px)',
          backgroundSize: '3.75rem 3.75rem',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.08) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.07] motion-reduce:opacity-0"
        style={{
          background:
            'radial-gradient(ellipse 54% 46% at var(--hero-gx, 50%) var(--hero-gy, 38%), rgb(37 99 235 / 0.18), transparent 64%)',
        }}
      />

      {gridGlowActive && !reduced && (
        <div
          className="pointer-events-none absolute inset-0 opacity-80 motion-reduce:hidden"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgb(37 99 235 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgb(79 70 229 / 0.28) 1px, transparent 1px)',
            backgroundSize: '3.75rem 3.75rem',
            maskImage:
              'radial-gradient(ellipse 48% 42% at var(--hero-gx, 50%) var(--hero-gy, 38%), rgb(0 0 0) 0%, rgba(0,0,0,0.35) 45%, transparent 72%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 48% 42% at var(--hero-gx, 50%) var(--hero-gy, 38%), rgb(0 0 0) 0%, rgba(0,0,0,0.35) 45%, transparent 72%)',
          }}
        />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_58%,rgb(255_255_255_/_0.65)_100%)]" />
    </div>
  );
}
