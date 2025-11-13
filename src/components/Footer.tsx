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
              <a href="https://x.com/Savantxtech" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/savantxtechnologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/savantxtechnologies" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/savantxtechnologies/" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.threads.net/@savantxtechnologies" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
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
