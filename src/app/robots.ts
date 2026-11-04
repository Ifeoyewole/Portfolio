import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isPreview = Boolean(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production");
  return {
    rules: { userAgent: "*", allow: isPreview ? undefined : "/", disallow: isPreview ? "/" : undefined },
    sitemap: new URL("/sitemap.xml", baseUrl).href
  };
}

