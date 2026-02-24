// Ramadan 2026 Prayer Timings for Islamabad, Pakistan
// Based on official calendar

export interface DailyTiming {
  day: number;
  date: string;
  sehri: string;
  iftar: string;
}

export const ramadanTimings2026: DailyTiming[] = [
  { day: 1, date: "19", sehri: "05:24", iftar: "17:57" },
  { day: 2, date: "20", sehri: "05:23", iftar: "17:57" },
  { day: 3, date: "21", sehri: "05:22", iftar: "17:58" },
  { day: 4, date: "22", sehri: "05:21", iftar: "17:59" },
  { day: 5, date: "23", sehri: "05:20", iftar: "18:00" },
  { day: 6, date: "24", sehri: "05:19", iftar: "18:01" },
  { day: 7, date: "25", sehri: "05:18", iftar: "18:02" },
  { day: 8, date: "26", sehri: "05:16", iftar: "18:03" },
  { day: 9, date: "27", sehri: "05:15", iftar: "18:03" },
  { day: 10, date: "28", sehri: "05:14", iftar: "18:04" },
  { day: 11, date: "01", sehri: "05:13", iftar: "18:05" },
  { day: 12, date: "02", sehri: "05:12", iftar: "18:06" },
  { day: 13, date: "03", sehri: "05:11", iftar: "18:07" },
  { day: 14, date: "04", sehri: "05:09", iftar: "18:08" },
  { day: 15, date: "05", sehri: "05:08", iftar: "18:08" },
  { day: 16, date: "06", sehri: "05:07", iftar: "18:09" },
  { day: 17, date: "07", sehri: "05:06", iftar: "18:10" },
  { day: 18, date: "08", sehri: "05:04", iftar: "18:11" },
  { day: 19, date: "09", sehri: "05:03", iftar: "18:12" },
  { day: 20, date: "10", sehri: "05:02", iftar: "18:12" },
  { day: 21, date: "11", sehri: "05:00", iftar: "18:13" },
  { day: 22, date: "12", sehri: "04:59", iftar: "18:14" },
  { day: 23, date: "13", sehri: "04:58", iftar: "18:15" },
  { day: 24, date: "14", sehri: "04:56", iftar: "18:16" },
  { day: 25, date: "15", sehri: "04:55", iftar: "18:16" },
  { day: 26, date: "16", sehri: "04:54", iftar: "18:17" },
  { day: 27, date: "17", sehri: "04:52", iftar: "18:18" },
  { day: 28, date: "18", sehri: "04:51", iftar: "18:19" },
  { day: 29, date: "19", sehri: "04:49", iftar: "18:19" },
  { day: 30, date: "20", sehri: "04:48", iftar: "18:20" },
];

export const getTimingForDay = (day: number): DailyTiming | null => {
  if (day < 1 || day > 30) return null;
  return ramadanTimings2026[day - 1];
};

export const getCurrentRamadanDay = (): number => {
  const ramadanStart = new Date('2026-02-19');
  const today = new Date();
  const diffTime = today.getTime() - ramadanStart.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.min(Math.max(1, diffDays), 30);
};
