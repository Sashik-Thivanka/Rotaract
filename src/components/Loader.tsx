import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done &&
      <motion.div
        role="status"
        aria-label="Loading Rotaract Club of UCSC"
        className="fixed inset-0 z-[110] flex items-center justify-center bg-ink px-6 text-white"
        initial={{ opacity: 1 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>

          <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex w-full max-w-xs flex-col items-center text-center">

            <img src="/Logo-White-1.png" alt="Rotaract Club of UCSC" className="h-16 w-auto object-contain opacity-90" />
            <h1 aria-label="Create Lasting Impact" className="mt-4 flex flex-row font-display text-2xl font-extrabold uppercase italic leading-[0.9] tracking-[0.04em] text-white sm:text-3xl gap-2">
              {['Create', 'Lasting', 'Impact'].map((word, index) =>
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.48, ease: 'easeOut' }}>
                {word}
              </motion.span>)}
            </h1>

          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}