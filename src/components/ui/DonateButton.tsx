import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { uiText } from '../../data/content'
import { ctaVariantClasses, type CtaVariant } from './ctaVariants'

type Variant = Extract<CtaVariant, 'primary' | 'nav' | 'accent' | 'outline'>

interface DonateButtonProps {
  variant?: Variant
  label?: string
  className?: string
  onClick?: () => void
}

/**
 * Single entry point for the donate action across the site — every call site
 * routes here so the destination only needs to change in one place.
 */
export function DonateButton({ variant = 'primary', label, className, onClick }: DonateButtonProps) {
  const text = label ?? uiText.donateCtaLabel

  return (
    <Link
      to="/donate"
      onClick={onClick}
      className={`${ctaVariantClasses[variant]} ${className ?? ''}`.trim()}
    >
      {text}
      {variant === 'accent' ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </Link>
  )
}
