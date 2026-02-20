
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  isLarge?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick, isLarge }) => {
  const [isHovered, setIsHovered] = useState(false);
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
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`${isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{ rotateX, rotateY }}
        className="group relative glass rounded-[48px] overflow-hidden cursor-pointer h-full border border-white/5 hover:border-blue-500/40 transition-all duration-700 shadow-2xl"
      >
        {/* Spotlight Effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{ 
            background: useTransform(
              [mouseX, mouseY],
              ([mx, my]) => `radial-gradient(circle at ${mx}px ${my}px, rgba(59, 130, 246, 0.15) 0%, transparent 70%)`
            )
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Project Visual */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 ring-1 ring-white/10 h-full">
          {project.videoUrls && project.videoUrls.length > 0 ? (
            <video
              src={project.videoUrls[0]}
              poster={project.image}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
          
          <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end z-20">
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] px-5 py-2.5 rounded-2xl bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400">
                {project.category}
              </span>
            </div>
            <h3 className={`font-black text-white tracking-tighter mb-6 group-hover:text-blue-400 transition-colors ${isLarge ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>
              {project.title}
            </h3>
            <p className={`text-slate-400 font-bold line-clamp-2 max-w-xl group-hover:text-slate-200 transition-colors leading-relaxed ${isLarge ? 'text-xl' : 'text-base'}`}>
              {project.description}
            </p>
            
            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-3">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-500 group-hover:border-blue-500/20 group-hover:text-slate-400 transition-all">
                    {t}
                  </span>
                ))}
              </div>
              <motion.div 
                whileHover={{ x: 5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all"
              >
                <Play className="w-6 h-6 text-white fill-white/20 group-hover:fill-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
