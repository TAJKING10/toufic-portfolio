
import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeVideo, setActiveVideo] = useState(project.videoUrls?.[0] || '');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] glass rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-300">
        
        {/* Left Side: Video Player Section */}
        <div className="flex-1 bg-black/40 p-4 md:p-8 flex flex-col min-h-0">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl group border border-white/5">
            <video
              key={activeVideo}
              src={activeVideo}
              autoPlay
              muted
              controls
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Video Selector (if multiple) */}
          {(project.videoUrls?.length ?? 0) > 1 && (
            <div className="mt-6 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {project.videoUrls?.map((url, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(url)}
                  className={`relative shrink-0 w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                    activeVideo === url ? 'border-blue-500 scale-105 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <video src={url} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-[10px] font-bold text-white uppercase bg-black/60 px-2 py-0.5 rounded">Part {i + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Details Section */}
        <div className="w-full md:w-[400px] border-l border-white/10 p-8 overflow-y-auto flex flex-col bg-white/5">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-8">
            <span className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-2 block">{project.category || 'Featured Project'}</span>
            <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Overview</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.detailedOverview || project.description}
              </p>
            </div>

            <div className="pt-8 mt-auto flex flex-col gap-3">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 bg-white text-black font-black text-center rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group"
                >
                  VIEW GITHUB
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 glass text-white font-black text-center rounded-2xl hover:bg-white/10 transition-all"
                >
                  LIVE PREVIEW
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
