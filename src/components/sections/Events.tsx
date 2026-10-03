







import React, { useEffect, useState } from 'react';
import { MapPin, CalendarDays } from 'lucide-react';
import { EVENTS, type EventItem } from '../../lib/data';
import { Reveal } from '../ui/Reveal';

function useCountdown(target: string) {
  const [remaining, setRemaining] = useState(() => Math.max(0, +new Date(target) - Date.now()));
  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, +new Date(target) - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor(remaining % 86400000 / 3600000);
  const minutes = Math.floor(remaining % 3600000 / 60000);
  const seconds = Math.floor(remaining % 60000 / 1000);
  return { days, hours, minutes, seconds };
}

function CountdownCell({ value, label }: {value: number;label: string;}) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-navy-500/10 px-3 py-2 dark:bg-white/10">
      <span className="font-display text-xl font-bold tabular-nums text-navy-600 dark:text-gold">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] font-medium uppercase tracking-wider text-ink/50 dark:text-white/50">
        {label}
      </span>
    </div>);

}

function EventRow({ event, index }: {event: EventItem;index: number;}) {
  const { days, hours, minutes, seconds } = useCountdown(event.targetDate);
  const isEven = index % 2 === 1;

  return (
    <Reveal delay={index * 0.1}>
      <div className="relative pl-10 md:pl-0">
        {/* timeline dot */}
        <span className="absolute left-[7px] top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-cream bg-navy-500 shadow-glow dark:border-ink md:left-1/2" />

        <div
          className={`flex flex-col overflow-hidden rounded-4xl bg-white shadow-neu dark:bg-white/5 dark:shadow-none dark:ring-1 dark:ring-white/10 md:w-[calc(50%-2.5rem)] ${
          isEven ? 'md:ml-auto' : ''}`
          }>
          
          <div className="relative aspect-[16/7] overflow-hidden">
            <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
            <div className="absolute bottom-4 left-5 text-white">
              <h3 className="font-display text-xl font-bold md:text-2xl">{event.title}</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/60 dark:text-white/60">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-navy-500 dark:text-gold" /> {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-navy-500 dark:text-gold" /> {event.location}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <CountdownCell value={days} label="Days" />
              <CountdownCell value={hours} label="Hrs" />
              <CountdownCell value={minutes} label="Min" />
              <CountdownCell value={seconds} label="Sec" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>);

}

export function Events() {
  return (
    <section id="events" className="relative w-full scroll-mt-24 bg-white py-20 dark:bg-ink md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="font-grotesk text-sm font-semibold uppercase tracking-[0.25em] text-navy-500 dark:text-gold">
            What's Next
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white md:text-5xl">
            Upcoming events
          </h2>
        </Reveal>

        <div className="relative space-y-10">
          {/* center line */}
          <span className="absolute left-[7px] top-0 h-full w-0.5 bg-gradient-to-b from-navy-500/40 via-gold/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          {EVENTS.map((event, i) =>
          <EventRow key={event.id} event={event} index={i} />
          )}
        </div>
      </div>
    </section>);

}