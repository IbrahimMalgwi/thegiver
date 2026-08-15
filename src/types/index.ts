import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export interface HeroContent {
  headline: string
  subhead: string
  ctaPrimary: string
  ctaSecondary: string
  caption: string
}

export interface TextSectionContent {
  headline: string
  text: string
}

export interface AboutContent extends TextSectionContent {
  eyebrow: string
  mission: string
  vision: string
  founder: string
  founderTitle: string
  founderCredentials: string
}

/** A focus area / program shown as a card. Icons come from lucide-react. */
export interface Program {
  id: string
  title: string
  icon: LucideIcon
  description: string
  items: string[]
}

export interface FlagshipContent extends TextSectionContent {
  eyebrow: string
  highlights: string[]
  note: string
}

export interface HowItWorksStep {
  step: number
  title: string
  description: string
}

export interface HowItWorksContent {
  eyebrow: string
  headline: string
  text: string
  steps: HowItWorksStep[]
}

/** Event record. Shaped to map directly onto a future Supabase `events` table. */
export interface EventItem {
  id: string
  title: string
  date: string
  location: string
  description: string
  programArea: string
  image: string | null
  status: 'upcoming' | 'past'
}

export type GalleryCategory =
  | 'Health & Hygiene'
  | 'Education'
  | 'Community Outreach'
  | 'Humanitarian Response'
  | 'Economic Empowerment'
  | 'Youth & Leadership'

/** Gallery record. Shaped to map onto a future Supabase `gallery` table. */
export interface GalleryItem {
  id: string
  title: string
  category: GalleryCategory
  image: string | null
  alt: string
}

export interface MemberSocials {
  linkedin?: string
  twitter?: string
  email?: string
}

export interface LeaderRole {
  role: string
  name: string | null
  description?: string
  bio?: string
  image?: string
  organization?: string
  socials?: MemberSocials
}

export interface TeamMember {
  role: string
  name: string
  description?: string
  bio?: string
  image?: string
  organization?: string
  socials?: MemberSocials
}

export interface FaqItem {
  q: string
  a: string
}

export interface DonateContent {
  eyebrow: string
  headline: string
  text: string
  ctaPrimary: string
  ctaSecondary: string
}

/**
 * Donation configuration. Presentation reads this through the donation service,
 * so a real provider (Paystack, Flutterwave, Stripe, ...) can be wired in later
 * by flipping `enabled` and implementing the service without UI changes.
 */
export interface DonationConfig {
  enabled: boolean
  comingSoonMessage: string
}

export interface ContactContent {
  phone: string
  email: string
  addressLines: string[]
  founder: string
}

export interface FooterContent {
  brand: string
  brandShort: string
  tagline: string
  contact: ContactContent
  instagram: string
  instagramUrl: string
  facebook: string
  facebookUrl: string
  year: number
}
