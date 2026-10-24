'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, ImagePlus, Loader2, Plus, Trash2, Upload, X } from 'lucide-react';
import { CMS_ICON_NAMES, cmsIcon } from '@/lib/cms/icons';
import { adminFetch } from './client';
import { useDeploy } from './deploy';
import { Button, inputClass, Spinner, useToast } from './ui';

// ---------------------------------------------------------------------------
// List of text items (add / remove / reorder)
// ---------------------------------------------------------------------------

export function StringListField({ value, onChange, placeholder = 'New item', addLabel = 'Add item', describe }: { value: string[]; onChange: (v: string[]) => void; placeholder?: string; addLabel?: string; describe?: (item: string) => React.ReactNode }) {
  const move = (i: number, d: number) => {
    const next = [...value];
    [next[i], next[i + d]] = [next[i + d], next[i]];
    onChange(next);
  };
  return (
    <div className="space-y-2">
      {value.map((item, i) => (
        <div key={i}>
          <div className="flex items-center gap-1.5">
            <input value={item} onChange={(e) => onChange(value.map((x, j) => (j === i ? e.target.value : x)))} placeholder={placeholder} aria-label={`Item ${i + 1}`} className={inputClass} />
            <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move up" className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30">
              <ArrowUp className="h-4 w-4" aria-hidden />
            </button>
            <button type="button" onClick={() => move(i, 1)} disabled={i === value.length - 1} aria-label="Move down" className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30">
              <ArrowDown className="h-4 w-4" aria-hidden />
            </button>
            <button type="button" onClick={() => onChange(value.filter((_, j) => j !== i))} aria-label="Remove" className="rounded-md p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
              <Trash2 className="h-4 w-4" aria-hidden />
            </button>
          </div>
          {describe && item.trim() && <div className="mt-1 pl-1 text-xs">{describe(item)}</div>}
        </div>
      ))}
      <Button size="sm" variant="ghost" onClick={() => onChange([...value, ''])}>
        <Plus className="h-3.5 w-3.5" aria-hidden />
        {addLabel}
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Icon picker
// ---------------------------------------------------------------------------

export function IconSelect({ value, onChange, id }: { value: string; onChange: (v: string) => void; id?: string }) {
  const Icon = cmsIcon(value);
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
        {!CMS_ICON_NAMES.includes(value as never) && <option value={value}>Choose an icon</option>}
        {CMS_ICON_NAMES.map((n) => (
          <option key={n} value={n}>
            {n.replace(/([a-z])([A-Z0-9])/g, '$1 $2')}
          </option>
        ))}
      </select>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Images: upload or choose from the media library
// ---------------------------------------------------------------------------

export type ImageValue = { src: string; alt: string; width: number; height: number };

/** Uploads a file; returns its site path and size. Shared by ImageField and the Media page. */
export async function uploadImage(file: File) {
  const body = new FormData();
  body.append('file', file);
  return adminFetch<{ src: string; width: number; height: number; commit: string; mode: string }>('/api/admin/upload/', { method: 'POST', body });
}

function readSize(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => reject(new Error('This image is not on the website yet. If you just uploaded it, wait for the website to finish updating.'));
    img.src = src;
  });
}

function MediaPicker({ onPick, onClose }: { onPick: (src: string) => void; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [media, setMedia] = useState<{ uploads: string[]; images: string[] } | null>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    ref.current?.showModal();
    adminFetch<{ uploads: string[]; images: string[] }>('/api/admin/media/').then(setMedia).catch((e) => setError(e.message));
  }, []);
  const grid = (list: string[]) => (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {list.map((src) => (
        <button key={src} type="button" onClick={() => onPick(src)} className="group overflow-hidden rounded-lg text-left ring-1 ring-slate-200 hover:ring-2 hover:ring-indigo-500">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" loading="lazy" className="aspect-video w-full bg-slate-100 object-cover" />
          <span className="block truncate px-2 py-1 font-mono text-[10px] text-slate-500">{src.split('/').pop()}</span>
        </button>
      ))}
    </div>
  );
  return (
    <dialog ref={ref} onClose={onClose} className="w-[min(56rem,calc(100vw-2rem))] rounded-xl p-0 shadow-2xl backdrop:bg-slate-900/50">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-slate-900">Choose an image</h2>
        <button type="button" onClick={() => ref.current?.close()} aria-label="Close" className="rounded-md p-1 text-slate-400 hover:bg-slate-100">
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <div className="max-h-[70vh] space-y-6 overflow-y-auto p-5">
        {error && <p className="text-sm text-rose-600">{error}</p>}
        {!media && !error && <Spinner />}
        {media && (
          <>
            {media.uploads.length > 0 && (
              <section>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Uploaded</h3>
                {grid(media.uploads)}
              </section>
            )}
            <section>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Site images</h3>
              {grid(media.images)}
            </section>
          </>
        )}
      </div>
    </dialog>
  );
}

export function ImageField({ value, onChange, altPlaceholder = 'Describe the image for screen readers and search engines' }: { value: ImageValue | undefined; onChange: (v: ImageValue | undefined) => void; altPlaceholder?: string }) {
  const toast = useToast();
  const deploy = useDeploy();
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [picking, setPicking] = useState(false);
  const [preview, setPreview] = useState('');

  const upload = async (file: File) => {
    setBusy(true);
    try {
      const local = URL.createObjectURL(file);
      const r = await uploadImage(file);
      setPreview(local);
      onChange({ src: r.src, alt: value?.alt ?? '', width: r.width, height: r.height });
      deploy.track(r.commit, r.mode);
      toast('success', 'Image uploaded. Publish to use it on the page.');
    } catch (e) {
      toast('error', e instanceof Error ? e.message : 'Upload failed.');
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  const pick = async (src: string) => {
    setPicking(false);
    try {
      const size = await readSize(src);
      setPreview('');
      onChange({ src, alt: value?.alt ?? '', ...size });
    } catch (e) {
      toast('error', e instanceof Error ? e.message : 'Could not read that image.');
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-start gap-3">
        <div className="flex h-28 w-44 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200">
          {busy ? (
            <Loader2 className="h-5 w-5 animate-spin text-slate-400" aria-hidden />
          ) : value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview || value.src} alt="" className="h-full w-full object-cover object-top" />
          ) : (
            <ImagePlus className="h-6 w-6 text-slate-300" aria-hidden />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif" className="hidden" onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
          <Button size="sm" onClick={() => fileRef.current?.click()} disabled={busy}>
            <Upload className="h-3.5 w-3.5" aria-hidden />
            Upload image
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setPicking(true)} disabled={busy}>
            Choose from media
          </Button>
          {value && (
            <Button size="sm" variant="ghost" onClick={() => onChange(undefined)} disabled={busy} className="text-rose-600">
              Remove image
            </Button>
          )}
          {value && <span className="font-mono text-[11px] text-slate-400">{value.width}×{value.height}</span>}
        </div>
      </div>
      {value && <input value={value.alt} onChange={(e) => onChange({ ...value, alt: e.target.value })} placeholder={altPlaceholder} aria-label="Image description (alt text)" className={inputClass} />}
      {picking && <MediaPicker onPick={pick} onClose={() => setPicking(false)} />}
    </div>
  );
}
