'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  PawPrint, ChevronDown, Menu, X, 
  Home, Info, Stethoscope, Bell, 
  Pill, Heart, Calendar, HelpCircle, 
  Settings, Building2, Banknote, Mail 
} from "lucide-react";

const navigation = [
  { name: "ホーム", href: "/", icon: Home },
  { 
    name: "当院案内", 
    icon: Building2,
    children: [
      { name: "当院について", href: "/about", icon: Info },
      { name: "設備・検査案内", href: "/about/facilities", icon: Settings },
      { name: "よくある質問", href: "/faq", icon: HelpCircle },
    ]
  },
  { 
    name: "診療案内", 
    icon: Stethoscope,
    children: [
      { name: "診療案内トップ", href: "/services", icon: Heart },
      { name: "一般診療", href: "/services/general", icon: Stethoscope },
      { name: "予防医療", href: "/services/prevention", icon: Pill },
      { name: "エキゾチック診療", href: "/services/exotic", icon: PawPrint },
      { name: "健康診断", href: "/services/checkup", icon: Calendar },
    ]
  },
  { 
    name: "各種サービス", 
    icon: Settings,
    children: [
      { name: "料金案内", href: "/pricing", icon: Banknote },
      { name: "ペットホテル", href: "/hotel", icon: Building2 },
      { name: "フード・薬注文", href: "/order", icon: Pill },
    ]
  },
  { name: "お知らせ", href: "/news", icon: Bell },
  { name: "お問い合わせ", href: "/contact", icon: Mail },
];

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // メニュー開閉時に背景のスクロールを制御
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-lg border-b border-primary-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-primary-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <PawPrint className="w-6 h-6 text-white" />
          </div>
          <span className="text-[1.15rem] xs:text-xl font-black text-gray-900 tracking-tight whitespace-nowrap">
            湖東<span className="text-primary-600">どうぶつ病院</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Trigger Button */}
        <button 
          className="lg:hidden flex flex-col items-center justify-center p-2 relative z-[100001]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <div className="bg-gray-100 p-2 rounded-full">
              <X className="w-8 h-8 text-gray-900" />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="bg-primary-600 text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-primary-100">
                <Menu className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">Menu</span>
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Modern Dashboard Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100000] bg-soft-cream flex flex-col overflow-hidden">
          {/* Menu Header (Branding) */}
          <div className="flex items-center justify-center h-24 shrink-0 bg-white border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-500 p-2 rounded-xl">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black text-gray-900">
                湖東<span className="text-primary-600">どうぶつ病院</span>
              </span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="flex-1 overflow-y-auto px-4 py-8">
            <div className="grid grid-cols-2 gap-4">
              {navigation.map((item) => (
                <div key={item.name} className={`${item.children ? 'col-span-2 mt-4' : 'col-span-1'}`}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="font-black text-gray-900 text-sm">{item.name}</span>
                    </Link>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 px-2">
                        <div className="w-1.5 h-6 bg-primary-500 rounded-full" />
                        <h3 className="font-black text-gray-400 uppercase tracking-widest text-xs">{item.name}</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="w-10 h-10 bg-soft-50 text-gray-600 rounded-xl flex items-center justify-center group-active:bg-primary-500 group-active:text-white transition-colors">
                              <child.icon className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-gray-800 text-xs leading-tight">{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Footer (Quick Contact) */}
          <div className="p-6 bg-white border-t border-gray-100 shrink-0 grid grid-cols-2 gap-4 pb-safe">
            <a
              href="tel:00-0000-0000"
              className="bg-accent-500 text-white flex flex-col items-center justify-center py-4 rounded-2xl font-black shadow-lg shadow-accent-100 active:bg-accent-600"
            >
              <Phone className="w-6 h-6 mb-1" />
              <span className="text-xs">お電話</span>
            </a>
            <Link
              href="/contact"
              className="bg-primary-600 text-white flex flex-col items-center justify-center py-4 rounded-2xl font-black shadow-lg shadow-primary-100 active:bg-primary-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Mail className="w-6 h-6 mb-1" />
              <span className="text-xs">相談フォーム</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
