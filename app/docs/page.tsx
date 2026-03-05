import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Technical documentation for Encora's smart return infrastructure.",
};

const docSections = [
  {
    title: "Getting started",
    slug: "getting-started",
    description: "Introduction to Encora and quick setup guide.",
  },
  {
    title: "Hardware",
    slug: "hardware",
    description: "Bins, tags, placement, and hardware configuration.",
  },
  {
    title: "Verify API",
    slug: "verify-api",
    description: "Events schema and verification endpoints.",
  },
  {
    title: "Connect Webhooks",
    slug: "connect-webhooks",
    description: "Webhook payloads, retries, and configuration.",
  },
  {
    title: "FAQ",
    slug: "faq",
    description: "Frequently asked questions and troubleshooting.",
  },
];

export default function DocsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <h1 className="text-[clamp(28px,5vw,40px)] font-semibold tracking-tight leading-tight">
        Documentation
      </h1>
      <p className="mt-3 max-w-prose text-muted-foreground mb-12">
        Technical documentation for Encora's smart return infrastructure.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {docSections.map((section) => (
          <Link
            key={section.slug}
            href={`/docs/${section.slug}`}
            className="group rounded-xl border p-6 hover:bg-accent/50 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-foreground">
              {section.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
