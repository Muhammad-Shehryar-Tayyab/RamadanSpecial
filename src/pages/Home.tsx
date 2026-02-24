import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RamadanCountdown from '@/components/RamadanCountdown';
import QuranHadithCards from '@/components/QuranHadithCards';
import RamadanTracker from '@/components/RamadanTracker';
import SehriIftarTimings from '@/components/SehriIftarTimings';
import QuoteGenerator from '@/components/QuoteGenerator';
import DuaOfTheDay from '@/components/DuaOfTheDay';
import RamadanRoadmap from '@/components/RamadanRoadmap';
import AmbientSoundToggle from '@/components/AmbientSoundToggle';
import DailyReflectionPopup from '@/components/DailyReflectionPopup';
import StarParticles from '@/components/StarParticles';
import AuthorSection from '@/components/AuthorSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global Background Effects */}
      <StarParticles />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-radial from-primary/5 to-transparent pointer-events-none z-0" />

      {/* Main Content */}
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <HeroSection />
        
        <section className="container mx-auto px-4 space-y-32">
          {/* Spiritual Welcome Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-12 md:p-24 text-center max-w-5xl mx-auto space-y-8 overflow-hidden rounded-[3rem] border border-primary/10"
          >
            <div className="absolute inset-0 z-0 opacity-10">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_42b87014-5479-444a-9c11-9863d8040aff.jpg" 
                alt="Islamic geometric pattern" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary uppercase tracking-[0.2em] glow-gold">A Month of Reflection</h2>
              <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
              <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed font-serif italic max-w-3xl mx-auto">
                "Ramadan is a gift from Allah to cleanse our hearts and souls. It is a time for self-discipline, sacrifice, and empathy for those less fortunate."
              </p>
            </div>
          </motion.section>

          <RamadanRoadmap />
          
          <div id="countdown">
            <RamadanCountdown />
          </div>

          <QuranHadithCards />

          <RamadanTracker />

          <SehriIftarTimings />

          <DuaOfTheDay />

          <div id="wisdom">
            <QuoteGenerator />
          </div>
          
          <section className="py-20 text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary">
              <span className="text-xs uppercase font-bold tracking-[0.3em]">May your fasts be accepted</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-primary glow-gold uppercase">Ramzan Mubarak 2026</h2>
          </section>
        </section>
      </main>

      <AuthorSection />
      <Footer />
      <AmbientSoundToggle />
      <DailyReflectionPopup />
    </div>
  );
};

export default Home;
