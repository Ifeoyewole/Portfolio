"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/projects";

const categories: Array<"All work" | ProjectCategory> = [
  "All work", "Web experiences", "Software tools", "Collaborative systems"
];

export function ProjectExplorer() {
  const [selected, setSelected] = useState<(typeof categories)[number]>("All work");
  const visible = selected === "All work" ? projects : projects.filter((project) => project.category === selected);

  return (
    <>
      <div className="filter-row" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={selected === category ? "filter active" : "filter"}
            aria-pressed={selected === category}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-list">
        {visible.map((project) => (
          <Link className="project-line" href={"/projects/" + project.slug} key={project.slug}>
            <span className="project-num">{project.number} /</span>
            <span className="project-line-main"><strong>{project.title}</strong><small>{project.tagline}</small></span>
            <span className="project-kind">{project.category}</span>
            <ArrowUpRight className="project-arrow" size={26} aria-hidden="true" />
          </Link>
        ))}
      </div>
      <p className="list-footnote">{visible.length} SELECTED PROJECTS · READ THE CASE STUDY FOR ROLE AND CONTRIBUTION DETAILS.</p>
    </>
  );
}

