'use client';

import { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  _id: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  description?: string;
}

export default function FaqSection({ items, title = "よくある質問", description }: FaqSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (items.length === 0) return null;
  if (!isMounted) return <div className="h-48 bg-white/30 animate-pulse rounded-[40px]" />;

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{title}</h2>
        {description && <p className="text-gray-500 font-medium">{description}</p>}
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div 
            key={item._id}
            className="bg-white rounded-3xl border border-soft-100 shadow-sm overflow-hidden transition-all hover:shadow-md"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors shrink-0 ${openIndex === index ? 'bg-primary-600 text-white' : 'bg-primary-50 text-primary-600 group-hover:bg-primary-100'}`}>
                  <HelpCircle className="w-6 h-6" />
                </div>
                <span className="font-black text-gray-800 leading-tight">{item.question}</span>
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-8 pb-8 pt-0">
                <div className="pl-14">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
