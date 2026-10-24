import tx from '@/content/text/app/expertise/hardware-electronics/page.json';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  CalendarDays,
  CircleCheck,
  CirclePlay,
  CircuitBoard,
  ClipboardList,
  Cloud,
  Cpu,
  Factory,
  FlaskConical,
  Layers,
  PenTool,
  ShieldCheck,
  Smartphone,
  Timer,
  Tv,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/Footer';
import SectionHeading, { GRADIENT_TEXT } from '@/components/expertise/SectionHeading';
import { COMPANY, COMPANY_METRICS } from '@/lib/company';

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  tools: string[];
  price: string;
  timeline: string;
  href: string;
  image: { src: string; alt: string; width: number; height: number; blend?: boolean };
};

const SERVICES: Service[] = [
  {
    title: tx.iot_embedded_systems,
    description: tx.smart_connected_devices_and_embedded,
    icon: Wifi,
    features: [tx.smart_sensors, tx.wireless_connectivity, tx.edge_computing, tx.secure_protocols],
    tools: ['ESP32', tx.arduino, 'STM32', tx.raspberry_pi],
    price: '₹3,999',
    timeline: '6-12 weeks',
    href: '/expertise/iot-embedded-systems',
    image: { src: '/images/hardware/iot-gateway.webp', alt: tx.iot_gateway_with_two_antennas, width: 720, height: 782 },
  },
  {
    title: tx.pcb_design_layout,
    description: tx.custom_printed_circuit_board_design,
    icon: CircuitBoard,
    features: [tx.custom_pcb_layout, tx.multi_layer_boards, tx.signal_integrity, tx.high_speed_design],
    tools: [tx.kicad, tx.altium, tx.diptrace],
    price: '₹25,999',
    timeline: '4-8 weeks',
    href: '/expertise/pcb-design',
    image: { src: '/images/hardware/pcb-board.webp', alt: tx.two_stacked_green_printed_circuit, width: 800, height: 670, blend: true },
  },
  {
    title: tx.product_development,
    description: tx.end_to_end_product_development,
    icon: PenTool,
    features: [tx.concept_design, tx.prototyping, tx.testing_validation, tx.production_support],
    tools: [tx.solidworks, tx.fusion_360, 'CAD'],
    price: '₹39,999',
    timeline: '8-16 weeks',
    href: '/expertise/product-development',
    image: { src: '/images/hardware/product-enclosure.webp', alt: tx.white_plastic_device_enclosure, width: 640, height: 790 },
  },
  {
    title: tx.firmware_development,
    description: tx.low_level_software_development_for,
    icon: Cpu,
    features: [tx.real_time_systems, tx.driver_development, tx.security_features, tx.performance_optimization],
    tools: [tx.c_c, tx.assembly, tx.freertos],
    price: '₹19,999',
    timeline: '6-12 weeks',
    href: '/expertise/firmware-development',
    image: { src: '/images/hardware/stm32-chip.webp', alt: tx.stm32_microcontroller_chip, width: 720, height: 584 },
  },
];

const APPLICATIONS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: tx.industrial_automation, description: tx.custom_hardware_for_industrial_applicati, icon: Factory },
  { title: tx.consumer_electronics, description: tx.reliable_and_well_designed_consumer, icon: Tv },
  { title: tx.smart_devices, description: tx.connected_iot_devices_for_homes, icon: Smartphone },
  { title: tx.research_prototyping, description: tx.from_idea_to_a_working, icon: FlaskConical },
];

const STRENGTHS = [tx.end_to_end_development, tx.firmware_pcb_and_enclosure, tx.support_from_prototype_to_production, tx.production_ready_documentation];

