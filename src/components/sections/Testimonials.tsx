import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../lib/data';
import { Reveal } from '../ui/Reveal';
import { Blob } from '../ui/Decor';
const TESTIMONIAL_NOISE =
  "data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.78' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.42'/%3E%3C/svg%3E";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const paginate = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <section className="relative w-full overflow-hidden bg-[#ECECE8] py-20 text-ink md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35 mix-blend-multiply"
        style={{ backgroundImage: `url("${TESTIMONIAL_NOISE}")`, backgroundSize: '180px 180px' }}
      />
      <Blob className="-left-10 top-10 h-72 w-72 bg-gold/10" />
      <Blob className="-right-10 bottom-10 h-72 w-72 bg-ink/5" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Quote className="mx-auto mb-6 h-12 w-12 text-gold" />
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink/65">
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
              
              <p className="font-cormorant text-xl font-medium leading-relaxed text-ink md:text-2xl">
                “{t.quote}”
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-gold/40" />
                
                <div>
                  <p className="font-display font-bold text-ink">{t.name}</p>
                  <p className="font-body text-sm text-ink/65">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors hover:bg-ink/20">
            
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
              i === index ? 'w-8 bg-gold' : 'w-2 bg-ink/25'}`
              } />

            )}
          </div>
          <button
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors hover:bg-ink/20">
            
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>);

}