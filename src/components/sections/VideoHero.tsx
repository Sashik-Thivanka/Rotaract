import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../lib/data';
import { GALLERY_PHOTOS } from '../../lib/galleryData';
import DriftWall from './DriftWall';

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalOnCream, setPortalOnCream] = useState(false);

  // Track page scroll for progressive blur and darkening
  const { scrollY } = useScroll();

  // Scroll transforms: as user scrolls down, video blurs and overlay darkens
  const blurAmount = useTransform(scrollY, [0, 550], [0, 22]);
  const brightnessAmount = useTransform(scrollY, [0, 550], [92, 50]);
  const videoFilter = useTransform(
    [blurAmount, brightnessAmount],
    ([b, br]: [number, number]) =>
      `blur(${b}px) brightness(${br}%) contrast(105%) grayscale(50%)`
  );

  const overlayOpacity = useTransform(scrollY, [0, 550], [0.18, 0.82]);

  // Filter out Blog from navigation
  const heroNavLinks = NAV_LINKS.filter(
    (link) => link.href !== '/blog' && link.label.toLowerCase() !== 'blog'
  );

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay may be restricted until interaction
      });
    }
  }, []);

  return (
    <div id="new-hero-container" className="relative w-full bg-black text-white">
      {/* ── FIXED BACKGROUND VIDEO & PROGRESSIVE OVERLAYS ────────────────── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div className="h-full w-full" style={{ filter: videoFilter }}>
          <video
            ref={videoRef}
            src="/assets/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            className={`h-full w-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-95' : 'opacity-40'
            }`}
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
      </div>

      {/* ── FIXED TOP NAV BAR ─────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-40 flex w-full items-center justify-between px-6 py-4 sm:px-12 sm:py-5 pointer-events-auto">
        {/* Top-Left: Rotaract White Logo (Balanced medium size) */}
        <Link to="/" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <img
            src="/Logo-White-1.png"
            alt="Rotaract Club of UCSC Logo"
            className={`h-12 w-auto object-contain sm:h-14 md:h-16 drop-shadow-sm transition-[filter] duration-300 ${
              portalOnCream ? 'brightness-0' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Top-Right: Editorial Nav Bar (Links hover to gold rgb(197, 160, 71)) */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul
            className={`flex items-center gap-8 font-cormorant text-base tracking-[0.2em] uppercase transition-colors duration-300 ${
              portalOnCream ? 'text-ink/80' : 'text-white/90'
            }`}
          >
            {heroNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="transition-colors duration-200"
                  style={{ transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgb(197, 160, 71)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Minimal Hamburger Icon */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="ml-3 flex flex-col justify-center gap-1.5 p-1 text-white hover:opacity-75"
          >
            <span className={`block h-[1.5px] w-6 transition-colors duration-300 ${portalOnCream ? 'bg-ink' : 'bg-white'}`} />
            <span className={`block h-[1.5px] w-6 transition-colors duration-300 ${portalOnCream ? 'bg-ink' : 'bg-white'}`} />
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${portalOnCream ? 'text-ink' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${portalOnCream ? 'text-ink' : 'text-white'}`} />
          )}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center bg-black/95 px-8 py-12 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
            className="absolute right-6 top-6 text-white"
          >
            <X className="h-8 w-8" />
          </button>
          <ul className="flex flex-col gap-6 font-cormorant text-2xl uppercase tracking-[0.2em]">
            {heroNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition-colors duration-200"
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgb(197, 160, 71)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── SECTION 1: HERO VIEWPORT ──────────────────────────────────────── */}
      <section
        id="hero-intro"
        aria-label="Rotaract Club of UCSC Introduction"
        className="relative z-20 flex min-h-screen w-full flex-col justify-end px-6 pb-6 sm:px-12 sm:pb-8 md:pb-10"
      >
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-cormorant text-3xl font-light tracking-[0.09em] text-white sm:text-4xl md:text-5xl lg:text-[4.25rem] leading-[1.1] uppercase select-none"
          >
            Rotaract Club of<br />
            <span style={{ color: 'rgb(197, 160, 71)' }} className="font-normal">
              UCSC
            </span>
          </motion.h1>
        </div>
      </section>


      {/* ── SECTION 2: WHAT WE DO (Scroll-Down Placeholder Section) ───────── */}
      <section
        id="what-we-do-placeholder"
        aria-label="What We Do — Rotaract Club of UCSC"
        className="relative z-20 flex min-h-screen w-full items-center px-6 py-28 sm:px-12 lg:py-36"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Typography & Subtitles (red watermark removed) */}
            <div className="relative lg:col-span-7">
              {/* Foreground Title */}
              <h2 className="relative z-10 font-cormorant text-3xl font-light uppercase leading-[1.1] tracking-[0.09em] text-white sm:text-4xl md:text-5xl lg:text-[4.25rem]">
                What We <span style={{ color: 'rgb(197, 160, 71)' }} className="font-normal">Do</span>
              </h2>

              <p className="relative z-10 mt-3 font-cormorant text-sm uppercase tracking-[0.24em] text-white/60 sm:text-base">
                About Rotaract Club of UCSC
              </p>

              {/* Catchphrase Lines */}
              <div className="relative z-10 mt-10 space-y-2 font-cormorant text-2xl font-light tracking-wide text-white/90 sm:text-3xl">
                <p>Service with purpose and conviction.</p>
                <p>Creating ripples far beyond our campus.</p>
              </div>
            </div>

            {/* Right Column: Editorial Paragraph & CTA Button */}
            <div className="flex flex-col items-start space-y-6 lg:col-span-5 lg:pt-16">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                About
              </span>

              <p className="font-body text-base font-light leading-relaxed text-white/85 sm:text-lg">
                Rotaract Club of UCSC brings together passionate students, innovators, and changemakers dedicated to sustainable impact. Through our core avenues of service, we channel youthful energy into structured action—championing youth leadership, community welfare, and digital literacy across the nation.
              </p>

              <p className="font-body text-sm font-light leading-relaxed text-white/65">
                Beyond campus boundaries, our initiatives foster international fellowship, professional acumen, and enduring connections that empower the next generation of societal leaders.
              </p>

              {/* Action Button with Red Diamond (matching reference button) */}
              <div className="pt-4">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 border border-white bg-white px-7 py-3.5 font-cormorant text-sm uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-transparent hover:text-white"
                >
                  <span>Discover Our Initiatives</span>
                  <span className="text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                    ♦
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: RACUCSC ZOOM-THROUGH TRANSITION ───────────────────── */}
      <RacUcscPortalSection onCreamChange={setPortalOnCream} />
    </div>
  );
}

