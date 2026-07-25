import type { MetadataRoute } from "next";

import { env } from "@/config/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/programs", "/partners", "/join", "/contact", "/legal"];

  return routes.map((route) => ({
    url: `${env.NEXT_PUBLIC_SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
