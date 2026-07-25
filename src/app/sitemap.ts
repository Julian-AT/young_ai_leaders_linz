import type { MetadataRoute } from "next";

import { env } from "@/config/env";
import { BLOG_POSTS } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/programs", "/partners", "/blog", "/join", "/contact", "/legal"];

  const staticEntries = routes.map((route) => ({
    url: `${env.NEXT_PUBLIC_SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `${env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
