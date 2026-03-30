"use client";

import { useEffect, useRef } from "react";
import { pushToDataLayer } from "lib/gtm";
import { usePathname } from "next/navigation";

export default function GTMEventTracker() {
  const pathname = usePathname();
  const prevPathname = useRef("");

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Find closest anchor tag (in case click is on an inner element like icon)
      const target = (e.target as HTMLElement).closest("a");
      
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Track PDF/deck downloads
      if (href.toLowerCase().endsWith(".pdf")) {
        pushToDataLayer({
          event: "pdf_download",
          file_name: href.split('/').pop() || href,
          link_url: href,
          page_path: window.location.pathname,
        });
      }

      // Track Outbound links
      // Check if it's an absolute URL
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin && url.origin !== window.location.origin && href.startsWith("http")) {
          pushToDataLayer({
            event: "outbound_link_click",
            link_url: href,
            page_path: window.location.pathname,
          });
        }
      } catch (err) {
        // invalid URL, ignore
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  // Track page views cleanly in Next.js App Router if needed
  useEffect(() => {
    if (pathname && pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      pushToDataLayer({
        event: "page_view",
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
