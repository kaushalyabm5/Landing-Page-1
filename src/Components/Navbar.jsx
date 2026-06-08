import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 💡 FUNCTION: යූසර් පල්ලෙහාට ස්ක්‍රෝල් කරද්දී Navbar එකේ ස්ටයිල් එක වෙනස් කරන්න
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Main Navbar Container */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-12 lg:px-20 transition-all duration-300 z-50 pointer-events-auto ${
          isScrolled 
            ? 'bg-[#030303]/60 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* 💡 LOGO: AI Tech Style Logo with custom gradient text */}
        <a href="#" className="flex items-center gap-2 group select-none no-underline">
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Sparkles size={14} className="text-black fill-black" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-sans">
            AuraUI<span className="text-cyan-400">.ai</span>
          </span>
        </a>

        {/* 💡 DESKTOP LINKS: Muted clean text links with hover effect */}
        <div className="hidden md:flex items-center gap-8 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 no-underline relative py-1 group"
            >
              {link.name}
              {/* ලින්ක් එක උඩට මවුස් එක ගෙනිච්චම යටින් යන ලස්සන ඉර (Hover Line) */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* 💡 DESKTOP BUTTONS: CTA Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300 no-underline">
            Sign In
          </a>
          <button className="flex cursor-pointer items-center gap-1.5 px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-sm font-medium text-white rounded-xl backdrop-blur-sm group">
            Launch App
            <ArrowUpRight size={13} className="text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        {/* 📱 MOBILE MENU BUTTON */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-cyan-400 transition-colors p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* 📱 MOBILE OVERLAY MENU WITH ANIMATIONS */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full bg-[#030303]/95 backdrop-blur-2xl border-b border-white/5 z-40 flex flex-col px-6 py-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white no-underline border-b border-white/[0.02] pb-2"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                <a 
                  href="#login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 text-center no-underline py-2"
                >
                  Sign In
                </a>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold rounded-xl text-sm"
                >
                  Launch App
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;