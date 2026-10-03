
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HERO_IMAGES = [
{
  src: "/15c49e70-0bc5-439e-a10f-5b208e5e4a2a.jpg",
  alt: 'Rotaract volunteers working together on a campus clean-up'
},
{
  src: "/a606c5f2-4ff7-416b-b188-84bc639f0afb.jpg",
  alt: 'Rotaract student leaders celebrating together at a community event'
}];


export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % HERO_IMAGES.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      aria-label="Rotaract Club of UCSC introduction"
      className="relative flex min-h-[44rem] w-full items-center overflow-hidden bg-ink md:min-h-screen">
      
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        {HERO_IMAGES.map((image, index) =>
        <motion.img
          key={image.src}
          src={image.src}
          alt={activeImage === index ? image.alt : ''}
          aria-hidden={activeImage !== index}
          initial={false}
          animate={{ opacity: activeImage === index ? 1 : 0, scale: activeImage === index ? 1.03 : 1 }}
          transition={{ opacity: { duration: 1.1 }, scale: { duration: 6.5, ease: 'linear' } }}
          className="absolute inset-0 h-full w-full object-cover" />

        )}
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-r from-navy-800/80 via-navy-700/55 to-navy-500/15 dark:from-navy-800/95 dark:via-navy-700/70 dark:to-navy-500/20" />
      

      <div className="absolute bottom-[19%] right-[6%] z-10 hidden lg:block">
        <div className="rounded-2xl border border-white/25 bg-white/15 px-5 py-4 text-white shadow-soft backdrop-blur-md">
          <p className="font-display text-3xl font-bold">210+</p>
          <p className="mt-0.5 text-xs text-white/75">active changemakers</p>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32 text-left sm:px-6 md:py-32">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-soft backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-light" aria-hidden="true" />
            Service Above Self
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 shadow-soft backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-gold-light" aria-hidden="true" />
            Est. 1998 · District 3220
          </div>
        </div>

        <h1 className="mt-7 max-w-4xl font-display text-5xl font-extrabold leading-[0.88] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.75rem]">
          <span className="block text-white">Rotaract Club</span>
          <span className="block text-gold-light">of UCSC</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
          A youthful movement of dreamers and doers turning compassion into action — creating change that ripples far beyond our campus.
        </p>

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
          <button
            type="button"
            disabled
            className="inline-flex min-w-56 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-navy-700">
            
            Explore Projects
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            disabled
            className="min-w-52 rounded-full border border-white/55 bg-white/5 px-7 py-4 text-base font-semibold text-white">
            
            Our Avenues
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 flex items-center gap-2 sm:right-10" aria-label="Hero image status">
        {HERO_IMAGES.map((image, index) =>
        <span
          key={image.src}
          aria-hidden="true"
          className={`h-1.5 rounded-full transition-all duration-300 ${activeImage === index ? 'w-11 bg-gold' : 'w-5 bg-white/55'}`} />

        )}
        <span className="ml-2 text-xs font-semibold tracking-[0.18em] text-white/85">
          0{activeImage + 1} / 0{HERO_IMAGES.length}
        </span>
      </div>
    </section>);

}