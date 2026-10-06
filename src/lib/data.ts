

import {
  HeartHandshake,
  Users,
  Wallet,
  Globe2,
  GraduationCap,
  Trophy,
  Megaphone,
  MonitorSmartphone,
  type LucideIcon } from
'lucide-react';

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
{ label: 'Projects Completed', value: 117, suffix: '+' },
{ label: 'Active Members', value: 58, minDigits: 3 },
{ label: 'Volunteer Hours', value: 1005 },
{ label: 'Funds Raised', value: 42, prefix: 'LKR ', suffix: 'M' },
{ label: 'Lives Impacted', value: 4000, minDigits: 5 }];


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
  name: 'Book of Hope',
  category: 'Community Service',
  date: 'Mar 2026',
  description:
  'Building and stocking a children’s library to nurture a lifelong love of reading in underserved communities.',
  image: "/d9bd489e-919e-405e-9ba0-68bc147e9344.jpg",
  status: 'Ongoing'
},
{
  id: 'p2',
  name: 'Life Drops',
  category: 'Community Service',
  date: 'Feb 2026',
  description:
  'A campus-wide blood donation drive uniting hundreds of students to give the gift of life.',
  image: "/9ea0281f-b406-40be-843a-2f5feee2eadb.jpg",
  status: 'Completed'
},
{
  id: 'p3',
  name: 'Books & Beyond',
  category: 'International Service',
  date: 'Apr 2026',
  description:
  'Distributing school supplies and essentials to rural schools, opening doors to brighter futures.',
  image: "/67a57244-695d-4354-86ae-42f897a404b4.jpg",
  status: 'Upcoming'
}];


export interface EventItem {
  id: string;
  title: string;
  date: string;
  targetDate: string;
  location: string;
  image: string;
}

export const EVENTS: EventItem[] = [
{
  id: 'e1',
  title: 'Leadership Summit 2026',
  date: 'August 14, 2026',
  targetDate: '2026-08-14T09:00:00',
  location: 'UCSC Main Auditorium',
  image: "/7bd60e2b-0f1c-4507-9b7b-43763cc9d0f6.jpg"
},
{
  id: 'e2',
  title: 'Community Service Day',
  date: 'September 5, 2026',
  targetDate: '2026-09-05T08:00:00',
  location: 'Colombo District',
  image: "/3f14fe35-b548-4965-8c3f-3b2cfbb4f675.jpg"
},
{
  id: 'e3',
  title: 'Annual Gala Night 2026',
  date: 'October 18, 2026',
  targetDate: '2026-10-18T18:00:00',
  location: 'Colombo Hilton Grand Ballroom',
  image: "/9ea0281f-b406-40be-843a-2f5feee2eadb.jpg"
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
  description: 'Building fellowship and strengthening bonds within our club family.',
  icon: Users,
  span: 'lg:col-span-2 lg:row-span-2',
  tint: 'from-navy-500/90 to-navy-700/90'
},
{
  title: 'Community Service',
  description: 'Uplifting local communities through hands-on volunteer initiatives.',
  icon: HeartHandshake,
  span: 'lg:col-span-2',
  tint: 'from-navy-400/10 to-gold/10'
},
{
  title: 'Finance',
  description: 'Sustaining our mission through smart fundraising and stewardship.',
  icon: Wallet,
  span: '',
  tint: 'from-gold/10 to-navy-300/10'
},
{
  title: 'International Service',
  description: 'Connecting hands across borders for global impact.',
  icon: Globe2,
  span: '',
  tint: 'from-blue-400/10 to-navy-300/10'
},
{
  title: 'Professional Development',
  description: 'Growing tomorrow’s leaders through mentorship and skill-building.',
  icon: GraduationCap,
  span: 'lg:col-span-2',
  tint: 'from-purple-400/10 to-navy-300/10'
},
{
  title: 'Sports & Recreation',
  description: 'Celebrating energy, wellness and team spirit through play.',
  icon: Trophy,
  span: '',
  tint: 'from-gold/10 to-navy-200/10'
},
{
  title: 'Public Relations',
  description: 'Amplifying our story and inspiring the next generation.',
  icon: Megaphone,
  span: '',
  tint: 'from-pink-400/10 to-navy-300/10'
},
{
  title: 'Digital Services',
  description: 'Powering our impact with technology and creativity.',
  icon: MonitorSmartphone,
  span: 'lg:col-span-2',
  tint: 'from-navy-500/90 to-navy-800/90'
}];


export interface Sponsor {
  name: string;
  detail: string;
}

export const SPONSORS: Sponsor[] = [
{ name: 'Aurora Labs', detail: 'Technology Partner since 2021' },
{ name: 'Lumina Bank', detail: 'Principal Financial Sponsor' },
{ name: 'GreenLeaf Co.', detail: 'Sustainability Collaborator' },
{ name: 'Vertex Media', detail: 'Official Media Partner' },
{ name: 'Solace Health', detail: 'Healthcare Outreach Ally' },
{ name: 'Nimbus Cloud', detail: 'Digital Infrastructure' },
{ name: 'Orbit Ventures', detail: 'Startup Mentorship Circle' }];


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
}

export const TESTIMONIALS: Testimonial[] = [
{
  name: 'Amara Fernando',
  role: 'President 2025/26',
  quote:
  'Rotaract gave me a family and a purpose. Every project reminded me that young people can move mountains when we move together.',
  image: 'https://i.pravatar.cc/160?img=47'
},
{
  name: 'Dinuka Perera',
  role: 'Community Service Director',
  quote:
  'I joined to build my CV. I stayed because I found the most inspiring people I’ve ever met. This club changes lives — including mine.',
  image: 'https://i.pravatar.cc/160?img=12'
},
{
  name: 'Sanduni Silva',
  role: 'Digital Services Lead',
  quote:
  'The energy is unreal. We dream big, ship fast, and celebrate every win together. Nothing feels impossible here.',
  image: 'https://i.pravatar.cc/160?img=32'
}];


export const GALLERY = [
{ src: "/3f14fe35-b548-4965-8c3f-3b2cfbb4f675.jpg", tall: true },
{ src: "/d9bd489e-919e-405e-9ba0-68bc147e9344.jpg", tall: false },
{ src: "/9ea0281f-b406-40be-843a-2f5feee2eadb.jpg", tall: false },
{ src: "/67a57244-695d-4354-86ae-42f897a404b4.jpg", tall: true },
{ src: "/7bd60e2b-0f1c-4507-9b7b-43763cc9d0f6.jpg", tall: false },
{ src: "/3f14fe35-b548-4965-8c3f-3b2cfbb4f675.jpg", tall: false }];