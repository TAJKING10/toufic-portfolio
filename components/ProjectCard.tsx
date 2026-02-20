import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, ArrowUpRight, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  isLarge?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick, isLarge }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
    
    // Spotlight position
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{ rotateX, rotateY }}
        className="group relative glass rounded-[60px] overflow-hidden cursor-pointer h-[500px] md:h-[600px] border border-white/5 hover:border-blue-500/40 transition-all duration-700 shadow-2xl"
      >
        {/* Spotlight Effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{ 
            background: useTransform(
              [mouseX, mouseY],
              ([mx, my]) => `radial-gradient(circle at ${mx}px ${my}px, rgba(59, 130, 246, 0.2) 0%, transparent 70%)`
            )
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Project Visual */}
        <div className="relative overflow-hidden bg-slate-900 ring-1 ring-white/10 h-full">
          {project.videoUrls && project.videoUrls.length > 0 ? (
            <video
              src={project.videoUrls[0]}
              poster={project.image}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
          
          <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end z-20">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] px-6 py-3 rounded-full bg-blue-600 text-white shadow-2xl border border-blue-400/30">
                  {project.category}
                </span>
                <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border-white/5 bg-white/5">
                  <div className="pulse-status-green" />
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">System Active</span>
                </div>
              </div>
              <motion.div 
                whileHover={{ rotate: 45, scale: 1.2 }}
                className="w-14 h-14 rounded-full glass border-white/20 flex items-center justify-center text-white"
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </div>
            
            <h3 className={`font-black text-white tracking-tighter mb-6 group-hover:text-blue-400 transition-colors ${isLarge ? 'text-5xl md:text-7xl' : 'text-3xl md:text-5xl'}`}>
              {project.title}
            </h3>
            
            <p className={`text-slate-400 font-bold line-clamp-2 max-w-2xl group-hover:text-slate-200 transition-colors leading-relaxed mb-10 ${isLarge ? 'text-xl md:text-2xl' : 'text-lg'}`}>
              {project.description}
            </p>
            
            <div className="flex items-center justify-between border-t border-white/10 pt-10">
              <div className="flex gap-4">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 group-hover:text-slate-300 transition-all">
                    {t}
                  </span>
                ))}
              </div>
              <motion.div 
                whileHover={{ scale: 1.1, x: 5 }}
                className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-[0.3em] group/btn"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">View System</span>
                <div className="w-16 h-16 rounded-[24px] bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
