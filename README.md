# OrbitNode v2 — Premium Creative Studio

A standalone, multi-page developer portfolio for **Oyewole Victor Ifeoluwa (OrbitNode)**.

> Development branch only. The live site at https://ifeoyewole.vercel.app is still served by main. This branch contains an independent clean Next.js rebuild; legacy static files remain on main.

## Stack

- Next.js App Router + TypeScript + React
- Tailwind CSS 4 + original editorial CSS
- Three.js + React Three Fiber v9 for an original WebGL sculpture
- Lightweight Lucide icons
- SEO metadata, JSON-LD Person markup, sitemap and robots

## Local setup

Requires Node.js 20.9 or newer.

1. Install dependencies: npm install
2. Run locally: npm run dev
3. Open http://localhost:3000
4. Check types: npm run typecheck
5. Build: npm run build

## Pages

- / — homepage
- /about — story, approach and working principles
- /projects — filterable project index
- /projects/[slug] — individual project case studies
- /experience — practical work and collaboration
- /stack — engineering toolkit
- /playground — WebGL experiment
- /contact — professional contact links

## Domain and SEO

The canonical URL uses NEXT_PUBLIC_SITE_URL. Until the custom domain is purchased and connected, the fallback is https://ifeoyewole.vercel.app. Set NEXT_PUBLIC_SITE_URL=https://ov-orbitnode.dev on the *correct* Vercel production deployment after DNS and SSL are verified.

Google Search Console indexing should be requested only after the domain launches. Google ranking is not guaranteed.

## Design and next steps

- docs/DESIGN_SYSTEM.md — identity, tokens, typography, 3D rules, components and accessibility
- docs/ROADMAP.md — QA, content review, preview deployment and custom domain setup

## Attribution and privacy

Selected work is described according to documented contributions. In particular, Pipe Joint Inspection is collaborative; OrbitNode's documented responsibility is frontend/UI engineering. No private phone or email address is published. 

