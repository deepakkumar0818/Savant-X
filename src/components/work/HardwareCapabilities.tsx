import tx from '@/content/text/components/work/HardwareCapabilities.json';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Binary, CircuitBoard, Cpu, Package, Printer, type LucideIcon } from 'lucide-react';

const CAPABILITIES: { title: string; description: string; href: string; icon: LucideIcon }[] = [
  {
    title: tx.iot_embedded_systems,
    description: tx.smart_connected_devices_and_embedded,
    href: '/expertise/iot-embedded-systems',
    icon: Cpu,
  },
  {
    title: tx.pcb_design_layout,
    description: tx.custom_circuit_board_design_and,
    href: '/expertise/pcb-design',
    icon: CircuitBoard,
  },
  {
    title: tx.firmware_development,
    description: tx.low_level_software_for_microcontrollers,
    href: '/expertise/firmware-development',
    icon: Binary,
  },
  {
    title: tx.product_development,
    description: tx.from_concept_and_prototype_to,
    href: '/expertise/product-development',
    icon: Package,
  },
  {
    title: tx.t_3d_printing_design,
    description: tx.t_3d_models_enclosures_and_visualisations,
    href: '/expertise/3d-designing',
    icon: Printer,
  },
];

const TOOLS = ['KiCAD', 'Altium', 'DipTrace', 'SolidWorks', 'Fusion 360', 'Arduino', 'Raspberry Pi', 'ARM Cortex', 'FreeRTOS', 'C/C++'];

/** Work page: the hardware and electronics side of what we build. */
export default function HardwareCapabilities() {
  return (
    <section id="hardware" aria-labelledby="hardware-heading" className="scroll-mt-24 px-6 pt-20 sm:px-8 lg:px-12 lg:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">{tx.hardware_electronics}</p>
            <h2 id="hardware-heading" className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-4xl">{tx.we_engineer_the_hardware_too}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500">{tx.beyond_software_we_design_and}</p>
          </div>
          <Link
            href="/expertise/hardware-electronics"
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 sm:self-auto"
          >{tx.explore_hardware_services}<ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-white to-violet-50 p-6 ring-1 ring-orange-100">
            <Image
              src="/images/home/hardware-solutions.webp"
              alt={tx.illustration_of_connected_hardware_an}
              width={640}
              height={640}
              sizes="(min-width: 1024px) 420px, 90vw"
              className="mx-auto w-full max-w-sm flex-1 object-contain"
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{tx.tools_we_work_with}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <li key={tool} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map(({ title, description, href, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/10 hover:ring-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-orange-600" aria-hidden />
                  </span>
                  <span className="mt-4 text-base font-semibold text-slate-900">{title}</span>
                  <span className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="flex h-full flex-col justify-between rounded-2xl bg-slate-900 p-5 text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <span className="text-base font-semibold">{tx.have_a_hardware_idea}</span>
                <span className="mt-1.5 text-sm leading-relaxed text-slate-300">{tx.tell_us_what_you_want}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-300">{tx.talk_to_our_engineers}<ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
