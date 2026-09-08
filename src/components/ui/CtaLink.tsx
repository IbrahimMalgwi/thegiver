import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ctaVariantClasses, type CtaVariant } from './ctaVariants'

interface CtaLinkProps {
  to: string
  variant: Extract<CtaVariant, 'accent' | 'outline' | 'outlineInverse'>
  icon?: ReactNode
  className?: string
  children: ReactNode
}

/**
 * Generic CTA link for destinations other than the donate flow (which stays
 * on DonateButton, the single entry point for that action). Draws from the
 * same `ctaVariantClasses` as DonateButton so styling matches everywhere.
 */
export function CtaLink({ to, variant, icon, className, children }: CtaLinkProps) {
  return (
    <Link to={to} className={`${ctaVariantClasses[variant]} ${className ?? ''}`.trim()}>
      {children}
      {icon}
    </Link>
  )
}
