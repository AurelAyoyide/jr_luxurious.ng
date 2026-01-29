import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VaultIntroProps {
  onComplete: () => void;
}

export const VaultIntro: React.FC<VaultIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Sequence timer
    const t1 = setTimeout(() => setStage(1), 800);  // Text reveal
    const t2 = setTimeout(() => setStage(2), 2200); // Access Granted
    const t3 = setTimeout(() => setStage(3), 3000); // Open doors
    const t4 = setTimeout(() => onComplete(), 4000); // Remove component

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Left Door */}
      <motion.div 
        className="absolute left-0 top-0 h-full w-1/2 bg-[#050508] border-r border-luxury-gold/20 z-20 flex items-center justify-end pr-10"
        initial={{ x: 0 }}
        animate={stage >= 3 ? { x: '-100%' } : { x: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-40 h-40 rounded-full border-4 border-luxury-card z-30 flex items-center justify-center bg-[#050508]">
            <motion.div 
                animate={stage >= 1 && stage < 3 ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-32 h-32 rounded-full border-2 border-dashed border-luxury-gold/40" 
            />
        </div>
      </motion.div>

      {/* Right Door */}
      <motion.div 
        className="absolute right-0 top-0 h-full w-1/2 bg-[#050508] border-l border-luxury-gold/20 z-20"
        initial={{ x: 0 }}
        animate={stage >= 3 ? { x: '100%' } : { x: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Center Content (Text) */}
      <div className="z-40 flex flex-col items-center justify-center mix-blend-difference text-center">
        <AnimatePresence>
          {stage === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="font-mono text-luxury-gold text-sm tracking-[0.5em] uppercase"
            >
              Authenticating Credentials...
            </motion.div>
          )}
          {stage === 2 && (
             <motion.div
             initial={{ opacity: 0, scale: 1.1 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0 }}
             className="text-center"
           >
             <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">Luxurious.ng</h1>
             <p className="font-mono text-green-500 text-xs tracking-[0.3em] uppercase">WELCOME</p>
           </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
