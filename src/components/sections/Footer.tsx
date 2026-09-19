




















import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUp } from
'lucide-react';
import { NAV_LINKS } from '../../lib/data';

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer id="contact" className="relative w-full bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-crimson-500 font-display text-lg font-extrabold text-white">
                R
              </span>
              <span className="font-display text-base font-bold text-white">
                Rotaract UCSC
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              A youth-led movement dedicated to service, leadership, and fellowship — creating
              lasting change across our community and beyond.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) =>
              <a
                key={i}
                href="#contact"
                aria-label="Social media"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-crimson-500 hover:text-white">
                
                  <Icon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) =>
              <li key={link.href}>
                  <Link to={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                UCSC, 35 Reid Ave, Colombo 00700
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                hello@rotaractucsc.org
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                +94 11 234 5678
              </li>
            </ul>
            <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <iframe
                title="Club location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.858%2C6.900%2C79.868%2C6.908&layer=mapnik"
                className="h-28 w-full grayscale"
                loading="lazy" />
              
            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} Rotaract Club of UCSC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#contact" className="transition-colors hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop &&
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-crimson-500 text-white shadow-soft transition-transform hover:-translate-y-1">
          
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        }
      </AnimatePresence>
    </footer>);

}