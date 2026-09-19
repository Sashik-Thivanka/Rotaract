import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X as XIcon } from 'lucide-react';
import type { GalleryVideo } from '../../lib/galleryData';

interface VideoModalProps {
  video: GalleryVideo | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {if (event.key === 'Escape') onClose();};
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return <AnimatePresence>{video && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={`${video.title} video`} className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-5 backdrop-blur-sm" onClick={onClose}><motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }} className="w-full max-w-5xl overflow-hidden rounded-4xl bg-ink shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between p-4 text-white"><p className="font-display font-bold">{video.title}</p><button type="button" onClick={onClose} aria-label="Close video" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"><XIcon className="h-5 w-5" /></button></div><div className="aspect-video"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></motion.div></motion.div>}</AnimatePresence>;
}