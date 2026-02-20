import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LayoutGrid, Briefcase, Code, Send, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', icon: LayoutGrid },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-8">
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ${
        isScrolled ? 'glass px-10 py-5 rounded-[40px] shadow-2xl scale-[1.02]' : 'px-8 py-6'
      }`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-5 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-full blur-xl opacity-40 group-hover:opacity-100 transition duration-700 animate-pulse" />
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 ring-4 ring-white/5 shadow-2xl">
              <img src="/profile.jpg" alt="Toufic Jandah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter text-white">
              TOUFIC <span className="text-gradient">JANDAH</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Systems Architect
            </span>
          </div>
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-14">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-all flex items-center gap-3 relative group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.3em] rounded-[24px] hover:bg-slate-200 transition-all flex items-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
          >
            <Cpu className="w-5 h-5 animate-spin-slow" />
            INITIATE
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-5 glass rounded-3xl text-white shadow-2xl border-white/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            className="absolute top-40 left-6 right-6 glass p-12 rounded-[50px] md:hidden flex flex-col gap-10 shadow-[0_40px_100px_rgba(0,0,0,0.95)] border border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black text-slate-300 hover:text-white flex items-center gap-8 group"
              >
                <div className="p-5 rounded-3xl bg-white/5 group-hover:bg-blue-600 transition-all shadow-xl">
                  <link.icon className="w-8 h-8" />
                </div>
                {link.name.toUpperCase()}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-8 bg-white text-black text-center font-black text-2xl rounded-[32px] shadow-2xl hover:bg-slate-200 transition-all"
            >
              INITIATE PROTOCOL
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
