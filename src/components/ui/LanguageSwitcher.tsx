"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  
  const getNextLangUrl = () => {
    const nextLang = currentLang === "ar" ? "en" : "ar";
    if (!pathname) return `/${nextLang}`;
    
    return pathname.replace(`/${currentLang}`, `/${nextLang}`);
  };

  return (
    <Link 
      href={getNextLangUrl()} 
      className="px-3 py-1 rounded border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
    >
      {currentLang === "ar" ? "EN" : "AR"}
    </Link>
  );
}
