import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'How it Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY < 80) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      {/* Main Navbar Container */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-full h-20 flex items-center justify-between px-6 md:px-12 lg:px-20 transition-all duration-300 z-50 pointer-events-auto ${
          isScrolled 
            ? 'bg-[#030303]/60 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 group select-none no-underline">
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Sparkles size={14} className="text-black fill-black" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-sans">
            AuraUI<span className="text-cyan-400">.ai</span>
          </span>
        </a>

        {/* DESKTOP LINKS (HIDDEN ON TABLETS & MOBILE) */}
        <div className="hidden lg:flex items-center gap-8 font-sans">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 no-underline relative py-1 px-2 ${
                  isActive ? 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(6,182,212,0.6)]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* DESKTOP BUTTONS (HIDDEN ON TABLETS & MOBILE) */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="#login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300 no-underline">
            Sign In
          </a>
          <button className="flex cursor-pointer items-center gap-1.5 px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-sm font-medium text-white rounded-xl backdrop-blur-sm group">
            Launch App
            <ArrowUpRight size={13} className="text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        {/* TABLET & MOBILE MENU BUTTON */}
        <div className="flex lg:hidden items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-cyan-400 transition-colors p-1 relative z-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE & TABLET OVERLAY MENU (FULL SCREEN & CENTERED) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-screen bg-[#030303]/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center px-6 lg:hidden overflow-hidden"
          >
            {/* Centered Content Wrapper */}
            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-medium no-underline tracking-wide transition-colors duration-200 text-center py-1 ${
                      isActive ? 'text-cyan-400 font-bold' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              
              {/* Centered Buttons Group */}
              <motion.div 
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center gap-6 pt-6 border-t border-white/10 w-full"
              >
                <a 
                  href="#login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-white text-center no-underline py-1"
                >
                  Sign In
                </a>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold rounded-xl text-base shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                >
                  Launch App
                  <ArrowUpRight size={16} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;