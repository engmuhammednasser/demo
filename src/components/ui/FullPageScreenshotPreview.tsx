"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type EGScreenshot = {
  src: string;
  alt: { en: string; ar: string };
  title: { en: string; ar: string };
  market?: { en: string; ar: string };
  description?: { en: string; ar: string };
  /** true = long full-page capture → slow upward pan (9s). false = shorter crop → fast pan (3s). */
  isFullPage?: boolean;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const FRAME_H = 420; // px — preview frame height on desktop

// ─── Individual Card ──────────────────────────────────────────────────────────

function ScreenshotCard({
  shot,
  index,
  isAr,
  onOpen,
  reducedMotion,
}: {
  shot: EGScreenshot;
  index: number;
  isAr: boolean;
  onOpen: (i: number) => void;
  reducedMotion: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const altText    = isAr ? shot.alt.ar    : shot.alt.en;
  const titleText  = isAr ? shot.title.ar  : shot.title.en;
  const marketText = shot.market      ? (isAr ? shot.market.ar      : shot.market.en)      : null;
  const descText   = shot.description ? (isAr ? shot.description.ar : shot.description.en) : null;

  const panDuration = shot.isFullPage ? 9 : 3;

  // Image transform: pan from top → bottom on hover/focus (disabled when reducedMotion)
  const imgStyle: React.CSSProperties = reducedMotion
    ? { width: "100%", height: "auto", display: "block" }
    : {
        width: "100%",
        height: "auto",
        display: "block",
        transform: hovered
          ? `translateY(calc(-100% + ${FRAME_H}px))`
          : "translateY(0)",
        transition: `transform ${hovered ? panDuration : 1.5}s ease-in-out`,
        willChange: "transform",
      };

  const handleOpen = useCallback(() => onOpen(index), [onOpen, index]);

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#111827] shadow-lg hover:border-white/20 hover:shadow-[0_8px_30px_rgba(56,189,248,0.07)] transition-all duration-300">

      {/* ── Preview frame (clickable) ─────────────────────────────── */}
      <button
        type="button"
        onClick={handleOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        aria-label={
          isAr
            ? `عرض ${titleText} كاملاً`
            : `View ${titleText} full screenshot`
        }
        className="relative block w-full text-left rtl:text-right outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-inset cursor-zoom-in"
        style={{ height: FRAME_H, overflow: "hidden", flexShrink: 0 }}
      >
        {/* Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shot.src} alt={altText} style={imgStyle} />

        {/* Bottom fade — hides when panning */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background:
              "linear-gradient(to top, rgba(17,24,39,0.95) 0%, transparent 100%)",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        />

        {/* Market badge — top start */}
        {marketText && (
          <div
            aria-hidden="true"
            className={`absolute top-3 ${isAr ? "right-3" : "left-3"} px-2.5 py-1 bg-[#38BDF8] text-[#0B1020] text-xs font-bold rounded-md shadow`}
          >
            {marketText}
          </div>
        )}

        {/* Full-page badge — top end */}
        {shot.isFullPage && (
          <div
            aria-hidden="true"
            className={`absolute top-3 ${isAr ? "left-3" : "right-3"} flex items-center gap-1 px-2 py-1 bg-black/50 border border-white/10 text-white/60 text-xs rounded-md backdrop-blur-sm`}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            {isAr ? "صفحة كاملة" : "Full page"}
          </div>
        )}

        {/* Hover hint badge — bottom centre, fades out on hover */}
        {!reducedMotion && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              opacity: hovered ? 0 : 1,
              transition: "opacity 0.3s ease",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <svg className="w-3 h-3 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7M12 3v18" />
            </svg>
            <span className="text-white/70 text-xs font-medium hidden md:inline">
              {isAr ? "مرّر لعرض الصورة" : "Hover to preview"}
            </span>
            <span className="text-white/70 text-xs font-medium md:hidden">
              {isAr ? "اضغط للعرض" : "Tap to view"}
            </span>
          </div>
        )}

        {/* Zoom icon overlay on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors duration-300"
        >
          <div
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(0.8)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            className="p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/10"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>
      </button>

      {/* ── Card footer ───────────────────────────────────────────── */}
      <div className="px-5 py-4 space-y-1.5 flex-1">
        <p className="text-white font-semibold text-base leading-snug">{titleText}</p>
        {descText && (
          <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-2">{descText}</p>
        )}
      </div>
    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  screenshots,
  currentIndex,
  isAr,
  onClose,
  onChange,
}: {
  screenshots: EGScreenshot[];
  currentIndex: number;
  isAr: boolean;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const total = screenshots.length;
  const shot  = screenshots[currentIndex];

  const goPrev = useCallback(
    () => onChange((currentIndex - 1 + total) % total),
    [currentIndex, total, onChange]
  );
  const goNext = useCallback(
    () => onChange((currentIndex + 1) % total),
    [currentIndex, total, onChange]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") (isAr ? goPrev : goNext)();
      if (e.key === "ArrowLeft")  (isAr ? goNext : goPrev)();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isAr, goPrev, goNext, onClose]);

  const altText   = isAr ? shot.alt.ar   : shot.alt.en;
  const titleText = isAr ? shot.title.ar : shot.title.en;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isAr ? `معاينة: ${titleText}` : `Preview: ${titleText}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal shell */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-4 pointer-events-none">

        {/* Top bar */}
        <div className="flex items-center justify-between pointer-events-auto">
          <div className="text-white/60 text-sm font-mono px-4 py-2 bg-black/50 rounded-full border border-white/10">
            {currentIndex + 1} / {total}
          </div>
          <button
            onClick={onClose}
            className="p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/80 hover:text-white border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] transition-colors"
            aria-label={isAr ? "إغلاق" : "Close"}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image area — scrollable for full-page screenshots */}
        <div
          className="relative w-full rounded-xl overflow-auto pointer-events-auto"
          style={{ maxHeight: "75vh" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={shot.src}
            src={shot.src}
            alt={altText}
            className="w-full h-auto block rounded-xl shadow-2xl"
          />
        </div>

        {/* Caption */}
        <div className="text-center pointer-events-auto">
          <div className="inline-block px-5 py-2.5 bg-black/60 border border-white/10 rounded-lg">
            <p className="text-white/80 text-sm font-medium">{titleText}</p>
            {shot.market && (
              <span className="text-[#38BDF8] text-xs font-semibold">
                {isAr ? shot.market.ar : shot.market.en}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      {total > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/80 hover:text-white border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] transition-colors z-10"
            aria-label={isAr ? "التالي" : "Previous"}
          >
            <svg className="w-6 h-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/80 hover:text-white border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] transition-colors z-10"
            aria-label={isAr ? "السابق" : "Next"}
          >
            <svg className="w-6 h-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function FullPageScreenshotPreview({
  screenshots,
  lang,
}: {
  screenshots: EGScreenshot[];
  lang: "en" | "ar";
}) {
  const isAr = lang === "ar";
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion]   = useState(false);

  // Detect prefers-reduced-motion on mount
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((shot, i) => (
          <ScreenshotCard
            key={i}
            shot={shot}
            index={i}
            isAr={isAr}
            onOpen={setLightboxIndex}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          screenshots={screenshots}
          currentIndex={lightboxIndex}
          isAr={isAr}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </>
  );
}
