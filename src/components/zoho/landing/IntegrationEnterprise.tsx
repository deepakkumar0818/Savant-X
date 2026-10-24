import tx from '@/content/text/components/zoho/landing/IntegrationEnterprise.json';
import Image from 'next/image';
import { ArrowRight, Check, ChevronRight, Cloud, Globe, Share2, type LucideIcon } from 'lucide-react';
import SelectServiceLink from './SelectServiceLink';
import { ENTERPRISE, INTEGRATION, ZOHO_LOGOS } from './data';

type HubNode = { label: string; logo?: string; icon?: LucideIcon };

// 3 x 3 grid around the Zoho hub, read left to right, top to bottom (centre cell skipped).
const HUB_NODES: HubNode[] = [
  { label: 'CRM', logo: ZOHO_LOGOS['Zoho CRM'] },
  { label: tx.books, logo: ZOHO_LOGOS['Zoho Books'] },
  { label: tx.creator, logo: ZOHO_LOGOS['Zoho Creator'] },
  { label: tx.inventory, logo: ZOHO_LOGOS['Zoho Inventory'] },
  { label: tx.desk, logo: ZOHO_LOGOS['Zoho Desk'] },
  { label: tx.your_website, icon: Globe },
  { label: tx.external_apps, icon: Cloud },
  { label: tx.apis_webhooks, icon: Share2 },
];
const CELL_CENTRES = [16.7, 50, 83.3];

