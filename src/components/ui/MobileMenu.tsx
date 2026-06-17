"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

interface MobileMenuProps {
  lang: string;
  locale: Locale;
  nav: {
    home: string;
    work: string;
    lab: string;
    backend: string;
    services: string;
    about: string;
    contact: string;
  };
}

export default function MobileMenu({ lang, locale, nav }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const prevPathname = useRef(pathname);

  // Close when route changes (compare to previous, avoid setState on initial mount)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setIsOpen(false);
    }
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const nextLang = locale === "ar" ? "en" : "ar";
  const nextLangUrl = pathname ? pathname.replace(`/${locale}`, `/${nextLang}`) : `/${nextLang}`;

  const links = [
    {
      label: nav.services,
      href: `/${lang}/services`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      label: nav.work,
      href: `/${lang}/work`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: nav.about,
      href: `/${lang}/about`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      label: nav.lab,
      href: `/${lang}/lab`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      label: nav.backend,
      href: `/${lang}/backend`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      label: nav.contact,
      href: `/${lang}/contact`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <div ref={menuRef} className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? (locale === "ar" ? "أغلق القائمة" : "Close menu") : (locale === "ar" ? "افتح القائمة" : "Open menu")}
        aria-expanded={isOpen}
        className="relative z-[60] flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-white/20 hover:border-[#38BDF8]/60 hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50"
      >
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Menu panel */}
      <div
        className={`fixed top-0 ${locale === "ar" ? "right-0" : "left-0"} z-50 h-[100dvh] w-[85vw] max-w-sm bg-[#0B1020] rtl:border-l ltr:border-r border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : locale === "ar"
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={locale === "ar" ? "القائمة الرئيسية" : "Main navigation"}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
          <span className="text-sm font-bold text-[#38BDF8] uppercase tracking-widest">
            {locale === "ar" ? "القائمة" : "Menu"}
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label={locale === "ar" ? "أغلق القائمة" : "Close menu"}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/20 hover:border-[#38BDF8]/60 hover:bg-white/5 transition-all text-white"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4" aria-label={locale === "ar" ? "روابط التنقل" : "Navigation links"}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            const isContact = link.href.endsWith("/contact");

            if (isContact) {
              return (
                <div key={link.href} className="px-6 py-4">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#38BDF8]/10 hover:bg-[#38BDF8] border border-[#38BDF8]/20 hover:border-transparent text-[#38BDF8] hover:text-[#020617] rounded-xl text-base font-bold transition-all shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                  >
                    <div className="shrink-0">
                      {link.icon}
                    </div>
                    <span>{locale === "ar" ? "ابدأ مشروعك" : "Start a Project"}</span>
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-6 py-4 transition-colors duration-300 border-l-4 ${
                  isActive
                    ? "border-[#38BDF8] text-[#38BDF8] bg-white/5"
                    : "border-transparent text-[#F8FAFC] hover:border-[#38BDF8]/50 hover:bg-white/5 hover:text-[#38BDF8]"
                }`}
              >
                <div className={`p-2 rounded-lg shrink-0 ${isActive ? "bg-[#38BDF8]/10 text-[#38BDF8]" : "bg-white/5 text-[#94A3B8] group-hover:text-[#38BDF8]"}`}>
                  {link.icon}
                </div>
                <span className="text-lg font-semibold">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer: Language switcher + WhatsApp CTA */}
        <div className="p-5 border-t border-white/10 space-y-3 shrink-0">
          <Link
            href={nextLangUrl}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/20 hover:border-[#38BDF8]/50 hover:bg-white/5 transition-all text-sm font-semibold text-[#94A3B8] hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {locale === "ar" ? "Switch to English" : "التبديل للعربية"}
          </Link>
          <a
            href={`https://wa.me/201025811613?text=${encodeURIComponent(locale === "ar" ? "أهلاً محمد، بتواصل معاك من خلال البورتفوليو." : "Hello Muhammed, I'm reaching out from your portfolio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#22C55E] text-white font-bold text-sm hover:bg-[#22C55E]/90 transition-all shadow-[0_4px_14px_0_rgba(34,197,94,0.39)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {locale === "ar" ? "واتساب" : "WhatsApp"}
          </a>
        </div>
      </div>
    </div>
  );
}
