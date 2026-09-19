import React from 'react';
import { ArrowDown as ArrowDownIcon, ArrowUpRight as ArrowUpRightIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AVENUE_DETAILS } from '../lib/impactData';
import { Blob } from '../components/ui/Decor';
import { Reveal } from '../components/ui/Reveal';

const accentStyles: Record<string, string> = {
  crimson: 'from-crimson-700 via-crimson-500 to-gold/80',
  rose: 'from-rose-600 via-crimson-500 to-orange-300',
  amber: 'from-amber-600 via-gold to-yellow-200',
  sky: 'from-sky-700 via-sky-500 to-cyan-300',
  violet: 'from-violet-700 via-violet-500 to-fuchsia-300',
  orange: 'from-orange-700 via-orange-500 to-gold',
  fuchsia: 'from-fuchsia-700 via-fuchsia-500 to-rose-300',
  cyan: 'from-cyan-700 via-cyan-500 to-sky-300'
};

export function AvenuesPage() {
  return (
    <main className="overflow-hidden bg-cream pt-24 text-ink dark:bg-ink dark:text-white">
      <section className="relative isolate min-h-[680px] overflow-hidden px-6 pb-20 pt-28 md:pb-28 md:pt-40">
        <img
          src="/6cd30f0e-0ef7-4660-8a0d-f31ff0b33536.jpg"
          alt="Rotaractors sharing books at a community event"
          className="absolute inset-0 -z-20 h-full w-full object-cover" />
        
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <div className="absolute inset-0 -z-10 bg-crimson-900/25" />
        <motion.div aria-hidden animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute right-[11%] top-36 hidden h-20 w-20 rounded-[2rem] border border-white/30 bg-white/10 backdrop-blur-md md:block" />
        <motion.div aria-hidden animate={{ y: [0, 18, 0], x: [0, 10, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute bottom-28 right-[24%] hidden h-12 w-12 rounded-full bg-gold/90 md:block" />

        <div className="mx-auto flex max-w-6xl flex-col justify-end">
          <Reveal className="max-w-3xl">
            <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-md">
              <SparklesIcon className="h-3.5 w-3.5" /> The heart of our impact
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-8xl">Avenues of<br /><span className="text-gold">Service.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">Eight distinct ways to show up, build connection and create a positive imprint. Find the work that moves you, then make it yours.</p>
          </Reveal>
          <a href="#avenue-showcase" className="mt-14 flex w-fit items-center gap-3 text-sm font-semibold text-white/80 transition-colors hover:text-gold">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"><ArrowDownIcon className="h-4 w-4" /></span> Explore the avenues
          </a>
        </div>
      </section>

      <section id="avenue-showcase" className="relative px-6 py-24 md:py-32">
        <Blob className="-left-32 top-12 h-80 w-80 bg-gold/30" />
        <Blob className="right-0 top-1/3 h-96 w-96 bg-crimson-300/25" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="mb-14 flex max-w-2xl flex-col gap-4">
            <p className="font-grotesk text-sm font-bold uppercase tracking-[0.2em] text-crimson-500 dark:text-gold">Choose your influence</p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">A shared purpose, expressed eight ways.</h2>
            <p className="leading-7 text-ink/60 dark:text-white/60">Every team has its own rhythm. Together, they create a culture that reaches farther than any one project.</p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-12">
            {AVENUE_DETAILS.map((avenue, index) => {
              const Icon = avenue.icon;
              const wide = index === 0 || index === 4 || index === 7;
              return (
                <Reveal key={avenue.slug} delay={index * 0.05} className={wide ? 'md:col-span-7' : 'md:col-span-5'}>
                  <Link to={`/avenues/${avenue.slug}`} className="group relative block min-h-[400px] overflow-hidden rounded-5xl bg-ink shadow-soft outline-none ring-offset-4 transition duration-500 hover:-translate-y-2 focus-visible:ring-2 focus-visible:ring-crimson-500 dark:ring-offset-ink">
                    <img loading="lazy" src={avenue.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                    <div className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-70 bg-gradient-to-br ${accentStyles[avenue.accent]}`} />
                    <div className="absolute inset-x-6 top-6 flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md"><Icon className="h-6 w-6" /></span>
                      <span className="flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRightIcon className="h-5 w-5" /></span>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 text-white">
                      <div className="mb-3 flex gap-2 text-[11px] font-bold uppercase tracking-wider text-gold"><span>{avenue.completedProjects} projects</span><span className="text-white/40">•</span><span>{avenue.directors} directors</span></div>
                      <h3 className="font-display text-2xl font-bold md:text-3xl">{avenue.title}</h3>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/75">{avenue.description}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">Explore avenue <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                    </div>
                  </Link>
                </Reveal>);

            })}
          </div>
        </div>
      </section>
    </main>);

}