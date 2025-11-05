import Footer from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full animate-float-gentle blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full animate-float-gentle delay-500 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Legal Information
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-slate-600">
            Last Updated: November 5, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                This Cookie Policy explains how Savantx Technologies Pvt Ltd ("we", "us", or "our") uses cookies and similar technologies on our website www.savantxtechnologies.com (the "Website"). This policy should be read in conjunction with our Privacy Policy.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By using our Website, you consent to the use of cookies as described in this policy. If you do not agree with this policy, you should disable cookies or refrain from using our Website.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">2. What Are Cookies?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">3.1 Essential Cookies</h3>
                <p className="text-slate-600 leading-relaxed">
                  These cookies are necessary for the Website to function properly. They enable basic functions like page navigation and access to secure areas of the Website. The Website cannot function properly without these cookies.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">3.2 Analytics Cookies</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  We use analytics cookies to understand how visitors interact with our Website. These cookies help us improve our Website by collecting and reporting information anonymously.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Google Analytics:</strong> We use Google Analytics to analyze the use of our Website. Google Analytics gathers information about Website use by means of cookies. The information gathered is used to create reports about the use of our Website.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">3.3 Functionality Cookies</h3>
                <p className="text-slate-600 leading-relaxed">
                  These cookies enable the Website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">3.4 Marketing Cookies</h3>
                <p className="text-slate-600 leading-relaxed">
                  These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                </p>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website and deliver advertisements on and through the Website.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Third-party services we use include:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed ml-4 mt-3 space-y-2">
                <li>Google Analytics - For website analytics</li>
                <li>Social media platforms - For social sharing functionality</li>
                <li>Marketing platforms - For advertising and remarketing</li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">5. How to Manage Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our Website.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website, though your access to some functionality and areas may be restricted.
              </p>
              <p className="text-slate-600 leading-relaxed mb-3">
                Most web browsers allow some control of cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit:
              </p>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed ml-4 space-y-2">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.allaboutcookies.org</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.youronlinechoices.com</a></li>
              </ul>
            </div>

            {/* Browser-Specific Instructions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">6. Browser-Specific Instructions</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To disable cookies through your browser settings:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Google Chrome</h3>
                  <p className="text-slate-600 text-sm">Settings → Privacy and security → Cookies and other site data</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Mozilla Firefox</h3>
                  <p className="text-slate-600 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Safari</h3>
                  <p className="text-slate-600 text-sm">Preferences → Privacy → Cookies and website data</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Microsoft Edge</h3>
                  <p className="text-slate-600 text-sm">Settings → Cookies and site permissions → Cookies and data stored</p>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">7. Updates to This Policy</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page with a new "Last Updated" date.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900">Email:</p>
                    <a href="mailto:deepakkumr0818@gmail.com" className="text-blue-600 hover:underline">deepakkumr0818@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900">Phone:</p>
                    <a href="tel:+919888244166" className="text-blue-600 hover:underline">+91 98882-44166</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900">Office Locations:</p>
                    <p className="text-slate-600">Panchanpur, Gaya, Bihar 824236, India</p>
                    <p className="text-slate-600">Sector 71, Mohali, Punjab 160071, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Important Note</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    If you disable cookies, some features of our Website may not function properly. We recommend keeping cookies enabled for the best user experience.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

