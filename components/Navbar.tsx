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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-8">
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ${
        isScrolled ? 'glass px-10 py-5 rounded-[32px] shadow-2xl scale-[1.02]' : 'px-6 py-4'
      }`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-full blur-lg opacity-40 group-hover:opacity-100 transition duration-700 animate-pulse" />
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 ring-4 ring-white/5 shadow-2xl">
              <img src="/profile.jpg" alt="Toufic Jandah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-white">
              TOUFIC <span className="text-gradient">JANDAH</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-blue-500">Systems Architect</span>
          </div>
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all flex items-center gap-3 relative group"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] rounded-[20px] hover:bg-slate-200 transition-all flex items-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
          >
            <Cpu className="w-5 h-5 animate-spin-slow" />
            ENGAGE
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-4 glass rounded-2xl text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            className="absolute top-32 left-4 right-4 glass p-10 rounded-[40px] md:hidden flex flex-col gap-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-white/20"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black text-slate-300 hover:text-white flex items-center gap-6 group"
              >
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-blue-600 transition-all">
                  <link.icon className="w-6 h-6" />
                </div>
                {link.name.toUpperCase()}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-6 bg-white text-black text-center font-black text-2xl rounded-[28px] shadow-2xl"
            >
              ENGAGE SYSTEM
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
