import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f3804462-a986-425d-b90b-b5f2115152ff.jpg"
          alt="Peaceful Ramadan night with glowing crescent moon and stars"
          className="w-full h-full object-cover opacity-30 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      {/* Glowing Moon / Icon */}
      <motion.div
        className="relative mb-8 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-secondary blur-3xl absolute -inset-4 opacity-30 animate-pulse-glow"
        />
        <svg
          viewBox="0 0 100 100"
          className="w-32 h-32 md:w-48 md:h-48 text-primary drop-shadow-[0_0_15px_rgba(247,208,129,0.5)]"
          fill="currentColor"
        >
          <path d="M50,10A40,40,0,1,0,90,50,40.1,40.1,0,0,1,50,10Z" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-3xl mx-auto z-10"
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-6 glow-gold tracking-tight">
          Ramadan Kareem
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 italic font-light">
          A Month of Light & Mercy
        </p>
        <p className="text-md md:text-lg text-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Embark on a spiritual journey of reflection, gratitude, and growth. May this blessed month bring peace to your heart and light to your home.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-primary/20 transition-all"
          onClick={() => {
            document.getElementById('tracker')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start Your Ramadan Journey
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-xs uppercase tracking-[0.2em] mb-2">Scroll to explore</p>
        <div className="w-[1px] h-12 bg-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
