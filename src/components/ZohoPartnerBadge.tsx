import tx from '@/content/text/components/ZohoPartnerBadge.json';
import Image from 'next/image';
import Link from 'next/link';

const ZOHO_PAGE = '/expertise/zoho-integrations';

/** Zoho Partners logo with "Official Zoho Consulting Partner", shown above the hero headline of the main pages. */
export default function ZohoPartnerBadge({ linked = true }: { linked?: boolean }) {
  const content = (
    <>
      <Image src="/images/zoho/zoho-partners.webp" alt={tx.zoho_partners_logo} width={800} height={239} loading="eager" className="h-8 w-auto sm:h-9" />
      <span className="border-l border-slate-200 pl-3 text-left text-xs font-semibold leading-tight text-slate-700 sm:text-sm">{tx.official_zoho_consulting_partner}</span>
    </>
  );
  const className = 'inline-flex items-center gap-3 rounded-xl bg-white py-2 pl-3 pr-4 shadow-sm ring-1 ring-slate-200/70';
  return linked ? (
    <Link href={ZOHO_PAGE} className={`${className} transition hover:ring-indigo-200`}>
      {content}
    </Link>
  ) : (
    <span className={className}>{content}</span>
  );
}
