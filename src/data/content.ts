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
  TeamMember,
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
  { label: 'Team', href: '/team' },
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
  founderCredentials: 'ACTI, ACA, FCCrFA',
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
    items: ['Menstrual health hygiene for girls', 'Dignity kits', 'WASH', 'Health education', 'Disease prevention'],
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
    'Menstrual health hygiene for girls',
    'Practical health and hygiene education',
    'Support Let\'s keep girls in school',
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
  {
    role: 'Executive Director / Founder',
    name: 'Ruth Elisha Shavah',
    description: 'Leads daily operations, programs, and organizational delivery.',
    bio: 'Mrs. Ruth Elisha Shavah is a Chartered Accountant, Professional Tax Administrator, and Chartered Forensic Accountant and Investigator with extensive experience in financial management, governance, and development.\n' +
        '\n' +
        'As Chief Executive Officer of Queen Shavah Sustainable Development Initiative, she provides strategic leadership with a strong commitment to transparency, accountability, and sustainable impact. She has worked with reputable development organizations and has successfully managed several high-value projects, delivering results with excellence and integrity.\n' +
        '\n' +
        'Her expertise spans financial stewardship, risk management, tax administration, and forensic investigations. She applies these skills to ensure the prudent use of resources, strengthen institutional systems, and build trust with donors, partners, and communities.\n' +
        '\n' +
        'Mrs. Elisha is passionate about building organizations that deliver measurable results, uphold the highest ethical standards, and transform lives.\n' +
        '\n' +
        '_"Accountability is not just a principle. It is the foundation for lasting impact."',
    image: '/board/Ruth.jpeg',
  },
  {
    role: 'Secretary',
    name: 'Aishah Olabisi Busari',
    description: 'Oversees documentary and information.',
    bio: 'Full biography coming soon.',
    image: '/board/Aisha.jpeg',
  },
  {
    role: 'Board Chairman',
    name: 'Zakariah Bulus',
    description: 'Oversees Dignity Kits, Scholarships, and GBV programs.',
    bio: 'Full biography coming soon.',
    image: '/board/Zakaria.jpg',
  },
  {
    role: 'Member',
    name: 'Philip Gana Malgwi',
    description: 'Oversees strategy and represents the NGO publicly.',
    bio: 'Full biography coming soon.',
    image: '/board/Philip.jpg',
  },
  {
    role: 'Member',
    name: 'Esther Zara Kanawa',
    description: 'Maintains organizational records, meeting minutes, and CAC filings.',
    bio: 'Full biography coming soon.',
    image: '/board/Esther.jpeg',
  },
]

export const teamIntro: TextSectionContent = {
  headline: 'Our Team',
  text: 'Meet the staff and volunteers who carry out our programs every day, from community outreach to field operations.',
}

export const teamMembers: TeamMember[] = [
  {
    role: 'Program Coordinator, Health & Hygiene',
    name: 'Grace Adeyemi',
    description: 'Coordinates the delivery of health and hygiene programs across partner communities.',
    bio: 'Grace coordinates the delivery of health and hygiene programs across partner communities, working closely with local health workers to ensure dignity kits and health education reach those who need them most.',
    image: '/team/Grace.jpeg',
  },
  {
    role: 'Volunteer Coordinator',
    name: 'Daniel Okon',
    description: 'Recruits, trains, and manages volunteers supporting field activities.',
    bio: 'Daniel recruits, trains, and manages the volunteer network that supports outreach events, distributions, and community workshops throughout the year.',
    image: '/team/Daniel.jpg',
  },
  {
    role: 'Communications & Media Officer',
    name: 'Blessing Nwachukwu',
    description: 'Manages storytelling, social media, and public communications.',
    bio: 'Blessing manages the organization’s storytelling, social media presence, and press communications, helping share the impact of our programs with the wider public.',
    image: '/team/Blessing.jpeg',
  },
  {
    role: 'Finance & Administration Officer',
    name: 'Samuel Ibrahim',
    description: 'Oversees budgeting, bookkeeping, and day-to-day administration.',
    bio: 'Samuel oversees budgeting, bookkeeping, and day-to-day administration, ensuring donor funds and organizational resources are managed responsibly.',
    image: '/team/Samuel.jpg',
  },
  {
    role: 'Monitoring & Evaluation Officer',
    name: 'Faith Danladi',
    description: 'Tracks program outcomes and impact data across all initiatives.',
    bio: 'Faith tracks program outcomes and impact data across all initiatives, building the reports that show donors and partners the real-world results of our work.',
    image: '/team/Faith.jpeg',
  },
  {
    role: 'Community Outreach Officer',
    name: 'Emmanuel Yakubu',
    description: 'Builds relationships with community leaders and local partners.',
    bio: 'Emmanuel builds relationships with community leaders and local partners, identifying the households and groups most in need of support in each new location.',
    image: '/team/Emmanuel.jpg',
  },
  {
    role: 'Education Programs Officer',
    name: 'Chiamaka Eze',
    description: 'Runs scholarship and tutoring initiatives for vulnerable children.',
    bio: 'Chiamaka runs our scholarship and tutoring initiatives, working with schools and families to keep vulnerable children engaged in their education.',
    image: '/team/Chiamaka.jpeg',
  },
  {
    role: 'Field Operations Officer',
    name: 'Musa Abdullahi',
    description: 'Leads logistics for distributions, outreaches, and crisis response.',
    bio: 'Musa leads logistics for distributions, outreaches, and crisis response, making sure supplies and teams reach communities safely and on schedule.',
    image: '/team/Musa.jpg',
  },
  {
    role: 'Partnerships & Grants Officer',
    name: 'Patience Okorie',
    description: 'Develops relationships with donors, sponsors, and partner organizations.',
    bio: 'Patience develops relationships with donors, sponsors, and partner organizations, and prepares proposals and reports that sustain our program funding.',
    image: '/team/Patience.jpeg',
  },
  {
    role: 'IT & Data Support Officer',
    name: 'David Longtau',
    description: 'Maintains records systems and technical support for the team.',
    bio: 'David maintains our records systems and provides technical support for the team, keeping beneficiary and program data organized and secure.',
    image: '/team/David.jpg',
  },
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
      '262 Greencity Residences',
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
