
import {
  BriefcaseBusiness as BriefcaseBusinessIcon,
  Compass as CompassIcon,
  HeartHandshake as HeartHandshakeIcon,
  Lightbulb as LightbulbIcon,
  Scale as ScaleIcon,
  UsersRound as UsersRoundIcon,
  type LucideIcon
} from
  'lucide-react';

export interface LeadershipMember {
  name: string;
  role: string;
  quote: string;
  bio: string;
  image: string;
  avenue?: string;
  accent: string;
}

export const EXECUTIVE_COMMITTEE: LeadershipMember[] = [
  {
    name: 'Rtr. Shamil Shiraj',
    role: 'President',
    quote: 'The future belongs to people willing to show up for one another.',
    bio: 'A people-first leader focused on turning bold ideas into shared momentum.',
    image: '/assets/leadership/exco/president.png',
    accent: 'navy'
  },
  {
    name: 'Rtr. Roshanya Philip',
    role: 'Vice President',
    quote: 'Great teams turn care into collective action.',
    bio: 'Bringing structure, optimism, and a steady hand to every club ambition.',
    image: '/assets/leadership/exco/vicepresident1.png',
    accent: 'gold'
  },
  {
    name: 'Rtr. Murshid Akram',
    role: 'Immediate Past President',
    quote: 'Legacy is what we make possible together.',
    bio: 'Offering wisdom, continuity, and an enduring belief in youth empowerment.',
    image: '/assets/leadership/exco/IPP.png',
    accent: 'navy'
  },
  {
    name: 'Rtr. Kumodi Rajapura',
    role: 'Secretary',
    quote: 'Clarity makes room for creativity and seamless collaboration.',
    bio: 'The detail-led heartbeat ensuring every milestone and conversation moves forward.',
    image: '/assets/leadership/exco/secretary.png',
    accent: 'rose'
  },
  {
    name: 'Rtr. Ponmudy Vidurshan',
    role: 'Treasurer',
    quote: 'Trust is built in transparency and stewardship.',
    bio: 'A thoughtful steward making every opportunity and resource count for the club.',
    image: '/assets/leadership/exco/treasurer.png',
    accent: 'amber'
  },
  {
    name: 'Rtr. Ganapathi Sadurshan',
    role: 'Vice President',
    quote: 'Strength lies in unity, shared vision, and perseverance.',
    bio: 'Empowering avenues and fostering resilience across every signature project.',
    image: '/assets/leadership/exco/vicepresident2.png',
    accent: 'amber'
  },
  {
    name: 'Rtr. Sandini Jayawardhana',
    role: 'Assistant Secretary',
    quote: 'Belonging starts with a genuine and warm welcome.',
    bio: 'Creating thoughtful connections and streamlined secretarial workflows.',
    image: '/assets/leadership/exco/assistantsecretary1.png',
    accent: 'violet'
  },
  {
    name: 'Rtr. Hasini Jayamali',
    role: 'Assistant Secretary',
    quote: 'Dedication turns small duties into lasting excellence.',
    bio: 'Ensuring administrative coordination and member records flow with precision.',
    image: '/assets/leadership/exco/assistantsecretary2.png',
    accent: 'sky'
  },
  {
    name: 'Rtr. Santhosh Narayanan',
    role: 'Sergeant-at-Arms',
    quote: 'Order and mutual respect create room for great fellowship.',
    bio: 'Upholding club decorum, high energy, and timeless Rotaract traditions.',
    image: '/assets/leadership/exco/seargentatarms.png',
    accent: 'navy'
  },
  {
    name: 'Rtr. Hansi Upekka Sithumin',
    role: 'Editor',
    quote: 'Words give wings and lasting meaning to our collective purpose.',
    bio: 'Curating literary publications and articulating club milestones with finesse.',
    image: '/assets/leadership/exco/editor1.png',
    accent: 'rose'
  },
  {
    name: 'Rtr. Vedeshan Arulmoly',
    role: 'Editor',
    quote: 'Every story told with authenticity inspires others to lead.',
    bio: 'Capturing the heart of service through insightful storytelling and journalism.',
    image: '/assets/leadership/exco/editor2.png',
    accent: 'gold'
  },
  {
    name: 'Rtr. Akila Prabhashwara',
    role: 'Head of Media',
    quote: 'Visual artistry turns fleeting moments into enduring movements.',
    bio: 'Directing creative media, branding aesthetics, and multi-channel visual impact.',
    image: '/assets/leadership/exco/headofmedia.png',
    accent: 'cyan'
  }
];

