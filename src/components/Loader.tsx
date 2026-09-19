


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
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-crimson-700"
        exit={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
        
          <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6">
          
            <div className="relative h-20 w-20">
              <motion.span
              className="absolute inset-0 rounded-full border-2 border-gold/40"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 1.6, repeat: Infinity }} />
            
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 glass ring-1 ring-white/30">
                <span className="font-display text-2xl font-extrabold text-white">R</span>
              </div>
            </div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-white/20">
              <motion.div
              className="h-full bg-gold"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }} />
            
            </div>
            <p className="font-grotesk text-sm tracking-[0.3em] text-white/70">ROTARACT UCSC</p>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}