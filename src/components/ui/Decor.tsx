


import React from 'react';

/** Soft organic blob background element */
export function Blob({ className = '' }: {className?: string;}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-60 animate-float-slow ${className}`} />);


}

/** Curved SVG section divider */
export function CurveDivider({
  flip = false,
  className = 'text-white dark:text-ink'



}: {flip?: boolean;className?: string;}) {
  return (
    <div aria-hidden className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
      <svg
        className={`w-full h-[60px] md:h-[100px] ${className}`}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="currentColor">
        
        <path d="M0,40 C360,120 1080,-40 1440,40 L1440,100 L0,100 Z" />
      </svg>
    </div>);

}