import tx from '@/content/text/components/home/SolutionsShowcase.json';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Box,
  Building2,
  Cloud,
  Code2,
  Cog,
  Cpu,
  Database,
  Headphones,
  Plug,
  Radio,
  Settings,
  Share2,
  ShoppingCart,
  Printer,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

type Item = { icon: LucideIcon; tile: string; title: string; body: string; href?: string };

const SOFTWARE: Item[] = [
  { icon: Code2, tile: 'from-blue-500 to-blue-600', title: tx.web_mobile_development, body: tx.scalable_web_apps_and_mobile, href: '/expertise/web-apps' },
  { icon: Share2, tile: 'from-violet-500 to-purple-600', title: tx.zoho_integrations, body: tx.zoho_crm_creator_and_books, href: '/expertise/zoho-integrations' },
  { icon: Cloud, tile: 'from-rose-500 to-pink-600', title: tx.cloud_applications, body: tx.cloud_based_platforms_for_better },
  { icon: Building2, tile: 'from-orange-400 to-amber-500', title: tx.enterprise_solutions, body: tx.erp_crm_and_business_software, href: '/products' },
  { icon: ShoppingCart, tile: 'from-emerald-500 to-green-600', title: tx.e_commerce_solutions, body: tx.feature_rich_online_stores_that, href: '/expertise/ecommerce' },
  { icon: Settings, tile: 'from-indigo-500 to-blue-600', title: tx.custom_software, body: tx.tailored_solutions_for_your_unique, href: '/expertise/product-development' },
];

const HARDWARE: Item[] = [
  { icon: Cpu, tile: 'from-rose-500 to-pink-600', title: tx.iot_embedded_systems, body: tx.smart_connected_devices_for_real, href: '/expertise/iot-embedded-systems' },
  { icon: Radio, tile: 'from-emerald-500 to-green-600', title: tx.sensor_integration, body: tx.accurate_data_collection_for_varied },
  { icon: Cog, tile: 'from-orange-400 to-amber-500', title: tx.pcb_design_prototyping, body: tx.custom_pcb_design_and_hardware, href: '/expertise/pcb-design' },
  { icon: Printer, tile: 'from-violet-500 to-purple-600', title: tx.t_3d_printing_designing, body: tx.t_3d_design_modelling_and_printed, href: '/expertise/3d-designing' },
  { icon: Box, tile: 'from-sky-500 to-blue-600', title: tx.firmware_development, body: tx.optimised_and_reliable_firmware, href: '/expertise/firmware-development' },
  { icon: Settings, tile: 'from-pink-500 to-rose-600', title: tx.custom_hardware, body: tx.tailored_hardware_for_special_requiremen, href: '/expertise/hardware-electronics' },
];

const INTEGRATION: Item[] = [
  { icon: Plug, tile: 'bg-violet-50 text-violet-600', title: tx.third_party_integrations, body: tx.connect_your_existing_tools_and },
  { icon: Workflow, tile: 'bg-orange-50 text-orange-500', title: tx.business_process_automation, body: tx.automate_workflows_for_better_efficiency },
  { icon: BarChart3, tile: 'bg-emerald-50 text-emerald-600', title: tx.consulting_implementation, body: tx.expert_guidance_from_planning_to },
  { icon: Headphones, tile: 'bg-sky-50 text-sky-600', title: tx.ongoing_support, body: tx.reliable_support_to_keep_operations },
];

