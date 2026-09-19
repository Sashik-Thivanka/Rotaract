import React from 'react';
import { ArrowLeft as ArrowLeftIcon, ArrowUpRight as ArrowUpRightIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AVENUE_DETAILS } from '../lib/impactData';

export function AvenuePreviewPage() {
  const { slug } = useParams();
  const avenue = AVENUE_DETAILS.find((item) => item.slug === slug);

  if (!avenue) return <Navigate to="/avenues" replace />;
  if (avenue.slug === 'club-service') return <Navigate to="/avenues/club-service" replace />;

  const Icon = avenue.icon;

  return (
    <main className="min-h-screen bg-cream pt-24 text-ink dark:bg-ink dark:text-white">
      <section className="relative isolate overflow-hidden px-6 py-24 md:py-36">
        <img src={avenue.image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink/75" />
        <div className="mx-auto max-w-6xl">
          <Link to="/avenues" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-gold"><ArrowLeftIcon className="h-4 w-4" /> All avenues</Link>
          <div className="mt-20 max-w-2xl">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-gold backdrop-blur-md"><Icon className="h-7 w-7" /></span>
            <p className="mt-8 font-grotesk text-sm font-bold uppercase tracking-[0.2em] text-gold">Avenue of service</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold text-white md:text-7xl">{avenue.title}</h1>
            <p className="mt-6 text-xl leading-8 text-white/75">{avenue.tagline}</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-5xl bg-white p-8 shadow-neu dark:bg-white/5 dark:shadow-none dark:ring-1 dark:ring-white/10 md:p-12">
            <SparklesIcon className="h-7 w-7 text-crimson-500 dark:text-gold" />
            <h2 className="mt-8 font-display text-3xl font-bold">A story in progress.</h2>
            <p className="mt-5 max-w-xl leading-8 text-ink/65 dark:text-white/65">{avenue.description} This avenue’s full project archive and leadership story are being shaped with the same care its members bring to every initiative.</p>
          </div>
          <aside className="rounded-5xl bg-crimson-500 p-8 text-white shadow-soft md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">At a glance</p>
            <div className="mt-10 space-y-7"><div><p className="font-display text-4xl font-bold">{avenue.completedProjects}</p><p className="mt-1 text-white/65">completed projects</p></div><div><p className="font-display text-4xl font-bold">{avenue.directors}</p><p className="mt-1 text-white/65">active directors</p></div></div>
            <Link to="/avenues/club-service" className="mt-10 inline-flex items-center gap-2 font-semibold text-gold transition hover:text-white">See the Club Service experience <ArrowUpRightIcon className="h-4 w-4" /></Link>
          </aside>
        </div>
      </section>
    </main>);

}