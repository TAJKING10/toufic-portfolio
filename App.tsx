
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Zap, 
  Play, 
  Infinity as InfinityIcon,
  Fingerprint,
  ChevronDown
} from 'lucide-react';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import ProjectModal from './components/ProjectModal';
import Background from './components/Background';
import Preloader from './components/Preloader';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from './constants';
import { Project } from './types';

const KineticText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  return (
    <div className={`flex flex-wrap overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2, 
            delay: i * 0.04, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

const MagneticButton: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void; href?: string; target?: string }> = ({ children, className, onClick, href, target }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative z-10"
    >
      <Component
        href={href}
        target={target}
        onClick={onClick}
        className={className}
      >
        <span className="relative z-10 flex items-center justify-center gap-3">{children}</span>
      </Component>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-blue-500/40 overflow-x-hidden relative bg-[#030712] text-slate-200">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <Background />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-[100] origin-left shadow-[0_0_15px_rgba(37,99,235,0.5)]" style={{ scaleX }} />
      
      <Navbar />
      
      <main className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-7xl mx-auto text-center relative z-20"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 2.8 }}
              className="mb-14 relative inline-block group"
            >
              <div className="absolute -inset-12 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[12px] border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                <img src="/profile.jpg" alt="Toufic Jandah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
              </div>
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 p-8 glass rounded-[40px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              >
                <Fingerprint className="w-10 h-10 text-blue-500 animate-pulse" />
              </motion.div>
            </motion.div>

            <div className="flex flex-col items-center gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2 }}
                className="px-6 py-2 glass rounded-full border-blue-500/20 text-blue-400 font-black text-xs uppercase tracking-[0.5em]"
              >
                Systems Architect & API Specialist
              </motion.div>
              <KineticText 
                text="TRANSFORMING IDEAS." 
                className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-white text-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
              <KineticText 
                text="INTO ECOSYSTEMS." 
                className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-gradient text-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </div>

            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.8, duration: 1 }}
              className="max-w-4xl mx-auto text-xl md:text-3xl text-slate-400 mb-20 leading-relaxed font-medium tracking-tight px-4"
            >
              The Master Architect behind <span className="text-white font-bold border-b-2 border-blue-600/50">Unbreakable</span> Global Digital Infrastructures.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-10 px-6"
            >
              <MagneticButton 
                href="#projects"
                className="px-16 py-8 bg-white text-black rounded-[40px] font-black text-2xl transition-all hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] group"
              >
                VIEW PROJECTS <InfinityIcon className="w-8 h-8 group-hover:rotate-180 transition-transform duration-700" />
              </MagneticButton>
              <MagneticButton 
                href="https://github.com/TAJKING10" 
                target="_blank"
                className="px-16 py-8 glass rounded-[40px] font-black text-2xl transition-all text-white flex items-center justify-center gap-6 group"
              >
                <Github className="w-8 h-8" /> GITHUB
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-600"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">Exploration Pending</span>
            <ChevronDown className="w-6 h-6 animate-bounce text-blue-500" />
          </motion.div>
        </section>

        {/* Bento Showcase */}
        <section id="projects" className="py-32 md:py-56 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-40 text-center">
              <h2 className="text-6xl md:text-[9rem] font-black mb-10 tracking-tighter leading-[0.8] text-white">Project <br /> <span className="text-gradient">Portfolio.</span></h2>
              <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-sm">Curated System Implementations</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
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

        {/* Lineage Section */}
        <section id="experience" className="py-40 md:py-60 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-40">
              <h2 className="text-6xl md:text-[9rem] font-black mb-6 tracking-tighter text-white">Lineage.</h2>
              <div className="h-1.5 w-40 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
            </div>
            
            <div className="space-y-40">
              {EXPERIENCES.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid md:grid-cols-12 gap-16 group relative"
                >
                  <div className="md:col-span-5 border-l-4 border-blue-600/30 pl-12">
                    <span className="text-xs font-black text-blue-500 uppercase tracking-[0.5em] mb-8 block">{exp.period}</span>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <p className="text-2xl font-bold text-slate-500">{exp.company}</p>
                    <p className="text-sm font-black text-slate-600 uppercase tracking-widest mt-4">{exp.location}</p>
                  </div>
                  <div className="md:col-span-7 p-10 md:p-16 glass rounded-[60px] border border-white/5 group-hover:border-blue-500/30 transition-all hover:shadow-[0_40px_100px_rgba(0,0,0,0.8)] bg-gradient-to-br from-white/[0.03] to-transparent">
                    <ul className="space-y-10">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-slate-300 text-lg md:text-xl leading-relaxed flex items-start gap-8 font-medium">
                          <Zap className="w-10 h-10 text-blue-600 shrink-0 mt-1 shadow-2xl" />
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

        {/* Stack Section */}
        <section id="skills" className="py-40 px-6">
          <div className="max-w-7xl mx-auto text-center mb-40">
            <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter text-white mb-8">The Stack.</h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.5em] text-xs">Architectural Arsenal</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {SKILL_CATEGORIES.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -20, rotate: 1 }}
                className="p-12 glass rounded-[50px] border border-white/5 hover:border-blue-500/40 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Code className="w-24 h-24 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-10 text-white tracking-tighter">{cat.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((s, j) => (
                    <span key={j} className="px-5 py-2.5 rounded-xl bg-white/5 text-[10px] text-slate-400 font-black border border-white/5 uppercase tracking-[0.2em] hover:bg-blue-600/20 hover:text-white transition-all cursor-default">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-40 md:py-80 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="glass p-16 md:p-32 rounded-[80px] text-center border-white/10 shadow-[0_0_150px_rgba(0,0,0,1)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-2000" />
              <h2 className="text-5xl md:text-8xl lg:text-[11rem] font-black mb-20 tracking-tighter leading-[0.8] text-white">
                Initiate <br /> <span className="text-gradient">Protocol.</span>
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
                <MagneticButton 
                  href="mailto:touficjandah@gmail.com" 
                  className="flex items-center gap-6 text-2xl font-black text-white group"
                >
                  <Mail className="w-10 h-10 text-blue-500 group-hover:scale-125 transition-transform" /> EMAIL
                </MagneticButton>
                <MagneticButton 
                  href="https://www.linkedin.com/in/toufic-jandah-1ab9a4310/" 
                  target="_blank"
                  className="flex items-center gap-6 text-2xl font-black text-white group"
                >
                  <Linkedin className="w-10 h-10 text-blue-500 group-hover:scale-125 transition-transform" /> LINKEDIN
                </MagneticButton>
              </div>
              
              <MagneticButton 
                href="https://wa.me/37128103532" 
                target="_blank"
                className="inline-flex items-center gap-8 px-20 py-10 bg-white text-black rounded-[40px] font-black text-3xl md:text-5xl shadow-[0_40px_100px_rgba(255,255,255,0.15)] group hover:scale-105 transition-all"
              >
                SECURE ACCESS <ArrowRight className="w-10 h-10 md:w-16 md:h-16 group-hover:translate-x-6 transition-transform" />
              </MagneticButton>
            </div>
          </div>
        </section>

        <footer className="py-24 border-t border-white/5 bg-black/40">
          <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-12 text-slate-600 text-[10px] font-black uppercase tracking-[0.6em]">
            <div className="flex items-center gap-4 text-blue-600/60">TJ / SYSTEMS ARCHITECT</div>
            <div className="opacity-40">&copy; 2026 WORLDWIDE DATA SYSTEMS</div>
            <div className="px-8 py-3 glass rounded-full text-slate-400 font-bold border-white/5">PROTOCOL ACTIVE</div>
          </div>
        </footer>
      </main>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>

      <AIAssistant />
    </div>
  );
};

export default App;
