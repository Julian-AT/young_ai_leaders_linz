import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Young AI Leaders Linz",
    short_name: "YALL",
    description: "Youth-led AI community in Linz. Part of the global AI for Good network.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf6",
    theme_color: "#181515",
    icons: [
      {
        src: "/seo/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/seo/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
