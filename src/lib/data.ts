

import {
  HeartHandshake,
  Users,
  Wallet,
  Globe2,
  GraduationCap,
  Trophy,
  Megaphone,
  MonitorSmartphone,
  type LucideIcon
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Avenues', href: '/avenues' },
  { label: 'Projects', href: '/projects' },
  { label: 'Leadership', href: '/board' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' }];


export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  minDigits?: number;
}

export const STATS: Stat[] = [
  { label: 'Projects Completed', value: 40, suffix: '+' },
  { label: 'Active Members', value: 38 },
  { label: 'Volunteer Hours', value: 450, suffix: '+' },
  { label: 'Funds Raised', value: 42, prefix: 'LKR ', suffix: 'M' },
  { label: 'Lives Impacted', value: 1250 }];


export interface Project {
  id: string;
  name: string;
  category: string;
  date: string;
  description: string;
  image: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
}

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Achieve Beyond 3.0',
    category: 'Professional Development',
    date: 'May 2026',
    description:
      'A signature career readiness and leadership accelerator empowering undergraduates with practical skills and industry mentorship.',
    image: "/assets/projects/achieve-beyond.jpg",
    status: 'Completed'
  },
  {
    id: 'p2',
    name: 'මනුදම් වියමන 2026',
    category: 'Community Service',
    date: 'Jun 2026',
    description:
      'A heartfelt community outreach project providing essential aid, nutrition packs, and sustainable support to underserved families.',
    image: "/assets/projects/manudam-viyamana.jpg",
    status: 'Completed'
  },
  {
    id: 'p3',
    name: 'FrameLab',
    category: 'Professional Development',
    date: 'Jul 2026',
    description:
      "FrameLab is a practical workshop designed to enhance participants' video editing skills by introducing industry-standard tools, creative techniques, and storytelling principles for producing engaging digital content.",
    image: "/assets/projects/frameLab.png",
    status: 'Completed'
  }
];


export interface EventItem {
  id: string;
  title: string;
  avenue: string;
  subtitle?: string;
  date: string;
  targetDate: string;
  location: string;
  image: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Mind Matters 3.0',
    avenue: 'Community Services',
    subtitle: 'A Mental Health Initiative',
    date: '26th October 2026',
    targetDate: '2026-10-26T09:00:00',
    location: 'UCSC Premises',
    image: '/assets/events/mind-matters-3.jpg'
  },
  {
    id: 'e2',
    title: 'අඬහැරය',
    avenue: 'Finance',
    subtitle: 'Andaharaya — A Musical Fundraising Event',
    date: '30th October 2026',
    targetDate: '2026-10-30T18:00:00',
    location: 'UCSC Premises',
    image: '/assets/events/andaharaya.jpg'
  },
  {
    id: 'e3',
    title: 'Reid Shadows 2.0',
    avenue: 'Club Services',
    subtitle: 'A Halloween Fellowship Event',
    date: '23rd November 2026',
    targetDate: '2026-11-23T17:30:00',
    location: 'UCSC Premises',
    image: '/assets/events/reid-shadows-2.jpg'
  }];


export interface Avenue {
  title: string;
  description: string;
  icon: LucideIcon;
  span: string;
  tint: string;
}

export const AVENUES: Avenue[] = [
  {
    title: 'Club Service',
    description: 'Drives fellowship and smooth internal operations by coordinating meetings, managing administration, and fostering an inclusive club culture.',
    icon: Users,
    span: 'lg:col-span-2 lg:row-span-2',
    tint: 'from-navy-500/90 to-navy-700/90'
  },
  {
    title: 'Community Service',
    description: 'Creates sustainable, long-term change in local communities through impactful environmental and socioeconomic initiatives.',
    icon: HeartHandshake,
    span: 'lg:col-span-2',
    tint: 'from-navy-400/10 to-gold/10'
  },
  {
    title: 'Finance Service',
    description: 'Ensures financial stability and transparency through strategic budgeting, effective fundraising, and securing sponsorships to support club goals.',
    icon: Wallet,
    span: '',
    tint: 'from-gold/10 to-navy-300/10'
  },
  {
    title: 'International Service',
    description: 'Promotes global peace and cultural understanding by fostering cross-border collaborations, exchange programs, and international friendships.',
    icon: Globe2,
    span: '',
    tint: 'from-blue-400/10 to-navy-300/10'
  },
  {
    title: 'Professional Development',
    description: 'Enhances members\' career readiness and leadership skills through targeted training, personal branding, and mentorship.',
    icon: GraduationCap,
    span: 'lg:col-span-2',
    tint: 'from-purple-400/10 to-navy-300/10'
  },
  {
    title: 'Sports & Recreational Activities',
    description: 'Boosts member well-being and teamwork through a diverse mix of competitive sports, e-sports, and relaxing recreational events.',
    icon: Trophy,
    span: '',
    tint: 'from-gold/10 to-navy-200/10'
  },
  {
    title: 'Public Relations',
    description: 'Elevates the club\'s visibility and credibility by translating acts of service into engaging stories through strategic communication and media.',
    icon: Megaphone,
    span: '',
    tint: 'from-pink-400/10 to-navy-300/10'
  },
  {
    title: 'Digital Services',
    description: 'Manages the club\'s technological infrastructure, including website development and digital tools, to streamline operations and expand digital presence.',
    icon: MonitorSmartphone,
    span: 'lg:col-span-2',
    tint: 'from-navy-500/90 to-navy-800/90'
  }
];


