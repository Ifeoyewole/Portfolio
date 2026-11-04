import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { projects } from "@/lib/projects";

// Google should discover only public, canonical URLs that return 200.
// Avoid invented lastmod timestamps, which Google may ignore when inaccurate.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/projects", "/experience", "/stack", "/playground", "/contact"];
  return [
    ...routes.map((path) => ({
      url: absoluteUrl(path),
      ...(path === "/" ? { images: [absoluteUrl("/media/orbitnode-portrait.jpg")] } : {}),
      ...(path === "/stack" ? {
        images: [
          absoluteUrl("/media/powerbi-sales.png"),
          absoluteUrl("/media/powerbi-hr.png"),
          absoluteUrl("/media/powerbi-finance.png")
        ]
      } : {})
    })),
    ...projects.map((project) => ({
      url: absoluteUrl("/projects/" + project.slug),
      ...(project.image ? { images: [absoluteUrl(project.image)] } : {})
    }))
  ];
}
