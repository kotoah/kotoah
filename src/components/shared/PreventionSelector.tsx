'use client';

import { useState } from 'react';
import { ChevronRight, RotateCcw, ShieldCheck, Bug, Pill, Heart, CheckCircle2, AlertTriangle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

type CoverageType = 'all-in-one' | 'separate';
type FormFactor = 'chewable' | 'tablet' | 'spot-on';

interface Product {
  id: string;
  name: string;
  category: 'all-in-one' | 'heartworm' | 'flea-tick';
  form: FormFactor;
  description: string;
  features: string[];
  coverage: string[];
}

const products: Product[] = [
  {
    id: 'spectra',
    name: "ネクスガードスペクトラ",
    category: 'all-in-one',
    form: 'chewable',
    description: "これひとつでフィラリア・ノミ・マダニ・お腹の寄生虫まで予防できる一番人気の予防薬です。",
    features: ["美味しいソフトチュアブル", "即効性が高い", "1ヶ月に1回"],
    coverage: ["フィラリア", "ノミ", "マダニ", "回虫", "鉤虫", "鞭虫"]
  },
  {
    id: 'credelio',
    name: "クレデリオプラス",
    category: 'all-in-one',
    form: 'tablet',
    description: "非常に小さく、フレーバー付きで飲ませやすい錠剤タイプのオールインワン予防薬です。",
    features: ["超小型の錠剤", "ベタつきなし", "食事と一緒に投与"],
    coverage: ["フィラリア", "ノミ", "マダニ", "回虫", "鉤虫", "鞭虫"]
  },
  {
    id: 'ivermec',
    name: "イベルメック",
    category: 'heartworm',
    form: 'chewable',
    description: "フィラリア予防の定番。美味しいおやつタイプで、お腹の虫も同時に駆除できます。",
    features: ["高い嗜好性（牛肉風味）", "安全性が高い", "長年の実績"],
    coverage: ["フィラリア", "回虫", "鉤虫"]
  },
  {
    id: 'heartmectin',
    name: "ハートメクチン錠",
    category: 'heartworm',
    form: 'tablet',
    description: "シンプルな錠剤タイプのフィラリア予防薬。コストパフォーマンスに優れています。",
    features: ["小さな錠剤", "リーズナブル", "高い安全性"],
    coverage: ["フィラリア"]
  },
  {
    id: 'nexgard',
    name: "ネクスガード",
    category: 'flea-tick',
    form: 'chewable',
    description: "ノミ・マダニに特化した美味しいおやつタイプ。投与後すぐに効果を発揮します。",
    features: ["美味しいソフトチュアブル", "シャンプーの影響なし", "即効駆除"],
    coverage: ["ノミ", "マダニ"]
  },
  {
    id: 'fiprospot',
    name: "フィプロスポットプラス",
    category: 'flea-tick',
    form: 'spot-on',
    description: "首筋に垂らす滴下タイプ。ノミの卵や幼虫の成長も阻害し、環境を清潔に保ちます。",
    features: ["首に垂らすだけ", "卵の孵化も阻止", "国内メーカー製"],
    coverage: ["ノミ", "マダニ", "ノミ卵・幼虫"]
  }
];

export function PreventionSelector() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{
    coverage?: CoverageType;
    form?: FormFactor;
    hwForm?: FormFactor;
    ftForm?: FormFactor;
  }>({});

  const handleNext = (update: Partial<typeof answers>) => {
    setAnswers(prev => ({ ...prev, ...update }));
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const reset = () => {
    setStep(1);
    setAnswers({});
  };

  const getResults = () => {
    if (answers.coverage === 'all-in-one') {
      return products.filter(p => p.category === 'all-in-one' && p.form === answers.form);
    } else {
      const hw = products.find(p => p.category === 'heartworm' && p.form === answers.hwForm);
      const ft = products.find(p => p.category === 'flea-tick' && p.form === answers.ftForm);
      return [hw, ft].filter(Boolean) as Product[];
    }
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-soft-100 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-primary-600 p-8 text-white relative">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-8 h-8" />
          <h2 className="text-2xl font-black">ワンちゃんの予防薬診断</h2>
        </div>
        <p className="opacity-90 font-bold text-sm">生活スタイルに合った、最適な組み合わせをご提案します。</p>
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Heart className="w-24 h-24" />
        </div>
      </div>

      <div className="p-8 md:p-12 min-h-[450px] flex flex-col">
        
        {/* Step 1: Coverage */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-black text-center text-gray-900">
              予防の「まとめ方」をお選びください
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => handleNext({ coverage: 'all-in-one' })}
                className="p-8 rounded-[2.5rem] border-2 border-soft-100 hover:border-primary-500 hover:bg-primary-50 transition-all group text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <ShieldCheck className="w-16 h-16 text-primary-600" />
                </div>
                <span className="font-black text-xl block mb-2 text-gray-900">オールインワン</span>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">
                  フィラリア・ノミ・マダニを1つのお薬で。管理を楽にしたい方へ。
                </p>
                <div className="mt-4 inline-flex items-center text-primary-600 text-xs font-black">
                  選択する <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </button>
              <button
                onClick={() => handleNext({ coverage: 'separate' })}
                className="p-8 rounded-[2.5rem] border-2 border-soft-100 hover:border-primary-500 hover:bg-primary-50 transition-all group text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Bug className="w-16 h-16 text-gray-400" />
                </div>
                <span className="font-black text-xl block mb-2 text-gray-900">個別タイプ</span>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">
                  フィラリアとノミ・マダニを別々で。細かく調整したい方へ。
                </p>
                <div className="mt-4 inline-flex items-center text-primary-600 text-xs font-black">
                  選択する <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Path A (All-in-one) Step 2: Form Factor */}
        {step === 2 && answers.coverage === 'all-in-one' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 flex-1 flex flex-col justify-center">
            <button onClick={handleBack} className="inline-flex items-center text-xs font-bold text-gray-400 hover:text-primary-600 mb-4 transition-colors">
              <ChevronLeft className="w-4 h-4" /> 前の質問に戻る
            </button>
            <h3 className="text-xl md:text-2xl font-black text-center text-gray-900">
              お薬の形状のご希望は？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'chewable', label: '美味しいおやつタイプ', desc: 'お肉のようなソフトチュアブル', icon: '🍖' },
                { id: 'tablet', label: '飲みやすい錠剤タイプ', desc: '超小型でベタつきもありません', icon: '💊' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNext({ form: item.id as FormFactor })}
                  className="p-8 rounded-[2.5rem] border-2 border-soft-100 hover:border-primary-500 hover:bg-primary-50 transition-all text-left"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <span className="font-black text-lg block mb-1 text-gray-900">{item.label}</span>
                  <span className="text-xs text-gray-400 font-bold">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Path B (Separate) Step 2: Heartworm Form */}
        {step === 2 && answers.coverage === 'separate' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 flex-1 flex flex-col justify-center">
            <button onClick={handleBack} className="inline-flex items-center text-xs font-bold text-gray-400 hover:text-primary-600 mb-4 transition-colors">
              <ChevronLeft className="w-4 h-4" /> 前の質問に戻る
            </button>
            <div className="text-center space-y-2">
              <span className="bg-primary-100 text-primary-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Question 1/2</span>
              <h3 className="text-xl md:text-2xl font-black text-gray-900">
                【フィラリア予防薬】の形状は？
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'chewable', label: 'おやつタイプ', desc: '牛肉風味のチュアブル', icon: '🍖' },
                { id: 'tablet', label: '錠剤タイプ', desc: 'シンプルな小型タブレット', icon: '💊' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNext({ hwForm: item.id as FormFactor })}
                  className="p-8 rounded-[2.5rem] border-2 border-soft-100 hover:border-primary-50 hover:border-primary-500 transition-all text-left"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <span className="font-black text-lg block mb-1 text-gray-900">{item.label}</span>
                  <span className="text-xs text-gray-400 font-bold">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Path B (Separate) Step 3: Flea & Tick Form */}
        {step === 3 && answers.coverage === 'separate' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 flex-1 flex flex-col justify-center">
            <button onClick={handleBack} className="inline-flex items-center text-xs font-bold text-gray-400 hover:text-primary-600 mb-4 transition-colors">
              <ChevronLeft className="w-4 h-4" /> 前の質問に戻る
            </button>
            <div className="text-center space-y-2">
              <span className="bg-accent-100 text-accent-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Question 2/2</span>
              <h3 className="text-xl md:text-2xl font-black text-gray-900">
                【ノミ・マダニ薬】の形状は？
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'chewable', label: 'おやつタイプ', desc: '即効性のあるチュアブル', icon: '🍖' },
                { id: 'spot-on', label: 'スポットタイプ', desc: '首に垂らす滴下薬', icon: '💧' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNext({ ftForm: item.id as FormFactor })}
                  className="p-8 rounded-[2.5rem] border-2 border-soft-100 hover:border-primary-50 hover:border-primary-500 transition-all text-left"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <span className="font-black text-lg block mb-1 text-gray-900">{item.label}</span>
                  <span className="text-xs text-gray-400 font-bold">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result Page */}
        {((step === 3 && answers.coverage === 'all-in-one') || (step === 4 && answers.coverage === 'separate')) && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-black text-gray-900">おすすめの組み合わせ</h3>
              <p className="text-gray-400 font-bold">
                診断に基づき、{answers.coverage === 'all-in-one' ? '便利な1剤タイプ' : 'しっかり予防の2剤セット'}をご提案します。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {getResults().map((product, idx) => (
                <div key={product.id} className="bg-white border-2 border-primary-100 rounded-[2.5rem] p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-[10px] font-black px-6 py-1 rounded-bl-2xl uppercase tracking-widest">
                    {product.category === 'all-in-one' ? 'All In One' : product.category === 'heartworm' ? 'Heartworm' : 'Flea & Tick'}
                  </div>
                  
                  <div className="w-full md:w-1/4">
                    <div className="aspect-square bg-soft-50 rounded-[2rem] flex flex-col items-center justify-center border border-soft-100 group-hover:bg-primary-50 transition-colors">
                      {product.form === 'chewable' ? <p className="text-5xl">🍖</p> : product.form === 'tablet' ? <p className="text-5xl">💊</p> : <p className="text-5xl">💧</p>}
                      <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">{product.form}</span>
                    </div>
                  </div>

                  <div className="w-full md:w-3/4 space-y-4">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black text-gray-900 leading-none">{product.name}</h4>
                      <p className="text-primary-600 font-bold text-xs mt-2">{product.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((f, i) => (
                        <span key={i} className="text-[10px] font-black bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> {f}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-soft-100">
                      <p className="text-[10px] font-black text-gray-400 mb-3 uppercase tracking-widest">この薬で予防できる範囲</p>
                      <div className="flex flex-wrap gap-2">
                        {product.coverage.map((c, i) => (
                          <span key={i} className="text-[11px] font-black text-gray-600 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-8">
              <button
                onClick={reset}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-soft-200 py-5 rounded-2xl font-black text-gray-500 hover:bg-soft-50 transition-all"
              >
                <RotateCcw className="w-5 h-5" /> もう一度やり直す
              </button>
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 bg-primary-600 py-5 rounded-2xl font-black text-white hover:bg-primary-700 transition-all shadow-xl shadow-primary-100"
              >
                診察を予約する <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-amber-50 p-6 rounded-3xl border-2 border-amber-100 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div className="text-[10px] text-amber-900/70 leading-relaxed font-bold">
                ※このガイドは一般的な目安です。実際の処方は、ワンちゃんの健康状態や検査結果に基づき、獣医師が最終判断いたします。<br />
                ※フィラリア予防薬の開始前には血液検査が必須となります。
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Progress Bar */}
      <div className="bg-soft-50 p-4 flex items-center justify-center gap-2 border-t border-soft-100">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              step >= s ? (step === (answers.coverage === 'all-in-one' ? 3 : 4) ? 'w-8 bg-emerald-500' : 'w-8 bg-primary-500') : 'w-4 bg-soft-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
