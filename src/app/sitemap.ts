import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/experience", "/stack", "/playground", "/contact"];
  return [
    ...routes.map((route) => ({ url: new URL(route || "/", baseUrl).href, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...projects.map((project) => ({ url: new URL("/projects/" + project.slug, baseUrl).href, changeFrequency: "monthly" as const, priority: 0.65 }))
  ];
}

