import tx from '@/content/text/app/expertise/firmware-development/page.json';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Cpu } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: tx.firmware_development,
  description:
    tx.reliable_efficient_and_secure_firmware,
  path: '/expertise/firmware-development',
});

export default function FirmwareDevelopmentPage() {
  const features = [
    {
      title: tx.real_time_systems,
      description: tx.development_of_real_time_firmware,
      icon: '⏱️'
    },
    {
      title: tx.driver_development,
      description: tx.low_level_drivers_for_sensors,
      icon: '🔌'
    },
    {
      title: tx.rtos_integration,
      description: tx.freertos_zephyr_rtos_and_other,
      icon: '⚙️'
    },
    {
      title: tx.bootloader_development,
      description: tx.custom_bootloaders_with_ota_updates,
      icon: '🚀'
    },
    {
      title: tx.security_implementation,
      description: tx.secure_boot_encryption_authentication_an,
      icon: '🔒'
    },
    {
      title: tx.performance_optimization,
      description: tx.code_optimization_for_speed_power,
      icon: '⚡'
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

  const firmwareTypes = [
    {
      title: tx.bare_metal_firmware,
      description: tx.direct_hardware_control_without_operatin,
      icon: '⚡',
      features: [tx.direct_hardware_access, tx.minimal_overhead, tx.fast_execution, tx.small_footprint],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: tx.rtos_based_firmware,
      description: tx.multi_tasking_firmware_with_real,
      icon: '🔄',
      features: [tx.multi_tasking, tx.priority_scheduling, tx.resource_management, tx.thread_safety],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: tx.linux_embedded,
      description: tx.linux_based_embedded_systems_for,
      icon: '🐧',
      features: [tx.rich_ecosystem, tx.networking_support, tx.file_systems, tx.process_management],
      color: 'from-green-500 to-green-600'
    },
    {
      title: tx.iot_firmware,
      description: tx.connected_device_firmware_with_cloud,
      icon: '🌐',
      features: [tx.wi_fi_ble_lora, tx.cloud_connectivity, tx.ota_updates, tx.power_optimization],
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: tx.requirements_analysis,
      description: tx.understanding_hardware_specifications_fu,
      duration: tx.t_1_week,
      icon: '📋'
    },
    {
      step: '02',
      title: tx.architecture_design,
      description: tx.designing_firmware_architecture_modules,
      duration: '1-2 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: tx.core_development,
      description: tx.implementing_firmware_core_functionality,
      duration: '4-8 weeks',
      icon: '⚙️'
    },
    {
      step: '04',
      title: tx.testing_debugging,
      description: tx.unit_testing_integration_testing_and,
      duration: '2-4 weeks',
      icon: '🔍'
    },
    {
      step: '05',
      title: tx.optimization_release,
      description: tx.performance_optimization_code_review_and,
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const capabilities = [
    { title: tx.languages, value: 'C, C++, Assembly, Rust', icon: '💻' },
    { title: tx.architectures, value: 'ARM, AVR, PIC, RISC-V, x86', icon: '🏗️' },
    { title: tx.communication, value: 'UART, SPI, I2C, CAN, USB, Ethernet', icon: '📡' },
    { title: tx.wireless, value: 'Wi-Fi, Bluetooth, LoRa, Zigbee, NFC', icon: '📶' },
    { title: 'RTOS', value: 'FreeRTOS, Zephyr, ThreadX, QNX', icon: '⚙️' },
    { title: tx.tools, value: 'GCC, IAR, Keil, JTAG, SWD', icon: '🔧' },
    { title: tx.testing, value: 'Unit tests, HIL, Logic analyzers', icon: '🧪' },
    { title: tx.security, value: 'Encryption, Secure boot, Authentication', icon: '🔒' }
  ];

  const expertiseAreas = [
    {
      title: tx.industrial_automation,
      description: tx.firmware_for_plcs_motor_controllers,
      icon: '🏭'
    },
    {
      title: tx.consumer_electronics,
      description: tx.smart_home_devices_wearables_and,
      icon: '📱'
    },
    {
      title: tx.automotive_systems,
      description: tx.ecu_firmware_can_bus_communication,
      icon: '🚗'
    },
    {
      title: tx.medical_devices,
      description: tx.regulated_firmware_for_patient_monitorin,
      icon: '🏥'
    },
    {
      title: tx.telecommunications,
      description: tx.network_equipment_modems_and_communicati,
      icon: '📡'
    },
    {
      title: tx.energy_management,
      description: tx.smart_meters_battery_management_systems,
      icon: '🔋'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow={tx.firmware_development_2}
        eyebrowIcon={Cpu}
        title={tx.expert_firmware_development}
        highlight={tx.embedded_software}
        description={tx.professional_firmware_development_servic}
        highlights={["Real-time Systems", "Driver Development", "RTOS Integration", "Bootloader Development"]}
        stats={[
          { value: COMPANY.foundingYear, label: tx.founded },
          { value: "1M+", label: tx.lines_of_code },
          { value: "99.9%", label: tx.reliability },
          { value: "6-12", label: tx.week_delivery },
        ]}
      />

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.firmware}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.capabilities}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                    <ServiceIcon emoji={feature.icon} size="none" className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
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

      {/* Firmware Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.firmware}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.types}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {firmwareTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center mb-6`}>
                    <ServiceIcon emoji={type.icon} size="none" className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.technical}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.expertise}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300">
                <ServiceIcon emoji={capability.icon} size="md" className="mb-3" />
                <h3 className="text-sm font-semibold text-purple-600 mb-2 uppercase tracking-wide">
                  {capability.title}
                </h3>
                <p className="text-sm font-medium text-slate-900">
                  {capability.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{tx.industry}{' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">{tx.expertise}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <ServiceIcon emoji={area.icon} size="lg" className="mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {area.description}
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
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-purple-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`}
                      loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors duration-200">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-purple-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={step.icon} size="none" className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-purple-600">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-purple-600 via-indigo-700 to-violet-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{tx.ready_to_develop}<span className="block text-purple-100 mt-2">{tx.professional_firmware}</span>
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed font-light">{tx.let_s_discuss_your_firmware}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">{tx.start_your_project}</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold text-lg">{tx.schedule_consultation}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
