import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          // rounded-full දාලා සම්පූර්ණ රවුම් කළා, shadow එකෙන් ලස්සනක් ගත්තා
          className="fixed bottom-8 right-8 z-[100] w-12 h-12 flex items-center justify-center cursor-pointer rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 group"
        >
          {/* 🌈 GRADIENT BACKGROUND */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-500" />
          
          {/* ICON */}
          <div className="relative z-10 text-white">
            <FiArrowUp size={20} strokeWidth={3} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;