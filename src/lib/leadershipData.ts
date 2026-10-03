
import {
  BriefcaseBusiness as BriefcaseBusinessIcon,
  Compass as CompassIcon,
  HeartHandshake as HeartHandshakeIcon,
  Lightbulb as LightbulbIcon,
  Scale as ScaleIcon,
  UsersRound as UsersRoundIcon,
  type LucideIcon } from
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

const portraits = {
  president: "/30eb46d8-e624-4d01-ac52-df469d4f0514.jpg",
  vice: "/18ac27f6-1048-44e9-b289-79bbf976c092.jpg",
  secretary: "/ca2f0cc3-fe69-4170-85a4-04174d3dcf50.jpg",
  treasurer: "/2624e831-fea9-4d4a-b67d-bd78fc7b5a12.jpg",
  one: "/818710b8-73ed-4e43-8610-f1e348169730.jpg",
  two: "/1a8b2e81-ab80-4068-9634-903244ac7dd9.jpg",
  three: "/0c4eedc5-dbbd-4c4b-8680-6ceb83e9b26f.jpg",
  four: "/275ad849-1b14-4559-a11c-460d2229c27b.jpg",
  five: "/1b5d40fc-f357-4554-bc2e-e1067ca01441.jpg",
  six: "/bc645315-7c32-48e0-a320-0786b75e4cf2.jpg"
};

export const EXECUTIVE_COMMITTEE: LeadershipMember[] = [
{ name: 'Amara Fernando', role: 'President', quote: 'The future belongs to people willing to show up for one another.', bio: 'A people-first leader focused on turning bold ideas into shared momentum.', image: portraits.president, accent: 'navy' },
{ name: 'Dinuka Perera', role: 'Vice President', quote: 'Great teams turn care into action.', bio: 'Bringing structure, optimism and a calm hand to every club ambition.', image: portraits.vice, accent: 'gold' },
{ name: 'Sanduni Silva', role: 'Secretary', quote: 'Clarity makes room for creativity.', bio: 'The detail-led heartbeat that keeps every meaningful conversation moving.', image: portraits.secretary, accent: 'rose' },
{ name: 'Rehan Jayasuriya', role: 'Treasurer', quote: 'Trust is built in the details.', bio: 'A thoughtful steward making every opportunity count for the club.', image: portraits.treasurer, accent: 'amber' },
{ name: 'Nethmi Perera', role: 'Assistant Secretary', quote: 'Belonging starts with a welcome.', bio: 'Creating thoughtful connections across every member experience.', image: portraits.four, accent: 'violet' },
{ name: 'Kavindu Silva', role: 'Assistant Treasurer', quote: 'Every plan is a promise kept.', bio: 'Balancing ambition with practical, dependable execution.', image: portraits.five, accent: 'sky' },
{ name: 'Yasara Fernando', role: 'Club Service Chair', quote: 'The best work feels like us.', bio: 'Designing the rituals that make the club a true community.', image: portraits.six, accent: 'navy' },
{ name: 'Shenali De Silva', role: 'Community Chair', quote: 'Listen first. Serve better.', bio: 'Connecting member energy with the needs that matter most.', image: portraits.one, accent: 'rose' },
{ name: 'Kavishka Mendis', role: 'Public Relations Chair', quote: 'Stories move people to care.', bio: 'Giving every act of service a voice with warmth and clarity.', image: portraits.two, accent: 'fuchsia' },
{ name: 'Tharushi Wickramasinghe', role: 'Professional Development Chair', quote: 'Leadership is learned by doing.', bio: 'Opening doors to mentors, skills and brave new beginnings.', image: portraits.three, accent: 'violet' },
{ name: 'Ishara Fernando', role: 'Immediate Past President', quote: 'Legacy is what we make possible.', bio: 'Offering perspective, continuity and a deep belief in the team.', image: portraits.secretary, accent: 'gold' }];


export const DIRECTORS: LeadershipMember[] = [
{ name: 'Nethmi Perera', role: 'Director', avenue: 'Club Service', quote: 'Every member deserves a place to belong.', bio: 'Building fellowship through experiences that stay with people.', image: portraits.four, accent: 'navy' },
{ name: 'Shenali De Silva', role: 'Director', avenue: 'Community Service', quote: 'Impact starts close to home.', bio: 'Guiding practical action with empathy and local understanding.', image: portraits.one, accent: 'rose' },
{ name: 'Rehan Jayasuriya', role: 'Director', avenue: 'Finance', quote: 'Transparency creates trust.', bio: 'Helping every project move forward with confidence.', image: portraits.treasurer, accent: 'amber' },
{ name: 'Savin Fernando', role: 'Director', avenue: 'International Service', quote: 'Connection has no borders.', bio: 'Creating partnerships that broaden how we see the world.', image: portraits.vice, accent: 'sky' },
{ name: 'Tharushi Wickramasinghe', role: 'Director', avenue: 'Professional Development', quote: 'Potential needs a platform.', bio: 'Bringing members closer to the people and skills that inspire them.', image: portraits.three, accent: 'violet' },
{ name: 'Ruvindu Perera', role: 'Director', avenue: 'Sports & Recreation', quote: 'Joy is a team sport.', bio: 'Creating energy, wellbeing and connection through shared play.', image: portraits.five, accent: 'orange' },
{ name: 'Kavishka Mendis', role: 'Director', avenue: 'Public Relations', quote: 'We are the stories we share.', bio: 'Turning club energy into a voice people want to join.', image: portraits.two, accent: 'fuchsia' },
{ name: 'Yasara Fernando', role: 'Director', avenue: 'Digital Services', quote: 'Good design makes impact easier to feel.', bio: 'Building a thoughtful digital home for every initiative.', image: portraits.six, accent: 'cyan' },
{ name: 'Minoli Perera', role: 'Director', avenue: 'Membership', quote: 'New faces are future stories.', bio: 'Making the path into Rotaract welcoming and memorable.', image: portraits.president, accent: 'navy' },
{ name: 'Vihan Jayawardena', role: 'Director', avenue: 'Events', quote: 'Details become memories.', bio: 'Turning planning into moments that bring the club together.', image: portraits.two, accent: 'gold' },
{ name: 'Dulani Silva', role: 'Director', avenue: 'Partnerships', quote: 'Shared purpose goes further.', bio: 'Connecting the club with people and organisations ready to help.', image: portraits.one, accent: 'rose' }];


export const LEADERSHIP_VALUES: {title: string;text: string;icon: LucideIcon;}[] = [
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