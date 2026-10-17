import React, { useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Mail
} from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AVENUE_DETAILS, AvenueDetail } from '../lib/impactData';
import { PROJECT_CATALOG } from '../lib/impactData';

export function AvenueDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Normalize slug to match AVENUE_DETAILS (support international-service as alias for international-relations)
  const normalizedSlug = useMemo(() => {
    if (!slug) return 'club-service';
    if (slug === 'international-service') return 'international-relations';
    return slug;
  }, [slug]);

  const avenueIndex = AVENUE_DETAILS.findIndex((item) => item.slug === normalizedSlug);
  const avenue: AvenueDetail | undefined = AVENUE_DETAILS[avenueIndex];

  // If avenue not found, redirect to first avenue
  if (!avenue) {
    return <Navigate to="/avenues/club-service" replace />;
  }

  // Scroll tracking for progressive blur and darkening (matching home page VideoHero)
  const { scrollY } = useScroll();
  const blurAmount = useTransform(scrollY, [0, 550], [0, 22]);
  const brightnessAmount = useTransform(scrollY, [0, 550], [92, 42]);
  const imageFilter = useTransform(
    [blurAmount, brightnessAmount],
    (values: (string | number)[]) =>
      `blur(${values[0]}px) brightness(${values[1]}%) contrast(105%)`
  );
  const overlayOpacity = useTransform(scrollY, [0, 550], [0.2, 0.82]);

  // Next and previous avenues for directory switcher
  const prevAvenue =
    AVENUE_DETAILS[(avenueIndex - 1 + AVENUE_DETAILS.length) % AVENUE_DETAILS.length];
  const nextAvenue = AVENUE_DETAILS[(avenueIndex + 1) % AVENUE_DETAILS.length];

  // Matching projects from project catalog
  const matchingProjects = PROJECT_CATALOG.filter(
    (p) =>
      p.avenue.toLowerCase().includes(avenue.title.toLowerCase()) ||
      avenue.title.toLowerCase().includes(p.avenue.toLowerCase())
  );

  const [firstWord, ...restWords] = avenue.title.split(' ');
  const secondLine = restWords.join(' ');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [normalizedSlug]);

  return (
    <div className="relative w-full bg-black text-white selection:bg-[#C5A047] selection:text-black">
      {/* ── FIXED FULL-SCREEN HERO BACKGROUND WITH BLUR & DARKEN ON SCROLL ── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div className="h-full w-full" style={{ filter: imageFilter }}>
          <img
            src={avenue.heroInkImage || '/assets/avenues/international_relations.png'}
            alt={`${avenue.title} Inkbleed Artwork`}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/assets/avenues/international_relations.png';
            }}
          />
        </motion.div>

        {/* Dynamic Dark Overlay (darkens as you scroll) */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* Persistent top gradient for navbar legibility */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black/85 via-black/40 to-transparent"
        />

        {/* Persistent bottom gradient to darken bottom part and make avenue name crystal clear */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-80 sm:h-[420px] bg-gradient-to-t from-black/95 via-black/60 to-transparent"
        />
      </div>

      {/* ── SECTION 1: FULLSCREEN HERO VIEWPORT (Avenue Name on Bottom-Left) ── */}
      <section
        id="avenue-hero-intro"
        aria-label={`${avenue.title} Avenue Introduction`}
        className="relative z-20 flex min-h-screen w-full flex-col justify-end px-6 pb-8 sm:px-12 sm:pb-12 md:pb-16"
      >
        <div className="max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h1 className="font-cormorant text-4xl font-light tracking-[0.09em] text-white sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.08] uppercase select-none">
              {firstWord}
              {secondLine && (
                <>
                  <br />
                  <span style={{ color: 'rgb(197, 160, 71)' }} className="font-normal">
                    {secondLine}
                  </span>
                </>
              )}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: DESCRIPTION ON SCROLL (Appears as Hero Blurs & Darkens) ── */}
      <section
        id="avenue-description"
        aria-label={`About ${avenue.title}`}
        className="relative z-20 flex min-h-screen w-full items-center px-6 py-28 sm:px-12 lg:py-36"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading & Tagline */}
            <div className="relative lg:col-span-7">
              <h2 className="relative z-10 font-cormorant text-3xl font-light uppercase leading-[1.1] tracking-[0.09em] text-white sm:text-4xl md:text-5xl lg:text-[4.25rem]">
                About{' '}
                <span style={{ color: 'rgb(197, 160, 71)' }} className="font-normal">
                  {avenue.title}
                </span>
              </h2>

              <p className="relative z-10 mt-3 font-cormorant text-sm uppercase tracking-[0.24em] text-white/60 sm:text-base">
                Rotaract Club of UCSC · Avenue of Service
              </p>

              {/* Catchphrase / Tagline Lines */}
              <div className="relative z-10 mt-10 space-y-2 font-cormorant text-2xl font-light tracking-wide text-white/90 sm:text-3xl">
                <p>“{avenue.tagline}”</p>
                <p className="text-sm font-body font-light text-white/60 normal-case tracking-normal">
                  Service with purpose, fellowship with heart.
                </p>
              </div>

              {/* Quick Metrics Bar on Darkened BG */}
              <div className="relative z-10 mt-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
                <div>
                  <p className="font-cormorant text-3xl font-light text-[#C5A047] sm:text-4xl">
                    {avenue.completedProjects}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/60">
                    Term Initiatives
                  </p>
                </div>
                <div>
                  <p className="font-cormorant text-3xl font-light text-white sm:text-4xl">
                    {avenue.directors}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/60">
                    Active Directors
                  </p>
                </div>
                <div>
                  <p className="font-cormorant text-3xl font-light text-[#C5A047] sm:text-4xl">
                    {avenue.volunteers || 30}+
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/60">
                    Volunteers
                  </p>
                </div>
                <div>
                  <p className="font-cormorant text-3xl font-light text-white sm:text-4xl">
                    {avenue.hours || 110}+
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/60">
                    Service Hours
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Description Paragraphs & CTA Buttons */}
            <div className="flex flex-col items-start space-y-6 lg:col-span-5 lg:pt-16">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A047]">
                Mandate & Scope
              </span>

              <p className="font-body text-base font-light leading-relaxed text-white/85 sm:text-lg">
                {avenue.longDescription || avenue.description}
              </p>

              <p className="font-body text-sm font-light leading-relaxed text-white/65">
                Rooted in fellowship and execution excellence, this avenue empowers members to discover their capabilities, serve marginalized communities, and leave a lasting legacy.
              </p>

              {/* Action Buttons matching home page style */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#avenue-pillars"
                  className="group inline-flex items-center gap-3 border border-white bg-white px-7 py-3.5 font-cormorant text-sm uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-transparent hover:text-white"
                >
                  <span>Explore Initiatives</span>
                  <span className="text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                    ♦
                  </span>
                </a>
                <a
                  href="#avenue-directors"
                  className="inline-flex items-center gap-3 border border-white/30 bg-transparent px-6 py-3.5 font-cormorant text-sm uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[#C5A047] hover:text-[#C5A047]"
                >
                  <span>Meet Directors</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CREAM TEXTURED DETAIL SECTION (Home Page Design Language) ── */}
      <div className="grainy-cream-bg relative z-20 w-full text-[#0A0606]">
        {/* Core Pillars */}
        <section id="avenue-pillars" className="relative border-b border-black/10 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl">
              <p className="font-cormorant text-xs uppercase tracking-[0.25em] text-[#C5A047]">
                Operational Pillars
              </p>
              <h2 className="mt-3 font-cormorant text-3xl font-light uppercase tracking-[0.06em] text-[#0A0606] sm:text-5xl md:text-6xl">
                How We Make Impact Happen
              </h2>
              <p className="mt-5 font-body text-sm font-light leading-relaxed text-[#0A0606]/70 sm:text-base">
                Every project under {avenue.title} is guided by three core principles to ensure our actions are sustainable, ethical, and transformative.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {avenue.pillars && avenue.pillars.length > 0 ? (
                avenue.pillars.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className="group relative rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A047]/60 hover:bg-white hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-cormorant text-4xl font-light text-[#C5A047]">
                        0{i + 1}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-[#C5A047]" />
                    </div>
                    <h3 className="mt-6 font-cormorant text-2xl font-normal uppercase tracking-wide text-[#0A0606]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 font-body text-xs font-light leading-relaxed text-[#0A0606]/70 sm:text-sm">
                      {pillar.desc}
                    </p>
                  </div>
                ))
              ) : null}
            </div>
          </div>
        </section>

        {/* Directors & Leadership */}
        <section id="avenue-directors" className="relative border-b border-black/10 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-cormorant text-xs uppercase tracking-[0.25em] text-[#C5A047]">
                  Avenue Leadership
                </p>
                <h2 className="mt-3 font-cormorant text-3xl font-light uppercase tracking-[0.06em] text-[#0A0606] sm:text-5xl md:text-6xl">
                  Directors of {avenue.title}
                </h2>
              </div>
              <p className="max-w-md font-body text-xs font-light leading-relaxed text-[#0A0606]/65 sm:text-sm">
                Passionate student leaders coordinating teams, schedules, and initiatives for the 2025/26 tenure.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {avenue.directorList && avenue.directorList.length > 0 ? (
                avenue.directorList.map((director) => (
                  <div
                    key={director.name}
                    className="group overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-stone-200">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-[#C5A047]">
                          {director.role}
                        </p>
                        <h4 className="font-cormorant text-2xl font-light uppercase text-white">
                          {director.name}
                        </h4>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-body text-xs font-light leading-relaxed text-[#0A0606]/70">
                        {director.bio}
                      </p>
                      <a
                        href={`mailto:hello@rotaractucsc.org?subject=Inquiry for ${encodeURIComponent(director.name)} - ${encodeURIComponent(avenue.title)}`}
                        className="mt-5 inline-flex items-center gap-2 font-cormorant text-xs uppercase tracking-[0.18em] text-[#C5A047] transition-colors hover:text-[#0A0606]"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        <span>Contact Director</span>
                      </a>
                    </div>
                  </div>
                ))
              ) : null}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="relative border-b border-black/10 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-cormorant text-xs uppercase tracking-[0.25em] text-[#C5A047]">
                  Actions in Motion
                </p>
                <h2 className="mt-3 font-cormorant text-3xl font-light uppercase tracking-[0.06em] text-[#0A0606] sm:text-5xl md:text-6xl">
                  Signature Initiatives
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-cormorant text-sm uppercase tracking-[0.2em] text-[#C5A047] transition-colors hover:text-[#0A0606]"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {matchingProjects.length > 0 ? (
                matchingProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                        {project.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-black/50">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="mt-2 font-cormorant text-2xl font-normal uppercase text-[#0A0606]">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 font-body text-xs font-light text-[#0A0606]/70">
                        {project.description}
                      </p>
                      <Link
                        to={`/projects/${project.id}`}
                        className="mt-5 inline-flex items-center gap-1.5 font-cormorant text-xs uppercase tracking-[0.18em] text-[#C5A047] transition-colors hover:text-[#0A0606]"
                      >
                        <span>Read Story</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full rounded-3xl border border-black/10 bg-white/60 p-12 text-center">
                  <Compass className="mx-auto h-8 w-8 text-[#C5A047]" />
                  <h3 className="mt-4 font-cormorant text-2xl uppercase text-[#0A0606]">
                    {avenue.title} Initiatives In Motion
                  </h3>
                  <p className="mx-auto mt-2 max-w-md font-body text-xs text-black/60">
                    New term initiatives for {avenue.title} are actively underway. Explore our full archive for cross-avenue collaborations.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Complete 8-Avenue Switcher */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col items-center justify-between gap-6 border-b border-black/10 pb-12 sm:flex-row">
              <div>
                <p className="font-cormorant text-xs uppercase tracking-[0.25em] text-[#C5A047]">
                  Rotaract UCSC Directory
                </p>
                <h2 className="mt-2 font-cormorant text-3xl font-light uppercase tracking-[0.06em] text-[#0A0606] sm:text-4xl">
                  Explore All 8 Avenues
                </h2>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-4">
                <Link
                  to={`/avenues/${prevAvenue.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-5 py-2.5 font-cormorant text-xs uppercase tracking-[0.18em] text-[#0A0606] transition-all hover:border-[#C5A047] hover:bg-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>Prev: {prevAvenue.title}</span>
                </Link>
                <Link
                  to={`/avenues/${nextAvenue.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0A0606] px-5 py-2.5 font-cormorant text-xs uppercase tracking-[0.18em] text-white transition-all hover:bg-[#C5A047] hover:text-black"
                >
                  <span>Next: {nextAvenue.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Grid of All 8 Avenues */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AVENUE_DETAILS.map((item) => {
                const ItemIcon = item.icon;
                const isCurrent = item.slug === avenue.slug;
                return (
                  <Link
                    key={item.slug}
                    to={`/avenues/${item.slug}`}
                    className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 ${isCurrent
                      ? 'border-[#C5A047] bg-white shadow-md ring-2 ring-[#C5A047]/30'
                      : 'border-black/10 bg-white/50 hover:-translate-y-1 hover:border-[#C5A047]/50 hover:bg-white hover:shadow-lg'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#C5A047]">
                        {item.number}
                      </span>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${isCurrent
                          ? 'bg-[#C5A047] text-black'
                          : 'bg-black/5 text-[#0A0606] group-hover:bg-[#C5A047] group-hover:text-black'
                          }`}
                      >
                        <ItemIcon className="h-4 w-4" />
                      </span>
                    </div>
                    <h4 className="mt-4 font-cormorant text-xl font-normal uppercase text-[#0A0606]">
                      {item.title}
                    </h4>
                    <p className="mt-1 line-clamp-1 font-body text-xs font-light text-[#0A0606]/60">
                      {item.tagline}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AvenueDetailPage;
