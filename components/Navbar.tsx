import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const base = import.meta.env.BASE_URL;

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
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 transition-all duration-500">
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/50 backdrop-blur-md px-8 py-4 rounded-full border border-white/5 shadow-2xl' : 'px-4 py-2'
      }`}>
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
            <img src={`${base}profile.jpg`} alt="Toufic Jandah" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tighter text-white">
              TOUFIC <span className="text-slate-500">JANDAH</span>
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-blue-500">
              Full Stack & Product Dev
            </span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:touficjandah@gmail.com" 
            className="px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-slate-200 transition-all shadow-lg"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-slate-900 border border-white/10 p-10 rounded-3xl md:hidden flex flex-col gap-8 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-300 hover:text-white"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            <a 
              href="mailto:touficjandah@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-5 bg-white text-black text-center font-bold text-lg rounded-full"
            >
              LET'S TALK
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
