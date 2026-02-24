import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RamadanCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [targetName, setTargetName] = useState('Eid al-Fitr');

  useEffect(() => {
    // Ramadan 2026 in Pakistan: Feb 19, 2026 (1 day after Saudi Arabia)
    // Eid 2026 in Pakistan: March 21, 2026
    const now = new Date();
    const ramadanDate = new Date('2026-02-19T00:00:00');
    const eidDate = new Date('2026-03-21T00:00:00');
    
    let targetDate = eidDate;
    if (now < ramadanDate) {
      targetDate = ramadanDate;
      setTargetName('Ramadan Kareem');
    } else {
      targetDate = eidDate;
      setTargetName('Eid al-Fitr');
    }

    const timer = setInterval(() => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="glass relative overflow-hidden border-primary/20 bg-secondary/30 backdrop-blur-xl rounded-[2.5rem] shadow-2xl">
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img 
              src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e5347256-833a-48d5-a828-1aa3c5e16cf2.jpg" 
              alt="Ramadan Lantern" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-primary mb-2">
                Countdown to {targetName}
              </CardTitle>
              <p className="text-foreground/60 italic">Anticipating the blessed day...</p>
            </CardHeader>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {timeItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 bg-background/60 backdrop-blur-md rounded-2xl border border-primary/10"
                  >
                    <span className="text-4xl md:text-6xl font-bold text-primary mb-2">
                      {item.value < 10 ? `0${item.value}` : item.value}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-medium">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </div>
          {/* Moon phase decorative element */}
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
             <svg viewBox="0 0 100 100" className="w-16 h-16 fill-current">
                <path d="M50,10A40,40,0,1,0,90,50,40.1,40.1,0,0,1,50,10Z" />
             </svg>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RamadanCountdown;
