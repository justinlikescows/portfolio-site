import { getBlogPosts } from "@/data/blog";
import { StickerBadge } from "@/components/sticker";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "Product insights, lessons learned, and thoughts on building great products.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <div className="mb-12">
          <p className="font-hand text-lg text-warmred mb-2">My thoughts</p>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
            Blog
          </h1>
          <p className="text-muted-foreground mt-3">
            Product insights, lessons learned, and thoughts on building great products.
          </p>
          <svg
            viewBox="0 0 200 12"
            fill="none"
            className="w-32 h-3 mt-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8c15-8 30 4 45-1s30 6 45 0 30 6 45-1 30 6 45 0"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              className="text-warmred/50"
            />
          </svg>
        </div>

        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="block group mb-8">
            <div
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-warmred"
              style={{ transform: "rotate(-0.3deg)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium bg-warmred text-white px-2 py-0.5 rounded-full">
                  Featured
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="size-3" />
                  {featuredPost.metadata.publishedAt}
                </span>
              </div>
              <h2 className="text-2xl font-serif group-hover:text-warmred transition-colors">
                {featuredPost.metadata.title}
              </h2>
              {featuredPost.metadata.summary && (
                <p className="text-sm text-muted-foreground mt-2">
                  {featuredPost.metadata.summary}
                </p>
              )}
            </div>
          </Link>
        )}

        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {otherPosts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div
                  className="bg-card border border-border rounded-lg p-5 h-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
                >
                  <span className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                    <Clock className="size-3" />
                    {post.metadata.publishedAt}
                  </span>
                  <h3 className="text-lg font-serif group-hover:text-warmred transition-colors">
                    {post.metadata.title}
                  </h3>
                  {post.metadata.summary && (
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
                      {post.metadata.summary}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 p-6 rounded-lg border border-border bg-secondary/30 text-center" style={{ transform: "rotate(0.3deg)" }}>
          <h3 className="font-serif text-lg mb-2">Coming Soon</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Product-focused posts in the works:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Building Unibites: 0 to 100+ Users",
              "Buy vs. Build at Capital One",
              "AI in Product Management",
              "SWE → PM Transition",
            ].map((topic, i) => (
              <StickerBadge key={topic} index={i}>
                {topic}
              </StickerBadge>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
