import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Journey', href: '#tracker' },
    { name: 'Countdown', href: '#countdown' },
    { name: 'Wisdom', href: '#wisdom' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass bg-background/80 shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-glow"
          >
            <Star className="w-6 h-6 fill-current" />
          </motion.div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-primary uppercase">
            Ramzan <span className="text-secondary">Mubarak</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 bg-background/50 border border-border/50 text-primary hover:bg-primary/10 transition-all"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 bg-background/50 border border-border/50 text-primary"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="w-7 h-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass bg-secondary/95 border-primary/20 w-[300px]">
              <SheetHeader className="text-left mb-10 pt-10">
                <SheetTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Star className="w-6 h-6 fill-current" />
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="absolute bottom-10 left-6 text-foreground/40 text-xs tracking-widest uppercase">
                Built with ❤️ for the Muslim Ummah
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
