import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // If you ever need to add logic here, it will safely skip all static assets
  // and API routes because of the matcher configuration below.
  return NextResponse.next();
}

// Ensure that middleware NEVER runs on Next.js build assets, images, or API routes.
// This prevents Edge environment rewrite loops or false positives that cause ChunkLoadErrors.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files and JS chunks)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
