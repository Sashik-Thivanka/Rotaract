import React from 'react';
import { Eye as EyeIcon, Images as ImagesIcon, SearchX as SearchXIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import type { GalleryPhoto } from '../../lib/galleryData';

interface GalleryMasonryProps {
  photos: GalleryPhoto[];
  isLoading: boolean;
  onOpen: (photo: GalleryPhoto) => void;
  onClear: () => void;
}

const aspectClass = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square'
};

export function GalleryMasonry({ photos, isLoading, onOpen, onClear }: GalleryMasonryProps) {
  if (isLoading) return <div aria-label="Loading photos" className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">{Array.from({ length: 6 }).map((_, index) => <div key={index} className={`${index % 3 === 0 ? 'aspect-[3/4]' : index % 2 === 0 ? 'aspect-square' : 'aspect-[4/3]'} animate-pulse break-inside-avoid rounded-4xl bg-ink/10 dark:bg-white/10`} />)}</div>;

  if (!photos.length) return <div className="flex min-h-[360px] flex-col items-center justify-center rounded-5xl border border-dashed border-crimson-500/25 bg-white/60 p-10 text-center dark:border-gold/30 dark:bg-white/5"><SearchXIcon className="h-10 w-10 text-crimson-500 dark:text-gold" /><h3 className="mt-5 font-display text-2xl font-bold">No moments found.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-ink/60 dark:text-white/60">Try a different filter combination or return to the full collection.</p><button type="button" onClick={onClear} className="mt-7 rounded-full bg-crimson-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-crimson-700 dark:bg-gold dark:text-ink dark:hover:bg-white">Show every photo</button></div>;

  return <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">{photos.map((photo, index) => <motion.article key={photo.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.3) }} className="break-inside-avoid"><button type="button" onClick={() => onOpen(photo)} className={`group relative block w-full overflow-hidden rounded-4xl bg-ink text-left shadow-neu focus:outline-none focus-visible:ring-4 focus-visible:ring-gold dark:shadow-none ${aspectClass[photo.aspect]}`}><img loading="lazy" src={photo.image} alt={`${photo.event}: ${photo.caption}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/65" /><div className="absolute inset-x-5 bottom-5 translate-y-4 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div className="flex items-end justify-between gap-3"><div><p className="text-[11px] font-bold uppercase tracking-[.15em] text-gold">{photo.avenue}</p><h3 className="mt-1 font-display text-lg font-bold leading-tight">{photo.event}</h3></div><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur"><EyeIcon className="h-4 w-4" /></span></div><p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-white/70"><ImagesIcon className="h-3.5 w-3.5" /> {photo.photoCount} photos</p></div></button></motion.article>)}</div>;
}