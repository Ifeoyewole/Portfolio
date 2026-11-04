import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2 className="footer-heading">LET'S MAKE<br/><em>IT MATTER.</em></h2>
          <Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
        <div className="footer-links">
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} ORBITNODE / OYEWOLE VICTOR IFEOLUWA</span>
        <span>DESIGNED WITH INTENTION. BUILT WITH CODE.</span>
      </div>
    </footer>
  );
}

