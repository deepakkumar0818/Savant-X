/** Brand gradient for a highlighted word in a heading. */
export const GRADIENT_TEXT = 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent';

/** Centred section heading used on the expertise pages: pill label, title with a gradient highlight, intro. */
export default function SectionHeading({ eyebrow, title, highlight, description }: { eyebrow: string; title: string; highlight: string; description: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-indigo-100">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
        {title} <span className={GRADIENT_TEXT}>{highlight}</span>
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
