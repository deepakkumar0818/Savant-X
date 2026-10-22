/**
 * Lightweight placeholder shown by route loading.tsx files while a page that was not
 * prefetched is loading. It mirrors the common page shape (hero, then a card grid) so
 * the real content replaces it without a jump.
 */
export default function PageSkeleton({ cards = 3 }: { cards?: number }) {
  const block = 'rounded-xl bg-slate-200/70 motion-safe:animate-pulse';
  return (
    <div className="min-h-[80vh] bg-white px-4 pb-20 pt-14 sm:px-8 lg:px-12" aria-busy="true">
      <p className="sr-only" role="status">
        Loading page
      </p>
      <div aria-hidden className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className={`h-6 w-36 rounded-full ${block}`} />
          <div className={`mt-6 h-10 w-full sm:h-14 ${block}`} />
          <div className={`mt-3 h-10 w-3/4 sm:h-14 ${block}`} />
          <div className={`mt-6 h-4 w-full ${block}`} />
          <div className={`mt-2 h-4 w-5/6 ${block}`} />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className={`h-12 w-full sm:w-44 ${block}`} />
            <div className={`h-12 w-full sm:w-40 ${block}`} />
          </div>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: cards }, (_, i) => (
            <div key={i} className="rounded-2xl p-5 ring-1 ring-slate-200/80">
              <div className={`aspect-[16/10] w-full ${block}`} />
              <div className={`mt-5 h-5 w-2/3 ${block}`} />
              <div className={`mt-3 h-4 w-full ${block}`} />
              <div className={`mt-2 h-4 w-4/5 ${block}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
