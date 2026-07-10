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

export interface DonationBreakdownItem {
  amount: number
  description: string
}

export interface CurrentProjectContent extends TextSectionContent {
  goal: number
  raised: number
  breakdown: DonationBreakdownItem[]
  buttonText: string
  trustNote: string
}

export interface HowItWorksStep {
  step: number
  title: string
  description: string
}

export interface HowItWorksContent {
  headline: string
  steps: HowItWorksStep[]
}

export interface AboutContent extends TextSectionContent {
  founder: string
  founderTitle: string
}

export interface ImpactContent extends TextSectionContent {
  galleryPlaceholder: string
  videoPlaceholder: string
  date: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface FinalCtaContent extends TextSectionContent {
  ctaPrimary: string
  ctaSecondary: string
}

export interface FooterContent {
  brand: string
  tagline: string
  email: string
  whatsapp: string
  instagram: string
  instagramUrl: string
  year: number
}
