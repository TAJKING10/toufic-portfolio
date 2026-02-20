
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-[#030712] flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          className="h-[1px] bg-white/10 mb-8 relative overflow-hidden"
        >
          <motion.div 
            style={{ width: `${percent}%` }}
            className="h-full bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.8)]"
          />
        </motion.div>
        
        <div className="overflow-hidden h-20">
          <AnimatePresence mode="wait">
            <motion.span
              key={percent}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.2 }}
              className="text-6xl font-black text-white tracking-tighter block"
            >
              {percent}%
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Initializing Ecosystem</span>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>
    </motion.div>
  );
};

export default Preloader;