export interface Sponsor {
  name: string;
  detail: string;
  logo: string;
}

export const SPONSORS: Sponsor[] = [
  {
    name: 'Rotaract Club of Matale',
    detail: 'Rotaract Partner Club',
    logo: '/assets/collaborators/rotaract-matale.png'
  },
  {
    name: 'Rotaract Club of Kandy Metropolitan',
    detail: 'Rotaract Partner Club',
    logo: '/assets/collaborators/rotaract-kandy-metropolitan.png'
  },
  {
    name: 'Saheli Foundation',
    detail: 'Community Outreach Ally',
    logo: '/assets/collaborators/saheli-foundation.png'
  },
  {
    name: 'රේඛා',
    detail: 'Musical & Cultural Partner',
    logo: '/assets/collaborators/rekha.png'
  },
  {
    name: 'Rotaract Club of University of Moratuwa',
    detail: 'Rotaract Partner Club',
    logo: '/assets/collaborators/rotaract-mora.png'
  },
  {
    name: 'Rotaract Club of Uva Wellassa University - Badulla',
    detail: 'Rotaract Partner Club',
    logo: '/assets/collaborators/rotaract-uwu.png'
  }];

export const COLLABORATORS = SPONSORS;


export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  author: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'How Volunteering Shaped My Leadership Journey',
    category: 'Leadership',
    readingTime: '5 min read',
    excerpt:
      'From shy first-year to project lead — a reflection on the moments that changed everything.',
    author: 'Amara Fernando',
    image: "/7bd60e2b-0f1c-4507-9b7b-43763cc9d0f6.jpg"
  },
  {
    id: 'b2',
    title: '5 Ways Youth Are Reshaping Community Service',
    category: 'Community',
    readingTime: '4 min read',
    excerpt:
      'A new generation is rewriting what impact looks like. Here’s what we learned this year.',
    author: 'Dinuka Perera',
    image: "/d9bd489e-919e-405e-9ba0-68bc147e9344.jpg"
  },
  {
    id: 'b3',
    title: 'Inside Life Drops: Our Biggest Blood Drive Yet',
    category: 'Projects',
    readingTime: '6 min read',
    excerpt:
      'Behind the scenes of a campaign that brought together a whole campus for one cause.',
    author: 'Sanduni Silva',
    image: "/9ea0281f-b406-40be-843a-2f5feee2eadb.jpg"
  }];


export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  subtitle?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rtr. Shamil Shiraj',
    role: 'President',
    quote:
      'Leadership in Rotaract is about empowering every young mind to step forward, turn vision into collective action, and create lasting impact across our community. Together, we build a future driven by service, passion, and purpose.',
    image: '/assets/leadership/exco/president.jpg'
  },
  {
    name: 'Rtr. Murshid Akram',
    role: 'IPP',
    quote:
      'Every project, big or small, reminds me why we do this: to serve with purpose and uplift the people around us. It was an honor to be a part of the Rotaract Club of UCSC',
    image: '/assets/leadership/exco/IPP.jpeg',
    subtitle: 'IPP (Past President 2025-26) • Rotaract Club of UCSC'
  },
  {
    name: 'Rtr. Kumodi Rajapura',
    role: 'Secretary',
    quote:
      'Behind every impactful initiative lies a foundation of dedication, transparent communication, and unwavering fellowship. Serving as the heartbeat of our club means ensuring every member is valued and every milestone remembered.',
    image: '/assets/leadership/exco/secretary.png'
  }
];


export const GALLERY = [
  { src: "/assets/gallery/IMG_8170.webp", tall: true },
  { src: "/assets/gallery/NO_FUSION_0723_005.webp", tall: false },
  { src: "/assets/gallery/1000198113.jpg.webp", tall: false },
  { src: "/assets/gallery/IMG_8132.webp", tall: true },
  { src: "/assets/gallery/IMG_8444.webp", tall: true },
  { src: "/assets/gallery/IMG_8199.webp", tall: true },
  { src: "/assets/gallery/NO_FUSION_0701_003.webp", tall: true },
  { src: "/assets/gallery/NO_FUSION_0723_033_(1).webp", tall: false }
];