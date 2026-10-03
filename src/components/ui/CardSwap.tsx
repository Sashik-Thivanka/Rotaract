import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AVENUE_DETAILS } from '../../lib/impactData';

export const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { customClass?: string }
>(({ customClass, className, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute left-0 bottom-0 rounded-t-2xl border-t border-l border-white/20 bg-[#0d0c15] shadow-[0_-15px_40px_rgba(0,0,0,0.85)] [backface-visibility:hidden] [transform-style:preserve-3d] [will-change:transform] overflow-hidden ${
      customClass ?? ''
    } ${className ?? ''}`.trim()}
  />
));
Card.displayName = 'Card';

const makeSlot = (index: number, distX: number, distY: number, total: number = 4) => ({
  x: index * distX,
  y: -index * distY,
  z: -index * distX * 1.5,
  zIndex: total - index,
});

const placeCard = (
  el: HTMLElement,
  slot: ReturnType<typeof makeSlot>,
  skew: number,
  opacity: number = 1
) => {
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: 0, // anchored to the left so left corners are ALWAYS visible
    yPercent: 0, // anchored to bottom
    skewY: skew,
    transformOrigin: 'bottom left',
    zIndex: slot.zIndex,
    opacity,
    force3D: true,
  });
};

export interface CardSwapHandle {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  getCurrentIndex: () => number;
  isAnimating: () => boolean;
}

interface AvenuesCardSwapProps {
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  skewAmount?: number;
  onFrontChange?: (index: number) => void;
}

export const AvenuesCardSwap = forwardRef<CardSwapHandle, AvenuesCardSwapProps>(
  (
    {
      cardDistance = 38,
      verticalDistance = 38,
      delay = 0,
      pauseOnHover = true,
      skewAmount = -5,
      onFrontChange,
    },
    ref
  ) => {
    const [frontIndex, setFrontIndex] = useState(0);
    const frontIndexRef = useRef(0);
    frontIndexRef.current = frontIndex;

    const [incomingNext, setIncomingNext] = useState<number | null>(null);
    const [incomingPrev, setIncomingPrev] = useState<number | null>(null);

    const isAnimatingRef = useRef(false);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<number | undefined>(undefined);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const totalAvenues = AVENUE_DETAILS.length; // 8

    useEffect(() => {
      onFrontChange?.(frontIndex);
    }, [frontIndex, onFrontChange]);

    const resetCardPositions = useCallback(() => {
      cardRefs.current.slice(0, 4).forEach((el, i) => {
        if (el) {
          const slot = makeSlot(i, cardDistance, verticalDistance, 4);
          placeCard(el, slot, skewAmount, 1);
        }
      });
    }, [cardDistance, verticalDistance, skewAmount]);

    useEffect(() => {
      resetCardPositions();
    }, [frontIndex, resetCardPositions]);

    // SWAP NEXT: Stable, atomic transition without racing
    const swapNext = useCallback(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const currentFront = frontIndexRef.current;
      const nextAvenueToAppend = (currentFront + 4) % totalAvenues;

      setIncomingNext(nextAvenueToAppend);

      requestAnimationFrame(() => {
        const cards = cardRefs.current;
        const frontEl = cards[0];
        const card1 = cards[1];
        const card2 = cards[2];
        const card3 = cards[3];
        const incomingEl = cards[4];

        if (!frontEl || !card1 || !card2 || !card3 || !incomingEl) {
          isAnimatingRef.current = false;
          setIncomingNext(null);
          return;
        }

        const slot0 = makeSlot(0, cardDistance, verticalDistance, 5);
        const slot1 = makeSlot(1, cardDistance, verticalDistance, 5);
        const slot2 = makeSlot(2, cardDistance, verticalDistance, 5);
        const slot3 = makeSlot(3, cardDistance, verticalDistance, 5);
        const slot4 = makeSlot(4, cardDistance, verticalDistance, 5);

        placeCard(incomingEl, slot4, skewAmount, 0);

        const tl = gsap.timeline({
          onComplete: () => {
            const newFront = (currentFront + 1) % totalAvenues;
            setFrontIndex(newFront);
            setIncomingNext(null);
            isAnimatingRef.current = false;
          },
        });
        tlRef.current = tl;

        // 1. Front card drops down past bottom clipped boundary
        tl.to(frontEl, {
          y: '+=520',
          opacity: 0,
          duration: 0.65,
          ease: 'power2.inOut',
        });

        tl.addLabel('promote', '-=0.5');

        // B -> slot 0
        tl.set(card1, { zIndex: slot0.zIndex }, 'promote');
        tl.to(
          card1,
          {
            x: slot0.x,
            y: slot0.y,
            z: slot0.z,
            duration: 0.6,
            ease: 'power2.out',
          },
          'promote'
        );

        // C -> slot 1
        tl.set(card2, { zIndex: slot1.zIndex }, 'promote');
        tl.to(
          card2,
          {
            x: slot1.x,
            y: slot1.y,
            z: slot1.z,
            duration: 0.6,
            ease: 'power2.out',
          },
          'promote+=0.04'
        );

        // D -> slot 2
        tl.set(card3, { zIndex: slot2.zIndex }, 'promote');
        tl.to(
          card3,
          {
            x: slot2.x,
            y: slot2.y,
            z: slot2.z,
            duration: 0.6,
            ease: 'power2.out',
          },
          'promote+=0.08'
        );

        // E (incoming) -> slot 3
        tl.set(incomingEl, { zIndex: slot3.zIndex }, 'promote');
        tl.to(
          incomingEl,
          {
            x: slot3.x,
            y: slot3.y,
            z: slot3.z,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          'promote+=0.12'
        );
      });
    }, [cardDistance, verticalDistance, skewAmount, totalAvenues]);

    // SWAP PREV: Reverse transition
    const swapPrev = useCallback(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const currentFront = frontIndexRef.current;
      const prevAvenueToPrepend = (currentFront - 1 + totalAvenues) % totalAvenues;

      setIncomingPrev(prevAvenueToPrepend);

      requestAnimationFrame(() => {
        const cards = cardRefs.current;
        const incomingEl = cards[4];
        const card0 = cards[0];
        const card1 = cards[1];
        const card2 = cards[2];
        const card3 = cards[3];

        if (!incomingEl || !card0 || !card1 || !card2 || !card3) {
          isAnimatingRef.current = false;
          setIncomingPrev(null);
          return;
        }

        const slot0 = makeSlot(0, cardDistance, verticalDistance, 5);
        const slot1 = makeSlot(1, cardDistance, verticalDistance, 5);
        const slot2 = makeSlot(2, cardDistance, verticalDistance, 5);
        const slot3 = makeSlot(3, cardDistance, verticalDistance, 5);
        const slot4 = makeSlot(4, cardDistance, verticalDistance, 5);

        // Position incoming card below viewport
        gsap.set(incomingEl, {
          x: slot0.x,
          y: slot0.y + 520,
          z: slot0.z,
          xPercent: 0,
          yPercent: 0,
          skewY: skewAmount,
          transformOrigin: 'bottom left',
          zIndex: slot0.zIndex + 2,
          opacity: 0,
          force3D: true,
        });

        const tl = gsap.timeline({
          onComplete: () => {
            const newFront = (currentFront - 1 + totalAvenues) % totalAvenues;
            setFrontIndex(newFront);
            setIncomingPrev(null);
            isAnimatingRef.current = false;
          },
        });
        tlRef.current = tl;

        tl.to(card3, {
          x: slot4.x,
          y: slot4.y,
          z: slot4.z,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        });

        tl.addLabel('demote', '-=0.35');
        tl.to(card2, { ...slot3, duration: 0.55, ease: 'power2.out' }, 'demote');
        tl.to(card1, { ...slot2, duration: 0.55, ease: 'power2.out' }, 'demote+=0.04');
        tl.to(card0, { ...slot1, duration: 0.55, ease: 'power2.out' }, 'demote+=0.08');

        tl.to(
          incomingEl,
          {
            y: slot0.y,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          'demote+=0.1'
        );
      });
    }, [cardDistance, verticalDistance, skewAmount, totalAvenues]);

    const goTo = useCallback(
      (targetIndex: number) => {
        if (targetIndex === frontIndexRef.current || isAnimatingRef.current) return;
        setFrontIndex(targetIndex % totalAvenues);
      },
      [totalAvenues]
    );

    useImperativeHandle(ref, () => ({
      next: swapNext,
      prev: swapPrev,
      goTo,
      getCurrentIndex: () => frontIndexRef.current,
      isAnimating: () => isAnimatingRef.current,
    }));

    useEffect(() => {
      if (delay <= 0) return;
      const startTimer = () => {
        if (timerRef.current !== undefined) clearInterval(timerRef.current);
        timerRef.current = window.setInterval(() => {
          swapNext();
        }, delay);
      };

      startTimer();

      const node = containerRef.current;
      if (pauseOnHover && node) {
        const pause = () => {
          if (timerRef.current !== undefined) clearInterval(timerRef.current);
        };
        const resume = () => {
          startTimer();
        };

        node.addEventListener('mouseenter', pause);
        node.addEventListener('mouseleave', resume);
        return () => {
          node.removeEventListener('mouseenter', pause);
          node.removeEventListener('mouseleave', resume);
          if (timerRef.current !== undefined) clearInterval(timerRef.current);
        };
      }

      return () => {
        if (timerRef.current !== undefined) clearInterval(timerRef.current);
      };
    }, [delay, pauseOnHover, swapNext]);

    const activeAvenues = [
      AVENUE_DETAILS[frontIndex % totalAvenues],
      AVENUE_DETAILS[(frontIndex + 1) % totalAvenues],
      AVENUE_DETAILS[(frontIndex + 2) % totalAvenues],
      AVENUE_DETAILS[(frontIndex + 3) % totalAvenues],
    ];

    const incomingAvenue =
      incomingNext !== null
        ? AVENUE_DETAILS[incomingNext]
        : incomingPrev !== null
        ? AVENUE_DETAILS[incomingPrev]
        : null;

    return (
      <div
        ref={containerRef}
        /* Left side is padded and starts cleanly; right side and bottom are clipped */
        className="relative flex h-[480px] sm:h-[500px] md:h-[520px] w-full items-end justify-start [perspective:1000px] overflow-hidden pl-2 sm:pl-6 md:pl-8"
      >
        {activeAvenues.map((avenue, slotIdx) => {
          const avenueNumber =
            AVENUE_DETAILS.findIndex((a) => a.slug === avenue.slug) + 1;
          const Icon = avenue.icon;

          return (
            <Card
              key={`${avenue.slug}-${slotIdx}`}
              ref={(el) => (cardRefs.current[slotIdx] = el)}
              /* Shorter height and appropriate width, left-aligned, right side clips off */
              customClass="w-[380px] sm:w-[500px] md:w-[580px] lg:w-[640px] xl:w-[680px] h-[400px] sm:h-[430px] md:h-[460px] select-none"
            >
              {/* Top Window Bar - Left corners and title fully visible */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 bg-[#141320] px-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-[#c5a047]" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/95 sm:text-sm">
                    {avenue.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 pr-4 sm:pr-8">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#c5a047] shadow-[0_0_8px_#c5a047]" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a047]">
                    0{avenueNumber} / 08
                  </span>
                </div>
              </div>

              {/* Card Body - Shorter height, brought down, NO HOVER EFFECTS */}
              <div className="relative flex h-[calc(100%-44px)] flex-col justify-between p-6 sm:p-7 md:p-8">
                <img
                  src={avenue.image}
                  alt={avenue.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c15] via-[#0d0c15]/75 to-[#0d0c15]/25" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c15] via-[#0d0c15]/60 to-transparent" />

                {/* Glowing Numeral */}
                <div className="pointer-events-none absolute bottom-8 right-8 select-none font-cormorant text-8xl font-bold leading-none tracking-tighter text-white/[0.08] sm:text-9xl md:text-[10rem]">
                  0{avenueNumber}
                </div>

                <div className="relative z-10 max-w-sm sm:max-w-md">
                  <p className="mb-1 font-cormorant text-xs italic tracking-widest text-[#c5a047] sm:text-sm">
                    {avenue.tagline}
                  </p>
                  <h3 className="font-cormorant text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-3xl md:text-4xl">
                    {avenue.title}
                  </h3>
                  <p className="mt-2 font-body text-xs font-light leading-relaxed text-white/75 sm:text-sm line-clamp-2 sm:line-clamp-3">
                    {avenue.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 pb-1">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white/60 sm:text-xs">
                    <span>{avenue.completedProjects} Projects</span>
                    <span>•</span>
                    <span>{avenue.directors} Directors</span>
                  </div>
                  <Link
                    to={`/avenues/${avenue.slug}`}
                    className="inline-flex items-center gap-1.5 font-cormorant text-xs uppercase tracking-[0.2em] text-[#c5a047] hover:text-white transition-colors sm:text-sm pr-6"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}

        {incomingAvenue && (
          <Card
            ref={(el) => (cardRefs.current[4] = el)}
            customClass="w-[380px] sm:w-[500px] md:w-[580px] lg:w-[640px] xl:w-[680px] h-[400px] sm:h-[430px] md:h-[460px] select-none"
          >
            <div className="flex h-11 items-center justify-between border-b border-white/10 bg-[#141320] px-6">
              <div className="flex items-center gap-3">
                <incomingAvenue.icon className="h-4 w-4 text-[#c5a047]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/95 sm:text-sm">
                  {incomingAvenue.title}
                </span>
              </div>
              <div className="flex items-center gap-2 pr-4 sm:pr-8">
                <span className="inline-block h-2 w-2 rounded-full bg-[#c5a047]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a047]">
                  0{AVENUE_DETAILS.findIndex((a) => a.slug === incomingAvenue.slug) + 1} / 08
                </span>
              </div>
            </div>
            <div className="relative flex h-[calc(100%-44px)] flex-col justify-between p-6 sm:p-7 md:p-8">
              <img
                src={incomingAvenue.image}
                alt={incomingAvenue.title}
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c15] via-[#0d0c15]/75 to-[#0d0c15]/25" />
              <div className="relative z-10 max-w-sm sm:max-w-md">
                <p className="mb-1 font-cormorant text-xs italic tracking-widest text-[#c5a047] sm:text-sm">
                  {incomingAvenue.tagline}
                </p>
                <h3 className="font-cormorant text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-3xl md:text-4xl">
                  {incomingAvenue.title}
                </h3>
              </div>
            </div>
          </Card>
        )}
      </div>
    );
  }
);
AvenuesCardSwap.displayName = 'AvenuesCardSwap';

export default AvenuesCardSwap;
