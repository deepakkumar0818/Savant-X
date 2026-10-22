'use client';

import { useState } from 'react';
import { COMPANY } from '@/lib/company';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PageHero from '@/components/hero/PageHero';
import { Smartphone } from 'lucide-react';
import ServiceIcon from '@/components/ui/ServiceIcon';

export default function MobileAppsPage() {
  const [activePlatform, setActivePlatform] = useState('ios');

  const mobileAppTypes = [
    {
      id: 'native',
      title: 'Native Mobile Apps',
      icon: '📱',
      description: 'High-performance native applications built specifically for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'Native Performance', 'Platform-Specific UI', 'Hardware Access', 'App Store Optimization'],
      pricing: 'Starting at $25,000',
      timeline: '8-16 weeks',
      platforms: ['iOS', 'Android']
    },
    {
      id: 'cross',
      title: 'Cross-Platform Apps',
      icon: '🔄',
      description: 'Single codebase applications that run seamlessly on both iOS and Android.',
      features: ['React Native', 'Flutter Development', 'Code Reusability', 'Faster Development', 'Cost Effective', 'Consistent UI'],
      pricing: 'Starting at $18,000',
      timeline: '6-12 weeks',
      platforms: ['iOS', 'Android', 'Web']
    },
    {
      id: 'hybrid',
      title: 'Hybrid Apps',
      icon: '🌐',
      description: 'Web-based applications wrapped in native containers for app store distribution.',
      features: ['Ionic Framework', 'Cordova/PhoneGap', 'Web Technologies', 'Rapid Development', 'Easy Maintenance', 'Cost Effective'],
      pricing: 'Starting at $12,000',
      timeline: '4-8 weeks',
      platforms: ['iOS', 'Android']
    },
    {
      id: 'pwa',
      title: 'Progressive Web Apps',
      icon: '⚡',
      description: 'Web applications that provide native app-like experience in mobile browsers.',
      features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'No App Store', 'Instant Updates', 'SEO Friendly'],
      pricing: 'Starting at $8,000',
      timeline: '3-6 weeks',
      platforms: ['Web', 'iOS', 'Android']
    }
  ];

  const technologies = [
    { name: 'React Native', icon: '⚛️', description: 'Cross-platform framework', category: 'Cross-Platform' },
    { name: 'Flutter', icon: '🎯', description: 'Google\'s UI toolkit', category: 'Cross-Platform' },
    { name: 'Swift', icon: '🍎', description: 'iOS development', category: 'Native iOS' },
    { name: 'Kotlin', icon: '🤖', description: 'Android development', category: 'Native Android' },
    { name: 'Ionic', icon: '⚡', description: 'Hybrid app framework', category: 'Hybrid' },
    { name: 'Xamarin', icon: '🔷', description: 'Microsoft\'s solution', category: 'Cross-Platform' },
    { name: 'Firebase', icon: '🔥', description: 'Backend services', category: 'Backend' },
    { name: 'AWS', icon: '☁️', description: 'Cloud infrastructure', category: 'Cloud' }
  ];

  const platforms = [
    {
      id: 'ios',
      name: 'iOS Development',
      icon: '🍎',
      description: 'Native iOS applications for iPhone and iPad',
      features: ['Swift & Objective-C', 'Xcode IDE', 'iOS SDK', 'App Store Connect', 'TestFlight', 'Core Data'],
      stats: { users: '1.5B+', apps: '2M+', rating: '4.8' }
    },
    {
      id: 'android',
      name: 'Android Development',
      icon: '🤖',
      description: 'Native Android applications for phones and tablets',
      features: ['Kotlin & Java', 'Android Studio', 'Android SDK', 'Google Play Console', 'Firebase', 'Room Database'],
      stats: { users: '3B+', apps: '3M+', rating: '4.7' }
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your app requirements and defining the technical approach.',
      duration: '1-2 weeks',
      icon: '📋'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Creating intuitive mobile interfaces and user experience flows.',
      duration: '2-3 weeks',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your mobile application with modern technologies.',
      duration: '4-10 weeks',
      icon: '💻'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing across devices and platforms.',
      duration: '1-2 weeks',
      icon: '🧪'
    },
    {
      step: '05',
      title: 'Launch & Deployment',
      description: 'App store submission and launch support.',
      duration: '1-2 weeks',
      icon: '🚀'
    }
  ];

  const features = [
    {
      title: 'Native Performance',
      description: 'Optimized for each platform to deliver smooth, responsive user experiences.',
      icon: '⚡'
    },
    {
      title: 'Cross-Platform',
      description: 'Single codebase solutions that work seamlessly across iOS and Android.',
      icon: '🔄'
    },
    {
      title: 'Offline Support',
      description: 'Applications that work even without internet connectivity.',
      icon: '📱'
    },
    {
      title: 'Push Notifications',
      description: 'Engage users with targeted notifications and updates.',
      icon: '🔔'
    },
    {
      title: 'App Store Optimization',
      description: 'Maximize visibility and downloads in app stores.',
      icon: '📈'
    },
    {
      title: 'Analytics Integration',
      description: 'Track user behavior and app performance with detailed analytics.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <PageHero
        eyebrow="Mobile App Development"
        eyebrowIcon={Smartphone}
        title="Mobile"
        highlight="Applications"
        description="We create powerful, user-friendly mobile applications for iOS and Android that engage your audience and drive business growth through innovative mobile experiences."
        highlights={["Native Mobile Apps", "Cross-Platform Apps", "Hybrid Apps", "Progressive Web Apps"]}
        stats={[
          { value: COMPANY.foundingYear, label: "Founded" },
          { value: "4.9", label: "App Store Rating" },
          { value: "6-16", label: "Week Delivery" },
          { value: "24/7", label: "Support" },
        ]}
      />

      {/* Mobile App Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Solutions
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Mobile App
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Development Types</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From native apps to cross-platform solutions, we deliver mobile applications that meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileAppTypes.map((app) => (
              <div key={app.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-blue-200 transition-all duration-300">
                      <ServiceIcon emoji={app.icon} size="none" className="h-7 w-7 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {app.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.platforms.map((platform, platformIndex) => (
                      <span key={platformIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200/50">
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div>
                      <div className="text-lg font-bold text-blue-600 mb-1">{app.pricing}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Starting Price</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{app.timeline}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Timeline</div>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Platforms
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              iOS & Android
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Development</span>
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
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-slate-700 hover:bg-blue-50'
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
                      <div className="text-lg font-bold text-blue-600 mb-1">{platform.stats.users}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 mb-1">{platform.stats.apps}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600 mb-1">{platform.stats.rating}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wide">Rating</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Technologies</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Technology Stack
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Mobile
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use cutting-edge mobile development technologies to build robust, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <ServiceIcon emoji={tech.icon} size="lg" className="mb-3" />
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{tech.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
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
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Key Features
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Why Choose Our
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Mobile Apps</span>
            </h2>
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

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900 shadow-[0_8px_28px_-12px_rgba(79,70,229,0.35)] sm:text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
              Our Process
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              How We Build
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Mobile Apps</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Our proven 5-step process ensures your mobile application is delivered on time and exceeds expectations.
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
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Build Your
            <span className="block text-blue-100 mt-2">Mobile App?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
            Let&apos;s discuss your mobile app requirements and create an engaging application that your users will love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
                Schedule Demo
              </Link>
            <Link href="/work" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
