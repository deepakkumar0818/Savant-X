'use client';

import Link from 'next/link';

export default function RefundCancellationPage() {

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
              Refund and
              <span className="block text-blue-600 mt-2">
                Cancellation Policy
              </span>
            </h1>

            {/* Professional Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
              SavantX Technologies Pvt Ltd is committed to providing fair and transparent refund and cancellation policies. 
              This policy outlines the terms and conditions for refunds and cancellations of our services.
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
              <p className="text-slate-600">Navigate through our refund and cancellation policy sections</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="#introduction" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Introduction</span>
                </a>
                <a href="#refund-policy" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Refund Policy</span>
                </a>
                <a href="#cancellation-policy" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">3</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Cancellation Policy</span>
                </a>
                <a href="#refund-process" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">4</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Refund Process</span>
                </a>
                <a href="#non-refundable" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">5</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Non-Refundable Services</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#partial-refunds" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">6</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Partial Refunds</span>
                </a>
                <a href="#processing-time" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">7</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Processing Time</span>
                </a>
                <a href="#disputes" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">8</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Disputes & Appeals</span>
                </a>
                <a href="#modifications" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">9</div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Policy Modifications</span>
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

      {/* Policy Content */}
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
                  SavantX Technologies Pvt Ltd (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) strives to provide exceptional services and customer satisfaction.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This Refund and Cancellation Policy outlines the terms and conditions under which refunds and cancellations are processed. By engaging our services, you agree to the terms outlined in this policy. We reserve the right to modify this policy at any time, and changes will be effective immediately upon posting.
                </p>
              </div>
            </div>

            {/* Refund Policy */}
            <div id="refund-policy" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">2. Refund Policy</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Full Refunds
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Full refunds are available under the following circumstances:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Cancellation within 24 hours of service initiation (before work begins)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Service not delivered as per agreed specifications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Technical failure on our part preventing service delivery</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Duplicate payment or billing error</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Refund Eligibility
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    To be eligible for a refund, you must:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Submit a refund request within 30 days of payment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Provide valid reason and supporting documentation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Not have violated terms of service agreement</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">Return any deliverables if applicable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div id="cancellation-policy" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">3. Cancellation Policy</h2>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">
                  You may cancel your service at any time, subject to the following terms:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        Before Work Begins
                      </h4>
                      <p className="text-slate-600 text-sm">100% refund if cancelled before project initiation</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        During Development (0-25%)
                      </h4>
                      <p className="text-slate-600 text-sm">75% refund if cancelled during initial development phase</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        Mid-Development (25-50%)
                      </h4>
                      <p className="text-slate-600 text-sm">50% refund if cancelled during mid-development phase</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        Late Stage (50%+)
                      </h4>
                      <p className="text-slate-600 text-sm">No refund if cancelled after 50% completion, deliverables provided</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div id="refund-process" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">4. Refund Process</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">
                  To request a refund, please follow these steps:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Submit Refund Request</h4>
                      <p className="text-slate-600 text-sm">Contact us via email at contact@thesavantx.com with your order number and reason for refund.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Review & Verification</h4>
                      <p className="text-slate-600 text-sm">We will review your request within 2-3 business days and verify eligibility.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Approval & Processing</h4>
                      <p className="text-slate-600 text-sm">Upon approval, refund will be processed to your original payment method.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white/60 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Confirmation</h4>
                      <p className="text-slate-600 text-sm">You will receive email confirmation once the refund is processed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Refundable Services */}
            <div id="non-refundable" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">5. Non-Refundable Services</h2>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">
                  The following services are non-refundable:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">Completed and delivered services</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">Custom development work after 50% completion</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">Third-party service fees and licenses</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">Services cancelled due to client breach of contract</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">One-time consultation fees</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/60 rounded-lg">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-600">Domain registration and hosting fees (if applicable)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partial Refunds */}
            <div id="partial-refunds" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">6. Partial Refunds</h2>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">
                  Partial refunds may be issued in the following scenarios:
                </p>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">Project Cancellation During Development</h4>
                    <p className="text-slate-600 text-sm">Refund amount calculated based on work completed and remaining deliverables.</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">Scope Reduction</h4>
                    <p className="text-slate-600 text-sm">If project scope is reduced after initiation, refund for removed features.</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">Service Modifications</h4>
                    <p className="text-slate-600 text-sm">Refund difference if service is downgraded or modified.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Time */}
            <div id="processing-time" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">7. Processing Time</h2>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">
                  Refund processing timelines:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">Review Period</h4>
                    <p className="text-sm text-slate-600">2-3 business days</p>
                  </div>
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">Processing Time</h4>
                    <p className="text-sm text-slate-600">5-10 business days</p>
                  </div>
                  <div className="text-center bg-white/60 rounded-lg p-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-700 mb-2">Bank Processing</h4>
                    <p className="text-sm text-slate-600">3-5 business days</p>
                  </div>
                </div>
                <p className="text-center text-slate-600 mt-6 text-sm">
                  Total time: 10-18 business days from approval to receipt in your account
                </p>
              </div>
            </div>

            {/* Disputes & Appeals */}
            <div id="disputes" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">8. Disputes & Appeals</h2>
              </div>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium text-lg">
                  If you disagree with a refund decision, you may:
                </p>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Request Review
                    </h4>
                    <p className="text-slate-600 text-sm">Submit additional documentation or evidence for reconsideration within 7 days.</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Escalation
                    </h4>
                    <p className="text-slate-600 text-sm">Request escalation to management for complex cases requiring further review.</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Resolution
                    </h4>
                    <p className="text-slate-600 text-sm">We aim to resolve all disputes fairly and within 14 business days.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Modifications */}
            <div id="modifications" className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">9. Policy Modifications</h2>
              </div>
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-100">
                <p className="text-slate-700 leading-relaxed mb-4">
                  SavantX Technologies Pvt Ltd reserves the right to modify this Refund and Cancellation Policy at any time. Changes will be effective immediately upon posting on our website. We encourage you to review this policy periodically.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Your continued use of our services after any modifications constitutes acceptance of the updated policy. If you do not agree with any changes, you may cancel your service in accordance with the cancellation terms.
                </p>
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
                <h2 className="text-3xl font-bold text-slate-800">10. Contact Us</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8">
                <p className="text-blue-100 leading-relaxed mb-8 text-lg">
                  For refund requests, cancellations, or questions about this policy, please contact us:
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-blue-100">contact@savantxtechnologies.com</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-blue-100">+91 9888244166</p>
                    <p className="text-blue-100">+91 9888344166</p>
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

