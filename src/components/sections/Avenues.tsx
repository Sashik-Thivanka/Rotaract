import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AVENUE_DETAILS } from '../../lib/impactData';

interface AvenueCardProps {
  avenue: typeof AVENUE_DETAILS[number];
  index: number;
  totalAvenues: number;
  scrollYProgress: any;
}

function AvenueCard({ avenue, index, totalAvenues, scrollYProgress }: AvenueCardProps) {
  const isEven = index % 2 === 1;
  const avenueNumber = String(index + 1).padStart(2, '0');
  const [firstWord, ...restWords] = avenue.title.split(' ');
  const secondLine = restWords.join(' ');

  // Each avenue occupies an equal slice of the scroll container
  const step = 1 / totalAvenues;
  const start = index * step;
  const end = (index + 1) * step;

  // Calculate fade in and fade out windows with smooth overlap
  const fadeInStart = index === 0 ? 0 : start;
  const fadeInEnd = index === 0 ? 0.05 : start + step * 0.28;
  const fadeOutStart = index === totalAvenues - 1 ? 0.98 : end - step * 0.28;
  const fadeOutEnd = index === totalAvenues - 1 ? 1 : end;

  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [index === 0 ? 1 : 0, 1, 1, index === totalAvenues - 1 ? 1 : 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [index === 0 ? 1 : 0.95, 1, 1, index === totalAvenues - 1 ? 1 : 1.05]
  );

  const y = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [index === 0 ? 0 : 20, 0, 0, index === totalAvenues - 1 ? 0 : -20]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        pointerEvents: opacity.get() > 0.1 ? 'auto' : 'none',
      }}
      className="absolute inset-0 flex h-full w-full items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 will-change-[opacity,transform]"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
        {!isEven ? (
          <>
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center lg:col-span-6">
              <h3
                style={{ color: 'rgb(197, 160, 71)' }}
                className="font-cormorant text-2xl font-light uppercase leading-[1.08] tracking-[0.06em] sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {firstWord}
                {secondLine && (
                  <>
                    <br />
                    <span>{secondLine}</span>
                  </>
                )}
              </h3>

              <p className="mt-3 font-cormorant text-base italic tracking-wide text-white/75 sm:text-lg">
                {avenue.tagline}
              </p>

              <p className="mt-5 max-w-md font-body text-xs font-light leading-relaxed text-white/65 sm:text-sm md:text-base">
                {avenue.description}
              </p>

              <div className="mt-6 flex items-baseline font-cormorant text-5xl font-light sm:text-6xl md:text-7xl">
                <span style={{ color: 'rgb(197, 160, 71)' }}>{avenueNumber}</span>
                <span className="ml-3 font-mono text-xs font-normal tracking-widest text-white/40 sm:text-sm">
                  / 0{totalAvenues}
                </span>
              </div>
            </div>

            {/* Right: Rectangular Image */}
            <div className="flex items-center justify-center lg:col-span-6 lg:justify-end">
              <div className="relative aspect-[16/10] w-full max-w-[560px] overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                <img
                  src={avenue.image}
                  alt={avenue.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Left: Rectangular Image */}
            <div className="order-2 flex items-center justify-center lg:order-1 lg:col-span-6 lg:justify-start">
              <div className="relative aspect-[16/10] w-full max-w-[560px] overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                <img
                  src={avenue.image}
                  alt={avenue.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-6 lg:pl-6">
              <h3
                style={{ color: 'rgb(197, 160, 71)' }}
                className="font-cormorant text-2xl font-light uppercase leading-[1.08] tracking-[0.06em] sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {firstWord}
                {secondLine && (
                  <>
                    <br />
                    <span>{secondLine}</span>
                  </>
                )}
              </h3>

              <p className="mt-3 font-cormorant text-base italic tracking-wide text-white/75 sm:text-lg">
                {avenue.tagline}
              </p>

              <p className="mt-5 max-w-md font-body text-xs font-light leading-relaxed text-white/65 sm:text-sm md:text-base">
                {avenue.description}
              </p>

              <div className="mt-6 flex items-baseline font-cormorant text-5xl font-light sm:text-6xl md:text-7xl">
                <span style={{ color: 'rgb(197, 160, 71)' }}>{avenueNumber}</span>
                <span className="ml-3 font-mono text-xs font-normal tracking-widest text-white/40 sm:text-sm">
                  / 0{totalAvenues}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export function Avenues() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const totalAvenues = AVENUE_DETAILS.length; // 8

  // Scroll track for pinned fading sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      id="avenues"
      className="relative z-20 h-[500vh] w-full bg-black"
    >
      {/* Sticky Fullscreen Stage */}
      <section
        aria-label="Eight Avenues of Service"
        className="sticky top-0 flex h-[100dvh] w-full flex-col justify-center overflow-hidden bg-black text-white select-none"
      >
        {/* ── BACKGROUND VIDEO LAYER ─── */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            src="/assets/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover filter blur-[2px] brightness-[42%] contrast-[110%]"
          />
          {/* Subtle vignette and dark scrim overlay to ensure clean contrast */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70" />
        </div>

        {/* ── STACKED FADING AVENUES ─────────────── */}
        <div className="relative z-20 h-[80vh] w-full">
          {AVENUE_DETAILS.map((avenue, index) => (
            <AvenueCard
              key={avenue.slug}
              avenue={avenue}
              index={index}
              totalAvenues={totalAvenues}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Avenues;

