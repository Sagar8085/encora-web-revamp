"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { sendGTMEvent } from "@/utils/gtm";
import { stickyCtaData } from "@/app/data";

export function StickyCTA() {
  const pathname = usePathname();
  const hide = pathname?.startsWith("/contact") || pathname === "/thank-you";

  useEffect(() => {
    if (hide) return;
    const footer = document.querySelector('footer');
    const ctaWrapper = document.getElementById('sticky-cta-wrapper');
    if (!footer || !ctaWrapper) return;

    let ticking = false;

    const updatePosition = () => {
      const footerRect = footer.getBoundingClientRect();
      const overlap = window.innerHeight - footerRect.top;
      
      if (overlap > 0) {
        ctaWrapper.style.transform = `translateY(-${overlap}px)`;
      } else {
        ctaWrapper.style.transform = `translateY(0px)`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial check
    updatePosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [hide]);

  if (hide) return null;

  return (
    <div
      id="sticky-cta-wrapper"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center md:justify-end transition-transform duration-75 ease-out will-change-transform"
      role="region"
      aria-label="Sticky actions"
    >
      <div className="pointer-events-auto mx-3 mb-3 flex items-center justify-between gap-3 rounded-2xl bg-emerald-700 px-4 py-3 text-white shadow-lg md:w-[23rem]">
        <span className="text-sm font-medium">{stickyCtaData.questionText}</span>
        <div className="flex items-center gap-2">
          <Link
            href={stickyCtaData.talkButtonLink}
            className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-emerald-800"
          >
            {stickyCtaData.talkButtonText}
          </Link>

          <a
            href={stickyCtaData.specSheetLink}
            download
            onClick={() => sendGTMEvent({ event: "pdf_download", file: "spec-sheet.pdf" })}
            className="rounded-xl px-3 py-2 text-sm font-semibold ring-1 ring-white/40"
          >
            {stickyCtaData.specSheetText}
          </a>
        </div>
      </div>
    </div>
  );
}
