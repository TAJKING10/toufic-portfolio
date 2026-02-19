
import React from 'react';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import { PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-grid">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-xs font-medium text-slate-300 uppercase tracking-widest">Available for Enterprise Projects</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8">
            Building Intelligent <br />
            <span className="text-gradient">Digital Systems.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Full-Stack Developer specializing in AI-powered platforms, 
            enterprise fintech systems, and scalable infrastructure. Based in Riga.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
            >
              View My Work
            </a>
            <a 
              href="https://github.com/TAJKING10" 
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 rounded-xl font-bold transition-all"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Years Experience', val: '5+' },
            { label: 'Enterprises Served', val: '10+' },
            { label: 'AI Models Deployed', val: '25+' },
            { label: 'Tech Stack Apps', val: '40+' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 glass rounded-3xl group hover:border-blue-500/50 transition-colors">
              <div className="text-4xl font-bold mb-2 text-white group-hover:scale-110 transition-transform">{stat.val}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-slate-400">A selection of my most impactful enterprise and AI work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group glass rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all duration-500">
                <div className="aspect-video relative overflow-hidden bg-gray-900">
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      poster={project.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="flex-1 px-4 py-2.5 bg-white text-black font-bold rounded-xl text-sm hover:bg-slate-200 transition-colors">
                      Case Study
                    </button>
                    <button className="px-4 py-2.5 glass rounded-xl text-sm font-bold">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Professional Journey</h2>
            <p className="text-slate-400">My timeline across international trading and AI firms.</p>
          </div>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-white/10 py-2 group">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0B0F19] group-hover:scale-125 transition-transform" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-500 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 font-mono mt-1 md:mt-0">{exp.period}</div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Core Competencies</h2>
            <p className="text-slate-400">Advanced tools and frameworks powering my builds.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="p-8 glass rounded-3xl">
                <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, j) => (
                    <span key={j} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-slate-300 font-medium border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px] text-center border-blue-500/20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to collaborate?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            I'm currently open to senior full-stack roles and specialized AI implementation projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="mailto:touficjandah@gmail.com" className="text-xl font-bold hover:text-blue-500 transition-colors">
              touficjandah@gmail.com
            </a>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <a href="https://linkedin.com/in/toufic-jandah" target="_blank" className="text-xl font-bold hover:text-blue-500 transition-colors">
              LinkedIn Profile
            </a>
          </div>
          <button className="px-10 py-5 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-2xl font-black text-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all active:scale-95">
            LET'S TALK
          </button>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Toufic Jandah. Built with Next.js & Gemini AI.</p>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
