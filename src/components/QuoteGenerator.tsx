import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quotes } from '@/data';
import { Quote as QuoteIcon, Sparkles, RefreshCw } from 'lucide-react';

const QuoteGenerator: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const shuffleQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === quoteIndex && quotes.length > 1);
    setQuoteIndex(newIndex);
  };

  const currentQuote = quotes[quoteIndex];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="glass relative overflow-hidden bg-gradient-to-br from-secondary/10 to-accent/10 border-accent/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-accent animate-glow" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-accent">
              Daily Reflection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center space-y-6"
              >
                <QuoteIcon className="w-10 h-10 text-accent/20 mx-auto mb-2" />
                <p className="text-2xl md:text-4xl font-serif text-accent glow-teal leading-relaxed urdu-font">
                  {currentQuote.urdu}
                </p>
                <p className="text-lg md:text-xl text-foreground/80 font-light italic px-4">
                  "{currentQuote.english}"
                </p>
                <p className="text-sm uppercase tracking-[0.2em] text-foreground/40 font-bold">
                  — {currentQuote.author}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center pt-8">
              <Button
                variant="outline"
                onClick={shuffleQuote}
                className="rounded-full border-accent/20 text-accent hover:bg-accent/10 hover:text-accent transition-all px-8 py-6 text-lg"
              >
                <RefreshCw className="w-5 h-5 mr-3" />
                Refresh Wisdom
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteGenerator;
