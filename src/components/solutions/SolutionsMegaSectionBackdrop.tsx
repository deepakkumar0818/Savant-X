'use client';

/**
 * Static, GPU-friendly backdrop for the solutions mega-section.
 * Infinite JS/framer loops and mouse-driven React state were removed —
 * they were a major source of scroll jank on the home page.
 */
export default function SolutionsMegaSectionBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#f8fafc_42%,#f5f3ff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-15%,rgb(219_234_254_/_0.85),transparent_58%),radial-gradient(ellipse_90%_60%_at_100%_85%,rgb(237_233_254_/_0.65),transparent_55%)]" />

      <div className="absolute left-1/2 top-[4.5rem] h-[min(52vw,28rem)] w-[min(115vw,56rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(79_70_229_/_0.12),rgb(6_182_212_/_0.05)_42%,transparent_68%)] blur-3xl" />

      <div className="absolute -left-[20%] -top-[6%] h-[min(82vw,50rem)] w-[min(82vw,50rem)] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgb(37_99_235_/_0.28),rgb(79_70_229_/_0.14)_45%,transparent_72%)] blur-3xl" />
      <div className="absolute -bottom-[14%] -right-[16%] h-[min(76vw,46rem)] w-[min(76vw,46rem)] rounded-full bg-[radial-gradient(circle_at_62%_62%,rgb(124_58_237_/_0.22),rgb(139_92_246_/_0.12)_48%,transparent_74%)] blur-3xl" />
      <div className="absolute bottom-[8%] left-[4%] h-[min(56vw,28rem)] w-[min(56vw,28rem)] rounded-full bg-[radial-gradient(circle_at_center,rgb(6_182_212_/_0.14),transparent_68%)] blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(79 70 229 / 0.035) 1px, transparent 1px), linear-gradient(90deg, rgb(79 70 229 / 0.035) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.25))',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.25))',
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
