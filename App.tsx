
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Code, 
  Layers, 
  Cpu, 
  Globe,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Rocket,
  Terminal,
  Server,
  Database,
  ShieldCheck,
  Zap,
  Layout,
  Briefcase,
  Play,
  Monitor
} from 'lucide-react';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import ProjectModal from './components/ProjectModal';
import { PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from './constants';
import { Project } from './types';

const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void; isLarge?: boolean }> = ({ project, index, onClick, isLarge }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
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
      className={`${isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02 }}
        className="group relative glass rounded-[40px] overflow-hidden cursor-pointer h-full border border-white/5 hover:border-blue-500/30 transition-colors shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
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
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
          
          {/* Content Over Overlay */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-xl bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400">
                {project.category}
              </span>
            </div>
            <h3 className={`font-black text-white tracking-tight mb-4 group-hover:text-blue-400 transition-colors ${isLarge ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
              {project.title}
            </h3>
            <p className={`text-slate-400 font-medium line-clamp-2 max-w-xl group-hover:text-slate-200 transition-colors ${isLarge ? 'text-lg' : 'text-sm'}`}>
              {project.description}
            </p>
            
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-500 group-hover:border-blue-500/20 group-hover:text-slate-400 transition-all">
                    {t}
                  </span>
                ))}
              </div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all"
              >
                <Play className="w-5 h-5 text-white fill-white/20 group-hover:fill-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-grid selection:bg-blue-500/30 overflow-x-hidden relative">
      <div className="vignette" />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 z-[100] origin-left" style={{ scaleX }} />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-40 px-6 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Advanced Organic Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[200px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[200px] rounded-full mix-blend-screen animate-pulse delay-1000" />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto text-center relative z-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 relative inline-block group"
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-blue-600 via-violet-600 to-pink-600 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition duration-1000 animate-spin-slow" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[12px] border-white/5 shadow-2xl">
              <img src="/profile.jpg" alt="Toufic Jandah" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 p-6 glass rounded-3xl border border-white/10 shadow-2xl">
              <Monitor className="w-8 h-8 text-blue-500" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-7xl md:text-[11rem] font-black tracking-tighter mb-12 leading-[0.85] text-white"
          >
            Architect of <br />
            <span className="text-gradient">Ecosystems.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto text-xl md:text-3xl text-slate-400 mb-16 leading-tight font-medium tracking-tight"
          >
            Senior Full-Stack Lead creating <span className="text-white">perfectly engineered</span> digital foundations for enterprise AI and Fintech.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10"
          >
            <a href="#projects" className="w-full sm:w-auto px-16 py-8 bg-white text-black rounded-[32px] font-black text-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-4 group">
              PROJECTS <Rocket className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="https://github.com/TAJKING10" target="_blank" className="w-full sm:w-auto px-16 py-8 glass rounded-[32px] font-black text-2xl transition-all text-white flex items-center justify-center gap-4 group border-white/20">
              <Github className="w-8 h-8 group-hover:rotate-12 transition-transform" /> GITHUB
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Showcase */}
      <section id="projects" className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-32">
            <h2 className="text-6xl md:text-[8rem] font-black mb-12 tracking-tighter leading-[0.8] text-white">The <br />Bento Case.</h2>
            <div className="h-3 w-40 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {PROJECTS.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={idx} 
                onClick={() => setSelectedProject(project)} 
                isLarge={idx === 0 || idx === 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-40 px-6 relative bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-[9rem] font-black mb-8 tracking-tighter text-white">Traject.</h2>
            <p className="text-2xl text-slate-400 font-medium">A lineage of engineering excellence across the globe.</p>
          </div>
          
          <div className="space-y-32">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-12 gap-12 group"
              >
                <div className="md:col-span-4">
                  <div className="sticky top-40">
                    <span className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4 block">{exp.period}</span>
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <p className="text-2xl font-bold text-slate-400">{exp.company}</p>
                  </div>
                </div>
                <div className="md:col-span-8 p-12 glass rounded-[48px] border border-white/5 group-hover:border-blue-500/30 transition-all">
                  <ul className="space-y-6">
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-slate-400 text-lg leading-relaxed flex items-start gap-4">
                        <ChevronRight className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Orbit */}
      <section id="skills" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-[8rem] font-black mb-8 tracking-tighter text-white">The Stack.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SKILL_CATEGORIES.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 glass rounded-[48px] border border-white/5 hover:border-blue-500/20 transition-all"
              >
                <h3 className="text-2xl font-black mb-10 text-white tracking-tight">{cat.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((s, j) => (
                    <span key={j} className="px-4 py-2 rounded-xl bg-white/5 text-[10px] text-slate-400 font-black border border-white/5 uppercase tracking-widest">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section id="contact" className="py-60 px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="glass p-20 md:p-32 rounded-[80px] text-center border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="text-6xl md:text-[10rem] font-black mb-16 tracking-tighter leading-[0.8] text-white">
              Let's build <br /> <span className="text-gradient">the Future.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-12 mb-20">
              <a href="mailto:touficjandah@gmail.com" className="flex items-center gap-4 text-2xl font-black text-slate-300 hover:text-white transition-all">
                <Mail className="w-8 h-8 text-blue-500" /> EMAIL
              </a>
              <a href="https://www.linkedin.com/in/toufic-jandah-1ab9a4310/" target="_blank" className="flex items-center gap-4 text-2xl font-black text-slate-300 hover:text-white transition-all">
                <Linkedin className="w-8 h-8 text-blue-500" /> LINKEDIN
              </a>
            </div>
            <motion.a 
              href="https://wa.me/37128103532" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-8 px-20 py-10 bg-white text-black rounded-[40px] font-black text-4xl shadow-2xl group"
            >
              CONTACT <ArrowRight className="w-12 h-12 group-hover:translate-x-4 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      <footer className="py-24 border-t border-white/5 text-center relative bg-black/40">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-12 text-slate-500 text-xs font-black uppercase tracking-[0.4em]">
          <div className="flex items-center gap-4 text-blue-500">TJ / ARCHITECT</div>
          <div>&copy; 2026 Toufic Jandah Portfolio</div>
          <div className="px-6 py-3 glass rounded-full">Precision Engineered</div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>

      <AIAssistant />
    </div>
  );
};

export default App;
