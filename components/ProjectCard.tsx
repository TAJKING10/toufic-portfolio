import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  isLarge?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer h-[400px] md:h-[500px] bg-slate-900 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Media Background */}
      <div className="absolute inset-0">
        {project.videoUrls && project.videoUrls.length > 0 ? (
          <video
            src={project.videoUrls[0]}
            poster={project.image}
            autoPlay={false}
            muted
            loop
            playsInline
            ref={(el) => {
              if (el) isHovered ? el.play() : el.pause();
            }}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isHovered ? 'grayscale-0 opacity-60 scale-105' : 'grayscale opacity-30'
            }`}
          />
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isHovered ? 'grayscale-0 opacity-60 scale-105' : 'grayscale opacity-30'
            }`}
          />
        )}
      </div>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            {project.category}
          </span>
          <div className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm line-clamp-2 max-w-lg mb-6 group-hover:text-slate-300 transition-colors leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 opacity-60 group-hover:opacity-100 transition-opacity">
          {project.tech.slice(0, 3).map((t, i) => (
            <span key={i} className="text-[9px] font-medium px-2 py-1 rounded-md bg-white/5 text-slate-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
