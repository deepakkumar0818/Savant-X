'use client';

import Link from 'next/link';

const locations = [
  { id: 'hq', name: 'HQ · India', region: 'Bihar', detail: 'Panchanpur, Tekari, Gaya' },
  { id: 'blr', name: 'Bangalore', region: 'India', detail: 'Whitefield' },
  { id: 'hyd', name: 'Hyderabad', region: 'India', detail: 'Hitech City' },
  { id: 'usa', name: 'United States', region: 'Americas', detail: 'West Coast' },
  { id: 'ca', name: 'Canada', region: 'Americas', detail: 'Toronto' },
  { id: 'uae', name: 'UAE', region: 'MENA', detail: 'Dubai · Business Bay' },
  { id: 'np', name: 'Nepal', region: 'South Asia', detail: 'Kathmandu' },
  { id: 'sg', name: 'Singapore', region: 'APAC', detail: 'Marina Bay' },
];

const markers = [
  { cx: 72, cy: 44, label: 'IN' },
  { cx: 24, cy: 36, label: 'US' },
  { cx: 28, cy: 32, label: 'CA' },
  { cx: 58, cy: 48, label: 'AE' },
  { cx: 68, cy: 42, label: 'NP' },
  { cx: 78, cy: 52, label: 'SG' },
];

export default function FooterLocations() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <div className="aspect-[16/10] w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-inner">
          <svg viewBox="0 0 100 56" className="h-full w-full text-slate-200" aria-hidden>
            <defs>
              <linearGradient id="mapg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
            <rect width="100" height="56" fill="url(#mapg)" stroke="currentColor" strokeWidth="0.4" rx="3" />
            {markers.map((m) => (
              <g key={m.label}>
                <circle cx={m.cx} cy={m.cy} r="2.2" className="fill-indigo-500/90" />
                <circle cx={m.cx} cy={m.cy} r="4" className="fill-none stroke-indigo-400/40" strokeWidth="0.6" />
              </g>
            ))}
          </svg>
        </div>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
          Markers show active delivery hubs—illustrative projection, not cartographic precision.
        </p>
        <Link
          href="/contact#map"
          className="mt-4 inline-flex text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
        >
          Open full map →
        </Link>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-6 sm:grid-cols-4">
          <div>
            <p className="text-2xl font-semibold text-slate-900">8+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Hubs</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-slate-900">6</p>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Countries</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-slate-900">24/7</p>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Support</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-slate-900">200+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Shipped</p>
          </div>
        </div>

        <ul className="mt-8 divide-y divide-slate-200">
          {locations.map((loc) => (
            <li key={loc.id} className="flex flex-wrap items-baseline justify-between gap-2 py-4 first:pt-0">
              <div>
                <p className="font-medium text-slate-900">{loc.name}</p>
                <p className="text-sm text-slate-600">{loc.detail}</p>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                {loc.region}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
