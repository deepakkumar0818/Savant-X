'use client';

import tx from '@/content/text/app/expertise/hardware-electronics/page.json';
import { useState } from 'react';
import { COMPANY } from '@/lib/company';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { CircuitBoard } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export default function HardwareElectronicsPage() {
  const [activePlatform, setActivePlatform] = useState('iot');

  const hardwareTypes = [
    {
      id: 'iot',
      title: tx.iot_embedded_systems,
      icon: '🌐',
      description: tx.smart_connected_devices_and_embedded,
      features: [tx.smart_sensors, tx.wireless_connectivity, tx.power_management, tx.secure_protocols, tx.real_time_processing, tx.edge_computing],
      pricing: tx.starting_at_8_000,
      timeline: '6-12 weeks',
      platforms: ['ESP32', tx.arduino, 'STM32']
    },
    {
      id: 'pcb',
      title: tx.pcb_design_layout,
      icon: '🔧',
      description: tx.custom_printed_circuit_board_design,
      features: [tx.custom_pcb_layout, tx.signal_integrity, tx.thermal_management, tx.t_3d_modeling, tx.multi_layer_boards, tx.high_speed_design],
      pricing: tx.starting_at_5_000,
      timeline: '4-8 weeks',
      platforms: [tx.kicad, tx.diptrace, tx.altium]
    },
    {
      id: 'product',
      title: tx.product_development,
      icon: '🚀',
      description: tx.end_to_end_product_development,
      features: [tx.concept_design, tx.prototyping, tx.manufacturing, tx.testing_validation, tx.certification, tx.production_support],
      pricing: tx.starting_at_15_000,
      timeline: '8-16 weeks',
      platforms: [tx.solidworks, tx.fusion_360, 'CAD']
    },
    {
      id: 'firmware',
      title: tx.firmware_development,
      icon: '⚙️',
      description: tx.low_level_software_development_for,
      features: [tx.real_time_systems, tx.driver_development, tx.security_features, tx.performance_optimization, 'RTOS', tx.bootloader],
      pricing: tx.starting_at_10_000,
      timeline: '6-12 weeks',
      platforms: [tx.c_c, tx.assembly, tx.freertos]
    }
  ];

  const technologies = [
    { name: 'ESP32', icon: '/images/icons/esp32_1.jpeg', description: tx.iot_microcontroller, category: 'Hardware' },
    { name: tx.arduino_2, icon: '/images/icons/ardunio1.png', description: tx.development_platform, category: 'Hardware' },
    { name: 'STM32', icon: '/images/icons/stm32.jpeg', description: tx.arm_cortex_mcu, category: 'Hardware' },
    { name: tx.kicad_2, icon: '/images/icons/kicad1.png', description: tx.pcb_design_tool, category: 'PCB Design' },
    { name: tx.diptrace_2, icon: '/images/icons/Diptrace.jpeg', description: tx.pcb_layout_software, category: 'PCB Design' },
    { name: tx.solidworks_2, icon: '/images/icons/SolidWorks.png', description: tx.t_3d_cad_software, category: 'CAD' },
    { name: tx.raspberry_pi, icon: '🥧', description: tx.single_board_computer, category: 'Hardware' },
    { name: tx.freertos_2, icon: '⚡', description: tx.real_time_os, category: 'Firmware' }
  ];

  const platforms = [
    {
      id: 'iot',
      name: tx.iot_solutions,
      icon: '🌐',
      description: tx.connected_devices_and_smart_systems,
      features: [tx.wi_fi_bluetooth, tx.cloud_integration, tx.sensor_networks, tx.remote_monitoring, tx.data_analytics, tx.low_power],
      stats: { projects: '50+', devices: tx.t_10k, uptime: '99.9%' }
    },
    {
      id: 'embedded',
      name: tx.embedded_systems,
      icon: '🔌',
      description: tx.specialized_computing_systems_for_specif,
      features: [tx.real_time_processing_2, tx.hardware_integration, tx.custom_protocols, tx.firmware_development_2, tx.system_optimization, tx.testing],
      stats: { projects: '40+', products: tx.t_8k, reliability: '99.5%' }
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: tx.requirements_analysis,
      description: tx.understanding_your_hardware_specificatio,
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: tx.design_schematic,
      description: tx.creating_circuit_diagrams_pcb_layouts,
      duration: '2-4 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: tx.prototyping_2,
      description: tx.building_and_testing_initial_prototypes,
      duration: '2-4 weeks',
      icon: '🔧'
    },
    {
      step: '04',
      title: tx.testing_validation_2,
      description: tx.comprehensive_testing_including_emc_safe,
      duration: '2-3 weeks',
      icon: '🧪'
    },
    {
      step: '05',
      title: tx.production_support_2,
      description: tx.manufacturing_support_and_certification,
      duration: '2-4 weeks',
      icon: '🏭'
    }
  ];

  const features = [
    {
      title: tx.custom_pcb_design,
      description: tx.tailored_printed_circuit_board_designs,
      icon: '🔧'
    },
    {
      title: tx.iot_integration,
      description: tx.seamless_connectivity_with_cloud_platfor,
      icon: '🌐'
    },
    {
      title: tx.firmware_development_3,
      description: tx.robust_efficient_firmware_for_microcontr,
      icon: '⚙️'
    },
    {
      title: tx.rapid_prototyping,
      description: tx.fast_iteration_cycles_to_validate,
      icon: '⚡'
    },
    {
      title: tx.certification_support,
      description: tx.assistance_with_fcc_ce_and,
      icon: '✅'
    },
    {
      title: tx.manufacturing_ready,
      description: tx.production_ready_designs_with_complete,
      icon: '🏭'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.hardware_electronics}
        eyebrowIcon={CircuitBoard}
        title={tx.electronics}
        highlight={tx.hardware_development}
        description={tx.we_design_and_develop_custom}
        highlights={["IoT & Embedded Systems", "PCB Design & Layout", "Product Development", "Firmware Development"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "6-16", label: tx.week_delivery },
          { value: "24/7", label: tx.support },
        ]}
      />

      {/* Hardware Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_solutions}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.hardware}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.development_services}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.from_circuit_design_to_firmware}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardwareTypes.map((type) => (
              <div key={type.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={type.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                        {type.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {type.platforms.map((platform, platformIndex) => (
                      <span key={platformIndex} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-lg text-sm font-medium border border-cyan-200/50">
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <div className="text-lg font-bold text-cyan-600 mb-1">{type.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.starting_price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{type.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{tx.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Tabs */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.specializations}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.iot_embedded}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.systems}</span>
            </h2>
          </div>

          {/* Platform Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white border border-slate-200 rounded-xl p-1">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setActivePlatform(platform.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activePlatform === platform.id
                      ? 'bg-cyan-600 text-white shadow-lg'
                      : 'text-slate-700 hover:bg-cyan-50'
                  }`}
                >
                  <ServiceIcon emoji={platform.icon} size="none" className="mr-2" />
                  {platform.name}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <div key={platform.id} className={`transition-all duration-300 ${activePlatform === platform.id ? 'opacity-100' : 'opacity-50'}`}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                  {/* Platform Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center">
                      <ServiceIcon emoji={platform.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{platform.name}</h3>
                      <p className="text-slate-600">{platform.description}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-600 mb-1">{platform.stats.projects || platform.stats.devices}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">{platform.stats.projects ? tx.projects : tx.devices}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 mb-1">{platform.stats.devices || platform.stats.products}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">{platform.stats.devices ? tx.devices : tx.products}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600 mb-1">{platform.stats.uptime || platform.stats.reliability}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">{platform.stats.uptime ? tx.uptime : tx.reliability}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">{tx.key_features}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.technology_stack}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.hardware}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.technologies}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.we_use_industry_leading_tools}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-cyan-200/50 transition-all duration-300 group-hover:scale-105">
                  {typeof tech.icon === 'string' && tech.icon.startsWith('/') ? (
                    <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                      <img 
                        src={tech.icon} 
                        alt={`${tech.name} icon`}
                        loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ) : (
                    <ServiceIcon emoji={tech.icon} size="lg" className="mb-3" />
                  )}
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{tech.description}</p>
                  <span className="inline-block px-2 py-1 bg-cyan-50 text-cyan-700 rounded text-xs font-medium">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.key_features}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.why_choose_our}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.hardware_services}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
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

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>{tx.our_process}</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.how_we_develop}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.hardware_products}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_proven_5_step_process}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-cyan-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-cyan-600">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build_your}<span className="block text-cyan-100 mt-2">{tx.hardware_product}</span>
          </h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_hardware}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-cyan-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_your_project}</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-200 font-semibold text-lg">{tx.schedule_consultation}</Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-200 font-semibold text-lg">{tx.view_portfolio}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

