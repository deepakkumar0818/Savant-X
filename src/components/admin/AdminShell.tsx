'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ExternalLink,
  FileText,
  FolderKanban,
  Image as ImageIcon,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Menu,
  Package,
  Settings,
  Users,
  X,
} from 'lucide-react';
import { adminFetch } from './client';
import { DeployIndicator, DeployProvider } from './deploy';
import { Badge, ToastProvider } from './ui';

export type AdminStatus = {
  email: string;
  store: { mode: 'github' | 'local' | 'readonly'; repo?: string; branch?: string };
  zoho: boolean;
  recent: { commit: string; message: string; author: string; date: string; url?: string }[];
};

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/pages', label: 'Pages', icon: FileText },
  { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/forms', label: 'Forms', icon: ListChecks },
  { href: '/admin/leads', label: 'Leads', icon: Users },
  { href: '/admin/media', label: 'Media', icon: ImageIcon },
  { href: '/admin/settings', label: 'Site settings', icon: Settings },
];

let statusCache: Promise<AdminStatus> | null = null;
/** Shared, cached /api/admin/status for the session (refreshed on full reload). */
export function useAdminStatus(enabled = true) {
  const [status, setStatus] = useState<AdminStatus | null>(null);
  useEffect(() => {
    // Never on the login page: signed out, the call would bounce back to login forever.
    if (!enabled) return;
    statusCache ??= adminFetch<AdminStatus>('/api/admin/status/');
    statusCache.then(setStatus).catch(() => {
      statusCache = null;
    });
  }, [enabled]);
  return status;
}

function ModeBadge({ status }: { status: AdminStatus | null }) {
  if (!status) return null;
  if (status.store.mode === 'github') return <Badge tone="green">Publishing to GitHub · {status.store.branch}</Badge>;
  if (status.store.mode === 'local') return <Badge tone="blue">Development · saving to local files</Badge>;
  return <Badge tone="red">Read-only · publishing not set up</Badge>;
}

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '';
  const router = useRouter();
  const isLogin = pathname.startsWith('/admin/login');
  const status = useAdminStatus(!isLogin);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  if (isLogin) return <ToastProvider>{children}</ToastProvider>;

  const signOut = async () => {
    await fetch('/api/admin/logout/', { method: 'POST' }).catch(() => {});
    statusCache = null;
    router.replace('/admin/login/');
  };
  const active = (href: string) => (href === '/admin' ? pathname === '/admin' || pathname === '/admin/' : pathname.startsWith(href));

  const nav = (
    <nav aria-label="Admin" className="flex flex-1 flex-col gap-1 px-3">
      {NAV.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          aria-current={active(href) ? 'page' : undefined}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${active(href) ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
        >
          <Icon className="h-4 w-4 shrink-0" aria-hidden />
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <ToastProvider>
      <DeployProvider>
        <div className="min-h-screen bg-slate-50">
          {/* Sidebar */}
          <aside
            className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-slate-900 pb-4 transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="flex h-16 items-center justify-between px-6">
              <Link href="/admin" className="text-lg font-bold tracking-tight text-white">
                SavantX <span className="font-medium text-indigo-300">Admin</span>
              </Link>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="text-slate-400 hover:text-white lg:hidden">
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            {nav}
            <div className="mx-3 space-y-1 border-t border-white/10 pt-4">
              <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                <ExternalLink className="h-4 w-4" aria-hidden />
                View website
              </a>
              <button type="button" onClick={signOut} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                <LogOut className="h-4 w-4" aria-hidden />
                Sign out
              </button>
            </div>
          </aside>
          {open && <div className="fixed inset-0 z-30 bg-slate-900/50 lg:hidden" onClick={() => setOpen(false)} aria-hidden />}

          <div className="lg:pl-64">
            <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-8">
              <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="-ml-1 rounded-md p-1.5 text-slate-600 hover:bg-slate-100 lg:hidden">
                <Menu className="h-5 w-5" aria-hidden />
              </button>
              <ModeBadge status={status} />
              <DeployIndicator />
              <span className="ml-auto hidden truncate text-sm text-slate-500 sm:block">{status?.email}</span>
            </header>
            <main className="px-4 py-8 sm:px-8">{children}</main>
          </div>
        </div>
      </DeployProvider>
    </ToastProvider>
  );
}
