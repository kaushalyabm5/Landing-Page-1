import React from 'react';
import { motion } from 'framer-motion';
// 💡 react-icons වලින් අයිකන්ස් Import කරගැනීම (Hi = Heroicons, Fi = Feather, Fa = FontAwesome)
import { HiSparkles } from 'react-icons/hi2';
import { FiArrowRight, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ]
  };

  return (
    <footer className="w-full bg-[#030303] relative z-10 pointer-events-auto border-t border-white/5 overflow-hidden">
      
      {/* 💡 1. FINAL CTA BANNER */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Ready to Accelerate <br />Your Workflow?
          </h2>
          <p className="text-sm text-zinc-400 font-light mb-8 max-w-md mx-auto">
            Join thousands of developers generating pixel-perfect React and Tailwind components instantly.
          </p>
          
          <button className="flex cursor-pointer items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-medium text-black rounded-xl text-[0.95rem] mx-auto shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]">
            Get Started for Free
            <FiArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      <hr className="border-white/[0.02] max-w-6xl mx-auto" />

      {/* 💡 2. MAIN FOOTER LINKS & BRANDING */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-4 items-start">
        
        <div className="col-span-2 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 select-none no-underline w-fit">
            <div className="w-7 h-7 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-md flex items-center justify-center">
              <HiSparkles size={14} className="text-black" />
            </div>
            <span className="text-base font-bold tracking-tight text-white">
              AuraUI<span className="text-cyan-400">.ai</span>
            </span>
          </a>
          <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-[200px]">
            AI-powered interface engine generating clean production-ready code.
          </p>
        </div>

        {/* Dynamic Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="col-span-1 flex flex-col gap-4 text-left">
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
              {category}
            </span>
            <ul className="space-y-2.5 p-0 m-0 list-none">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-zinc-500 hover:text-white transition-colors duration-200 no-underline font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Links */}
        <div className="col-span-1 flex flex-col gap-4 text-left">
          <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
            Socials
          </span>
          <div className="flex items-center gap-3.5 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors"><FiTwitter size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><FiGithub size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><FiLinkedin size={16} /></a>
          </div>
        </div>

      </div>

      {/* 💡 3. BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-white/[0.02] bg-black/20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-600">
          <span>&copy; {currentYear} AuraUI.ai Inc. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Developed & Designed By <span className="text-purple-500 animate-pulse">Kaushalya</span>
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;