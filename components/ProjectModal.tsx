import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, ChevronRight, Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeVideo, setActiveVideo] = useState(project.videoUrls?.[0] || '');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-[32px] overflow-hidden flex flex-col lg:flex-row border border-white/5 shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-all text-slate-400 hover:text-white z-[110] lg:bg-slate-900/50 lg:backdrop-blur-md"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Media Section */}
        <div className="flex-1 bg-black/40 p-6 md:p-10 flex flex-col min-h-0">
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-slate-950 border border-white/5">
            <video
              key={activeVideo}
              src={activeVideo}
              autoPlay
              muted
              controls
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Video Selector */}
          {(project.videoUrls?.length ?? 0) > 1 && (
            <div className="mt-6 flex gap-4 overflow-x-auto pb-2 no-scrollbar">
              {project.videoUrls?.map((url, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(url)}
                  className={`relative shrink-0 w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                    activeVideo === url 
                      ? 'border-blue-500 scale-105' 
                      : 'border-transparent opacity-40 hover:opacity-100'
                  }`}
                >
                  <video src={url} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[400px] p-8 md:p-10 overflow-y-auto flex flex-col bg-slate-900">
          <div className="mb-8">
            <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-medium text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <p className="text-slate-400 text-base leading-relaxed">
              {project.detailedOverview || project.description}
            </p>

            <div className="space-y-3 pt-6 border-t border-white/5">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 bg-white text-black font-bold text-sm rounded-full hover:bg-slate-100 transition-all flex items-center justify-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  VIEW SOURCE
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-3"
                >
                  <ExternalLink className="w-5 h-5" />
                  LIVE DEMO
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