function ServiceTile({ item, hover }: { item: Item; hover: string }) {
  const Icon = item.icon;
  const body = (
    <>
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${item.tile}`}>
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className={`block text-[15px] font-semibold text-slate-900 transition-colors ${hover}`}>{item.title}</span>
        <span className="mt-0.5 block text-[13px] leading-snug text-slate-500">{item.body}</span>
      </span>
    </>
  );
  const className =
    'group flex h-full items-start gap-3.5 rounded-2xl bg-white/90 p-4 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.25)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-20px_rgba(15,23,42,0.35)] motion-reduce:hover:translate-y-0';
  return item.href ? (
    <Link href={item.href} className={className}>
      {body}
    </Link>
  ) : (
    <div className={className}>{body}</div>
  );
}

function CardArt({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={640}
      height={640}
      sizes="18rem"
      className="pointer-events-none absolute -right-8 -top-6 h-60 w-60 object-contain mix-blend-multiply [mask-image:radial-gradient(circle_at_50%_50%,#000_55%,transparent_72%)] xl:-right-4 xl:h-72 xl:w-72"
    />
  );
}

/** Cloud hub with connected systems for the integration card. */
function IntegrationArt() {
  const nodes: { pos: string; node: React.ReactNode }[] = [
    { pos: 'left-[12%] top-[6%]', node: <Image src="/images/zoho/apps/crm.webp" alt="" width={28} height={28} className="h-7 w-7 object-contain" /> },
    { pos: 'right-[16%] top-0', node: <Image src="/images/zoho/apps/books.webp" alt="" width={28} height={28} className="h-7 w-7 object-contain" /> },
    { pos: 'left-0 top-[42%]', node: <Code2 className="h-6 w-6 text-blue-600" /> },
    { pos: 'right-0 top-[38%]', node: <Share2 className="h-6 w-6 text-emerald-600" /> },
    { pos: 'bottom-0 left-[18%]', node: <Database className="h-6 w-6 text-indigo-500" /> },
    { pos: 'bottom-[4%] right-[20%]', node: <Cloud className="h-6 w-6 text-sky-500" /> },
  ];
  return (
    <div aria-hidden className="relative mx-auto h-64 w-full max-w-sm">
      <svg className="absolute inset-0 h-full w-full text-sky-300" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
          [22, 14],
          [76, 10],
          [8, 50],
          [92, 46],
          [26, 92],
          [72, 88],
        ].map(([x, y]) => (
          <line key={`${x}-${y}`} x1="50" y1="52" x2={x} y2={y} stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 2" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-28 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[3rem] bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-500 text-white shadow-[0_25px_50px_-15px_rgba(59,130,246,0.7)]">
        <Cloud className="absolute h-24 w-24 text-white/25" strokeWidth={1.5} />
        <Workflow className="relative h-10 w-10" />
      </div>
      {nodes.map(({ pos, node }) => (
        <span key={pos} className={`absolute ${pos} flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg ring-1 ring-slate-100`}>
          {node}
        </span>
      ))}
    </div>
  );
}

/** Home page solutions overview: software, hardware, and integration & consulting. */
export default function SolutionsShowcase() {
  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Software */}
        <article className="relative flex flex-col overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#f5f3ff_0%,#eef2ff_45%,#f8fafc_100%)] p-6 ring-1 ring-indigo-100 shadow-[0_30px_70px_-45px_rgba(79,70,229,0.5)] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="relative z-10 max-w-sm sm:max-w-[58%] xl:max-w-[60%]">
              <p className="inline-flex rounded-full border border-violet-300 bg-white/70 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-violet-700">{tx.software_solutions}</p>
              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900">{tx.build_smarter}{' '}
                <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">{tx.digital_experiences}</span>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{tx.modern_web_and_mobile_applications}</p>
            </div>
            <div className="hidden sm:block">
              <CardArt src="/images/home/software-solutions.webp" />
            </div>
          </div>
          <ul className="mt-7 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
            {SOFTWARE.map((item) => (
              <li key={item.title}>
                <ServiceTile item={item} hover="group-hover:text-indigo-700" />
              </li>
            ))}
          </ul>
        </article>

        {/* Hardware */}
        <article className="relative flex flex-col overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#fff7ed_0%,#fff1f2_50%,#fffbf5_100%)] p-6 ring-1 ring-orange-200/70 shadow-[0_30px_70px_-45px_rgba(234,88,12,0.45)] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="relative z-10 max-w-sm sm:max-w-[58%] xl:max-w-[60%]">
              <p className="inline-flex rounded-full border border-orange-300 bg-white/70 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-orange-700">{tx.hardware_solutions}</p>
              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900">{tx.innovative_hardware}{' '}
                <span className="block">{tx.for}{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">{tx.real_world_impact}</span>
                </span>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{tx.from_iot_devices_to_embedded}</p>
            </div>
            <div className="hidden sm:block">
              <CardArt src="/images/home/hardware-solutions.webp" />
            </div>
          </div>
          <ul className="mt-7 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
            {HARDWARE.map((item) => (
              <li key={item.title}>
                <ServiceTile item={item} hover="group-hover:text-orange-600" />
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Integration & consulting */}
      <article className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#f0fdf4_0%,#f0f9ff_50%,#f5f3ff_100%)] p-6 ring-1 ring-emerald-100 shadow-[0_30px_70px_-45px_rgba(16,185,129,0.45)] sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
        <div>
          <p className="inline-flex rounded-full border border-emerald-300 bg-white/70 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">{tx.integration_consulting}</p>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{tx.connect}{" "}<span className="text-blue-600">{tx.automate}</span> <span className="text-emerald-600">{tx.grow}</span>
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{tx.seamless_integration_expert_consulting_a}</p>
          <Link
            href="/expertise/zoho-integrations"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
          >{tx.explore_integration_consulting}<ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <IntegrationArt />

        <ul className="space-y-4">
          {INTEGRATION.map(({ icon: Icon, tile, title, body }) => (
            <li key={title} className="flex items-start gap-3.5">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tile}`}>
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-[15px] font-semibold text-slate-900">{title}</span>
                <span className="block text-[13px] text-slate-500">{body}</span>
              </span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
