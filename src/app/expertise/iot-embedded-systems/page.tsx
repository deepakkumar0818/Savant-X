'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';

export default function IotEmbeddedSystemsPage() {
  const features = [
    {
      title: 'Smart Sensors Integration',
      description: 'Connect and manage various sensors for temperature, humidity, motion, and environmental monitoring.',
      icon: '📡'
    },
    {
      title: 'Wireless Connectivity',
      description: 'Wi-Fi, Bluetooth, LoRa, and cellular connectivity options for seamless communication.',
      icon: '📶'
    },
    {
      title: 'Cloud Integration',
      description: 'Seamless integration with AWS IoT, Google Cloud IoT, and Azure IoT platforms.',
      icon: '☁️'
    },
    {
      title: 'Real-time Processing',
      description: 'Edge computing capabilities for instant data processing and decision-making.',
      icon: '⚡'
    },
    {
      title: 'Power Management',
      description: 'Optimized power consumption for battery-operated and energy-efficient devices.',
      icon: '🔋'
    },
    {
      title: 'Secure Protocols',
      description: 'End-to-end encryption, secure boot, and authentication for IoT devices.',
      icon: '🔒'
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

  const processSteps = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your IoT solution needs and technical specifications.',
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Designing system architecture, communication protocols, and data flow.',
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Building firmware, integrating sensors, and cloud connectivity.',
      duration: '4-6 weeks',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Testing & Security',
      description: 'Comprehensive testing including security audits and performance optimization.',
      duration: '2-3 weeks',
      icon: '🔒'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Device deployment, monitoring setup, and ongoing technical support.',
      duration: 'Ongoing',
      icon: '🚀'
    }
  ];

  const useCases = [
    {
      title: 'Smart Home Automation',
      description: 'Connected lighting, climate control, security systems, and appliances.',
      icon: '🏠',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Industrial IoT',
      description: 'Equipment monitoring, predictive maintenance, and factory automation.',
      icon: '🏭',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Agriculture Tech',
      description: 'Soil monitoring, irrigation control, and crop health tracking systems.',
      icon: '🌾',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Healthcare Devices',
      description: 'Patient monitoring, wearable health trackers, and medical equipment IoT.',
      icon: '🏥',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Smart Cities',
      description: 'Traffic management, waste management, and environmental monitoring.',
      icon: '🌆',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Asset Tracking',
      description: 'GPS tracking, fleet management, and supply chain visibility solutions.',
      icon: '📦',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">📡</span>
              IoT & Embedded Systems
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Smart Connected Devices &
              <span className="block text-blue-600 mt-2">Embedded Systems</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We design and develop intelligent IoT solutions and embedded systems that connect the physical and digital worlds. 
              From smart sensors to industrial automation, we create innovative connected products.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">IoT Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">100K+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Devices Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Core
              <span className="block text-blue-600 mt-2">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive IoT and embedded systems development services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl">{feature.icon}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Industry
              <span className="block text-blue-600 mt-2">Applications</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              IoT solutions tailored for various industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{useCase.icon}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Technology
              <span className="block text-blue-600 mt-2">Stack</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Industry-leading platforms and tools for IoT development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Development
              <span className="block text-blue-600 mt-2">Process</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our proven 5-step process for IoT and embedded systems development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-blue-200">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-2xl">{step.icon}</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Build Your
            <span className="block text-blue-100 mt-2">IoT Solution?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your IoT requirements and create intelligent connected devices that transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
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

