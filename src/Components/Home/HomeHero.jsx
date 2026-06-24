import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Terminal, Sparkles } from 'lucide-react';

const HomeHero = () => {
  // Framer Motion Animations Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id='home' className="relative w-full min-h-screen bg-[#030303] overflow-hidden flex items-center justify-center pt-32 pb-20 px-6 md:px-12 lg:px-20 z-10 pointer-events-auto">
      
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-[25%] left-[-5%] w-[380px] h-[380px] bg-cyan-500/[0.04] rounded-full blur-[110px]"
        />
        <motion.div 
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] bg-purple-600/[0.08] rounded-full blur-[130px]"
        />
      </div>

      {/* MAIN NEAT GRID CONTAINER */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center justify-center relative z-10 w-full"
      >
        
        {/* LEFT SIDE: CLEAN TEXT CONTENT & CTAs (OPTIMIZED FOR NEST HUB & HUB MAX) */}
        <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left justify-center w-full max-w-xl lg:max-w-full mx-auto lg:mx-0 relative z-10 h-full">
          
          {/* Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight text-white leading-[1.15] w-full max-w-full xl:max-w-[620px]"
          >
            Generate Premium
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent"> React Components</span> with AI
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-base sm:text-lg text-zinc-400 font-light leading-relaxed w-full max-w-xl"
          >
            Write a prompt, get pixel-perfect Tailwind layouts instantly. Stop coding from scratch and build stunning SaaS interfaces in seconds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto pointer-events-auto"
          >
            <button className="w-full sm:w-auto flex cursor-pointer items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-medium text-black rounded-xl text-[0.92rem] shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.35)] whitespace-nowrap">
              Start Generating Free
              <ArrowRight size={15} />
            </button>

            <button className="w-full sm:w-auto flex cursor-pointer items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all duration-300 font-medium text-white rounded-xl text-[0.92rem] backdrop-blur-sm whitespace-nowrap">
              <Play size={13} className="fill-white" />
              Watch Demo
            </button>
          </motion.div>

        </div>

        {/* RIGHT SIDE: COMPACT & CENTERED DASHBOARD MOCKUP */}
        <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end relative">
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.005 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-[540px] relative border border-white/5 rounded-xl bg-zinc-950/20 backdrop-blur-xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] p-1 group pointer-events-auto cursor-default z-10"
          >
            {/* Top Window Bar (Mac Style) */}
            <div className="w-full flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-zinc-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/10" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-0.5 bg-white/[0.01] border border-white/5 rounded-md text-[9px] font-mono text-zinc-500">
                <Terminal size={9} />
                <span>auraui-generator.tsx</span>
              </div>
              <div className="w-10" />
            </div>

            {/* Inside App Layout */}
            <div className="w-full bg-[#060607] aspect-[16/11] rounded-b-xl flex flex-col sm:flex-row text-left overflow-hidden">
              
              {/* Mockup Left Prompt Input Bar */}
              <div className="w-full sm:w-[40%] border-b sm:border-b-0 sm:border-r border-white/5 p-4 flex flex-col justify-between bg-zinc-950/10">
                <div>
                  <label className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest block mb-2 font-semibold">AI Prompt</label>
                  <div className="w-full p-3 bg-white/[0.01] border border-white/5 rounded-lg text-[10.5px] font-mono text-zinc-400 leading-relaxed">
                    "Create a dark mode grid dashboard with interactive metrics and purple glowing elements..."
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 w-full py-2 px-3 bg-cyan-500 text-black font-semibold text-[11px] rounded-md text-center flex items-center justify-center gap-1 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <Sparkles size={11} /> Generating (98%)
                </div>
              </div>

              {/* Mockup Right Output UI Preview */}
              <div className="flex-1 p-5 flex items-center justify-center bg-[#08080a] relative">
                <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Generated Card Inside Mockup */}
                <div className="w-[90%] bg-zinc-900/30 border border-white/5 rounded-xl p-4 shadow-xl relative overflow-hidden backdrop-blur-md">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-10 h-1.5 rounded bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500/20 border border-purple-500/40 animate-ping" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-3 rounded bg-gradient-to-r from-zinc-700 to-zinc-800" />
                    <div className="w-[75%] h-2.5 rounded bg-zinc-800" />
                    <div className="w-[45%] h-2 rounded bg-zinc-800" />
                  </div>
                  <div className="mt-4 flex justify-end gap-1.5">
                    <div className="w-9 h-4 rounded bg-zinc-800" />
                    <div className="w-14 h-4 rounded bg-purple-600/30 border border-purple-500/20" />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default HomeHero;