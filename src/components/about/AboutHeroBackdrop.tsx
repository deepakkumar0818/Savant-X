'use client';

/** Subtle white grid + soft glow for the About hero. */
export default function AboutHeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_55%,#f8fafc_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_0%,rgb(239_246_255_/_0.7),transparent_55%),radial-gradient(ellipse_70%_50%_at_0%_100%,rgb(238_242_255_/_0.45),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(148 163 184 / 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.22) 1px, transparent 1px)',
          backgroundSize: '3.25rem 3.25rem',
          maskImage:
            'radial-gradient(ellipse 95% 80% at 50% 30%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 80% at 50% 30%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)',
        }}
      />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute -left-20 bottom-8 h-64 w-64 rounded-full bg-indigo-100/25 blur-3xl" />
    </div>
  );
}
