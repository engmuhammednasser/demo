"use client";

interface LiveButtonProps {
  href: string;
  labelAr: string;
  labelEn: string;
  locale: string;
}

export default function LiveButton({ href, labelAr, labelEn, locale }: LiveButtonProps) {
  return (
    <div className="mt-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 hover:bg-[#22C55E]/20 hover:border-[#22C55E]/40 transition-all"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
        {locale === "ar" ? labelAr : labelEn}
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}
