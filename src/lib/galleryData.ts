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
  hero: "/267a9c62-f596-4ef8-8e05-aecb76584af5.jpg",
  installation: "/fd840c2c-1ea8-4895-b20f-3e3507f9cca5.jpg",
  cleanup: "/eff12ed3-803f-4062-b192-f637594f8191.jpg",
  workshop: "/6b1b8f70-27d1-4d30-a135-9caa83009ce2.jpg",
  fellowship: "/6f689b9a-3f1b-424f-b0cf-51b80d9aaea3.jpg",
  service: "/3f14fe35-b548-4965-8c3f-3b2cfbb4f675.jpg",
  books: "/d9bd489e-919e-405e-9ba0-68bc147e9344.jpg",
  blood: "/9ea0281f-b406-40be-843a-2f5feee2eadb.jpg",
  school: "/67a57244-695d-4354-86ae-42f897a404b4.jpg",
  summit: "/7bd60e2b-0f1c-4507-9b7b-43763cc9d0f6.jpg"
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
{ id: 'painted-purpose', image: images.hero, event: 'Community Service Day', date: 'May 18, 2026', year: '2026', avenue: 'Community Service', album: 'Hands That Help', project: 'Colours of Care', tags: ['Community Service', 'Celebration'], caption: 'A bright afternoon, a bigger purpose.', photographer: 'Nethmi Perera', aspect: 'landscape', views: 1284, photoCount: 24 },
{ id: 'installation-pin', image: images.installation, event: 'Installation Ceremony', date: 'April 26, 2026', year: '2026', avenue: 'Club Service', album: 'A New Chapter', project: 'Installation Ceremony', tags: ['Installation Ceremony', 'Leadership'], caption: 'A promise carried forward.', photographer: 'Kavishka Mendis', aspect: 'portrait', views: 1960, photoCount: 38 },
{ id: 'coastline-care', image: images.cleanup, event: 'Beach Cleanup', date: 'March 10, 2026', year: '2026', avenue: 'Community Service', album: 'Hands That Help', project: 'Blue Coast', tags: ['Community Service', 'Sports & Recreational'], caption: 'Care for the coast, together.', photographer: 'Malsha Jayasinghe', aspect: 'portrait', views: 942, photoCount: 31 },
{ id: 'maker-table', image: images.workshop, event: 'Coding Workshop', date: 'February 17, 2026', year: '2026', avenue: 'Digital Services', album: 'Ideas in Motion', project: 'Code Forward', tags: ['Digital Services', 'Workshop'], caption: 'New skills begin with shared screens.', photographer: 'Ayesh Silva', aspect: 'landscape', views: 813, photoCount: 19 },
{ id: 'garden-laughs', image: images.fellowship, event: 'Fellowship Under Lights', date: 'January 24, 2026', year: '2026', avenue: 'Club Service', album: 'After Hours', project: 'Fellowship Night', tags: ['Fellowship', 'Celebration'], caption: 'The kind of night that becomes a tradition.', photographer: 'Shenali Dissanayake', aspect: 'landscape', views: 1104, photoCount: 27 },
{ id: 'service-circle', image: images.service, event: 'Community Service Day', date: 'November 8, 2025', year: '2025', avenue: 'Community Service', album: 'Hands That Help', project: 'Neighbourhood First', tags: ['Community Service', 'Public Relations'], caption: 'A circle of hands makes room for change.', photographer: 'Nethmi Perera', aspect: 'square', views: 734, photoCount: 24 },
{ id: 'books-beyond', image: images.books, event: 'Books & Beyond', date: 'October 2, 2025', year: '2025', avenue: 'International Service', album: 'Beyond Borders', project: 'Books & Beyond', tags: ['International Service', 'Community Service'], caption: 'Opening pages and possibilities.', photographer: 'Ishan Fernando', aspect: 'portrait', views: 1452, photoCount: 42 },
{ id: 'life-drops', image: images.blood, event: 'Life Drops', date: 'August 16, 2025', year: '2025', avenue: 'Community Service', album: 'Little Acts, Lasting Impact', project: 'Life Drops', tags: ['Community Service', 'Finance'], caption: 'Hundreds of hearts answered one call.', photographer: 'Nethmi Perera', aspect: 'square', views: 1740, photoCount: 36 },
{ id: 'school-supply', image: images.school, event: 'Books & Beyond', date: 'July 12, 2025', year: '2025', avenue: 'International Service', album: 'Beyond Borders', project: 'Books & Beyond', tags: ['International Service', 'Celebration'], caption: 'Every small gift carries a future.', photographer: 'Ishan Fernando', aspect: 'portrait', views: 903, photoCount: 42 },
{ id: 'leadership-room', image: images.summit, event: 'Leadership Summit', date: 'May 20, 2025', year: '2025', avenue: 'Professional Development', album: 'Ideas in Motion', project: 'Lead Forward', tags: ['Professional Development', 'Conference'], caption: 'Building the room we want to lead from.', photographer: 'Kavishka Mendis', aspect: 'landscape', views: 1213, photoCount: 29 }];


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
{ id: 'beyond-borders', title: 'Beyond Borders', date: 'July–Oct 2025', avenue: 'International Service', photos: 73, description: 'Small acts travelling beyond familiar horizons.', image: images.school }];


export const GALLERY_STATS = [
{ value: 46, suffix: '', label: 'Events documented' },
{ value: 1248, suffix: '+', label: 'Moments captured' },
{ value: 4, suffix: '', label: 'Years of memories' },
{ value: 31, suffix: '', label: 'Projects covered' },
{ value: 9, suffix: '', label: 'Active photographers' }];


export const GALLERY_TIMELINE = [
{ year: '2026', items: ['Installation Ceremony', 'Beach Cleanup', 'Coding Workshop'] },
{ year: '2025', items: ['Life Drops', 'Books & Beyond', 'Leadership Summit'] },
{ year: '2024', items: ['District Conference', 'Fellowship Retreat', 'Campus Carnival'] }];


export const GALLERY_VIDEOS: GalleryVideo[] = [
{ id: 'service-reel', title: 'A day in service', duration: '01:42', image: images.hero, youtubeId: 'Scxs7L0vhZ4' },
{ id: 'installation-reel', title: 'The passing of the pin', duration: '02:18', image: images.installation, youtubeId: 'ysz5S6PUM-U' },
{ id: 'fellowship-reel', title: 'After hours, together', duration: '01:06', image: images.fellowship, youtubeId: 'aqz-KE-bpKQ' }];


export const SOCIAL_POSTS = [
{ platform: 'Instagram', handle: '@rotaractucsc', image: images.fellowship, href: 'https://www.instagram.com/', label: 'A night of friendship, full hearts and even louder laughs.' },
{ platform: 'Facebook', handle: 'Rotaract UCSC', image: images.cleanup, href: 'https://www.facebook.com/', label: 'Small actions. A very big coastline to care for.' },
{ platform: 'LinkedIn', handle: 'Rotaract UCSC', image: images.workshop, href: 'https://www.linkedin.com/', label: 'Building skills that turn shared ideas into real impact.' }];