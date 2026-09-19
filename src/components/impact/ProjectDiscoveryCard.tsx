import React from 'react';
import { CalendarDays as CalendarDaysIcon, Heart as HeartIcon, Images as ImagesIcon, Users as UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type ProjectCatalogItem } from '../../lib/impactData';

type ProjectDiscoveryCardProps = {project: ProjectCatalogItem;};

export function ProjectDiscoveryCard({ project }: ProjectDiscoveryCardProps) {
  const statusStyle = project.status === 'Ongoing' ? 'bg-gold text-ink' : 'bg-emerald-500 text-white';

  return (
    <article className="group relative overflow-hidden rounded-4xl bg-white shadow-neu transition duration-500 hover:-translate-y-2 hover:shadow-soft dark:bg-white/5 dark:shadow-none dark:ring-1 dark:ring-white/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img loading="lazy" src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-70" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-lg ${statusStyle}`}>{project.status}</span>
        <div className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">{project.photos} photos</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-crimson-500"><HeartIcon className="h-4 w-4" /></span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wide"><span className="rounded-full bg-crimson-500/10 px-2.5 py-1 text-crimson-500 dark:bg-gold/15 dark:text-gold">{project.avenue}</span>{project.collaboration && <span className="rounded-full bg-ink/5 px-2.5 py-1 text-ink/55 dark:bg-white/10 dark:text-white/55">Collab</span>}</div>
        <h2 className="mt-4 font-display text-2xl font-bold">{project.title}</h2>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/60 dark:text-white/60">{project.description}</p>
        {project.progress && <div className="mt-5"><div className="mb-2 flex justify-between text-xs font-semibold text-ink/50 dark:text-white/50"><span>Project progress</span><span>{project.progress}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-crimson-500/10 dark:bg-white/10"><div className="h-full rounded-full bg-gold" style={{ width: `${project.progress}%` }} /></div></div>}
        <div className="mt-5 flex items-center justify-between border-t border-ink/5 pt-4 text-xs font-medium text-ink/50 dark:border-white/10 dark:text-white/50"><span className="flex items-center gap-1.5"><CalendarDaysIcon className="h-3.5 w-3.5" />{project.date}</span><span className="flex items-center gap-1.5"><UsersIcon className="h-3.5 w-3.5" />{project.volunteers}</span><span className="flex items-center gap-1.5"><ImagesIcon className="h-3.5 w-3.5" />{project.photos}</span></div>
        <Link to={`/projects/${project.id}`} className="mt-5 inline-flex text-sm font-bold text-crimson-500 transition hover:text-crimson-700 dark:text-gold dark:hover:text-white">Read project story <span aria-hidden className="ml-1 transition-transform group-hover:translate-x-1">→</span></Link>
      </div>
    </article>);

}