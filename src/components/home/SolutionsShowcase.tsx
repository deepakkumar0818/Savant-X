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
  Wifi,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

type Item = { icon: LucideIcon; tile: string; title: string; body: string; href?: string };

const SOFTWARE: Item[] = [
  { icon: Code2, tile: 'from-blue-500 to-blue-600', title: 'Web & Mobile Development', body: 'Scalable web applications and mobile apps for Android and iOS.', href: '/expertise/web-apps' },
  { icon: Share2, tile: 'from-violet-500 to-purple-600', title: 'Zoho Integrations', body: 'Zoho CRM, Creator and Books setup, customisation and integrations.', href: '/expertise/zoho-integrations' },
  { icon: Cloud, tile: 'from-rose-500 to-pink-600', title: 'Cloud Applications', body: 'Cloud-based platforms for better scalability.' },
  { icon: Building2, tile: 'from-orange-400 to-amber-500', title: 'Enterprise Solutions', body: 'ERP, CRM and business software tailored to your industry.', href: '/products' },
  { icon: ShoppingCart, tile: 'from-emerald-500 to-green-600', title: 'E-commerce Solutions', body: 'Feature-rich online stores that drive growth.', href: '/expertise/ecommerce' },
  { icon: Settings, tile: 'from-indigo-500 to-blue-600', title: 'Custom Software', body: 'Tailored solutions for your unique challenges.', href: '/expertise/product-development' },
];

const HARDWARE: Item[] = [
  { icon: Cpu, tile: 'from-rose-500 to-pink-600', title: 'IoT & Embedded Systems', body: 'Smart, connected devices for real-time solutions.', href: '/expertise/iot-embedded-systems' },
  { icon: Radio, tile: 'from-emerald-500 to-green-600', title: 'Sensor Integration', body: 'Accurate data collection for varied environments.' },
  { icon: Cog, tile: 'from-orange-400 to-amber-500', title: 'PCB Design & Prototyping', body: 'Custom PCB design and hardware prototyping.', href: '/expertise/pcb-design' },
  { icon: Wifi, tile: 'from-violet-500 to-purple-600', title: 'Industrial Automation', body: 'Reliable hardware for automation and control.' },
  { icon: Box, tile: 'from-sky-500 to-blue-600', title: 'Firmware Development', body: 'Optimised and reliable firmware.', href: '/expertise/firmware-development' },
  { icon: Settings, tile: 'from-pink-500 to-rose-600', title: 'Custom Hardware', body: 'Tailored hardware for special requirements.', href: '/expertise/hardware-electronics' },
];

const INTEGRATION: Item[] = [
  { icon: Plug, tile: 'bg-violet-50 text-violet-600', title: 'Third-party Integrations', body: 'Connect your existing tools and systems.' },
  { icon: Workflow, tile: 'bg-orange-50 text-orange-500', title: 'Business Process Automation', body: 'Automate workflows for better efficiency.' },
  { icon: BarChart3, tile: 'bg-emerald-50 text-emerald-600', title: 'Consulting & Implementation', body: 'Expert guidance from planning to deployment.' },
  { icon: Headphones, tile: 'bg-sky-50 text-sky-600', title: 'Ongoing Support', body: 'Reliable support to keep operations smooth.' },
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
    { pos: 'left-[12%] top-[6%]', node: <Image src="/images/zoho-crm.webp" alt="" width={28} height={28} className="h-7 w-7 object-contain" /> },
    { pos: 'right-[16%] top-0', node: <Image src="/images/zohoBooks.png" alt="" width={28} height={28} className="h-7 w-7 object-contain" /> },
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
        <article className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#f5f3ff_0%,#eef2ff_45%,#f8fafc_100%)] p-6 ring-1 ring-indigo-100 shadow-[0_30px_70px_-45px_rgba(79,70,229,0.5)] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="relative z-10 max-w-sm sm:max-w-[58%] xl:max-w-[60%]">
              <p className="inline-flex rounded-full border border-violet-300 bg-white/70 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
                Software solutions
              </p>
              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900">
                Build smarter{' '}
                <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">digital experiences</span>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Modern web and mobile applications, business platforms and enterprise software tailored to your goals.
              </p>
              <Link
                href="/expertise/what-we-do"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110"
              >
                Explore software solutions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="hidden sm:block">
              <CardArt src="/images/home/software-solutions.webp" />
            </div>
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {SOFTWARE.map((item) => (
              <li key={item.title}>
                <ServiceTile item={item} hover="group-hover:text-indigo-700" />
              </li>
            ))}
          </ul>
        </article>

        {/* Hardware */}
        <article className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#fff7ed_0%,#fff1f2_50%,#fffbf5_100%)] p-6 ring-1 ring-orange-200/70 shadow-[0_30px_70px_-45px_rgba(234,88,12,0.45)] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="relative z-10 max-w-sm sm:max-w-[58%] xl:max-w-[60%]">
              <p className="inline-flex rounded-full border border-orange-300 bg-white/70 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-orange-700">
                Hardware solutions
              </p>
              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900">
                Innovative hardware{' '}
                <span className="block">
                  for{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">real-world impact</span>
                </span>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                From IoT devices to embedded systems, we design and develop reliable hardware solutions for diverse industries.
              </p>
              <Link
                href="/expertise/hardware-electronics"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-110"
              >
                Explore hardware solutions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="hidden sm:block">
              <CardArt src="/images/home/hardware-solutions.webp" />
            </div>
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
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
          <p className="inline-flex rounded-full border border-emerald-300 bg-white/70 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            Integration &amp; consulting
          </p>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Connect. <span className="text-blue-600">Automate.</span> <span className="text-emerald-600">Grow.</span>
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Seamless integration, expert consulting and automation to streamline your business operations.
          </p>
          <Link
            href="/expertise/zoho-integrations"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
          >
            Explore integration &amp; consulting
            <ArrowRight className="h-4 w-4" aria-hidden />
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
