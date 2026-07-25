"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { BlogCover } from "@/components/shared/blog-cover";
import { type BlogPost, formatPostDate } from "@/content/blog";

const PAGE_SIZE = 6;

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [visibleCount, setVisibleCount] = useState(Math.min(PAGE_SIZE, posts.length));
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const hasMore = visibleCount < posts.length;

  const loadMore = useCallback(() => {
    if (!hasMore || isLoading) return;
    setIsLoading(true);
    requestAnimationFrame(() => {
      setVisibleCount((count) => Math.min(count + PAGE_SIZE, posts.length));
      setIsLoading(false);
    });
  }, [hasMore, isLoading, posts.length]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadMore();
        }
      },
      { root: null, rootMargin: "240px 0px", threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, loadMore, visibleCount]);

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <>
      <ul className="flex flex-col">
        {visiblePosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-3 md:gap-10 md:py-14 lg:gap-20"
            >
              <BlogCover
                slug={post.slug}
                title={post.title}
                className="aspect-7/5"
                imageSrc={post.cover}
                imageAlt={post.coverAlt}
              />

              <div className="flex flex-col justify-between border-t pt-6 md:col-span-2 lg:grid lg:grid-cols-2 lg:gap-20">
                <div className="flex flex-col gap-4">
                  <p className="caption text-secondary font-mono tracking-wider uppercase">
                    {formatPostDate(post.date)}
                  </p>
                  <h2 className="h4 group-hover:text-secondary max-w-[18ch] text-balance transition-colors duration-100">
                    {post.title}
                  </h2>
                </div>

                <div className="mt-6 flex flex-col justify-between gap-8 lg:mt-0 lg:items-end lg:text-right">
                  <p className="body-sm text-secondary">by {post.author}</p>
                  <span className="btn-small-secondary pointer-events-none w-fit">Read More</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {hasMore ? (
        <div
          ref={sentinelRef}
          className="flex items-center justify-center py-10"
          aria-live="polite"
          aria-busy={isLoading}
        >
          <p className="body-sm text-secondary">{isLoading ? "Loading…" : "Scroll for more"}</p>
        </div>
      ) : null}
    </>
  );
}
