'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';
import SupportModal from '@/components/forms/SupportModal';
import PageHero from '@/components/hero/PageHero';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { COMPANY, COMPANY_METRICS, OFFICES, formatOfficeAddress, officeMapUrl } from '@/lib/company';
import { fetchWithTimeout } from '@/lib/fetchWithTimeout';

const LocationsMap = dynamic(() => import('@/components/LocationsMap'), { ssr: false });

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    hardwareService: '',
    message: '',
    budget: '',
    website: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      // Reset hardwareService when service is changed to non-hardware option
      if (name === 'service' && value !== 'hardware-development') {
        return {
          ...prev,
          [name]: value,
          hardwareService: ''
        };
      }
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const optionLabel = (selectId: string, value: string) => {
    if (!value) return '';
    const select = document.getElementById(selectId) as HTMLSelectElement | null;
    return select?.querySelector<HTMLOptionElement>(`option[value="${value}"]`)?.textContent?.trim() || value;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const service = [optionLabel('service', formData.service), optionLabel('hardwareService', formData.hardwareService)]
      .filter(Boolean)
      .join(' — ');

    try {
      const response = await fetchWithTimeout('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          kind: 'enquiry',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: `${service} — via Contact page`,
          budget: optionLabel('budget', formData.budget),
          message: formData.message,
          website: formData.website,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          hardwareService: '',
          message: '',
          budget: '',
          website: ''
        });
      } else {
        // Keep what the visitor typed so they can retry.
        setErrorMessage(data.error || '');
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <PageHero
        eyebrow="Get in touch"
        eyebrowIcon={MessageSquare}
        title="Let's build something"
        highlight="great together"
        description="Tell us about your website, app, Zoho CRM or hardware project. We'll get back to you with next steps and a clear plan."
        primaryCta={{ label: 'Start your project', href: '#contact-form' }}
        secondaryCta={null}
        aside={
          <div className="animate-fade-in-up delay-200 mx-auto w-full max-w-md lg:mr-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_24px_60px_-30px_rgba(30,58,138,0.35)] backdrop-blur-sm">
              <div className="border-b border-slate-100 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Reach us directly
              </div>
              <ul className="divide-y divide-slate-100 text-sm">
                <li>
                  <a href={COMPANY.phone.href} className="flex items-center gap-3 px-5 py-4 text-slate-700 transition-colors hover:bg-indigo-50/50 hover:text-indigo-700">
                    <Phone className="h-[1.1rem] w-[1.1rem] shrink-0 text-indigo-500" aria-hidden />
                    <span className="font-medium">{COMPANY.phone.display}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 px-5 py-4 text-slate-700 transition-colors hover:bg-indigo-50/50 hover:text-indigo-700">
                    <Mail className="h-[1.1rem] w-[1.1rem] shrink-0 text-indigo-500" aria-hidden />
                    <span className="break-all font-medium">{COMPANY.email}</span>
                  </a>
                </li>
                {OFFICES.map((office) => (
                  <li key={office.id}>
                    <a href={officeMapUrl(office)} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 px-5 py-4 text-slate-700 transition-colors hover:bg-indigo-50/50 hover:text-indigo-700">
                      <MapPin className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-indigo-500" aria-hidden />
                      <span>
                        <span className="block font-medium">{office.name}</span>
                        <span className="text-slate-500">{formatOfficeAddress(office)}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
        stats={[
          { value: <AnimatedCounter end={24} suffix="hrs" duration={1600} />, label: 'Response Time' },
          { value: <AnimatedCounter end={98} suffix="%" duration={2200} />, label: 'Client Satisfaction' },
          {
            value: <AnimatedCounter end={COMPANY_METRICS[0].value} suffix={COMPANY_METRICS[0].suffix} duration={2800} />,
            label: COMPANY_METRICS[0].label,
          },
        ]}
      />

      {/* Contact Form and Info Section */}
      <section id="contact-form" className="scroll-mt-24 relative z-10 py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20 flex flex-col lg:self-start">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Your Project</h2>
                <p className="text-slate-600 text-lg">Tell us about your vision and we&apos;ll make it happen.</p>
              </div>

              <div aria-live="polite">
              {submitStatus === 'success' && (
                <div role="status" className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 text-green-700 rounded-xl animate-scale-in shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                      <div className="relative w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white animate-scale-in" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg mb-1">Message Sent Successfully!</p>
                      <p className="text-sm">Thank you! We&apos;ll get back to you soon.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div role="alert" className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errorMessage || 'Sorry, there was an error sending your message. Please try again or contact us directly.'}
                  </div>
                </div>
              )}
              </div>

              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Honeypot: hidden from people, tempting to bots. */}
                <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleInputChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900 bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      autoComplete="organization"
                      suppressHydrationWarning
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900 bg-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      suppressHydrationWarning
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900 bg-white"
                      placeholder="+91 …"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900 bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile Applications</option>
                      <option value="ai-analytics">AI & Analytics</option>
                      <option value="enterprise-solutions">Enterprise Solutions</option>
                      <option value="hardware-development">Hardware & Electronics</option>
                      <option value="zoho-integration">Zoho Integration</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      suppressHydrationWarning
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900 bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10l">Under ₹10,00,000</option>
                      <option value="10l-25l">₹10,00,000 - ₹25,00,000</option>
                      <option value="25l-50l">₹25,00,000 - ₹50,00,000</option>
                      <option value="50l-1cr">₹50,00,000 - ₹1,00,00,000</option>
                      <option value="over-1cr">Over ₹1,00,00,000</option>
                    </select>
                  </div>
                </div>

                {/* Conditional Hardware Services Field */}
                {formData.service === 'hardware-development' && (
                  <div className="animate-fade-in">
                    <label htmlFor="hardwareService" className="block text-sm font-semibold text-slate-700 mb-2">
                      Which Hardware Service? *
                    </label>
                    <select
                      id="hardwareService"
                      name="hardwareService"
                      value={formData.hardwareService}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-900 bg-white"
                    >
                      <option value="">Select hardware service</option>
                      <option value="iot-solutions">IoT Solutions</option>
                      <option value="embedded-systems">Embedded Systems Development</option>
                      <option value="pcb-design">PCB Design & Circuit Engineering</option>
                      <option value="firmware-development">Firmware Development</option>
                      <option value="3d-printing-design">3D Printing and Designing</option>
                      <option value="hardware-prototyping">Hardware Prototyping & Testing</option>
                      <option value="industrial-automation">Industrial Automation</option>
                      <option value="electronics-design">Electronics Design & Integration</option>
                      <option value="product-development">Complete Product Development</option>
                    </select>
                  </div>
                )}

                 <div>
                   <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                     Project Details *
                   </label>
                   <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     required
                     rows={6}
                     suppressHydrationWarning
                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-slate-900 bg-white"
                     placeholder="Tell us about your project, goals, and any specific requirements..."
                   />
                 </div>


                <button
                  type="submit"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 [&>svg]:text-indigo-600">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email Us</h4>
                      <p className="text-slate-600 text-sm mb-2">Send us an email anytime</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-indigo-600 hover:text-indigo-700 font-medium break-all">
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 [&>svg]:text-indigo-600">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Call Us</h4>
                      <p className="text-slate-600 text-sm mb-2">Mon-Fri 9AM-6PM IST</p>
                      <a href={COMPANY.phone.href} className="block text-indigo-600 hover:text-indigo-700 font-medium">
                        {COMPANY.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 [&>svg]:text-indigo-600">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Visit Us</h4>
                      <p className="text-slate-600 text-sm mb-2">Our office locations</p>
                      <ul className="space-y-3">
                        {OFFICES.map((office) => (
                          <li key={office.id} className="text-slate-600 text-sm">
                            <p className="font-semibold text-slate-800">{office.name}</p>
                            <a
                              href={officeMapUrl(office)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-indigo-700 hover:underline"
                            >
                              {formatOfficeAddress(office)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-indigo-50 to-blue-100 ring-1 ring-indigo-100 [&>svg]:text-indigo-600">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                      <p className="text-slate-600 text-sm mb-2">When we&apos;re available</p>
                      <div className="text-slate-600 text-sm">
                        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p>Sat: 10:00 AM - 4:00 PM</p>
                        <p>Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Guarantee */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Quick Response Guarantee</h3>
                </div>
                <p className="text-blue-100 text-lg mb-6">
                  We promise to respond to all inquiries within 24 hours. Most emails receive a response within 4 hours during business days.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">
                      <AnimatedCounter end={24} suffix="hrs" duration={2000} />
                    </div>
                    <div className="text-blue-200 text-sm">Max Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">
                      <AnimatedCounter end={4} suffix="hrs" duration={1500} />
                    </div>
                    <div className="text-blue-200 text-sm">Average Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="relative z-10 py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-scale-in shadow-lg">
              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Our Offices
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Find Us in India
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Visit us at our offices in {OFFICES.map((o) => o.city).join(' and ')}. Select a location to see it on the map.
            </p>
          </div>
          <LocationsMap />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-scale-in shadow-lg">
              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Common Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Find answers to the most commonly asked questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the initial consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes! We offer comprehensive maintenance and support packages. Our 24/7 support ensures your applications run smoothly with regular updates, security patches, and performance monitoring."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS. We also work with mobile technologies like React Native and Flutter."
              },
              {
                question: "How do you ensure project quality?",
                answer: "Quality is our priority. We follow industry best practices, conduct thorough testing, implement code reviews, and maintain 98% client satisfaction through our rigorous quality assurance process."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely! We excel at integrating with existing systems and can work with legacy technologies while modernizing your infrastructure. Our team has extensive experience with various platforms and APIs."
              },
              {
                question: "What is your development process?",
                answer: "We follow an agile development methodology with regular sprints, client feedback loops, and iterative improvements. Our process includes planning, design, development, testing, and deployment phases."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Still have questions? We&apos;re here to help!</p>
            <button 
              onClick={() => setIsSupportOpen(true)}
              suppressHydrationWarning
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                Contact Support
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      <SupportModal open={isSupportOpen} onClose={() => setIsSupportOpen(false)} />

      <Footer />
    </div>
  );
}
