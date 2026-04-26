'use client';

import { useState } from "react";
import Link from "next/link";
import { PawPrint, ChevronDown } from "lucide-react";

const navigation = [
  { name: "ホーム", href: "/" },
  { 
    name: "当院案内", 
    children: [
      { name: "当院について", href: "/about" },
      { name: "設備・検査案内", href: "/about/facilities" },
      { name: "よくある質問", href: "/faq" },
    ]
  },
  { 
    name: "診療・サービス", 
    children: [
      { name: "診療案内", href: "/services" },
      { name: "料金案内", href: "/pricing" },
      { name: "ペットホテル", href: "/hotel" },
    ]
  },
  { name: "お知らせ", href: "/news" },
  { name: "フード・薬注文", href: "/order" },
];

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-primary-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3 group shrink-0">
          <div className="bg-primary-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <PawPrint className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black text-gray-900 tracking-tight">
            湖東<span className="text-primary-600">どうぶつ病院</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-x-8">
          {navigation.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-sm font-bold text-gray-600 hover:text-primary-600 transition-colors py-8 block"
                >
                  {item.name}
                </Link>
              ) : (
                <button className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-primary-600 transition-colors py-8">
                  {item.name}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                </button>
              )}

              {/* Dropdown Menu */}
              {item.children && openDropdown === item.name && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white rounded-3xl shadow-2xl border border-soft-100 p-3 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="px-5 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-all"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <Link
            href="/contact"
            className="bg-primary-600 text-white px-8 py-3 rounded-full font-black text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-100 ml-4"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile menu button (can be implemented later if needed) */}
        <button className="lg:hidden p-2 text-gray-600">
           <div className="w-6 h-0.5 bg-current mb-1.5" />
           <div className="w-6 h-0.5 bg-current mb-1.5" />
           <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>
    </header>
  );
}
