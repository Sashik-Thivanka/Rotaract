import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MapPin, CalendarDays } from 'lucide-react';
import { EVENTS, type EventItem } from '../../lib/data';

/* ─────────────────────────────────────────────────────────────────────────
   Live countdown
───────────────────────────────────────────────────────────────────────── */
function useCountdown(target: string) {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, +new Date(target) - Date.now())
  );
  useEffect(() => {
    const id = setInterval(
      () => setRemaining(Math.max(0, +new Date(target) - Date.now())),
      1000
    );
    return () => clearInterval(id);
  }, [target]);
  return {
    days:    Math.floor(remaining / 86400000),
    hours:   Math.floor((remaining % 86400000) / 3600000),
    minutes: Math.floor((remaining % 3600000)  / 60000),
    seconds: Math.floor((remaining % 60000)    / 1000),
  };
}

/* ── Countdown cell ───────────────────────────────────────────────────── */
function CountdownCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center border border-white/10 px-3 py-2 sm:px-4 sm:py-3">
      <span
        className="font-cormorant text-2xl font-light tabular-nums leading-none sm:text-3xl"
        style={{ color: 'rgb(197,160,71)' }}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Single timeline item
   isLeft  → card on left,  slides in from left
   !isLeft → card on right, slides in from right
───────────────────────────────────────────────────────────────────────── */
function TimelineItem({
  event,
  index,
}: {
  event: EventItem;
  index: number;
}) {
  const isLeft = index % 2 === 0;
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' });
  const { days, hours, minutes, seconds } = useCountdown(event.targetDate);

  const cardVariants = {
    hidden:  { opacity: 0, x: isLeft ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    /* Row: each item occupies its own row in the grid */
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_56px_1fr] items-start"
    >
      {/* ── Left slot ── */}
      <div className={isLeft ? 'pr-6 sm:pr-10 flex justify-end' : ''}>
        {isLeft && (
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="w-full max-w-md"
          >
            <EventCard event={event} index={index} />
          </motion.div>
        )}
      </div>

      {/* ── Centre axis: node ── */}
      <div className="flex flex-col items-center pt-6">
        {/* Node */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative z-10 flex h-9 w-9 items-center justify-center"
        >
          {/* Pulse ring when active */}
          {inView && (
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ border: '1.5px solid rgb(197,160,71)' }}
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
          {/* Solid circle */}
          <span
            className="h-3.5 w-3.5 rounded-full ring-2 ring-offset-2"
            style={{
              backgroundColor: 'rgb(197,160,71)',
              ringColor: 'rgb(197,160,71)',
              ringOffsetColor: '#0c0c0c',
              boxShadow: inView
                ? '0 0 0 2px #0c0c0c, 0 0 0 4px rgb(197,160,71), 0 0 16px 4px rgba(197,160,71,0.4)'
                : '0 0 0 2px #0c0c0c, 0 0 0 4px rgba(197,160,71,0.4)',
            }}
          />
        </motion.div>
      </div>

      {/* ── Right slot ── */}
      <div className={!isLeft ? 'pl-6 sm:pl-10 flex justify-start' : ''}>
        {!isLeft && (
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="w-full max-w-md"
          >
            <EventCard event={event} index={index} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Event card interior (shared by both sides) ───────────────────────── */
function EventCard({ event, index }: { event: EventItem; index: number }) {
  const { days, hours, minutes, seconds } = useCountdown(event.targetDate);
  return (
    <article className="overflow-hidden bg-white/[0.04] border border-white/10 group">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover brightness-70 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        {/* Index */}
        <span
          className="absolute left-4 top-4 font-mono text-xs uppercase tracking-[0.28em]"
          style={{ color: 'rgb(197,160,71)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-cormorant text-xl font-light uppercase leading-[1.06] tracking-[0.05em] text-white sm:text-2xl">
            {event.title}
          </h3>
        </div>
      </div>

      {/* Meta + countdown */}
      <div className="px-4 pt-4 pb-5 sm:px-5 sm:pt-5">
        {/* Date & location */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 mb-5">
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            <CalendarDays className="h-3 w-3 flex-shrink-0" style={{ color: 'rgb(197,160,71)' }} />
            {event.date}
          </span>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            <MapPin className="h-3 w-3 flex-shrink-0" style={{ color: 'rgb(197,160,71)' }} />
            {event.location}
          </span>
        </div>
        {/* Countdown */}
        <div className="grid grid-cols-4">
          <CountdownCell value={days}    label="Days" />
          <CountdownCell value={hours}   label="Hrs"  />
          <CountdownCell value={minutes} label="Min"  />
          <CountdownCell value={seconds} label="Sec"  />
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────────────────────── */
export function Events() {
  /* Scroll-driven progress line */
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.5'],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative w-full overflow-hidden scroll-mt-24"
      style={{ backgroundColor: '#0c0c0c' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-8 md:py-36">

        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[rgb(197,160,71)]">
            ◆ &nbsp;What's Next
          </span>
          <h2 className="mt-4 font-cormorant text-4xl font-light uppercase leading-[1.06] tracking-[0.07em] text-white sm:text-5xl md:text-6xl">
            Upcoming{' '}
            <span style={{ color: 'rgb(197,160,71)' }}>Events</span>
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Axis track (background) */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          />

          {/* Axis progress fill */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-px origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgb(197,160,71), rgba(197,160,71,0.15))',
              scaleY: lineScaleY,
              height: '100%',
            }}
          />

          {/* Items */}
          <div className="flex flex-col gap-16 sm:gap-20">
            {EVENTS.map((event, i) => (
              <TimelineItem key={event.id} event={event} index={i} />
            ))}
          </div>

          {/* Bottom cap dot */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full"
            style={{ backgroundColor: 'rgb(197,160,71)', opacity: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
}