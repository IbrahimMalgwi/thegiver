import {
  Briefcase,
  Droplets,
  GraduationCap,
  HandHeart,
  ShieldCheck,
  Users,
} from 'lucide-react'
import type {
  AboutContent,
  DonateContent,
  DonationConfig,
  FaqItem,
  FlagshipContent,
  FooterContent,
  HeroContent,
  HowItWorksContent,
  LeaderRole,
  NavLink,
  Program,
  TextSectionContent,
} from '../types'

export const ORG_NAME = 'Queen Shavah Sustainable Development Initiative'
export const ORG_NAME_FULL = 'QUEEN SHAVAH SUSTAINABLE DEVELOPMENT INITIATIVE'
export const ORG_NAME_SHORT = 'Queen Shavah'
export const ORG_TAGLINE = 'Dignity for All. Giving Hands. Caring Hearts. No One Left Behind.'
export const ORG_TAGLINE_SHORT = 'Dignity for All.'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Projects', href: '#projects' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Contact', href: '#contact' },
]

export const hero: HeroContent = {
  headline: 'Dignity for All. Opportunity for Everyone.',
  subhead:
    'Queen Shavah Sustainable Development Initiative is committed to empowering vulnerable individuals, families, and communities across Nigeria through health, education, protection, economic empowerment, and sustainable development.',
  ctaPrimary: 'Support Our Mission',
  ctaSecondary: 'Explore Our Programs',
  caption: 'A Nigerian nonprofit for dignity, health, education & empowerment',
}

export const intro: TextSectionContent = {
  headline: 'The hands that give. The heart that cares.',
  text: 'Across Nigeria, too many people are held back by poverty, poor health, unsafe environments, and limited access to education and opportunity. We work alongside communities to change that — combining direct programs, advocacy, partnerships, and sustainable development so that dignity, safety, and opportunity are within reach for everyone, no matter their gender or circumstance.',
}

export const about: AboutContent = {
  eyebrow: 'About Us',
  headline: 'Empowering people and communities across Nigeria',
  text: 'Queen Shavah Sustainable Development Initiative is a Nigerian nonprofit organization committed to empowering individuals, families, and communities across Nigeria. We believe that dignity, education, safety, health, and opportunity should not depend on gender, poverty, or circumstance.',
  mission:
    'To be the hands that give and the heart that cares. We advance health, education, safety, livelihoods, and leadership for vulnerable persons through direct programs, advocacy, partnerships, and sustainable community development.',
  vision:
    'A Nigeria where every person lives with dignity, safety, education, and the opportunity to lead and thrive.',
  founder: 'Ruth Elisha Shavah',
  founderTitle: 'Founder & Executive Director',
}

export const programsIntro: TextSectionContent = {
  headline: 'Our Programs',
  text: 'We work across six connected focus areas, meeting immediate needs while building the foundations for lasting change.',
}

export const programs: Program[] = [
  {
    id: 'health-hygiene',
    title: 'Health & Hygiene',
    icon: Droplets,
    description:
      'Improving health and hygiene for vulnerable people, with menstrual hygiene as a flagship focus.',
    items: ['Menstrual hygiene', 'Dignity kits', 'WASH', 'Health education', 'Disease prevention'],
  },
  {
    id: 'safety-protection',
    title: 'Safety & Protection',
    icon: ShieldCheck,
    description:
      'Preventing gender-based violence and standing with survivors and vulnerable persons.',
    items: [
      'Gender-based violence prevention',
      'Survivor support',
      'Counselling referrals',
      'Safe spaces',
      'Protection of vulnerable persons',
    ],
  },
  {
    id: 'crisis-response',
    title: 'Crisis Response',
    icon: HandHeart,
    description:
      'Providing humanitarian assistance to displaced and vulnerable families in times of need.',
    items: [
      'Emergency relief',
      'Food',
      'Shelter',
      'Dignity kits',
      'Support for displaced and vulnerable families',
    ],
  },
  {
    id: 'education-scholarships',
    title: 'Education & Scholarships',
    icon: GraduationCap,
    description:
      'Removing barriers to learning through scholarships, mentorship, and better school environments.',
    items: [
      'Scholarships',
      'Learning materials',
      'Mentorship',
      'Leadership development',
      'School infrastructure',
      'Libraries and sanitary facilities',
    ],
  },
  {
    id: 'economic-empowerment',
    title: 'Economic Empowerment',
    icon: Briefcase,
    description:
      'Building livelihoods and food security through skills, training, and enterprise support.',
    items: [
      'Skills acquisition',
      'Vocational training',
      'Micro-enterprise support',
      'Livelihood programs',
      'Food security',
    ],
  },
  {
    id: 'leadership-governance',
    title: 'Leadership & Governance',
    icon: Users,
    description:
      'Growing confident, inclusive leaders and strengthening civic participation.',
    items: [
      'Leadership development',
      'Civic engagement',
      'Advocacy',
      'Public speaking',
      'Inclusive representation',
    ],
  },
]

