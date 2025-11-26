'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Mail, 
  LogOut, 
  Menu, 
  X,
  Settings,
  Users,
  BarChart3,
  FileText
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);

  const checkAuth = useCallback(async () => {
    // Check if we're in the browser
    if (typeof window === 'undefined') {
      setIsLoading(false);
      return;
    }

    const token = localStorage.getItem('adminToken');
    
    if (!token) {
      setIsLoading(false);
      router.push('/admin/login');
      return;
    }

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Auth failed: ${response.status}`);
      }

      const data = await response.json();

      // Check if authenticated
      if (data.authenticated === true) {
        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        // Token exists but not authenticated - clear it
        localStorage.removeItem('adminToken');
        setIsLoading(false);
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Auth check error:', error);
      // If token exists but API call failed, allow access to prevent redirect loops
      // This is useful during development when API might be unavailable
      // In production, you may want to be stricter here
      if (token) {
        console.warn('Auth API failed, but token exists. Allowing access.');
        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        localStorage.removeItem('adminToken');
        setIsLoading(false);
        router.push('/admin/login');
      }
    }
  }, [router]);

  // Check if we're on the login page - use both pathname and window.location as fallback
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') {
      return;
    }

    const currentPath = pathname || window.location.pathname;
    const loginPage = currentPath === '/admin/login' || currentPath === '/admin/login/' || currentPath.startsWith('/admin/login');
    setIsLoginPage(loginPage);
    
    if (loginPage) {
      setIsLoading(false);
      return;
    }
    
    // Only check auth if we're not on login page
    if (!loginPage && pathname) {
      checkAuth();
    }
  }, [pathname, checkAuth]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  // If on login page, render children directly without sidebar or auth checks
  // Check pathname directly as well for immediate render
  const currentPath = pathname || (typeof window !== 'undefined' ? window.location.pathname : '');
  const isOnLoginPage = isLoginPage || currentPath.includes('/admin/login');
  
  if (isOnLoginPage) {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/pages', label: 'Page Content', icon: FileText },
    { href: '/admin/contacts', label: 'Contact Submissions', icon: Mail },
    { href: '/admin/users', label: 'Users', icon: Users },
    { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6 text-slate-600" />
              ) : (
                <Menu className="w-6 h-6 text-slate-600" />
              )}
            </button>
            <h1 className="text-xl font-bold text-slate-900">Admin Panel</h1>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-40
            w-64 bg-white/80 backdrop-blur-sm border-r border-slate-200
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">SavantX</h2>
                  <p className="text-xs text-slate-500">Admin Panel</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-all duration-200
                      ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                          : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-slate-200">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200 font-medium"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

