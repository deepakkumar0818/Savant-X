'use client';

/** Lightweight solutions section background — CSS variables from parent section, no React-driven repaints. */
export default function SolutionsMegaSectionBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#f8fafc_42%,#f5f3ff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-15%,rgb(219_234_254_/_0.85),transparent_58%),radial-gradient(ellipse_90%_60%_at_100%_85%,rgb(237_233_254_/_0.65),transparent_55%)]" />

      <div
        className="absolute inset-0 motion-reduce:hidden"
        style={{
          background:
            'radial-gradient(min(72vw, 680px) circle at var(--sol-sx, 50%) var(--sol-sy, 28%), rgb(37 99 235 / 0.08), rgb(79 70 229 / 0.04) 40%, transparent 62%)',
        }}
      />

      <div
        className="absolute -left-[12%] -top-[4%] h-[min(70vw,42rem)] w-[min(70vw,42rem)] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgb(37_99_235_/_0.28),transparent_72%)] blur-3xl"
        style={{
          transform:
            'translate(calc(var(--sol-px, 0) * 18px), calc(var(--sol-py, 0) * 14px))',
        }}
      />
      <div
        className="absolute -bottom-[10%] -right-[12%] h-[min(65vw,38rem)] w-[min(65vw,38rem)] rounded-full bg-[radial-gradient(circle_at_62%_62%,rgb(124_58_237_/_0.22),transparent_74%)] blur-3xl"
        style={{
          transform:
            'translate(calc(var(--sol-px, 0) * -14px), calc(var(--sol-py, 0) * -12px))',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.35] motion-reduce:opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(79 70 229 / 0.03) 1px, transparent 1px), linear-gradient(90deg, rgb(79 70 229 / 0.03) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.25))',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.25))',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_52%,rgb(248_250_252_/_0.55)_100%)]" />
    </div>
  );
}

/** @deprecated Kept so existing imports keep typechecking; ambient motion is disabled for scroll perf. */
export type SolutionsAmbientSpotlight = { x: number; y: number };
export type SolutionsAmbientParallax = { x: number; y: number };

export function useSolutionsAmbientMotion() {
  return {
    spotlight: { x: 50, y: 28 } satisfies SolutionsAmbientSpotlight,
    parallax: { x: 0, y: 0 } satisfies SolutionsAmbientParallax,
    handlers: {} as Record<string, never>,
  };
}
