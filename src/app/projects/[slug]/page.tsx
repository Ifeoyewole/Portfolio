import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: "/projects/" + slug },
    openGraph: { title: project.title + " — OrbitNode", description: project.summary }
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="shell interior-page">
      <Link href="/projects" className="back-link"><ArrowLeft size={17}/> Back to all work</Link>
      <p className="eyebrow">PROJECT {project.number} / {project.category.toUpperCase()}</p>
      <h1 className="case-title">{project.title}<span>.</span></h1>
      <p className="case-tagline">{project.tagline}</p>
      <div className="case-banner" aria-label="Abstract editorial project illustration">
        <span className="banner-code">ORBITNODE / CASE STUDY {project.number}</span>
        <span className="banner-number">{project.number}</span>
        <span className="banner-arrow">↗</span>
      </div>
      <div className="case-meta">
        <div><span>TYPE</span><strong>{project.category}</strong></div>
        <div><span>ROLE</span><strong>{project.role}</strong></div>
        <div><span>TECHNOLOGIES</span><strong>{project.stack.join(", ")}</strong></div>
      </div>
      <section className="case-content">
        <div><p className="eyebrow">01 / OVERVIEW</p><h2>THE PROJECT</h2></div>
        <p>{project.summary}</p>
        <div><p className="eyebrow">02 / CONTEXT</p><h2>THE CHALLENGE</h2></div>
        <p>{project.challenge}</p>
        <div><p className="eyebrow">03 / PROCESS</p><h2>MY APPROACH</h2></div>
        <p>{project.approach}</p>
        <div><p className="eyebrow">04 / DETAIL</p><h2>WHAT'S INSIDE</h2></div>
        <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
      </section>
      <div className="case-actions">
        {project.repository && <a className="button button-primary" href={project.repository} target="_blank" rel="noopener noreferrer">View repository <ArrowUpRight size={18}/></a>}
        {project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noopener noreferrer">Visit live project <ArrowUpRight size={18}/></a>}
        <Link className="button button-outline" href="/projects">All projects <ArrowLeft size={18}/></Link>
      </div>
    </main>
  );
}

