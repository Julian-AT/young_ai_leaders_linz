import type { MetadataRoute } from "next";

const BASE_URL = "https://youngaileaderslinz.at";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/programs", "/partners", "/join", "/contact", "/legal"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
