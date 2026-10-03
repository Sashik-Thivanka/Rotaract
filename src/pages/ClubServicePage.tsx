
import React from 'react';
import { ArrowRight as ArrowRightIcon, CheckCircle2 as CheckCircle2Icon, Instagram as InstagramIcon, Linkedin as LinkedinIcon, Mail as MailIcon, Sparkles as SparklesIcon, UsersRound as UsersRoundIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CLUB_DIRECTORS, PROJECT_CATALOG } from '../lib/impactData';
import { ProjectDiscoveryCard } from '../components/impact/ProjectDiscoveryCard';
import { Blob } from '../components/ui/Decor';
import { Reveal } from '../components/ui/Reveal';

const clubProjects = PROJECT_CATALOG.filter((project) => project.avenue === 'Club Service');

export function ClubServicePage() {
  return (
    <main className="overflow-hidden bg-cream text-ink dark:bg-ink dark:text-white">
      <section className="relative isolate min-h-[740px] overflow-hidden px-6 pb-16 pt-24 md:pb-20 md:pt-36">
        <img src="/1e74bf3b-bd1e-4979-a2ae-f0d17883d4b4.jpg" alt="Club Service members planning together" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <motion.div aria-hidden animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute right-[13%] top-36 hidden h-24 w-24 rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-md md:block" />
        <div className="relative mx-auto flex min-h-[570px] max-w-6xl flex-col justify-between">
          <Reveal className="max-w-3xl">
            <Link to="/avenues" className="mb-14 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-gold">← All avenues</Link>
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-md"><SparklesIcon className="h-3.5 w-3.5" /> Avenue of service</div>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white md:text-8xl">Club<br /><span className="text-gold">Service.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">The culture engine behind a club where every member feels seen, connected and ready to make something meaningful happen.</p>
          </Reveal>
          <Reveal delay={0.15} className="grid overflow-hidden rounded-4xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-4">
            {[['18', 'Active projects'], ['126', 'Volunteers'], ['24', 'Events conducted'], ['210', 'Members engaged']].map(([value, label]) => <div key={label} className="border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-6"><p className="font-display text-3xl font-bold text-white md:text-4xl">{value}</p><p className="mt-1 text-xs font-medium text-white/60">{label}</p></div>)}
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24 md:py-32">
        <Blob className="-left-28 top-20 h-80 w-80 bg-gold/25" />
        <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <Reveal>
            <div className="relative mx-auto max-w-md rounded-5xl bg-navy-500 p-8 text-white shadow-soft md:p-10"><div className="absolute -right-5 -top-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gold text-ink shadow-lg"><UsersRoundIcon className="h-7 w-7" /></div><p className="font-display text-6xl font-bold leading-none">One club.<br />Many stories.</p><p className="mt-8 max-w-xs text-sm leading-7 text-white/75">We build the setting where people can turn a shared purpose into a lifelong sense of belonging.</p></div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-grotesk text-sm font-bold uppercase tracking-[0.2em] text-navy-500 dark:text-gold">About Club Service</p><h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">We turn a club into a community.</h2><p className="mt-6 max-w-xl leading-8 text-ink/65 dark:text-white/65">Club Service holds the human side of Rotaract together: the welcome, the laughter, the rituals, the shared wins and the timely check-in that means a new face never stays a stranger for long.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">{[{ title: 'Mission', copy: 'Create belonging through intentional experiences.' }, { title: 'Responsibility', copy: 'Shape events that connect members across every batch.' }, { title: 'Goal', copy: 'Make participation feel open, joyful and worth returning to.' }].map((item) => <div key={item.title} className="rounded-3xl border border-navy-500/10 bg-white/75 p-5 shadow-neu dark:border-white/10 dark:bg-white/5 dark:shadow-none"><CheckCircle2Icon className="h-5 w-5 text-navy-500 dark:text-gold" /><h3 className="mt-5 font-display font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-ink/55 dark:text-white/55">{item.copy}</p></div>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-white md:py-32"><div className="mx-auto max-w-6xl"><Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-grotesk text-sm font-bold uppercase tracking-[0.2em] text-gold">The people behind the moments</p><h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Leadership that makes room for everyone.</h2></div><p className="max-w-sm text-sm leading-7 text-white/60">Three thinkers, listeners and memory-makers keeping the club’s connection strong.</p></Reveal><div className="mt-14 grid gap-6 md:grid-cols-3">{CLUB_DIRECTORS.map((director, index) => <Reveal key={director.name} delay={index * 0.08}><article className="group overflow-hidden rounded-5xl border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:bg-white/10"><div className="relative aspect-[3/4] overflow-hidden"><img src={director.image} alt={director.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" /><div className="absolute inset-x-5 bottom-5 flex translate-y-3 items-center justify-between opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><a href="https://www.instagram.com/" aria-label={`${director.name} on Instagram`} className="rounded-full bg-white/15 p-2.5 text-white backdrop-blur-md transition hover:bg-gold hover:text-ink"><InstagramIcon className="h-4 w-4" /></a><a href="https://www.linkedin.com/" aria-label={`${director.name} on LinkedIn`} className="rounded-full bg-white/15 p-2.5 text-white backdrop-blur-md transition hover:bg-gold hover:text-ink"><LinkedinIcon className="h-4 w-4" /></a></div></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{director.role}</p><h3 className="mt-2 font-display text-2xl font-bold">{director.name}</h3><p className="mt-3 text-sm leading-6 text-white/60">{director.bio}</p><a href="mailto:clubservice@rotaractucsc.org" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:text-white"><MailIcon className="h-4 w-4" /> Contact</a></div></article></Reveal>)}</div></div></section>

      <section className="px-6 py-24 md:py-32"><div className="mx-auto max-w-6xl"><Reveal className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-grotesk text-sm font-bold uppercase tracking-[0.2em] text-navy-500 dark:text-gold">Featured projects</p><h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">The moments we made matter.</h2></div><Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-navy-500 transition hover:text-navy-700 dark:text-gold dark:hover:text-white">View every project <ArrowRightIcon className="h-4 w-4" /></Link></Reveal><div className="grid gap-6 md:grid-cols-2">{clubProjects.map((project, index) => <Reveal key={project.id} delay={index * 0.08}><ProjectDiscoveryCard project={project} /></Reveal>)}</div></div></section>

    </main>);

}