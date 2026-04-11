import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScrollToSection = (e, sectionId) => {
    if (window.location.pathname === '/' || window.location.hash) {
      e.preventDefault();
      window.history.pushState(null, '', '/');
    }
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Brand */}
        <Link to="/" className="group flex items-center justify-center relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-slate-800 to-black border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/10 to-transparent group-hover:from-cyan-400/50 group-hover:via-purple-500/30 transition-all duration-500 blur-[2px]" />
          
          <span className="relative z-10 text-2xl md:text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 group-hover:from-white group-hover:via-cyan-200 group-hover:to-cyan-400 transition-all duration-500 transform group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            DP
          </span>
        </Link>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to="/"
              onClick={(e) => handleScrollToSection(e, link.id)}
              className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 font-medium tracking-wide cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Resume Button & Mobile Trigger */}
        <div className="flex items-center gap-6">
          <Link
            to="/resume"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-sm font-bold text-white hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5 group border border-blue-500/30"
          >
            <Download size={18} className="group-hover:scale-110 transition-transform" />
            <span>Download Resume</span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to="/"
                  onClick={(e) => handleScrollToSection(e, link.id)}
                  className="text-xl text-gray-300 hover:text-neon-cyan transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/resume"
                className="w-[90%] mx-auto flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-white font-bold text-lg shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] mt-2 border border-blue-500/30"
                onClick={() => setIsOpen(false)}
              >
                <Download size={20} />
                Download Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
