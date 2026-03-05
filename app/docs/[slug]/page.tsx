import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const docs: Record<
  string,
  {
    title: string;
    description: string;
    content: string;
  }
> = {
  "getting-started": {
    title: "Getting started",
    description: "Introduction to Encora and quick setup guide.",
    content: `
## Introduction

Encora provides neutral infrastructure for returns: bins, tags, a verification cloud, and APIs. Our platform enables proof-grade data at drop-off with modular hardware and API-first architecture.

## Quick Start

### Step 1: Hardware Setup

Install Encora bins at your location:
- 120V plug-in required
- 500+ item capacity
- Touch-free operation
- ADA friendly

### Step 2: Configuration

1. Create an account at dashboard.encora.co
2. Register your bins via serial number
3. Configure webhook endpoints
4. Set verification rules

### Step 3: Integration

Connect your systems via:
- **Webhooks**: Real-time event notifications
- **REST API**: Query verification data
- **Dashboard**: Visual monitoring and analytics

## Next Steps

- Read the [Hardware guide](/docs/hardware) for placement tips
- Configure [Webhooks](/docs/connect-webhooks) for system integration
- Review the [Verify API](/docs/verify-api) for event schemas
    `,
  },
  hardware: {
    title: "Hardware",
    description: "Bins, tags, placement, and hardware configuration.",
    content: `
## Bins

Encora bins are available in indoor and outdoor models. Both support:
- Photo capture
- Weight measurement
- QR/RFID scanning
- Network connectivity

### Indoor Bins

Best for:
- Retail stores
- Office cafeterias
- Campus dining halls

### Outdoor Bins

Weather-resistant design for:
- External return points
- Parking lot locations
- Outdoor kiosks

## Tags

### QR Codes

Printable QR codes for:
- Item assignment
- Order tracking
- User identification

### RFID Tags

Reusable RFID tags for:
- High-value items
- Reusable containers
- Automated tracking

## Placement

### Considerations

- **Accessibility**: ADA compliant placement
- **Network**: Wi-Fi or Ethernet connectivity
- **Power**: 120V plug-in required
- **Visibility**: Clear signage and instructions

### Best Practices

1. Place bins near exits or return counters
2. Ensure adequate lighting for photo capture
3. Provide clear drop instructions
4. Test network connectivity before deployment
    `,
  },
  "verify-api": {
    title: "Verify API",
    description: "Events schema and verification endpoints.",
    content: `
## Overview

The Verify API provides access to verification events and evidence data captured by Encora bins.

## Events Schema

### Item Dropped Event

\`\`\`json
{
  "event": "item.dropped",
  "timestamp": "2025-01-15T10:30:00Z",
  "bin_id": "bin-12345",
  "order_id": "ORD-12345",
  "status": "verified",
  "evidence": {
    "photos": [
      "https://cdn.encora.co/evidence/photo1.jpg",
      "https://cdn.encora.co/evidence/photo2.jpg"
    ],
    "weight": 1.2,
    "weight_unit": "kg",
    "reason_code": "defective",
    "notes": "Customer reported defect"
  }
}
\`\`\`

### Verification Status

- \`verified\`: Item condition matches expectations
- \`pending\`: Requires manual review
- \`rejected\`: Does not meet return criteria

## Endpoints

### GET /api/v1/events

Query verification events:

\`\`\`bash
curl https://api.encora.co/v1/events?order_id=ORD-12345 \\
  -H "Authorization: Bearer YOUR_API_KEY"
\`\`\`

### GET /api/v1/evidence/:event_id

Retrieve evidence for a specific event:

\`\`\`bash
curl https://api.encora.co/v1/evidence/event-12345 \\
  -H "Authorization: Bearer YOUR_API_KEY"
\`\`\`

## Authentication

All API requests require an API key in the Authorization header:

\`\`\`
Authorization: Bearer YOUR_API_KEY
\`\`\`

Generate API keys in the Encora dashboard.
    `,
  },
  "connect-webhooks": {
    title: "Connect Webhooks",
    description: "Webhook payloads, retries, and configuration.",
    content: `
## Overview

Webhooks deliver real-time events to your endpoints when items are dropped or verified.

## Configuration

Set webhook URLs in the Encora dashboard or via API:

\`\`\`bash
curl -X POST https://api.encora.co/v1/webhooks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhooks/encora",
    "events": ["item.dropped", "item.verified"]
  }'
\`\`\`

## Webhook Payload

\`\`\`json
{
  "event": "item.dropped",
  "timestamp": "2025-01-15T10:30:00Z",
  "bin_id": "bin-12345",
  "order_id": "ORD-12345",
  "status": "verified",
  "evidence": {
    "photos": ["url1", "url2"],
    "weight": 1.2,
    "reason_code": "defective"
  },
  "signature": "sha256=..."
}
\`\`\`

## Security

Webhooks include a signature header for verification:

\`\`\`bash
X-Encora-Signature: sha256=abc123...
\`\`\`

Verify signatures using your webhook secret:

\`\`\`javascript
const crypto = require('crypto');
const signature = crypto
  .createHmac('sha256', webhookSecret)
  .update(JSON.stringify(payload))
  .digest('hex');
\`\`\`

## Retries

Failed webhook deliveries are automatically retried:
- Immediate retry after 1 minute
- Exponential backoff up to 24 hours
- Maximum 10 retry attempts

## Testing

Use the webhook test endpoint in the dashboard to verify your integration.
    `,
  },
  faq: {
    title: "FAQ",
    description: "Frequently asked questions and troubleshooting.",
    content: `
## General

### What is Encora?

Encora provides neutral infrastructure for returns: smart bins, verification cloud, and APIs that enable proof-grade data at drop-off.

### How does it work?

Customers scan a code and drop items into Encora bins. The bin automatically captures photos, weight, and reason codes. This evidence is sent to your systems via webhooks.

### What hardware do I need?

You need Encora bins (120V plug-in) and optional QR/RFID tags. No additional hardware required.

## Integration

### How do I integrate with my POS/OMS?

Use Encora webhooks to receive real-time events. Configure webhook endpoints in the dashboard or via API.

### Can I use Encora without changing my POS?

Yes. Encora works alongside your existing systems via webhooks—no POS changes required.

### What data formats are supported?

Webhooks deliver JSON payloads. The REST API supports JSON responses.

## Troubleshooting

### Webhooks not receiving events

Check:
1. Webhook URL is accessible (HTTPS required)
2. Endpoint returns 2xx status codes
3. Firewall allows Encora IP ranges
4. Check webhook logs in dashboard

### Bins not connecting

Verify:
1. Power connection (120V)
2. Network connectivity (Wi-Fi or Ethernet)
3. Bin serial number is registered
4. Dashboard shows online status

### Photo quality issues

Ensure:
1. Adequate lighting at bin location
2. Bin camera lens is clean
3. Items are placed correctly in drop area

## Support

For additional help, contact support at contact@encora.co or visit the dashboard.
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = docs[slug];

  if (!doc) {
    return {
      title: "Documentation Not Found",
    };
  }

  return {
    title: `${doc.title} - Documentation`,
    description: doc.description,
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = docs[slug];

  if (!doc) {
    notFound();
  }

  const docSlugs = Object.keys(docs);
  const currentIndex = docSlugs.indexOf(slug);
  const prevDoc = currentIndex > 0 ? docSlugs[currentIndex - 1] : null;
  const nextDoc =
    currentIndex < docSlugs.length - 1 ? docSlugs[currentIndex + 1] : null;

  return (
    <div className="container mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-2">
            <Link
              href="/docs"
              className="block text-sm text-muted-foreground hover:text-foreground mb-4"
            >
              ← Back to Docs
            </Link>
            <div className="space-y-1">
              {docSlugs.map((docSlug) => (
                <Link
                  key={docSlug}
                  href={`/docs/${docSlug}`}
                  className={`block text-sm px-3 py-2 rounded-md transition-colors ${
                    docSlug === slug
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {docs[docSlug].title}
                </Link>
              ))}
            </div>
          </nav>
        </aside>

        {/* Content */}
        <article>
          <Link
            href="/docs"
            className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block lg:hidden"
          >
            ← Back to Docs
          </Link>

          <h1 className="text-[clamp(28px,5vw,40px)] font-semibold tracking-tight leading-tight mb-8">
            {doc.title}
          </h1>

          <div
            className="prose prose-zinc dark:prose-invert max-w-none
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
                const lines = doc.content.trim().split("\n");
                let html = "";
                let inCodeBlock = false;
                let codeBlockContent = "";
                let codeLang = "";

                for (let i = 0; i < lines.length; i++) {
                  const line = lines[i];

                  if (line.startsWith("```")) {
                    if (inCodeBlock) {
                      // Closing code block
                      html += `<pre><code class="language-${codeLang}">${codeBlockContent.trim()}</code></pre>`;
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
                  if (line.trim().match(/^\d+\. /)) {
                    html += `<ol><li>${line.trim().replace(/^\d+\. /, "")}</li></ol>`;
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

          {(prevDoc || nextDoc) && (
            <nav className="mt-12 pt-8 border-t flex justify-between">
              {prevDoc && (
                <Link
                  href={`/docs/${prevDoc}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  ← {docs[prevDoc].title}
                </Link>
              )}
              {nextDoc && (
                <Link
                  href={`/docs/${nextDoc}`}
                  className="text-sm text-muted-foreground hover:text-foreground ml-auto"
                >
                  {docs[nextDoc].title} →
                </Link>
              )}
            </nav>
          )}
        </article>
      </div>
    </div>
  );
}

