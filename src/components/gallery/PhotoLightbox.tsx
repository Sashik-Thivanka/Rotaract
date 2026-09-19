import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Download as DownloadIcon, Expand as ExpandIcon, Share2 as Share2Icon, X as XIcon } from 'lucide-react';
import type { GalleryPhoto } from '../../lib/galleryData';

interface PhotoLightboxProps {
  photos: GalleryPhoto[];
  activeId: string | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function PhotoLightbox({ photos, activeId, onClose, onPrevious, onNext }: PhotoLightboxProps) {
  const activeIndex = photos.findIndex((photo) => photo.id === activeId);
  const photo = activeIndex >= 0 ? photos[activeIndex] : null;

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (!photo) return;
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrevious();
      if (event.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [photo, onClose, onNext, onPrevious]);

  const sharePhoto = async () => {
    if (!photo) return;
    if (navigator.share) await navigator.share({ title: photo.event, text: photo.caption, url: window.location.href });else
    await navigator.clipboard?.writeText(window.location.href);
  };

  const fullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();else
    document.documentElement.requestFullscreen?.();
  };

  return <AnimatePresence>{photo && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={`Photo from ${photo.event}`} className="fixed inset-0 z-[90] bg-ink/95 p-3 backdrop-blur-xl sm:p-6" onClick={onClose}><div className="mx-auto flex h-full max-w-7xl flex-col" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between py-2 text-white"><p className="text-xs font-bold uppercase tracking-[.18em] text-gold">{activeIndex + 1} / {photos.length} · {photo.album}</p><div className="flex items-center gap-2"><button type="button" onClick={sharePhoto} aria-label="Share photo" className="lightbox-control"><Share2Icon className="h-4 w-4" /></button><a href={photo.image} download aria-label="Download photo" className="lightbox-control"><DownloadIcon className="h-4 w-4" /></a><button type="button" onClick={fullscreen} aria-label="Toggle fullscreen" className="lightbox-control"><ExpandIcon className="h-4 w-4" /></button><button type="button" onClick={onClose} aria-label="Close lightbox" className="lightbox-control"><XIcon className="h-5 w-5" /></button></div></div><div className="relative flex min-h-0 flex-1 items-center justify-center py-3"><button type="button" onClick={onPrevious} aria-label="Previous photo" className="absolute left-0 z-10 lightbox-control sm:left-3"><ChevronLeftIcon className="h-6 w-6" /></button><motion.img key={photo.id} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, info) => {if (info.offset.x > 70) onPrevious();if (info.offset.x < -70) onNext();}} src={photo.image} alt={`${photo.event}: ${photo.caption}`} className="max-h-full max-w-[calc(100%-5rem)] select-none rounded-3xl object-contain shadow-2xl" /><button type="button" onClick={onNext} aria-label="Next photo" className="absolute right-0 z-10 lightbox-control sm:right-3"><ChevronRightIcon className="h-6 w-6" /></button></div><div className="grid gap-4 border-t border-white/10 py-4 text-white sm:grid-cols-[1fr_auto]"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-gold">{photo.avenue} · {photo.date}</p><h2 className="mt-1 font-display text-xl font-bold">{photo.event}</h2><p className="mt-1 text-sm text-white/65">{photo.caption} <span className="text-white/35">— photographed by {photo.photographer}</span></p></div><p className="self-end text-xs text-white/45">Swipe or use arrow keys to explore</p></div></div></motion.div>}</AnimatePresence>;
}