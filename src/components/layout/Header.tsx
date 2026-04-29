'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { PawPrint, ChevronDown, Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-primary-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-primary-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <PawPrint className="w-6 h-6 text-white" />
          </div>
          <span className="text-[1.15rem] xs:text-xl font-black text-gray-900 tracking-tight whitespace-nowrap">
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

              {/* Dropdown Menu (Desktop) */}
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

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニュー"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-white lg:hidden flex flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100 shrink-0">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-500 p-2 rounded-xl">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tight">
                湖東<span className="text-primary-600">どうぶつ病院</span>
              </span>
            </div>
            <button 
              className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="閉じる"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Menu Body - Scrollable Links */}
          <div className="flex-1 overflow-y-auto px-6 py-10">
            <nav className="flex flex-col space-y-10">
              {navigation.map((item) => (
                <div key={item.name} className="flex flex-col space-y-4">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-3xl font-black text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="text-3xl font-black text-gray-900">{item.name}</div>
                  )}
                  
                  {item.children && (
                    <div className="flex flex-col space-y-4 pl-6 border-l-4 border-primary-500/20">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="text-xl font-bold text-gray-500 hover:text-primary-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Menu Footer */}
          <div className="p-6 border-t border-gray-100 shrink-0 bg-gray-50">
            <Link
              href="/contact"
              className="block w-full bg-primary-600 text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl active:bg-primary-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
