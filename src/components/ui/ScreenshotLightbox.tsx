"use client";

import { useState, useEffect, useCallback } from "react";
import type { ProjectScreenshot } from "@/data/projects";

type ScreenshotLightboxProps = {
  screenshots: ProjectScreenshot[];
  lang: "ar" | "en";
  title: string;
};

export default function ScreenshotLightbox({
  screenshots,
  lang,
  title,
}: ScreenshotLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isAr = lang === "ar";

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  // Lock body scroll and handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        if (isAr) goToPrev();
        else goToNext();
      }
      if (e.key === "ArrowLeft") {
        if (isAr) goToNext();
        else goToPrev();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeLightbox, goToNext, goToPrev, isAr]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <>
      {/* Grid of screenshots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((shot, i) => {
          const altText = isAr ? shot.alt.ar : shot.alt.en;
          return (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#111827] hover:border-[#38BDF8]/30 transition-colors block w-full outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] text-left rtl:text-right group"
              aria-label={`View full image: ${altText}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src}
                alt={altText}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 block"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label={isAr ? `معاينة لقطة من ${title}` : `Preview screenshot of ${title}`}
        >
          {/* Backdrop Click Area */}
          <div className="absolute inset-0" onClick={closeLightbox} aria-hidden="true" />

          {/* Modal Content Area */}
          <div className="relative w-full max-w-7xl max-h-screen flex flex-col items-center justify-center pointer-events-none">
            
            {/* Header (Close Button & Counter) */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-auto">
              <div className="bg-black/50 px-4 py-2 rounded-full text-white/80 font-mono text-sm border border-white/10">
                {isAr ? `${currentIndex + 1} / ${screenshots.length}` : `${currentIndex + 1} / ${screenshots.length}`}
              </div>
              <button
                onClick={closeLightbox}
                className="p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/80 hover:text-white transition-colors border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                aria-label={isAr ? "إغلاق" : "Close"}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Image */}
            <div className="relative w-full flex items-center justify-center pointer-events-auto mt-16 mb-20 px-12 sm:px-20 h-[70vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screenshots[currentIndex].src}
                alt={isAr ? screenshots[currentIndex].alt.ar : screenshots[currentIndex].alt.en}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Navigation Arrows */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={goToPrev}
                    className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/80 hover:text-white transition-colors border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                    aria-label={isAr ? "السابق" : "Previous"}
                  >
                    <svg className="w-6 h-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/80 hover:text-white transition-colors border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                    aria-label={isAr ? "التالي" : "Next"}
                  >
                    <svg className="w-6 h-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Caption Footer */}
            <div className="absolute bottom-4 left-4 right-4 text-center z-10 pointer-events-auto flex justify-center">
              <div className="bg-black/70 px-6 py-3 rounded-lg border border-white/10 max-w-3xl">
                <p className="text-white font-medium text-sm md:text-base leading-relaxed">
                  {isAr ? screenshots[currentIndex].caption.ar : screenshots[currentIndex].caption.en}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
