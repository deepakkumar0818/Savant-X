'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { adminFetch, contentUrl } from './client';
import { useDeploy } from './deploy';
import { useLeaveWarning, useToast } from './ui';

type Loaded = { path: string; sha: string; data: unknown };
type PublishResult = { commit: string; mode: 'github' | 'local' | 'readonly'; files: { path: string; sha: string }[] };

const draftKey = (path: string) => `sx-admin-draft:${path}`;
const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

function readDraft(path: string, sha: string): unknown {
  try {
    const raw = localStorage.getItem(draftKey(path));
    if (!raw) return undefined;
    const d = JSON.parse(raw) as { sha: string; data: unknown };
    return d.sha === sha ? d.data : undefined;
  } catch {
    return undefined;
  }
}
function writeDraft(path: string, sha: string, data: unknown | undefined) {
  try {
    if (data === undefined) localStorage.removeItem(draftKey(path));
    else localStorage.setItem(draftKey(path), JSON.stringify({ sha, data }));
  } catch {
    // Storage full or blocked: edits still work, they just are not kept across reloads.
  }
}

/**
 * Loads content files, tracks edits (kept in this browser until published) and publishes
 * them as one change.
 */
export function useContent<T = unknown>(paths: string[]) {
  const toast = useToast();
  const deploy = useDeploy();
  const key = paths.join('|');
  const [loaded, setLoaded] = useState<Map<string, Loaded> | null>(null);
  const [drafts, setDrafts] = useState<Map<string, T>>(new Map());
  const [error, setError] = useState('');
  const [publishing, setPublishing] = useState(false);
  const [restored, setRestored] = useState(0);
  const loadedRef = useRef(loaded);
  loadedRef.current = loaded;

  const load = useCallback(async () => {
    if (!paths.length) return;
    setError('');
    setLoaded(null);
    try {
      const res = await adminFetch<{ files: Loaded[] }>(contentUrl(paths));
      const map = new Map(res.files.map((f) => [f.path, f]));
      const restoredDrafts = new Map<string, T>();
      for (const f of res.files) {
        const d = readDraft(f.path, f.sha);
        if (d !== undefined && !same(d, f.data)) restoredDrafts.set(f.path, d as T);
      }
      setLoaded(map);
      setDrafts(restoredDrafts);
      setRestored(restoredDrafts.size);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load the content.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    void load();
  }, [load]);

  const get = useCallback((path: string): T | undefined => (drafts.has(path) ? drafts.get(path) : (loaded?.get(path)?.data as T | undefined)), [drafts, loaded]);

  const set = useCallback((path: string, data: T) => {
    const base = loadedRef.current?.get(path);
    if (!base) return;
    setDrafts((prev) => {
      const next = new Map(prev);
      if (same(data, base.data)) {
        next.delete(path);
        writeDraft(path, base.sha, undefined);
      } else {
        next.set(path, data);
        writeDraft(path, base.sha, data);
      }
      return next;
    });
  }, []);

  const dirty = useMemo(() => [...drafts.keys()], [drafts]);
  useLeaveWarning(dirty.length > 0);

  const discard = useCallback((path?: string) => {
    setDrafts((prev) => {
      const next = new Map(prev);
      for (const p of path ? [path] : [...prev.keys()]) {
        next.delete(p);
        const base = loadedRef.current?.get(p);
        if (base) writeDraft(p, base.sha, undefined);
      }
      return next;
    });
    setRestored(0);
  }, []);

  const publish = useCallback(
    async (message?: string) => {
      if (!loaded || !drafts.size) return false;
      setPublishing(true);
      try {
        const res = await adminFetch<PublishResult>('/api/admin/content/', {
          method: 'POST',
          body: JSON.stringify({ message, changes: [...drafts].map(([path, data]) => ({ path, data, baseSha: loaded.get(path)?.sha ?? null })) }),
        });
        // The server may have normalised the data (trimmed, re-ordered): reload the published versions.
        const fresh = await adminFetch<{ files: Loaded[] }>(contentUrl([...drafts.keys()]));
        setLoaded((prev) => {
          const next = new Map(prev);
          for (const f of fresh.files) next.set(f.path, f);
          return next;
        });
        for (const p of drafts.keys()) {
          const base = loaded.get(p);
          if (base) writeDraft(p, base.sha, undefined);
        }
        setDrafts(new Map());
        setRestored(0);
        deploy.track(res.commit, res.mode);
        toast('success', res.mode === 'local' ? 'Saved to the project files.' : 'Published. The website is rebuilding; changes go live in about 2 minutes.');
        return true;
      } catch (e) {
        toast('error', e instanceof Error ? e.message : 'Publishing failed.');
        return false;
      } finally {
        setPublishing(false);
      }
    },
    [loaded, drafts, deploy, toast]
  );

  return { loading: !loaded && !error, error, reload: load, get, set, original: (p: string) => loaded?.get(p)?.data as T | undefined, dirty, discard, publish, publishing, restored };
}
