import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";
import { blogData } from "./data";

export const metadata: Metadata = {
  title: blogData.metadata.title,
  description: blogData.metadata.description,
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl mt:[10rem] px-6 py-16 lg:py-24 mt-[2rem] ">
      <h1 className="text-center heading-lg mb-12 dark:text-white">{blogData.heading}</h1>
      <p className="mt-3 text-center text-muted-foreground mb-12">
        {blogData.subheading}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {blogData.posts.map((post) => (
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
        <span className="text-sm text-muted-foreground">{blogData.nav.older}</span>
        <span className="text-sm text-muted-foreground">{blogData.nav.newer}</span>
      </nav>
    </div>
  );
}
