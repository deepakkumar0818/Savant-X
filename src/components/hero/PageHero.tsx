import Link from 'next/link';
import { ArrowRight, CheckCircle2, Eye, type LucideIcon } from 'lucide-react';
import HeroPremiumBackdrop from '@/components/hero/HeroPremiumBackdrop';

export type PageHeroStat = { value: React.ReactNode; label: string };
type Cta = { label: string; href: string };

type Props = {
  /** Small uppercase label above the headline. */
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  /** Headline; `highlight` is rendered after it with the brand gradient. */
  title: string;
  highlight?: string;
  description: React.ReactNode;
  primaryCta?: Cta | null;
  secondaryCta?: Cta | null;
  /** Short list shown in the panel beside the headline (desktop and below on mobile). */
  highlights?: string[];
  highlightsTitle?: string;
  stats?: PageHeroStat[];
  /** Replaces the highlights panel with custom content. */
  aside?: React.ReactNode;
  /** Narrow, text-only variant for legal and utility pages. */
  compact?: boolean;
  /** Small supporting line under the description, e.g. a revision date. */
  note?: React.ReactNode;
};

/**
 * Inner-page hero in the same visual language as the home page:
 * soft premium backdrop, left-aligned headline with gradient accent,
 * gradient primary CTA, outline secondary CTA and white stat cards.
 */
export default function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  highlight,
  description,
  primaryCta = { label: 'Start a project', href: '/contact' },
  secondaryCta = { label: 'View our work', href: '/work' },
  highlights,
  highlightsTitle = 'What we deliver',
  stats,
  aside,
  compact = false,
  note,
}: Props) {
  const hasPanel = !compact && (aside || (highlights && highlights.length > 0));

  return (
    <section
      className={`relative z-10 overflow-hidden bg-white px-4 sm:px-8 lg:px-12 ${
        compact ? 'pb-12 pt-12 sm:pb-14 sm:pt-14' : 'pb-14 pt-12 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16'
      }`}
      style={
        {
          '--hero-gx': '50%',
          '--hero-gy': '40%',
          '--hero-px': '0.5',
          '--hero-py': '0.4',
        } as React.CSSProperties
      }
    >
      <HeroPremiumBackdrop gridGlowActive={false} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={
            hasPanel
              ? 'grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14'
              : 'max-w-3xl'
          }
        >
          <div className={hasPanel ? 'text-center lg:text-left' : 'text-left'}>
            <p className="animate-fade-in-up inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-md">
              {EyebrowIcon && <EyebrowIcon className="h-4 w-4 text-indigo-600" strokeWidth={1.75} aria-hidden />}
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{eyebrow}</span>
            </p>

            <h1
              className={`animate-fade-in-up delay-100 mt-5 font-semibold tracking-tight text-slate-900 lg:mt-6 ${
                compact
                  ? 'text-3xl leading-tight sm:text-4xl lg:text-5xl'
                  : 'text-[2rem] leading-[1.12] sm:text-5xl sm:leading-[1.1] lg:text-[3.35rem]'
              }`}
            >
              {title}
              {highlight && (
                <>
                  {' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    {highlight}
                  </span>
                </>
              )}
            </h1>

            <p
              className={`animate-fade-in-up delay-200 mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg ${
                hasPanel ? 'mx-auto lg:mx-0' : ''
              }`}
            >
              {description}
            </p>

            {note && (
              <p className={`animate-fade-in-up delay-200 mt-4 text-sm text-slate-500 ${hasPanel ? 'mx-auto lg:mx-0' : ''}`}>
                {note}
              </p>
            )}

            {!compact && (primaryCta || secondaryCta) && (
              <div
                className={`animate-fade-in-up delay-300 mt-9 flex flex-col gap-4 sm:flex-row ${
                  hasPanel ? 'justify-center lg:justify-start' : ''
                }`}
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25 motion-safe:active:scale-[0.98]"
                  >
                    {primaryCta.label}
                    <ArrowRight
                      className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md motion-safe:active:scale-[0.98]"
                  >
                    <Eye className="h-[1.15rem] w-[1.15rem] opacity-80" aria-hidden />
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {hasPanel &&
            (aside ?? (
              <div className="animate-fade-in-up delay-200 mx-auto w-full max-w-md lg:mr-0">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_24px_60px_-30px_rgba(30,58,138,0.35)] backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden />
                    <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {highlightsTitle}
                    </span>
                  </div>
                  <ul className="divide-y divide-slate-100">
                    {highlights!.map((item) => (
                      <li key={item} className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="h-[1.1rem] w-[1.1rem] shrink-0 text-indigo-500" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>

        {!compact && stats && stats.length > 0 && (
          <div
            className={`mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:mt-16 sm:gap-6 ${
              stats.length === 4 ? 'lg:grid-cols-4' : stats.length === 3 ? 'sm:grid-cols-3' : ''
            }`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_40px_-24px_rgba(30,58,138,0.18)] transition-all duration-500 sm:p-6 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_50px_-22px_rgba(79,70,229,0.22)]"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold tabular-nums text-transparent sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
