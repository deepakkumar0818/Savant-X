import Image from 'next/image';
import { ArrowRight, Check, Sparkles, type LucideIcon } from 'lucide-react';
import SelectServiceLink from './SelectServiceLink';
import { BENTO_THEMES, type BentoTheme } from './bentoThemes';
import type { ServiceId } from './data';

export type BentoOffer = {
  id: ServiceId;
  tag: string;
  name: string;
  price: string;
  /** Shown before "onwards", e.g. "/month". */
  per?: string;
  benefit: string;
  deliverables: string[];
  logo?: string;
  icon?: LucideIcon;
  badge?: string;
};

const styles = `
  @keyframes pkg-rise { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: none; } }
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      .pkg-rise { animation: pkg-rise linear both; animation-timeline: view(); animation-range: entry 0% entry 40%; }
    }
  }
`;

function Mark({ offer, inverse, size }: { offer: BentoOffer; inverse: boolean; size: 'sm' | 'lg' }) {
  const { logo, icon: Icon } = offer;
  const box = size === 'lg' ? 'h-20 w-20 rounded-2xl' : 'h-7 w-7 rounded-lg';
  const glow = inverse
    ? 'bg-white/10 ring-1 ring-white/20 shadow-[0_0_60px_-5px_rgba(129,140,248,0.75)] backdrop-blur'
    : 'bg-white ring-1 ring-slate-200/70 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.45)]';
  return (
    <span className={`flex shrink-0 items-center justify-center ${box} ${size === 'lg' ? glow : 'bg-white ring-1 ring-slate-200'}`}>
      {logo ? (
        <span className={`flex items-center justify-center ${size === 'lg' && inverse ? 'h-12 w-12 rounded-xl bg-white' : ''}`}>
          <Image src={logo} alt="" width={40} height={40} className={size === 'lg' ? 'h-10 w-10 object-contain' : 'h-5 w-5 object-contain'} />
        </span>
      ) : (
        Icon && (
          <Icon
            className={`${size === 'lg' ? 'h-9 w-9' : 'h-4 w-4'} ${size === 'lg' && inverse ? 'text-white' : 'text-blue-600'}`}
            strokeWidth={1.75}
            aria-hidden
          />
        )
      )}
    </span>
  );
}

/**
 * Priced offers in the Work page bento style. Wide cards (span 2 of 4 columns) show the
 * deliverables window; narrow cards show a large logo or icon.
 */
