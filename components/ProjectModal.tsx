
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Github, ExternalLink, ChevronRight, Video } from 'lucide-react';
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-7xl max-h-[90vh] glass rounded-[48px] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
      >
        
        {/* Left Side: Video Player Section */}
        <div className="flex-1 bg-black/60 p-6 md:p-12 flex flex-col min-h-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/20">
              <Video className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Visual Documentation</h4>
              <p className="text-sm text-slate-400 font-bold">Interactive System Walkthrough</p>
            </div>
          </div>

          <div className="relative flex-1 rounded-[32px] overflow-hidden bg-slate-900 shadow-2xl group border border-white/5 ring-1 ring-white/10">
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
            <div className="mt-8 flex gap-6 overflow-x-auto pb-4 no-scrollbar">
              {project.videoUrls?.map((url, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(url)}
                  className={`relative shrink-0 w-44 aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                    activeVideo === url 
                      ? 'border-blue-500 scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)] ring-4 ring-blue-500/20' 
                      : 'border-transparent opacity-40 hover:opacity-100 grayscale hover:grayscale-0'
                  }`}
                >
                  <video src={url} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <div className="p-2 rounded-full bg-white/10 border border-white/20">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Part {i + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Details Section */}
        <div className="w-full lg:w-[480px] border-l border-white/10 p-8 md:p-12 overflow-y-auto flex flex-col bg-white/5 relative">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-3 hover:bg-white/10 rounded-2xl transition-all text-slate-400 hover:text-white z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="mb-12 pt-12 lg:pt-0">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block"
            >
              {project.category || 'System Architecture'}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
            >
              {project.title}
            </motion.h2>
            
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] hover:bg-blue-600/10 hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="space-y-10 flex-1">
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-transparent rounded-full" />
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Functional Specification</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                {project.detailedOverview || project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-auto">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-6 bg-white text-black font-black text-center rounded-[24px] hover:bg-slate-200 transition-all flex items-center justify-center gap-4 group text-lg shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                >
                  <Github className="w-6 h-6" />
                  REPOSITORY
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-6 glass text-white font-black text-center rounded-[24px] hover:bg-white/10 transition-all flex items-center justify-center gap-4 text-lg border-white/20"
                >
                  <ExternalLink className="w-6 h-6 text-blue-500" />
                  LIVE DEPLOYMENT
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
