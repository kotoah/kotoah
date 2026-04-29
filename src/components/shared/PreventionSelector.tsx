'use client';

import { useState } from 'react';
import { ChevronRight, RotateCcw, ShieldCheck, Bug, Pill, Syringe, Heart, Info, CheckCircle2, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

type Species = 'dog' | 'cat' | 'ferret';
type FormFactor = 'chewable' | 'spot-on' | 'tablet';
type Coverage = 'all-in-one' | 'separate';

interface Product {
  name: string;
  type: string;
  form: FormFactor[];
  species: Species[];
  description: string;
  features: string[];
  coverage: string[];
}

const products: Product[] = [
  {
    name: "ネクスガードスペクトラ",
    type: "オールインワン（おやつタイプ）",
    form: ['chewable'],
    species: ['dog'],
    description: "これひとつでフィラリア・ノミ・マダニ・お腹の寄生虫まで予防できる一番人気の予防薬です。",
    features: ["美味しいソフトチュアブル", "即効性が高い", "1ヶ月に1回"],
    coverage: ["フィラリア", "ノミ", "マダニ", "回虫", "鉤虫", "鞭虫"]
  },
  {
    name: "クレデリオプラス",
    type: "オールインワン（錠剤タイプ）",
    form: ['tablet'],
    species: ['dog'],
    description: "非常に小さく、フレーバー付きで飲ませやすい錠剤タイプのオールインワン予防薬です。",
    features: ["超小型の錠剤", "ベタつきなし", "食事と一緒に投与"],
    coverage: ["フィラリア", "ノミ", "マダニ", "回虫", "鉤虫", "鞭虫"]
  },
  {
    name: "レボリューション / レボリューションプラス",
    type: "スポットオン（滴下タイプ）",
    form: ['spot-on'],
    species: ['cat', 'dog'],
    description: "首筋に垂らすだけで、フィラリアやノミなどを予防。お薬が苦手な子に最適です。",
    features: ["垂らすだけ", "お腹の虫にも効く", "猫ちゃんに特におすすめ"],
    coverage: ["フィラリア", "ノミ", "耳ダニ", "回虫", "鉤虫"]
  },
  {
    name: "ネクスガード",
    type: "ノミ・マダニ専用（おやつタイプ）",
    form: ['chewable'],
    species: ['dog'],
    description: "ノミ・マダニに特化した美味しいおやつタイプ。フィラリア予防薬と組み合わせて使用します。",
    features: ["高い嗜好性", "即効駆除", "シャンプーの影響なし"],
    coverage: ["ノミ", "マダニ"]
  },
  {
    name: "イベルメック / ハートメクチン",
    type: "フィラリア専用",
    form: ['chewable', 'tablet'],
    species: ['dog'],
    description: "昔からの定番。フィラリア予防に特化したお薬です。",
    features: ["コストパフォーマンス", "安全性が高い", "美味しい（イベルメック）"],
    coverage: ["フィラリア", "回虫", "鉤虫"]
  }
];

export function PreventionSelector() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<{
    species?: Species;
    form?: FormFactor;
    coverage?: Coverage;
  }>({});

  const nextStep = (update: Partial<typeof selections>) => {
    setSelections(prev => ({ ...prev, ...update }));
    setStep(prev => prev + 1);
  };

  const reset = () => {
    setStep(1);
    setSelections({});
  };

  const getRecommendations = () => {
    const { species, form, coverage } = selections;
    
    return products.filter(p => {
      // 種別チェック
      if (!p.species.includes(species!)) return false;

      // フェレットの場合のロジック（簡易）
      if (species === 'ferret') return p.name.includes('レボリューション') || p.name.includes('イベルメック');

      // 形状チェック
      if (form && !p.form.includes(form)) {
        // スポット希望なのに錠剤しかない、などの場合は除外したいが、
        // 選択肢がない場合は近いものを出す等の調整が必要
      }

      // 範囲チェック
      if (coverage === 'all-in-one' && !p.type.includes('オールインワン')) return false;
      if (coverage === 'separate' && p.type.includes('オールインワン')) return false;

      return true;
    });
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-soft-100 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-primary-600 p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-8 h-8" />
          <h2 className="text-2xl font-black">予防薬セレクト・ガイド</h2>
        </div>
        <p className="opacity-90 font-bold text-sm">簡単な質問に答えるだけで、最適な予防の組み合わせをご提案します。</p>
      </div>

      <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
        
        {/* Step 1: Species */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl md:text-2xl font-black text-center text-gray-900">
              どの子の予防ですか？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'dog', label: 'ワンちゃん', icon: '🐕' },
                { id: 'cat', label: 'ネコちゃん', icon: '🐈' },
                { id: 'ferret', label: 'フェレット', icon: '🦦' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => nextStep({ species: item.id as Species })}
                  className="p-8 rounded-[2rem] border-2 border-soft-100 hover:border-primary-500 hover:bg-primary-50 transition-all group text-center"
                >
                  <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="font-black text-gray-700">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Form Factor (Skip for Ferret) */}
        {step === 2 && selections.species !== 'ferret' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl md:text-2xl font-black text-center text-gray-900">
              お薬のタイプにご希望はありますか？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'chewable', label: 'おやつタイプ', desc: '美味しく食べられる' },
                { id: 'spot-on', label: 'スポットタイプ', desc: '首筋に垂らすだけ' },
                { id: 'tablet', label: '錠剤タイプ', desc: 'ベタつきなし・小型' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => nextStep({ form: item.id as FormFactor })}
                  className="p-8 rounded-[2rem] border-2 border-soft-100 hover:border-primary-500 hover:bg-primary-50 transition-all group"
                >
                  <span className="font-black text-lg block mb-2 text-gray-900">{item.label}</span>
                  <span className="text-xs text-gray-500 font-bold">{item.desc}</span>
                </button>
              ))}
              <button
                onClick={() => nextStep({})}
                className="md:col-span-3 p-4 text-sm text-gray-400 font-bold hover:text-primary-600 transition-colors"
              >
                特にこだわらない
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Coverage */}
        {(step === 3 || (step === 2 && selections.species === 'ferret')) && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl md:text-2xl font-black text-center text-gray-900">
              予防のまとめ方をお選びください
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => nextStep({ coverage: 'all-in-one' })}
                className="p-8 rounded-[2rem] border-2 border-primary-100 bg-primary-50/30 hover:border-primary-500 hover:bg-primary-50 transition-all group text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <ShieldCheck className="w-16 h-16 text-primary-600" />
                </div>
                <span className="font-black text-xl block mb-2 text-primary-900">オールインワン</span>
                <p className="text-sm text-primary-800/70 font-bold leading-relaxed">
                  フィラリア・ノミ・マダニを1つのお薬でまとめて予防したい。管理を楽にしたい方へ。
                </p>
              </button>
              <button
                onClick={() => nextStep({ coverage: 'separate' })}
                className="p-8 rounded-[2rem] border-2 border-soft-100 hover:border-primary-500 hover:bg-primary-50 transition-all group text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Bug className="w-16 h-16 text-gray-400" />
                </div>
                <span className="font-black text-xl block mb-2 text-gray-900">個別タイプ</span>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">
                  フィラリアとノミ・マダニを別々のお薬で。状況に合わせて細かく調整したい方へ。
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Result Page */}
        {((step === 4) || (step === 3 && selections.species === 'ferret')) && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="text-center">
              <h3 className="text-2xl font-black text-gray-900 mb-2">おすすめの予防プラン</h3>
              <p className="text-gray-500 font-bold">
                {selections.species === 'dog' ? 'ワンちゃん' : selections.species === 'cat' ? 'ネコちゃん' : 'フェレット'}に最適な組み合わせです
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {getRecommendations().length > 0 ? (
                getRecommendations().map((product, idx) => (
                  <div key={idx} className="bg-white border-2 border-primary-100 rounded-[2.5rem] p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary-500 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">Recommendation</div>
                    <div className="w-full md:w-1/3 space-y-4">
                      <div className="aspect-square bg-soft-50 rounded-3xl flex items-center justify-center border border-soft-100">
                        {/* Placeholder for Product Image */}
                        <div className="text-center">
                           <Pill className="w-12 h-12 text-primary-300 mx-auto mb-2" />
                           <span className="text-[10px] font-black text-gray-400">IMAGE</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-4">
                      <div>
                        <span className="text-xs font-black text-primary-600 uppercase tracking-wider">{product.type}</span>
                        <h4 className="text-2xl font-black text-gray-900 mt-1">{product.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((f, i) => (
                          <span key={i} className="text-[10px] font-black bg-primary-50 text-primary-700 px-3 py-1 rounded-full border border-primary-100 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> {f}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-soft-100">
                        <p className="text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">予防できる範囲</p>
                        <div className="flex flex-wrap gap-2">
                          {product.coverage.map((c, i) => (
                            <span key={i} className="text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 text-center">
                  <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <p className="font-black text-amber-900">条件に完全に一致する製品が見つかりませんでした。</p>
                  <p className="text-sm text-amber-800/70 mt-2">診察時に最適なプランを一緒に考えさせていただきますので、お気軽にご相談ください。</p>
                </div>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-8">
              <button
                onClick={reset}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-soft-200 py-4 rounded-2xl font-black text-gray-500 hover:bg-soft-50 transition-all"
              >
                <RotateCcw className="w-5 h-5" /> もう一度やり直す
              </button>
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 bg-primary-600 py-4 rounded-2xl font-black text-white hover:bg-primary-700 transition-all shadow-lg"
              >
                診察を予約する <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-soft-50 p-6 rounded-2xl border border-soft-100">
              <p className="text-[10px] text-gray-400 leading-relaxed italic">
                ※このガイドは一般的な目安です。実際の処方は、動物の状態や検査結果に基づいて獣医師が最終判断いたします。<br />
                ※フィラリア予防薬の開始前には血液検査が必要です。
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Footer / Progress Bar */}
      <div className="bg-soft-50 p-4 flex items-center justify-center gap-2 border-t border-soft-100">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              step >= s ? (step === 4 ? 'w-8 bg-emerald-500' : 'w-8 bg-primary-500') : 'w-4 bg-soft-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
