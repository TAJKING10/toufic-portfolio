
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Activity, Terminal as TerminalIcon } from 'lucide-react';

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
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-[#030712] flex flex-col items-center justify-center p-8"
    >
      <div className="relative flex flex-col items-center max-w-lg w-full">
        {/* Architectural Progress Ring */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 mb-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/5 bg-white/[0.01]" />
          
          <svg className="w-full h-full rotate-[-90deg]">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="rgba(37, 99, 235, 0.1)"
              strokeWidth="2"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="100 100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 100 - percent }}
              pathLength="100"
              strokeLinecap="round"
              className="shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-5xl md:text-6xl font-black text-white tracking-tighter"
             >
               {percent}<span className="text-blue-500">%</span>
             </motion.span>
             <div className="mt-2 px-3 py-1 glass rounded-full border-blue-500/20">
                <span className="text-[8px] font-black text-blue-500 uppercase tracking-[0.4em]">Optimizing</span>
             </div>
          </div>

          {/* Decorative Orbits */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute inset-[-20px] border border-dashed border-white/5 rounded-full"
          />
        </div>
        
        <div className="w-full space-y-6">
          {/* Header for logs */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
               <div className="pulse-status-blue" />
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">System Boot Sequences</span>
            </div>
            <div className="flex items-center gap-4">
               <Cpu className="w-4 h-4 text-slate-700" />
               <ShieldCheck className="w-4 h-4 text-slate-700" />
               <Activity className="w-4 h-4 text-slate-700" />
            </div>
          </div>
          
          {/* Terminal Console */}
          <div className="glass p-6 rounded-[24px] border-white/10 bg-black/40 w-full min-h-[80px] flex flex-col justify-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
            
            <div className="flex items-start gap-4">
              <TerminalIcon className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLog}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-1"
                  >
                    <p className="text-[11px] font-mono text-slate-200 uppercase tracking-widest leading-relaxed font-bold">
                      {bootLogs[currentLog]}
                    </p>
                    <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                      Processing module_{currentLog + 1}.js ... [OK]
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Branding */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        <div className="flex items-center gap-10 opacity-20">
           <div className="w-10 h-[1px] bg-white" />
           <span className="text-[9px] font-black text-white uppercase tracking-[1em]">TJ ECOSYSTEM</span>
           <div className="w-10 h-[1px] bg-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
