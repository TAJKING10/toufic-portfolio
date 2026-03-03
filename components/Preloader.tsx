import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[1000] bg-[#020617] flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="text-4xl font-bold tracking-tighter text-white">
            TOUFIC <span className="text-blue-500">JANDAH</span>
          </span>
        </motion.div>
        
        <div className="w-48 h-px bg-white/5 relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            className="absolute top-0 left-0 h-full bg-blue-500"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4"
        >
          <span className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.4em]">
            {Math.floor(percent)}%
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
