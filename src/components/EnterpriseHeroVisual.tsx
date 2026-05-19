'use client';

/**
 * Premium ERP / operations dashboard mockup for hero — restrained motion, brand accents.
 */
export default function EnterpriseHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,540px)]">
      <div
        className="pointer-events-none absolute -inset-3 rounded-3xl opacity-60 blur-2xl"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.25) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.2) 0%, transparent 50%)',
        }}
      />
      <div className="relative overflow-hidden rounded-2xl border border-slate-700/90 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.65)] ring-1 ring-white/10">
        <div className="flex items-center gap-2 border-b border-slate-800/90 bg-slate-950/90 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
              Operations Hub
            </span>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400/90">
            Synced
          </span>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { label: 'Throughput', value: '98.2%', sub: 'vs last week' },
              { label: 'Open orders', value: '1.2k', sub: 'ERP' },
              { label: 'Fleet uptime', value: '99.94%', sub: 'IoT edge' },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 px-2.5 py-2.5 sm:px-3 sm:py-3"
              >
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:text-[11px]">
                  {k.label}
                </p>
                <p className="mt-1 bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-lg font-semibold tabular-nums text-transparent sm:text-xl">
                  {k.value}
                </p>
                <p className="mt-0.5 text-[10px] text-slate-500">{k.sub}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-300">Production &amp; demand</span>
              <span className="text-[10px] text-slate-500">Last 24h</span>
            </div>
            <div className="flex h-24 items-end justify-between gap-1 px-0.5 sm:h-28">
              {[42, 68, 55, 82, 64, 90, 76, 94, 71, 88, 95, 84].map((h, i) => (
                <div
                  key={i}
                  className="min-h-[18%] flex-1 rounded-t-sm bg-gradient-to-t from-blue-600/30 to-indigo-500/90 transition-all duration-300 hover:from-blue-500/40 hover:to-indigo-400"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[10px] font-medium text-slate-500">
              <span>00:00</span>
              <span>12:00</span>
              <span>24:00</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3 sm:col-span-2">
              <p className="mb-2 text-[11px] font-medium text-slate-400">Alerts</p>
              <ul className="space-y-2">
                {[
                  { t: 'Line B — within SLA', ok: true },
                  { t: 'Cold chain — review 2 sensors', ok: false },
                ].map((a) => (
                  <li key={a.t} className="flex items-center gap-2 text-[11px] text-slate-300">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.ok ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    {a.t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-gradient-to-br from-slate-900/60 to-indigo-950/40 p-3 sm:col-span-3">
              <p className="mb-2 text-[11px] font-medium text-slate-400">Pipeline</p>
              <div className="flex gap-2">
                {['Qualify', 'Proposal', 'Closed'].map((stage, i) => (
                  <div
                    key={stage}
                    className="flex-1 rounded-lg border border-slate-700/60 bg-slate-950/50 px-2 py-2 text-center"
                  >
                    <div className="text-[10px] text-slate-500">{stage}</div>
                    <div className="mt-0.5 text-sm font-semibold tabular-nums text-white">
                      {i === 0 ? '24' : i === 1 ? '11' : '7'}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.35)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
