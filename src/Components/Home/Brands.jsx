import React from 'react';
import { motion } from 'framer-motion';

const Brands = () => {
  // ලෝක ප්‍රසිද්ධ සන්නාම (SVGs මඟින් පිරිසිදුව නිමවා ඇත)
  const brandsData = [
    { name: "Vercel", svg: <path d="M24 4L44 38H4L24 4Z" fill="currentColor" /> },
    { name: "Stripe", svg: <path d="M20 18.5c0-2.2 1.8-3.5 4.3-3.5 3.1 0 5.6 1.1 5.6 1.1l.8-4.2s-2.5-.9-5.4-.9c-5.8 0-9.8 3.1-9.8 8.4 0 5.8 5.2 7 8.6 8 3 .9 4.3 1.7 4.3 3.4 0 1.9-1.9 3.2-4.7 3.2-3.6 0-6.5-1.5-6.5-1.5l-.9 4.4s2.9 1.3 6.4 1.3c6 0 10.4-2.9 10.4-8.4.1-6-5.2-7.3-8.8-8.3z" fill="currentColor" /> },
    { name: "Supabase", svg: <path d="M24 2L6 26h14L12 46l26-28H24l8-16z" fill="currentColor" /> },
    { name: "Linear", svg: <path d="M12 4h24v6H12zM12 18h24v6H12zM12 32h24v6H12z" fill="currentColor" /> },
    { name: "GitHub", svg: <path fillRule="evenodd" clipRule="evenodd" d="M22 4C12 4 4 12 4 22c0 8 5.2 14.8 12.4 17.2.9.2 1.2-.4 1.2-.9v-3.1c-5 1.1-6.1-2.4-6.1-2.4-.8-2.1-2-2.7-2-2.7-1.6-1.1.1-1.1.1-1.1 1.8.1 2.8 1.9 2.8 1.9 1.6 2.8 4.2 2 5.3 1.5.2-1.2.7-2 1.2-2.4-4-2.1-8.2-2.5-8.2-9.3 0-1.9.7-3.5 1.8-4.8-.2-.5-.8-2.3.2-4.8 0 0 1.5-.5 4.9 1.8 1.4-.4 3-.6 4.5-.6s3.1.2 4.5.6c3.4-2.3 4.9-1.8 4.9-1.8 1 2.5.4 4.3.2 4.8 1.1 1.3 1.8 2.9 1.8 4.8 0 6.8-4.2 7.2-8.2 9.3.6.5 1.2 1.6 1.2 3.2v4.8c0 .5.3 1.1 1.2.9C38.8 36.8 44 30 44 22c0-10-8-18-18-18z" fill="currentColor" /> },
  ];

  // ලූපය නොනැවතී දිවීම සඳහා Array එක දෙගුණ කිරීම
  const duplicatedBrands = [...brandsData, ...brandsData, ...brandsData];

  return (
    <section className="w-full bg-[#030303] py-12 border-b border-white/[0.03] overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* කුඩා හැඳින්වීම */}
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-20">
          TRUSTED BY DEVELOPERS AT WORLD'S BEST TEAMS
        </p>

        {/* 🌟 Infinite Marquee Container (දෙපැත්තෙන්ම ලස්සනට Fade වෙන Mask එකක් දමා ඇත) */}
        <div className="w-full relative flex overflow-x-hidden">
          
          <motion.div 
            className="flex space-x-16 md:space-x-24 items-center whitespace-nowrap min-w-full"
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              ease: "linear",
              duration: 20, // වේගය අඩු වැඩි කිරීමට තත්පර ගණන වෙනස් කරන්න
              repeat: Infinity,
            }}
          >
            {duplicatedBrands.map((brand, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors duration-300 cursor-default select-none"
              >
                <svg 
                  viewBox="0 0 48 48" 
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  {brand.svg}
                </svg>
                <span className="text-base md:text-lg font-semibold font-sans tracking-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Brands;