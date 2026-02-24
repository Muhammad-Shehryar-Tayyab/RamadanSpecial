import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AmbientSoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Using peaceful Islamic ambient sound - Quran recitation background or Islamic meditation music
  // This is a placeholder URL - in production, you would host your own Islamic ambient audio
  const AUDIO_URL = "https://server11.mp3quran.net/sds/Rewayat-Hafs-A-n-Assem/001.mp3"; // Surah Al-Fatiha recitation as ambient

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.volume = 0.3; // Set lower volume for ambient background
        audioRef.current.play().catch(e => console.error("Audio play blocked", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      <audio ref={audioRef} src={AUDIO_URL} loop />
      
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="px-3 py-1 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-widest rounded-full shadow-lg border border-primary/20 backdrop-blur-md"
          >
            Ambient Playing
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsPlaying(!isPlaying)}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-500 border-primary/20 backdrop-blur-md ${
          isPlaying ? 'bg-primary text-primary-foreground scale-110 shadow-glow' : 'bg-background/40 hover:bg-background/60 text-primary'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isPlaying ? 'playing' : 'stopped'}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
          </motion.div>
        </AnimatePresence>
      </Button>
    </div>
  );
};

export default AmbientSoundToggle;
