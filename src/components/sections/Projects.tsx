import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../lib/data';

/* ── Noise SVG data URI (same grain as RACUCSC canvas) ─────────────────── */
const NOISE_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E`;

const projectRoutes: Record<string, string> = {
  p1: 'book-of-hope',
  p2: 'life-drops',
  p3: 'books-beyond',
};

const statusColor: Record<string, { dot: string; label: string }> = {
  Completed: { dot: 'bg-white/60',          label: 'text-white/60' },
  Ongoing:   { dot: 'bg-[rgb(197,160,71)]', label: 'text-[rgb(197,160,71)]' },
  Upcoming:  { dot: 'bg-white',             label: 'text-white' },
};

/* ── Single project card with individual scroll-triggered reveal ─────────── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });
  const route = `/projects/${projectRoutes[project.id]}`;
  const { dot, label } = statusColor[project.status] ?? statusColor.Upcoming;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 52 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden bg-white/0 will-change-transform"
    >
      {/* Image */}
      <Link to={route} className="block overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-6 pb-2 px-1">
        {/* Status + category line */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${dot} flex-shrink-0`} />
          <span className={`font-mono text-[11px] uppercase tracking-[0.24em] ${label}`}>
            {project.status}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/30">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-cormorant text-2xl font-light uppercase leading-[1.08] tracking-[0.06em] text-white sm:text-3xl">
          {project.name}
        </h3>

        {/* Description */}
        <p className="mt-3 font-body text-sm font-light leading-relaxed text-white/60">
          {project.description}
        </p>

        {/* Date + thin gold rule */}
        <div className="mt-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-xs tracking-widest text-white/35">{project.date}</span>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Section ─────────────────────────────────────────────────────────────── */
export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#ECECE8' }}
    >
      {/* ── Grainy paper texture (same as RACUCSC canvas) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-repeat opacity-[0.35] mix-blend-multiply"
        style={{ backgroundImage: `url("${NOISE_SVG}")`, backgroundSize: '140px 140px' }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-25 mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="projects-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer><feFuncA type="linear" slope="0.65" /></feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#projects-noise)" />
      </svg>

      {/* ── Dark overlay so text is readable on grainy cream ── */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/78" />

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-12 md:py-36">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[rgb(197,160,71)]">
              ◆ &nbsp;Featured Work
            </span>
            <h2 className="mt-4 font-cormorant text-4xl font-light uppercase leading-[1.06] tracking-[0.07em] text-white sm:text-5xl md:text-6xl">
              Projects that<br />
              <span style={{ color: 'rgb(197,160,71)' }}>Made a Difference</span>
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm font-light leading-relaxed text-white/55 lg:text-right">
            Three flagship initiatives that represent our commitment to lasting community impact.
          </p>
        </div>

        {/* Thin gold rule */}
        <div className="mb-16 h-px w-full bg-white/10" />

        {/* Project grid — 3-column desktop, stacks on mobile */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}