/** Card surfaces matching the Work page bento grid. `inverse` cards use white text. */
export type BentoTheme = 'light' | 'peach' | 'dark' | 'blue';

export const BENTO_THEMES: Record<BentoTheme, { card: string; inverse: boolean }> = {
  light: { card: 'bg-[linear-gradient(160deg,#ffffff_0%,#eef2ff_45%,#bfdbfe_100%)] ring-1 ring-slate-200/70', inverse: false },
  peach: { card: 'bg-[linear-gradient(160deg,#fff7ed_0%,#ffe4e6_50%,#fecdd3_100%)] ring-1 ring-rose-100', inverse: false },
  dark: {
    card: 'bg-[#07070c] bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(79,70,229,0.55),transparent_70%)]',
    inverse: true,
  },
  blue: { card: 'bg-[linear-gradient(160deg,#3b82f6_0%,#4338ca_50%,#2e1065_100%)]', inverse: true },
};
