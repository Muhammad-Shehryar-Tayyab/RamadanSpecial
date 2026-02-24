import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock, MapPin, Coffee, Sun } from 'lucide-react';
import { getCurrentRamadanDay, getTimingForDay } from '@/ramadanTimings';

const SehriIftarTimings: React.FC = () => {
  const currentDay = getCurrentRamadanDay();
  const todayTiming = getTimingForDay(currentDay);

  const [sehriTimeLeft, setSehriTimeLeft] = useState<string>('');
  const [aftariTimeLeft, setAftariTimeLeft] = useState<string>('');

  // Convert 24-hour format to 12-hour format with AM/PM
  const formatTime12Hour = (time24: string): string => {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  useEffect(() => {
    if (!todayTiming) return;

    const timer = setInterval(() => {
      const now = new Date();
      const [sH, sM] = todayTiming.sehri.split(':').map(Number);
      const [iH, iM] = todayTiming.iftar.split(':').map(Number);

      // Calculate Sehri time
      let sehriTarget = new Date(now);
      sehriTarget.setHours(sH, sM, 0, 0);
      
      // If today's Sehri has passed, show tomorrow's Sehri
      if (now >= sehriTarget) {
        const tomorrowTiming = getTimingForDay(currentDay + 1);
        if (tomorrowTiming) {
          const [tH, tM] = tomorrowTiming.sehri.split(':').map(Number);
          sehriTarget = new Date(now);
          sehriTarget.setDate(now.getDate() + 1);
          sehriTarget.setHours(tH, tM, 0, 0);
        } else {
          sehriTarget.setDate(now.getDate() + 1);
        }
      }

      // Calculate Aftari time
      let aftariTarget = new Date(now);
      aftariTarget.setHours(iH, iM, 0, 0);
      
      // If today's Aftari has passed, show tomorrow's Aftari
      if (now >= aftariTarget) {
        const tomorrowTiming = getTimingForDay(currentDay + 1);
        if (tomorrowTiming) {
          const [tH, tM] = tomorrowTiming.iftar.split(':').map(Number);
          aftariTarget = new Date(now);
          aftariTarget.setDate(now.getDate() + 1);
          aftariTarget.setHours(tH, tM, 0, 0);
        } else {
          aftariTarget.setDate(now.getDate() + 1);
        }
      }

      // Calculate time differences
      const sehriDiff = sehriTarget.getTime() - now.getTime();
      const sehriH = Math.floor(sehriDiff / (1000 * 60 * 60));
      const sehriMin = Math.floor((sehriDiff / (1000 * 60)) % 60);
      const sehriS = Math.floor((sehriDiff / 1000) % 60);
      setSehriTimeLeft(`${sehriH}h ${sehriMin}m ${sehriS}s`);

      const aftariDiff = aftariTarget.getTime() - now.getTime();
      const aftariH = Math.floor(aftariDiff / (1000 * 60 * 60));
      const aftariMin = Math.floor((aftariDiff / (1000 * 60)) % 60);
      const aftariS = Math.floor((aftariDiff / 1000) % 60);
      setAftariTimeLeft(`${aftariH}h ${aftariMin}m ${aftariS}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, [todayTiming, currentDay]);

  if (!todayTiming) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground/60">Ramadan timings will be available during Ramadan 2026.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sehri Countdown Card */}
          <Card className="glass relative overflow-hidden bg-primary/10 border-primary/20">
            <CardContent className="p-8 text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/20 rounded-full animate-float">
                    <Coffee className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <p className="text-sm uppercase tracking-[0.3em] font-bold text-foreground/60">
                  Time Remaining for Sehri
                </p>
                <h3 className="text-4xl md:text-5xl font-bold font-mono text-primary glow-gold tabular-nums">
                  {sehriTimeLeft}
                </h3>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-foreground/50">
                    <Clock className="w-4 h-4" />
                    <span className="text-lg font-semibold text-primary tabular-nums">{formatTime12Hour(todayTiming.sehri)}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-foreground/40">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs font-medium">Islamabad, Pakistan</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          {/* Aftari Countdown Card */}
          <Card className="glass relative overflow-hidden bg-accent/10 border-accent/20">
            <CardContent className="p-8 text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/20 rounded-full animate-float">
                    <Sun className="w-12 h-12 text-accent" />
                  </div>
                </div>
                <p className="text-sm uppercase tracking-[0.3em] font-bold text-foreground/60">
                  Time Remaining for Aftari
                </p>
                <h3 className="text-4xl md:text-5xl font-bold font-mono text-accent glow-teal tabular-nums">
                  {aftariTimeLeft}
                </h3>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-foreground/50">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-lg font-semibold text-accent tabular-nums">{formatTime12Hour(todayTiming.iftar)}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-foreground/40">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs font-medium">Islamabad, Pakistan</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        {/* Ramadan Day Info */}
        <div className="mt-8 text-center">
          <Card className="glass border-border/50 inline-block">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-bold mb-2">
                Current Ramadan Day
              </p>
              <p className="text-3xl font-bold text-primary">
                Day {currentDay} <span className="text-foreground/40">•</span> <span className="text-lg text-foreground/60">{todayTiming.date}</span>
              </p>
              <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-bold mt-3">
                Official timings for Islamabad, Pakistan
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SehriIftarTimings;
