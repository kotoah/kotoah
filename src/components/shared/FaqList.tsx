'use client';

import { useState, useMemo, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, X } from 'lucide-react';

interface FaqItem {
  _id: string;
  question: string;
  answer: string;
  categories: string[];
}

interface FaqListProps {
  initialItems: FaqItem[];
}

const CATEGORY_LABELS: Record<string, string> = {
  general: "全般",
  consultation: "診察について",
  hotel: "ペットホテル",
  checkup: "健康診断",
  pricing: "料金・お支払い",
  order: "フード・薬注文",
};

export default function FaqList({ initialItems }: FaqListProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // フィルタリングロジック
  const filteredItems = useMemo(() => {
    return initialItems.filter(item => {
      const matchesSearch = 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        !selectedCategory || item.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [initialItems, searchTerm, selectedCategory]);

  if (!isMounted) return <div className="h-96 bg-white/50 animate-pulse rounded-[40px]" />;

  return (
    <div className="space-y-12">
      {/* Search and Filter UI */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-soft-100 space-y-8">
        {/* Search Input */}
        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
          <input 
            type="text"
            placeholder="知りたいキーワードを入力（例：クレジットカード、駐車場...）"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-16 pr-6 py-4 bg-soft-50 rounded-2xl outline-none border-2 border-transparent focus:border-primary-100 focus:bg-white transition-all font-medium"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 ${!selectedCategory ? 'bg-primary-600 border-primary-600 text-white shadow-md' : 'bg-white border-soft-100 text-gray-500 hover:border-primary-200'}`}
          >
            すべて表示
          </button>
          {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setSelectedCategory(value)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 ${selectedCategory === value ? 'bg-primary-600 border-primary-600 text-white shadow-md' : 'bg-white border-soft-100 text-gray-500 hover:border-primary-200'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div 
              key={item._id}
              className="bg-white rounded-3xl border border-soft-100 shadow-sm overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenId(openId === item._id ? null : item._id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors shrink-0 ${openId === item._id ? 'bg-primary-600 text-white' : 'bg-primary-50 text-primary-600 group-hover:bg-primary-100'}`}>
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-black text-gray-800 leading-tight block">{item.question}</span>
                    <div className="flex gap-2">
                      {item.categories.map(cat => (
                        <span key={cat} className="text-[10px] font-bold text-primary-400 uppercase tracking-wider">
                          # {CATEGORY_LABELS[cat] || cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {openId === item._id ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              {openId === item._id && (
                <div className="px-8 pb-8 pt-0">
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-[40px] border-4 border-dashed border-soft-100">
            <div className="w-16 h-16 bg-soft-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-soft-200" />
            </div>
            <p className="font-bold text-gray-400">該当する質問が見つかりませんでした。</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory(null); }}
              className="mt-4 text-primary-600 font-bold hover:underline"
            >
              検索条件をクリアする
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
