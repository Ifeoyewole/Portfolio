# OrbitNode v2 delivery plan

## Completed in the first scaffold

- Dedicated development branch: feat/orbitnode-v2-studio (main is preserved).
- Next.js App Router, React, TypeScript, Tailwind CSS and custom editorial CSS.
- Standalone pages: home, about, projects, project details, experience, stack, lab and contact.
- Shared navigation, footer, 404 page, canonical metadata, JSON-LD Person schema, sitemap and robots.
- Original WebGL orbital sculpture using React Three Fiber, with a reduced-motion / no-WebGL static fallback.
- Project information drafted with explicit collaborator attribution.
- GitHub Actions build check for the feature branch.

## Pending quality / content steps

1. Install dependencies and run TypeScript, lint and Next build checks in CI.
2. Review user-facing copy and verify featured project links, technical claims and any case-study images.
3. Add real screenshots to the case studies with ownership/permission checks.
4. Test desktop/mobile layouts at 320, 390, 768, 1024 and 1440 widths.
5. Check keyboard navigation, tab focus, reduced motion, browser compatibility and WebGL fallback.
6. If needed, defer 3D loading until it enters the viewport.
7. Create a preview deployment on the intended Vercel account without repointing production.
8. Once ov-orbitnode.dev is purchased and active, add it to the intended Vercel project, configure required DNS records, verify HTTPS, and set NEXT_PUBLIC_SITE_URL=https://ov-orbitnode.dev.
9. Confirm canonical/OG/sitemap URLs, verify Search Console, submit sitemap and request indexing.
10. Merge or promote only after owner approval and preview verification.

## Deployment safeguards

- Existing Vercel production site must stay on its current main branch during review.
- Never connect the new domain to an unverified preview.
- Do not assume an attached Vercel account is the intended new account; confirm its identity first.
- Keep public contact limited to already-public professional profile URLs unless the owner approves more.
- Branch contains a clean Next.js tree. Previous static implementation remains recoverable on main.

