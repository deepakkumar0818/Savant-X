'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Copy, Upload } from 'lucide-react';
import { adminFetch } from '@/components/admin/client';
import { useDeploy } from '@/components/admin/deploy';
import { uploadImage } from '@/components/admin/fields';
import { Button, Card, Notice, PageHeader, Spinner, useToast } from '@/components/admin/ui';

export default function AdminMedia() {
  const toast = useToast();
  const deploy = useDeploy();
  const fileRef = useRef<HTMLInputElement>(null);
  const [media, setMedia] = useState<{ uploads: string[]; images: string[] } | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState('');
  const [fresh, setFresh] = useState<Record<string, string>>({});

  const load = useCallback(() => {
    adminFetch<{ uploads: string[]; images: string[] }>('/api/admin/media/').then(setMedia).catch((e) => setError(e.message));
  }, []);
  useEffect(load, [load]);

  const upload = async (files: FileList) => {
    setBusy(true);
    for (const file of Array.from(files)) {
      try {
        const r = await uploadImage(file);
        setFresh((f) => ({ ...f, [r.src]: URL.createObjectURL(file) }));
        deploy.track(r.commit, r.mode);
        toast('success', `${file.name} uploaded.`);
      } catch (e) {
        toast('error', `${file.name}: ${e instanceof Error ? e.message : 'upload failed'}`);
      }
    }
    setBusy(false);
    if (fileRef.current) fileRef.current.value = '';
    load();
  };

  const copy = async (src: string) => {
    await navigator.clipboard.writeText(src).catch(() => {});
    setCopied(src);
    setTimeout(() => setCopied(''), 1500);
  };

  const grid = (list: string[]) => (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {list.map((src) => (
        <figure key={src} className="overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fresh[src] ?? src} alt="" loading="lazy" className="aspect-video w-full bg-slate-100 object-cover" />
          <figcaption className="flex items-center gap-1 p-2">
            <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-slate-500" title={src}>
              {src}
            </span>
            <button type="button" onClick={() => copy(src)} aria-label={`Copy path ${src}`} className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
              {copied === src ? <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden /> : <Copy className="h-3.5 w-3.5" aria-hidden />}
            </button>
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <>
      <PageHeader
        title="Media"
        description="Upload PNG, JPEG, WebP or GIF images (up to 4 MB). Images are optimised automatically when shown on the site. Use them in Projects and Products, or copy the path."
        actions={
          <>
            <input ref={fileRef} type="file" multiple accept="image/png,image/jpeg,image/webp,image/gif" className="hidden" onChange={(e) => e.target.files?.length && upload(e.target.files)} />
            <Button variant="primary" loading={busy} onClick={() => fileRef.current?.click()}>
              {!busy && <Upload className="h-4 w-4" aria-hidden />}
              Upload images
            </Button>
          </>
        }
      />
      {error ? (
        <Notice tone="error">{error}</Notice>
      ) : !media ? (
        <Spinner />
      ) : (
        <div className="space-y-6">
          <Card title={`Uploaded (${media.uploads.length})`} description="New uploads appear on the live website after it finishes updating (about 2 minutes).">
            {media.uploads.length ? grid(media.uploads) : <p className="text-sm text-slate-500">No uploads yet.</p>}
          </Card>
          <Card title={`Site images (${media.images.length})`}>{grid(media.images)}</Card>
        </div>
      )}
    </>
  );
}
