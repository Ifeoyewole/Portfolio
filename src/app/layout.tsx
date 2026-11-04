import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { absoluteUrl, personId, safeJsonLd } from "@/lib/seo";
import { baseUrl, site } from "@/lib/site";

const image = absoluteUrl("/opengraph-image");
export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: "Oyewole Victor Ifeoluwa (OrbitNode) | Frontend & Full-Stack Developer",
    template: "%s | OrbitNode"
  },
  description: site.description,
  applicationName: "OrbitNode",
  keywords: [
    "Oyewole Victor Ifeoluwa",
    "OrbitNode",
    "Victor Oyewole",
    "Ifeoyewole",
    "Frontend Developer Nigeria",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer"
  ],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: "OrbitNode",
    title: "Oyewole Victor Ifeoluwa (OrbitNode) — Developer Portfolio",
    description: site.description,
    locale: "en_NG",
    images: [{ url: image, width: 1200, height: 630, alt: "OrbitNode developer portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Oyewole Victor Ifeoluwa (OrbitNode) — Developer Portfolio",
    description: site.description,
    images: [image]
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: { "color-scheme": "dark" }
};

const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: site.fullName,
  alternateName: ["OrbitNode", "Victor Oyewole"],
  url: absoluteUrl("/about"),
  image: absoluteUrl("/media/orbitnode-portrait.jpg"),
  description: site.description,
  sameAs: [site.github, site.linkedin],
  jobTitle: "Frontend & Full-Stack Developer",
  knowsAbout: ["React", "Next.js", "TypeScript", "Frontend engineering", "PHP", "Python", "Data analysis"],
  affiliation: { "@type": "CollegeOrUniversity", name: "Ladoke Akintola University of Technology", url: "https://lautech.edu.ng/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(personData) }} />
      </body>
    </html>
  );
}
