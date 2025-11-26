'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-50/20 rounded-full blur-3xl"></div>
      </div>

      {/* Professional Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-md text-sm font-medium mb-8 border border-slate-200">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              Legal Information
            </div>

            {/* Professional Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Privacy
              <span className="block text-blue-600 mt-2">
                Policy
              </span>
            </h1>

            {/* Professional Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
              SavantX Technologies Pvt Ltd is committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>

            {/* Last Updated */}
            <div className="flex items-center justify-center text-slate-500 text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Table of Contents</h2>
              <p className="text-slate-600">Navigate through our privacy policy sections</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="#introduction" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Introduction</span>
                </a>
                <a href="#information-collection" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Information We Collect</span>
                </a>
                <a href="#how-we-use" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">3</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">How We Use Your Information</span>
                </a>
                <a href="#information-sharing" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">4</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Information Sharing</span>
                </a>
                <a href="#data-security" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">5</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Data Security</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#cookies" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">6</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Cookies & Tracking</span>
                </a>
                <a href="#your-rights" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">7</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Your Rights</span>
                </a>
                <a href="#data-retention" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">8</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Data Retention</span>
                </a>
                <a href="#third-party" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">9</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Third-Party Links</span>
                </a>
                <a href="#contact" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">10</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
              
            {/* Introduction */}
            <div id="introduction" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">1. Introduction</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <p className="text-slate-700 leading-relaxed mb-4 font-medium text-lg">
                  SavantX Technologies Pvt Ltd (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and ensuring the security of your personal information.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our website or services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div id="information-collection" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">2. Information We Collect</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    Personal Information
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Name and contact information (email address, phone number)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Company information and job title</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Project requirements and specifications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Communication preferences</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Payment information (processed securely through third-party providers)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    Automatically Collected Information
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">IP address and location data</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Browser type and version</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Operating system</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Pages visited and time spent on our website</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Referring website addresses</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Device information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div id="how-we-use" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">3. How We Use Your Information</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">
                  We use the collected information for various legitimate business purposes, including:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Providing and maintaining our services</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Processing your requests and inquiries</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Communicating about projects and services</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Improving our website and services</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Analyzing usage patterns and trends</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Marketing communications (with consent)</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Legal compliance and protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div id="information-sharing" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">4. Information Sharing</h2>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      With Your Consent
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• With your explicit consent</li>
                      <li>• When you request specific services</li>
                    </ul>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      Legal Requirements
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• When required by law</li>
                      <li>• To protect our rights and safety</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div id="data-security" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">5. Data Security</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">
                  We implement comprehensive security measures to protect your personal information:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">SSL Encryption</h4>
                    <p className="text-sm text-slate-600">Secure data transmission</p>
                  </div>
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">Secure Servers</h4>
                    <p className="text-sm text-slate-600">Protected data storage</p>
                  </div>
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">Regular Updates</h4>
                    <p className="text-sm text-slate-600">Continuous security monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div id="contact" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Contact Us</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8">
                <p className="text-blue-100 leading-relaxed mb-8 text-lg">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-blue-100">contact@thesavantx.com</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-blue-100">+91 9056425289</p>
                    <p className="text-blue-100">+91 7018318078</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Office</h4>
                    <p className="text-blue-100 text-sm">Sector 71, Mohali, Punjab</p>
                    <p className="text-blue-100 text-sm">Panchanpur, Tekari, Gaya, Bihar</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
