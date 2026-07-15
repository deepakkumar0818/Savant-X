'use client';

type Props = {
  gridGlowActive: boolean;
};

/** Lightweight static hero backdrop — heavy animated blurs caused scroll jank. */
export default function HeroPremiumBackdrop({ gridGlowActive }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_50%,#fafbff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_72%_at_50%_-15%,rgb(239_246_255_/_0.55),transparent_52%),radial-gradient(ellipse_90%_58%_at_100%_92%,rgb(238_242_255_/_0.4),transparent_48%)]" />

      <div className="absolute -top-28 left-1/2 h-[28rem] w-[min(92vw,44rem)] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-blue-100/35 via-indigo-50/20 to-transparent blur-3xl" />
      <div className="absolute -top-36 -right-32 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-blue-100/30 to-indigo-100/20 blur-3xl" />
      <div className="absolute -bottom-28 -left-32 h-[20rem] w-[20rem] rounded-full bg-indigo-100/25 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(148 163 184 / 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.22) 1px, transparent 1px)',
          backgroundSize: '3.75rem 3.75rem',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0.12) 100%)',
        }}
      />

      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          gridGlowActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(37 99 235 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgb(79 70 229 / 0.28) 1px, transparent 1px)',
          backgroundSize: '3.75rem 3.75rem',
          maskImage:
            'radial-gradient(ellipse 48% 42% at var(--hero-gx, 50%) var(--hero-gy, 38%), rgb(0 0 0) 0%, rgba(0,0,0,0.4) 38%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 48% 42% at var(--hero-gx, 50%) var(--hero-gy, 38%), rgb(0 0 0) 0%, rgba(0,0,0,0.4) 38%, transparent 72%)',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_58%,rgb(255_255_255_/_0.65)_100%)]" />
    </div>
  );
}
