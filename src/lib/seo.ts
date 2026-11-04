import type { Metadata } from "next";
import { baseUrl, site } from "@/lib/site";

export const absoluteUrl = (path: string): string => new URL(path, baseUrl).href;
export const personId = absoluteUrl("/#person");
export const websiteId = absoluteUrl("/#website");

export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function pageMetadata({
  path,
  title,
  description
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = title + " | OrbitNode";
  const socialImage = absoluteUrl("/opengraph-image");
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_NG",
      title: socialTitle,
      description,
      url,
      images: [
        { url: socialImage, alt: "OrbitNode — Oyewole Victor Ifeoluwa", width: 1200, height: 630 }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage]
    }
  };
}
