import type { Metadata } from "next";

import { BlogList } from "@/components/sections/blog-list";
import { BLOG_POSTS } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Keep up to date with the latest insights and news from Young AI Leaders Austria.",
};

export default function BlogPage() {
  return (
    <>
      <section className="grid grid-cols-3 gap-6 pt-20 pb-16 md:gap-10 md:pt-30 md:pb-20 lg:gap-20 lg:pt-20 lg:pb-16">
        <div className="col-span-3 md:col-span-1">
          <h1 className="h1 text-balance">Blog</h1>
        </div>
        <div className="col-span-3 md:col-span-1">
          <p className="body-md max-w-[36ch] text-balance">
            Keep up to date with the latest insights and news from Young AI Leaders Austria.
          </p>
        </div>
      </section>

      <section className="pb-40">
        <BlogList posts={BLOG_POSTS} />
      </section>
    </>
  );
}
