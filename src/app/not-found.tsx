import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-20">
      <div className="max-w-md text-center">
        <p className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-6xl font-bold text-transparent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110"
          >
            Go to home page
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:ring-indigo-300"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
