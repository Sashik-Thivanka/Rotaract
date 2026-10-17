export type GalleryAspect = 'portrait' | 'landscape' | 'square';

export interface GalleryPhoto {
  id: string;
  image: string;
  event: string;
  date: string;
  year: string;
  avenue: string;
  album: string;
  project: string;
  tags: string[];
  caption: string;
  photographer: string;
  aspect: GalleryAspect;
  views: number;
  photoCount: number;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  date: string;
  avenue: string;
  photos: number;
  description: string;
  image: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
  duration: string;
  image: string;
  youtubeId: string;
}

const images = {
  hero: "/assets/gallery/IMG_8170.webp",
  installation: "/assets/gallery/NO_FUSION_0723_005.webp",
  cleanup: "/assets/gallery/NO_FUSION_0701_003.webp",
  workshop: "/assets/gallery/1000198160.jpg.webp",
  fellowship: "/assets/gallery/1000198113.jpg.webp",
  service: "/assets/gallery/NO_FUSION_0701_008.webp",
  books: "/assets/gallery/IMG_8211.webp",
  blood: "/assets/gallery/IMG_8444.webp",
  school: "/assets/gallery/NO_FUSION_0701_023.webp",
  summit: "/assets/gallery/IMG_8199.webp"
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'gp-1', image: '/assets/gallery/IMG_8170.webp', event: 'Installation Ceremony', date: 'Jul 28, 2025', year: '2025', avenue: 'Club Service', album: 'A New Chapter', project: 'Installation Ceremony', tags: ['Installation Ceremony', 'Leadership'], caption: 'Celebrating leadership and fellowship at the installation.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1420, photoCount: 30 },
  { id: 'gp-2', image: '/assets/gallery/NO_FUSION_0723_005.webp', event: 'Installation Ceremony', date: 'Jul 23, 2025', year: '2025', avenue: 'Club Service', album: 'A New Chapter', project: 'Installation Ceremony', tags: ['Installation Ceremony', 'Celebration'], caption: 'A moment of honor and shared commitment.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1850, photoCount: 30 },
  { id: 'gp-3', image: '/assets/gallery/1000198113.jpg.webp', event: 'Charter Assembly', date: 'Aug 05, 2025', year: '2025', avenue: 'Club Service', album: 'A New Chapter', project: 'General Assembly', tags: ['Fellowship', 'Club Service', 'Charter'], caption: 'Proud members uniting under the Rotaract Club of UCSC banner.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1680, photoCount: 30 },
  { id: 'gp-4', image: '/assets/gallery/1000198159.jpg.webp', event: 'Videography Masterclass', date: 'Aug 10, 2025', year: '2025', avenue: 'Professional Development', album: 'Ideas in Motion', project: 'Media Mastery', tags: ['Professional Development', 'Workshop', 'Media'], caption: 'Exploring the fundamentals of visual storytelling and video production.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1320, photoCount: 30 },
  { id: 'gp-5', image: '/assets/gallery/1000198160.jpg.webp', event: 'Videography Masterclass', date: 'Aug 10, 2025', year: '2025', avenue: 'Professional Development', album: 'Ideas in Motion', project: 'Media Mastery', tags: ['Professional Development', 'Workshop'], caption: 'Hands-on learning session with passionate undergraduate creators.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1450, photoCount: 30 },
  { id: 'gp-6', image: '/assets/gallery/1000198164.jpg.webp', event: 'Videography Masterclass', date: 'Aug 10, 2025', year: '2025', avenue: 'Professional Development', album: 'Ideas in Motion', project: 'Media Mastery', tags: ['Professional Development', 'Celebration'], caption: 'Presenting a token of appreciation to guest speaker Nimsara Bogahawatta.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1290, photoCount: 30 },
  { id: 'gp-7', image: '/assets/gallery/1000198165.jpg.webp', event: 'Videography Masterclass', date: 'Aug 10, 2025', year: '2025', avenue: 'Professional Development', album: 'Ideas in Motion', project: 'Media Mastery', tags: ['Professional Development', 'Leadership'], caption: 'Welcoming participants to an empowering media learning journey.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1180, photoCount: 30 },
  { id: 'gp-8', image: '/assets/gallery/1000198166.jpg.webp', event: 'Videography Masterclass', date: 'Aug 10, 2025', year: '2025', avenue: 'Professional Development', album: 'Ideas in Motion', project: 'Media Mastery', tags: ['Professional Development', 'Digital Services'], caption: 'Setting the stage for an immersive videography and editing workshop.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1220, photoCount: 30 },
  { id: 'gp-9', image: '/assets/gallery/IMG_8132.webp', event: 'Achieve Beyond Accelerator', date: 'Aug 14, 2025', year: '2025', avenue: 'Professional Development', album: 'Ideas in Motion', project: 'Achieve Beyond 3.0', tags: ['Professional Development', 'Workshop'], caption: 'Empowering future leaders through hands-on industry mentorship.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1240, photoCount: 30 },
  { id: 'gp-10', image: '/assets/gallery/IMG_8143.webp', event: 'Campus Workshop', date: 'Aug 14, 2025', year: '2025', avenue: 'Professional Development', album: 'Ideas in Motion', project: 'Career Readiness', tags: ['Professional Development', 'Workshop'], caption: 'Interactive session exploring technology and problem solving.', photographer: 'Rotaract Media', aspect: 'portrait', views: 960, photoCount: 30 },
  { id: 'gp-11', image: '/assets/gallery/IMG_8148.webp', event: 'Leadership Bootcamp', date: 'Aug 15, 2025', year: '2025', avenue: 'Professional Development', album: 'Ideas in Motion', project: 'Lead Forward', tags: ['Leadership', 'Conference'], caption: 'Inspiring young minds to think bolder.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1040, photoCount: 30 },
  { id: 'gp-12', image: '/assets/gallery/IMG_8189.webp', event: 'Community Outreach', date: 'Aug 22, 2025', year: '2025', avenue: 'Community Service', album: 'Hands That Help', project: 'මනුදම් වියමන', tags: ['Community Service', 'Celebration'], caption: 'Heartfelt connections and community upliftment.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1310, photoCount: 30 },
  { id: 'gp-13', image: '/assets/gallery/IMG_8199.webp', event: 'Annual Gala Night', date: 'Aug 25, 2025', year: '2025', avenue: 'Club Service', album: 'After Hours', project: 'Fellowship Night', tags: ['Fellowship', 'Celebration'], caption: 'Celebrating milestones and shared memories.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1670, photoCount: 30 },
  { id: 'gp-14', image: '/assets/gallery/IMG_8211.webp', event: 'Innovation Showcase', date: 'Sep 02, 2025', year: '2025', avenue: 'Digital Services', album: 'Ideas in Motion', project: 'Digital Services', tags: ['Digital Services', 'Workshop'], caption: 'Fostering digital transformation and innovation.', photographer: 'Rotaract Media', aspect: 'portrait', views: 890, photoCount: 30 },
  { id: 'gp-15', image: '/assets/gallery/IMG_8224.webp', event: 'Team Synergy Session', date: 'Sep 05, 2025', year: '2025', avenue: 'Club Service', album: 'After Hours', project: 'Team Building', tags: ['Club Service', 'Fellowship'], caption: 'Strengthening synergy across every avenue.', photographer: 'Rotaract Media', aspect: 'landscape', views: 780, photoCount: 30 },
  { id: 'gp-16', image: '/assets/gallery/IMG_8232.webp', event: 'Youth Dialogue', date: 'Sep 10, 2025', year: '2025', avenue: 'International Service', album: 'Beyond Borders', project: 'Global Voices', tags: ['International Service', 'Conference'], caption: 'Bridging perspectives and expanding horizons.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1150, photoCount: 30 },
  { id: 'gp-17', image: '/assets/gallery/IMG_8239.webp', event: 'Design & Media Sprint', date: 'Sep 14, 2025', year: '2025', avenue: 'Public Relations', album: 'Ideas in Motion', project: 'PR Media Lab', tags: ['Public Relations', 'Digital Services'], caption: 'Storytelling that moves communities to care.', photographer: 'Rotaract Media', aspect: 'portrait', views: 920, photoCount: 30 },
  { id: 'gp-18', image: '/assets/gallery/IMG_8444.webp', event: 'Community Health Day', date: 'Sep 20, 2025', year: '2025', avenue: 'Community Service', album: 'Hands That Help', project: 'Mind Matters', tags: ['Community Service', 'Celebration'], caption: 'Promoting wellness and empathetic care.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1530, photoCount: 30 },
  { id: 'gp-19', image: '/assets/gallery/IMG_8449.webp', event: 'Field Volunteer Day', date: 'Sep 22, 2025', year: '2025', avenue: 'Community Service', album: 'Hands That Help', project: 'මනුදම් වියමන', tags: ['Community Service', 'Celebration'], caption: 'Active ground-level service that touches lives.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1290, photoCount: 30 },
  { id: 'gp-20', image: '/assets/gallery/IMG_9991.webp', event: 'Reid Shadows Gathering', date: 'Oct 04, 2025', year: '2025', avenue: 'Club Service', album: 'After Hours', project: 'Reid Shadows', tags: ['Fellowship', 'Club Service'], caption: 'Creating moments that stay with us forever.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1390, photoCount: 30 },
  { id: 'gp-21', image: '/assets/gallery/NO_FUSION_0701_003.webp', event: 'Environmental Drive', date: 'Oct 12, 2025', year: '2025', avenue: 'Community Service', album: 'Hands That Help', project: 'Green Campus', tags: ['Community Service', 'Celebration'], caption: 'Preserving our natural surroundings together.', photographer: 'Rotaract Media', aspect: 'portrait', views: 880, photoCount: 30 },
  { id: 'gp-22', image: '/assets/gallery/NO_FUSION_0701_007.webp', event: 'Community Engagement', date: 'Oct 14, 2025', year: '2025', avenue: 'Community Service', album: 'Hands That Help', project: 'Community Uplift', tags: ['Community Service', 'Public Relations'], caption: 'Listening, understanding, and providing meaningful support.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1040, photoCount: 30 },
  { id: 'gp-23', image: '/assets/gallery/NO_FUSION_0701_008.webp', event: 'Youth Volunteer Circle', date: 'Oct 18, 2025', year: '2025', avenue: 'Community Service', album: 'Hands That Help', project: 'Service in Action', tags: ['Community Service', 'Leadership'], caption: 'Unity in action and collective purpose.', photographer: 'Rotaract Media', aspect: 'portrait', views: 970, photoCount: 30 },
  { id: 'gp-24', image: '/assets/gallery/NO_FUSION_0701_018.webp', event: 'Socioeconomic Support', date: 'Oct 22, 2025', year: '2025', avenue: 'Community Service', album: 'Hands That Help', project: 'Care Forward', tags: ['Community Service', 'Finance'], caption: 'Providing essential resources with dignity.', photographer: 'Rotaract Media', aspect: 'landscape', views: 840, photoCount: 30 },
  { id: 'gp-25', image: '/assets/gallery/NO_FUSION_0701_023.webp', event: 'Education Initiative', date: 'Oct 26, 2025', year: '2025', avenue: 'International Service', album: 'Beyond Borders', project: 'Bright Minds', tags: ['International Service', 'Community Service'], caption: 'Nurturing curiosity and bright futures.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1110, photoCount: 30 },
  { id: 'gp-26', image: '/assets/gallery/NO_FUSION_0721_124.webp', event: 'Sports Festival', date: 'Nov 02, 2025', year: '2025', avenue: 'Sports & Recreational Activities', album: 'After Hours', project: 'Rotaract Champions', tags: ['Sports & Recreational', 'Fellowship'], caption: 'Energy, passion, and high spirits on the field.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1340, photoCount: 30 },
  { id: 'gp-27', image: '/assets/gallery/NO_FUSION_0721_137.webp', event: 'Friendly Match Day', date: 'Nov 04, 2025', year: '2025', avenue: 'Sports & Recreational Activities', album: 'After Hours', project: 'Sports Fiesta', tags: ['Sports & Recreational', 'Celebration'], caption: 'Teamwork and healthy competition in action.', photographer: 'Rotaract Media', aspect: 'portrait', views: 920, photoCount: 30 },
  { id: 'gp-28', image: '/assets/gallery/NO_FUSION_0723_019.webp', event: 'Presidential Address', date: 'Nov 12, 2025', year: '2025', avenue: 'Club Service', album: 'A New Chapter', project: 'Leadership Forum', tags: ['Leadership', 'Club Service'], caption: 'Guiding the club with vision and clarity.', photographer: 'Rotaract Media', aspect: 'portrait', views: 1480, photoCount: 30 },
  { id: 'gp-29', image: '/assets/gallery/NO_FUSION_0723_033_(1).webp', event: 'Recognition & Awards', date: 'Nov 18, 2025', year: '2025', avenue: 'Club Service', album: 'A New Chapter', project: 'Awards Night', tags: ['Celebration', 'Leadership'], caption: 'Honoring excellence and commitment.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1620, photoCount: 30 },
  { id: 'gp-30', image: '/assets/gallery/NO_FUSION_0723_033_(2).webp', event: 'Stage & Ceremony', date: 'Nov 18, 2025', year: '2025', avenue: 'Club Service', album: 'A New Chapter', project: 'Awards Night', tags: ['Celebration', 'Fellowship'], caption: 'Memories crafted on a grand evening.', photographer: 'Rotaract Media', aspect: 'landscape', views: 1540, photoCount: 30 }
];

export const FEATURED_ALBUM: GalleryAlbum = {
  id: 'hands-that-help',
  title: 'Hands That Help',
  date: 'May 2026',
  avenue: 'Community Service',
  photos: 84,
  description: 'A season of showing up: for a coastline, a neighbourhood, and the people who call them home.',
  image: images.hero
};

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  FEATURED_ALBUM,
  { id: 'new-chapter', title: 'A New Chapter', date: 'April 2026', avenue: 'Club Service', photos: 56, description: 'The people and promises behind a new Rotaract year.', image: images.installation },
  { id: 'ideas-motion', title: 'Ideas in Motion', date: 'Feb–May 2026', avenue: 'Digital Services', photos: 48, description: 'Learning, leading and making ideas useful.', image: images.workshop },
  { id: 'beyond-borders', title: 'Beyond Borders', date: 'July–Oct 2025', avenue: 'International Service', photos: 73, description: 'Small acts travelling beyond familiar horizons.', image: images.school }
];

export const GALLERY_STATS = [
  { value: 46, suffix: '', label: 'Events documented' },
  { value: 1248, suffix: '+', label: 'Moments captured' },
  { value: 4, suffix: '', label: 'Years of memories' },
  { value: 31, suffix: '', label: 'Projects covered' },
  { value: 9, suffix: '', label: 'Active photographers' }
];

export const GALLERY_TIMELINE = [
  { year: '2026', items: ['Installation Ceremony', 'Beach Cleanup', 'Coding Workshop'] },
  { year: '2025', items: ['Life Drops', 'Achieve Beyond', 'Leadership Summit'] },
  { year: '2024', items: ['District Conference', 'Fellowship Retreat', 'Campus Carnival'] }
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  { id: 'service-reel', title: 'A day in service', duration: '01:42', image: images.hero, youtubeId: 'Scxs7L0vhZ4' },
  { id: 'installation-reel', title: 'The passing of the pin', duration: '02:18', image: images.installation, youtubeId: 'ysz5S6PUM-U' },
  { id: 'fellowship-reel', title: 'After hours, together', duration: '01:06', image: images.fellowship, youtubeId: 'aqz-KE-bpKQ' }
];

export const SOCIAL_POSTS = [
  { platform: 'Instagram', handle: '@rotaractucsc', image: images.fellowship, href: 'https://www.instagram.com/', label: 'A night of friendship, full hearts and even louder laughs.' },
  { platform: 'Facebook', handle: 'Rotaract UCSC', image: images.cleanup, href: 'https://www.facebook.com/', label: 'Small actions. A very big coastline to care for.' },
  { platform: 'LinkedIn', handle: 'Rotaract UCSC', image: images.workshop, href: 'https://www.linkedin.com/', label: 'Building skills that turn shared ideas into real impact.' }
];