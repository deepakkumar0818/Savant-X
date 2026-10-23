'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { CheckCircle2, ExternalLink, Loader2, XCircle } from 'lucide-react';
import { adminFetch } from './client';

type DeployState = { commit: string; state: 'pending' | 'success' | 'failure' | 'unknown'; url?: string; since: number } | null;

const DeployContext = createContext<{ state: DeployState; track: (commit: string, mode: string) => void }>({ state: null, track: () => {} });

const STORAGE_KEY = 'sx-admin-last-publish';

/** Follows the website rebuild after a publish (Vercel reports its progress to GitHub). */
export function DeployProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DeployState>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const poll = useCallback((commit: string, since: number) => {
    if (timer.current) clearTimeout(timer.current);
    const tick = async () => {
      try {
        const s = await adminFetch<{ state: 'pending' | 'success' | 'failure' | 'unknown'; url?: string }>(`/api/admin/status/?commit=${commit}`);
        setState({ commit, since, ...s });
        if (s.state === 'pending' && Date.now() - since < 15 * 60 * 1000) timer.current = setTimeout(tick, 10_000);
        if (s.state !== 'pending') {
          try {
            sessionStorage.removeItem(STORAGE_KEY);
          } catch {}
        }
      } catch {
        timer.current = setTimeout(tick, 20_000);
      }
    };
    void tick();
  }, []);

  const track = useCallback(
    (commit: string, mode: string) => {
      if (mode !== 'github') return;
      const since = Date.now();
      setState({ commit, state: 'pending', since });
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ commit, since }));
      } catch {}
      poll(commit, since);
    },
    [poll]
  );

  // Keep following a rebuild after navigating between admin pages or reloading.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { commit, since } = JSON.parse(raw) as { commit: string; since: number };
        setState({ commit, state: 'pending', since });
        poll(commit, since);
      }
    } catch {}
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [poll]);

  return <DeployContext.Provider value={{ state, track }}>{children}</DeployContext.Provider>;
}

export const useDeploy = () => useContext(DeployContext);

export function DeployIndicator() {
  const { state } = useDeploy();
  if (!state) return null;
  if (state.state === 'pending') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">
        <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
        Website updating…
      </span>
    );
  }
  if (state.state === 'success') {
    return (
      <a href={state.url ?? '/'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200 hover:bg-emerald-100">
        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
        Changes are live
        <ExternalLink className="h-3 w-3" aria-hidden />
      </a>
    );
  }
  if (state.state === 'failure') {
    return (
      <a href={state.url ?? '#'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-800 ring-1 ring-rose-200">
        <XCircle className="h-3.5 w-3.5" aria-hidden />
        Website update failed — details
      </a>
    );
  }
  return null;
}
