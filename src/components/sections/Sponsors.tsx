










import React from 'react';
import { SPONSORS } from '../../lib/data';
import { Reveal } from '../ui/Reveal';

export function Sponsors() {
  const doubled = [...SPONSORS, ...SPONSORS];

  return (
    <section className="w-full bg-white py-20 dark:bg-ink md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 text-center">
          <p className="font-grotesk text-sm font-semibold uppercase tracking-[0.25em] text-navy-500 dark:text-gold">
            Better Together
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white md:text-4xl">
            Collaborators &amp; sponsors
          </h2>
        </Reveal>
      </div>

      <div className="marquee-pause relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-ink" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-ink" />

        <div className="flex w-max animate-marquee gap-5">
          {doubled.map((sponsor, i) =>
          <div
            key={i}
            className="group relative flex h-28 w-56 flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-3xl border border-navy-500/10 bg-cream text-center shadow-neu transition-colors hover:border-navy-500/30 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            
              <span className="font-display text-lg font-bold text-ink/70 transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0 dark:text-white/70">
                {sponsor.name}
              </span>
              <span className="absolute inset-x-3 bottom-5 translate-y-4 px-2 text-xs font-medium text-navy-500 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:text-gold">
                {sponsor.detail}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}