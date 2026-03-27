"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for tracking
    console.error("Application Render Error:", error);

    // Detect if this is a deployment mismatched chunk load error
    const isChunkLoadError =
      error?.name === "ChunkLoadError" ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("Unexpected token '<'"); // Often associated with returning HTML instead of JS chunks

    if (isChunkLoadError) {
      // Use sessionStorage to prevent an infinite reload loop if the CDN cache is severely stuck
      const chunkFailed = sessionStorage.getItem("chunk_load_failed");
      
      if (!chunkFailed) {
        sessionStorage.setItem("chunk_load_failed", "true");
        // Force a hard reload from the server, passing a cache-busting query parameter 
        // to bypass stale Edge/CDN HTML caches (Cloudflare/Vercel)
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("reload", Date.now().toString());
        window.location.replace(currentUrl.toString());
        return;
      }
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center bg-gray-50 dark:bg-zinc-900 rounded-xl my-12 mx-4 sm:mx-auto max-w-2xl border border-gray-200 dark:border-zinc-800">
      <div className="text-emerald-600 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
        Oops, something went wrong!
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        We ran into an unexpected issue while loading this page. This usually happens when updates are being rolled out.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            sessionStorage.removeItem("chunk_load_failed");
            reset();
          }}
          className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors shadow-sm"
        >
          Try again
        </button>
        <button
          onClick={() => {
            sessionStorage.removeItem("chunk_load_failed");
            window.location.href = "/";
          }}
          className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-gray-300 dark:border-zinc-700 font-medium rounded-lg transition-colors shadow-sm"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
