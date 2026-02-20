import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  "INITIALIZING KERNEL...",
  "LOADING NEURAL INTERFACE...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "DECRYPTING ARCHITECT PORTFOLIO...",
  "MOUNTING ECOSYSTEM MODULES...",
  "OPTIMIZING REACTIVE UI...",
  "READY FOR DEPLOYMENT."
];

const Preloader: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [currentLog, setCurrentLog] = useState(0);

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

    const logInterval = setInterval(() => {
      setCurrentLog(prev => (prev + 1) % bootLogs.length);
    }, 350);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-[#030712] flex flex-col items-center justify-center p-6"
    >
      <div className="relative flex flex-col items-center max-w-sm w-full">
        {/* Progress Circle Visual */}
        <div className="relative w-40 h-40 mb-12 flex items-center justify-center">
          <svg className="w-full h-full rotate-[-90deg]">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="4"
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#2563eb"
              strokeWidth="4"
              strokeDasharray="440"
              initial={{ strokeDashoffset: 440 }}
              animate={{ strokeDashoffset: 440 - (440 * percent) / 100 }}
              strokeLinecap="round"
              className="shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="text-4xl font-black text-white tracking-tighter">{percent}%</span>
          </div>
        </div>
        
        <div className="w-full space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">System Boot Sequences</span>
          </div>
          
          <div className="glass p-5 rounded-2xl border-white/5 bg-white/[0.02] w-full min-h-[60px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentLog}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed"
              >
                <span className="text-blue-600 mr-2">{'>'}</span> {bootLogs[currentLog]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 text-[9px] font-black text-slate-700 uppercase tracking-[0.8em]">
        Engineered for Excellence
      </div>
    </motion.div>
  );
};

export default Preloader;
