"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error
    console.error("Global Layout Render Error:", error);

    // Hard-reload for out-of-sync chunk deployments
    const isChunkLoadError =
      error?.name === "ChunkLoadError" ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("Unexpected token '<'");

    if (isChunkLoadError) {
      const chunkFailed = sessionStorage.getItem("global_chunk_load_failed");
      if (!chunkFailed) {
        sessionStorage.setItem("global_chunk_load_failed", "true");
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("reload", Date.now().toString());
        window.location.replace(currentUrl.toString());
      }
    }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
          <h2>A critical system error occurred.</h2>
          <p>Please refresh the page to continue.</p>
          <button
            onClick={() => {
              sessionStorage.removeItem("global_chunk_load_failed");
              reset();
            }}
            style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", backgroundColor: "#059669", color: "white", border: "none", borderRadius: "0.5rem", cursor: "pointer", fontWeight: "bold" }}
          >
            Force Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
