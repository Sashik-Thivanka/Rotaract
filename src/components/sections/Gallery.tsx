












import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ZoomIn, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GALLERY } from '../../lib/data';
import { Reveal } from '../ui/Reveal';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const rowOffsets = [
    useTransform(scrollYProgress, [0, 1], [-140, 140]),
    useTransform(scrollYProgress, [0, 1], [140, -140]),
    useTransform(scrollYProgress, [0, 1], [-180, 180]),
  ];

  const close = () => setActive(null);
  const prev = () => setActive((a) => a === null ? a : (a - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setActive((a) => a === null ? a : (a + 1) % GALLERY.length);

  return (
    <section ref={sectionRef} id="gallery" className="w-full overflow-hidden bg-cream py-20 dark:bg-navy-900/20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col items-end justify-between gap-4 px-6 md:flex-row">
          <div>
            <p className="font-grotesk text-sm font-semibold uppercase tracking-[0.25em] text-navy-500 dark:text-gold">
              Moments
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white md:text-5xl">
              Our journey in pictures
            </h2>
          </div>
          <Link to="/gallery" className="group flex items-center gap-2 rounded-full bg-navy-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5">
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="space-y-5">
          {rowOffsets.map((offset, row) => (
            <motion.div
              key={row}
              style={{ x: offset }}
              className={`flex w-max gap-5 will-change-transform ${row === 1 ? 'rotate-[2deg]' : '-rotate-[2deg]'}`}
            >
              {[...GALLERY, ...GALLERY].map((item, i) => {
                const galleryIndex = i % GALLERY.length;
                return (
                  <button
                    key={`${row}-${i}`}
                    onClick={() => setActive(galleryIndex)}
                    className="group relative block h-52 w-72 flex-none overflow-hidden border-[10px] border-white bg-white shadow-xl transition-transform duration-500 hover:z-10 hover:scale-[1.03] sm:h-64 sm:w-[22rem] lg:h-72 lg:w-[26rem]"
                  >
                    <img
                      src={item.src}
                      alt={`Gallery moment ${galleryIndex + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-navy-800/0 transition-colors duration-300 group-hover:bg-navy-800/40">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </button>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={close}>
          
            <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
            
              <X className="h-6 w-6" />
            </button>
            <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-8">
            
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.img
            key={active}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={GALLERY[active].src}
            alt="Gallery preview"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl" />
          
            <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8">
            
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}