import {
  Globe2 as Globe2Icon,
  GraduationCap as GraduationCapIcon,
  HeartHandshake as HeartHandshakeIcon,
  Megaphone as MegaphoneIcon,
  MonitorSmartphone as MonitorSmartphoneIcon,
  Trophy as TrophyIcon,
  Users as UsersIcon,
  Wallet as WalletIcon,
  type LucideIcon
} from
  'lucide-react';

export interface AvenueDirector {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface AvenuePillar {
  title: string;
  desc: string;
}

export interface AvenueDetail {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  image: string;
  heroInkImage: string;
  photoFrame?: {
    main: string;
    top: string;
    bottom: string;
  };
  accent: string;
  completedProjects: number;
  directors: number;
  volunteers?: number;
  hours?: number;
  pillars?: AvenuePillar[];
  directorList?: AvenueDirector[];
}

export const AVENUE_DETAILS: AvenueDetail[] = [
  {
    slug: 'club-service',
    number: '01',
    title: 'Club Service',
    description: 'Drives fellowship and smooth internal operations by coordinating meetings, managing administration, and fostering an inclusive club culture.',
    longDescription: 'Club Service holds the human heartbeat of Rotaract UCSC together. From the very first orientation to lifelong alumni bonds, this avenue orchestrates the traditions, fellowship nights, general meetings, and cross-batch connections that ensure no member ever feels like a stranger.',
    tagline: 'The culture engine behind a connected club.',
    icon: UsersIcon,
    image: "/1e74bf3b-bd1e-4979-a2ae-f0d17883d4b4.jpg",
    heroInkImage: "/assets/avenues/club_services.png",
    photoFrame: {
      main: "/assets/avenues/club-service-main.jpg",
      top: "/assets/avenues/club-service-top.jpg",
      bottom: "/assets/avenues/club-service-bottom.jpg",
    },
    accent: 'navy',
    completedProjects: 8,
    directors: 2,
    volunteers: 35,
    hours: 140,
    pillars: [
      { title: 'Fellowship & Traditions', desc: 'Crafting signature gatherings and warm social settings that build authentic camaraderie.' },
      { title: 'Internal Operations', desc: 'Managing club administration, secretarial documentation, and seamless general meetings.' },
      { title: 'Inclusivity & Culture', desc: 'Ensuring every new member finds a supportive home and an encouraging community.' }
    ],
    directorList: [
      { name: 'Rtr. Dasuni De Silva', role: 'Director of Club Service', bio: 'Building fellowship through experiences that stay with people forever.', image: '/assets/leadership/directors/clubservicesdirector1.jpeg' },
      { name: 'Rtr. Nuha Fawzer', role: 'Director of Club Service', bio: 'Cultivating an inviting, family-like culture across every club event.', image: '/assets/leadership/directors/clubservicesdirector2.jpeg' }
    ]
  },
  {
    slug: 'community-service',
    number: '02',
    title: 'Community Service',
    description: 'Creates sustainable, long-term change in local communities through impactful environmental and socioeconomic initiatives.',
    longDescription: 'Rooted in empathy and direct grassroots engagement, Community Service addresses pressing societal challenges across Sri Lanka, delivering sustainable healthcare, educational upliftment, and community aid with transparency.',
    tagline: 'Turning local care into collective action.',
    icon: HeartHandshakeIcon,
    image: "/d9bd489e-919e-405e-9ba0-68bc147e9344.jpg",
    heroInkImage: "/assets/avenues/community_services.png",
    photoFrame: {
      main: "/assets/gallery/IMG_8449.webp",
      top: "/assets/gallery/NO_FUSION_0701_018.webp",
      bottom: "/assets/gallery/NO_FUSION_0701_003.webp",
    },
    accent: 'rose',
    completedProjects: 4,
    directors: 2,
    volunteers: 45,
    hours: 180,
    pillars: [
      { title: 'Healthcare & Vital Aid', desc: 'Organising district blood donation drives, health screenings, and medical relief.' },
      { title: 'Rural Education Support', desc: 'Supplying libraries, textbooks, and interactive learning tools to remote schools.' },
      { title: 'Sustainable Community Care', desc: 'Developing enduring projects that empower local beneficiaries to flourish independently.' }
    ],
    directorList: [
      { name: 'Rtr. Oshani Premachandra', role: 'Director of Community Service', bio: 'Guiding grassroots action with deep empathy and sustainable solutions.', image: '/assets/leadership/directors/communityservicesdirector1.jpg' },
      { name: 'Rtr. Nadeeka Kaduwela', role: 'Director of Community Service', bio: 'Mobilizing volunteer power to uplift underprivileged communities across Sri Lanka.', image: '/assets/leadership/directors/communityservicesdirector2.jpg' }
    ]
  },
  {
    slug: 'international-relations',
    number: '03',
    title: 'International Relations',
    description: 'Promotes global peace and cultural understanding by fostering cross-border collaborations, exchange programs, and international friendships.',
    longDescription: 'International Relations connects Rotaract UCSC to the world. Through twin club agreements, international cultural exchanges, peace forums, and joint global service initiatives across Asia, Europe, and the Americas, we give members a truly borderless perspective on service.',
    tagline: 'A local club with a global point of view.',
    icon: Globe2Icon,
    image: "/67a57244-695d-4354-86ae-42f897a404b4.jpg",
    heroInkImage: "/assets/avenues/international_relations.png",
    photoFrame: {
      main: "/assets/gallery/IMG_8232.webp",
      top: "/assets/gallery/NO_FUSION_0701_023.webp",
      bottom: "/assets/gallery/NO_FUSION_0723_019.webp",
    },
    accent: 'sky',
    completedProjects: 5,
    directors: 1,
    volunteers: 25,
    hours: 90,
    pillars: [
      { title: 'Twin Club Agreements', desc: 'Establishing formal partnerships with overseas Rotaract clubs for collaborative service.' },
      { title: 'Global Cultural Exchange', desc: 'Hosting virtual and in-person summits that celebrate diversity and mutual respect.' },
      { title: 'World Peace & Diplomacy', desc: 'Encouraging youth dialogue around international cooperation and global citizenship.' }
    ],
    directorList: [
      { name: 'Rtr. Hansika Edirisinghe', role: 'Director of International Service', bio: 'Fostering global partnerships and cross-cultural exchanges across the world.', image: '/assets/leadership/directors/internationalservicesdirector.jpeg' }
    ]
  },
  {
    slug: 'professional-development',
    number: '04',
    title: 'Professional Development',
    description: 'Enhances members\' career readiness and leadership skills through targeted training, personal branding, and mentorship.',
    longDescription: 'Professional Development bridges academia and industry. By hosting corporate career fairs, mock interview bootcamps, executive leadership workshops, and direct mentorship with industry titans, we empower computing and management students to excel with confidence.',
    tagline: 'Growing capable leaders, together.',
    icon: GraduationCapIcon,
    image: "/7bd60e2b-0f1c-4507-9b7b-43763cc9d0f6.jpg",
    heroInkImage: "/assets/avenues/professional_development.png",
    photoFrame: {
      main: "/assets/gallery/1000198160.jpg.webp",
      top: "/assets/gallery/1000198164.jpg.webp",
      bottom: "/assets/gallery/IMG_8143.webp",
    },
    accent: 'violet',
    completedProjects: 4,
    directors: 2,
    volunteers: 30,
    hours: 120,
    pillars: [
      { title: 'Industry Readiness & Skills', desc: 'Equipping members with high-demand tech, leadership, and soft skills.' },
      { title: 'Executive Mentorship', desc: 'Connecting undergraduates 1-on-1 with senior tech executives and alumni.' },
      { title: 'Leadership Masterclasses', desc: 'Intensive workshops on public speaking, project governance, and entrepreneurship.' }
    ],
    directorList: [
      { name: 'Rtr. Sashik Thivanka', role: 'Director of Professional Development', bio: 'Opening doors to corporate mentors, essential skills, and brave new beginnings.', image: '/assets/leadership/directors/professionaldevelopmentdirector1.jpg' },
      { name: 'Rtr. Yasuru Sandeepa', role: 'Director of Professional Development', bio: 'Empowering undergraduates with industry readiness and professional networking.', image: '/assets/leadership/directors/professionaldevelopmentdirector2.jpg' }
    ]
  },
  {
    slug: 'public-relations',
    number: '05',
    title: 'Public Relations',
    description: 'Elevates the club\'s visibility and credibility by translating acts of service into engaging stories through strategic communication and media.',
    longDescription: 'Public Relations is the creative voice and brand guardian of Rotaract UCSC. Through cinematic photography, compelling copy, multi-channel social media campaigns, and print press coverage, we highlight our members’ dedicated service.',
    tagline: 'Giving every act of service a voice.',
    icon: MegaphoneIcon,
    image: "/6cd30f0e-0ef7-4660-8a0d-f31ff0b33536.jpg",
    heroInkImage: "/assets/avenues/public_relations.png",
    photoFrame: {
      main: "/assets/gallery/1000198166.jpg.webp",
      top: "/assets/gallery/1000198165.jpg.webp",
      bottom: "/assets/gallery/IMG_8239.webp",
    },
    accent: 'fuchsia',
    completedProjects: 4,
    directors: 2,
    volunteers: 20,
    hours: 80,
    pillars: [
      { title: 'Brand Stewardship', desc: 'Maintaining aesthetic elegance and consistent visual brand identity across all media.' },
      { title: 'Visual & Editorial Storytelling', desc: 'Crafting powerful narratives that turn project metrics into human emotion.' },
      { title: 'Media Relations & Press', desc: 'Securing national news publications and digital partnerships for major club initiatives.' }
    ],
    directorList: [
      { name: 'Rtr. Ashini Dasanayaka', role: 'Director of Public Relations', bio: 'Crafting captivating public narratives that elevate the club’s voice and prestige.', image: '/assets/leadership/directors/publicrelationsdirector1.jpg' },
      { name: 'Rtr. Isum Hansana', role: 'Director of Public Relations', bio: 'Amplifying public resonance and digital branding across diverse platforms.', image: '/assets/leadership/directors/publicrelationsdirector2.jpg' }
    ]
  },
  {
    slug: 'sports-recreation',
    number: '06',
    title: 'Sports & Recreational Activities',
    description: 'Boosts member well-being and teamwork through a diverse mix of competitive sports, e-sports, and relaxing recreational events.',
    longDescription: 'Sports & Recreation brings vibrant physical energy, competitive spirit, and deep camaraderie to the club. From intense cricket encounters and badminton showdowns to university e-sports leagues and wellness hikes, we champion healthy living and team bonding.',
    tagline: 'Shared play. Stronger bonds.',
    icon: TrophyIcon,
    image: "/9ea0281f-b406-40be-843a-2f5feee2eadb.jpg",
    heroInkImage: "/assets/avenues/sports.png",
    photoFrame: {
      main: "/assets/gallery/NO_FUSION_0721_124.webp",
      top: "/assets/gallery/NO_FUSION_0721_137.webp",
      bottom: "/assets/gallery/IMG_8224.webp",
    },
    accent: 'orange',
    completedProjects: 5,
    directors: 2,
    volunteers: 25,
    hours: 110,
    pillars: [
      { title: 'Inter-Batch Tournaments', desc: 'Organising annual tournaments across cricket, futsal, basketball, and badminton.' },
      { title: 'Wellness & Mindfulness', desc: 'Promoting healthy work-life balance, outdoor trekking, and mental health check-ins.' },
      { title: 'E-Sports & Virtual Gaming', desc: 'Hosting competitive collegiate gaming championships with district-wide participation.' }
    ],
    directorList: [
      { name: 'Rtr. Oshadha Dhananjaya', role: 'Director of Sports & Recreation', bio: 'Sparking energy, athletic spirit, and mental wellness through active events.', image: '/assets/leadership/directors/sportsandrecreationalactivitiesdirector1.jpeg' },
      { name: 'Rtr. Siyumi Vihansha', role: 'Director of Sports & Recreation', bio: 'Encouraging healthy living, tournament excitement, and team bonding.', image: '/assets/leadership/directors/sportsandrecreationalactivitiesdirector2.jpg' }
    ]
  },
  {
    slug: 'finance',
    number: '07',
    title: 'Finance Service',
    description: 'Ensures financial stability and transparency through strategic budgeting, effective fundraising, and securing sponsorships to support club goals.',
    longDescription: 'Finance Service provides the vital financial backbone that transforms ambitious visions into tangible reality. We ensure absolute fiscal integrity, design sustainable revenue channels, build corporate sponsor relationships, and manage budgets with precision.',
    tagline: 'Sustaining purpose with smart stewardship.',
    icon: WalletIcon,
    image: "/3f14fe35-b548-4965-8c3f-3b2cfbb4f675.jpg",
    heroInkImage: "/assets/avenues/finance.png",
    photoFrame: {
      main: "/assets/gallery/NO_FUSION_0723_033_(1).webp",
      top: "/assets/gallery/NO_FUSION_0723_033_(2).webp",
      bottom: "/assets/gallery/IMG_8199.webp",
    },
    accent: 'amber',
    completedProjects: 9,
    directors: 2,
    volunteers: 30,
    hours: 130,
    pillars: [
      { title: 'Fiscal Transparency & Auditing', desc: 'Maintaining impeccable financial books, transparent ledgers, and formal audits.' },
      { title: 'Corporate Sponsorships', desc: 'Partnering with leading enterprises for sustainable project funding and brand alignment.' },
      { title: 'Creative Fundraising', desc: 'Designing high-yield merchandise, ticketed charity galas, and digital fundraisers.' }
    ],
    directorList: [
      { name: 'Rtr. Chanuki Perera', role: 'Director of Finance', bio: 'Ensuring financial accuracy, strategic fundraising, and budget stability.', image: '/assets/leadership/directors/financedirector1.jpg' },
      { name: 'Rtr. Dulki Savindya', role: 'Director of Finance', bio: 'Managing financial resources with precision, foresight, and accountability.', image: '/assets/leadership/directors/financedirector2.jpg' }
    ]
  },
  {
    slug: 'digital-services',
    number: '08',
    title: 'Digital Services',
    description: 'Manages the club\'s technological infrastructure, including website development and digital tools, to streamline operations and expand digital presence.',
    longDescription: 'Digital Services builds the modern digital infrastructure that powers Rotaract UCSC. Drawing on the premier computing talent of UCSC, we design world-class web applications, automated registration workflows, and cutting-edge tech experiences.',
    tagline: 'Crafting the club’s digital heartbeat.',
    icon: MonitorSmartphoneIcon,
    image: "/275ad849-1b14-4559-a11c-460d2229c27b.jpg",
    heroInkImage: "/assets/avenues/digital_services.png",
    photoFrame: {
      main: "/assets/gallery/IMG_8211.webp",
      top: "/assets/gallery/1000198159.jpg.webp",
      bottom: "/assets/gallery/IMG_8132.webp",
    },
    accent: 'cyan',
    completedProjects: 2,
    directors: 1,
    volunteers: 15,
    hours: 60,
    pillars: [
      { title: 'Web Systems & Engineering', desc: 'Architecting fast, responsive, and secure digital platforms for club activities.' },
      { title: 'UI/UX & Experience Craft', desc: 'Crafting pixel-perfect, accessible, and delightful digital user journeys.' },
      { title: 'Tech Enablement & Automation', desc: 'Building internal tools, bots, and digital registration systems for seamless operations.' }
    ],
    directorList: [
      { name: 'Rtr. Isuru Udayanga', role: 'Director of Digital Services', bio: 'Building modern web architectures and digital tools for the club ecosystem.', image: '/assets/leadership/directors/digitalservicesdirector.jpg' }
    ]
  }
];


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
    id: 'achieve-beyond',
    title: 'Achieve Beyond 3.0',
    avenue: 'Professional Development',
    date: 'May 2026',
    description: 'A signature career readiness and leadership accelerator preparing undergraduates for the corporate world with practical skills and mentoring.',
    image: '/assets/projects/achieve-beyond.jpg',
    status: 'Completed',
    category: 'Professional Skills',
    year: '2026',
    collaboration: 'Rotary Club of Colombo Down Town',
    volunteers: 68,
    photos: 46,
    likes: 165
  },
  {
    id: 'manudam-viyamana',
    title: 'මනුදම් වියමන 2026',
    avenue: 'Community Service',
    date: 'Jun 2026',
    description: 'A heartfelt community outreach project providing essential aid, nutrition packs, and sustainable support to underserved families.',
    image: '/assets/projects/manudam-viyamana.jpg',
    status: 'Completed',
    category: 'Community Aid',
    year: '2026',
    collaboration: 'Rotaract Club of UCSC',
    volunteers: 84,
    photos: 52,
    likes: 198
  },
  {
    id: 'framelab',
    title: 'FrameLab',
    avenue: 'Professional Development',
    date: 'Jul 2026',
    description: "FrameLab is a practical workshop designed to enhance participants' video editing skills by introducing industry-standard tools, creative techniques, and storytelling principles for producing engaging digital content.",
    image: '/assets/projects/frameLab.png',
    status: 'Completed',
    category: 'Media & Editing',
    year: '2026',
    collaboration: 'UCSC Media Unit',
    volunteers: 45,
    photos: 34,
    likes: 182
  }
];


export const CLUB_DIRECTORS = [
  {
    name: 'Rtr. Dasuni De Silva',
    role: 'Director of Club Service',
    bio: 'A people-first organiser who believes the best club culture is built in the small, thoughtful moments.',
    image: '/assets/leadership/directors/clubservicesdirector1.jpeg'
  },
  {
    name: 'Rtr. Nuha Fawzer',
    role: 'Director of Club Service',
    bio: 'Cultivating an inviting, family-like culture across every club event.',
    image: '/assets/leadership/directors/clubservicesdirector2.jpeg'
  }];


export const CLUB_MILESTONES = [
  { date: 'Aug 2025', title: 'The first welcome circle', text: '92 new and returning members met through a guided club-story experience.' },
  { date: 'Oct 2025', title: 'Fellowship in motion', text: 'The first inter-batch sports night brought six teams and one unforgettable final together.' },
  { date: 'May 2026', title: 'Achieve Beyond 3.0', text: 'A signature career accelerator equipping undergraduates with practical corporate readiness.' },
  { date: 'Jul 2026', title: 'FrameLab Workshop', text: 'An immersive digital video storytelling and content production workshop.' }
];