
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-violet-600 flex items-center justify-center font-bold text-white">
            TJ
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-tight">Toufic Jandah</span>
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
