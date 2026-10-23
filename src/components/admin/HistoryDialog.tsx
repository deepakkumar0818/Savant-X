'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, History, X } from 'lucide-react';
import { adminFetch, timeAgo } from './client';
import { useDeploy } from './deploy';
import { Button, Notice, Spinner, useToast } from './ui';

type Entry = { commit: string; message: string; author: string; date: string; url?: string };

/** Published versions of one content file, with "Restore". */
export function HistoryDialog({ path, label, onClose, onRestored }: { path: string; label: string; onClose: () => void; onRestored: () => void }) {
  const toast = useToast();
  const deploy = useDeploy();
  const ref = useRef<HTMLDialogElement>(null);
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [mode, setMode] = useState('');
  const [error, setError] = useState('');
  const [restoring, setRestoring] = useState('');

  useEffect(() => {
    ref.current?.showModal();
    adminFetch<{ mode: string; entries: Entry[] }>(`/api/admin/history/?path=${encodeURIComponent(path)}`)
      .then((r) => {
        setMode(r.mode);
        setEntries(r.entries);
      })
      .catch((e) => setError(e.message));
  }, [path]);

  const restore = async (e: Entry) => {
    if (!window.confirm(`Restore "${label}" to how it was on ${new Date(e.date).toLocaleString('en-IN')}? This is published as a new change, so it can be undone too.`)) return;
    setRestoring(e.commit);
    try {
      const r = await adminFetch<{ commit: string }>('/api/admin/history/', { method: 'POST', body: JSON.stringify({ path, commit: e.commit }) });
      deploy.track(r.commit, 'github');
      toast('success', 'Restored. The website is rebuilding.');
      onRestored();
      onClose();
    } catch (err) {
      toast('error', err instanceof Error ? err.message : 'Restore failed.');
    } finally {
      setRestoring('');
    }
  };

  return (
    <dialog ref={ref} onClose={onClose} className="w-[min(36rem,calc(100vw-2rem))] rounded-xl p-0 shadow-2xl backdrop:bg-slate-900/50">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <h2 className="flex items-center gap-2 font-semibold text-slate-900">
          <History className="h-4 w-4 text-slate-400" aria-hidden />
          History · {label}
        </h2>
        <button type="button" onClick={() => ref.current?.close()} aria-label="Close" className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <div className="max-h-[60vh] overflow-y-auto p-5">
        {error ? (
          <Notice tone="error">{error}</Notice>
        ) : !entries ? (
          <Spinner />
        ) : mode !== 'github' ? (
          <Notice>History is available once publishing to GitHub is set up.</Notice>
        ) : !entries.length ? (
          <p className="text-sm text-slate-500">No published changes yet.</p>
        ) : (
          <ol className="space-y-3">
            {entries.map((e, i) => (
              <li key={e.commit} className="flex items-start justify-between gap-3 rounded-lg p-3 ring-1 ring-slate-200">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-900">{e.message.replace(/^CMS:\s*/, '')}</p>
                  <p className="text-xs text-slate-500">
                    {e.author} · {timeAgo(e.date)} {i === 0 && <span className="font-semibold text-emerald-600">· current</span>}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  {e.url && (
                    <a href={e.url} target="_blank" rel="noreferrer" aria-label="View on GitHub" className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                      <ExternalLink className="h-4 w-4" aria-hidden />
                    </a>
                  )}
                  {i > 0 && (
                    <Button size="sm" onClick={() => restore(e)} loading={restoring === e.commit} disabled={!!restoring}>
                      Restore
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </dialog>
  );
}
