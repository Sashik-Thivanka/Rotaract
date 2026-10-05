




















import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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

const FOOTER_NOISE =
  "data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.78' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.42'/%3E%3C/svg%3E";

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const landscapeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: landscapeRef,
    offset: ['start end', 'end start']
  });

  const bottomLayerY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-22, -48]);
  const layerThreeY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [78, -68]);
  const layerTwoY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [112, -96]);
  const topLayerY = 0;
  const bottomLayerX = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-8, 8]);
  const layerThreeX = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [16, -16]);
  const layerTwoX = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-24, 24]);
  const topLayerX = 0;

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)');
    const updateMobileState = () => setIsMobile(mediaQuery.matches);
    updateMobileState();
    mediaQuery.addEventListener('change', updateMobileState);
    return () => mediaQuery.removeEventListener('change', updateMobileState);
  }, []);

  const layers = [
    { name: 'layer5', x: bottomLayerX, y: bottomLayerY, className: 'z-10' },
    { name: 'layer3', x: layerThreeX, y: layerThreeY, className: 'z-30' },
    { name: 'layer2', x: layerTwoX, y: layerTwoY, className: 'z-40' },
    { name: 'layer1', x: topLayerX, y: topLayerY, className: 'z-50' }
  ];

  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-[#0A0606] text-white/70">
      <div ref={landscapeRef} className="relative isolate h-[15rem] overflow-hidden bg-[#ebe5d8] sm:h-[24rem] lg:h-[30rem]">
        <div className="absolute inset-x-0 bottom-0 z-[5] h-24 bg-[#0A0606] sm:h-32 lg:h-40" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-35 mix-blend-multiply"
          style={{ backgroundImage: `url("${FOOTER_NOISE}")`, backgroundSize: '180px 180px' }}
        />
        {layers.map(({ name, x, y, className }) =>
          <motion.img
            key={name}
            src={`/assets/footer/${name}.png`}
            alt=""
            aria-hidden="true"
            style={{ x, y }}
            className={`absolute inset-0 h-full w-full max-w-none scale-100 object-contain object-bottom will-change-transform sm:scale-[1.35] sm:object-cover ${className}`}
          />
        )}
      </div>

      <div className="relative z-[80] mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c5a047] font-display text-lg font-extrabold text-[#0A0606]">
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-navy-500 hover:text-white">
                
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
                    <Link to={link.href} className="transition-colors hover:text-[#c5a047]">
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
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c5a047]" />
                UCSC, 35 Reid Ave, Colombo 00700
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#c5a047]" />
                hello@rotaractucsc.org
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#c5a047]" />
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
            <a href="#contact" className="transition-colors hover:text-[#c5a047]">
              Privacy Policy
            </a>
            <a href="#contact" className="transition-colors hover:text-[#c5a047]">
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
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#c5a047] text-[#003332] shadow-soft transition-transform hover:-translate-y-1">
          
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        }
      </AnimatePresence>
    </footer>);

}