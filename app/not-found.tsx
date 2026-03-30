"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // We use a client-side redirect instead of a server-side `redirect()` API.
    // This guarantees that the server always responds with a strict 404 HTTP status.
    // If a missing JS asset chunk hits this route, Webpack will process the 404 status gracefully.
    // A server-side redirect (307) would serve 200 OK (HTML text), causing ChunkLoadError and '<' syntax errors.
    router.replace("/contact-us");
  }, [router]);

  return (
    <div style={{ display: "none" }}>
      404 - Not Found
    </div>
  );
}
