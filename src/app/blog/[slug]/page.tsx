import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCover } from "@/components/shared/blog-cover";
import { BLOG_POSTS, formatPostDate, getAdjacentPosts, getPostBySlug } from "@/content/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: ["/seo/og.png"],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);
  const { previous, next } = getAdjacentPosts(slug);

  return (
    <article className="pb-40">
      <header className="grid grid-cols-3 gap-6 pt-20 pb-12 md:gap-10 md:pt-30 md:pb-16 lg:gap-20 lg:pt-20">
        <div className="col-span-3 lg:col-span-2">
          <p className="caption text-secondary mb-4 font-mono tracking-wider uppercase">
            {formatPostDate(post.date)}
            <span className="mx-2">/</span>
            by {post.author}
          </p>
          <h1 className="h1 mb-6 max-w-[22ch] text-balance">{post.title}</h1>
          <p className="body-md text-secondary max-w-[48ch] text-balance">{post.excerpt}</p>
        </div>
      </header>

      <BlogCover
        slug={post.slug}
        title={post.title}
        className="mb-16 aspect-video w-full md:mb-20"
        imageSrc={post.cover}
        imageAlt={post.coverAlt}
        priority
      />

      <div className="max-w-[68ch]">
        <Content />
      </div>

      <nav
        className="mt-20 flex flex-col gap-6 border-t pt-10 md:flex-row md:items-start md:justify-between"
        aria-label="Post navigation"
      >
        <Link href="/blog" className="body-sm hover:text-secondary transition-colors duration-100">
          ← Back to Blog
        </Link>
        <div className="flex flex-col gap-4 md:items-end">
          {previous ? (
            <Link
              href={`/blog/${previous.slug}`}
              className="body-sm hover:text-secondary transition-colors duration-100 md:text-right"
            >
              Older: {previous.title}
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="body-sm hover:text-secondary transition-colors duration-100 md:text-right"
            >
              Newer: {next.title}
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}
