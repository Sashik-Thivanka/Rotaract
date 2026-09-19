


















import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../lib/data';
import { Reveal } from '../ui/Reveal';
import { Blob } from '../ui/Decor';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const paginate = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <section className="relative w-full overflow-hidden bg-crimson-700 py-20 dark:bg-crimson-900 md:py-28">
      <Blob className="-left-10 top-10 h-72 w-72 bg-gold/20" />
      <Blob className="-right-10 bottom-10 h-72 w-72 bg-crimson-400/40" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Quote className="mx-auto mb-6 h-12 w-12 text-gold" />
          <p className="font-grotesk text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Voices of Rotaract
          </p>
        </Reveal>

        <div className="relative mt-8 min-h-[220px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              
              <p className="font-display text-xl font-medium leading-relaxed text-white md:text-2xl">
                “{t.quote}”
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-gold/40" />
                
                <div>
                  <p className="font-display font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/70">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
            
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) =>
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
              i === index ? 'w-8 bg-gold' : 'w-2 bg-white/30'}`
              } />

            )}
          </div>
          <button
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
            
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>);

}