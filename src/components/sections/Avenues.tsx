








import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AVENUES, type Avenue } from '../../lib/data';
import { Reveal } from '../ui/Reveal';
import { Blob } from '../ui/Decor';

const avenueRoutes: Record<string, string> = {
  'Club Service': 'club-service',
  'Community Service': 'community-service',
  Finance: 'finance',
  'International Service': 'international-service',
  'Professional Development': 'professional-development',
  'Sports & Recreation': 'sports-recreation',
  'Public Relations': 'public-relations',
  'Digital Services': 'digital-services'
};

function AvenueCard({ avenue }: {avenue: Avenue;}) {
  const Icon = avenue.icon;
  const isFeature = avenue.tint.includes('crimson-500');

  return (
    <Link
      to={`/avenues/${avenueRoutes[avenue.title]}`}
      className={`group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-4xl p-6 transition-all duration-500 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-500 ${avenue.span} ${
      isFeature ?
      `bg-gradient-to-br ${avenue.tint} text-white shadow-soft` :
      `bg-gradient-to-br ${avenue.tint} border border-crimson-500/10 bg-white text-ink shadow-neu dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none`}`
      }>
      
      {/* decorative ring */}
      <span
        className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full transition-transform duration-700 group-hover:scale-150 ${
        isFeature ? 'bg-white/10' : 'bg-crimson-500/5 dark:bg-white/5'}`
        } />
      
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
        isFeature ? 'bg-white/20' : 'bg-crimson-500/10 text-crimson-500 dark:bg-white/10 dark:text-gold'}`
        }>
        
        <Icon className="h-6 w-6" />
      </div>
      <div className="relative mt-4">
        <h3 className={`font-display text-lg font-bold ${isFeature ? 'md:text-2xl' : ''}`}>
          {avenue.title}
        </h3>
        <p
          className={`mt-1.5 text-sm leading-relaxed ${
          isFeature ? 'text-white/80' : 'text-ink/55 dark:text-white/55'}`
          }>
          
          {avenue.description}
        </p>
      </div>
      <span
        className={`absolute right-5 top-6 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 ${
        isFeature ? 'text-white' : 'text-crimson-500 dark:text-gold'}`
        }>
        
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </Link>);

}

export function Avenues() {
  return (
    <section
      id="avenues"
      className="relative w-full overflow-hidden bg-cream py-20 dark:bg-crimson-900/20 md:py-28">
      
      <Blob className="right-0 top-1/4 h-80 w-80 bg-purple-300/20" />
      <Blob className="left-0 bottom-1/4 h-72 w-72 bg-gold/20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="font-grotesk text-sm font-semibold uppercase tracking-[0.25em] text-crimson-500 dark:text-gold">
            How We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white md:text-5xl">
            Eight avenues of service
          </h2>
          <p className="mt-4 text-ink/60 dark:text-white/60">
            Every passion has a home here. Explore the eight pathways through which our members
            create meaningful, lasting change.
          </p>
        </Reveal>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AVENUES.map((avenue, i) =>
          <Reveal key={avenue.title} delay={i * 0.06} className={avenue.span}>
              <AvenueCard avenue={avenue} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}