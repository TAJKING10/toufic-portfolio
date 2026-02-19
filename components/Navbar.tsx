
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LayoutGrid, Briefcase, Code, Send } from 'lucide-react';

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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'glass px-6 py-3 rounded-2xl' : 'px-4 py-2'
      }`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
              <img src="/profile.jpg" alt="Toufic Jandah" className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-tight text-white/90">
            Toufic <span className="text-gradient">Jandah</span>
          </span>
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-slate-400 hover:text-white transition-all flex items-center gap-2 relative group"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Send className="w-4 h-4" />
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass p-6 rounded-3xl md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-white flex items-center gap-4"
              >
                <div className="p-2 rounded-lg bg-white/5">
                  <link.icon className="w-5 h-5" />
                </div>
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 bg-white text-black text-center font-bold rounded-2xl"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
