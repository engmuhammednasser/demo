"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  
  const getNextLangUrl = () => {
    if (!pathname) return currentLang === "ar" ? "/" : "/ar";
    
    if (currentLang === "ar") {
      // Switch to English: Remove the /ar prefix
      const newPath = pathname.replace(/^\/ar/, "");
      return newPath === "" ? "/" : newPath;
    } else {
      // Switch to Arabic: Add the /ar prefix
      return `/ar${pathname === "/" ? "" : pathname}`;
    }
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
