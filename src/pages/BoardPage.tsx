import { ArrowDown as ArrowDownIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, Linkedin as LinkedinIcon, Mail as MailIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { DIRECTORS, EXECUTIVE_COMMITTEE, LEADERSHIP_VALUES, type LeadershipMember } from '../lib/leadershipData';

const LEADERSHIP_HERO_IMAGE = '/assets/avenues/club_services.png';

function Socials({ member }: { member: LeadershipMember }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold hover:bg-gold hover:text-ink dark:border-white/15 dark:text-white/65">
        <LinkedinIcon className="h-3.5 w-3.5" />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} on Facebook`} className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold hover:bg-gold hover:text-ink dark:border-white/15 dark:text-white/65">
        <FacebookIcon className="h-3.5 w-3.5" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} on Instagram`} className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold hover:bg-gold hover:text-ink dark:border-white/15 dark:text-white/65">
        <InstagramIcon className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function MemberPortrait({ member, priority = false }: { member: LeadershipMember; priority?: boolean }) {
  return (
    <article className="group text-center">
      <div className="relative mx-auto flex aspect-[4/5] max-w-[200px] items-end justify-center overflow-hidden">
        <div aria-hidden="true" className="absolute bottom-[10%] h-[72%] w-[72%] rounded-full bg-[#C5A047] transition-transform duration-500 group-hover:scale-105" />
        <img
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          src={member.image}
          alt={member.name}
          className="relative z-10 h-full w-full object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mx-auto max-w-[280px] border-t border-ink/10 pt-5 dark:border-white/15">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#C5A047]">
          {member.avenue ? `${member.role} · ${member.avenue}` : member.role}
        </p>
        <h3 className="mt-2 font-cormorant text-2xl font-light uppercase tracking-[0.04em] text-ink dark:text-white">
          {member.name}
        </h3>
        <p className="mt-3 font-cormorant text-lg italic leading-7 text-ink/70 dark:text-white/70">
          “{member.quote}”
        </p>
        <p className="mt-3 text-sm leading-6 text-ink/55 dark:text-white/55">{member.bio}</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <Socials member={member} />
          <a
            href={`mailto:rotaractclubofucsc@gmail.com?subject=Message%20for%20${encodeURIComponent(member.name)}`}
            aria-label={`Email ${member.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold hover:bg-gold hover:text-ink dark:border-white/15 dark:text-white/65"
          >
            <MailIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function BoardPage() {
  return (
    <main className="overflow-hidden bg-cream text-ink dark:bg-ink dark:text-white">
      <section className="relative isolate min-h-[720px] overflow-hidden px-6 pb-24 pt-28 md:min-h-[800px] md:pb-32 md:pt-44">
        <img src={LEADERSHIP_HERO_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="mx-auto flex min-h-[560px] max-w-6xl flex-col justify-end">
          <Reveal className="max-w-3xl">
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-md">
              <SparklesIcon className="h-3.5 w-3.5" /> 2025 / 26 Board
            </div>
            <h1 className="mt-6 font-cormorant text-5xl font-light uppercase leading-[.96] tracking-[.06em] text-white md:text-8xl">
              Meet Our<br /><span className="text-gold">Leadership.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
              A group of curious, grounded young leaders shaping the club’s next chapter with care, courage and a lot of collective energy.
            </p>
          </Reveal>
          <a href="#leadership" className="mt-14 flex w-fit items-center gap-3 text-sm font-semibold text-white/80 transition hover:text-gold">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10"><ArrowDownIcon className="h-4 w-4" /></span>
            Meet the people
          </a>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-28 px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-navy-500 dark:text-gold">Executive committee</p>
            <h2 className="mt-4 font-cormorant text-4xl font-light uppercase tracking-[.06em] md:text-6xl">Team build for brave ideas.</h2>
            <p className="mt-5 leading-8 text-ink/60 dark:text-white/60">Twelve distinct perspectives, aligned around one belief: young people can build the kind of change they want to see.</p>
          </Reveal>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {EXECUTIVE_COMMITTEE.map((member, index) => <Reveal key={member.name} delay={index * 0.04}><MemberPortrait member={member} priority={index < 4} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-gold">Directors</p>
            <h2 className="mt-4 font-cormorant text-4xl font-light uppercase tracking-[.06em] md:text-6xl">Purpose needs its specialists.</h2>
            <p className="mt-5 leading-8 text-white/60">Each director stewards an avenue of service, turning shared intentions into work people can feel.</p>
          </Reveal>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DIRECTORS.map((member, index) => <Reveal key={`${member.name}-${member.avenue}`} delay={index * 0.04}><MemberPortrait member={member} priority={index < 3} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-white/5 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-navy-500 dark:text-gold">What guides us</p>
            <h2 className="mt-4 font-cormorant text-4xl font-light uppercase tracking-[.06em] md:text-5xl">Values that stay when the room gets quiet.</h2>
          </Reveal>
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-3">
            {LEADERSHIP_VALUES.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.05} className="border-t border-ink/10 pt-6 dark:border-white/15">
                <Icon className="h-7 w-7 text-[#C5A047]" />
                <h3 className="mt-6 font-cormorant text-2xl font-light uppercase tracking-[.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60 dark:text-white/60">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
