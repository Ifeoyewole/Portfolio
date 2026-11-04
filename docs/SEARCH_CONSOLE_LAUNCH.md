# OrbitNode — Search Console and SEO launch checklist

Primary domain: **https://ov-orbitnode.dev/**
Website identity: **Oyewole Victor Ifeoluwa**, also known as **OrbitNode**.

## What the app configures automatically

- Permanent (308) host-specific redirect from ifeoyewole.vercel.app paths to their matching ov-orbitnode.dev paths.
- Canonical links and matching og:url on all public pages, with unique titles and descriptions.
- A 1200x630 PNG Open Graph image for social previews and Twitter cards.
- Person schema across pages; WebSite/site-name schema on the home page; ProfilePage schema on About; CreativeWork and BreadcrumbList on project case studies.
- robots.txt with the canonical sitemap and production crawling allowed.
- sitemap.xml listing public canonical routes and available project images, without invented modification times.
- Static 404 for nonexistent case studies.
- Preview deployments are excluded by robots.txt (and Vercel preview authentication as configured).

**Do not promise zero Search Console warnings.** Redirecting www and the old Vercel host to the preferred domain is deliberate, and Google may list these as "Page with redirect" — this is not an error for the canonical page. Google chooses its own canonical and indexing schedule.

## Search Console: one-time owner setup

1. Sign in at https://search.google.com/search-console/ with the intended Google account.
2. Choose **Add property** → **Domain** → enter \`ov-orbitnode.dev\` (without https://).
3. Copy the exact DNS TXT ownership token Google provides.
4. Open Cloudflare → **ov-orbitnode.dev** → DNS → Records → Add \`TXT\`, host \`@\`, content exactly as Google gave it, TTL Auto. Leave existing Vercel A/CNAME, Name.com registration and unrelated email records intact.
5. Return to Search Console and click **Verify**. DNS TXT propagation may take time; the token should not be deleted after verification.
6. Open **Sitemaps** → enter \`sitemap.xml\` for \`https://ov-orbitnode.dev/sitemap.xml\` → Submit.
7. Use **URL inspection → Test live URL** for:
   - https://ov-orbitnode.dev/
   - https://ov-orbitnode.dev/about
   - https://ov-orbitnode.dev/projects
   - https://ov-orbitnode.dev/projects/pipe-joint-inspection
8. If live tests are successful, select **Request indexing** for the important pages.
9. Check the **Pages**, **Sitemaps**, **Core Web Vitals**, and **Security & Manual Actions** reports periodically.

## Expected redirect and canonical behavior

| Incoming URL | Expected response |
| --- | --- |
| \`https://ov-orbitnode.dev/\` | 200, self-canonical |
| \`https://ov-orbitnode.dev/about\` | 200, self-canonical |
| \`https://www.ov-orbitnode.dev/about\` | 308 → \`https://ov-orbitnode.dev/about\` (managed by Vercel) |
| \`https://ifeoyewole.vercel.app/about\` | 308 → \`https://ov-orbitnode.dev/about\` (Next.js host rule) |
| \`https://ov-orbitnode.dev/sitemap.xml\` | 200, absolute canonical URLs |
| \`https://ov-orbitnode.dev/robots.txt\` | 200, allows crawl, links to sitemap |
| \`https://ov-orbitnode.dev/projects/not-real\` | 404; must not be in sitemap |

Do not redirect unknown 404s to the homepage: Google can classify that as a soft 404.

## Validation tools

- Rich Results Test: https://search.google.com/test/rich-results (especially /about and a project case study)
- Schema Markup Validator: https://validator.schema.org/ (also validates WebSite and Person markup)
- PageSpeed Insights: https://pagespeed.web.dev/ (test desktop and mobile)
- Search Console URL Inspection: use the verified Domain property

Structured data helps search engines understand a site; it is not a guarantee of a rich result. Site name, rankings and indexing are decided by Google.

## When Search Console reports something

- **Discovered/Crawled — currently not indexed:** common with new websites. Confirm content quality, internal links and live accessibility; request indexing only when needed.
- **Page with redirect:** expected for legacy and www aliases if the destination is correctly indexed.
- **Alternate page with proper canonical:** often expected if a duplicate is accessible and self-canonical points to the right main URL.
- **Duplicate, Google chose different canonical:** compare redirects, canonical tags, sitemap and internal links and inspect the selected canonical.
- **Blocked by robots.txt or noindex on primary domain:** real issue; verify VERCEL_ENV is production, DNS and project routing, then deploy fix.
- **404 not found:** expected for invented URLs, but fix internal links or restore/redirect legitimately moved real pages.
- **Structured-data warnings:** fix actual invalid/mismatched properties; never add fabricated ratings, reviews, customers, prices or certifications to silence warnings.

## Operational notes

- The domain was acquired through Name.com, while **Cloudflare** is the current DNS authority. Do not remove registrar information or change nameservers for Search Console.
- WWW-to-apex redirect and both canonical domain records are managed by the Ifeoyewole Vercel project.
- Future SEO enhancements should be tested on a GitHub PR preview, not deployed by unreviewed direct edits.
- No Search Console verification token is committed: the owner must add the real token to Cloudflare DNS, or provide a confirmed verification method.
