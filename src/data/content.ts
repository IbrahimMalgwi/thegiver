import type {
  AboutContent,
  CurrentProjectContent,
  FaqItem,
  FinalCtaContent,
  FooterContent,
  HeroContent,
  HowItWorksContent,
  ImpactContent,
  NavLink,
  TextSectionContent,
} from '../types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Impact', href: '#impact' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
]

export const hero: HeroContent = {
  headline: 'Give Dignity. Give Education. Give Hope.',
  subhead: 'We provide menstrual hygiene kits so girls in Nigeria never have to miss school.',
  ctaPrimary: 'Donate Now',
  ctaSecondary: 'See Our Impact',
  caption: '$12 sponsors 1 girl for 6 months',
}

export const problem: TextSectionContent = {
  headline: 'No Pads. No School.',
  text: "In Nigeria, thousands of girls miss 4-5 days of school every month because they lack basic menstrual hygiene products. Missing school means falling behind. Falling behind means dropping out. This isn't just about pads. It's about dignity, health, and the right to an education. At The Giver, we're changing that. One kit. One girl. One classroom at a time.",
}

export const currentProject: CurrentProjectContent = {
  headline: 'Project #1: Dignity for 200 Nigerian Girls',
  text: 'Our goal is to provide 200 girls in 2 secondary schools with 6 months of menstrual hygiene kits. Each kit includes: Pads, soap, underwear, and hygiene education.',
  goal: 2400,
  raised: 1200,
  breakdown: [
    { amount: 12, description: '1 girl for 6 months' },
    { amount: 60, description: '5 girls' },
    { amount: 240, description: '20 girls' },
  ],
  buttonText: 'Donate via GoFundMe',
  trustNote: 'We post photo and video updates after every distribution. 100% of your donation goes to kits.',
}

export const howItWorks: HowItWorksContent = {
  headline: 'How Your Gift Reaches Them',
  steps: [
    {
      step: 1,
      title: 'You Give',
      description: 'Donate securely online. Choose a one-time gift or become a monthly Giver.',
    },
    {
      step: 2,
      title: 'We Deliver',
      description:
        'Our team purchases kits locally and delivers them directly to schools in Nigeria with hygiene training.',
    },
    {
      step: 3,
      title: 'You See Impact',
      description: 'We send you photos, stories, and updates so you can see the girls you helped.',
    },
  ],
}

export const about: AboutContent = {
  headline: 'We Believe Every Girl Deserves to Learn',
  text: 'The Giver was founded in 2026 to end period poverty in Nigeria. It started with a simple belief: no girl should miss school because of her period. We began with 200 girls in Nigeria. Our vision is to reach over 200,000 girls across Nigeria. This is more than charity. This is dignity.',
  founder: 'Queen Shavah',
  founderTitle: 'Teacher. Advocate. Giver.',
}

export const impact: ImpactContent = {
  headline: 'See The Difference You Make',
  text: 'Follow along as we deliver kits and share stories from the girls.',
  galleryPlaceholder: 'Photo Gallery Placeholder',
  videoPlaceholder: 'Video Update Placeholder',
  date: 'September 2026',
}

export const faqs: FaqItem[] = [
  {
    q: 'Where does my money go?',
    a: '100% goes to purchasing kits and delivery. We post receipts and photos after each distribution.',
  },
  {
    q: 'Can I donate from the US?',
    a: 'Yes! We accept PayPal, Cards, and GoFundMe. US donors can get a receipt.',
  },
  { q: 'Can I sponsor a specific school?', a: "Yes. Contact us and we'll set it up." },
]

export const finalCta: FinalCtaContent = {
  headline: 'Join The Movement',
  text: '200 girls are waiting. Be the reason they stay in school.',
  ctaPrimary: 'Donate $12 Now',
  ctaSecondary: 'Become a Monthly Giver',
}

export const footer: FooterContent = {
  brand: 'The Giver',
  tagline: 'Give Dignity. Give Education. Give Hope.',
  email: 'thegiver@gmail.com',
  whatsapp: '+234 8178848534',
  instagram: '@thegivergirls',
  instagramUrl: 'https://instagram.com/thegivergirls',
  year: 2026,
}

export const uiText = {
  mobileMenuOpen: 'Open menu',
  mobileMenuClose: 'Close menu',
  donationLink: '#',
  raisedLabel: 'Raised',
  goalLabel: 'Goal',
  progressLabel: '50% funded',
  impactAlt: 'The Giver dignity kit distribution preview',
  galleryAlt: 'Photo gallery placeholder',
  videoAlt: 'Video update placeholder',
  playVideo: 'Play video',
  footerAboutHeading: 'About',
  footerContactHeading: 'Contact Info',
  footerSocialHeading: 'Social Links',
  backToTop: 'Back to top',
}
