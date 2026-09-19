
import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDown as ArrowDownIcon, ArrowRight as ArrowRightIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, Linkedin as LinkedinIcon, Play as PlayIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { AlbumCard } from '../components/gallery/AlbumCard';
import { GalleryFilters, type GalleryFilterValues } from '../components/gallery/GalleryFilters';
import { GalleryMasonry } from '../components/gallery/GalleryMasonry';
import { PhotoLightbox } from '../components/gallery/PhotoLightbox';
import { VideoModal } from '../components/gallery/VideoModal';
import { Counter } from '../components/ui/Counter';
import { Reveal } from '../components/ui/Reveal';
import { FEATURED_ALBUM, GALLERY_ALBUMS, GALLERY_PHOTOS, GALLERY_STATS, GALLERY_VIDEOS, SOCIAL_POSTS, type GalleryAlbum, type GalleryPhoto, type GalleryVideo } from '../lib/galleryData';

const initialFilters: GalleryFilterValues = { query: '', event: 'all', avenue: 'all', year: 'all', album: 'all', project: 'all', tag: 'all', sort: 'Latest' };
const quickTags = ['Community Service', 'Club Service', 'International Service', 'Professional Development', 'Finance', 'Public Relations', 'Sports & Recreational', 'Digital Services', 'Installation Ceremony', 'Fellowship', 'Conference', 'Workshop', 'Celebration'];

