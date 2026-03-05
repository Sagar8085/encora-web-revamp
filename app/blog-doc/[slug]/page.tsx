import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "components/ui/badge";
import { Tag } from "lucide-react";

const posts: Record<
  string,
  {
    title: string;
    description: string;
    date: string;
    tags: string[];
    content: string;
  }
> = {
  "proof-at-drop": {
    title: "Why \"proof at drop\" matters",
    description: "Photo + weight + reason at drop turns debates into data. Refunds go faster; disputes go down; your team stops playing detective.",
    date: new Date().toISOString().split("T")[0],
    tags: ["returns", "ops"],
    content: `
Photo + weight + reason at drop turns debates into data. Refunds go faster; disputes go down; your team stops playing detective.

When customers drop items into Encora bins, we automatically capture photos, weight measurements, and reason codes. This proof-grade data creates an immutable record of the return condition at the moment of drop-off.

## The Problem

Traditional return processes rely on manual inspection and customer claims. Without evidence, disputes arise over:
- Item condition at drop-off
- Timestamp accuracy
- Reason for return

## The Solution

Encora's proof-at-drop system captures:
- **Photos**: Multiple angles of the item
- **Weight**: Verification against expected weight
- **Reason codes**: Customer-selected return reasons

This data is immediately available via webhooks to your OMS, reducing manual review and accelerating refund decisions.

## Benefits

- **Faster refunds**: Automated verification reduces review time
- **Fewer disputes**: Objective evidence settles disagreements
- **Better analytics**: Proof data improves fraud detection
- **Operational efficiency**: Less manual inspection needed
    `,
  },
  "access-vs-reuse": {
    title: "Access vs. Reuse: when to use which",
    description: "Access = brand-agnostic returns hub; Reuse = campus-grade container flow. Same core, different guardrails.",
    date: new Date().toISOString().split("T")[0],
    tags: ["reuse", "returns"],
    content: `
Access = brand-agnostic returns hub; Reuse = campus-grade container flow. Same core, different guardrails.

Both Encora Access and Encora Reuse use the same hardware and verification infrastructure, but serve different use cases.

## Encora Access

**Best for**: Retail returns, e-commerce fulfillment centers, and return hubs.

**Flow**: Customer scans order → drops item → bin captures proof → instant or delayed refund based on rules → webhook to OMS.

**Key features**:
- Order/SKU scanning
- Instant or delayed refund decisions
- Integration with POS/OMS systems
- Fraud reduction through proof

## Encora Reuse

**Best for**: Campus dining, office cafeterias, and reusable container programs.

**Flow**: Assign container (QR/RFID) → customer uses → returns to any bin → proof captured → status updated.

**Key features**:
- QR/RFID tag assignment
- Multi-location returns
- No deposit required (optional)
- Reuse tracking and analytics

## Core Infrastructure

Both products share:
- Same bin hardware
- Same verification cloud
- Same API infrastructure
- Same proof capture system

The difference is in the workflow and integration patterns, not the core technology.
    `,
  },
  "connect-webhooks": {
    title: "Connect: webhooks without a POS rip-and-replace",
    description: "Push refund status and exceptions to your POS/OMS via webhooks and idempotent events—no migration required.",
    date: new Date().toISOString().split("T")[0],
    tags: ["api", "ops"],
    content: `
Push refund status and exceptions to your POS/OMS via webhooks and idempotent events—no migration required.

Encora's webhook system sends real-time events to your existing systems, eliminating the need for complex integrations or POS replacements.

## How It Works

When an item is dropped into an Encora bin:
1. Bin captures proof (photos, weight, reason)
2. Verification cloud processes the data
3. Webhook is sent to your configured endpoint
4. Your system receives structured JSON payload

## Webhook Payload

\`\`\`json
{
  "event": "item.dropped",
  "timestamp": "2025-01-15T10:30:00Z",
  "order_id": "ORD-12345",
  "status": "verified",
  "evidence": {
    "photos": ["url1", "url2"],
    "weight": 1.2,
    "reason_code": "defective"
  }
}
\`\`\`

## Integration Benefits

- **No POS changes**: Works with existing systems
- **Real-time updates**: Instant notifications
- **Flexible routing**: Send to OMS, ERP, or custom endpoints
- **Retry logic**: Automatic retries for failed deliveries
- **Security**: Signed payloads and HTTPS only

## Configuration

Set webhook endpoints via the Encora dashboard or API. Configure retry policies, filtering rules, and payload transformations to match your system's requirements.
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: "/images/og-encora.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/images/og-encora.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  const postSlugs = Object.keys(posts);
  const currentIndex = postSlugs.indexOf(slug);
  const prevPost = currentIndex > 0 ? postSlugs[currentIndex - 1] : null;
  const nextPost =
    currentIndex < postSlugs.length - 1 ? postSlugs[currentIndex + 1] : null;

  return (
    <article className="container mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <Link
        href="/blog-doc"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        ← Back to Blog
      </Link>

      <header className="mb-8">
        <h1 className="text-[clamp(28px,5vw,40px)] font-semibold tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 flex-wrap">
          <time className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog-doc/tag/${tag}`}>
                <Badge className="text-xs border rounded-full px-2.5 py-0.5">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div
        className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto
          prose-headings:scroll-mt-24
          prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-xl
          prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-lg
          prose-p:leading-[1.7] prose-p:mb-4
          prose-ul:pl-6 prose-ul:my-4 prose-li:my-[6px]
          prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-foreground
          prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:text-foreground
          prose-code:before:content-none prose-code:after:content-none
          prose-a:text-primary prose-a:underline
          [&_pre_code]:text-foreground [&_pre_code]:bg-transparent"
        dangerouslySetInnerHTML={{
          __html: (() => {
            const lines = post.content.trim().split("\n");
            let html = "";
            let inCodeBlock = false;
            let codeBlockContent = "";
            let codeLang = "";

            for (let i = 0; i < lines.length; i++) {
              const line = lines[i];

              if (line.startsWith("```")) {
                if (inCodeBlock) {
                  // Closing code block
                  html += `<pre><code class="language-${codeLang}">${codeBlockContent}</code></pre>`;
                  codeBlockContent = "";
                  codeLang = "";
                  inCodeBlock = false;
                } else {
                  // Opening code block
                  codeLang = line.slice(3).trim();
                  inCodeBlock = true;
                }
                continue;
              }

              if (inCodeBlock) {
                codeBlockContent += line + "\n";
                continue;
              }

              // Handle headings
              if (line.startsWith("## ")) {
                html += `<h2>${line.slice(3)}</h2>`;
                continue;
              }
              if (line.startsWith("### ")) {
                html += `<h3>${line.slice(4)}</h3>`;
                continue;
              }

              // Handle list items
              if (line.trim().startsWith("- ")) {
                html += `<ul><li>${line.slice(2).trim()}</li></ul>`;
                continue;
              }

              // Handle empty lines
              if (line.trim() === "") {
                html += "";
                continue;
              }

              // Process inline formatting
              let processedLine = line;
              // Bold
              processedLine = processedLine.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              );
              // Inline code
              processedLine = processedLine.replace(
                /`([^`]+)`/g,
                '<code>$1</code>'
              );
              // Links
              processedLine = processedLine.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2">$1</a>'
              );

              html += `<p>${processedLine}</p>`;
            }

            return html;
          })(),
        }}
      />

      {(prevPost || nextPost) && (
        <nav className="mt-12 pt-8 border-t flex justify-between">
          {prevPost && (
            <Link
              href={`/blog-doc/${prevPost}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← {posts[prevPost].title}
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/blog-doc/${nextPost}`}
              className="text-sm text-muted-foreground hover:text-foreground ml-auto"
            >
              {posts[nextPost].title} →
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}

