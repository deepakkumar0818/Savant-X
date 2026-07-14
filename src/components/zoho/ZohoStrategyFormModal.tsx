'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import ZohoStrategyForm from '@/components/zoho/ZohoStrategyForm';

export type FormAnchor = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};

type ModalLayout = {
  top: number;
  left: number;
  originX: number;
  originY: number;
};

type Props = {
  open: boolean;
  onClose: () => void;
  anchor?: FormAnchor | null;
  defaultZohoApps?: string;
  title?: string;
  subtitle?: string;
  submitStyle?: React.CSSProperties;
  accentFrom?: string;
  accentVia?: string;
  accentTo?: string;
  accentGlow?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;
const MODAL_ESTIMATE_HEIGHT = 380;
const MODAL_MAX_WIDTH = 448;
const DESKTOP_BREAKPOINT = 1024;
const DESKTOP_OFFSET_X = 88;

function computeModalLayout(anchor: FormAnchor, modalW: number, modalH: number): ModalLayout {
  const pad = 12;
  const gap = 10;
  const desktopOffsetX = window.innerWidth >= DESKTOP_BREAKPOINT ? DESKTOP_OFFSET_X : 0;

  let top = anchor.bottom + gap;
  let left = anchor.left + anchor.width / 2 - modalW / 2 + desktopOffsetX;

  if (top + modalH > window.innerHeight - pad) {
    top = anchor.top - modalH - gap;
  }
  if (top < pad) {
    top = Math.max(pad, (window.innerHeight - modalH) / 2);
  }

  left = Math.max(pad, Math.min(left, window.innerWidth - modalW - pad));

  const originX = anchor.left + anchor.width / 2 - left;
  const originY = anchor.top + anchor.height / 2 - top;

  return { top, left, originX, originY };
}

function computeCenterLayout(modalW: number, modalH: number): ModalLayout {
  const top = Math.max(12, (window.innerHeight - modalH) / 2);
  const left = Math.max(12, (window.innerWidth - modalW) / 2);
  return { top, left, originX: modalW / 2, originY: modalH / 2 };
}

const contentStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

const contentItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
};

export default function ZohoStrategyFormModal({
  open,
  onClose,
  anchor = null,
  defaultZohoApps = '',
  title = 'Get Your Free Zoho Strategy Call',
  submitStyle,
  accentFrom = '#2563eb',
  accentVia = '#4f46e5',
  accentTo = '#7c3aed',
  accentGlow = 'rgba(37, 99, 235, 0.25)',
}: Props) {
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<ModalLayout | null>(null);

  useLayoutEffect(() => {
    if (!open) {
      setLayout(null);
      return;
    }

    const update = () => {
      const modalW = Math.min(MODAL_MAX_WIDTH, window.innerWidth - 24);
      const modalH = panelRef.current?.offsetHeight ?? MODAL_ESTIMATE_HEIGHT;
      const measuredW = panelRef.current?.offsetWidth ?? modalW;

      if (anchor) {
        setLayout(computeModalLayout(anchor, measuredW, modalH));
      } else {
        setLayout(computeCenterLayout(measuredW, modalH));
      }
    };

    update();
    const raf = requestAnimationFrame(update);
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', update);
    };
  }, [open, anchor]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Light backdrop — reduced blur */}
          <motion.button
            type="button"
            className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-[2px]"
            onClick={onClose}
            aria-label="Close form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease }}
          />

          {/* Panel — anchored near trigger button */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="zoho-strategy-modal-title"
            className="fixed z-[51] w-[calc(100%-1.5rem)] max-w-md overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-2xl"
            style={{
              top: layout?.top ?? -9999,
              left: layout?.left ?? -9999,
              visibility: layout ? 'visible' : 'hidden',
              transformOrigin: layout ? `${layout.originX}px ${layout.originY}px` : 'center center',
              boxShadow: `0 24px 60px -20px ${accentGlow}, 0 12px 32px -16px rgba(15,23,42,0.2)`,
            }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.4 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
            transition={
              reduced
                ? { duration: 0.2 }
                : { type: 'spring', stiffness: 420, damping: 30, mass: 0.75 }
            }
          >
            <div className="relative overflow-hidden">
              <motion.div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${accentFrom}, ${accentVia}, ${accentTo}, ${accentFrom})`,
                  backgroundSize: '200% 100%',
                }}
                animate={reduced ? undefined : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={reduced ? undefined : { duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <motion.div
              className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3"
              variants={reduced ? undefined : contentStagger}
              initial={reduced ? false : 'hidden'}
              animate={reduced ? undefined : 'show'}
            >
              <motion.div variants={reduced ? undefined : contentItem} className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-indigo-100 bg-indigo-50/80 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-indigo-700">
                    <Sparkles className="h-2.5 w-2.5" />
                    Free call
                  </span>
                  <h2 id="zoho-strategy-modal-title" className="truncate text-base font-bold text-slate-900">
                    {title}
                  </h2>
                </div>
              </motion.div>
              <motion.button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                aria-label="Close"
                variants={reduced ? undefined : contentItem}
                whileHover={reduced ? undefined : { scale: 1.08, rotate: 90 }}
                whileTap={reduced ? undefined : { scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                <X className="h-4 w-4" />
              </motion.button>
            </motion.div>

            <motion.div
              className="px-4 py-3"
              variants={reduced ? undefined : contentStagger}
              initial={reduced ? false : 'hidden'}
              animate={reduced ? undefined : 'show'}
            >
              <motion.div variants={reduced ? undefined : contentItem}>
                <ZohoStrategyForm
                  key={`${open}-${defaultZohoApps}`}
                  defaultZohoApps={defaultZohoApps}
                  submitStyle={submitStyle}
                  compact
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
