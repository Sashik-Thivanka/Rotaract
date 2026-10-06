


import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  minDigits?: number;
  startDelay?: number;
  trigger?: boolean;
}

export function Counter({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
  minDigits = 0,
  startDelay = 0,
  trigger
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const ownInView = useInView(ref, { once: true, margin: '-40px' });
  const inView = trigger ?? ownInView;
  const formatValue = () => minDigits ? String(value).padStart(minDigits, '0') : value.toLocaleString();
  const [display, setDisplay] = useState(formatValue().replace(/\d/g, '0'));

  useEffect(() => {
    if (!inView) return;
    const formattedValue = formatValue();
    const start = window.setTimeout(() => {
      setDisplay(formattedValue);
    }, startDelay);
    return () => {
      window.clearTimeout(start);
    };
  }, [inView, value, duration, minDigits, startDelay]);

  return (
    <span ref={ref} className="inline-flex items-center justify-center gap-1">
      {prefix && <span aria-hidden="true">{prefix}</span>}
      <span className="inline-flex items-center gap-px whitespace-nowrap" aria-label={`${prefix}${value}${suffix}`}>
        {display.split('').map((character, index) =>
          /\d/.test(character) ?
            <FlipDigit key={index} digit={character} /> :
            <span key={index}>{character}</span>
        )}
      </span>
      {suffix && <span aria-hidden="true">{suffix}</span>}
    </span>);

}

function FlipDigit({ digit }: { digit: string }) {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [nextDigit, setNextDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit === currentDigit) return;
    setNextDigit(digit);
    setIsFlipping(true);
    const timer = window.setTimeout(() => {
      setCurrentDigit(digit);
      setIsFlipping(false);
    }, 650);
    return () => window.clearTimeout(timer);
  }, [digit, currentDigit]);

  return (
    <span className="relative inline-block h-[1.15em] w-[0.72em] shrink-0 [perspective:1000px]">
      <span className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-[0.18em] border border-b-0 border-[#736E63] bg-[#140E02]">
        <span className="absolute left-0 top-0 flex h-[200%] w-full items-center justify-center leading-none">
          {nextDigit}
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-[0.18em] border border-t-0 border-[#736E63] bg-[#140E02]">
        <span className="absolute left-0 top-[-100%] flex h-[200%] w-full items-center justify-center leading-none">
          {currentDigit}
        </span>
      </span>
      {isFlipping &&
        <>
          <span className="counter-flip-top absolute inset-x-0 top-0 z-10 h-1/2 origin-bottom overflow-hidden rounded-t-[0.18em] border border-b-0 border-[#736E63] bg-[#140E02]">
            <span className="absolute left-0 top-0 flex h-[200%] w-full items-center justify-center leading-none">
              {currentDigit}
            </span>
          </span>
          <span className="counter-flip-bottom absolute inset-x-0 bottom-0 z-[5] h-1/2 origin-top overflow-hidden rounded-b-[0.18em] border border-t-0 border-[#736E63] bg-[#140E02]">
            <span className="absolute left-0 top-[-100%] flex h-[200%] w-full items-center justify-center leading-none">
              {nextDigit}
            </span>
          </span>
        </>}
      <span className="absolute inset-x-0 top-1/2 z-20 h-px -translate-y-1/2 bg-gold/85" />
    </span>);
}