const PORTAL_MOSAIC = [
  ...GALLERY_PHOTOS.map((photo) => ({ img: photo.image, title: photo.event })),
  { img: '/15c49e70-0bc5-439e-a10f-5b208e5e4a2a.jpg', title: 'Community Outreach' },
  { img: '/a606c5f2-4ff7-416b-b188-84bc639f0afb.jpg', title: 'Youth Leadership' },
  { img: '/6cd30f0e-0ef7-4660-8a0d-f31ff0b33536.jpg', title: 'Fellowship Night' },
  { img: '/3192413d-6ab1-4400-8553-9adae65bcc27.jpg', title: 'Annual Awards' },
];

const DRIFT_WALL_ITEMS = PORTAL_MOSAIC.map((item) => ({
  image: item.img,
  title: item.title,
}));

const DEFAULT_NOISE_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.85 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;

function RacUcscPortalSection({
  onCreamChange,
}: {
  onCreamChange: (visible: boolean) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const zoomPinRef = useRef<HTMLSpanElement>(null);
  const [origin, setOrigin] = useState('50% 46%');
  const [noiseUrl, setNoiseUrl] = useState<string>('');

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const size = 160;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const imgData = ctx.createImageData(size, size);
        const buffer = new Uint32Array(imgData.data.buffer);
        for (let i = 0; i < buffer.length; i++) {
          const shade = (Math.random() * 255) | 0;
          const alpha = (Math.random() * 55 + 20) | 0;
          buffer[i] = (alpha << 24) | (shade << 16) | (shade << 8) | shade;
        }
        ctx.putImageData(imgData, 0, 0);
        setNoiseUrl(canvas.toDataURL());
      }
    } catch {
      // Fallback handled via DEFAULT_NOISE_SVG
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const zoomScale = useTransform(scrollYProgress, [0.04, 0.72], [1, 52]);
  const canvasOpacity = useTransform(scrollYProgress, [0.48, 0.68], [1, 0]);
  const chromeOpacity = useTransform(scrollYProgress, [0.58, 0.74], [0, 1]);
  const mosaicColor = useTransform(scrollYProgress, [0.55, 0.82], [1, 0]);
  const mosaicFilter = useTransform(
    mosaicColor,
    (g) =>
      `grayscale(${g}) contrast(${1 + g * 0.12}) brightness(${0.88 + (1 - g) * 0.12})`
  );

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    onCreamChange(progress > 0.01 && progress < 0.82);
  });

  const measureOrigin = useCallback(() => {
    if (zoomScale.get() > 1.08) return;
    const stage = stageRef.current;
    const pin = zoomPinRef.current;
    if (!stage || !pin) return;
    const stageBox = stage.getBoundingClientRect();
    const pinBox = pin.getBoundingClientRect();
    if (stageBox.width < 8 || stageBox.height < 8) return;
    const x = ((pinBox.left + pinBox.width / 2 - stageBox.left) / stageBox.width) * 100;
    const y = ((pinBox.top + pinBox.height / 2 - stageBox.top) / stageBox.height) * 100;
    if (Number.isFinite(x) && Number.isFinite(y)) {
      setOrigin(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    }
  }, []);

  useLayoutEffect(() => {
    let cancelled = false;
    const run = () => {
      if (!cancelled) measureOrigin();
    };
    run();
    const fontsReady = document.fonts?.ready;
    if (fontsReady) fontsReady.then(run);
    window.addEventListener('resize', run);
    return () => {
      cancelled = true;
      window.removeEventListener('resize', run);
    };
  }, [measureOrigin]);

  return (
    <div
      ref={containerRef}
      id="racucsc-zoom-container"
      className="relative z-30 h-[320vh] w-full"
    >
      <div
        ref={stageRef}
        className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-black"
      >
        <motion.div
          style={{ filter: mosaicFilter }}
          className="absolute inset-0 z-10 overflow-hidden bg-black"
        >
          <DriftWall
            items={DRIFT_WALL_ITEMS}
            columns={4}
            tileWidth={280}
            tileHeight={188}
            gap={18}
            tilt={16}
            turn={-14}
            perspective={1200}
            depth={120}
            speed={42}
            direction="up"
            variance={0.45}
            parallax={0}
            offsetX={-120}
            lift={64}
            fade={0.6}
            dim={0.55}
            overlayColor="#060010"
            radius={0}
            roll={0}
            pauseOnHover={false}
            grayscale={false}
          />
        </motion.div>

        {/* Cream canvas with RACUCSC punched out and tactile noise effect; zooms through the C stroke */}
        <motion.div
          ref={canvasRef}
          style={{
            opacity: canvasOpacity,
            scale: zoomScale,
            transformOrigin: origin,
          }}
          className="pointer-events-none absolute inset-0 z-20 isolate flex items-center justify-center bg-[#ECECE8] will-change-transform"
        >
          {/* Procedural fine-grain noise layer for tactile paper / film effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-repeat opacity-40 mix-blend-multiply"
            style={{
              backgroundImage: `url("${noiseUrl || DEFAULT_NOISE_SVG}")`,
              backgroundSize: '140px 140px',
            }}
          />

          {/* SVG fractal noise overlay for organic paper texture depth */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30 mix-blend-multiply"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="racucsc-paper-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.7" />
              </feComponentTransfer>
            </filter>
            <rect width="100%" height="100%" filter="url(#racucsc-paper-noise)" />
          </svg>

          <p
            aria-hidden
            className="relative z-10 select-none whitespace-nowrap font-cormorant font-semibold uppercase leading-none text-black"
            style={{
              fontSize: 'clamp(4.5rem, 14vw, 11.5rem)',
              letterSpacing: '-0.045em',
              mixBlendMode: 'destination-out',
            }}
          >
            RAC
            <span className="relative inline-block">
              U
            </span>
            <span className="relative inline-block">
              {/* Pin targets the thick left stroke of the C */}
              <span
                ref={zoomPinRef}
                className="absolute left-[18%] top-1/2 block h-0 w-0 -translate-y-1/2"
              />
              C
            </span>
            SC
          </p>
        </motion.div>

        {/* Gallery chrome appears after the camera has flown through the U */}
        <motion.div
          style={{ opacity: chromeOpacity }}
          className="pointer-events-none absolute inset-0 z-30 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent px-6 pb-10 sm:px-12"
        >
          <div className="pointer-events-auto mx-auto flex w-full max-w-7xl flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/55">
                Moments & Impact
              </span>
              <h3 className="mt-1 font-cormorant text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-4xl">
                Rotaract Gallery
              </h3>
            </div>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 font-cormorant text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-[rgb(197,160,71)]"
            >
              <span>View Full Gallery</span>
              <span className="text-[rgb(197,160,71)] transition-transform duration-300 group-hover:translate-x-1">
                ♦
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}




