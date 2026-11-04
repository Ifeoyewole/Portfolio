import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectExplorer } from "@/components/project-explorer";

export const metadata: Metadata = pageMetadata({
  path: "/projects",
  title: "Projects & Case Studies",
  description: "See OrbitNode's real projects and case studies: JointInspect frontend development, React interfaces, Python tools, Word Scramble, Savory, and TaskFlow."
});

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

