"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyCTA() {
  const pathname = usePathname();
  const hide = pathname?.startsWith("/contact") || pathname === "/thank-you";
  if (hide) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center md:justify-end "
      role="region"
      aria-label="Sticky actions"
    >
      <div className="mx-3 mb-3 flex items-center justify-between gap-3 rounded-2xl bg-emerald-700 px-4 py-3 text-white shadow-lg md:w-[23rem]">
        <span className="text-sm font-medium">Have a question?</span>
        <div className="flex items-center gap-2">
          <Link
            href="/contact-us"
            className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-emerald-800"
          >
            Talk to us
          </Link>

          <a
            href="/resources/spec-sheet.pdf"
            download
            className="rounded-xl px-3 py-2 text-sm font-semibold ring-1 ring-white/40"
          >
            Spec sheet
          </a>
        </div>
      </div>
    </div>
  );
}
