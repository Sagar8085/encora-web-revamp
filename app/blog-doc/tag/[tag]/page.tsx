
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "components/ui/badge";
import { Tag } from "lucide-react";

const posts = [
  {
    slug: "proof-at-drop",
    title: "Why \"proof at drop\" matters",
    excerpt: "Photo + weight + reason at drop turns debates into data. Refunds go faster; disputes go down; your team stops playing detective.",
    date: new Date().toISOString().split("T")[0],
    tags: ["returns", "ops"],
  },
  {
    slug: "access-vs-reuse",
    title: "Access vs. Reuse: when to use which",
    excerpt: "Access = brand-agnostic returns hub; Reuse = campus-grade container flow. Same core, different guardrails.",
    date: new Date().toISOString().split("T")[0],
    tags: ["reuse", "returns"],
  },
  {
    slug: "connect-webhooks",
    title: "Connect: webhooks without a POS rip-and-replace",
    excerpt: "Push refund status and exceptions to your POS/OMS via webhooks and idempotent events—no migration required.",
    date: new Date().toISOString().split("T")[0],
    tags: ["api", "ops"],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const filteredPosts = posts.filter((post) => post.tags.includes(tag));

  if (filteredPosts.length === 0) {
    return {
      title: "Tag Not Found",
    };
  }

  return {
    title: `Posts tagged "${tag}" - Insights`,
    description: `Posts about ${tag}`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const filteredPosts = posts.filter((post) => post.tags.includes(tag));

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <Link
        href="/blog-doc"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-[clamp(28px,5vw,40px)] font-semibold tracking-tight leading-tight mb-4">
        Posts tagged{" "}
        <Badge className="text-base border rounded-full px-2.5 py-0.5">
          <Tag className="w-4 h-4 mr-1" />
          {tag}
        </Badge>
      </h1>
      <p className="text-muted-foreground mb-12">
        {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {filteredPosts.map((post) => (
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
                {post.tags.map((postTag) => (
                  <Link key={postTag} href={`/blog-doc/tag/${postTag}`}>
                    <Badge
                      className={`text-xs rounded-full px-2.5 py-0.5 ${
                        postTag === tag
                          ? "bg-primary text-primary-foreground"
                          : "border"
                      }`}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {postTag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

