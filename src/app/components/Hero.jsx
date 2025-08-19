'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background element for subtle texture/gradient */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(\'/images/street-art-bg.svg\')' }}></div>

      <div className="relative z-10 text-center p-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-extrabold uppercase tracking-widest mb-4"
        >
          Coming Soon
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-xl md:text-2xl font-medium"
        >
          Streetwear for the bold. Dropping soon.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;