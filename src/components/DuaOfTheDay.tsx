import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { dailyDuas } from '@/data';
import { Sparkles, Moon, Sun, Coffee, ChevronRight, ChevronLeft } from 'lucide-react';

const DuaOfTheDay: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % dailyDuas.length);
  const prev = () => setIndex((prev) => (prev - 1 + dailyDuas.length) % dailyDuas.length);

  const currentDua = dailyDuas[index];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="glass relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border-primary/20 shadow-2xl rounded-[2rem]">
          <CardHeader className="text-center pt-10">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                {index === 0 ? <Sparkles className="w-6 h-6" /> : index === 1 ? <Coffee className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight text-primary uppercase">
                {currentDua.day} Dua
              </CardTitle>
            </div>
            <p className="text-foreground/60 font-medium italic mb-2">{currentDua.purpose}</p>
          </CardHeader>
          <CardContent className="space-y-12 pb-16 px-8 md:px-16 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="relative">
                  <p className="text-3xl md:text-5xl font-arabic text-primary glow-gold leading-[1.6] mb-8 rtl">
                    {currentDua.arabic}
                  </p>
                  <div className="absolute -top-4 -left-4 text-primary/10 text-9xl font-arabic pointer-events-none select-none">
                    ﷽
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-background/40 p-6 rounded-xl border border-primary/10">
                    <p className="text-sm uppercase tracking-[0.2em] text-foreground/40 mb-3 font-bold">Transliteration</p>
                    <p className="text-lg md:text-xl italic font-medium leading-relaxed">{currentDua.transliteration}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background/40 p-6 rounded-xl border border-secondary/10 text-center space-y-3">
                       <p className="text-sm uppercase tracking-[0.2em] text-foreground/40 font-bold">English Meaning</p>
                       <p className="text-lg md:text-xl leading-relaxed">{currentDua.english}</p>
                    </div>
                    <div className="bg-background/40 p-6 rounded-xl border border-secondary/10 text-center space-y-3">
                       <p className="text-sm uppercase tracking-[0.2em] text-foreground/40 font-bold urdu-font">Urdu Meaning</p>
                       <p className="text-lg md:text-xl leading-relaxed urdu-font">{currentDua.urdu}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 pt-10">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full w-12 h-12 border-primary/20 text-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full w-12 h-12 border-primary/20 text-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </CardContent>
          {/* Decorative gold trim */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </Card>
      </div>
    </section>
  );
};

export default DuaOfTheDay;
