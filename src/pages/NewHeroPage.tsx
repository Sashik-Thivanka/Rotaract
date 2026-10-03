import React from 'react';
import { VideoHero } from '../components/sections/VideoHero';
import { Impact } from '../components/sections/Impact';
import { Projects } from '../components/sections/Projects';
import { Events } from '../components/sections/Events';
import { Avenues } from '../components/sections/Avenues';
import { Sponsors } from '../components/sections/Sponsors';
import { Blog } from '../components/sections/Blog';
import { Testimonials } from '../components/sections/Testimonials';
import { CurveDivider } from '../components/ui/Decor';

export function NewHeroPage() {
  return (
    <main>
      <VideoHero />
      <Avenues />
      <Impact />
      <Projects />
      <CurveDivider flip className="text-white dark:text-ink" />
      <Events />
      <Sponsors />
      <Blog />
      <Testimonials />
    </main>
  );
}
