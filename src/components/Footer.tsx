import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 text-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/30 to-purple-100/30"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/images/logos/Logo.png" 
                alt="SavantX logo" 
                className="h-12 w-auto object-contain mr-4"
              />
             
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed max-w-md">
              Transforming businesses through innovative software and electronics solutions. We deliver excellence in every project, from web development and mobile apps to IoT devices, embedded systems, and PCB design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="group w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="group w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="group w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-600">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">About Us</Link></li>
              <li><Link href="/expertise/what-we-do" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">Services</Link></li>
              <li><Link href="/work" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">Portfolio</Link></li>
              <li><Link href="/products" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">Products</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-600">Our Expertise</h4>
            <ul className="space-y-3">
              <li><Link href="/expertise/websites" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">Web Development</Link></li>
              <li><Link href="/expertise/mobile-apps" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">Mobile Apps</Link></li>
              <li><Link href="/expertise/hardware-electronics" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">IoT & Embedded Systems</Link></li>
              <li><Link href="/expertise/hardware-electronics" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">PCB Design</Link></li>
              <li><Link href="/expertise/ui-ux-design" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block">UI/UX Design</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2024 SavantX. All rights reserved.
            </div>
             <div className="flex space-x-6 text-sm">
               <Link href="/privacy-policy" className="text-slate-500 hover:text-blue-600 transition-colors duration-300">Privacy Policy</Link>
               <Link href="/terms-of-service" className="text-slate-500 hover:text-blue-600 transition-colors duration-300">Terms of Service</Link>
               <Link href="/cookie-policy" className="text-slate-500 hover:text-blue-600 transition-colors duration-300">Cookie Policy</Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
