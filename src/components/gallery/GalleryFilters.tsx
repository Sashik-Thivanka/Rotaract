import React from 'react';
import { Search as SearchIcon, SlidersHorizontal as SlidersHorizontalIcon, X as XIcon } from 'lucide-react';

export interface GalleryFilterValues {
  query: string;
  event: string;
  avenue: string;
  year: string;
  album: string;
  project: string;
  tag: string;
  sort: string;
}

interface GalleryFilterOptions {
  events: string[];
  avenues: string[];
  years: string[];
  albums: string[];
  projects: string[];
  tags: string[];
}

interface GalleryFiltersProps {
  filters: GalleryFilterValues;
  options: GalleryFilterOptions;
  onChange: (next: GalleryFilterValues) => void;
  onClear: () => void;
}

export function GalleryFilters({ filters, options, onChange, onClear }: GalleryFiltersProps) {
  const update = (key: keyof GalleryFilterValues, value: string) => onChange({ ...filters, [key]: value });
  const hasFilters = Object.entries(filters).some(([key, value]) => key !== 'sort' && value !== '' && value !== 'all');

  return (
    <section aria-label="Search and filter photos" className="relative z-10 mx-auto -mt-12 max-w-6xl px-6">
      <div className="rounded-4xl border border-white/50 bg-white/90 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-ink/90">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-cream px-4 py-3 dark:bg-white/5">
            <SearchIcon className="h-5 w-5 shrink-0 text-navy-500 dark:text-gold" />
            <span className="sr-only">Search photos</span>
            <input value={filters.query} onChange={(event) => update('query', event.target.value)} placeholder="Search photos, events or projects" className="min-w-0 w-full bg-transparent text-sm font-medium outline-none placeholder:text-ink/40 dark:text-white dark:placeholder:text-white/40" />
          </label>
          <div className="flex flex-wrap gap-2">
            <FilterSelect label="Event" value={filters.event} options={options.events} onChange={(value) => update('event', value)} />
            <FilterSelect label="Avenue" value={filters.avenue} options={options.avenues} onChange={(value) => update('avenue', value)} />
            <FilterSelect label="Year" value={filters.year} options={options.years} onChange={(value) => update('year', value)} />
            <FilterSelect label="Album" value={filters.album} options={options.albums} onChange={(value) => update('album', value)} />
            <FilterSelect label="Project" value={filters.project} options={options.projects} onChange={(value) => update('project', value)} />
            <FilterSelect label="Sort" value={filters.sort} options={['Latest', 'Oldest', 'Most Viewed', 'Recently Added']} onChange={(value) => update('sort', value)} />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3 border-t border-ink/5 pt-4 dark:border-white/10 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-1 flex-wrap gap-2" aria-label="Quick filters">
            {options.tags.map((tag) => {
              const selected = filters.tag === tag;
              return <button key={tag} type="button" onClick={() => update('tag', selected ? 'all' : tag)} className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${selected ? 'bg-navy-500 text-white dark:bg-gold dark:text-ink' : 'bg-navy-500/10 text-navy-500 hover:bg-navy-500 hover:text-white dark:bg-gold/15 dark:text-gold dark:hover:bg-gold dark:hover:text-ink'}`}>{tag}</button>;
            })}
          </div>
          {hasFilters && <button type="button" onClick={onClear} className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-ink/55 transition hover:bg-ink/5 hover:text-navy-500 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-gold"><XIcon className="h-3.5 w-3.5" /> Clear filters</button>}
          {!hasFilters && <span className="inline-flex shrink-0 items-center gap-1.5 px-3 py-2 text-xs font-bold text-ink/45 dark:text-white/45"><SlidersHorizontalIcon className="h-3.5 w-3.5" /> Curated view</span>}
        </div>
      </div>
    </section>);

}

interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return <label className="sr-only">{label}<select value={value} onChange={(event) => onChange(event.target.value)} className="rounded-xl border border-ink/10 bg-cream px-3 py-2 text-xs font-bold text-ink outline-none transition focus:border-navy-500 dark:border-white/10 dark:bg-white/5 dark:text-white"><option value="all">{label}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}