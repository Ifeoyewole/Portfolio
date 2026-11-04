import type { Metadata } from "next";
import { pageMetadata, absoluteUrl, personId, safeJsonLd } from "@/lib/seo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About Victor — Frontend & Full-Stack Developer",
  description: "Meet Oyewole Victor Ifeoluwa, also known as OrbitNode: a Computer Science student at LAUTECH building responsive frontend experiences, useful web apps, and software tools."
});

const profileData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": absoluteUrl("/about#profile"),
  url: absoluteUrl("/about"),
  name: "About Oyewole Victor Ifeoluwa (OrbitNode)",
  mainEntity: { "@id": personId }
};

export default function AboutPage() {
  return (
    <main id="main-content" className="shell interior-page">
      <p className="eyebrow">ABOUT THE DEVELOPER</p>
      <h1 className="page-title">MORE THAN<br/><em>THE CODE.</em></h1>
      <div className="editorial-columns">
        <p className="lede">I'm <strong>Oyewole Victor Ifeoluwa</strong>, better known as <strong>OrbitNode</strong>. I'm a frontend developer who cares just as much about how software feels as how well it works.</p>
        <div className="body-copy">
          <p>I study <strong>Computer Science at Ladoke Akintola University of Technology (LAUTECH)</strong> in Ogbomoso, Nigeria. University introduced me to the fundamentals; building my own projects has taught me how to put those ideas to work.</p>
          <p>My strongest focus is frontend engineering with JavaScript, TypeScript, React, and Next.js. I also work with PHP and Python, API integrations, databases, and data tools when a problem needs more than a beautiful interface.</p>
          <p>From interactive websites and developer tools to my frontend contribution on a collaborative pipe-inspection platform, I enjoy solving practical problems, refining the details, and learning through feedback. Outside the main frontend stack, I'm growing my skills in Python, APIs, data analysis, and computer vision.</p>
        </div>
      </div>
      <div className="big-quote">"DESIGN IS HOW IT FEELS.<br/><em>ENGINEERING IS HOW IT WORKS.</em>"</div>
      <section className="values-section">
        <h2 className="section-title">WORKING <em>PRINCIPLES.</em></h2>
        <div className="three-grid">
          <article className="value-card"><span>01</span><h3>Clarity</h3><p>Reduce friction. Make each interaction understandable.</p></article>
          <article className="value-card"><span>02</span><h3>Craft</h3><p>Pay attention to the small decisions that shape the whole experience.</p></article>
          <article className="value-card"><span>03</span><h3>Curiosity</h3><p>Keep experimenting, learning, and refining the approach.</p></article>
        </div>
      </section>
      <Link href="/experience" className="text-link page-end-link">Explore the journey <ArrowUpRight size={18}/></Link>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(profileData) }} />
    </main>
  );
}

