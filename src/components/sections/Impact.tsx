




import React from 'react';
import { STATS } from '../../lib/data';
import { Counter } from '../ui/Counter';
import { Reveal } from '../ui/Reveal';
import { Blob } from '../ui/Decor';

export function Impact() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 dark:bg-ink md:py-28">
      <Blob className="-left-20 top-10 h-72 w-72 bg-navy-200/40 dark:bg-navy-700/20" />
      <Blob className="-right-16 bottom-0 h-72 w-72 bg-gold/20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="font-grotesk text-sm font-semibold uppercase tracking-[0.25em] text-navy-500 dark:text-gold">
            Our Impact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white md:text-5xl">
            Numbers that tell our story
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-5">
          {STATS.map((stat, i) =>
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className={i === 0 ? 'col-span-2 lg:col-span-1' : ''}>
            
              <div className="group relative h-full overflow-hidden rounded-4xl border border-navy-500/10 bg-cream p-6 text-center shadow-neu transition-all duration-500 hover:-translate-y-2 hover:shadow-soft dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-navy-500 to-gold transition-transform duration-500 group-hover:scale-x-100" />
                <p className="font-display text-3xl font-extrabold text-navy-500 dark:text-gold md:text-4xl">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-ink/60 dark:text-white/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}