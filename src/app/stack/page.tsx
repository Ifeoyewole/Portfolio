import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack & Capabilities",
  description: "Explore the technologies and tools OrbitNode uses across frontend development, full-stack applications, data analysis, and experiments.",
  alternates: { canonical: "/stack" }
};

const capabilities = [
  { name: "FRONTEND & INTERFACES", tools: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite"], note: "My core focus: responsive interfaces, reusable systems, and thoughtful interaction." },
  { name: "BACKEND & INTEGRATIONS", tools: ["PHP", "Python", "Flask", "FastAPI", "REST APIs", "Supabase", "MySQL", "SQLite"], note: "Connecting interfaces to the application logic and data behind them." },
  { name: "DATA & DELIVERY", tools: ["Power BI", "Excel", "Git", "GitHub", "Vercel", "VS Code"], note: "Making information useful and improving the development workflow." },
  { name: "AREAS I'M EXPLORING", tools: ["Computer vision", "OpenCV", "Web3 integration", "3D web experiences"], note: "Experimenting with technologies that open up new interaction patterns." }
];

export default function StackPage() {
  return (
    <main id="main-content" className="shell interior-page">
      <p className="eyebrow">04 / CAPABILITIES</p>
      <h1 className="page-title">TOOLS ARE<br/><em>JUST THE START.</em></h1>
      <p className="page-intro">Technology matters, but choosing the right tool for the right problem matters more. These are the platforms, languages, and workflows I use or explore.</p>
      <div className="stack-groups">
        {capabilities.map((group, i) => (
          <section key={group.name} className="stack-group">
            <div><p className="eyebrow">0{i + 1} / {group.name}</p><p className="muted">{group.note}</p></div>
            <div className="stack-tags">{group.tools.map((tool) => <span className="skill-tag" key={tool}>{tool}</span>)}</div>
          </section>
        ))}
      </div>
    </main>
  );
}

