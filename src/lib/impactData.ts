import {
  Globe2 as Globe2Icon,
  GraduationCap as GraduationCapIcon,
  HeartHandshake as HeartHandshakeIcon,
  Megaphone as MegaphoneIcon,
  MonitorSmartphone as MonitorSmartphoneIcon,
  Trophy as TrophyIcon,
  Users as UsersIcon,
  Wallet as WalletIcon,
  type LucideIcon } from
'lucide-react';

export interface AvenueDetail {
  slug: string;
  title: string;
  description: string;
  tagline: string;
  icon: LucideIcon;
  image: string;
  accent: string;
  completedProjects: number;
  directors: number;
}

export const AVENUE_DETAILS: AvenueDetail[] = [
{
  slug: 'club-service',
  title: 'Club Service',
  description: 'We design the moments that make belonging feel effortless and every member feel seen.',
  tagline: 'The culture engine behind a connected club.',
  icon: UsersIcon,
  image: "/1e74bf3b-bd1e-4979-a2ae-f0d17883d4b4.jpg",
  accent: 'crimson',
  completedProjects: 18,
  directors: 3
},
{
  slug: 'community-service',
  title: 'Community Service',
  description: 'We work shoulder to shoulder with communities to create practical, lasting progress.',
  tagline: 'Turning local care into collective action.',
  icon: HeartHandshakeIcon,
  image: "/d9bd489e-919e-405e-9ba0-68bc147e9344.jpg",
  accent: 'rose',
  completedProjects: 42,
  directors: 4
},
{
  slug: 'finance',
  title: 'Finance',
  description: 'We create the financial confidence and partnerships that keep every big idea moving.',
  tagline: 'Sustaining purpose with smart stewardship.',
  icon: WalletIcon,
  image: "/3f14fe35-b548-4965-8c3f-3b2cfbb4f675.jpg",
  accent: 'amber',
  completedProjects: 15,
  directors: 2
},
{
  slug: 'international-service',
  title: 'International Service',
  description: 'We build friendships and solutions that move beyond borders.',
  tagline: 'A local club with a global point of view.',
  icon: Globe2Icon,
  image: "/67a57244-695d-4354-86ae-42f897a404b4.jpg",
  accent: 'sky',
  completedProjects: 21,
  directors: 3
},
{
  slug: 'professional-development',
  title: 'Professional Development',
  description: 'We give members practical experiences, mentors and confidence for what comes next.',
  tagline: 'Growing capable leaders, together.',
  icon: GraduationCapIcon,
  image: "/7bd60e2b-0f1c-4507-9b7b-43763cc9d0f6.jpg",
  accent: 'violet',
  completedProjects: 26,
  directors: 3
},
{
  slug: 'sports-recreation',
  title: 'Sports & Recreation',
  description: 'We bring joyful energy, wellness and a healthy competitive spirit into club life.',
  tagline: 'Shared play. Stronger bonds.',
  icon: TrophyIcon,
  image: "/9ea0281f-b406-40be-843a-2f5feee2eadb.jpg",
  accent: 'orange',
  completedProjects: 17,
  directors: 2
},
{
  slug: 'public-relations',
  title: 'Public Relations',
  description: 'We translate our club’s energy into stories people want to be part of.',
  tagline: 'Giving every act of service a voice.',
  icon: MegaphoneIcon,
  image: "/6cd30f0e-0ef7-4660-8a0d-f31ff0b33536.jpg",
  accent: 'fuchsia',
  completedProjects: 29,
  directors: 4
},
{
  slug: 'digital-services',
  title: 'Digital Services',
  description: 'We use design, storytelling and technology to make every initiative easier to experience.',
  tagline: 'Crafting the club’s digital heartbeat.',
  icon: MonitorSmartphoneIcon,
  image: "/275ad849-1b14-4559-a11c-460d2229c27b.jpg",
  accent: 'cyan',
  completedProjects: 24,
  directors: 3
}];


export interface ProjectCatalogItem {
  id: string;
  title: string;
  avenue: string;
  date: string;
  description: string;
  image: string;
  status: 'Ongoing' | 'Completed';
  category: string;
  year: string;
  collaboration?: string;
  volunteers: number;
  photos: number;
  likes: number;
  progress?: number;
}

