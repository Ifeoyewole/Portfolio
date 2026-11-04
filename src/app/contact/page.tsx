import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact OrbitNode (Oyewole Victor Ifeoluwa) for thoughtful frontend, full-stack, and creative engineering collaborations.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main id="main-content" className="shell interior-page contact-page">
      <p className="eyebrow">06 · CONNECT</p>
      <h1 className="page-title">LET'S MAKE<br/><em>SOMETHING GOOD.</em></h1>
      <p className="contact-lede">Have an idea, a collaboration, or an interesting technical challenge? I'm open to conversations about frontend engineering, practical applications, and creative web experiences.</p>
      <div className="contact-channels">
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN <ArrowUpRight size={30} aria-hidden="true" /></a>
        <a href={site.github} target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight size={30} aria-hidden="true" /></a>
      </div>
      <p className="small-note">A direct contact form is intentionally not enabled yet; it will be added after a secure message endpoint and anti-spam checks are configured.</p>
    </main>
  );
}

