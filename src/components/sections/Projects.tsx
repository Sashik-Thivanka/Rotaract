





import React from 'react';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../lib/data';
import { Reveal } from '../ui/Reveal';

const projectRoutes: Record<string, string> = {
  p1: 'book-of-hope',
  p2: 'life-drops',
  p3: 'books-beyond'
};

const statusStyles: Record<string, string> = {
  Completed: 'bg-emerald-500/90 text-white',
  Ongoing: 'bg-gold text-ink',
  Upcoming: 'bg-crimson-500 text-white'
};

export function Projects() {
  return (
    <section id="projects" className="relative w-full bg-cream py-20 dark:bg-crimson-900/20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <p className="font-grotesk text-sm font-semibold uppercase tracking-[0.25em] text-crimson-500 dark:text-gold">
              Featured Work
            </p>
            <h2 className="mt-3 max-w-md font-display text-3xl font-bold text-ink dark:text-white md:text-5xl">
              Projects that made a difference
            </h2>
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-1.5 text-sm font-semibold text-crimson-500 dark:text-gold">
            
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) =>
          <Reveal key={project.id} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-neu transition-all duration-500 hover:-translate-y-2 hover:shadow-soft dark:bg-white/5 dark:shadow-none dark:ring-1 dark:ring-white/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                  loading="lazy"
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                  <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-lg ${statusStyles[project.status]}`}>
                  
                    {project.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs font-medium text-ink/50 dark:text-white/50">
                    <span className="flex items-center gap-1">
                      <Tag className="h-3.5 w-3.5" /> {project.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {project.date}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60 dark:text-white/60">
                    {project.description}
                  </p>
                  <Link to={`/projects/${projectRoutes[project.id]}`} className="group/btn mt-5 flex items-center gap-1.5 self-start text-sm font-semibold text-crimson-500 dark:text-gold">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}