import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quranVerses, hadiths } from '@/data';
import { BookOpen, Quote as QuoteIcon, RefreshCw } from 'lucide-react';

const QuranHadithCards: React.FC = () => {
  const [verseIndex, setVerseIndex] = useState(0);
  const [hadithIndex, setHadithIndex] = useState(0);

  const nextVerse = () => setVerseIndex((prev) => (prev + 1) % quranVerses.length);
  const nextHadith = () => setHadithIndex((prev) => (prev + 1) % hadiths.length);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Quran Card */}
        <Card className="glass relative overflow-hidden group border-primary/10">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl font-bold tracking-tight text-primary">Verse from the Quran</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-4 min-h-[300px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={`verse-${verseIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-arabic leading-relaxed text-primary glow-gold mb-4 rtl">
                  {quranVerses[verseIndex].arabic}
                </p>
                <div className="space-y-4">
                  <p className="text-md md:text-lg italic text-foreground/80 leading-relaxed">
                    "{quranVerses[verseIndex].english}"
                  </p>
                  <p className="text-md md:text-lg text-foreground/70 font-medium urdu-font">
                    {quranVerses[verseIndex].urdu}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-widest text-foreground/40 font-semibold">
                  {quranVerses[verseIndex].reference}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-end pt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={nextVerse}
                className="text-primary hover:bg-primary/10 hover:text-primary transition-all rounded-full px-4"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Next Verse
              </Button>
            </div>
          </CardContent>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </Card>

        {/* Hadith Card */}
        <Card className="glass relative overflow-hidden group border-accent/10">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-2 bg-accent/10 rounded-lg text-accent">
              <QuoteIcon className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl font-bold tracking-tight text-accent">Prophetic Wisdom</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-4 min-h-[300px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={`hadith-${hadithIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6 text-center"
              >
                <p className="text-2xl md:text-3xl font-arabic leading-relaxed text-accent glow-teal mb-4 rtl">
                  {hadiths[hadithIndex].arabic}
                </p>
                <div className="space-y-4">
                  <p className="text-md md:text-lg italic text-foreground/80 leading-relaxed">
                    "{hadiths[hadithIndex].english}"
                  </p>
                  <p className="text-md md:text-lg text-foreground/70 font-medium urdu-font">
                    {hadiths[hadithIndex].urdu}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-widest text-foreground/40 font-semibold">
                  {hadiths[hadithIndex].reference}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-end pt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={nextHadith}
                className="text-accent hover:bg-accent/10 hover:text-accent transition-all rounded-full px-4"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Next Hadith
              </Button>
            </div>
          </CardContent>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </Card>
      </div>
    </section>
  );
};

export default QuranHadithCards;