export default function OfferBento({
  id,
  eyebrow,
  title,
  description,
  cta,
  offers,
  wide,
  themes,
  footnote,
  headingLevel = 'h3',
  className = 'bg-white',
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; service: ServiceId };
  offers: BentoOffer[];
  wide: boolean[];
  themes: BentoTheme[];
  footnote: string;
  headingLevel?: 'h2' | 'h3';
  className?: string;
}) {
  const Heading = headingLevel;
  const CardHeading = headingLevel === 'h2' ? 'h3' : 'h4';
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`scroll-mt-24 px-6 py-20 sm:px-8 lg:px-12 lg:py-28 ${className}`}>
      <style>{styles}</style>
      <div className="mx-auto max-w-7xl">
        <div className="pkg-rise flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{eyebrow}</p>
            <Heading id={`${id}-heading`} className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-4xl">
              {title}
            </Heading>
            <p className="mt-3 text-base leading-relaxed text-slate-500">{description}</p>
          </div>
          <SelectServiceLink
            service={cta.service}
            className="inline-flex shrink-0 items-center self-start rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.8),inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:bg-blue-700 sm:self-auto"
          >
            {cta.label}
          </SelectServiceLink>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 pointer-fine:[&:has(>li:hover)>li:not(:hover)]:scale-[0.98] pointer-fine:[&:has(>li:hover)>li:not(:hover)]:opacity-60 pointer-fine:[&:has(>li:hover)>li:not(:hover)]:blur-[3px] pointer-fine:[&:has(>li:hover)>li:not(:hover)]:saturate-50">
          {offers.map((offer, i) => {
            const isWide = wide[i % wide.length];
            const { card, inverse } = BENTO_THEMES[themes[i % themes.length]];
            const chip = inverse ? 'bg-white/10 text-white ring-1 ring-white/15' : 'bg-white/80 text-slate-700 ring-1 ring-slate-200';
            const chips = (
              <div className={`relative z-10 flex flex-wrap items-center gap-2 text-xs font-medium ${isWide ? 'mt-4' : ''}`}>
                <span className={`rounded-full px-2.5 py-1 backdrop-blur ${chip}`}>Scope-based quote</span>
                <SelectServiceLink
                  service={offer.id}
                  event="package_cta_click"
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    inverse ? 'bg-white text-slate-900 hover:bg-indigo-50' : 'bg-slate-900 text-white hover:bg-slate-700'
                  }`}
                >
                  Get started
                  <span className="sr-only"> with {offer.name}</span>
                  <ArrowRight className="h-3 w-3" aria-hidden />
                </SelectServiceLink>
              </div>
            );
            return (
              <li
                key={offer.id}
                className={`pkg-rise group relative flex h-[24rem] flex-col overflow-hidden rounded-2xl p-6 transition duration-500 ease-out motion-safe:hover:-translate-y-1 ${card} ${
                  isWide ? 'md:col-span-2' : ''
                } ${offer.badge ? 'ring-2 ring-amber-400' : ''}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className={`text-xs font-medium ${inverse ? 'text-white/60' : 'text-slate-500'}`}>{offer.tag}</p>
                  {offer.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-0.5 text-[11px] font-bold text-slate-900">
                      <Sparkles className="h-3 w-3" aria-hidden />
                      {offer.badge}
                    </span>
                  )}
                </div>
                <CardHeading className={`mt-1.5 text-lg font-semibold tracking-tight ${inverse ? 'text-white' : 'text-slate-900'}`}>{offer.name}</CardHeading>
                <p className="mt-2 flex items-baseline gap-1.5">
                  <span className={`text-3xl font-bold tracking-tight ${inverse ? 'text-white' : 'text-slate-900'}`}>{offer.price}</span>
                  <span className={`text-sm font-medium ${inverse ? 'text-white/60' : 'text-slate-500'}`}>
                    {offer.per ? `${offer.per} onwards` : 'onwards'}
                  </span>
                </p>
                <p className={`mt-2 line-clamp-2 shrink-0 text-sm leading-relaxed ${inverse ? 'text-white/70' : 'text-slate-600'} ${isWide ? 'max-w-md' : ''}`}>
                  {offer.benefit}
                </p>
                {isWide && chips}

                {isWide ? (
                  <div className="relative -mb-16 mt-6 flex flex-1 items-start justify-center transition-transform duration-500 motion-safe:group-hover:-translate-y-2">
                    <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(2,6,23,0.55)] ring-1 ring-slate-900/10">
                      <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                        <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                        <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                        <span className="mx-auto rounded-md bg-slate-100 px-3 py-0.5 text-[10px] text-slate-500">Typical deliverables</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-4 pt-4">
                        <Mark offer={offer} inverse={false} size="sm" />
                        <span className="text-sm font-semibold text-slate-900">{offer.name}</span>
                      </div>
                      <ul className="space-y-2.5 px-4 pb-16 pt-3">
                        {offer.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 rounded-lg border border-slate-100 px-3 py-2 text-sm text-slate-700">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                              <Check className="h-2.5 w-2.5" strokeWidth={3.5} aria-hidden />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-1 items-center justify-center transition-transform duration-500 motion-safe:group-hover:scale-105">
                      <Mark offer={offer} inverse={inverse} size="lg" />
                    </div>
                    <p className="sr-only">Includes: {offer.deliverables.join(', ')}.</p>
                    {chips}
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-sm text-slate-500">{footnote}</p>
      </div>
    </section>
  );
}
