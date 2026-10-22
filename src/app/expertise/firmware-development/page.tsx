import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/company';
import PageHero from '@/components/hero/PageHero';
import { Cpu } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export const metadata: Metadata = pageMetadata({
  title: 'Firmware Development',
  description:
    'Reliable, efficient and secure firmware for microcontrollers and embedded systems.',
  path: '/expertise/firmware-development',
});

export default function FirmwareDevelopmentPage() {
  const features = [
    {
      title: 'Real-time Systems',
      description: 'Development of real-time firmware with deterministic behavior and precise timing control.',
      icon: '⏱️'
    },
    {
      title: 'Driver Development',
      description: 'Low-level drivers for sensors, communication interfaces, and peripheral devices.',
      icon: '🔌'
    },
    {
      title: 'RTOS Integration',
      description: 'FreeRTOS, Zephyr RTOS, and other real-time operating system implementations.',
      icon: '⚙️'
    },
    {
      title: 'Bootloader Development',
      description: 'Custom bootloaders with OTA updates and secure boot functionality.',
      icon: '🚀'
    },
    {
      title: 'Security Implementation',
      description: 'Secure boot, encryption, authentication, and secure communication protocols.',
      icon: '🔒'
    },
    {
      title: 'Performance Optimization',
      description: 'Code optimization for speed, power consumption, and memory efficiency.',
      icon: '⚡'
    }
  ];

  const technologies = [
    { name: 'ESP32', icon: '/images/icons/esp32_1.jpeg', description: 'Wi-Fi/BLE microcontroller' },
    { name: 'Arduino', icon: '/images/icons/ardunio1.png', description: 'Development platform' },
    { name: 'STM32', icon: '/images/icons/stm32.jpeg', description: 'ARM Cortex MCU' },
    { name: 'Raspberry Pi', icon: '/images/icons/raspberrypi.jpeg', description: 'Single-board computer' },
    { name: 'PIC/AVR', icon: '/images/icons/AVR.png', description: 'Microcontrollers' },
    { name: 'FreeRTOS', icon: '/images/icons/freeRtos.jpeg', description: 'Real-time OS' },
    { name: 'Zephyr RTOS', icon: '/images/icons/Zephyr.jpeg', description: 'Scalable RTOS' },
    { name: 'AWS IoT', icon: '/images/icons/AwsIot.jpeg', description: 'Cloud IoT platform' }
  ];

  const firmwareTypes = [
    {
      title: 'Bare-metal Firmware',
      description: 'Direct hardware control without operating system overhead for maximum performance.',
      icon: '⚡',
      features: ['Direct hardware access', 'Minimal overhead', 'Fast execution', 'Small footprint'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'RTOS-based Firmware',
      description: 'Multi-tasking firmware with real-time operating system for complex applications.',
      icon: '🔄',
      features: ['Multi-tasking', 'Priority scheduling', 'Resource management', 'Thread safety'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Linux Embedded',
      description: 'Linux-based embedded systems for high-level functionality and connectivity.',
      icon: '🐧',
      features: ['Rich ecosystem', 'Networking support', 'File systems', 'Process management'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'IoT Firmware',
      description: 'Connected device firmware with cloud integration and wireless protocols.',
      icon: '🌐',
      features: ['Wi-Fi/BLE/LoRa', 'Cloud connectivity', 'OTA updates', 'Power optimization'],
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understanding hardware specifications, functional requirements, and constraints.',
      duration: '1 week',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Designing firmware architecture, modules, and data flow.',
      duration: '1-2 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Core Development',
      description: 'Implementing firmware core functionality and hardware drivers.',
      duration: '4-8 weeks',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Testing & Debugging',
      description: 'Unit testing, integration testing, and hardware-in-the-loop testing.',
      duration: '2-4 weeks',
      icon: '🔍'
    },
    {
      step: '05',
      title: 'Optimization & Release',
      description: 'Performance optimization, code review, and production release.',
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const capabilities = [
    { title: 'Languages', value: 'C, C++, Assembly, Rust', icon: '💻' },
    { title: 'Architectures', value: 'ARM, AVR, PIC, RISC-V, x86', icon: '🏗️' },
    { title: 'Communication', value: 'UART, SPI, I2C, CAN, USB, Ethernet', icon: '📡' },
    { title: 'Wireless', value: 'Wi-Fi, Bluetooth, LoRa, Zigbee, NFC', icon: '📶' },
    { title: 'RTOS', value: 'FreeRTOS, Zephyr, ThreadX, QNX', icon: '⚙️' },
    { title: 'Tools', value: 'GCC, IAR, Keil, JTAG, SWD', icon: '🔧' },
    { title: 'Testing', value: 'Unit tests, HIL, Logic analyzers', icon: '🧪' },
    { title: 'Security', value: 'Encryption, Secure boot, Authentication', icon: '🔒' }
  ];

  const expertiseAreas = [
    {
      title: 'Industrial Automation',
      description: 'Firmware for PLCs, motor controllers, and industrial sensors.',
      icon: '🏭'
    },
    {
      title: 'Consumer Electronics',
      description: 'Smart home devices, wearables, and connected appliances.',
      icon: '📱'
    },
    {
      title: 'Automotive Systems',
      description: 'ECU firmware, CAN bus communication, and vehicle diagnostics.',
      icon: '🚗'
    },
    {
      title: 'Medical Devices',
      description: 'Regulated firmware for patient monitoring and diagnostic equipment.',
      icon: '🏥'
    },
    {
      title: 'Telecommunications',
      description: 'Network equipment, modems, and communication devices.',
      icon: '📡'
    },
    {
      title: 'Energy Management',
      description: 'Smart meters, battery management systems, and power electronics.',
      icon: '🔋'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Firmware Development"
        eyebrowIcon={Cpu}
        title="Expert Firmware Development &"
        highlight="Embedded Software"
        description="Professional firmware development services for microcontrollers and embedded systems. We create reliable, efficient, and secure firmware that powers your hardware products."
        highlights={["Real-time Systems", "Driver Development", "RTOS Integration", "Bootloader Development"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "1M+", label: "Lines of Code" },
          { value: "99.9%", label: "Reliability" },
          { value: "6-12", label: "Week Delivery" },
        ]}
      />

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Firmware
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Capabilities</span>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Firmware
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Types</span>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Technical
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Expertise</span>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Industry
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Expertise</span>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Technology
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Stack</span>
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
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Development
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Process</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Develop
            <span className="block text-purple-100 mt-2">Professional Firmware?</span>
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your firmware requirements and create reliable embedded software for your hardware products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project
              </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold text-lg">
                Schedule Consultation
              </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
