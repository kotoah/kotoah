'use client';

import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface Closure {
  _id: string;
  date: string;
  type: 'allDay' | 'morning' | 'afternoon' | 'other';
  reason?: string;
}

interface MedicalCalendarProps {
  initialClosures: Closure[];
}

export default function MedicalCalendar({ initialClosures }: MedicalCalendarProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // カレンダーの日付リストを生成
  const generateCalendar = () => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const calendarDays = [];
    // 前月の空白
    for (let i = 0; i < startingDay; i++) {
      calendarDays.push(null);
    }
    // 当月の日付
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(new Date(year, month, i));
    }
    return calendarDays;
  };

  const days = generateCalendar();
  const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

  const getClosureStatus = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    const closure = initialClosures.find(c => c.date === dateStr);
    
    // 定休日：水曜日（3）
    if (date.getDay() === 3) {
      return { type: 'regular', label: '休診', color: 'bg-red-50 text-red-500' };
    }
    
    if (closure) {
      const labels: any = { allDay: '休診', morning: 'AM休診', afternoon: 'PM休診', other: '時間変更' };
      const colors: any = { 
        allDay: 'bg-red-100 text-red-600', 
        morning: 'bg-amber-100 text-amber-600', 
        afternoon: 'bg-amber-100 text-amber-600', 
        other: 'bg-blue-100 text-blue-600' 
      };
      return { type: closure.type, label: labels[closure.type], color: colors[closure.type], reason: closure.reason };
    }
    
    return null;
  };

  if (!isMounted) return <div className="h-[400px] bg-white/30 animate-pulse rounded-[40px]" />;

  return (
    <div className="bg-white p-6 md:p-10 rounded-[50px] shadow-xl border border-soft-100">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
          <CalendarIcon className="w-8 h-8 text-primary-500" />
          {year}年 {month + 1}月
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            className="p-2 rounded-full hover:bg-soft-50 text-gray-400"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="p-2 rounded-full hover:bg-soft-50 text-gray-400"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 md:gap-2 mb-8">
        {weekDays.map((wd, i) => (
          <div key={wd} className={`text-center py-2 text-xs font-black uppercase tracking-widest ${i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-gray-400'}`}>
            {wd}
          </div>
        ))}
        {days.map((date, i) => {
          if (!date) return <div key={`empty-${i}`} />;
          const status = getClosureStatus(date);
          const isToday = new Date().toDateString() === date.toDateString();

          return (
            <div 
              key={date.toISOString()} 
              className={`relative min-h-[60px] md:min-h-[80px] p-2 rounded-2xl border transition-all ${isToday ? 'border-primary-500 bg-primary-50/30' : 'border-transparent hover:bg-soft-50'}`}
            >
              <span className={`text-sm font-black ${date.getDay() === 0 ? 'text-red-500' : date.getDay() === 6 ? 'text-blue-500' : 'text-gray-700'}`}>
                {date.getDate()}
              </span>
              {status && (
                <div className={`mt-1 px-1 py-0.5 rounded text-[10px] md:text-[11px] font-black text-center ${status.color}`}>
                  {status.label}
                  {status.reason && (
                    <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-gray-900 text-white text-[9px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none z-20">
                      {status.reason}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-6 pt-6 border-t border-soft-50">
         <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
            <div className="w-3 h-3 bg-red-50 border border-red-100 rounded" />
            <span>水曜定休</span>
         </div>
         <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
            <div className="w-3 h-3 bg-red-100 rounded" />
            <span>臨時休診</span>
         </div>
         <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
            <div className="w-3 h-3 bg-amber-100 rounded" />
            <span>午前・午後休診</span>
         </div>
      </div>
      
      <div className="mt-8 bg-primary-50 p-4 rounded-2xl flex gap-3 items-start">
         <Info className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
         <p className="text-[11px] text-primary-800 leading-relaxed font-medium">
           カレンダーの内容は最新の情報を反映するよう努めておりますが、緊急時など急遽変更となる場合がございます。来院前に最新の「お知らせ」も併せてご確認ください。
         </p>
      </div>
    </div>
  );
}
