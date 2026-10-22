'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, Building2, ExternalLink, Navigation } from 'lucide-react';
import { OFFICES, formatOfficeAddress, officeMapUrl } from '@/lib/company';

const LocationsMap = dynamic(() => import('@/components/LocationsMap'), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-slate-100" />,
});

/** Office cards and tabs that drive the map: picking an office flies the map to it. */
export default function ContactOffices() {
  const [selectedId, setSelectedId] = useState<string>(OFFICES[0].id);
  const selected = OFFICES.find((o) => o.id === selectedId) ?? OFFICES[0];

  return (
    <section id="map" className="scroll-mt-24 px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
              <Navigation className="h-3.5 w-3.5" aria-hidden />
              Our offices
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Find Us in <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">India</span>
            </h2>
            <p className="mt-3 text-slate-600">
              Visit us at our offices in {OFFICES.map((o) => o.city).join(' and ')}. Select a location to see it on the map.
            </p>
          </div>
          <div role="group" aria-label="Choose an office" className="flex gap-2">
            {OFFICES.map((office) => (
              <button
                key={office.id}
                type="button"
                aria-pressed={office.id === selectedId}
                onClick={() => setSelectedId(office.id)}
                className={`min-h-11 flex-1 rounded-xl px-5 text-sm font-semibold transition sm:flex-none sm:px-8 ${
                  office.id === selectedId
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:text-indigo-700 hover:ring-indigo-200'
                }`}
              >
                {office.city} Office
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <ul className="flex flex-col gap-4">
            {OFFICES.map((office) => {
              const active = office.id === selectedId;
              return (
                <li key={office.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(office.id)}
                    aria-pressed={active}
                    className={`flex w-full items-center gap-4 rounded-2xl bg-white p-5 text-left transition ${
                      active ? 'shadow-[0_20px_45px_-28px_rgba(79,70,229,0.55)] ring-2 ring-indigo-500' : 'shadow-sm ring-1 ring-slate-200/80 hover:ring-indigo-200'
                    }`}
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                      <Building2 className="h-7 w-7" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-slate-900">{office.name}</span>
                        <span
                          className={`rounded-md px-2 py-0.5 text-[11px] font-bold text-white ${office.type === 'headquarters' ? 'bg-rose-500' : 'bg-emerald-500'}`}
                        >
                          {office.type === 'headquarters' ? 'HQ' : 'Branch'}
                        </span>
                      </span>
                      <span className="mt-1 block text-sm text-slate-500">{formatOfficeAddress(office)}</span>
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${active ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'}`}
                    >
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="relative h-[340px] overflow-hidden rounded-3xl shadow-[0_24px_60px_-35px_rgba(79,70,229,0.45)] ring-1 ring-slate-200/80 sm:h-[400px]">
            <LocationsMap selectedId={selectedId} onSelect={setSelectedId} />
            <a
              href={officeMapUrl(selected)}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-[500] inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-indigo-700 shadow-lg ring-1 ring-slate-200 transition hover:bg-indigo-50"
            >
              View {selected.city} on Google Maps
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