const TECHNOLOGIES: { name: string; description: string; icon?: string; mark?: React.ReactNode }[] = [
  { name: 'ESP32', description: tx.iot_microcontroller, icon: '/images/icons/esp32_1.jpeg' },
  { name: tx.arduino_2, description: tx.development_platform, icon: '/images/icons/ardunio1.png' },
  { name: 'STM32', description: tx.arm_cortex_mcu, icon: '/images/icons/stm32.jpeg' },
  { name: tx.raspberry_pi_2, description: tx.single_board_computer, icon: '/images/icons/raspberrypi.jpeg' },
  { name: tx.kicad_2, description: tx.pcb_design_tool, icon: '/images/icons/kicad1.png' },
  {
    name: tx.altium_2,
    description: tx.pcb_design_suite,
    mark: <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#a5915f] text-lg font-bold text-white">{tx.a}</span>,
  },
  { name: tx.diptrace_2, description: tx.pcb_layout_software, icon: '/images/icons/Diptrace.jpeg' },
  { name: tx.solidworks_2, description: tx.t_3d_cad_software, icon: '/images/icons/SolidWorks.png' },
  {
    name: tx.fusion_360_2,
    description: tx.t_3d_cad_and_cam,
    mark: <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f26b1d] text-lg font-bold text-white">{tx.f}</span>,
  },
  { name: tx.freertos_2, description: tx.real_time_os, icon: '/images/icons/freeRtos.jpeg' },
];

const PROCESS: { step: string; title: string; description: string; duration: string; icon: LucideIcon }[] = [
  { step: '01', title: tx.requirements_analysis, description: tx.understanding_your_hardware_specificatio, duration: '1-2 weeks', icon: ClipboardList },
  { step: '02', title: tx.design_schematic, description: tx.creating_circuit_diagrams_pcb_layouts, duration: '2-4 weeks', icon: PenTool },
  { step: '03', title: tx.prototyping_2, description: tx.building_and_testing_initial_prototypes, duration: '2-4 weeks', icon: Wrench },
  { step: '04', title: tx.testing_validation_2, description: tx.comprehensive_testing_including_emc_safe, duration: '2-3 weeks', icon: FlaskConical },
  { step: '05', title: tx.production_support_2, description: tx.manufacturing_support_and_certification, duration: '2-4 weeks', icon: Factory },
];

const REASONS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: tx.custom_pcb_design, description: tx.tailored_printed_circuit_board_designs, icon: CircuitBoard },
  { title: tx.iot_integration, description: tx.seamless_connectivity_with_cloud_platfor, icon: Cloud },
  { title: tx.firmware_development_2, description: tx.robust_efficient_firmware_for_microcontr, icon: Cpu },
  { title: tx.rapid_prototyping, description: tx.fast_iteration_cycles_to_validate, icon: Zap },
  { title: tx.certification_support, description: tx.assistance_with_fcc_ce_and, icon: ShieldCheck },
  { title: tx.manufacturing_ready, description: tx.production_ready_designs_with_complete, icon: Layers },
];

