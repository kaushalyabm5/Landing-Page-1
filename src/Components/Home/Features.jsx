import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Shield, Cpu, Layers } from 'lucide-react';

const Features = () => {
  // 💡 Animations Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const bentoItems = [
    {
      id: 1,
      icon: <Zap className="text-cyan-400" size={24} />,
      title: "Sub-Second Generation",
      description: "Our advanced AI models process your layout prompts in less than 0.4 seconds. Pure speed, no lag.",
      className: "md:col-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-950/20",
      badge: "Lightning Fast"
    },
    {
      id: 2,
      icon: <Code className="text-purple-400" size={24} />,
      title: "Tailwind CSS Clean Code",
      description: "Get production-ready, semantic, and pixel-perfect code that fits directly into your project structure.",
      className: "md:col-span-1 bg-zinc-950/40",
      badge: "Pure Code"
    },
    {
      id: 3,
      icon: <Cpu className="text-indigo-400" size={24} />,
      title: "Framework Agnostic",
      description: "Export instantly to React, Next.js, Vue, or raw HTML with full TypeScript support built-in.",
      className: "md:col-span-1 bg-zinc-950/40",
      badge: "Multi-Framework"
    },
    {
      id: 4,
      icon: <Layers className="text-pink-400" size={24} />,
      title: "Interactive Live Previews",
      description: "Don't just copy code. Test responsiveness, dark mode toggles, and UI interactions directly inside the builder before downloading.",
      className: "md:col-span-2 bg-gradient-to-bl from-zinc-900/80 to-zinc-950/20",
      badge: "Smart Preview"
    }
  ];

  return (
    <section id="features" className="w-full bg-[#030303] py-20 px-6 md:px-12 lg:px-20 relative z-10 pointer-events-auto">
      <div className="max-w-6xl mx-auto">
        
        {/* ========================================================
            🤝 1. SOCIAL PROOF SECTION (TRUST LOGOS)
            ======================================================== */}
        <div className="text-center mb-32">
          <p className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mb-8">
            Trusted by developers at world-class companies
          </p>
          {/* Muted Text-based Logos for premium look */}
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-40 grayscale group">
            <span className="text-xl font-bold font-sans tracking-tight text-white hover:opacity-100 transition-opacity duration-300 cursor-default">Stripe</span>
            <span className="text-xl font-semibold font-mono tracking-tighter text-white hover:opacity-100 transition-opacity duration-300 cursor-default">▲ Vercel</span>
            <span className="text-xl font-bold font-sans text-white hover:opacity-100 transition-opacity duration-300 cursor-default">OpenAI</span>
            <span className="text-xl font-medium font-mono text-white hover:opacity-100 transition-opacity duration-300 cursor-default">supabase</span>
            <span className="text-xl font-semibold font-sans tracking-tight text-white hover:opacity-100 transition-opacity duration-300 cursor-default">Linear</span>
          </div>
        </div>

        {/* ========================================================
            🍱 2. CORE FEATURES SECTION (BENTO GRID)
            ======================================================== */}
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-3">
            Intelligent Features
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
            Everything you need to ship <br />interfaces in record time.
          </h2>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`relative border border-white/5 rounded-2xl p-8 overflow-hidden shadow-xl hover:border-white/10 transition-all duration-300 group ${item.className}`}
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/[0.01] to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Card Header Content */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl shadow-inner">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 border border-white/5 bg-white/[0.01] px-2.5 py-1 rounded-md uppercase">
                  {item.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;