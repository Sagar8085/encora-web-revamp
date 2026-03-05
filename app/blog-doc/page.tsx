import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description: "Short notes on returns, reuse, and ops.",
};

const posts = [
  {
    slug: "proof-at-drop",
    title: 'Why "proof at drop" matters',
    excerpt:
      "Photo + weight + reason at drop turns debates into data. Refunds go faster; disputes go down; your team stops playing detective.",
    date: new Date().toISOString().split("T")[0],
    tags: ["returns", "ops"],
  },
  {
    slug: "access-vs-reuse",
    title: "Access vs. Reuse: when to use which",
    excerpt:
      "Access = brand-agnostic returns hub; Reuse = campus-grade container flow. Same core, different guardrails.",
    date: new Date().toISOString().split("T")[0],
    tags: ["reuse", "returns"],
  },
  {
    slug: "connect-webhooks",
    title: "Connect: webhooks without a POS rip-and-replace",
    excerpt:
      "Push refund status and exceptions to your POS/OMS via webhooks and idempotent events—no migration required.",
    date: new Date().toISOString().split("T")[0],
    tags: ["api", "ops"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl mt:[10rem] px-6 py-16 lg:py-24 mt-[2rem] ">
      <h1 className="text-center heading-lg mb-12 dark:text-white">Insights</h1>
      <p className="mt-3 text-center text-muted-foreground mb-12">
        Short notes on returns, reuse, and ops.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="group rounded-xl border p-6 hover:bg-accent/50 transition-colors"
          >
            <Link href={`/blog-doc/${post.slug}`} className="block">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-foreground">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
            <div className="flex items-center justify-between">
              <time className="text-xs text-muted-foreground">
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
          </div>
        ))}
      </div>

      <nav className="flex justify-between items-center pt-8 border-t">
        <span className="text-sm text-muted-foreground">Older</span>
        <span className="text-sm text-muted-foreground">Newer</span>
      </nav>
    </div>
  );
}
