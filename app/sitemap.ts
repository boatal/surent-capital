import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/surent-capital/site-content";

const routes = [
  "/",
  "/mandate",
  "/strategy",
  "/capital",
  "/scenarios",
  "/process",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: route === "/" ? siteUrl : `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
