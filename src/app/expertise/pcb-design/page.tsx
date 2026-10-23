import tx from '@/content/text/app/expertise/pcb-design/page.json';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { CircuitBoard } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.pcb_design_layout,
  description:
    tx.production_ready_pcb_design_and,
  path: '/expertise/pcb-design',
});

export default function PcbDesignPage() {
  const features = [
    {
      title: tx.custom_pcb_layout,
      description: tx.tailored_circuit_board_designs_optimized,
      icon: '🔧'
    },
    {
      title: tx.multi_layer_boards,
      description: tx.complex_multi_layer_pcb_designs,
      icon: '📐'
    },
    {
      title: tx.signal_integrity,
      description: tx.high_speed_pcb_design_with,
      icon: '⚡'
    },
    {
      title: tx.thermal_management,
      description: tx.optimized_thermal_design_for_heat,
      icon: '🌡️'
    },
    {
      title: tx.t_3d_visualization,
      description: tx.t_3d_pcb_models_and_mechanical,
      icon: '📦'
    },
    {
      title: tx.dfm_analysis,
      description: tx.design_for_manufacturing_checks_to,
      icon: '✅'
    }
  ];

  const technologies = [
    { name: tx.kicad, icon: '/images/icons/kicad1.png', description: tx.open_source_pcb_tool },
    { name: tx.diptrace, icon: '/images/icons/Diptrace.jpeg', description: tx.pcb_layout_software },
    { name: tx.solidworks, icon: '/images/icons/SolidWorks.png', description: tx.t_3d_mechanical_design },
    { name: tx.arduino, icon: '/images/icons/ardunio1.png', description: tx.development_platform },
    { name: 'ESP32', icon: '/images/icons/esp32_1.jpeg', description: tx.iot_microcontroller },
    { name: 'STM32', icon: '/images/icons/stm32.jpeg', description: tx.arm_cortex_mcu },
    { name: tx.raspberry_pi, icon: '/images/icons/raspberrypi.jpeg', description: tx.single_board_computer },
    { name: 'AVR', icon: '/images/icons/AVR.png', description: tx.microcontrollers }
  ];

  const pcbTypes = [
    {
      title: tx.single_double_layer_pcbs,
      description: tx.simple_and_cost_effective_pcb,
      icon: '📄',
      features: [tx.quick_turnaround, tx.low_cost, tx.simple_routing, tx.prototype_friendly],
      color: 'from-green-500 to-green-600'
    },
    {
      title: tx.multi_layer_pcbs,
      description: tx.complex_pcb_designs_with_multiple,
      icon: '📚',
      features: ['4-16+ layers', tx.high_speed_design, tx.complex_routing, tx.industrial_grade],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: tx.flex_rigid_flex_pcbs,
      description: tx.flexible_and_rigid_flex_pcb,
      icon: '🌊',
      features: [tx.bendable_circuits, tx.space_saving, tx.wearable_devices, tx.medical_applications],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: tx.high_speed_pcbs,
      description: tx.specialized_designs_for_high_frequency,
      icon: '⚡',
      features: [tx.impedance_control, tx.signal_integrity_2, tx.low_crosstalk, tx.rf_applications],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: tx.schematic_design,
      description: tx.creating_detailed_circuit_schematics_wit,
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: tx.pcb_layout,
      description: tx.translating_schematics_into_optimized_pc,
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: tx.design_verification,
      description: tx.drc_erc_checks_signal_integrity,
      duration: tx.t_1_week,
      icon: '✅'
    },
    {
      step: '04',
      title: tx.gerber_generation,
      description: tx.creating_manufacturing_files_including_g,
      duration: '2-3 days',
      icon: '📁'
    },
    {
      step: '05',
      title: tx.manufacturing_support,
      description: tx.assisting_with_pcb_fabrication_assembly,
      duration: tx.ongoing,
      icon: '🏭'
    }
  ];

  const capabilities = [
    { title: tx.board_size, value: 'Up to 1000mm x 500mm' },
    { title: tx.layer_count, value: 'Up to 16+ layers' },
    { title: tx.min_trace_width, value: '3 mil (0.075mm)' },
    { title: tx.min_via_size, value: '8 mil (0.2mm)' },
    { title: tx.surface_finish, value: 'HASL, ENIG, OSP, Immersion Silver' },
    { title: tx.copper_weight, value: '0.5 - 3 oz' },
    { title: tx.solder_mask, value: 'Green, Black, White, Red, Blue, Yellow' },
    { title: tx.silkscreen, value: 'White, Black' }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.pcb_design_layout_2}
        eyebrowIcon={CircuitBoard}
        title={tx.professional_pcb_design}
        highlight={tx.circuit_board_layout}
        description={tx.custom_printed_circuit_board_design}
        highlights={["Custom PCB Layout", "Multi-layer Boards", "Signal Integrity", "Thermal Management"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "16+", label: tx.layer_capability },
          { value: "98%", label: tx.first_pass_yield },
          { value: "2-4", label: tx.week_turnaround },
        ]}
      />

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.pcb_design}<span className="block text-green-600 mt-2">{tx.capabilities}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-green-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PCB Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.pcb}<span className="block text-green-600 mt-2">{tx.types_solutions}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pcbTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-green-200/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center mb-6`}>
                    <ServiceIcon emoji={type.icon} size="none" className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.technical}<span className="block text-green-600 mt-2">{tx.specifications}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-green-200/50 transition-all duration-300">
                <h3 className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">
                  {capability.title}
                </h3>
                <p className="text-lg font-bold text-slate-900">
                  {capability.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.design}<span className="block text-green-600 mt-2">{tx.tools}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-green-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`}
                      loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.design}<span className="block text-green-600 mt-2">{tx.process}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-green-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-green-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-green-600">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_design_your}<span className="block text-green-100 mt-2">{tx.custom_pcb}</span>
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_pcb}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_your_project}</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-200 font-semibold text-lg">{tx.request_quote}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
