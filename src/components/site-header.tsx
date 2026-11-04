"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="OrbitNode home" onClick={() => setOpen(false)}>
          <BrandMark className="brand-mark" />
          <span className="brand-name">ORBITNODE<span className="trademark">®</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.slice(1, 6).map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href || (item.href === "/projects" && pathname.startsWith("/projects/")) ? "nav-link active" : "nav-link"}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="nav-contact">Let's talk <ArrowUpRight size={16} aria-hidden="true" /></Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "mobile-nav-link current" : "mobile-nav-link"}>
              {item.label} <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

