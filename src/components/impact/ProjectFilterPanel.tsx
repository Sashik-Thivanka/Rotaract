import React from 'react';
import { Search as SearchIcon, SlidersHorizontal as SlidersHorizontalIcon } from 'lucide-react';

export type ProjectFilters = {
  query: string;
  year: string;
  avenue: string;
  category: string;
  status: string;
  collaboration: boolean;
  sort: string;
};

type ProjectFilterPanelProps = {
  filters: ProjectFilters;
  onChange: (filters: ProjectFilters) => void;
  resultCount: number;
};

const selectClass = 'w-full appearance-none rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm font-semibold text-ink outline-none transition focus:border-crimson-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-gold';

export function ProjectFilterPanel({ filters, onChange, resultCount }: ProjectFilterPanelProps) {
  const update = (field: keyof ProjectFilters, value: string | boolean) => onChange({ ...filters, [field]: value });

  return (
    <section aria-label="Project filters" className="relative z-10 mx-auto -mt-10 max-w-6xl px-6">
      <div className="rounded-4xl border border-white/60 bg-white/85 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-ink/85 md:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(4,1fr)_auto]">
          <label className="relative block"><span className="sr-only">Search projects</span><SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-crimson-500 dark:text-gold" /><input value={filters.query} onChange={(event) => update('query', event.target.value)} placeholder="Search stories, causes or teams" className="w-full rounded-2xl border border-ink/10 bg-cream py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-ink/35 focus:border-crimson-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-gold" /></label>
          <label><span className="sr-only">Filter by year</span><select value={filters.year} onChange={(event) => update('year', event.target.value)} className={selectClass}><option value="All years">All years</option><option value="2026">2026</option><option value="2025">2025</option></select></label>
          <label><span className="sr-only">Filter by avenue</span><select value={filters.avenue} onChange={(event) => update('avenue', event.target.value)} className={selectClass}><option value="All avenues">All avenues</option><option value="Club Service">Club Service</option><option value="Community Service">Community Service</option><option value="International Service">International Service</option><option value="Professional Development">Professional Development</option></select></label>
          <label><span className="sr-only">Filter by category</span><select value={filters.category} onChange={(event) => update('category', event.target.value)} className={selectClass}><option value="All categories">All categories</option><option value="Education">Education</option><option value="Health">Health</option><option value="Fellowship">Fellowship</option><option value="Leadership">Leadership</option></select></label>
          <label><span className="sr-only">Filter by status</span><select value={filters.status} onChange={(event) => update('status', event.target.value)} className={selectClass}><option value="All status">All status</option><option value="Ongoing">Ongoing</option><option value="Completed">Completed</option></select></label>
          <button type="button" onClick={() => update('collaboration', !filters.collaboration)} className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition ${filters.collaboration ? 'bg-crimson-500 text-white dark:bg-gold dark:text-ink' : 'bg-ink/5 text-ink hover:bg-crimson-500/10 dark:bg-white/10 dark:text-white'}`}><SlidersHorizontalIcon className="h-4 w-4" />Collabs</button>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-3 border-t border-ink/5 pt-4 dark:border-white/10 sm:flex-row sm:items-center"><p className="text-sm text-ink/55 dark:text-white/55"><strong className="text-ink dark:text-white">{resultCount}</strong> impact stories to explore</p><div className="flex items-center gap-2"><span className="text-xs font-bold uppercase tracking-wide text-ink/45 dark:text-white/45">Sort</span><select value={filters.sort} onChange={(event) => update('sort', event.target.value)} className="bg-transparent text-sm font-bold text-crimson-500 outline-none dark:text-gold"><option value="Latest">Latest</option><option value="Oldest">Oldest</option><option value="Most Popular">Most popular</option><option value="Recently Updated">Recently updated</option><option value="Most Viewed">Most viewed</option></select></div></div>
      </div>
    </section>);

}