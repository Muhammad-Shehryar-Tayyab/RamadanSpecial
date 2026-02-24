import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Moon, Sparkles, Heart } from 'lucide-react';

const DailyReflectionPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem('last_reflection_shown');

    if (lastShown !== today) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('last_reflection_shown', new Date().toDateString());
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="glass bg-secondary/95 border-primary/20 sm:max-w-[425px] p-0 overflow-hidden shadow-2xl rounded-3xl">
        <div className="relative p-10 flex flex-col items-center text-center space-y-8">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <motion.div
            initial={{ scale: 0.8, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary"
          >
            <Sparkles className="w-10 h-10 animate-pulse-glow" />
          </motion.div>

          <DialogHeader className="space-y-4">
            <DialogTitle className="text-3xl font-bold tracking-tight text-primary">
              Today's Reflection
            </DialogTitle>
            <DialogDescription className="text-lg italic text-foreground/80 leading-relaxed font-light">
              "Fasting is not only about refraining from food and drink, it is about refraining from negative thoughts, words, and actions. It is a purification of the soul."
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center gap-2 text-primary font-semibold">
            <Heart className="w-5 h-5 fill-current" />
            <span className="uppercase tracking-[0.2em] text-xs">Self-Reflect & Grow</span>
          </div>

          <DialogFooter className="w-full">
            <Button
              onClick={handleClose}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-lg font-bold shadow-lg transition-all"
            >
              Alhamdulillah
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DailyReflectionPopup;
