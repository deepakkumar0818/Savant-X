'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type SolutionsAmbientSpotlight = { x: number; y: number };
export type SolutionsAmbientParallax = { x: number; y: number };

/**
 * Lightweight pointer-driven spotlight + parallax offsets for the solutions mega-section.
 * Uses rAF batching; disables motion when prefers-reduced-motion is set.
 */
export function useSolutionsAmbientMotion() {
  const [spotlight, setSpotlight] = useState<SolutionsAmbientSpotlight>({ x: 50, y: 28 });
  const [parallax, setParallax] = useState<SolutionsAmbientParallax>({ x: 0, y: 0 });
  const reducedRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedRef.current = mq.matches;
    const onChange = () => {
      reducedRef.current = mq.matches;
      if (mq.matches) {
        setSpotlight({ x: 50, y: 28 });
        setParallax({ x: 0, y: 0 });
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reducedRef.current) return;
    const el = e.currentTarget;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      setSpotlight({
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
      });
      const nx = (x / 100 - 0.5) * 2;
      const ny = (y / 100 - 0.5) * 2;
      setParallax({ x: nx, y: ny });
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setSpotlight({ x: 50, y: 28 });
    setParallax({ x: 0, y: 0 });
  }, []);

  return {
    spotlight,
    parallax,
    handlers: { onMouseMove, onMouseLeave },
  };
}

const noiseDataUri =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")";

type Props = {
  spotlight: SolutionsAmbientSpotlight;
  parallax: SolutionsAmbientParallax;
};

