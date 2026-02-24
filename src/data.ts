export interface QuranVerse {
  id: number;
  arabic: string;
  urdu: string;
  english: string;
  reference: string;
}

export interface Hadith {
  id: number;
  arabic: string;
  urdu: string;
  english: string;
  reference: string;
}

export interface Quote {
  id: number;
  urdu: string;
  english: string;
  author: string;
}

export const quranVerses: QuranVerse[] = [
  {
    id: 1,
    arabic: "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ",
    urdu: "رمضان وہ مہینہ ہے جس میں قرآن نازل کیا گیا، جو لوگوں کے لیے ہدایت ہے اور ہدایت اور فرقان کی واضح نشانیاں ہے۔",
    english: "The month of Ramadan [is that] in which was revealed the Qur'an, a guidance for the people and clear proofs of guidance and criterion.",
    reference: "Al-Baqarah 2:185"
  },
  {
    id: 2,
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    urdu: "اے ایمان والو! تم پر روزے فرض کر دیے گئے ہیں جیسا کہ تم سے پہلے لوگوں پر فرض کیے گئے تھے تاکہ تم تقویٰ اختیار کرو۔",
    english: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
    reference: "Al-Baqarah 2:183"
  },
  {
    id: 3,
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    urdu: "اور جب میرے بندے آپ سے میرے بارے میں سوال کریں تو میں قریب ہوں۔ جب وہ مجھے پکارتا ہے تو میں پکارنے والے کی پکار کا جواب دیتا ہوں۔",
    english: "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
    reference: "Al-Baqarah 2:186"
  }
];

export const hadiths: Hadith[] = [
  {
    id: 1,
    arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    urdu: "جس نے ایمان اور اجر کی نیت سے رمضان کے روزے رکھے، اس کے پچھلے گناہ معاف کر دیئے جائیں گے۔",
    english: "Whoever fasts during Ramadan out of sincere faith and hoping to attain Allah's rewards, then all his past sins will be forgiven.",
    reference: "Sahih Bukhari & Muslim"
  },
  {
    id: 2,
    arabic: "الصِّيَامُ جُنَّةٌ فَلاَ يَرْفُثْ وَلاَ يَجْهَلْ",
    urdu: "روزہ ڈھال ہے، اس لیے نہ فحش گوئی کرے اور نہ جہالت والی بات۔",
    english: "Fasting is a shield. So, the person observing fasting should avoid sexual relation with his wife and should not behave foolishly and impudently.",
    reference: "Sahih Bukhari"
  },
  {
    id: 3,
    arabic: "تَسَحَّرُوا فَإِنَّ فِي السُّحُورِ بَرَكَةً",
    urdu: "سحری کھاؤ کیونکہ سحری میں برکت ہے۔",
    english: "Take Suhoor as there is a blessing in it.",
    reference: "Sahih Bukhari"
  }
];

export const quotes: Quote[] = [
  {
    id: 1,
    urdu: "رمضان توبہ اور بخشش کا مہینہ ہے۔",
    english: "Ramadan is the month of repentance and forgiveness.",
    author: "Islamic Wisdom"
  },
  {
    id: 2,
    urdu: "اللہ کی محبت تمام محبتوں کا مرکز ہے۔",
    english: "Allah's love is the center of all loves.",
    author: "Rumi"
  },
  {
    id: 3,
    urdu: "صبر کا پھل میٹھا ہوتا ہے، اور اللہ صبر کرنے والوں کے ساتھ ہے۔",
    english: "Patience is a tree whose root is bitter, but its fruit is very sweet.",
    author: "Imam Ali (AS)"
  },
  {
    id: 4,
    urdu: "دعا مومن کا ہتھیار ہے۔",
    english: "Prayer (Dua) is the weapon of a believer.",
    author: "Hadith"
  }
];

export const dailyDuas = [
  {
    day: "Daily",
    arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
    urdu: "اے اللہ، تو معاف کرنے والا ہے، معافی کو پسند کرتا ہے، پس مجھے معاف فرما۔",
    english: "O Allah, You are forgiving and You love forgiveness, so forgive me.",
    purpose: "Dua for Lailatul Qadr"
  },
  {
    day: "Sehri",
    arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
    transliteration: "Wa bi-sawmi ghadin nawaytu min shahri ramadan",
    urdu: "اور میں نے کل کے رمضان کے روزے کی نیت کی۔",
    english: "I intend to keep the fast for tomorrow in the month of Ramadan.",
    purpose: "Intention for Fasting"
  },
  {
    day: "Iftar",
    arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    transliteration: "Allahumma laka sumtu wa 'ala rizqika aftartu",
    urdu: "اے اللہ، میں نے تیرے لیے روزہ رکھا اور تیرے ہی دیے ہوئے رزق پر افطار کیا۔",
    english: "O Allah, I fasted for You and I break my fast with Your provision.",
    purpose: "Dua for breaking fast"
  }
];
