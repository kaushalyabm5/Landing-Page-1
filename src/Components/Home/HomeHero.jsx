import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Terminal, Sparkles } from 'lucide-react';

const HomeHero = () => {
  // Framer Motion Animations Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#030303] overflow-hidden flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 lg:px-20 z-10 pointer-events-auto">
      
      {/* 💡 ANIMATION: Background Floating Glowing Orbs (Lenis එක්ක බ්ලොක් නොවෙන්න pointer-events-none) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-[15%] left-[20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-cyan-500/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Main Content Wrap */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10"
      >
        {/* 💡 BADGE: AI Status Badge with Shimmer / Pulse */}
        <motion.div 
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md mb-6"
        >
          <Sparkles size={13} className="text-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">AuraUI v1.0 AI Engine Live</span>
        </motion.div>

        {/* 💡 HEADLINE: Bold Text Reveal */}
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl"
        >
          Generate Premium <br />
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            React Components
          </span> with AI
        </motion.h1>

        {/* SUBHEADLINE */}
        <motion.p 
          variants={fadeInUp}
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed"
        >
          Write a prompt, get pixel-perfect Tailwind layouts instantly. Stop coding from scratch and build stunning SaaS interfaces in seconds.
        </motion.p>

        {/* 💡 CTA BUTTONS: Magnetic & Glow Hover effects */}
        <motion.div 
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 relative z-20 pointer-events-auto"
        >
          <button className="w-full sm:w-auto flex cursor-pointer items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-medium text-black rounded-xl text-[0.95rem] shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]">
            Start Generating Free
            <ArrowRight size={16} />
          </button>

          <button className="w-full sm:w-auto flex cursor-pointer items-center justify-center gap-2 px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 font-medium text-white rounded-xl text-[0.95rem] backdrop-blur-sm">
            <Play size={14} className="fill-white" />
            Watch Demo
          </button>
        </motion.div>

        {/* 💡 VISUAL INTERACTIVE MOCKUP: Dashboard Showcase with subtle 3D hover scale */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-20 w-full relative border border-white/10 rounded-2xl bg-zinc-950/40 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-1 md:p-2 group pointer-events-auto cursor-default"
        >
          {/* Top Window Bar (Mac Style) */}
          <div className="w-full flex items-center justify-between px-4 py-3 border-b border-white/5 bg-zinc-900/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <div className="flex items-center gap-2 px-4 py-1 bg-white/[0.02] border border-white/5 rounded-md text-[10px] font-mono text-zinc-500">
              <Terminal size={10} />
              <span>auraui-generator.tsx</span>
            </div>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Dummy Inside App Layout */}
          <div className="w-full bg-[#080809] aspect-[16/9] rounded-b-xl flex flex-col md:flex-row text-left overflow-hidden">
            {/* Mockup Left Prompt Input Bar */}
            <div className="w-full md:w-[35%] border-r border-white/5 p-5 flex flex-col justify-between bg-zinc-950/20">
              <div>
                <label className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">AI Prompt Input</label>
                <div className="w-full p-3 bg-white/[0.02] border border-white/5 rounded-lg text-xs font-mono text-zinc-300 leading-relaxed">
                  "Create a dark mode grid system dashboard for a crypto metrics app with interactive line charts and purple glowing badges..."
                </div>
              </div>
              <div className="mt-4 md:mt-0 w-full py-2 px-3 bg-cyan-500 text-black font-semibold text-xs rounded-md text-center flex items-center justify-center gap-1">
                <Sparkles size={12} /> Generating Code (98%)
              </div>
            </div>

            {/* Mockup Right Output UI Preview */}
            <div className="flex-1 p-6 flex items-center justify-center bg-[#0C0C0E] relative">
              <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 via-transparent to-transparent pointer-events-none" />
              
              {/* Dynamic Code Card Demo Generated inside mockup */}
              <div className="w-[85%] bg-zinc-900/50 border border-white/10 rounded-xl p-5 shadow-xl relative overflow-hidden backdrop-blur-md">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-12 h-2 rounded bg-zinc-700" />
                  <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/40 animate-ping" />
                </div>
                <div className="space-y-2">
                  <div className="w-full h-4 rounded bg-gradient-to-r from-zinc-700 to-zinc-800" />
                  <div className="w-[70%] h-3 rounded bg-zinc-800" />
                  <div className="w-[40%] h-2 rounded bg-zinc-800" />
                </div>
                <div className="mt-5 flex justify-end gap-2">
                  <div className="w-12 h-5 rounded bg-zinc-800" />
                  <div className="w-16 h-5 rounded bg-purple-600/40 border border-purple-500/30" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHero;