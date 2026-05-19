import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <img
              src="/images/logos/Logo.png"
              alt="SavantX Technologies Pvt Ltd logo"
              className="mb-5 h-11 w-auto object-contain"
            />
            <p className="max-w-md text-[15px] leading-relaxed text-slate-600">
              Software, integrations, and electronics—from web and mobile to ERP, IoT, firmware, and PCB—with
              documentation your teams can own.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              <a href="https://x.com/Savantxtech" target="_blank" rel="noopener noreferrer" className="text-slate-600 transition hover:text-indigo-700">
                X (Twitter)
              </a>
              <a
                href="https://www.linkedin.com/company/savantxtechnologies/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 transition hover:text-indigo-700"
              >
                LinkedIn
              </a>
              <a href="https://www.facebook.com/savantxtechnologies" target="_blank" rel="noopener noreferrer" className="text-slate-600 transition hover:text-indigo-700">
                Facebook
              </a>
              <a href="https://www.instagram.com/savantxtechnologies/" target="_blank" rel="noopener noreferrer" className="text-slate-600 transition hover:text-indigo-700">
                Instagram
              </a>
              <a href="https://www.threads.net/@savantxtechnologies" target="_blank" rel="noopener noreferrer" className="text-slate-600 transition hover:text-indigo-700">
                Threads
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <NewsletterSignup />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-slate-200 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Quick links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 transition hover:text-indigo-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/expertise/what-we-do" className="text-slate-600 transition hover:text-indigo-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-600 transition hover:text-indigo-700">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-600 transition hover:text-indigo-700">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 transition hover:text-indigo-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Expertise</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/expertise/websites" className="text-slate-600 transition hover:text-indigo-700">
                  Web development
                </Link>
              </li>
              <li>
                <Link href="/expertise/mobile-apps" className="text-slate-600 transition hover:text-indigo-700">
                  Mobile apps
                </Link>
              </li>
              <li>
                <Link href="/expertise/hardware-electronics" className="text-slate-600 transition hover:text-indigo-700">
                  IoT &amp; embedded
                </Link>
              </li>
              <li>
                <Link href="/expertise/pcb-design" className="text-slate-600 transition hover:text-indigo-700">
                  PCB design
                </Link>
              </li>
              <li>
                <Link href="/expertise/ui-ux-design" className="text-slate-600 transition hover:text-indigo-700">
                  UI/UX
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Locations</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact#map" className="text-slate-600 transition hover:text-indigo-700">
                  USA
                </Link>
              </li>
              <li>
                <Link href="/contact#map" className="text-slate-600 transition hover:text-indigo-700">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/contact#map" className="text-slate-600 transition hover:text-indigo-700">
                  UAE
                </Link>
              </li>
              <li>
                <Link href="/contact#map" className="text-slate-600 transition hover:text-indigo-700">
                  Nepal
                </Link>
              </li>
              <li>
                <Link href="/contact#map" className="text-slate-600 transition hover:text-indigo-700">
                  Singapore
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Partners &amp; platforms</h4>
            <p className="text-sm leading-relaxed text-slate-600">
              AWS · Zoho · Next.js · IoT edge · PostgreSQL · Kubernetes
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} SavantX Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="transition hover:text-slate-800">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="transition hover:text-slate-800">
              Terms
            </Link>
            <Link href="/cookie-policy" className="transition hover:text-slate-800">
              Cookies
            </Link>
            <Link href="/refund-cancellation" className="transition hover:text-slate-800">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
