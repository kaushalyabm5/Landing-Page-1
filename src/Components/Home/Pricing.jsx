import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out AuraUI and building small hobby projects.",
      features: [
        "10 AI generations per month",
        "Export to React & Tailwind CSS",
        "Standard generation speed (2.0s)",
        "Community support"
      ],
      isPopular: false,
      buttonText: "Start for Free",
      borderClass: "border-white/5 bg-zinc-950/40"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professional developers and designers who need speed and scale.",
      features: [
        "Unlimited AI generations",
        "Export to Next.js, Vue, and Nuxt",
        "Sub-second speed (0.4s)",
        "Advanced interactive elements",
        "Priority Email support",
        "Access to premium components library"
      ],
      isPopular: true,
      buttonText: "Upgrade to Pro",
      borderClass: "border-cyan-500/30 bg-zinc-950/80 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "Built for agencies and teams requiring custom components and seats.",
      features: [
        "Everything in Pro plan",
        "Unlimited team seats",
        "Custom AI model fine-tuning",
        "Dedicated account manager",
        "99.9% Uptime SLA",
        "Custom code style configurations"
      ],
      isPopular: false,
      buttonText: "Contact Sales",
      borderClass: "border-white/5 bg-zinc-950/40"
    }
  ];

  return (
    <section id="pricing" className="w-full bg-[#030303] py-16 md:py-24 px-6 lg:px-20 relative z-10 border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs font-mono tracking-widest text-purple-400 uppercase block mb-3">
            Flexible Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            Transparent Pricing <br className="hidden md:block" />for Every Developer
          </h2>
        </div>

        {/* Pricing Cards Container */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // w-full (Mobile), md:w-[46%] (Tablet), lg:w-[30%] (Desktop) - හැම කාඩ් එකක්ම සමානයි
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col justify-between border backdrop-blur-md transition-all duration-300 w-full md:w-[46%] lg:w-[30%] ${plan.borderClass}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold flex items-center gap-1 shadow-md whitespace-nowrap">
                  <Sparkles size={10} className="fill-black" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-medium text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-zinc-400 font-light min-h-[3rem] mb-6">{plan.description}</p>
                
                <div className="flex items-baseline text-white mb-6">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-xs text-zinc-500 font-mono ml-2">/ {plan.period}</span>
                </div>

                <hr className="border-white/5 mb-6" />

                <ul className="space-y-3.5 mb-8 text-left">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-xs text-zinc-300 font-light">
                      <span className={`p-0.5 rounded-full mt-0.5 shrink-0 ${plan.isPopular ? 'bg-cyan-500/10 text-cyan-400' : 'bg-zinc-900 text-zinc-500'}`}>
                        <Check size={12} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:from-cyan-400 hover:to-blue-500 shadow-[0_4px_20px_rgba(6,182,212,0.2)]'
                    : 'bg-white/[0.03] text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;