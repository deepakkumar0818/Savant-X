'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-200">
              <span className="text-lg">⚙️</span>
              Firmware Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Expert Firmware Development &
              <span className="block text-purple-600 mt-2">Embedded Software</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Professional firmware development services for microcontrollers and embedded systems. 
              We create reliable, efficient, and secure firmware that powers your hardware products.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Firmware Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">1M+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Lines of Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 mb-2">99.9%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fuchsia-600 mb-2">6-12</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Firmware
              <span className="block text-purple-600 mt-2">Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <span className="text-2xl">{feature.icon}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Firmware
              <span className="block text-purple-600 mt-2">Types</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {firmwareTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="text-3xl">{type.icon}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Technical
              <span className="block text-purple-600 mt-2">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300">
                <div className="text-2xl mb-3">{capability.icon}</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Industry
              <span className="block text-purple-600 mt-2">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{area.icon}</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Technology
              <span className="block text-purple-600 mt-2">Stack</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Development
              <span className="block text-purple-600 mt-2">Process</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                      <span className="text-2xl">{step.icon}</span>
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
            <Link href="/contact">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold text-lg">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

