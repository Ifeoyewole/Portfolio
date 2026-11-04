import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { absoluteUrl, pageMetadata, personId, safeJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found", robots: { index: false, follow: false } };
  return pageMetadata({
    path: "/projects/" + slug,
    title: project.title + " — Project Case Study",
    description: project.summary
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectUrl = absoluteUrl("/projects/" + slug);
  const caseStudyData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": projectUrl + "#case-study",
    name: project.title,
    description: project.summary,
    url: projectUrl,
    image: project.image ? absoluteUrl(project.image) : undefined,
    genre: project.category,
    contributor: { "@id": personId },
    about: project.stack,
    sameAs: [project.repository, project.live].filter(Boolean)
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
      { "@type": "ListItem", position: 3, name: project.title, item: projectUrl }
    ]
  };

  return (
    <main id="main-content" className="shell interior-page">
      <Link href="/projects" className="back-link"><ArrowLeft size={17}/> Back to all work</Link>
      <p className="eyebrow">PROJECT {project.number} · {project.category.toUpperCase()}</p>
      <h1 className="case-title">{project.title}<span>.</span></h1>
      <p className="case-tagline">{project.tagline}</p>
      <div className={"case-banner" + (project.image ? " has-image" : "")}>
        {project.image ? <Image src={project.image} alt={project.imageAlt ?? project.title} fill sizes="(max-width: 800px) 95vw, 85vw" className="case-photo" priority /> : <span className="banner-number">{project.number}</span>}
        <span className="banner-code">ORBITNODE · CASE STUDY {project.number}</span>
        <span className="banner-arrow">↗</span>
      </div>
      <div className="case-meta">
        <div><span>TYPE</span><strong>{project.category}</strong></div>
        <div><span>ROLE</span><strong>{project.role}</strong></div>
        <div><span>TECHNOLOGIES</span><strong>{project.stack.join(", ")}</strong></div>
      </div>
      <section className="case-content">
        <div><p className="eyebrow">OVERVIEW</p><h2>THE PROJECT</h2></div>
        <p>{project.summary}</p>
        <div><p className="eyebrow">CONTEXT</p><h2>THE CHALLENGE</h2></div>
        <p>{project.challenge}</p>
        <div><p className="eyebrow">PROCESS</p><h2>MY APPROACH</h2></div>
        <p>{project.approach}</p>
        <div><p className="eyebrow">DETAIL</p><h2>WHAT'S INSIDE</h2></div>
        <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
      </section>
      <div className="case-actions">
        {project.repository && <a className="button button-primary" href={project.repository} target="_blank" rel="noopener noreferrer">View repository <ArrowUpRight size={18}/></a>}
        {project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noopener noreferrer">Visit live project <ArrowUpRight size={18}/></a>}
        <Link className="button button-outline" href="/projects">All projects <ArrowLeft size={18}/></Link>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(caseStudyData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbData) }} />
    </main>
  );
}

