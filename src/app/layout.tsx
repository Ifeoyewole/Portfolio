import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { baseUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: { default: "OrbitNode — Oyewole Victor Ifeoluwa", template: "%s | OrbitNode" },
  description: site.description,
  applicationName: "OrbitNode",
  keywords: ["OrbitNode", "Oyewole Victor Ifeoluwa", "Victor Oyewole", "Frontend Developer", "Full-Stack Developer", "React", "Next.js", "Nigeria"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "OrbitNode — Oyewole Victor Ifeoluwa",
    description: site.description,
    url: "/",
    siteName: "OrbitNode",
    locale: "en_NG"
  },
  twitter: { card: "summary", title: "OrbitNode — Oyewole Victor Ifeoluwa", description: site.description },
  icons: { icon: "/favicon.svg" }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: "OrbitNode",
  url: baseUrl.href,
  sameAs: [site.github, site.linkedin],
  jobTitle: "Frontend & Full-Stack Developer",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Ladoke Akintola University of Technology" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}

