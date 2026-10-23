import tx from '@/content/text/app/expertise/product-development/page.json';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Package } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.product_development_engineering,
  description:
    tx.end_to_end_hardware_product,
  path: '/expertise/product-development',
});

export default function ProductDevelopmentPage() {
  const features = [
    {
      title: tx.concept_design,
      description: tx.transform_your_ideas_into_detailed,
      icon: '💡'
    },
    {
      title: tx.industrial_design,
      description: tx.create_attractive_and_functional_product,
      icon: '🎨'
    },
    {
      title: tx.prototyping,
      description: tx.rapid_prototyping_using_3d_printing,
      icon: '🔧'
    },
    {
      title: tx.engineering_analysis,
      description: tx.fea_thermal_analysis_and_simulation,
      icon: '📊'
    },
    {
      title: tx.manufacturing_support,
      description: tx.dfm_analysis_tooling_design_and,
      icon: '🏭'
    },
    {
      title: tx.certification_assistance,
      description: tx.help_with_fcc_ce_ul,
      icon: '✅'
    }
  ];

  const technologies = [
    { name: tx.solidworks, icon: '/images/icons/SolidWorks.png', description: tx.t_3d_cad_software },
    { name: tx.kicad, icon: '/images/icons/kicad1.png', description: tx.pcb_design_tool },
    { name: tx.diptrace, icon: '/images/icons/Diptrace.jpeg', description: tx.pcb_layout_software },
    { name: 'ESP32', icon: '/images/icons/esp32_1.jpeg', description: tx.iot_microcontroller },
    { name: tx.arduino, icon: '/images/icons/ardunio1.png', description: tx.development_platform },
    { name: 'STM32', icon: '/images/icons/stm32.jpeg', description: tx.arm_cortex_mcu },
    { name: tx.raspberry_pi, icon: '/images/icons/raspberrypi.jpeg', description: tx.single_board_computer },
    { name: tx.freertos, icon: '/images/icons/freeRtos.jpeg', description: tx.real_time_os }
  ];

  const developmentPhases = [
    {
      title: tx.discovery_ideation,
      description: tx.market_research_user_needs_analysis,
      icon: '🔍',
      duration: '2-4 weeks',
      deliverables: [tx.market_analysis, tx.user_personas, tx.concept_sketches, tx.feasibility_study],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: tx.design_engineering,
      description: tx.detailed_product_design_cad_modeling,
      icon: '📐',
      duration: '4-8 weeks',
      deliverables: [tx.t_3d_cad_models, tx.technical_drawings, 'BOM', tx.specifications],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: tx.prototyping_testing,
      description: tx.building_functional_prototypes_and_condu,
      icon: '🔬',
      duration: '4-6 weeks',
      deliverables: [tx.working_prototypes, tx.test_reports, tx.design_iterations, tx.validation],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: tx.manufacturing_preparation,
      description: tx.production_planning_tooling_design_and,
      icon: '🏭',
      duration: '3-6 weeks',
      deliverables: [tx.manufacturing_files, tx.assembly_instructions, tx.quality_plans, tx.tooling_design],
      color: 'from-green-500 to-green-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: tx.discovery,
      description: tx.understanding_your_product_vision_market,
      duration: '1-2 weeks',
      icon: '🎯'
    },
    {
      step: '02',
      title: tx.concept_design_2,
      description: tx.creating_multiple_design_concepts_with,
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: tx.detailed_design,
      description: tx.finalizing_design_with_complete_cad,
      duration: '4-6 weeks',
      icon: '📐'
    },
    {
      step: '04',
      title: tx.prototyping_2,
      description: tx.building_and_testing_functional_prototyp,
      duration: '4-8 weeks',
      icon: '🔧'
    },
    {
      step: '05',
      title: tx.production,
      description: tx.manufacturing_setup_tooling_and_pilot,
      duration: '6-12 weeks',
      icon: '🏭'
    }
  ];

  const productTypes = [
    { 
      title: tx.consumer_electronics, 
      icon: '📱', 
      description: tx.smart_devices_wearables_and_connected,
      examples: [tx.smart_home_devices, tx.wearable_tech, tx.audio_equipment, tx.mobile_accessories]
    },
    { 
      title: tx.industrial_equipment, 
      icon: '🏭', 
      description: tx.industrial_automation_monitoring_and_con,
      examples: [tx.sensor_systems, tx.control_panels, tx.monitoring_devices, tx.automation_tools]
    },
    { 
      title: tx.medical_devices, 
      icon: '🏥', 
      description: tx.healthcare_and_medical_product_developme,
      examples: [tx.patient_monitors, tx.diagnostic_tools, tx.therapy_devices, tx.lab_equipment]
    },
    { 
      title: tx.iot_products, 
      icon: '🌐', 
      description: tx.internet_connected_devices_and_smart,
      examples: [tx.smart_sensors, tx.connected_appliances, tx.tracking_devices, tx.environmental_monitors]
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.product_development}
        eyebrowIcon={Package}
        title={tx.end_to_end_product_development}
        highlight={tx.engineering_services}
        description={tx.from_concept_to_manufacturing_we}
        highlights={["Concept Design", "Industrial Design", "Prototyping", "Engineering Analysis"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "95%", label: tx.success_rate },
          { value: "8-16", label: tx.week_delivery },
        ]}
      />

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.product_development}<span className="block text-orange-600 mt-2">{tx.services}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-orange-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
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

      {/* Development Phases */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.development}<span className="block text-orange-600 mt-2">{tx.phases}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-orange-200/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center mb-6`}>
                    <ServiceIcon emoji={phase.icon} size="none" className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {phase.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  <div className="text-sm font-semibold text-orange-600 mb-4">{tx.timeline}{" "}{phase.duration}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-700">{tx.key_deliverables}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{deliverable}</span>
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

      {/* Product Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.product}<span className="block text-orange-600 mt-2">{tx.categories}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-orange-200/50 transition-all duration-300 h-full">
                  <ServiceIcon emoji={type.icon} size="lg" className="mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                        <span className="text-xs text-slate-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.development}<span className="block text-orange-600 mt-2">{tx.tools}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-orange-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`}
                      loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors duration-200">
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.development}<span className="block text-orange-600 mt-2">{tx.process}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-orange-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-orange-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-orange-600">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-orange-600 via-amber-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_develop_your}<span className="block text-orange-100 mt-2">{tx.next_product}</span>
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_product}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_your_project}</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-200 font-semibold text-lg">{tx.schedule_consultation}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
