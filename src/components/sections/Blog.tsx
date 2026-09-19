















import React from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../lib/data';
import { Reveal } from '../ui/Reveal';

const postRoutes: Record<string, string> = {
  b1: 'leadership-journey',
  b2: 'youth-community',
  b3: 'life-drops'
};

export function Blog() {
  return (
    <section id="blog" className="w-full bg-white py-20 dark:bg-ink md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <p className="font-grotesk text-sm font-semibold uppercase tracking-[0.25em] text-crimson-500 dark:text-gold">
              From the Journal
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white md:text-5xl">
              Latest stories
            </h2>
          </div>
          <Link
            to="/blog"
            className="group flex items-center gap-1.5 text-sm font-semibold text-crimson-500 dark:text-gold">
            
            Read the blog
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) =>
          <Reveal key={post.id} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl bg-cream shadow-neu transition-all duration-500 hover:-translate-y-2 hover:shadow-soft dark:bg-white/5 dark:shadow-none dark:ring-1 dark:ring-white/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-crimson-600 backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-ink/50 dark:text-white/50">
                    <Clock className="h-3.5 w-3.5" /> {post.readingTime}
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-crimson-500 dark:text-white dark:group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60 dark:text-white/60">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-crimson-500/10 pt-4 dark:border-white/10">
                    <span className="flex items-center gap-2 text-sm font-medium text-ink/70 dark:text-white/70">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-crimson-500/10 text-xs font-bold text-crimson-500 dark:bg-white/10 dark:text-gold">
                        {post.author.split(' ').map((n) => n[0]).join('')}
                      </span>
                      {post.author}
                    </span>
                    <Link to={`/blog/${postRoutes[post.id]}`} className="text-sm font-semibold text-crimson-500 dark:text-gold">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}