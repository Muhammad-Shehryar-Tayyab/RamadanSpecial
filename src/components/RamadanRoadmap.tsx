import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Moon, Star, Sun, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

const ASHRAS = [
  { title: "Ashra of Mercy", description: "Rehmat (Days 1-10)", color: "text-primary", icon: <Heart className="w-5 h-5" /> },
  { title: "Ashra of Forgiveness", description: "Maghfirat (Days 11-20)", color: "text-secondary", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Ashra of Salvation", description: "Najat (Days 21-30)", color: "text-accent", icon: <Moon className="w-5 h-5" /> },
];

const RamadanRoadmap: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    // Current date is Feb 19, 2026.
    // Ramadan in Pakistan started Feb 19, 2026 (1 day after Saudi Arabia).
    // So Feb 19 is Day 1 of Ramadan in Pakistan.
    const ramadanStart = new Date('2026-02-19');
    const today = new Date();
    const diffTime = today.getTime() - ramadanStart.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setCurrentDay(Math.min(Math.max(0, diffDays), 30));
  }, []);

  return (
    <section className="py-24 px-4 overflow-hidden bg-background/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary glow-gold uppercase tracking-[0.2em]">The Ramadan Roadmap</h2>
          <p className="text-foreground/60 text-lg md:text-xl font-light italic max-w-2xl mx-auto">
            "Every step you take towards Allah brings you closer to His infinite mercy."
          </p>
        </div>

        {/* Desktop Vertical Roadmap / Tablet & Mobile Horizontal Roadmap */}
        <div className="relative">
          {/* Ashra Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {ASHRAS.map((ashra, i) => (
              <Card key={i} className={`glass border-border/20 ${i === Math.floor((currentDay-1)/10) ? 'border-primary shadow-glow' : ''}`}>
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`mx-auto w-12 h-12 rounded-full bg-background/50 border border-border flex items-center justify-center ${ashra.color}`}>
                    {ashra.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${ashra.color}`}>{ashra.title}</h3>
                  <p className="text-sm font-medium text-foreground/50 tracking-widest uppercase">{ashra.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline Container */}
          <div className="relative overflow-x-auto pb-8 flex md:grid md:grid-cols-3 md:gap-8 scrollbar-hide">
            {/* Days Grid - Optimized for desktop 3 columns (ashras) */}
            {[0, 1, 2].map((ashraIdx) => (
              <div key={ashraIdx} className="flex-shrink-0 w-[85vw] md:w-full space-y-4 px-4 md:px-0">
                <div className="grid grid-cols-5 md:grid-cols-5 gap-3">
                  {Array.from({ length: 10 }).map((_, i) => {
                    const day = ashraIdx * 10 + i + 1;
                    const isActive = day === currentDay;
                    const isCompleted = day < currentDay;
                    
                    return (
                      <motion.div
                        key={day}
                        whileHover={{ scale: 1.05 }}
                        className={`
                          relative flex flex-col items-center justify-center p-3 md:p-5 rounded-2xl border transition-all duration-300
                          ${isActive ? 'bg-primary border-primary text-primary-foreground shadow-glow scale-110 z-10' : 
                            isCompleted ? 'bg-secondary/30 border-secondary/20 text-secondary' : 
                            'bg-background/40 border-border/50 text-foreground/40'}
                        `}
                      >
                        <span className="text-xs font-bold uppercase tracking-widest mb-1">Day</span>
                        <span className="text-2xl md:text-3xl font-black">{day}</span>
                        {isCompleted && <CheckCircle2 className="absolute top-1 right-1 w-4 h-4" />}
                        {isActive && <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center"><Star className="w-3 h-3 text-primary fill-current" /></motion.div>}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress Footer */}
        <div className="mt-16 text-center text-foreground/50 flex flex-col items-center gap-4">
          <p className="text-sm uppercase tracking-[0.3em] font-bold">You are on your way to spiritual excellence</p>
          <div className="flex gap-4">
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary/30 border border-secondary/20" />
                <span className="text-xs uppercase font-bold">Completed</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary shadow-glow" />
                <span className="text-xs uppercase font-bold">Today</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-background/40 border border-border" />
                <span className="text-xs uppercase font-bold">Upcoming</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RamadanRoadmap;