export const flagship: FlagshipContent = {
  eyebrow: 'Flagship Program',
  headline: 'Dignity for All',
  text: 'Dignity for All provides menstrual hygiene products, health education, and hygiene support to vulnerable girls and students, helping remove barriers that can prevent girls from staying in school.',
  highlights: [
    'Menstrual hygiene products and dignity kits',
    'Practical health and hygiene education',
    'Support that helps girls stay in school',
  ],
  note: 'Part of our Health & Hygiene program. We share updates from our activities as they happen.',
}

export const getInvolved: HowItWorksContent = {
  eyebrow: 'Get Involved',
  headline: 'Be part of the change',
  text: 'There are many ways to help us reach more people with dignity, health, education, and opportunity.',
  steps: [
    {
      step: 1,
      title: 'Give',
      description:
        'Support our programs with a donation. Online giving is coming soon — reach out to us in the meantime to contribute.',
    },
    {
      step: 2,
      title: 'Volunteer',
      description:
        'Share your time and skills with our community initiatives, outreaches, and events across Nigeria.',
    },
    {
      step: 3,
      title: 'Partner',
      description:
        'Organizations, schools, and institutions can partner with us to expand our reach and deepen our impact.',
    },
  ],
}

export const leadershipIntro: TextSectionContent = {
  headline: 'Leadership & Governance',
  text: 'Our work is guided by a dedicated team committed to accountability, transparency, and service.',
}

export const leadershipRoles: LeaderRole[] = [
  { role: 'Board Chairman', name: null },
  { role: 'Executive Director / Founder', name: 'Ruth Elisha Shavah' },
  { role: 'Secretary', name: null },
  { role: 'Treasurer', name: null },
  { role: 'Program Director', name: null },
]

export const eventsIntro: TextSectionContent = {
  headline: 'Events',
  text: 'Join us at our community initiatives, outreaches, and gatherings. Check back here for what is coming up next.',
}

export const galleryIntro: TextSectionContent = {
  headline: 'Gallery & Impact',
  text: 'Moments from our work across Nigeria — from health and hygiene to education, outreach, and empowerment. Photos from our activities will appear here.',
}

export const faqs: FaqItem[] = [
  {
    q: 'What does Queen Shavah Sustainable Development Initiative do?',
    a: 'We are a Nigerian nonprofit working across health and hygiene, safety and protection, crisis response, education, economic empowerment, and leadership to help vulnerable people and communities live with dignity and opportunity.',
  },
  {
    q: 'Where do you work?',
    a: 'We work with individuals, families, and communities across Nigeria.',
  },
  {
    q: 'How can I support your work?',
    a: 'You can give, volunteer, or partner with us. Online donations are coming soon — until then, please contact us to discuss how you would like to help.',
  },
  {
    q: 'Can my organization partner with you?',
    a: 'Yes. Schools, institutions, and organizations are welcome to partner with us. Reach out through our contact details and we will follow up.',
  },
]

export const donate: DonateContent = {
  eyebrow: 'Donate',
  headline: 'Support Our Mission',
  text: 'Your generosity helps us advance dignity, health, education, protection, and opportunity across Nigeria. An online donation platform is on the way — in the meantime, contact us to learn how you can give.',
  ctaPrimary: 'Get in Touch to Give',
  ctaSecondary: 'Explore Our Programs',
}

export const donationConfig: DonationConfig = {
  enabled: false,
  comingSoonMessage: 'Online donations are coming soon.',
}

export const footer: FooterContent = {
  brand: ORG_NAME,
  brandShort: ORG_NAME_SHORT,
  tagline: ORG_TAGLINE,
  contact: {
    phone: '+234 817 884 8534',
    email: 'info@queenshavahsustainabledevelopmentinitiative.org',
    addressLines: [
      'House No 262 Odeh Adeka Street',
      'Greencity Residences',
      'Karsana District, Gwarinpa',
      'Abuja, Nigeria',
    ],
    founder: 'Ruth Elisha Shavah',
  },
  instagram: '@queenshavahinitiative',
  instagramUrl: 'https://instagram.com/queenshavahinitiative',
  facebook: 'Queen Shavah Initiative',
  facebookUrl: 'https://facebook.com/queenshavahinitiative',
  year: 2026,
}

export const uiText = {
  mobileMenuOpen: 'Open menu',
  mobileMenuClose: 'Close menu',
  raisedLabel: 'Raised',
  goalLabel: 'Goal',
  heroAlt: `${ORG_NAME_SHORT} community programs across Nigeria`,
  footerAboutHeading: 'About',
  footerContactHeading: 'Contact Info',
  footerSocialHeading: 'Follow Us',
  backToTop: 'Back to top',
  donateCtaLabel: 'Donate',
}
