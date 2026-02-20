
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Code, 
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
  Monitor,
  MoveRight,
  Infinity as InfinityIcon,
  Fingerprint
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
          initial={{ y: "100%", opacity: 0, rotateX: -90 }}
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: i * 0.02, 
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading
    setTimeout(() => setLoading(false), 2500);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-blue-500/30 overflow-x-hidden relative bg-[#030712]">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <Background />
      
      {/* Custom Cursor */}
      <motion.div 
        className="cursor-dot hidden md:block"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div 
        className="cursor-outline hidden md:block"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 z-[100] origin-left" style={{ scaleX }} />
      
      <Navbar />
      
      <main className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        {/* Hero Section */}
        <section className="relative pt-48 pb-40 px-6 min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-7xl mx-auto text-center relative z-20"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 2.8 }}
              className="mb-14 relative inline-block group"
            >
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600 via-violet-600 to-pink-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-50 transition duration-1000 animate-spin-slow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[16px] border-white/5 shadow-[0_0_100px_rgba(37,99,235,0.2)]">
                <img src="/profile.jpg" alt="Toufic Jandah" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <motion.div 
                animate={{ y: [0, -30, 0], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
                className="absolute -bottom-8 -right-8 p-10 glass rounded-[48px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
              >
                <Fingerprint className="w-14 h-14 text-blue-500 animate-pulse" />
              </motion.div>
            </motion.div>

            <KineticText 
              text="REDEFINING INFRASTRUCTURE." 
              className="text-7xl md:text-[12rem] font-black tracking-tighter mb-12 leading-[0.75] text-white justify-center text-center drop-shadow-2xl"
            />

            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="max-w-5xl mx-auto text-3xl md:text-5xl text-slate-400 mb-24 leading-[1.1] font-bold tracking-tight"
            >
              The Architect of <span className="text-white text-gradient">Unbreakable</span> Global Digital Ecosystems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-16"
            >
              <MagneticButton 
                href="#projects"
                className="px-24 py-12 bg-white text-black rounded-[56px] font-black text-4xl transition-all hover:scale-105 active:scale-95 shadow-[0_50px_100px_rgba(255,255,255,0.2)] group"
              >
                DECODE WORKS <InfinityIcon className="w-12 h-12 group-hover:rotate-180 transition-transform duration-700" />
              </MagneticButton>
              <MagneticButton 
                href="https://github.com/TAJKING10" 
                target="_blank"
                className="px-24 py-12 glass rounded-[56px] font-black text-4xl transition-all text-white flex items-center justify-center gap-6 group border-white/20"
              >
                <Github className="w-12 h-12 group-hover:scale-125 transition-transform" /> GITHUB
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-500"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em]">Scroll to Explore</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-blue-600 to-transparent" />
          </motion.div>
        </section>

        {/* Bento Showcase */}
        <section id="projects" className="py-40 px-6 relative">
          <div className="max-w-[1400px] mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-40 text-center">
              <h2 className="text-7xl md:text-[10rem] font-black mb-12 tracking-tighter leading-[0.8] text-white">Curated <br />Works.</h2>
              <div className="h-4 w-60 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full mx-auto" />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {PROJECTS.map((project, idx) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={idx} 
                  onClick={() => setSelectedProject(project)} 
                  isLarge={idx === 0 || idx === 4}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline with Cinematic Feel */}
        <section id="experience" className="py-60 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-40">
              <h2 className="text-7xl md:text-[10rem] font-black mb-8 tracking-tighter text-white">Lineage.</h2>
            </div>
            
            <div className="space-y-40">
              {EXPERIENCES.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid md:grid-cols-12 gap-20 group relative"
                >
                  <div className="md:col-span-4 border-l-2 border-white/5 pl-10">
                    <span className="text-sm font-black text-blue-500 uppercase tracking-[0.6em] mb-6 block">{exp.period}</span>
                    <h3 className="text-5xl font-black text-white mb-6 tracking-tighter group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <p className="text-3xl font-bold text-slate-500">{exp.company}</p>
                  </div>
                  <div className="md:col-span-8 p-16 glass rounded-[64px] border border-white/5 group-hover:border-blue-500/20 transition-all hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)] bg-gradient-to-br from-white/[0.02] to-transparent">
                    <ul className="space-y-8">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-slate-300 text-xl leading-relaxed flex items-start gap-6 font-medium">
                          <Zap className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
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

        {/* The Grid / Stack */}
        <section id="skills" className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {SKILL_CATEGORIES.map((cat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -20, rotate: 1 }}
                  className="p-16 glass rounded-[64px] border border-white/5 hover:border-blue-500/30 transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Code className="w-32 h-32 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-12 text-white tracking-tighter">{cat.title}</h3>
                  <div className="flex flex-wrap gap-4">
                    {cat.skills.map((s, j) => (
                      <span key={j} className="px-6 py-3 rounded-2xl bg-white/5 text-xs text-slate-400 font-black border border-white/5 uppercase tracking-[0.2em] hover:bg-blue-600/10 hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default">{s}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GOD-TIER CTA */}
        <section id="contact" className="py-80 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="glass p-20 md:p-40 rounded-[100px] text-center border-white/10 shadow-[0_100px_200px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-2000" />
              <h2 className="text-7xl md:text-[14rem] font-black mb-24 tracking-tighter leading-[0.7] text-white">
                Evolve <br /> <span className="text-gradient">Together.</span>
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-24">
                <MagneticButton href="mailto:touficjandah@gmail.com" className="flex items-center gap-6 text-3xl font-black text-white group">
                  <Mail className="w-12 h-12 text-blue-500 group-hover:scale-125 transition-transform" /> EMAIL
                </MagneticButton>
                <MagneticButton href="https://www.linkedin.com/in/toufic-jandah-1ab9a4310/" target="_blank" className="flex items-center gap-6 text-3xl font-black text-white group">
                  <Linkedin className="w-12 h-12 text-blue-500 group-hover:scale-125 transition-transform" /> LINKEDIN
                </MagneticButton>
              </div>
              
              <MagneticButton 
                href="https://wa.me/37128103532" 
                target="_blank"
                className="inline-flex items-center gap-10 px-24 py-12 bg-white text-black rounded-[56px] font-black text-5xl shadow-[0_40px_100px_rgba(255,255,255,0.2)] group hover:scale-105 transition-all"
              >
                LET'S TALK <ArrowRight className="w-16 h-16 group-hover:translate-x-6 transition-transform" />
              </MagneticButton>
            </div>
          </div>
        </section>

        <footer className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-12 text-slate-500 text-sm font-black uppercase tracking-[0.5em]">
            <div className="flex items-center gap-4 text-blue-600">TJ / SYSTEMS ARCHITECT</div>
            <div>&copy; 2026 WORLDWIDE</div>
            <div className="px-8 py-4 glass rounded-full text-white">ENGINEERED FOR PERFECTION</div>
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
