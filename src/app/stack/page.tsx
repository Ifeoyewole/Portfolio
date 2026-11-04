import type { Metadata } from "next";
import Image from "next/image";
import { Code2, Database, BarChart3, Box, Workflow } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiVite, SiPhp, SiPython, SiMysql, SiGit, SiGithub, SiVercel
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Stack & Capabilities",
  description: "Technologies and capabilities OrbitNode uses in frontend development, full-stack applications, data and computer vision experiments.",
  alternates: { canonical: "/stack" }
};

type TechBrand = { icon: IconType; tone: string };
const icons: Record<string, TechBrand> = {
  HTML: { icon: SiHtml5, tone: "#E27A52" },
  CSS: { icon: SiCss, tone: "#5D98D9" },
  JavaScript: { icon: SiJavascript, tone: "#DFCB73" },
  TypeScript: { icon: SiTypescript, tone: "#70A3D2" },
  React: { icon: SiReact, tone: "#73C3DB" },
  "Next.js": { icon: SiNextdotjs, tone: "#F5F0E8" },
  "Tailwind CSS": { icon: SiTailwindcss, tone: "#67B6C9" },
  Vite: { icon: SiVite, tone: "#B6A5D6" },
  PHP: { icon: SiPhp, tone: "#AAA1C7" },
  Python: { icon: SiPython, tone: "#D4C28C" },
  MySQL: { icon: SiMysql, tone: "#8BAFC0" },
  Git: { icon: SiGit, tone: "#D58467" },
  GitHub: { icon: SiGithub, tone: "#F5F0E8" },
  Vercel: { icon: SiVercel, tone: "#F5F0E8" }
};

const capabilities = [
  { name: "FRONTEND & INTERFACES", tools: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite"], note: "My core focus: responsive interfaces, reusable systems, and thoughtful interaction.", fallback: Code2 },
  { name: "BACKEND & INTEGRATIONS", tools: ["PHP", "Python", "Flask", "FastAPI", "REST APIs", "Supabase", "MySQL", "SQLite"], note: "Connecting interfaces to the application logic and data behind them.", fallback: Database },
  { name: "DATA & DELIVERY", tools: ["Power BI", "Excel", "Git", "GitHub", "Vercel", "VS Code"], note: "Making information useful and improving the development workflow.", fallback: BarChart3 },
  { name: "AREAS I'M EXPLORING", tools: ["Computer vision", "OpenCV", "Web3 integration", "3D web experiences"], note: "Experimenting with technologies that open up new interaction patterns.", fallback: Workflow }
];

const dashboards = [
  { name: "Sales performance", image: "/media/powerbi-sales.png", desc: "Power BI sales dashboard originally shown in my portfolio." },
  { name: "People analytics", image: "/media/powerbi-hr.png", desc: "HR analytics dashboard image from the original portfolio." },
  { name: "Financial reporting", image: "/media/powerbi-finance.png", desc: "Financial reporting dashboard image from the original portfolio." }
];

export default function StackPage() {
  return (
    <main id="main-content" className="shell interior-page">
      <p className="eyebrow">CAPABILITIES</p>
      <h1 className="page-title">TOOLS ARE<br/><em>JUST THE START.</em></h1>
      <p className="page-intro">Technology matters, but choosing the right tool for the problem matters more. Here is what I build with, along with a selection of my data visualisation work.</p>
      <div className="stack-groups">
        {capabilities.map((group) => (
          <section key={group.name} className="stack-group">
            <div><p className="eyebrow">{group.name}</p><p className="muted">{group.note}</p></div>
            <div className="stack-tags">
              {group.tools.map((tool) => {
                const entry = icons[tool];
                const Icon = entry?.icon;
                const Fallback = group.fallback ?? Box;
                return (
                  <span className="skill-tag" key={tool}>
                    <span className="skill-icon" aria-hidden="true" style={{ color: entry?.tone ?? "#F5F0E8" }}>
                      {Icon ? <Icon size={22} /> : <Fallback size={20} strokeWidth={1.5} />}
                    </span>
                    <span>{tool}</span>
                  </span>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      <section className="analytics-section">
        <p className="eyebrow">FROM THE ORIGINAL PORTFOLIO</p>
        <h2 className="section-title">DATA, MADE <em>VISIBLE.</em></h2>
        <p className="muted analytics-description">Dashboards and reporting visuals I previously featured, brought into the redesigned portfolio as real screenshots.</p>
        <div className="analytics-grid">
          {dashboards.map((dashboard) => (
            <figure className="analytics-tile" key={dashboard.name}>
              <div className="analytics-image"><Image src={dashboard.image} alt={dashboard.desc} fill sizes="(max-width: 800px) 92vw, 31vw" /></div>
              <figcaption>{dashboard.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
