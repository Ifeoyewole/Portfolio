import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { SceneClient } from "@/components/scene-client";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.slice(0, 3);
  return (
    <main id="main-content">
      <section className="shell hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal-dot" /> INDEPENDENT CREATIVE ENGINEERING · NIGERIA</p>
          <h1 className="hero-title">BUILDING<br /><em>WHAT'S</em><br />NEXT<span className="punctuation">.</span></h1>
          <p className="hero-description">I'm <strong>Oyewole Victor Ifeoluwa</strong> — OrbitNode. I build expressive digital experiences and practical software where design meets engineering.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">Explore selected work <ArrowUpRight size={19} /></Link>
            <Link className="button button-quiet" href="/about">More about me <ArrowDownRight size={18} /></Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-index">FORM 001 — ORBIT / DIGITAL SCULPTURE</div>
          <SceneClient />
          <div className="art-caption"><span>EXPLORE THE SPACE BETWEEN</span><span>DESIGN AND CODE ↗</span></div>
        </div>
      </section>
      <div className="shell rule-line"><span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
      <section className="shell intro-section">
        <div className="intro-label"><p className="eyebrow">WHAT I DO</p><span className="large-asterisk">✳</span></div>
        <div><h2 className="statement">I MAKE COMPLEX IDEAS FEEL <em>SIMPLE, HUMAN,</em> AND WORTH USING.</h2><p className="muted intro-support">From frontend applications and product interfaces to Python tools and collaborative inspection systems, I focus on clarity, craft, and reliable implementation.</p></div>
      </section>
      <section className="work-section">
        <div className="shell section-header"><div><p className="eyebrow">02 / CURATED SELECTION</p><h2 className="section-title">SELECTED <em>WORK.</em></h2></div><Link href="/projects" className="text-link">View all projects <ArrowUpRight size={19} /></Link></div>
        <div className="shell home-projects">
          {featured.map((project, index) => (
            <Link key={project.slug} href={"/projects/" + project.slug} className={"featured-card featured-" + (index + 1)}>
              <div className="featured-top"><span>{project.number} / 06</span><span>{project.category}</span></div>
              <div className="featured-motif" aria-hidden="true"><span>{project.number}</span><MoveUpRight size={38} strokeWidth={1} /></div>
              <div className="featured-bottom"><h3>{project.title}</h3><p>{project.tagline}</p><span className="chip">{project.stack.slice(0, 2).join(" / ")}</span></div>
            </Link>
          ))}
        </div>
      </section>
      <section className="shell capability-strip">
        <p className="eyebrow">PRACTICE AREAS</p>
        <div>FRONTEND ENGINEERING <span>✦</span> FULL-STACK DEVELOPMENT <span>✦</span> DATA & AUTOMATION</div>
      </section>
      <section className="shell closing-section"><p className="eyebrow">A LITTLE MORE CONTEXT</p><h2>GOOD SOFTWARE ISN'T JUST BUILT.<br/><em>IT'S THOUGHT THROUGH.</em></h2><Link href="/experience" className="button button-outline">Explore my experience <ArrowUpRight size={18}/></Link></section>
    </main>
  );
}

