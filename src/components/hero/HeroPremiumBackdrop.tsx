'use client';

import { motion, useReducedMotion } from 'framer-motion';

const noiseDataUri =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")";

type Props = {
  gridGlowActive: boolean;
};

export default function HeroPremiumBackdrop({ gridGlowActive }: Props) {
  const reduced = useReducedMotion();

  const parallaxLight = {
    transform:
      'translate(calc((var(--hero-px, 0.5) - 0.5) * 30px), calc((var(--hero-py, 0.4) - 0.5) * 24px))',
  } as React.CSSProperties;

  const parallaxDeep = {
    transform:
      'translate(calc((var(--hero-px, 0.5) - 0.5) * 42px), calc((var(--hero-py, 0.4) - 0.5) * 34px))',
  } as React.CSSProperties;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_50%,#fafbff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_72%_at_50%_-15%,rgb(239_246_255_/_0.55),transparent_52%),radial-gradient(ellipse_90%_58%_at_100%_92%,rgb(238_242_255_/_0.4),transparent_48%)]" />

      <div
        className="absolute inset-0 opacity-[0.35] motion-reduce:opacity-[0.18] animate-hero-mesh-gradient"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 58% at 15% 28%, rgb(37 99 235 / 0.05), transparent 52%), radial-gradient(ellipse 72% 52% at 88% 74%, rgb(99 102 241 / 0.04), transparent 48%), radial-gradient(ellipse 58% 46% at 48% 52%, rgb(6 182 212 / 0.03), transparent 55%)',
        }}
      />

      <div
        className="motion-safe:transition-[transform] motion-safe:duration-[1000ms] motion-safe:ease-out"
        style={parallaxLight}
      >
        <div className="absolute -top-28 left-1/2 h-[28rem] w-[min(92vw,44rem)] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-blue-100/35 via-indigo-50/20 to-transparent blur-3xl animate-hero-radial-breathe" />
      </div>

      <div
        className="motion-safe:transition-[transform] motion-safe:duration-[1100ms] motion-safe:ease-out"
        style={parallaxDeep}
      >
        <div className="absolute -top-36 -right-32 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-blue-100/30 to-indigo-100/20 blur-3xl animate-hero-blob-a" />
        <div className="absolute -bottom-28 -left-32 h-[20rem] w-[20rem] rounded-full bg-indigo-100/25 blur-3xl animate-hero-blob-b" />
        <div className="absolute left-1/2 top-[18%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-50/20 to-indigo-50/15 blur-3xl animate-hero-blob-a [animation-delay:7s]" />
      </div>

      {reduced !== true && (
        <>
          <motion.div
            className="absolute left-[3%] top-[11%] h-[min(44vw,17rem)] w-[min(44vw,17rem)] rounded-full bg-blue-400/13 blur-3xl"
            animate={{
              y: [0, -16, 0],
              x: [0, 10, 0],
              scale: [1, 1.06, 1],
              opacity: [0.52, 0.68, 0.52],
            }}
            transition={{ duration: 27, repeat: Infinity, ease: 'easeInOut' }}
            style={parallaxLight}
          />
          <motion.div
            className="absolute bottom-[7%] left-[5%] h-[min(40vw,14rem)] w-[min(40vw,14rem)] rounded-full bg-indigo-400/11 blur-3xl"
            animate={{
              y: [0, 12, 0],
              x: [0, -11, 0],
              scale: [1, 1.05, 1],
              opacity: [0.45, 0.62, 0.45],
            }}
            transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={parallaxLight}
          />
          <motion.div
            className="absolute right-[5%] top-[20%] h-[min(50vw,20rem)] w-[min(50vw,20rem)] rounded-full bg-violet-400/10 blur-3xl"
            animate={{
              y: [0, 14, 0],
              scale: [1, 1.07, 1],
              opacity: [0.4, 0.56, 0.4],
            }}
            transition={{ duration: 29, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={parallaxDeep}
          />
          <motion.div
            className="absolute right-[10%] top-[5%] h-[min(38vw,13rem)] w-[min(38vw,13rem)] rounded-full bg-cyan-300/09 blur-3xl"
            animate={{
              y: [0, -11, 0],
              x: [0, 12, 0],
              opacity: [0.38, 0.52, 0.38],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            style={parallaxLight}
          />
        </>
      )}

      <div className="absolute inset-0 flex items-center justify-center motion-reduce:hidden">
        <div
          className="aspect-square w-[min(130vw,56rem)] animate-hero-conic-slow opacity-[0.05] blur-[92px]"
          style={{
            background:
              'conic-gradient(from 210deg at 50% 50%, rgba(37,99,235,0.45), rgba(79,70,229,0.38), rgba(124,58,237,0.42), rgba(6,182,212,0.32), rgba(139,92,246,0.35), rgba(37,99,235,0.45))',
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute left-[min(4%,1rem)] top-[9%] h-[min(50vw,26rem)] w-[min(96vw,38rem)] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(79_70_229_/_0.13),rgb(37_99_235_/_0.055)_46%,transparent_70%)] blur-3xl animate-hero-heading-spotlight lg:left-[2%] lg:top-[10%]"
        style={parallaxLight}
      />

      <div
        className="absolute inset-0 opacity-[0.22] motion-reduce:opacity-[0.1] animate-hero-grid-pan"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(148 163 184 / 0.28) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.28) 1px, transparent 1px)',
          backgroundSize: '3.75rem 3.75rem',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.52) 52%, rgba(0,0,0,0.2) 82%, rgba(0,0,0,0.06) 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08] motion-reduce:opacity-0"
        style={{
          background:
            'radial-gradient(ellipse 54% 46% at var(--hero-gx, 50%) var(--hero-gy, 38%), rgb(37 99 235 / 0.2), rgb(79 70 229 / 0.07) 44%, transparent 64%)',
        }}
      />

      <div
        className={`pointer-events-none absolute inset-0 motion-reduce:hidden motion-safe:animate-hero-grid-pan motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] ${
          gridGlowActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(37 99 235 / 0.48) 1px, transparent 1px), linear-gradient(to bottom, rgb(79 70 229 / 0.4) 1px, transparent 1px)',
          backgroundSize: '3.75rem 3.75rem',
          maskImage:
            'radial-gradient(ellipse 48% 42% at var(--hero-gx, 50%) var(--hero-gy, 38%), rgb(0 0 0) 0%, rgba(0,0,0,0.48) 38%, rgba(0,0,0,0.14) 56%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 48% 42% at var(--hero-gx, 50%) var(--hero-gy, 38%), rgb(0 0 0) 0%, rgba(0,0,0,0.48) 38%, rgba(0,0,0,0.14) 56%, transparent 72%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-y-[5%] left-[30%] right-[-8%] overflow-hidden motion-reduce:hidden lg:left-[38%]"
        style={parallaxDeep}
      >
        <div className="absolute inset-y-[12%] left-[14%] w-[48%] rounded-full bg-gradient-to-r from-transparent via-indigo-200/32 to-transparent blur-[76px] animate-hero-beam-premium" />
        <div className="absolute inset-y-[36%] left-[28%] w-[40%] rounded-full bg-gradient-to-r from-transparent via-cyan-100/22 to-transparent blur-[84px] animate-hero-beam-premium-delayed" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.26] motion-reduce:opacity-[0.09] animate-hero-particle-drift"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgb(79 70 229 / 0.12) 0.85px, transparent 1px)',
          backgroundSize: '56px 72px',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.82) 22%, rgba(0,0,0,0.82) 78%, rgba(0,0,0,0.1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.82) 22%, rgba(0,0,0,0.82) 78%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.026] mix-blend-overlay motion-reduce:opacity-[0.012] animate-hero-noise-shift"
        style={{
          backgroundImage: noiseDataUri,
          backgroundSize: '160px 160px',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_58%,rgb(255_255_255_/_0.65)_100%)]" />
    </div>
  );
}
