'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Mobile Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center animate-float">
          <span className="text-2xl">📱</span>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <span className="text-xl">🤖</span>
        </div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <span className="text-xl">🍎</span>
        </div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <span className="text-lg">⚡</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <span className="text-lg">📱</span>
              Mobile App Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Mobile
              <span className="block text-blue-600 mt-2">Applications</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We create powerful, user-friendly mobile applications for iOS and Android that engage your audience 
              and drive business growth through innovative mobile experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Mobile Apps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6-16</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Week Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Types */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Mobile App
              <span className="block text-blue-600 mt-2">Development Types</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              From native apps to cross-platform solutions, we deliver mobile applications that meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileAppTypes.map((app, index) => (
              <div key={app.id} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <span className="text-3xl">{app.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Platforms
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              iOS & Android
              <span className="block text-blue-600 mt-2">Development</span>
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
                  <span className="mr-2">{platform.icon}</span>
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">{platform.icon}</span>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Mobile
              <span className="block text-blue-600 mt-2">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              We use cutting-edge mobile development technologies to build robust, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-3">{tech.icon}</div>
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Key Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Why Choose Our
              <span className="block text-blue-600 mt-2">Mobile Apps</span>
            </h2>
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

      {/* Process */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              How We Build
              <span className="block text-blue-600 mt-2">Mobile Apps</span>
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
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
