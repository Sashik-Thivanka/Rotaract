
import React from 'react';
import {
  ArrowLeft as ArrowLeftIcon,
  CalendarDays as CalendarDaysIcon,
  CheckCircle2 as CheckCircle2Icon,
  Images as ImagesIcon,
  Sparkles as SparklesIcon,
  Users as UsersIcon } from
'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { PROJECT_CATALOG } from '../lib/impactData';
import { Reveal } from '../components/ui/Reveal';

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = PROJECT_CATALOG.find((item) => item.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  const gallery = [
  project.image,
  PROJECT_CATALOG.find((item) => item.id !== project.id)?.image ?? project.image,
  PROJECT_CATALOG.find((item) => item.id !== project.id && item.image !== project.image)?.image ?? project.image];


  return (
    <main className="min-h-screen bg-cream text-ink dark:bg-ink dark:text-white">
      <section className="relative isolate min-h-[600px] overflow-hidden px-6 py-20 md:py-28">
        <img src={project.image} alt={project.title} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
        <div className="mx-auto flex min-h-[420px] max-w-6xl flex-col justify-between">
          <Link to="/projects" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-gold"><ArrowLeftIcon className="h-4 w-4" /> Back to projects</Link>
          <Reveal className="max-w-3xl">
            <div className="flex flex-wrap gap-2"><span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">{project.status}</span><span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">{project.avenue}</span></div>
            <h1 className="mt-5 font-display text-5xl font-extrabold text-white md:text-7xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{project.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_.9fr] md:py-28">
        <Reveal>
          <p className="font-grotesk text-sm font-bold uppercase tracking-[0.18em] text-navy-500 dark:text-gold">The story</p>
          <h2 className="mt-3 font-display text-4xl font-bold">Purpose made tangible.</h2>
          <p className="mt-6 leading-8 text-ink/65 dark:text-white/65">{project.title} is a member-led initiative built around one clear belief: meaningful outcomes start with a community that is invited into the process. From the first planning session to the final handover, our team made space for listening, learning and showing up with care.</p>
          <p className="mt-5 leading-8 text-ink/65 dark:text-white/65">The result is more than an event. It is a lasting connection between Rotaractors, partners and the people whose future this work supports.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[{ label: 'Volunteers', value: project.volunteers, icon: UsersIcon }, { label: 'Moments captured', value: project.photos, icon: ImagesIcon }, { label: 'Project date', value: project.date, icon: CalendarDaysIcon }].map(({ label, value, icon: Icon }) => <div key={label} className="rounded-3xl bg-white p-5 shadow-neu dark:bg-white/5 dark:shadow-none"><Icon className="h-5 w-5 text-navy-500 dark:text-gold" /><p className="mt-4 font-display text-2xl font-bold">{value}</p><p className="mt-1 text-xs text-ink/55 dark:text-white/55">{label}</p></div>)}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-5xl bg-navy-500 p-8 text-white shadow-soft md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Objectives</p>
          <ul className="mt-8 space-y-5">{['Create a welcoming, practical experience for every participant.', 'Build an outcome that can keep growing after the event ends.', 'Connect members with partners who share the same purpose.'].map((objective) => <li key={objective} className="flex gap-3 text-sm leading-6 text-white/80"><CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{objective}</li>)}</ul>
          <div className="mt-10 border-t border-white/15 pt-7"><p className="text-xs font-bold uppercase tracking-wide text-white/50">Organising team</p><p className="mt-2 font-display text-xl font-bold">{project.avenue} Avenue</p>{project.collaboration && <p className="mt-2 text-sm text-white/65">In collaboration with {project.collaboration}</p>}</div>
        </Reveal>
      </section>

      <section className="bg-white px-6 py-20 dark:bg-white/5 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-grotesk text-sm font-bold uppercase tracking-[0.18em] text-navy-500 dark:text-gold">In the field</p><h2 className="mt-3 font-display text-4xl font-bold">The moments behind the milestone.</h2></div><p className="max-w-sm text-sm leading-6 text-ink/55 dark:text-white/55">A visual record of the people, preparation and joy that moved this story forward.</p></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-12 md:grid-rows-2">
            <Reveal className="overflow-hidden rounded-4xl md:col-span-7 md:row-span-2"><img loading="lazy" src={gallery[0]} alt={`${project.title} gallery highlight`} className="h-full min-h-[360px] w-full object-cover" /></Reveal>
            <Reveal delay={0.08} className="overflow-hidden rounded-4xl md:col-span-5"><img loading="lazy" src={gallery[1]} alt="Rotaract project team in action" className="h-56 w-full object-cover md:h-full" /></Reveal>
            <Reveal delay={0.14} className="relative overflow-hidden rounded-4xl bg-ink p-7 text-white md:col-span-5"><img loading="lazy" src={gallery[2]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" /><div className="relative"><SparklesIcon className="h-6 w-6 text-gold" /><p className="mt-7 font-display text-3xl font-bold">A story bigger than one day.</p><p className="mt-3 text-sm leading-6 text-white/70">The effort continues through the connections it creates and the care it invites forward.</p></div></Reveal>
          </div>
        </div>
      </section>

    </main>);

}