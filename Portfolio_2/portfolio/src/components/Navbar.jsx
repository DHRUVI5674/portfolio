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
    { name: 'Hackathons', id: 'hackathons' },
    { name: 'Education', id: 'education' },
    { name: 'LeetCode', id: 'leetcode' },
    { name: 'Contact', id: 'contact' },
  ];

  // Smoothly scroll to a section and update the URL cleanly (no hash)
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    // Update URL with a clean path (e.g. /about) instead of a hash
    const newPath = id === 'hero' ? '/' : '/' + id;
    history.pushState(null, '', newPath);
    // Notify ScrollSpy to pause briefly
    window.dispatchEvent(new CustomEvent('navclick', { detail: id }));
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Brand — click to scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center justify-center relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-slate-800 to-black border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/10 to-transparent group-hover:from-cyan-400/50 group-hover:via-purple-500/30 transition-all duration-500 blur-[2px]" />
          <span className="relative z-10 text-2xl md:text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 group-hover:from-white group-hover:via-cyan-200 group-hover:to-cyan-400 transition-all duration-500 transform group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            DP
          </span>
        </button>

        {/* Right: Desktop Menu & Mobile Trigger */}
        <div className="flex items-center ml-auto">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={`/${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium tracking-wide cursor-pointer no-underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

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
                  to={`/${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-xl text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer no-underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
