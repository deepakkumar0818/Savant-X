import tx from '@/content/text/components/zoho/landing/ZohoPackages.json';
import { Plug, type LucideIcon } from 'lucide-react';
import OfferBento from './OfferBento';
import type { BentoTheme } from './bentoThemes';
import { PACKAGES, ZOHO_LOGOS } from './data';

const PACKAGE_STYLE: Record<string, { tag: string; logo?: string; icon?: LucideIcon }> = {
  'crm-quickstart': { tag: 'Sales', logo: ZOHO_LOGOS['Zoho CRM'] },
  'creator-mini-app': { tag: 'Custom apps', logo: ZOHO_LOGOS['Zoho Creator'] },
  'books-setup': { tag: 'Finance', logo: ZOHO_LOGOS['Zoho Books'] },
  'workflow-automation': { tag: 'Automation', logo: '/images/zoho/apps/workflow-automation.webp' },
  'zoho-integration': { tag: 'Integration', icon: Plug },
};

// Bento rhythm for a 4-column grid: wide cards (span 2) show the deliverables window.
const WIDE = [true, false, false, true, true];
const THEMES: BentoTheme[] = ['blue', 'light', 'dark', 'dark', 'peach'];

/** Fixed-price packages in the same bento style as the Work page project grid. */
export default function ZohoPackages() {
  return (
    <OfferBento
      id="packages"
      eyebrow={tx.fixed_price_packages}
      title={tx.start_small_get_results_fast}
      description={tx.clear_scope_and_a_starting}
      cta={{ label: tx.not_sure_ask_us, service: 'consultation' }}
      offers={PACKAGES.map((pkg) => ({ ...pkg, ...PACKAGE_STYLE[pkg.id] }))}
      wide={WIDE}
      themes={THEMES}
      footnote="Prices are starting prices before applicable taxes. Your final quote depends on the agreed scope."
    />
  );
}