export function GalleryPage() {
  const [filters, setFilters] = useState(initialFilters);
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<GalleryVideo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 250);
    return () => window.clearTimeout(timer);
  }, [filters]);

  const options = useMemo(() => ({
    events: unique(GALLERY_PHOTOS.map((photo) => photo.event)),
    avenues: unique(GALLERY_PHOTOS.map((photo) => photo.avenue)),
    years: unique(GALLERY_PHOTOS.map((photo) => photo.year)),
    albums: unique(GALLERY_PHOTOS.map((photo) => photo.album)),
    projects: unique(GALLERY_PHOTOS.map((photo) => photo.project)),
    tags: quickTags
  }), []);

  const filteredPhotos = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const photos = GALLERY_PHOTOS.filter((photo) => {
      const haystack = `${photo.event} ${photo.avenue} ${photo.album} ${photo.project} ${photo.tags.join(' ')} ${photo.caption}`.toLowerCase();
      return (!query || haystack.includes(query)) && (filters.event === 'all' || photo.event === filters.event) && (filters.avenue === 'all' || photo.avenue === filters.avenue) && (filters.year === 'all' || photo.year === filters.year) && (filters.album === 'all' || photo.album === filters.album) && (filters.project === 'all' || photo.project === filters.project) && (filters.tag === 'all' || photo.tags.includes(filters.tag) || photo.avenue === filters.tag);
    });
    return [...photos].sort((first, second) => {
      if (filters.sort === 'Oldest') return new Date(first.date).getTime() - new Date(second.date).getTime();
      if (filters.sort === 'Most Viewed') return second.views - first.views;
      if (filters.sort === 'Recently Added') return first.id.localeCompare(second.id);
      return new Date(second.date).getTime() - new Date(first.date).getTime();
    });
  }, [filters]);

  const activePhotoIndex = filteredPhotos.findIndex((photo) => photo.id === activePhotoId);
  const showNext = () => {if (filteredPhotos.length) setActivePhotoId(filteredPhotos[(activePhotoIndex + 1 + filteredPhotos.length) % filteredPhotos.length].id);};
  const showPrevious = () => {if (filteredPhotos.length) setActivePhotoId(filteredPhotos[(activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length].id);};
  const openAlbum = (album: GalleryAlbum) => {setFilters({ ...initialFilters, album: album.title });document.getElementById('photo-collection')?.scrollIntoView({ behavior: 'smooth' });};

  return <main className="overflow-hidden bg-cream pt-24 text-ink dark:bg-ink dark:text-white">
    <section className="relative isolate min-h-[720px] overflow-hidden px-6 pb-24 pt-28 md:min-h-[800px] md:pb-32 md:pt-44">
      <img src="/267a9c62-f596-4ef8-8e05-aecb76584af5.jpg" alt="Rotaractors painting together at a community service event" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <motion.div aria-hidden animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute right-[12%] top-40 hidden h-24 w-24 rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-md md:block" />
      <motion.div aria-hidden animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-32 right-[28%] hidden h-12 w-12 rounded-full bg-gold md:block" />
      <div className="mx-auto flex min-h-[560px] max-w-6xl flex-col justify-end">
        <Reveal className="max-w-3xl"><div className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-gold backdrop-blur-md"><SparklesIcon className="h-3.5 w-3.5" /> The visual archive</div><h1 className="mt-6 font-display text-5xl font-extrabold leading-[.96] tracking-tight text-white md:text-8xl">Our Journey<br />in <span className="text-gold">Pictures.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/75">Capturing the service, leadership, fellowship and bright, unscripted moments that make our club a community.</p></Reveal>
        <a href="#photo-collection" className="mt-14 inline-flex w-fit items-center gap-3 text-sm font-semibold text-white/80 transition hover:text-gold"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10"><ArrowDownIcon className="h-4 w-4" /></span> Explore the archive</a>
      </div>
    </section>

    <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-6"><div className="grid overflow-hidden rounded-5xl border border-white/50 bg-white/85 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-ink/85 sm:grid-cols-5">{GALLERY_STATS.map((stat, index) => <Reveal key={stat.label} delay={index * 0.05}><div className="border-b border-ink/5 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 dark:border-white/10"><p className="font-display text-3xl font-bold text-crimson-500 dark:text-gold"><Counter value={stat.value} suffix={stat.suffix} /></p><p className="mt-2 text-xs font-medium text-ink/55 dark:text-white/55">{stat.label}</p></div></Reveal>)}</div></section>

    <section className="px-6 pt-28 md:pt-36"><div className="mx-auto max-w-6xl"><Reveal><p className="font-grotesk text-sm font-bold uppercase tracking-[.2em] text-crimson-500 dark:text-gold">Featured album</p></Reveal><div className="mt-6"><Reveal delay={0.06}><AlbumCard album={FEATURED_ALBUM} featured onOpen={openAlbum} /></Reveal></div></div></section>

    <GalleryFilters filters={filters} options={options} onChange={setFilters} onClear={() => setFilters(initialFilters)} />

    <section id="photo-collection" className="scroll-mt-28 px-6 py-24 md:py-32"><div className="mx-auto max-w-6xl"><Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="font-grotesk text-sm font-bold uppercase tracking-[.2em] text-crimson-500 dark:text-gold">The collection</p><h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">Every frame, a feeling.</h2></div><p className="text-sm font-medium text-ink/50 dark:text-white/50">{isLoading ? 'Finding moments…' : `${filteredPhotos.length} photographs shown`}</p></Reveal><GalleryMasonry photos={filteredPhotos} isLoading={isLoading} onOpen={(photo: GalleryPhoto) => setActivePhotoId(photo.id)} onClear={() => setFilters(initialFilters)} /></div></section>

    <section className="bg-ink px-6 py-24 text-white md:py-32"><div className="mx-auto max-w-6xl"><Reveal className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-grotesk text-sm font-bold uppercase tracking-[.2em] text-gold">Event albums</p><h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Stories worth returning to.</h2></div><p className="max-w-sm text-sm leading-7 text-white/60">A living archive of the people, work and celebrations that stay with us.</p></Reveal><div className="grid gap-6 md:grid-cols-3">{GALLERY_ALBUMS.slice(1).concat(GALLERY_ALBUMS[0]).map((album, index) => <Reveal key={album.id} delay={index * 0.08}><AlbumCard album={album} onOpen={openAlbum} /></Reveal>)}</div></div></section>

    <section className="bg-white px-6 py-24 dark:bg-white/5 md:py-32"><div className="mx-auto max-w-6xl"><Reveal className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-grotesk text-sm font-bold uppercase tracking-[.2em] text-crimson-500 dark:text-gold">Video highlights</p><h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Press play on the feeling.</h2></div><p className="max-w-sm text-sm leading-7 text-ink/60 dark:text-white/60">Short films from the moments that moved a room, a campus or a community.</p></Reveal><div className="grid gap-5 md:grid-cols-3">{GALLERY_VIDEOS.map((video, index) => <Reveal key={video.id} delay={index * 0.08}><button type="button" onClick={() => setActiveVideo(video)} className="group relative block aspect-[4/3] w-full overflow-hidden rounded-4xl bg-ink text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-gold"><img loading="lazy" src={video.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-ink/45" /><span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">{video.duration}</span><span className="absolute inset-0 flex items-center justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition group-hover:scale-110"><PlayIcon className="ml-0.5 h-5 w-5 fill-current" /></span></span><span className="absolute inset-x-5 bottom-5 font-display text-xl font-bold text-white">{video.title}</span></button></Reveal>)}</div></div></section>

    <section className="px-6 py-24 md:py-32"><div className="mx-auto max-w-6xl"><Reveal className="mb-12 text-center"><p className="font-grotesk text-sm font-bold uppercase tracking-[.2em] text-crimson-500 dark:text-gold">Social wall</p><h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">The story keeps moving.</h2></Reveal><div className="grid gap-5 md:grid-cols-3">{SOCIAL_POSTS.map((post, index) => {const Icon = post.platform === 'Instagram' ? InstagramIcon : post.platform === 'Facebook' ? FacebookIcon : LinkedinIcon;return <Reveal key={post.platform} delay={index * 0.08}><a href={post.href} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-4xl bg-white shadow-neu transition duration-500 hover:-translate-y-2 hover:shadow-soft dark:bg-white/5 dark:shadow-none"><div className="relative aspect-[4/3] overflow-hidden"><img loading="lazy" src={post.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-crimson-500"><Icon className="h-5 w-5" /></span></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-[.16em] text-crimson-500 dark:text-gold">{post.handle}</p><p className="mt-3 text-sm leading-6 text-ink/65 dark:text-white/65">{post.label}</p><span className="mt-5 inline-flex text-sm font-bold text-crimson-500 dark:text-gold">See post <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div></a></Reveal>;})}</div></div></section>

    <PhotoLightbox photos={filteredPhotos} activeId={activePhotoId} onClose={() => setActivePhotoId(null)} onPrevious={showPrevious} onNext={showNext} />
    <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
  </main>;
}

function unique(values: string[]) {return [...new Set(values)];}