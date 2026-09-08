/**
 * Shared CTA button/link visual variants, so every button-like element on the
 * site (DonateButton, CtaLink, ...) draws from one style source instead of
 * duplicating Tailwind classes per component.
 */
export type CtaVariant = 'primary' | 'nav' | 'accent' | 'outline' | 'outlineInverse'

export const ctaVariantClasses: Record<CtaVariant, string> = {
  primary:
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3 text-base font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-brand-gold-dark',
  nav: 'inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-brand-gold-dark',
  accent:
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3 text-base font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-brand-green-dark',
  outline:
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand-purple px-7 py-3 text-base font-bold text-brand-purple transition hover:bg-brand-purple hover:text-white',
  outlineInverse:
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-3 text-base font-bold text-white transition hover:bg-white/10',
}
