'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RotateCw } from 'lucide-react';

/** Shown when a page throws while rendering or loading, instead of a blank screen. */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-20" role="alert">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">This page could not be loaded</h1>
        <p className="mt-4 text-slate-600">It may be a temporary connection problem. Please try again, or go back to the home page.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110"
          >
            <RotateCw className="h-4 w-4" aria-hidden />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:ring-indigo-300"
          >
            Go to home page
          </Link>
        </div>
      </div>
    </section>
  );
}
