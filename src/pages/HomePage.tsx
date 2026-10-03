import React from 'react';
import { Avenues } from '../components/sections/Avenues';
import { Blog } from '../components/sections/Blog';
import { Events } from '../components/sections/Events';
import { Hero } from '../components/sections/Hero';
import { Impact } from '../components/sections/Impact';
import { Projects } from '../components/sections/Projects';
import { Sponsors } from '../components/sections/Sponsors';
import { Testimonials } from '../components/sections/Testimonials';
import { CurveDivider } from '../components/ui/Decor';

export function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Impact />
        <Projects />
        <CurveDivider flip className="text-white dark:text-ink" />
        <Events />
        <Avenues />
        <Sponsors />
        <Blog />
        <Testimonials />
      </main>
    </>);

}