export const DIRECTORS: LeadershipMember[] = [
  {
    name: 'Rtr. Dasuni De Silva',
    role: 'Avenue Co-Director',
    avenue: 'Club Service',
    quote: 'Every member deserves a place to truly belong.',
    bio: 'Building fellowship through experiences that stay with people forever.',
    image: '/assets/leadership/directors/clubservicesdirector1.png',
    accent: 'navy'
  },
  {
    name: 'Rtr. Nuha Fawzer',
    role: 'Avenue Co-Director',
    avenue: 'Club Service',
    quote: 'Fellowship is the foundation that holds all our service together.',
    bio: 'Cultivating an inviting, family-like culture across every club event.',
    image: '/assets/leadership/directors/clubservicesdirector2.png',
    accent: 'sky'
  },
  {
    name: 'Rtr. Oshani Premachandra',
    role: 'Avenue Co-Director',
    avenue: 'Community Service',
    quote: 'Impact starts with genuine compassion close to home.',
    bio: 'Guiding grassroots action with deep empathy and sustainable solutions.',
    image: '/assets/leadership/directors/communityservicesdirector1.png',
    accent: 'rose'
  },
  {
    name: 'Rtr. Nadeeka Kaduwela',
    role: 'Avenue Co-Director',
    avenue: 'Community Service',
    quote: 'Hands that serve touch lives that inspire our society.',
    bio: 'Mobilizing volunteer power to uplift underprivileged communities across Sri Lanka.',
    image: '/assets/leadership/directors/communityservicesdirector2.png',
    accent: 'amber'
  },
  {
    name: 'Rtr. Sashik Thivanka',
    role: 'Avenue Co-Director',
    avenue: 'Professional Development',
    quote: 'Leadership is discovered and refined by doing.',
    bio: 'Opening doors to corporate mentors, essential skills, and brave new beginnings.',
    image: '/assets/leadership/directors/professionaldevelopmentdirector1.png',
    accent: 'violet'
  },
  {
    name: 'Rtr. Yasuru Sandeepa',
    role: 'Avenue Co-Director',
    avenue: 'Professional Development',
    quote: 'Potential needs a platform to grow into excellence.',
    bio: 'Empowering undergraduates with industry readiness and professional networking.',
    image: '/assets/leadership/directors/professionaldevelopmentdirector2.png',
    accent: 'gold'
  },
  {
    name: 'Rtr. Ashini Dasanayaka',
    role: 'Avenue Co-Director',
    avenue: 'Public Relations',
    quote: 'We are the stories we share and the hope we kindle.',
    bio: 'Crafting captivating public narratives that elevate the club’s voice and prestige.',
    image: '/assets/leadership/directors/publicrelationsdirector1.png',
    accent: 'fuchsia'
  },
  {
    name: 'Rtr. Isum Hansana',
    role: 'Avenue Co-Director',
    avenue: 'Public Relations',
    quote: 'Stories move hearts and inspire communities to care.',
    bio: 'Amplifying public resonance and digital branding across diverse platforms.',
    image: '/assets/leadership/directors/publicrelationsdirector2.png',
    accent: 'rose'
  },
  {
    name: 'Rtr. Hansika Edirisinghe',
    role: 'Avenue Director',
    avenue: 'International Service',
    quote: 'Friendship and meaningful service have no borders.',
    bio: 'Fostering global partnerships and cross-cultural exchanges across the world.',
    image: '/assets/leadership/directors/internationalservicesdirector.png',
    accent: 'sky'
  },
  {
    name: 'Rtr. Isuru Udayanga',
    role: 'Avenue Director',
    avenue: 'Digital Services',
    quote: 'Great technology and design make human impact easier to feel.',
    bio: 'Building modern web architectures and digital tools for the club ecosystem.',
    image: '/assets/leadership/directors/digitalservicesdirector.png',
    accent: 'cyan'
  },
  {
    name: 'Rtr. Oshadha Dhananjaya',
    role: 'Avenue Co-Director',
    avenue: 'Sports & Recreation',
    quote: 'Joy and sportsmanship build the strongest team bonds.',
    bio: 'Sparking energy, athletic spirit, and mental wellness through active events.',
    image: '/assets/leadership/directors/sportsandrecreationalactivitiesdirector1.png',
    accent: 'orange'
  },
  {
    name: 'Rtr. Siyumi Vihansha',
    role: 'Avenue Co-Director',
    avenue: 'Sports & Recreation',
    quote: 'Passion on the field translates to resilience everywhere in life.',
    bio: 'Encouraging healthy living, tournament excitement, and team bonding.',
    image: '/assets/leadership/directors/sportsandrecreationalactivitiesdirector2.png',
    accent: 'amber'
  },
  {
    name: 'Rtr. Chanuki Perera',
    role: 'Avenue Co-Director',
    avenue: 'Finance',
    quote: 'Transparency and integrity create enduring confidence.',
    bio: 'Ensuring financial accuracy, strategic fundraising, and budget stability.',
    image: '/assets/leadership/directors/financedirector1.png',
    accent: 'amber'
  },
  {
    name: 'Rtr. Dulki Savindya',
    role: 'Avenue Co-Director',
    avenue: 'Finance',
    quote: 'Thoughtful stewardship turns ambitious plans into reality.',
    bio: 'Managing financial resources with precision, foresight, and accountability.',
    image: '/assets/leadership/directors/financedirector2.png',
    accent: 'gold'
  }
];


export const LEADERSHIP_VALUES: { title: string; text: string; icon: LucideIcon; }[] = [
  { title: 'Service Above Self', text: 'We lead with generosity, not ego.', icon: HeartHandshakeIcon },
  { title: 'Leadership', text: 'We grow through responsibility and action.', icon: CompassIcon },
  { title: 'Fellowship', text: 'We turn individual energy into shared strength.', icon: UsersRoundIcon },
  { title: 'Integrity', text: 'We make choices that earn lasting trust.', icon: ScaleIcon },
  { title: 'Innovation', text: 'We stay curious about what could work better.', icon: LightbulbIcon },
  { title: 'Community Impact', text: 'We measure success by the good that remains.', icon: BriefcaseBusinessIcon }];


export const LEADERSHIP_MILESTONES = [
  { date: 'Aug 2025', title: 'Installation Ceremony', text: 'A new board takes the pledge to lead the 2025/26 term with purpose.' },
  { date: 'Sep 2025', title: 'Leadership Lab', text: 'Executive committee and directors align around club culture, goals and service.' },
  { date: 'Dec 2025', title: 'First 100 days', text: 'Four signature initiatives prove how far coordinated care can travel.' },
  { date: 'May 2026', title: 'Annual Showcase', text: 'The team celebrates the stories, partnerships and lives behind a year of impact.' }];