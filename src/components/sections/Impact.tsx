




import { STATS } from '../../lib/data';
import { Counter } from '../ui/Counter';
import { Reveal } from '../ui/Reveal';
import { Blob } from '../ui/Decor';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Impact() {
  const visibleStats = STATS.filter((stat) => stat.label !== 'Funds Raised');
  const statsRef = useRef<HTMLDivElement>(null);
  const areStatsInView = useInView(statsRef, { once: true, amount: 0.75 });

  return (
    <section className="relative w-full overflow-hidden bg-black pb-20 pt-10 text-[#ECECE8] md:pb-28 md:pt-16">
      <Blob className="-left-20 top-10 h-72 w-72 bg-white/5" />
      <Blob className="-right-16 bottom-0 h-72 w-72 bg-gold/10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="whitespace-nowrap font-cormorant text-4xl font-semibold leading-none md:text-5xl">
            <span className="text-[#ECECE8]">Our</span>{' '}
            <span className="text-gold">Impact</span>
          </p>
          <h2 className="mt-3 font-cormorant text-3xl font-semibold text-[#ECECE8] md:text-5xl">
            Numbers that tell our story
          </h2>
        </Reveal>

        <div ref={statsRef} className="mx-auto grid max-w-5xl grid-cols-2 gap-5 md:gap-7 lg:grid-cols-4">
          {visibleStats.map((stat, i) =>
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className={i === 0 ? 'col-span-2 lg:col-span-1' : ''}>
            
              <div className="relative flex h-full min-h-[9rem] flex-col items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-[#0A0606] p-8 text-center shadow-none">
                <p className="whitespace-nowrap font-cormorant text-4xl font-semibold leading-none text-gold md:text-5xl">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    minDigits={stat.minDigits}
                    startDelay={i * 180}
                    trigger={areStatsInView} />
                </p>
                <p className="mt-3 font-grotesk text-base font-medium text-[#ECECE8]/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}