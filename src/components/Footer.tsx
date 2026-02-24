import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 bg-background/50 border-t border-border/10 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
          {/* Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-glow">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary uppercase">
                Ramzan <span className="text-secondary">Mubarak</span>
              </span>
            </div>
            <p className="text-foreground/60 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed font-light">
              Crafting premium digital experiences with a touch of elegance and spirituality. Our Ramadan special edition is dedicated to the beauty of the holy month.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center justify-center space-y-4">
             <div className="flex gap-6 mb-4">
                <a 
                  href="https://x.com/ShehryarTayyab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Twitter/X"
                >
                   <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/mshehryartayyab?igsh=MWxuN3d0c2NkdWN4ZA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Instagram"
                >
                   <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com/Muhammad-Shehryar-Tayyab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="GitHub"
                >
                   <Github className="w-4 h-4" />
                </a>
             </div>
             <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-bold">Connect with Shehryar Tayyab</p>
          </div>

          {/* Copyright & Signoff */}
          <div className="flex flex-col items-center md:items-end justify-center space-y-4">
             <div className="text-center md:text-right">
                <p className="text-sm font-medium text-foreground/60 mb-2">Built with ❤️ by Shehryar Tayyab</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-bold">2026 Ramzan Mubarak Special Edition</p>
             </div>
             <motion.div
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="text-primary opacity-60 flex items-center gap-2"
             >
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Peace & Blessings</span>
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
             </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
