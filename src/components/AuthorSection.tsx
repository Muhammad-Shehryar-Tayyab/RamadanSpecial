import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { User, Heart, Code, Sparkles } from 'lucide-react';

const AuthorSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-background/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 glow-gold uppercase tracking-[0.2em]">
            About This Project
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mb-6" />
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            A digital tribute to the blessed month of Ramadan, crafted with love and dedication for the Muslim community.
          </p>
        </motion.div>

        <Card className="glass border-primary/10 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Author Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary border-2 border-primary/30">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Shehryar Tayyab</h3>
                    <p className="text-foreground/60 text-sm uppercase tracking-widest">Developer & Designer</p>
                  </div>
                </div>
                
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Created by <span className="font-semibold text-primary">Shehryar Tayyab</span>, a passionate developer dedicated to building 
                  meaningful digital experiences for the Muslim community. This website was crafted as a spiritual companion 
                  for Muslims during the holy month of Ramadan, combining modern web technology with Islamic tradition to 
                  provide a peaceful digital space for reflection, prayer time tracking, and spiritual growth.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Made with Love</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                    <Code className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-semibold text-secondary">Open Source Spirit</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">For the Ummah</span>
                  </div>
                </div>
              </div>

              {/* Features Highlight */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest">Key Features</h4>
                {[
                  { title: 'Accurate Prayer Times', desc: 'Official Islamabad timings for Ramadan 2026' },
                  { title: 'Daily Spiritual Content', desc: 'Quran verses, Hadith, and Islamic wisdom' },
                  { title: 'Progress Tracking', desc: 'Track your fasting, Quran reading, and charity' },
                  { title: 'Beautiful Design', desc: 'Modern UI with Islamic aesthetic elements' },
                  { title: 'Fully Responsive', desc: 'Works seamlessly on all devices' },
                  { title: 'Islamic Audio', desc: 'Peaceful Quran recitation for ambiance' },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-background/40 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{feature.title}</p>
                      <p className="text-sm text-foreground/60">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-12 pt-8 border-t border-border/20 text-center">
              <p className="text-foreground/60 italic text-lg leading-relaxed max-w-3xl mx-auto">
                "May Allah accept our fasts, prayers, and good deeds during this blessed month. 
                May this website serve as a helpful companion in your spiritual journey. Ramzan Mubarak to all!"
              </p>
              <p className="text-primary font-bold mt-6 text-xl">— Shehryar Tayyab</p>
              <p className="text-foreground/40 text-sm mt-2 uppercase tracking-widest">With Du'a and Best Wishes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AuthorSection;
