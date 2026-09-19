import React from 'react';
import { ArrowUpRight as ArrowUpRightIcon, Images as ImagesIcon } from 'lucide-react';
import type { GalleryAlbum } from '../../lib/galleryData';

interface AlbumCardProps {
  album: GalleryAlbum;
  featured?: boolean;
  onOpen: (album: GalleryAlbum) => void;
}

export function AlbumCard({ album, featured = false, onOpen }: AlbumCardProps) {
  return <article className={`group overflow-hidden rounded-5xl bg-ink text-white shadow-soft ${featured ? 'grid md:grid-cols-[1.25fr_.75fr]' : ''}`}><div className={`relative overflow-hidden ${featured ? 'min-h-[360px] md:min-h-[480px]' : 'aspect-[4/3]'}`}><img loading="lazy" src={album.image} alt={album.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-ink/20" /></div><div className={`flex flex-col ${featured ? 'justify-center p-8 md:p-12' : 'p-6'}`}><p className="text-xs font-bold uppercase tracking-[.18em] text-gold">{album.avenue}</p><h3 className={`mt-4 font-display font-bold ${featured ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>{album.title}</h3><p className="mt-4 text-sm leading-7 text-white/65">{album.description}</p><div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-white/65"><span>{album.date}</span><span className="inline-flex items-center gap-1.5"><ImagesIcon className="h-4 w-4 text-gold" /> {album.photos} photos</span></div><button type="button" onClick={() => onOpen(album)} className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-white">View album <ArrowUpRightIcon className="h-4 w-4" /></button></div></article>;
}