import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function notFound() {
  const headersList = headers();
  const acceptHeader = headersList.get("accept") || "";

  // If the user's browser is asking for a webpage (HTML), redirect to contact us
  if (acceptHeader.includes("text/html")) {
    redirect("/contact-us");
  }

  // If it's a request for a missing asset (like a .js chunk or image file),
  // we return null so the server gives a clean 404, preventing ChunkLoadErrors.
  return null;
}
