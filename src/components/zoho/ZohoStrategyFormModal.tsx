'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
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
  placement?: 'anchor' | 'bottom-right' | 'center';
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
const MODAL_MAX_WIDTH = 400;
const DESKTOP_BREAKPOINT = 1024;
const DESKTOP_OFFSET_X = 88;
const VIEWPORT_PAD = 12;
const BOTTOM_RIGHT_SIDE_PAD = 40;
const BOTTOM_RIGHT_GAP = 56;

function computeBottomRightLayout(modalW: number, modalH: number): ModalLayout {
  const left = Math.max(
    VIEWPORT_PAD,
    window.innerWidth - modalW - BOTTOM_RIGHT_SIDE_PAD
  );
  const top = Math.max(
    VIEWPORT_PAD,
    window.innerHeight - modalH - BOTTOM_RIGHT_GAP
  );

  return {
    top,
    left,
    originX: modalW,
    originY: modalH,
  };
}

function computeModalLayout(anchor: FormAnchor, modalW: number, modalH: number): ModalLayout {
  const gap = 10;
  const desktopOffsetX = window.innerWidth >= DESKTOP_BREAKPOINT ? DESKTOP_OFFSET_X : 0;

  let top = anchor.bottom + gap;
  let left = anchor.left + anchor.width / 2 - modalW / 2 + desktopOffsetX;

  if (top + modalH > window.innerHeight - VIEWPORT_PAD) {
    top = anchor.top - modalH - gap;
  }
  if (top < VIEWPORT_PAD) {
    top = Math.max(VIEWPORT_PAD, (window.innerHeight - modalH) / 2);
  }

  left = Math.max(VIEWPORT_PAD, Math.min(left, window.innerWidth - modalW - VIEWPORT_PAD));

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
  placement = 'anchor',
  defaultZohoApps = '',
  title = 'Get Your Free Zoho Strategy Call',
  submitStyle,
  accentFrom = '#226DB4',
  accentVia = '#1e5a96',
  accentTo = '#1a4f82',
  accentGlow = 'rgba(34, 109, 180, 0.28)',
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

      if (placement === 'bottom-right') {
        setLayout(computeBottomRightLayout(measuredW, modalH));
      } else if (placement === 'center') {
        setLayout(computeCenterLayout(measuredW, modalH));
      } else if (anchor) {
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
  }, [open, anchor, placement]);

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

          {/* Panel — Zoho-style floating chat widget */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="zoho-strategy-modal-title"
            className="fixed z-[51] w-[calc(100%-1.5rem)] max-w-[400px] overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.28),0_8px_20px_-8px_rgba(34,109,180,0.2)]"
            style={{
              top: layout?.top ?? -9999,
              left: layout?.left ?? -9999,
              visibility: layout ? 'visible' : 'hidden',
              transformOrigin: layout ? `${layout.originX}px ${layout.originY}px` : 'center center',
            }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 16 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
            transition={
              reduced
                ? { duration: 0.2 }
                : { type: 'spring', stiffness: 380, damping: 28, mass: 0.8 }
            }
          >
            {/* Browser-style header — inspired by Zoho product UI */}
            <div
              className="relative overflow-hidden px-4 pb-3.5 pt-3 text-white"
              style={{
                background: `linear-gradient(135deg, ${accentFrom} 0%, ${accentVia} 55%, ${accentTo} 100%)`,
              }}
            >
              <div
                className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl"
                aria-hidden
              />
              <div className="mb-2.5 flex items-center gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75">
                      SavantX
                    </p>
                  </div>
                  <h2 id="zoho-strategy-modal-title" className="text-[15px] font-bold leading-snug">
                    {title}
                  </h2>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/80">
                    Official Zoho Development Partner · Free 30-min strategy call
                  </p>
                </div>
                <motion.button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 rounded-lg bg-white/10 p-1.5 text-white/90 ring-1 ring-white/15 transition-colors hover:bg-white/20"
                  aria-label="Close"
                  whileHover={reduced ? undefined : { scale: 1.05 }}
                  whileTap={reduced ? undefined : { scale: 0.95 }}
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-b from-slate-50/80 to-white px-4 py-3.5"
              variants={reduced ? undefined : contentStagger}
              initial={reduced ? false : 'hidden'}
              animate={reduced ? undefined : 'show'}
            >
              <motion.div variants={reduced ? undefined : contentItem}>
                <ZohoStrategyForm
                  key={`${open}-${defaultZohoApps}`}
                  defaultZohoApps={defaultZohoApps}
                  popup
                  accentFrom={accentFrom}
                  accentTo={accentTo}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
