import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { Github, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Background from './components/Background';
import Preloader from './components/Preloader';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from './constants';
import { Project } from './types';

const base = import.meta.env.BASE_URL;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.categories.includes(filter));

  const categories = ['All', 'Site', 'App', 'Python AI'];

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-blue-500/20 overflow-x-hidden relative bg-[#020617] text-slate-200">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <Background />
      
      <motion.div className="fixed top-0 left-0 right-0 h-px bg-blue-500/30 z-[100] origin-left" style={{ scaleX }} />
      
      <Navbar />
      
      <main className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-7xl mx-auto text-center relative z-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="mb-10 relative inline-block"
            >
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={`${base}profile.jpg`} alt="Toufic Jandah" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <div className="flex flex-col items-center gap-4 mb-10">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1] text-white text-center max-w-5xl">
                Full Stack <span className="text-slate-500">&</span><br />
                <span className="text-blue-500">Product</span> Developer
              </h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 mb-12 leading-relaxed font-medium px-4"
            >
              Building high-performance digital products with a focus on clean architecture, 
              scalable systems, and premium user experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 px-6"
            >
              <a 
                href="#projects"
                className="px-10 py-4 rounded-full font-bold text-sm bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg"
              >
                VIEW PROJECTS
              </a>
              <a 
                href={`${base}Toufic-Jandah CV.pdf`}
                download
                className="px-10 py-4 rounded-full font-bold text-sm bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-all"
              >
                DOWNLOAD CV
              </a>
              <a 
                href="https://github.com/TAJKING10" 
                target="_blank"
                className="px-10 py-4 rounded-full font-bold text-sm bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GITHUB
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Projects</h2>
                <p className="text-slate-500 text-sm tracking-wide">A collection of digital products and experiments.</p>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-full border border-white/10 w-fit">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full text-[11px] font-bold transition-all duration-300 ${
                      filter === cat 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            
            <motion.div 
              layout
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 min-h-[600px]"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredProjects.map((project, idx) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={idx} 
                    onClick={() => setSelectedProject(project)} 
                    isLarge={false} 
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 px-6 bg-slate-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white text-center">Experience</h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-2xl hover:bg-white/[0.02] transition-all border border-transparent hover:border-white/5"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors">{exp.role}</h3>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-6">{exp.company} — {exp.location}</p>
                  <ul className="space-y-3">
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-slate-500 text-sm leading-relaxed flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-blue-500/30 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-32 md:py-48 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">
              Ready to build something <span className="text-blue-500">exceptional?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:touficjandah@gmail.com" 
                className="px-10 py-5 rounded-full font-bold text-base bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-xl"
              >
                GET IN TOUCH
              </a>
              <a 
                href="https://www.linkedin.com/in/toufic-jandah-1ab9a4310/" 
                target="_blank"
                className="px-10 py-5 rounded-full font-bold text-base bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all"
              >
                LINKEDIN
              </a>
              <a 
                href="https://wa.me/37128103532" 
                target="_blank"
                className="px-10 py-5 rounded-full font-bold text-base bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WHATSAPP
              </a>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <div>TJ / FULL STACK & PRODUCT DEV</div>
            <div className="opacity-60">&copy; 2026 TOUFIC JANDAH</div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/TAJKING10" target="_blank" className="hover:text-white transition-colors">GITHUB</a>
              <a href="https://www.linkedin.com/in/toufic-jandah-1ab9a4310/" target="_blank" className="hover:text-white transition-colors">LINKEDIN</a>
            </div>
          </div>
        </footer>
      </main>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
