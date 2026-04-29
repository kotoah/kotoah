'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Stethoscope, Bell, Phone, MapPin } from "lucide-react";

const navItems = [
  { name: "ホーム", href: "/", icon: Home },
  { name: "診療", href: "/services", icon: Stethoscope },
  { name: "お知らせ", href: "/news", icon: Bell },
  { name: "アクセス", href: "/about", icon: MapPin },
  { name: "電話", href: "tel:00-0000-0000", icon: Phone, isExternal: true },
];

export default function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-t border-gray-100 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.isExternal) {
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center flex-1 gap-1 text-primary-600 active:scale-95 transition-transform"
              >
                <div className="bg-primary-50 p-2 rounded-xl">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold">{item.name}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95 ${
                isActive ? "text-primary-600" : "text-gray-400"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "text-primary-600" : "text-gray-400"}`} />
              <span className="text-[10px] font-bold">{item.name}</span>
              {isActive && (
                <div className="w-1 h-1 bg-primary-600 rounded-full mt-0.5" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
