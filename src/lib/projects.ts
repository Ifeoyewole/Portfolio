export type ProjectCategory = "Web experiences" | "Software tools" | "Collaborative systems";

export type Project = {
  slug: string;
  title: string;
  number: string;
  category: ProjectCategory;
  year: string;
  tagline: string;
  summary: string;
  role: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  challenge: string;
  approach: string;
  highlights: string[];
  repository?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "pipe-joint-inspection",
    image: "/media/jointinspect-latest.webp",
    imageAlt: "Updated JointInspect dashboard showing projects, inspections, model readiness and measurement review",
    title: "Pipe Joint Inspection",
    number: "01",
    category: "Collaborative systems",
    year: "In development",
    tagline: "Making technical inspections easier to navigate.",
    summary: "An industrial pipeline inspection interface with project tracking, inspection dashboards, calibration and model readiness views, and measurement-review workflows. This is collaborative work; my documented contribution is frontend and UI engineering.",
    role: "Frontend/UI engineering in a collaborative project. Backend and systems engineering are handled with another developer.",
    stack: ["React", "TypeScript", "Vite", "UI engineering"],
    challenge: "Inspection workflows involve multiple steps and dense technical information, which need clear navigation and usable interfaces.",
    approach: "Concentrated on the presentation layer and user journeys for inspection setup, uploads, dashboards, and results, while collaborating on integration boundaries.",
    highlights: ["Dashboard and project-management interface", "Inspection, calibration and model-status views", "React UI composition and collaborative integration"],
    repository: "https://github.com/Ifeoyewole/Don-t",
    live: "https://joint-inspection.vercel.app/"
  },
  {
    slug: "competition-analysis",
    title: "Competition Analysis Tool",
    number: "02",
    category: "Software tools",
    year: "2025",
    tagline: "Structured market insight from raw competitor data.",
    summary: "A Python CLI that processes competitor and SWOT inputs, calculates market metrics, and exports readable analysis reports.",
    role: "Python application development and report-generation workflow.",
    stack: ["Python", "OOP", "CSV", "SWOT"],
    challenge: "Turn fragmented market inputs into repeatable, readable comparisons.",
    approach: "Designed a command-line flow for loading market data, collecting SWOT details, running analysis, and producing text and CSV outputs.",
    highlights: ["Competitor market-share analysis", "SWOT data entry and loading", "Text and CSV report generation"],
    repository: "https://github.com/Ifeoyewole/competition_analyzer"
  },
  {
    slug: "savory",
    image: "/media/savory-restaurant.png",
    imageAlt: "Savory restaurant website screenshot",
    title: "Savory",
    number: "03",
    category: "Web experiences",
    year: "Web concept",
    tagline: "An editorial fine-dining experience for the web.",
    summary: "A restaurant website concept with a focused visual direction, menu sections, imagery, and reservation calls to action.",
    role: "Frontend website design and implementation.",
    stack: ["HTML", "CSS", "JavaScript"],
    challenge: "Communicate a premium dining experience with a clear, responsive browsing flow.",
    approach: "Combined typography, image-led layouts, section rhythm, and straightforward navigation into a cohesive static website.",
    highlights: ["Responsive restaurant layout", "Menu and gallery sections", "Reservation-oriented navigation"],
    repository: "https://github.com/Ifeoyewole/Savory"
  },
  {
    slug: "pdf-size-reducer",
    title: "PDF Size Reducer",
    number: "04",
    category: "Software tools",
    year: "Python utility",
    tagline: "Making documents lighter without losing control.",
    summary: "A Python PDF compression utility with lossless processing and configurable lossy compression options.",
    role: "Python tooling and local utility workflow.",
    stack: ["Python", "pikepdf", "Ghostscript", "Tkinter"],
    challenge: "Give users practical control over PDF size and output quality.",
    approach: "Provided CLI options, optional GUI file selection, and quality presets for different compression needs.",
    highlights: ["Lossless PDF optimization", "Optional Ghostscript compression", "GUI and CLI entry points"],
    repository: "https://github.com/Ifeoyewole/New-folder"
  },
  {
    slug: "word-scramble",
    image: "/media/word-scramble.png",
    imageAlt: "Word Scramble interactive game screenshot",
    title: "Word Scramble",
    number: "05",
    category: "Web experiences",
    year: "Interactive game",
    tagline: "A playful exercise in frontend interaction.",
    summary: "A browser-based word puzzle experience focused on interactive gameplay and user feedback.",
    role: "Frontend game development.",
    stack: ["JavaScript", "Frontend", "Game UI"],
    challenge: "Keep a lightweight puzzle game understandable and engaging.",
    approach: "Built an interactive word-game interface that prioritizes clear player feedback.",
    highlights: ["Interactive gameplay", "Browser-based experience", "User interface feedback"],
    live: "https://word-scrabbled.vercel.app/"
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    number: "07",
    category: "Web experiences",
    year: "Frontend project",
    tagline: "An interface concept for organizing work.",
    summary: "A task-management frontend built with React and Vite, showcased in my original portfolio. This case study focuses on the interface, not unverified backend features.",
    role: "Frontend implementation and UI.",
    stack: ["React", "Vite", "CSS"],
    image: "/media/taskflow-app.png",
    imageAlt: "TaskFlow project interface screenshot",
    challenge: "Make planning tasks and tracking progress easier to scan.",
    approach: "Created a task-focused frontend layout with clear grouping and interaction patterns.",
    highlights: ["Task-focused interface", "React component structure", "Visual organization of work"],
    repository: "https://github.com/Ifeoyewole/TaskFlow"
  },
  {
    slug: "rokeebat-portfolio",
    title: "Rokeebat Portfolio",
    number: "06",
    category: "Web experiences",
    year: "Frontend project",
    tagline: "A modern frontend portfolio foundation.",
    summary: "A frontend application developed with Next.js, React, TypeScript, and Tailwind CSS.",
    role: "Frontend implementation. Detailed feature case study pending verification.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    challenge: "Structure a modern portfolio frontend with reusable components and an extensible application foundation.",
    approach: "Used a Next.js and React stack to establish the frontend foundation; specific features will be documented as they are verified.",
    highlights: ["Modern Next.js architecture", "TypeScript-based frontend", "Responsive styling foundation"],
    repository: "https://github.com/Ifeoyewole/Rokeebat"
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

