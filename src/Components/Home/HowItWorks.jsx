import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Cpu, Terminal, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      icon: <MessageSquare size={18} />,
      title: "1. Describe Your Vision",
      subtitle: "Write a simple prompt",
      description: "Just type what you need in plain English. For example: 'A clean SaaS analytics dashboard with dark mode and purple neon borders.'",
      mockupType: "input"
    },
    {
      id: 1,
      icon: <Cpu size={18} />,
      title: "2. AI Engine Magic",
      subtitle: "Instant structural processing",
      description: "Our AuraUI Neural Engine processes your layout hierarchy, structures responsive classes, and generates clean Tailwind utility code within 0.4s.",
      mockupType: "processing"
    },
    {
      id: 2,
      icon: <Terminal size={18} />,
      title: "3. Copy & Deploy",
      subtitle: "Production-ready export",
      description: "Review the live interactive preview, tweak elements if needed, and instantly copy clean React/Tailwind code straight to your clipboard.",
      mockupType: "output"
    }
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#030303] py-24 px-6 md:px-12 lg:px-20 relative z-10 pointer-events-auto border-t border-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            From Prompt to Code <br />in Three Easy Steps
          </h2>
          <p className="text-sm text-zinc-400 font-light">
            No complex configurations. No messy templates. Just pure AI generation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Steps Selection (Interactive Buttons) */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer flex gap-4 text-left select-none ${
                    isActive 
                      ? 'bg-white/[0.02] border-white/10 shadow-lg' 
                      : 'bg-transparent border-transparent hover:bg-white/[0.01]'
                  }`}
                >
                  {/* Active Indicator background slide effect */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeStepIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent rounded-xl border-l-2 border-cyan-400 pointer-events-none"
                    />
                  )}

                  {/* Step Icon */}
                  <div className={`p-3 rounded-lg h-fit border transition-colors ${
                    isActive ? 'bg-cyan-500 text-black border-cyan-400' : 'bg-zinc-900 text-zinc-400 border-white/5'
                  }`}>
                    {step.icon}
                  </div>

                  {/* Step Texts */}
                  <div>
                    <h3 className={`text-base font-semibold transition-colors ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 mt-0.5">{step.subtitle}</p>
                    <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Dynamic Visual Mockup Component */}
          <div className="lg:col-span-7 bg-[#080809] border border-white/5 rounded-2xl aspect-[16/10] p-6 relative overflow-hidden shadow-2xl flex flex-col justify-center items-center">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-radial-gradient from-cyan-500/5 via-transparent to-transparent opacity-50" />

            <AnimatePresence mode="wait">
              {/* STEP 01 MOCKUP: Input Prompt */}
              {activeStep === 0 && (
                <motion.div
                  key="input-mockup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md bg-zinc-900/40 border border-white/5 rounded-xl p-5 backdrop-blur-sm"
                >
                  <div className="w-full h-8 border-b border-white/5 flex items-center mb-4 text-[11px] font-mono text-zinc-500">
                    💡 User Prompt Interface
                  </div>
                  <div className="text-sm font-mono text-white p-3 bg-black/40 rounded-lg border border-white/5 min-h-[80px] relative">
                    Create a clean SaaS analytics dashboard with dark mode and purple neon borders.
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-1.5 h-4 bg-cyan-400 ml-1 translate-y-0.5"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 02 MOCKUP: AI Processing Loader */}
              {activeStep === 1 && (
                <motion.div
                  key="processing-mockup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  {/* Rotating AI Ring */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-cyan-500/40 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      className="absolute inset-2 border border-purple-500 rounded-full border-t-transparent"
                    />
                    <Cpu size={20} className="text-white animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">AuraUI Neural Engine</p>
                    <p className="text-xs text-zinc-500 mt-1">Analyzing tokens & generating styles...</p>
                  </div>
                </motion.div>
              )}

              {/* STEP 03 MOCKUP: Output Code Success */}
              {activeStep === 2 && (
                <motion.div
                  key="output-mockup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-sm bg-zinc-900/40 border border-white/5 rounded-xl p-5 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1">Code Generated Successfully</h4>
                  <p className="text-xs text-zinc-400 mb-5 font-light">128 lines of React & Tailwind code copied.</p>
                  
                  {/* Fake Code lines snippet */}
                  <div className="w-full p-3 bg-black/40 border border-white/5 rounded-lg text-left font-mono text-[10px] text-zinc-500 space-y-1">
                    <div><span className="text-purple-400">const</span> Dashboard = () =&gt; &#123;</div>
                    <div className="pl-4"><span className="text-cyan-400">return</span> (</div>
                    <div className="pl-8 text-yellow-600">&lt;<span className="text-yellow-500">div</span> className=<span className="text-green-500">"bg-zinc-950 p-6 shadow-neon"</span>&gt;</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;