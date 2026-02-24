import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Trash2, Plus, Minus, Heart, Moon, BookOpen, Star } from 'lucide-react';
import { toast } from 'sonner';

interface TrackerData {
  fasts: boolean[];
  quranJuz: number;
  taraweeh: number;
  charity: number;
}

const STORAGE_KEY = 'ramadan_progress_2026';

const RamadanTracker: React.FC = () => {
  const [data, setData] = useState<TrackerData>({
    fasts: new Array(30).fill(false),
    quranJuz: 0,
    taraweeh: 0,
    charity: 0,
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  const saveData = (newData: TrackerData) => {
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  };

  const toggleFast = (index: number) => {
    const newFasts = [...data.fasts];
    newFasts[index] = !newFasts[index];
    saveData({ ...data, fasts: newFasts });
  };

  const updateCounter = (key: keyof Omit<TrackerData, 'fasts'>, delta: number, max: number = 30) => {
    const newValue = Math.min(Math.max(0, (data[key] as number) + delta), max);
    saveData({ ...data, [key]: newValue });
  };

  const resetTracker = () => {
    if (confirm("Are you sure you want to reset your progress? This cannot be undone.")) {
      const resetData = {
        fasts: new Array(30).fill(false),
        quranJuz: 0,
        taraweeh: 0,
        charity: 0,
      };
      saveData(resetData);
      toast.success("Progress reset successfully!");
    }
  };

  const fastsCompleted = data.fasts.filter(Boolean).length;
  const fastsPercentage = (fastsCompleted / 30) * 100;
  const quranPercentage = (data.quranJuz / 30) * 100;
  const taraweehPercentage = (data.taraweeh / 30) * 100;

  return (
    <section id="tracker" className="py-24 px-4 bg-background/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-3 glow-gold">Ramadan Journey Tracker</h2>
            <p className="text-foreground/60 text-lg">Keep track of your spiritual progress and goals throughout the blessed month.</p>
          </div>
          <Button variant="outline" onClick={resetTracker} className="text-destructive border-destructive/20 hover:bg-destructive/10 rounded-full">
            <Trash2 className="w-4 h-4 mr-2" />
            Reset Progress
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Progress Overview */}
          {[
            { label: 'Fasts Completed', value: `${fastsCompleted}/30`, progress: fastsPercentage, icon: <Moon className="w-5 h-5 text-primary" />, color: "bg-primary" },
            { label: 'Quran Juz Reading', value: `${data.quranJuz}/30`, progress: quranPercentage, icon: <BookOpen className="w-5 h-5 text-secondary" />, color: "bg-secondary" },
            { label: 'Taraweeh Attendance', value: `${data.taraweeh}/30`, progress: taraweehPercentage, icon: <Star className="w-5 h-5 text-accent" />, color: "bg-accent" },
            { label: 'Days of Charity', value: `${data.charity}/30`, progress: (data.charity/30)*100, icon: <Heart className="w-5 h-5 text-red-400" />, color: "bg-red-400" },
          ].map((stat, i) => (
            <Card key={i} className="glass border-primary/5 hover:border-primary/20 transition-all p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-background/50 border border-border">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                </div>
              </div>
              <Progress value={stat.progress} className={`h-2 ${stat.color}/20`} />
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Fasting Calendar */}
          <Card className="lg:col-span-2 glass border-primary/10">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Moon className="w-5 h-5 text-primary" />
                Fasting Checklist
              </CardTitle>
              <CardDescription>Mark each day as you complete your fast.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                {data.fasts.map((isDone, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <Checkbox
                      id={`fast-${idx}`}
                      checked={isDone}
                      onCheckedChange={() => toggleFast(idx)}
                      className="w-6 h-6 rounded-md data-[state=checked]:bg-primary"
                    />
                    <Label htmlFor={`fast-${idx}`} className="text-[10px] font-bold text-foreground/40">D{idx + 1}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Goal Management */}
          <Card className="glass border-secondary/10">
            <CardHeader>
              <CardTitle className="text-xl">Spiritual Goals</CardTitle>
              <CardDescription>Adjust your counts daily.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {[
                { label: 'Quran Juz', key: 'quranJuz', icon: <BookOpen className="w-5 h-5" /> },
                { label: 'Taraweeh', key: 'taraweeh', icon: <Star className="w-5 h-5" /> },
                { label: 'Charity Acts', key: 'charity', icon: <Heart className="w-5 h-5" /> },
              ].map((goal) => (
                <div key={goal.key} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="text-secondary group-hover:scale-110 transition-transform">{goal.icon}</div>
                    <Label className="font-semibold text-lg">{goal.label}</Label>
                  </div>
                  <div className="flex items-center gap-4 bg-background/40 p-1 rounded-full border border-border">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 rounded-full"
                      onClick={() => updateCounter(goal.key as any, -1)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-bold text-xl">{data[goal.key as keyof Omit<TrackerData, 'fasts'>]}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 rounded-full"
                      onClick={() => updateCounter(goal.key as any, 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RamadanTracker;
