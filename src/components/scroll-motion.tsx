"use client";

import { useEffect } from "react";

// Content stays visible until JS is ready. Motion is progressive enhancement.
export function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const items = [...document.querySelectorAll<HTMLElement>("[data-scroll-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    for (const item of items) {
      if (item.getBoundingClientRect().top < window.innerHeight * 0.94) {
        item.classList.add("in-view");
      } else {
        item.classList.add("motion-pending");
        observer.observe(item);
      }
    }
    return () => observer.disconnect();
  }, []);

  return null;
}
