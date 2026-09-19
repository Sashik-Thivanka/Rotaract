import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Search, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../lib/data';
import { useTheme } from '../lib/theme';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        
        <nav
          aria-label="Main navigation"
          className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled ?
          'glass bg-white/55 shadow-soft ring-1 ring-white/25 dark:bg-ink/55 dark:ring-white/15' :
          'bg-white/10 ring-1 ring-white/15 backdrop-blur-sm'}`
          }>
          
          <Link to="/" className="flex items-center" aria-label="Rotaract Club of UCSC home">
            <img
              src="/Logo-White-1.png"
              alt="Rotaract University of Colombo School of Computing"
              className="h-12 w-auto object-contain brightness-0 dark:brightness-100 sm:h-14" />
            
          </Link>

          <ul className="hidden items-center gap-1 lg:flex" aria-label="Site pages">
            {NAV_LINKS.map((link) => {
              const active = link.href === pathname || link.href === '/avenues' && pathname.startsWith('/avenues') || link.href === '/projects' && pathname.startsWith('/projects') || link.href === '/blog' && pathname.startsWith('/blog');
              const isBlog = link.href === '/blog';
              return (
                <li key={link.label}>
                  <Link to={link.href} className={`block rounded-full px-3.5 py-2 text-base font-medium transition-colors ${isBlog ? 'bg-crimson-500 text-white shadow-soft hover:bg-crimson-600 dark:bg-gold dark:text-ink dark:hover:bg-gold-light' : active ? 'bg-crimson-500/10 text-crimson-500 dark:bg-gold/15 dark:text-gold' : 'text-ink/75 hover:text-crimson-500 dark:text-white/75 dark:hover:text-gold'}`}>
                    {link.label}
                  </Link>
                </li>);

            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-crimson-500/10 hover:text-crimson-500 dark:text-white/70 dark:hover:text-gold">
              
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-crimson-500/10 hover:text-crimson-500 dark:text-white/70 dark:hover:text-gold">
              
              {theme === 'light' ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink dark:text-white lg:hidden">
              
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] lg:hidden">
          
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 240 }}
            className="absolute right-0 top-0 flex h-full w-72 flex-col gap-2 bg-white p-6 dark:bg-ink">
            
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display font-bold text-ink dark:text-white">Menu</span>
                <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-crimson-500/10 text-crimson-500">
                
                  <X className="h-5 w-5" />
                </button>
              </div>
              {NAV_LINKS.map((link, index) =>
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}>
              
                  <Link to={link.href} onClick={() => setMobileOpen(false)} className={`block rounded-2xl px-4 py-3 text-lg font-medium transition ${link.href === '/blog' ? 'bg-crimson-500 text-white shadow-soft dark:bg-gold dark:text-ink' : 'text-ink/80 hover:bg-crimson-500/10 hover:text-crimson-500 dark:text-white/80 dark:hover:text-gold'}`}>
                    {link.label}
                  </Link>
                </motion.div>
            )}
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/50 px-4 pt-28 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}>
          
            <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl rounded-3xl bg-white p-2 shadow-soft dark:bg-ink">
            
              <div className="flex items-center gap-3 px-4">
                <Search className="h-5 w-5 text-crimson-500" />
                <input
                autoFocus
                type="text"
                placeholder="Search projects, events, avenues..."
                className="w-full bg-transparent py-4 text-lg text-ink outline-none placeholder:text-ink/40 dark:text-white dark:placeholder:text-white/40" />
              
                <button
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="text-ink/40 transition-colors hover:text-crimson-500 dark:text-white/40">
                
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}