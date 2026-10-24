import tx from '@/content/text/components/zoho/landing/TeamPackages.json';
import { type LucideIcon } from 'lucide-react';
import OfferBento from './OfferBento';
import type { BentoTheme } from './bentoThemes';
import { TEAM_PACKAGES, ZOHO_LOGOS } from './data';

const PACKAGE_STYLE: Record<string, { tag: string; logo?: string; icon?: LucideIcon }> = {
  'people-setup': { tag: 'HR', logo: ZOHO_LOGOS['Zoho People'] },
  'recruit-setup': { tag: 'Hiring', logo: ZOHO_LOGOS['Zoho Recruit'] },
  'zoho-migration': { tag: 'Email', logo: ZOHO_LOGOS['Zoho Mail'] },
};

// Three cards in a row, each showing its deliverables window.
const WIDE = [true, true, true];
const THEMES: BentoTheme[] = ['dark', 'blue', 'light'];

/** Zoho People, Zoho Recruit and Zoho Mail migration packages. */
export default function TeamPackages() {
  return (
    <OfferBento
      id="team-packages"
      eyebrow={tx.hr_hiring_and_email}
      title={tx.set_up_your_team_on}
      description={tx.fixed_price_setup_for_zoho}
      cta={{ label: tx.ask_about_these_setups, service: 'consultation' }}
      offers={TEAM_PACKAGES.map((pkg) => ({ ...pkg, ...PACKAGE_STYLE[pkg.id] }))}
      wide={WIDE}
      themes={THEMES}
      columns={3}
      footnote="Prices are starting prices before applicable taxes. Your final quote depends on the agreed scope."
    />
  );
}
