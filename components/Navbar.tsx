
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
            <img src="/profile.jpg" alt="Toufic Jandah" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-tight text-white">Toufic Jandah</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-slate-200 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