export const PROJECT_CATALOG: ProjectCatalogItem[] = [
{
  id: 'book-of-hope',
  title: 'Book of Hope',
  avenue: 'Community Service',
  date: 'Mar 2026',
  description: 'Building a bright, well-stocked children’s library for young readers in an underserved community.',
  image: "/d9bd489e-919e-405e-9ba0-68bc147e9344.jpg",
  status: 'Ongoing',
  category: 'Education',
  year: '2026',
  collaboration: 'Rotaract District 3220',
  volunteers: 76,
  photos: 48,
  likes: 128,
  progress: 68
},
{
  id: 'life-drops',
  title: 'Life Drops',
  avenue: 'Community Service',
  date: 'Feb 2026',
  description: 'A campus-wide blood donation drive that brought students together for one urgent, generous purpose.',
  image: "/9ea0281f-b406-40be-843a-2f5feee2eadb.jpg",
  status: 'Completed',
  category: 'Health',
  year: '2026',
  collaboration: 'National Blood Centre',
  volunteers: 112,
  photos: 86,
  likes: 236
},
{
  id: 'books-beyond',
  title: 'Books & Beyond',
  avenue: 'International Service',
  date: 'Apr 2026',
  description: 'Delivering school essentials and stories that open doors to brighter learning futures.',
  image: "/67a57244-695d-4354-86ae-42f897a404b4.jpg",
  status: 'Ongoing',
  category: 'Education',
  year: '2026',
  volunteers: 64,
  photos: 32,
  likes: 91,
  progress: 42
},
{
  id: 'member-mosaic',
  title: 'Member Mosaic',
  avenue: 'Club Service',
  date: 'Jan 2026',
  description: 'A signature welcome experience that turned new-member introductions into lasting friendships.',
  image: "/1e74bf3b-bd1e-4979-a2ae-f0d17883d4b4.jpg",
  status: 'Completed',
  category: 'Fellowship',
  year: '2026',
  volunteers: 38,
  photos: 54,
  likes: 174
},
{
  id: 'rhythm-of-us',
  title: 'Rhythm of Us',
  avenue: 'Club Service',
  date: 'Dec 2025',
  description: 'An intimate evening of music, stories and celebration created by and for the club family.',
  image: "/3f14fe35-b548-4965-8c3f-3b2cfbb4f675.jpg",
  status: 'Completed',
  category: 'Fellowship',
  year: '2025',
  volunteers: 29,
  photos: 67,
  likes: 203
},
{
  id: 'future-ready',
  title: 'Future Ready',
  avenue: 'Professional Development',
  date: 'Nov 2025',
  description: 'A hands-on career lab connecting members with mentors, portfolios and practical insight.',
  image: "/7bd60e2b-0f1c-4507-9b7b-43763cc9d0f6.jpg",
  status: 'Completed',
  category: 'Leadership',
  year: '2025',
  collaboration: 'UCSC Alumni Network',
  volunteers: 42,
  photos: 41,
  likes: 159
}];


export const CLUB_DIRECTORS = [
{
  name: 'Nethmi Perera',
  role: 'Director of Club Service',
  bio: 'A people-first organiser who believes the best club culture is built in the small, thoughtful moments.',
  image: "/275ad849-1b14-4559-a11c-460d2229c27b.jpg"
},
{
  name: 'Kavindu Silva',
  role: 'Deputy Director',
  bio: 'Known for turning a spark of an idea into an experience members still talk about weeks later.',
  image: "/1b5d40fc-f357-4554-bc2e-e1067ca01441.jpg"
},
{
  name: 'Yasara Fernando',
  role: 'Assistant Director',
  bio: 'A detail-led creative who makes sure each new face has a clear path into the club family.',
  image: "/bc645315-7c32-48e0-a320-0786b75e4cf2.jpg"
}];


export const CLUB_MILESTONES = [
{ date: 'Aug 2025', title: 'The first welcome circle', text: '92 new and returning members met through a guided club-story experience.' },
{ date: 'Oct 2025', title: 'Fellowship in motion', text: 'The first inter-batch sports night brought six teams and one unforgettable final together.' },
{ date: 'Dec 2025', title: 'Rhythm of Us', text: 'A sold-out year-end celebration became the most photographed club event of the term.' },
{ date: 'Mar 2026', title: 'Member Mosaic', text: 'A new member-led programme gave every committee a place to share its story.' }];