import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description: "OrbitNode's practical development journey: SIWES industrial training, frontend collaboration, and real-world software projects.",
  alternates: { canonical: "/experience" }
};

const experiences = [
  {
    period: "INDUSTRIAL TRAINING",
    title: "Ministry of Innovation, Science and Technology",
    subtitle: "Abere, Osogbo · SIWES",
    text: "Practical exposure to web development workflows, interactive interfaces, PHP and JavaScript application logic, integration work, and real project challenges."
  },
  {
    period: "FRONTEND INTERNSHIP",
    title: "GDGoC LAUTECH — BURSAR",
    subtitle: "Frontend development team",
    text: "Worked on frontend tasks for a community and school payments concept, including reusable UI elements, page sections, and application flows."
  },
  {
    period: "COLLABORATIVE DEVELOPMENT",
    title: "Pipe Joint Inspection App",
    subtitle: "Frontend & UI engineering",
    text: "Developing React interfaces and inspection user journeys in collaboration with backend and systems engineering contributors."
  }
];

export default function ExperiencePage() {
  return (
    <main id="main-content" className="shell interior-page">
      <p className="eyebrow">03 · EXPERIENCE</p>
      <h1 className="page-title">LEARNING BY<br/><em>BUILDING.</em></h1>
      <p className="page-intro">A journey shaped by practical work, team projects, industry exposure, and constant iteration.</p>
      <div className="timeline">
        {experiences.map((entry, i) => (
          <article className="timeline-entry" key={entry.title}>
            <div className="timeline-index">0{i + 1} / {entry.period}</div>
            <div><h2>{entry.title}</h2><p className="timeline-subtitle">{entry.subtitle}</p><p className="timeline-copy">{entry.text}</p></div>
          </article>
        ))}
      </div>
      <div className="closing-link"><p>Want to see what these experiences have shaped?</p><Link href="/projects" className="text-link">Explore the work <ArrowUpRight size={18}/></Link></div>
    </main>
  );
}

