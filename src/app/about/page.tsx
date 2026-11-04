import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know OrbitNode — Oyewole Victor Ifeoluwa, a Computer Science student and frontend/full-stack developer.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main id="main-content" className="shell interior-page">
      <p className="eyebrow">01 / PERSON BEHIND THE PIXELS</p>
      <h1 className="page-title">MORE THAN<br/><em>THE CODE.</em></h1>
      <div className="editorial-columns">
        <p className="lede">I'm Victor, also known as <strong>OrbitNode</strong>. I enjoy turning complicated ideas into digital experiences that feel effortless.</p>
        <div className="body-copy">
          <p>I'm a Computer Science student at Ladoke Akintola University of Technology (LAUTECH), Nigeria, and a developer drawn to the intersection of interface design, useful software, and technical problem solving.</p>
          <p>My strongest focus is frontend engineering with JavaScript, TypeScript, React, and Next.js. I also work with PHP and Python, API integrations, databases, and data tools when a problem needs more than a beautiful interface.</p>
          <p>I learn through real projects: collaboration, iteration, debugging, and finding better ways to ship ideas people can use.</p>
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
    </main>
  );
}

