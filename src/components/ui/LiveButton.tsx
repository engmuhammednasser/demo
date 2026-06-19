"use client";

interface LiveButtonProps {
  href: string;
  labelAr: string;
  labelEn: string;
  locale: string;
  archiveHref?: string;
  archiveLabelAr?: string;
  archiveLabelEn?: string;
}

export default function LiveButton({
  href,
  labelAr,
  labelEn,
  locale,
  archiveHref,
  archiveLabelAr = "تصفح الأرشيف",
  archiveLabelEn = "Browse Archive",
}: LiveButtonProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
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
      {archiveHref && (
        <a
          href={archiveHref}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          {locale === "ar" ? archiveLabelAr : archiveLabelEn}
        </a>
      )}
    </div>
  );
}
