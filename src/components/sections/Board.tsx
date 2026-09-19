




import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

interface Member {
  name: string;
  role: string;
  image: string;
}

const BOARD: Member[] = [
{ name: 'Amara Fernando', role: 'President', image: 'https://i.pravatar.cc/240?img=47' },
{ name: 'Dinuka Perera', role: 'Vice President', image: 'https://i.pravatar.cc/240?img=12' },
{ name: 'Sanduni Silva', role: 'Secretary', image: 'https://i.pravatar.cc/240?img=32' },
{ name: 'Rehan Jayasuriya', role: 'Treasurer', image: 'https://i.pravatar.cc/240?img=68' }];


export function Board() {
  return (
    <section id="board" className="relative w-full bg-white pb-20 pt-4 dark:bg-ink md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="font-grotesk text-sm font-semibold uppercase tracking-[0.25em] text-crimson-500 dark:text-gold">
            The People
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white md:text-5xl">
            Meet the board
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/60 dark:text-white/60">
            The passionate leaders steering our vision for the 2025/26 term.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {BOARD.map((member, i) =>
          <Reveal key={member.name} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-4xl bg-cream shadow-neu dark:bg-white/5 dark:shadow-none dark:ring-1 dark:ring-white/10">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                  <div className="absolute inset-0 flex items-end justify-center gap-2 bg-gradient-to-t from-crimson-800/80 to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                    href="#board"
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white hover:text-crimson-600">
                    
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                    href="#board"
                    aria-label={`Email ${member.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white hover:text-crimson-600">
                    
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display font-bold text-ink dark:text-white">{member.name}</h3>
                  <p className="text-sm text-crimson-500 dark:text-gold">{member.role}</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}