
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
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
  Briefcase
} from 'lucide-react';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import ProjectModal from './components/ProjectModal';
import { PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-grid selection:bg-blue-500/30 overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-40 px-6 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full -z-10 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full -z-10 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/5 blur-[120px] rounded-full -z-10 animate-pulse delay-700" />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto flex flex-col items-center relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
            className="relative mb-14 group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-violet-600 to-pink-600 rounded-full blur-[20px] opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300 animate-spin-slow" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white/5 shadow-[0_0_80px_rgba(59,130,246,0.2)]">
              <img 
                src="/profile.jpg" 
                alt="Toufic Jandah" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-slate-200"
            >
              <Sparkles className="w-8 h-8 text-blue-600" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-12 backdrop-blur-md"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-xs font-black text-slate-300 uppercase tracking-[0.25em]">Available for Global Architecture 2026</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            className="text-7xl md:text-[10rem] font-black tracking-tighter mb-12 text-center leading-[0.85] text-white"
          >
            Design <br />
            <span className="text-gradient">Engineered.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-4xl mx-auto text-xl md:text-3xl text-slate-400 mb-16 leading-tight text-center font-medium tracking-tight"
          >
            Senior Full-Stack Architect specialized in <span className="text-white">enterprise-grade AI ecosystems</span>, 
            high-scale API infrastructure, and precision digital banking.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-12 py-6 bg-white text-black rounded-3xl font-black text-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 shadow-[0_30px_60px_rgba(255,255,255,0.1)] group"
            >
              PROJECT PORTFOLIO
              <Rocket className="w-6 h-6 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
            </a>
            <a 
              href="https://github.com/TAJKING10" 
              target="_blank"
              className="w-full sm:w-auto px-12 py-6 glass hover:bg-white/10 rounded-3xl font-black text-xl transition-all text-white flex items-center justify-center gap-4 group border-white/20"
            >
              <Github className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              OPEN SOURCE
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="py-10 border-y border-white/5 bg-black/20 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...SKILL_CATEGORIES[0].skills, ...SKILL_CATEGORIES[1].skills, ...SKILL_CATEGORIES[5].skills].map((skill, i) => (
            <div key={i} className="flex items-center mx-10 gap-4">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="text-3xl font-black text-white/20 uppercase tracking-tighter hover:text-white transition-colors cursor-default">{skill}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[...SKILL_CATEGORIES[0].skills, ...SKILL_CATEGORIES[1].skills, ...SKILL_CATEGORIES[5].skills].map((skill, i) => (
            <div key={i+100} className="flex items-center mx-10 gap-4">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="text-3xl font-black text-white/20 uppercase tracking-tighter hover:text-white transition-colors cursor-default">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: 'Experience', val: '4+', icon: Briefcase },
            { label: 'Ecosystems', val: '12+', icon: Globe },
            { label: 'Custom APIs', val: '60+', icon: Cpu },
            { label: 'Global Users', val: '1M+', icon: Layers },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-12 glass rounded-[48px] group hover:border-blue-500/50 transition-all hover:translate-y-[-12px] relative"
            >
              <div className="absolute top-6 left-1/2 -translate-x-1/2 p-3 bg-white/5 rounded-2xl group-hover:bg-blue-600 transition-colors">
                <stat.icon className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </div>
              <div className="text-6xl font-black mb-4 text-white text-gradient mt-8">{stat.val}</div>
              <div className="text-xs text-slate-500 font-black uppercase tracking-[0.3em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-6xl md:text-[8rem] font-black mb-8 tracking-tighter leading-[0.8] text-white">The <br />Showcase.</h2>
              <div className="h-2 w-32 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full" />
            </div>
            <p className="max-w-md text-xl text-slate-400 font-medium leading-relaxed md:mb-4">
              A curated selection of production-grade systems engineered for high performance and global scale.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
                onClick={() => setSelectedProject(project)}
                className="group relative glass rounded-[56px] overflow-hidden hover:border-blue-500/40 transition-all duration-700 cursor-pointer flex flex-col h-full ring-1 ring-white/10"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-900">
                  {project.videoUrls && project.videoUrls.length > 0 ? (
                    <video
                      src={project.videoUrls[0]}
                      poster={project.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  <div className="absolute top-8 right-8">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="p-5 bg-white/10 backdrop-blur-xl rounded-[24px] border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-xl bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-12 flex flex-col flex-1">
                  <h3 className="text-4xl font-black mb-6 group-hover:text-blue-400 transition-colors tracking-tight text-white">{project.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-10 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-500">
                          {t}
                        </span>
                      ))}
                    </div>
                    <motion.span 
                      whileHover={{ x: 5 }}
                      className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] flex items-center gap-2"
                    >
                      EXPLORE <ChevronRight className="w-5 h-5" />
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-40 px-6 relative bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-white">Journey.</h2>
            <p className="text-2xl text-slate-400 font-medium tracking-tight">An international trajectory of engineering excellence.</p>
          </motion.div>
          
          <div className="space-y-24 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-24 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
              >
                <div className={`hidden md:block ${i % 2 === 0 ? 'col-start-1' : 'col-start-2'}`}>
                  <h3 className="text-4xl font-black text-white mb-3 tracking-tight">{exp.role}</h3>
                  <p className="text-2xl font-bold text-blue-500 mb-6">{exp.company}</p>
                  <div className="inline-block text-xs font-black text-slate-500 uppercase tracking-[0.3em] px-4 py-2 bg-white/5 rounded-xl">{exp.period}</div>
                </div>
                
                <div className="absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 top-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#030712] z-10 shadow-[0_0_20px_rgba(37,99,235,1)]" />
                
                <div className={`md:hidden ${i % 2 === 0 ? 'col-start-1' : 'col-start-2'}`}>
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{exp.role}</h3>
                  <p className="text-xl font-bold text-blue-500 mb-3">{exp.company}</p>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-8">{exp.period}</div>
                </div>

                <div className={`p-10 glass rounded-[48px] group hover:border-blue-500/40 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${i % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}>
                  <ul className="space-y-6">
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-slate-400 text-base leading-relaxed flex items-start gap-4 font-medium">
                        <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
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

      {/* Skills Section */}
      <section id="skills" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-white">The Stack.</h2>
            <p className="text-2xl text-slate-400 font-medium tracking-tight">Precision-engineered tools for modern infrastructure.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {SKILL_CATEGORIES.map((cat, i) => {
              const icons = [Terminal, Server, Database, ShieldCheck, Zap, Layers, Layout];
              const Icon = icons[i % icons.length];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-12 glass rounded-[56px] group hover:border-blue-500/40 transition-all flex flex-col relative ring-1 ring-white/10"
                >
                  <div className="w-16 h-16 bg-blue-600/10 rounded-3xl flex items-center justify-center mb-10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon className="w-8 h-8 text-blue-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-10 text-white tracking-tight">{cat.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {cat.skills.map((s, j) => (
                      <span key={j} className="px-5 py-2.5 rounded-2xl bg-white/5 text-xs text-slate-300 font-black border border-white/5 transition-all hover:bg-white/10 hover:border-blue-500/30">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 rounded-[80px] blur-[30px] opacity-10 group-hover:opacity-30 transition duration-1000" />
          <div className="relative glass p-12 md:p-32 rounded-[80px] text-center border-white/10 overflow-hidden ring-1 ring-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
            <div className="absolute -top-10 -right-10 p-20 opacity-5">
              <MessageSquare className="w-96 h-96 text-white" />
            </div>
            
            <h2 className="text-6xl md:text-[10rem] font-black mb-12 tracking-tighter leading-[0.8] text-white">
              Let's build <br />
              <span className="text-gradient">the Future.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-400 mb-20 max-w-3xl mx-auto font-medium tracking-tight">
              Available for high-impact engineering leadership and strategic digital transformation.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-14 mb-24 font-black">
              {[
                { label: 'Email', val: 'touficjandah@gmail.com', href: 'mailto:touficjandah@gmail.com', icon: Mail },
                { label: 'LinkedIn', val: 'Connect', href: 'https://www.linkedin.com/in/toufic-jandah-1ab9a4310/', icon: Linkedin },
                { label: 'GitHub', val: 'Follow', href: 'https://github.com/TAJKING10', icon: Github },
              ].map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target="_blank"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-all group/link"
                >
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover/link:bg-blue-600 group-hover/link:border-blue-500 transition-all">
                    <link.icon className="w-7 h-7 text-blue-500 group-hover/link:text-white" />
                  </div>
                  <span className="text-2xl tracking-tighter">{link.val}</span>
                </a>
              ))}
            </div>
            
            <motion.a 
              href="https://wa.me/37128103532" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-6 px-16 py-8 bg-white text-black rounded-[32px] font-black text-3xl hover:shadow-[0_40px_80px_rgba(255,255,255,0.25)] transition-all group shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              INITIATE CONTACT
              <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      <footer className="py-24 border-t border-white/5 text-center relative bg-black/40">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center font-black text-2xl text-blue-500 ring-1 ring-white/20">TJ</div>
            <div className="text-left">
              <p className="text-white font-black uppercase tracking-[0.2em] mb-1">Toufic Jandah</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">&copy; 2026 Engineering Portfolio</p>
            </div>
          </div>
          <div className="flex gap-12">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.4em]">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.4em]">Terms</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.4em]">Security</a>
          </div>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] px-6 py-3 border border-white/5 rounded-full">Built for the Global Web</p>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      <AIAssistant />
    </div>
  );
};

export default App;
