'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { ArrowRight, Check, Search, X } from 'lucide-react';
import { useDialog } from '@/lib/useDialog';
import { CATEGORIES, CATEGORY_STYLE, PRODUCTS, type Product, type ProductCategory } from './data';

function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  const style = CATEGORY_STYLE[product.category];
  const Icon = product.icon;
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${style.tint} ${large ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
      {product.screenshot ? (
        <Image
          src={product.screenshot.src}
          alt={product.screenshot.alt}
          width={product.screenshot.width}
          height={product.screenshot.height}
          sizes={large ? '(min-width: 768px) 640px, 92vw' : '(min-width: 1280px) 300px, (min-width: 640px) 45vw, 92vw'}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div aria-hidden className="flex h-full items-center justify-center">
          <span className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${style.tile}`}>
            <Icon className="h-8 w-8" strokeWidth={1.75} />
          </span>
        </div>
      )}
      <span aria-hidden className={`absolute bottom-2.5 left-2.5 flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md ${style.tile}`}>
        <Icon className="h-4.5 w-4.5" />
      </span>
    </div>
  );
}

function ProductDialog({ product, onClose }: { product: Product; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  useDialog(true, onClose, panelRef);
  const style = CATEGORY_STYLE[product.category];
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div aria-hidden className="product-fade absolute inset-0 bg-slate-950/50 backdrop-blur-sm" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`product-${product.id}-title`}
        tabIndex={-1}
        className="product-zoom relative max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl outline-none sm:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow ring-1 ring-slate-200 transition hover:text-slate-900"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
        <ProductVisual product={product} large />
        <p className={`mt-5 text-xs font-bold uppercase tracking-[0.14em] ${style.text}`}>{style.label}</p>
        <h3 id={`product-${product.id}-title`} className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-indigo-600">{product.subtitle}</p>
        <p className="mt-4 leading-relaxed text-slate-600">{product.description}</p>
        <h4 className="mt-6 text-sm font-semibold text-slate-900">Key features</h4>
        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
              <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white ${style.check}`}>
                <Check className="h-2.5 w-2.5" strokeWidth={3.5} aria-hidden />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <h4 className="mt-6 text-sm font-semibold text-slate-900">Built with</h4>
        <ul className="mt-2 flex flex-wrap gap-2">
          {product.technology.map((t) => (
            <li key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110"
          >
            Request a demo
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:ring-indigo-300"
          >
            Back to catalog
          </button>
        </div>
      </div>
    </div>
  );
}

/** Filterable, searchable product catalog with a details dialog per product. */
export default function ProductCatalog() {
  const [category, setCategory] = useState<ProductCategory | 'all'>('all');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      if (!q) return true;
      return [p.name, p.subtitle, p.summary, CATEGORY_STYLE[p.category].label, ...p.features].some((t) => t.toLowerCase().includes(q));
    });
  }, [category, query]);

  const open = PRODUCTS.find((p) => p.id === openId);

  return (
    <section id="catalog" aria-labelledby="catalog-heading" className="scroll-mt-24 px-4 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-700">
              Explore by category
            </p>
            <h2 id="catalog-heading" className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find the right solution for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">your business</span>
            </h2>
            <p className="mt-3 text-slate-600">Browse our products by industry or business function to quickly find what you need.</p>
          </div>
          <label className="relative block w-full lg:w-80">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-4 pr-11 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />
            <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
          </label>
        </div>

        <div role="group" aria-label="Filter by category" className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map(({ id, label, icon: Icon }) => {
            const active = category === id;
            const count = id === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === id).length;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setCategory(id)}
                aria-pressed={active}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/25'
                    : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:text-indigo-700 hover:ring-indigo-200'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden />}
                {label}
                <span className={`rounded-full px-1.5 text-xs ${active ? 'bg-white/20' : 'bg-slate-100 text-slate-500'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="sr-only">
          {results.length} {results.length === 1 ? 'product' : 'products'} shown
        </p>

        {results.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <p className="font-semibold text-slate-900">No products match “{query}”.</p>
            <p className="mt-1 text-sm text-slate-500">Try another word, or tell us what you need and we will build it.</p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setCategory('all');
                }}
                className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:ring-indigo-300"
              >
                Show all products
              </button>
              <Link href="/contact" className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
                Ask for a custom solution
              </Link>
            </div>
          </div>
        ) : (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {results.map((product) => {
              const style = CATEGORY_STYLE[product.category];
              return (
                <li
                  key={product.id}
                  className="group flex flex-col rounded-2xl bg-white p-3.5 shadow-[0_18px_45px_-30px_rgba(30,58,138,0.45)] ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:ring-indigo-200 motion-reduce:hover:translate-y-0"
                >
                  <ProductVisual product={product} />
                  <div className="flex flex-1 flex-col px-1.5 pb-1.5 pt-4">
                    <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${style.text}`}>{style.label}</p>
                    <h3 className="mt-1 text-lg font-bold leading-snug tracking-tight text-slate-900">{product.name}</h3>
                    <p className="text-[13px] font-medium text-indigo-600">{product.subtitle}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{product.summary}</p>
                    <ul className="mt-4 flex-1 space-y-2">
                      {product.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-[13px] text-slate-700">
                          <span className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full text-white ${style.check}`}>
                            <Check className="h-2.5 w-2.5" strokeWidth={3.5} aria-hidden />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setOpenId(product.id)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                      >
                        Learn more
                        <span className="sr-only"> about {product.name}</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </button>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:text-indigo-700 hover:ring-indigo-300"
                      >
                        Request demo
                        <span className="sr-only"> of {product.name}</span>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {open && <ProductDialog product={open} onClose={() => setOpenId(null)} />}
    </section>
  );
}
