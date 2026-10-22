import {
  Bike,
  BookOpen,
  Check,
  Home,
  MapPin,
  Plus,
  Search,
  Truck,
} from 'lucide-react';

/**
 * Illustrative product UI for each project category. Purely decorative
 * (aria-hidden): the values are placeholders, not project results.
 */
export default function ProjectMock({ category }: { category: string }) {
  const Mock = MOCKS[category] ?? WebMock;
  return (
    <div aria-hidden className="pointer-events-none select-none">
      <Mock />
    </div>
  );
}

function Window({
  url,
  dark = false,
  className = '',
  children,
}: {
  url: string;
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl shadow-[0_30px_60px_-20px_rgba(2,6,23,0.6)] ring-1 ${
        dark ? 'bg-[#121216] ring-white/10' : 'bg-white ring-slate-900/10'
      } ${className}`}
    >
      <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${dark ? 'border-white/10' : 'border-slate-100'}`}>
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span
          className={`mx-auto rounded-md px-3 py-0.5 text-[9px] ${
            dark ? 'bg-white/5 text-white/50' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

function Bar({ w, dark = false }: { w: string; dark?: boolean }) {
  return <span className={`block h-1.5 rounded-full ${dark ? 'bg-white/15' : 'bg-slate-200'} ${w}`} />;
}

function HealthcareMock() {
  const rows = [
    { initials: 'AS', tone: 'bg-sky-100 text-sky-700', time: '09:30', status: 'Confirmed', chip: 'bg-emerald-50 text-emerald-700' },
    { initials: 'RK', tone: 'bg-violet-100 text-violet-700', time: '10:15', status: 'Checked in', chip: 'bg-blue-50 text-blue-700' },
    { initials: 'MP', tone: 'bg-amber-100 text-amber-700', time: '11:00', status: 'Waiting', chip: 'bg-amber-50 text-amber-700' },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <Window url="clinic.app/appointments">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold text-slate-900">Today&apos;s appointments</p>
              <p className="text-[9px] text-slate-400">Cardiology · OPD 2</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-2 py-1 text-[9px] font-semibold text-white">
              <Plus className="h-2.5 w-2.5" /> New
            </span>
          </div>
          <ul className="mt-3 space-y-2">
            {rows.map((r) => (
              <li key={r.initials} className="flex items-center gap-2.5 rounded-lg border border-slate-100 px-2.5 py-2">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-bold ${r.tone}`}>
                  {r.initials}
                </span>
                <span className="flex-1 space-y-1">
                  <Bar w="w-20" />
                  <Bar w="w-12" />
                </span>
                <span className="text-[9px] font-medium tabular-nums text-slate-500">{r.time}</span>
                <span className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${r.chip}`}>{r.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </Window>
      <div className="absolute -bottom-5 -left-3 hidden rounded-xl bg-white p-3 shadow-xl ring-1 ring-slate-900/5 sm:block">
        <p className="text-[9px] font-medium uppercase tracking-wider text-slate-400">Next slot</p>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs font-semibold text-slate-900">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check className="h-2.5 w-2.5" strokeWidth={3} />
          </span>
          Booked · 11:45
        </p>
      </div>
    </div>
  );
}

function MobileMock() {
  const steps = ['Placed', 'Preparing', 'On the way'];
  return (
    <div className="relative mx-auto w-56">
      <div className="rounded-[2rem] bg-slate-900 p-2 shadow-[0_30px_60px_-20px_rgba(2,6,23,0.7)] ring-1 ring-white/10">
        <div className="overflow-hidden rounded-[1.6rem] bg-white">
          <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-slate-900" />
          <div className="p-4">
            <p className="text-[9px] text-slate-400">Order #2481</p>
            <p className="text-sm font-semibold text-slate-900">On the way</p>
            <div className="mt-3 flex gap-1">
              {steps.map((s, i) => (
                <span key={s} className={`h-1 flex-1 rounded-full ${i < 2 ? 'bg-orange-500' : 'bg-orange-200'}`} />
              ))}
            </div>
            <ul className="mt-4 space-y-2.5">
              {['from-orange-200 to-rose-300', 'from-amber-200 to-orange-300'].map((g) => (
                <li key={g} className="flex items-center gap-2.5">
                  <span className={`h-9 w-9 rounded-lg bg-gradient-to-br ${g}`} />
                  <span className="flex-1 space-y-1">
                    <Bar w="w-20" />
                    <Bar w="w-10" />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl bg-slate-900 py-2 text-center text-[10px] font-semibold text-white">Track order</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-16 top-24 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl ring-1 ring-slate-900/5 sm:flex">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
          <Bike className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[9px] text-slate-400">Arriving in</span>
          <span className="block text-xs font-semibold text-slate-900">12 min</span>
        </span>
      </div>
    </div>
  );
}

function WebMock() {
  const cards = ['from-sky-200 to-indigo-300', 'from-emerald-100 to-teal-300', 'from-indigo-100 to-violet-300'];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <Window url="propertymax.app/search">
        <div className="p-4">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-2.5 py-1.5">
            <Search className="h-3 w-3 text-slate-400" />
            <span className="text-[9px] text-slate-400">3 BHK near city centre</span>
            <span className="ml-auto rounded bg-blue-600 px-2 py-0.5 text-[8px] font-semibold text-white">Search</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {cards.map((g) => (
              <div key={g} className="overflow-hidden rounded-lg border border-slate-100">
                <div className={`flex h-14 items-center justify-center bg-gradient-to-br ${g}`}>
                  <Home className="h-4 w-4 text-white/90" />
                </div>
                <div className="space-y-1 p-2">
                  <Bar w="w-full" />
                  <Bar w="w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Window>
      <div className="absolute -bottom-4 -right-3 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl ring-1 ring-slate-900/5 sm:flex">
        <MapPin className="h-4 w-4 text-rose-500" />
        <span className="text-[10px] font-semibold text-slate-900">Virtual tour ready</span>
      </div>
    </div>
  );
}

function FinanceMock() {
  return (
    <div className="mx-auto w-full max-w-md">
      <Window url="ledger.app/reports" dark>
        <div className="p-4">
          <p className="text-[9px] uppercase tracking-wider text-white/40">Consolidated revenue</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight text-white">4.2 Cr</span>
            <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-300">
              +18.4% YoY
            </span>
          </div>
          <div className="mt-3 rounded-lg border border-white/5 bg-white/[0.03] p-3">
            <svg viewBox="0 0 300 90" className="h-24 w-full">
              <defs>
                <linearGradient id="fin-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" x2="300" y1="22" y2="22" stroke="#f87171" strokeDasharray="3 4" strokeOpacity="0.5" />
              <path d="M0 70 C30 60 50 66 75 52 S120 58 150 44 S200 50 225 34 S270 30 300 18 L300 90 L0 90 Z" fill="url(#fin-fill)" />
              <path d="M0 70 C30 60 50 66 75 52 S120 58 150 44 S200 50 225 34 S270 30 300 18" fill="none" stroke="#a78bfa" strokeWidth="2" />
            </svg>
            <div className="mt-1 flex justify-between text-[8px] text-white/35">
              {['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
          <div className="mt-3 flex gap-1.5">
            {['INR', 'USD', 'EUR', 'GBP'].map((c, i) => (
              <span
                key={c}
                className={`rounded-md px-2 py-0.5 text-[8px] font-semibold ${i === 0 ? 'bg-white text-slate-900' : 'bg-white/5 text-white/50'}`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
}

function EducationMock() {
  const rows = [
    { w: 'w-4/5', grade: 'A' },
    { w: 'w-3/5', grade: 'B+' },
    { w: 'w-2/5', grade: '—' },
  ];
  return (
    <div className="mx-auto w-full max-w-md">
      <Window url="portal.school/assignments">
        <div className="flex">
          <div className="flex flex-col items-center gap-2.5 border-r border-slate-100 px-2.5 py-4">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-white">
              <BookOpen className="h-3 w-3" />
            </span>
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-5 w-5 rounded-md bg-slate-100" />
            ))}
          </div>
          <div className="flex-1 p-4">
            <p className="text-[11px] font-semibold text-slate-900">Assignments</p>
            <ul className="mt-3 space-y-3">
              {rows.map((r) => (
                <li key={r.w} className="flex items-center gap-3">
                  <span className="flex-1 space-y-1.5">
                    <Bar w="w-24" />
                    <span className="block h-1.5 rounded-full bg-slate-100">
                      <span className={`block h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 ${r.w}`} />
                    </span>
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-[9px] font-bold text-indigo-700">
                    {r.grade}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Window>
    </div>
  );
}

function DataMock() {
  const lines = [
    ['text-sky-300', '→ queue', 'scheduling 128 sources'],
    ['text-white/60', '  fetch', 'retail-catalog … 200 OK'],
    ['text-white/60', '  parse', 'products, prices, stock'],
    ['text-emerald-300', '✓ saved', '2,410 records → warehouse'],
  ];
  return (
    <div className="mx-auto w-full max-w-md">
      <Window url="scraper — worker-01" dark>
        <div className="space-y-1.5 p-4 font-mono text-[10px]">
          {lines.map(([tone, tag, text]) => (
            <p key={tag} className="flex gap-3">
              <span className={`w-14 shrink-0 ${tone}`}>{tag}</span>
              <span className="text-white/70">{text}</span>
            </p>
          ))}
          <div className="pt-2">
            <span className="block h-1.5 rounded-full bg-white/10">
              <span className="block h-1.5 w-3/4 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" />
            </span>
          </div>
        </div>
      </Window>
    </div>
  );
}

function LogisticsMock() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <Window url="fleet.app/live">
        <div className="relative h-44 bg-[linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:22px_22px]">
          <svg viewBox="0 0 300 160" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <path d="M20 140 C80 120 90 60 150 70 S230 30 280 20" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="6 6" />
          </svg>
          <span className="absolute left-[46%] top-[38%] flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg ring-4 ring-blue-600/20">
            <Truck className="h-3.5 w-3.5" />
          </span>
          <span className="absolute right-[5%] top-[6%] h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
        </div>
      </Window>
      <div className="absolute -bottom-5 left-4 hidden rounded-xl bg-white px-3 py-2 shadow-xl ring-1 ring-slate-900/5 sm:block">
        <p className="text-[9px] text-slate-400">Vehicle 14 · On route</p>
        <p className="text-xs font-semibold text-slate-900">ETA 14:20</p>
      </div>
    </div>
  );
}

function DesignMock() {
  const swatches = ['bg-blue-600', 'bg-indigo-400', 'bg-emerald-400', 'bg-amber-400', 'bg-slate-900'];
  return (
    <div className="mx-auto w-full max-w-md">
      <Window url="design / home — desktop">
        <div className="grid grid-cols-[4.5rem_minmax(0,1fr)_4.5rem] gap-0 bg-slate-50">
          <div className="space-y-1.5 border-r border-slate-200 bg-white p-2">
            <p className="text-[7px] font-semibold uppercase tracking-wider text-slate-400">Layers</p>
            {['Header', 'Hero', 'Cards', 'Footer'].map((layer, i) => (
              <p key={layer} className={`rounded px-1.5 py-0.5 text-[8px] ${i === 1 ? 'bg-blue-50 font-semibold text-blue-700' : 'text-slate-500'}`}>
                {layer}
              </p>
            ))}
          </div>
          <div className="p-3">
            <div className="rounded-md bg-white p-2.5 shadow-sm ring-2 ring-blue-500/70">
              <div className="h-12 rounded bg-gradient-to-br from-sky-200 via-indigo-200 to-violet-300" />
              <div className="mt-2 space-y-1">
                <Bar w="w-3/4" />
                <Bar w="w-1/2" />
              </div>
              <div className="mt-2 flex gap-1.5">
                <span className="h-3 w-10 rounded bg-blue-600" />
                <span className="h-3 w-10 rounded bg-slate-200" />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded bg-white p-1.5 shadow-sm ring-1 ring-slate-900/5">
                  <span className="block h-5 rounded-sm bg-slate-100" />
                  <span className="mt-1 block h-1 w-3/4 rounded-full bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2 border-l border-slate-200 bg-white p-2">
            <p className="text-[7px] font-semibold uppercase tracking-wider text-slate-400">Styles</p>
            <div className="flex flex-wrap gap-1">
              {swatches.map((c) => (
                <span key={c} className={`h-3.5 w-3.5 rounded-full ${c}`} />
              ))}
            </div>
            <p className="text-base font-semibold leading-none text-slate-800">Aa</p>
            <p className="text-[7px] text-slate-400">Inter · 16/24</p>
          </div>
        </div>
      </Window>
    </div>
  );
}

const MOCKS: Record<string, () => React.ReactElement> = {
  'ui-ux': DesignMock,
  healthcare: HealthcareMock,
  mobile: MobileMock,
  web: WebMock,
  finance: FinanceMock,
  education: EducationMock,
  data: DataMock,
  logistics: LogisticsMock,
};

