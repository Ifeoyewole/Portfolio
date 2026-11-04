import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/project-explorer";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Explore OrbitNode's selected frontend, Python tooling, and collaborative software projects with honest role-specific case studies.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="shell interior-page">
      <p className="eyebrow">02 · THE WORK</p>
      <h1 className="page-title">MADE WITH<br/><em>INTENTION.</em></h1>
      <div className="page-intro"><p>Selected projects, practical experiments, and collaborative work. Each case study explains my role instead of claiming credit for every part of a team project.</p></div>
      <ProjectExplorer />
    </main>
  );
}

