import { Link } from 'react-router-dom'
import { getDonationConfig } from '../../services/donationService'
import { uiText } from '../../data/content'

type Variant = 'primary' | 'nav'

interface DonateButtonProps {
  variant?: Variant
  label?: string
  className?: string
}

const variantClasses: Record<Variant, string> = {
  primary:
    'inline-flex min-h-12 items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-base font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-brand-gold-dark',
  nav: 'inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-brand-gold-dark',
}

/**
 * Single entry point for the donate action across the site.
 *
 * Online payments are not connected yet, so this always routes to the on-page
 * donation section (#donate), which explains that giving is coming soon. When a
 * provider is wired into the donation service, only this component needs to open
 * the checkout flow instead — every call site stays the same.
 */
export function DonateButton({ variant = 'primary', label, className }: DonateButtonProps) {
  const config = getDonationConfig()
  const text = label ?? uiText.donateCtaLabel

  return (
    <Link
      to="/#donate"
      className={`${variantClasses[variant]} ${className ?? ''}`.trim()}
      aria-label={config.enabled ? text : `${text} — ${config.comingSoonMessage}`}
    >
      {text}
    </Link>
  )
}
