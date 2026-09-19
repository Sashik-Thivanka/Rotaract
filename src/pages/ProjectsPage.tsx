import React, { useMemo, useState } from 'react';
import { FolderHeart as FolderHeartIcon, Handshake as HandshakeIcon, Sparkles as SparklesIcon, UsersRound as UsersRoundIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectDiscoveryCard } from '../components/impact/ProjectDiscoveryCard';
import { ProjectFilterPanel, type ProjectFilters } from '../components/impact/ProjectFilterPanel';
import { Reveal } from '../components/ui/Reveal';
import { PROJECT_CATALOG } from '../lib/impactData';

const initialFilters: ProjectFilters = { query: '', year: 'All years', avenue: 'All avenues', category: 'All categories', status: 'All status', collaboration: false, sort: 'Latest' };

export function ProjectsPage() {
  const [filters, setFilters] = useState<ProjectFilters>(initialFilters);
  const projects = useMemo(() => {
    const query = filters.query.toLowerCase().trim();
    const filtered = PROJECT_CATALOG.filter((project) => (!query || `${project.title} ${project.description} ${project.avenue} ${project.category}`.toLowerCase().includes(query)) && (filters.year === 'All years' || project.year === filters.year) && (filters.avenue === 'All avenues' || project.avenue === filters.avenue) && (filters.category === 'All categories' || project.category === filters.category) && (filters.status === 'All status' || project.status === filters.status) && (!filters.collaboration || Boolean(project.collaboration)));
    return [...filtered].sort((a, b) => {
      if (filters.sort === 'Most Popular' || filters.sort === 'Most Viewed') return b.likes - a.likes;
      if (filters.sort === 'Oldest') return a.year.localeCompare(b.year);
      return b.year.localeCompare(a.year);
    });
  }, [filters]);

  return (
    <main className="min-h-screen overflow-hidden bg-cream pb-24 pt-24 text-ink dark:bg-ink dark:text-white">
      <section className="relative isolate overflow-hidden px-6 pb-28 pt-20 md:pb-36 md:pt-28">
        <div className="absolute inset-0 -z-20 bg-ink" />
        <div aria-hidden className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-crimson-500/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 left-1/4 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
        <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute right-[8%] top-16 hidden h-48 w-48 rounded-full border border-dashed border-gold/35 md:block" />
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold"><SparklesIcon className="h-3.5 w-3.5" /> Our impact archive</div>
            <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-white md:text-7xl">Every project is a<br /><span className="text-gold">shared signature.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">Discover the initiatives, people and moments that turn intention into visible change.</p>
          </Reveal>
          <Reveal delay={0.18} className="mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[{ label: 'Total projects', value: '128', icon: FolderHeartIcon }, { label: 'Ongoing', value: '14', icon: SparklesIcon }, { label: 'Collaborations', value: '36', icon: HandshakeIcon }, { label: 'Volunteer hours', value: '15.4k', icon: UsersRoundIcon }].map(({ label, value, icon: Icon }) => <div key={label} className="bg-ink/50 p-5 backdrop-blur-sm"><Icon className="h-4 w-4 text-gold" /><p className="mt-5 font-display text-3xl font-bold text-white">{value}</p><p className="mt-1 text-xs font-medium text-white/50">{label}</p></div>)}
          </Reveal>
        </div>
      </section>
      <ProjectFilterPanel filters={filters} onChange={setFilters} resultCount={projects.length} />
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <Reveal className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-grotesk text-sm font-bold uppercase tracking-[0.18em] text-crimson-500 dark:text-gold">Selected stories</p><h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">Explore the work.</h2></div><p className="max-w-sm text-sm leading-6 text-ink/55 dark:text-white/55">Open a project to see the people, milestones and details behind the impact.</p></Reveal>
        {projects.length > 0 ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <Reveal key={project.id} delay={index * 0.06}><ProjectDiscoveryCard project={project} /></Reveal>)}</div> : <div className="rounded-5xl border border-dashed border-crimson-500/25 bg-white/60 px-8 py-20 text-center dark:bg-white/5"><p className="font-display text-2xl font-bold">No project stories match those filters.</p><button type="button" onClick={() => setFilters(initialFilters)} className="mt-5 text-sm font-bold text-crimson-500 dark:text-gold">Clear filters</button></div>}
      </section>
    </main>);

}