function IntegrationHub() {
  const cells: (HubNode | 'hub')[] = [...HUB_NODES.slice(0, 4), 'hub', ...HUB_NODES.slice(4)];
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[19rem]">
      <svg className="absolute inset-0 h-full w-full text-indigo-300" preserveAspectRatio="none">
        {cells.map((cell, i) =>
          cell === 'hub' ? null : (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${CELL_CENTRES[i % 3]}%`}
              y2={`${CELL_CENTRES[Math.floor(i / 3)]}%`}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />
          ),
        )}
      </svg>
      <div className="relative grid h-full grid-cols-3 grid-rows-3 gap-3">
        {cells.map((cell) =>
          cell === 'hub' ? (
            <div
              key="hub"
              className="flex flex-col items-center justify-center rounded-2xl bg-white shadow-[0_20px_45px_-15px_rgba(79,70,229,0.55)] ring-1 ring-indigo-100"
            >
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">{tx.zoho}</span>
              <span className="mt-0.5 text-[10px] font-medium text-slate-500">{tx.your_hub}</span>
            </div>
          ) : (
            <div
              key={cell.label}
              className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-white/90 p-1.5 text-center shadow-[0_12px_30px_-15px_rgba(30,58,138,0.4)] ring-1 ring-slate-200/80 backdrop-blur"
            >
              {cell.logo ? (
                <Image src={cell.logo} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
              ) : (
                cell.icon && <cell.icon className="h-7 w-7 text-indigo-600" strokeWidth={1.75} />
              )}
              <span className="text-[10px] font-semibold leading-tight text-slate-700">{cell.label}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

const FLOATING_APPS = ['Zoho Books', 'Zoho Inventory', 'Zoho Desk'];

function OperationsDashboard() {
  return (
    <div aria-hidden className="relative mx-auto h-64 w-full max-w-[20rem]">
      <div className="absolute left-0 top-0 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-lg">
        <Image src={ZOHO_LOGOS['Zoho CRM']!} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />{tx.zoho_crm}</div>
      <div className="absolute right-0 top-2 z-10 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-lg">
        <Image src={ZOHO_LOGOS['Zoho Creator']!} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />{tx.zoho_creator}</div>

      <div className="absolute bottom-0 left-0 right-14 top-12 -rotate-2 overflow-hidden rounded-xl bg-[#111733] ring-1 ring-indigo-400/30 shadow-[0_30px_60px_-20px_rgba(79,70,229,0.6)]">
        <div className="flex h-full">
          <div className="w-8 space-y-2 border-r border-white/10 p-2">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className="block h-1 rounded-full bg-white/25" />
            ))}
          </div>
          <div className="flex-1 p-3">
            <p className="text-[9px] font-semibold text-white/80">{tx.operations_dashboard}</p>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {['Sales orders', 'Production', 'Inventory'].map((label) => (
                <div key={label} className="rounded-md bg-white/5 p-1.5 ring-1 ring-white/10">
                  <p className="text-[7px] text-white/50">{label}</p>
                  <span className="mt-1 block h-1.5 w-2/3 rounded-full bg-white/40" />
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-[1.4fr_1fr] gap-1.5">
              <div className="flex h-14 items-end gap-1 rounded-md bg-white/5 p-1.5 ring-1 ring-white/10">
                {[40, 65, 50, 85, 60, 75, 95].map((h, i) => (
                  <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-indigo-500 to-fuchsia-400" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex h-14 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                <span className="h-9 w-9 rounded-full border-[5px] border-indigo-400 border-r-orange-400 border-t-fuchsia-400" />
              </div>
            </div>
            <svg viewBox="0 0 100 30" className="mt-1.5 h-10 w-full rounded-md bg-white/5" preserveAspectRatio="none">
              <path d="M0 26 L15 20 L30 22 L45 14 L60 17 L75 8 L100 4 L100 30 L0 30 Z" className="fill-indigo-500/40" />
              <path d="M0 26 L15 20 L30 22 L45 14 L60 17 L75 8 L100 4" className="fill-none stroke-indigo-300" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-16 flex flex-col gap-2">
        {FLOATING_APPS.map((app) => (
          <div key={app} className="flex w-28 items-center gap-2 rounded-xl bg-white px-2.5 py-2 text-[11px] font-semibold leading-tight text-slate-900 shadow-lg">
            <Image src={ZOHO_LOGOS[app]!} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
            {app}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemSolution({ problem, solution, dark = false }: { problem: string; solution: string; dark?: boolean }) {
  const dt = `font-semibold ${dark ? 'text-white' : 'text-slate-900'}`;
  const dd = dark ? 'mt-1 text-slate-300' : 'mt-1 text-slate-600';
  return (
    <dl className="mt-8 grid gap-5 text-sm leading-relaxed sm:grid-cols-2 sm:gap-8 sm:text-[15px]">
      <div>
        <dt className={dt}>{tx.the_problem}</dt>
        <dd className={dd}>{problem}</dd>
      </div>
      <div>
        <dt className={dt}>{tx.what_we_do}</dt>
        <dd className={dd}>{solution}</dd>
      </div>
    </dl>
  );
}

/** Integration service and enterprise Zoho solutions, side by side. */
export default function IntegrationEnterprise() {
  return (
    <section aria-label={tx.integrations_and_enterprise_solutions} className="px-6 pt-12 sm:px-8 lg:px-12 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-5 xl:grid-cols-2">
        {/* Integrations */}
        <article className="zoho-reveal relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(160deg,#ffffff_0%,#eef2ff_50%,#dbeafe_100%)] p-7 ring-1 ring-slate-200/80 shadow-[0_30px_70px_-45px_rgba(30,58,138,0.5)] sm:p-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_17rem] md:items-center xl:grid-cols-[minmax(0,1fr)_15rem] 2xl:grid-cols-[minmax(0,1fr)_17rem]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{tx.business_automation_integrations}</p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight xl:text-[1.75rem] 2xl:text-3xl text-slate-900">{tx.connect_zoho_to_the_systems}{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">{tx.you_already_use}</span>
              </h3>
              <p className="mt-4 text-slate-600">{tx.starting_at}{" "}<span className="font-bold text-slate-900">{INTEGRATION.price}</span>{" "}{tx.before_applicable_taxes}</p>
              </div>
            <IntegrationHub />
          </div>
          <ProblemSolution problem={INTEGRATION.problem} solution={INTEGRATION.solution} />

          <ul className="mt-8 flex flex-wrap gap-2" aria-label={tx.integration_options}>
            {INTEGRATION.nodes.map((node) => (
              <li key={node} className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                {node}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-9">
            <SelectServiceLink
              service="automation-integrations"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:text-base"
            >{tx.plan_an_integration}<ArrowRight className="h-4 w-4" aria-hidden />
            </SelectServiceLink>
            <a href="#use-cases" className="inline-flex items-center gap-1 py-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800">{tx.view_integration_examples}<ChevronRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </article>

        {/* Enterprise */}
        <article className="zoho-reveal relative flex flex-col overflow-hidden rounded-3xl bg-[#080b1f] p-7 text-white shadow-[0_30px_70px_-40px_rgba(30,27,75,0.9)] sm:p-10">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_100%_0%,rgba(79,70,229,0.35),transparent_70%),radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(30,64,175,0.35),transparent_70%)]"
          />
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_17rem] md:items-center xl:grid-cols-[minmax(0,1fr)_15rem] 2xl:grid-cols-[minmax(0,1fr)_17rem]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">{tx.enterprise_zoho_solutions}</p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight xl:text-[1.75rem] 2xl:text-3xl">{tx.one_zoho_system_for}{' '}
                <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">{tx.complex_operations}</span>
              </h3>
              <p className="mt-4 text-slate-300">{tx.custom_quotation_based_on_agreed}</p>
              </div>
            <OperationsDashboard />
          </div>
          <div className="relative">
            <ProblemSolution dark problem={ENTERPRISE.problem} solution={ENTERPRISE.solution} />
          </div>

          <ul className="relative mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {ENTERPRISE.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-slate-100 sm:text-[15px]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                  <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="relative mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-9">
            <SelectServiceLink
              service="enterprise"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 sm:text-base"
            >{tx.discuss_your_enterprise_project}<ArrowRight className="h-4 w-4" aria-hidden />
            </SelectServiceLink>
            <a href="#why" className="inline-flex items-center gap-1 py-2 text-sm font-semibold text-white hover:text-indigo-200">{tx.view_our_approach}<ChevronRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
