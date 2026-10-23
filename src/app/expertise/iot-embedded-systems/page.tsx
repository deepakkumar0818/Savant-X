import tx from '@/content/text/app/expertise/iot-embedded-systems/page.json';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Radio } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.iot_embedded_systems,
  description:
    tx.connected_iot_devices_and_embedded,
  path: '/expertise/iot-embedded-systems',
});

export default function IotEmbeddedSystemsPage() {
  const features = [
    {
      title: tx.smart_sensors_integration,
      description: tx.connect_and_manage_various_sensors,
      icon: '📡'
    },
    {
      title: tx.wireless_connectivity,
      description: tx.wi_fi_bluetooth_lora_and,
      icon: '📶'
    },
    {
      title: tx.cloud_integration,
      description: tx.seamless_integration_with_aws_iot,
      icon: '☁️'
    },
    {
      title: tx.real_time_processing,
      description: tx.edge_computing_capabilities_for_instant,
      icon: '⚡'
    },
    {
      title: tx.power_management,
      description: tx.optimized_power_consumption_for_battery,
      icon: '🔋'
    },
    {
      title: tx.secure_protocols,
      description: tx.end_to_end_encryption_secure,
      icon: '🔒'
    }
  ];

  const technologies = [
    { name: 'ESP32', icon: '/images/icons/esp32_1.jpeg', description: tx.wi_fi_ble_microcontroller },
    { name: tx.arduino, icon: '/images/icons/ardunio1.png', description: tx.development_platform },
    { name: 'STM32', icon: '/images/icons/stm32.jpeg', description: tx.arm_cortex_mcu },
    { name: tx.raspberry_pi, icon: '/images/icons/raspberrypi.jpeg', description: tx.single_board_computer },
    { name: tx.pic_avr, icon: '/images/icons/AVR.png', description: tx.microcontrollers },
    { name: tx.freertos, icon: '/images/icons/freeRtos.jpeg', description: tx.real_time_os },
    { name: tx.zephyr_rtos, icon: '/images/icons/Zephyr.jpeg', description: tx.scalable_rtos },
    { name: tx.aws_iot, icon: '/images/icons/AwsIot.jpeg', description: tx.cloud_iot_platform }
  ];

  const processSteps = [
    {
      step: '01',
      title: tx.requirements_analysis,
      description: tx.understanding_your_iot_solution_needs,
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: tx.architecture_design,
      description: tx.designing_system_architecture_communicat,
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: tx.development_integration,
      description: tx.building_firmware_integrating_sensors_an,
      duration: '4-6 weeks',
      icon: '⚙️'
    },
    {
      step: '04',
      title: tx.testing_security,
      description: tx.comprehensive_testing_including_security,
      duration: '2-3 weeks',
      icon: '🔒'
    },
    {
      step: '05',
      title: tx.deployment_support,
      description: tx.device_deployment_monitoring_setup_and,
      duration: tx.ongoing,
      icon: '🚀'
    }
  ];

  const useCases = [
    {
      title: tx.smart_home_automation,
      description: tx.connected_lighting_climate_control_secur,
      icon: '🏠',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: tx.industrial_iot,
      description: tx.equipment_monitoring_predictive_maintena,
      icon: '🏭',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: tx.agriculture_tech,
      description: tx.soil_monitoring_irrigation_control_and,
      icon: '🌾',
      color: 'from-green-500 to-green-600'
    },
    {
      title: tx.healthcare_devices,
      description: tx.patient_monitoring_wearable_health_track,
      icon: '🏥',
      color: 'from-red-500 to-red-600'
    },
    {
      title: tx.smart_cities,
      description: tx.traffic_management_waste_management_and,
      icon: '🌆',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: tx.asset_tracking,
      description: tx.gps_tracking_fleet_management_and,
      icon: '📦',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.iot_embedded_systems_2}
        eyebrowIcon={Radio}
        title={tx.smart_connected_devices}
        highlight={tx.embedded_systems}
        description={tx.we_design_and_develop_intelligent}
        highlights={["Smart Sensors Integration", "Wireless Connectivity", "Cloud Integration", "Real-time Processing"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "100K+", label: tx.devices_deployed },
          { value: "99.9%", label: tx.uptime },
          { value: "24/7", label: tx.monitoring },
        ]}
      />

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.core}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.capabilities}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.comprehensive_iot_and_embedded_systems}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
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

      {/* Use Cases */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.industry}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.applications}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.iot_solutions_tailored_for_various}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4`}>
                    <ServiceIcon emoji={useCase.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {useCase.description}
                  </p>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.technology}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.stack}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.industry_leading_platforms_and_tools}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`}
                      loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.development}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.process}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">{tx.our_proven_5_step_process}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-blue-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-blue-600">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_build_your}<span className="block text-blue-100 mt-2">{tx.iot_solution}</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_iot}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_your_project}</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">{tx.schedule_consultation}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