export default function HardwareElectronicsPage() {
  const projectsMetric = COMPANY_METRICS[0];
  const stats: { value: string; label: string; icon: LucideIcon }[] = [
    { value: String(COMPANY.foundingYear), label: tx.founded, icon: CalendarDays },
    { value: `${projectsMetric.value}${projectsMetric.suffix}`, label: projectsMetric.label, icon: Award },
    { value: '24/7', label: tx.support, icon: ShieldCheck },
    { value: '6-16 Weeks', label: tx.typical_delivery, icon: Timer },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f5ff] via-white to-[#ecebff] px-6 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-indigo-200/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm ring-1 ring-indigo-100">
              <CircuitBoard className="h-3.5 w-3.5" aria-hidden />{tx.hardware_electronics}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[2.9rem] xl:text-[3.2rem]">{tx.electronics_hardware}{" "}<span className={`block ${GRADIENT_TEXT}`}>{tx.development}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{tx.we_design_and_develop_custom}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110"
              >{tx.start_a_project}<ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:text-indigo-700 hover:ring-indigo-300"
              >
                <CirclePlay className="h-4 w-4" aria-hidden />{tx.view_our_work}</Link>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-8">
              {stats.map(({ value, label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon className="h-6 w-6 shrink-0 text-indigo-600" strokeWidth={1.75} aria-hidden />
                  <span>
                    <span className="block text-base font-bold text-slate-900">{value}</span>
                    <span className="block text-xs text-slate-500">{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/hardware/hero-electronics.webp"
            alt={tx.circuit_board_iot_gateway_and}
            width={1400}
            height={933}
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="w-full mix-blend-multiply [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_55%,transparent_100%)]"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={tx.our_solutions}
            title={tx.hardware_development}
            highlight={tx.services}
            description={tx.from_circuit_design_to_firmware}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {SERVICES.map(({ title, description, icon: Icon, features, tools, price, timeline, href, image }) => (
              <article
                key={title}
                className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(79,70,229,0.35)] sm:flex-row sm:p-7"
              >
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CircleCheck className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ul className="mb-6 mt-5 flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <li key={tool} className="rounded-lg bg-indigo-50/70 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-slate-100 pt-5">
                    <p>
                      <span className="block text-xs text-slate-500">{tx.starting_at}</span>
                      <span className="block text-xl font-bold text-slate-900">{price}</span>
                    </p>
                    <p>
                      <span className="block text-xs text-slate-500">{tx.timeline}</span>
                      <span className="block text-sm font-semibold text-slate-900">{timeline}</span>
                    </p>
                    <Link href={href} className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800">{tx.learn_more}<ArrowRight className="h-4 w-4" aria-hidden />
                      <span className="sr-only">{tx.about}{" "}{title}</span>
                    </Link>
                  </div>
                </div>
                <div className="order-first flex items-center justify-center sm:order-none sm:w-[38%] sm:shrink-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 35vw, 70vw"
                    className={`max-h-44 w-auto object-contain sm:max-h-56 ${image.blend ? 'mix-blend-multiply' : 'drop-shadow-[0_18px_24px_rgba(15,23,42,0.18)]'}`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About our work */}
      <section className="bg-gradient-to-br from-[#f4f5ff] via-white to-[#efeefe] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-indigo-100">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />{tx.about_our_work}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{tx.building_smarter}{" "}<span className={`block ${GRADIENT_TEXT}`}>{tx.hardware_solutions}</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">{tx.we_combine_electronics_firmware_and}</p>
            <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
              {STRENGTHS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110"
            >{tx.talk_to_an_expert}<ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <Image
            src="/images/hardware/exploded-device.webp"
            alt={tx.exploded_view_of_a_device}
            width={792}
            height={1310}
            sizes="(min-width: 1024px) 26vw, 60vw"
            className="mx-auto max-h-[28rem] w-auto drop-shadow-[0_24px_30px_rgba(15,23,42,0.2)]"
          />
          <ul className="grid grid-cols-2 gap-4">
            {APPLICATIONS.map(({ title, description, icon: Icon }) => (
              <li key={title} className="rounded-2xl bg-white/80 p-5 ring-1 ring-indigo-100 backdrop-blur">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={tx.technology_stack}
            title={tx.hardware}
            highlight={tx.technologies}
            description={tx.we_use_industry_leading_tools}
          />
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {TECHNOLOGIES.map(({ name, description, icon, mark }) => (
              <li key={name} className="flex flex-col items-center rounded-2xl bg-white px-3 py-5 text-center ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="flex h-12 items-center justify-center">
                  {icon ? <Image src={icon} alt="" width={96} height={48} className="h-11 w-24 object-contain" /> : mark}
                </span>
                <span className="mt-3 text-sm font-bold text-slate-900">{name}</span>
                <span className="mt-0.5 text-xs text-slate-500">{description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50/70 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={tx.our_process}
            title={tx.how_we_develop}
            highlight={tx.hardware_products}
            description={tx.our_proven_5_step_process}
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {PROCESS.map(({ step, title, description, duration, icon: Icon }, i) => (
              <li key={step} className="relative flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-[0_12px_40px_-24px_rgba(15,23,42,0.3)] ring-1 ring-slate-200/80">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-indigo-600">{tx.step}{" "}{step}</span>
                <h3 className="mt-1 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                <p className="mt-auto pt-4 text-xs font-semibold text-slate-700">{duration}</p>
                {i < PROCESS.length - 1 && (
                  <ArrowRight className="absolute -right-6 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-indigo-500 lg:block" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={tx.key_benefits}
            title={tx.why_choose}
            highlight={tx.savantx}
            description={tx.we_deliver_more_than_hardware}
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ title, description, icon: Icon }) => (
              <li key={title} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200/80 transition hover:shadow-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-900">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-500">{description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
          <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <Image
            src="/images/hardware/stm32-chip.webp"
            alt=""
            width={720}
            height={584}
            sizes="320px"
            className="pointer-events-none absolute -bottom-10 -right-10 hidden w-80 rotate-12 opacity-25 lg:block"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <p className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/60">{tx.let_s_build_together}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{tx.ready_to_build_your_hardware}</h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-indigo-100">{tx.let_s_discuss_your_requirements}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:mr-24">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
              >{tx.start_your_project}<ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/70 transition hover:bg-white/10"
              >{tx.schedule_consultation}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
