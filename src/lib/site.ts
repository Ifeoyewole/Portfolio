export const site = {
  name: "OrbitNode",
  fullName: "Oyewole Victor Ifeoluwa",
  headline: "Frontend & Full-Stack Developer",
  description:
    "OrbitNode is the creative engineering portfolio of Oyewole Victor Ifeoluwa — building distinctive interfaces, practical software, and thoughtful digital experiences.",
  github: "https://github.com/Ifeoyewole",
  linkedin: "https://www.linkedin.com/in/oyewole-victor-a9323b317"
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/stack", label: "Stack" },
  { href: "/playground", label: "Lab" },
  { href: "/contact", label: "Contact" }
] as const;

// Keep the verified Vercel URL canonical until the custom domain is purchased and connected.
export const baseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ifeoyewole.vercel.app");