export default function SolutionsMegaSectionBackdrop({ spotlight, parallax }: Props) {
  const px = parallax.x;
  const py = parallax.y;
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Base wash — white, soft blue + lavender (Framer: ultra-slow breathe so motion reads on static screenshots vs scroll) */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#f8fafc_42%,#f5f3ff_100%)]"
        initial={false}
        animate={
          reducedMotion === true
            ? false
            : {
                opacity: [0.92, 1, 0.92],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-15%,rgb(219_234_254_/_0.85),transparent_58%),radial-gradient(ellipse_90%_60%_at_100%_85%,rgb(237_233_254_/_0.65),transparent_55%)]"
        initial={false}
        animate={
          reducedMotion === true
            ? false
            : {
                opacity: [0.82, 1, 0.82],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      {/* Mouse-follow spotlight (transform-free; gradient position only) */}
      <div
        className="absolute inset-0 opacity-100 motion-reduce:hidden"
        style={{
          background: `radial-gradient(min(72vw, 680px) circle at ${spotlight.x}% ${spotlight.y}%, rgb(37 99 235 / 0.085), rgb(79 70 229 / 0.045) 38%, rgb(124 58 237 / 0.03) 52%, transparent 62%)`,
        }}
      />

      {/* Heading halo — slow radial pulse */}
      <div className="absolute left-1/2 top-[4.5rem] h-[min(52vw,28rem)] w-[min(115vw,56rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(79_70_229_/_0.14),rgb(6_182_212_/_0.06)_42%,transparent_68%)] blur-3xl animate-solutions-heading-glow" />

      {/* Floating orbs — outer parallax from pointer; inner blob motion */}
      <div
        className="absolute motion-safe:transition-transform motion-safe:duration-[850ms] motion-safe:ease-out motion-reduce:translate-x-0 motion-reduce:translate-y-0"
        style={{ transform: `translate(${px * 22}px, ${py * 16}px)` }}
      >
        <div className="absolute -left-[20%] -top-[6%] h-[min(82vw,50rem)] w-[min(82vw,50rem)] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgb(37_99_235_/_0.42),rgb(79_70_229_/_0.22)_45%,transparent_72%)] blur-3xl animate-solutions-aurora-a" />
      </div>
      <div
        className="absolute motion-safe:transition-transform motion-safe:duration-[950ms] motion-safe:ease-out motion-reduce:translate-x-0 motion-reduce:translate-y-0"
        style={{ transform: `translate(${px * -18}px, ${py * -12}px)` }}
      >
        <div className="absolute -bottom-[14%] -right-[16%] h-[min(76vw,46rem)] w-[min(76vw,46rem)] rounded-full bg-[radial-gradient(circle_at_62%_62%,rgb(124_58_237_/_0.38),rgb(139_92_246_/_0.2)_48%,transparent_74%)] blur-3xl animate-solutions-aurora-b" />
      </div>
      <div
        className="absolute motion-safe:transition-transform motion-safe:duration-[1000ms] motion-safe:ease-out motion-reduce:translate-x-0 motion-reduce:translate-y-0"
        style={{ transform: `translate(${px * 14}px, ${py * -20}px)` }}
      >
        <div className="absolute bottom-[8%] left-[4%] h-[min(56vw,28rem)] w-[min(56vw,28rem)] rounded-full bg-[radial-gradient(circle_at_center,rgb(6_182_212_/_0.22),transparent_68%)] blur-3xl animate-solutions-aurora-c" />
      </div>

      {/* Gradient mesh drift */}
      <div
        className="absolute inset-0 opacity-[0.92] motion-reduce:opacity-[0.55] animate-solutions-mesh-drift"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 88% 58% at 14% 22%, rgb(37 99 235 / 0.14), transparent 54%), radial-gradient(ellipse 72% 52% at 92% 78%, rgb(124 58 237 / 0.11), transparent 48%), radial-gradient(ellipse 58% 44% at 48% 52%, rgb(6 182 212 / 0.09), transparent 56%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Soft conic wash — blue / violet / cyan */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden motion-reduce:hidden">
        <div
          className="aspect-square w-[min(118vw,56rem)] opacity-[0.065] blur-[82px] animate-solutions-conic-slow"
          style={{
            background:
              'conic-gradient(from 200deg at 50% 50%, rgb(37,99,235,0.55), rgb(79,70,229,0.42), rgb(124,58,237,0.44), rgb(6,182,212,0.38), rgb(139,92,246,0.4), rgb(37,99,235,0.55))',
          }}
        />
      </div>

      {/* Corner ambient pools */}
      <div className="absolute -left-[8%] top-[18%] h-[42%] w-[38%] rounded-full bg-[radial-gradient(circle_at_center,rgb(79_70_229_/_0.09),transparent_72%)] blur-3xl animate-solutions-ambient-pulse" />
      <div className="absolute -right-[6%] bottom-[12%] h-[46%] w-[40%] rounded-full bg-[radial-gradient(circle_at_center,rgb(37_99_235_/_0.08),transparent_70%)] blur-3xl animate-solutions-ambient-pulse-delayed" />

      {/* Slow horizontal shimmer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden">
        <div className="absolute inset-y-[22%] w-[min(68vw,26rem)] rounded-full bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-[0.22] blur-3xl animate-solutions-shimmer-line" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden">
        <div className="absolute inset-y-[58%] w-[min(52vw,20rem)] rounded-full bg-gradient-to-r from-transparent via-indigo-200/40 to-transparent opacity-[0.14] blur-3xl animate-solutions-shimmer-line-delayed" />
      </div>

      {/* Fine dot field */}
      <div
        className="absolute inset-0 opacity-[0.38] motion-reduce:opacity-[0.12] animate-solutions-dots-drift"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgb(79 70 229 / 0.38) 0.75px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 86%, rgba(0,0,0,0.28) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 86%, rgba(0,0,0,0.28) 100%)',
        }}
      />

      {/* Secondary finer particle drift */}
      <div
        className="absolute inset-0 opacity-[0.16] motion-reduce:opacity-[0.06] animate-solutions-particles-drift"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgb(6 182 212 / 0.35) 0.55px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 22%, rgba(0,0,0,0.85) 78%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 22%, rgba(0,0,0,0.85) 78%, transparent 100%)',
        }}
      />

      {/* Subtle structured grid */}
      <div
        className="absolute inset-0 opacity-[0.45] motion-reduce:opacity-[0.2] animate-solutions-grid-pan"
        style={{
          backgroundImage:
            'linear-gradient(rgb(79 70 229 / 0.038) 1px, transparent 1px), linear-gradient(90deg, rgb(79 70 229 / 0.038) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.35))',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.35))',
        }}
      />

      {/* Diagonal micro texture */}
      <div
        className="absolute inset-0 opacity-[0.11] motion-reduce:opacity-[0.05] animate-solutions-diagonal-pan"
        style={{
          backgroundImage:
            'repeating-linear-gradient(122deg, transparent 0px, transparent 14px, rgb(79 70 229 / 0.09) 14px, rgb(79 70 229 / 0.09) 15px)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.88) 12%, rgba(0,0,0,0.88) 88%, rgba(0,0,0,0.22) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.88) 12%, rgba(0,0,0,0.88) 88%, rgba(0,0,0,0.22) 100%)',
        }}
      />

      {/* Soft beam */}
      <div className="absolute inset-x-[10%] top-0 h-[74%] bg-gradient-to-r from-transparent via-indigo-300/45 to-transparent blur-[110px] animate-solutions-beam-sweep motion-reduce:hidden" />

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.038] mix-blend-multiply motion-reduce:opacity-[0.02] animate-solutions-noise-drift"
        style={{
          backgroundImage: noiseDataUri,
          backgroundSize: '160px 160px',
        }}
      />

      {/* Inner vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_52%,rgb(248_250_252_/_0.55)_100%)]" />
    </div>
  );
}
