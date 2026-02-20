
import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const gridItems = useMemo(() => Array.from({ length: 40 }), []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712]">
      {/* Mesh Gradient */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute -top-[20%] -left-[10%] w-[120%] h-[120%] opacity-20"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] mix-blend-screen animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] bg-pink-600 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-1000" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Noise Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {gridItems.map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() * 0.3 
            }}
            animate={{ 
              y: [null, (Math.random() * -100 - 50) + "px", null],
              opacity: [null, Math.random() * 0.5, null]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>

      <div className="vignette" />
    </div>
  );
};

export default Background;
