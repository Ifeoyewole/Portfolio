# OrbitNode v2 — Premium Creative Studio Design System

## Brand position

**OrbitNode** is the developer identity of **Oyewole Victor Ifeoluwa**. The website should communicate a thoughtful frontend / full-stack engineer who understands visual design, system structure, and practical delivery.

**Brand thesis:** Digital craft meets engineering.

**Personality:** Precise, confident, curious, creative, warm. Avoid gamer aesthetics, buzzword-heavy copy, claims of invented awards/metrics, and unlicensed imagery.

**Voice:** First person for biography and experiences; concise active voice; specific about individual versus collaborative contributions.

## Visual direction

Editorial layouts + sculptural 3D + intentional motion. Every page should be useful without motion, and no page should depend on WebGL to deliver its essential content.

### Core colors — ONLY TWO

| Token | Hex | Purpose |
| --- | --- | --- |
| Obsidian | #111017 | Backgrounds, depth, lowlights, text on light surfaces |
| Porcelain | #F5F0E8 | Primary text, buttons, highlights, illuminated 3D materials |

**Strict constraint:** no purple, gold, green, cyan or other chromatic accents anywhere. The visual range comes from blending and opacity of these two base colors only. Use CSS alpha, `color-mix()`, font contrast, borders, physical material properties and light direction to establish dimension. Use neutral monochrome hover and focus states. Even the favicon and 3D sculpture must use only Obsidian and Porcelain.

### Typography

- **Display / headings:** Space Grotesk, weight 600-700; tight tracking (-0.05em to -0.075em).
- **Editorial accents:** Instrument Serif Italic, large sizes; use for one meaningful phrase per heading.
- **Body / UI:** DM Sans 400-700, comfortable line height (1.65-1.9).
- **Eyebrow labels:** Space Grotesk 600, uppercase, 0.15em tracking, about 11px.
- **Scale:** Hero clamp(5rem, 9.3vw, 10.6rem); inner-page display clamp(4.1rem, 10vw, 11.5rem); section heading clamp(2.8rem, 5.5vw, 6.5rem).

Never render lengthy body copy in uppercase. Longform project descriptions are sentence case.

### Grid & spacing

- Max content width 1320px, fluid gutters 4.5%-5%.
- Desktop 12-column conceptual grid, implemented as 2/3-column editorial zones.
- Vertical rhythm: section padding ~80-144px desktop; ~48-80px mobile.
- Grid gutters 16-32px; independent page headings have significant top margin.
- Keep cards rectangular and simple; border-heavy but not overly rounded.
- At 800px, switch major sections to single column; at 550px simplify project rows.

### Components

1. **Header:** sticky with subtle blur, monospace-ish brand letterform, understated navigation, contact CTA. Mobile drawer uses explicit button state, aria-expanded, and accessible links.
2. **Buttons:** primary porcelain and transparent outline variations. Hover is a 2px lift (no excessive spring).
3. **Project rows:** index, large title, sentence-case tagline, category and directional arrow. A filter must have aria-pressed.
4. **Feature cards:** abstract procedural motifs, not fictional product screenshots. A real screenshot gallery can replace motifs after images are approved and licensed.
5. **Case-study template:** strong masthead, honest role, technology, challenge, approach and verifiable highlights.
6. **Footer:** editorial closing statement and clear contact links.

### 3D art direction

- One original modular sculpture: faceted iris form, porcelain orbital rings, restrained specular highlights.
- React Three Fiber + Three.js (actual WebGL, not a prerendered static image).
- Pointer response should be subtle; idle rotation slow enough not to distract.
- CSS fallback if WebGL cannot initialize; automatically avoid WebGL on reduced-motion devices.
- No imported third-party 3D models; all shapes are procedural and original.
- Budget: target under 1.5x device pixel ratio on low-power displays; current scene uses dpr capped at 1.6, low-power GL preference.
- Future step: mount by viewport intersection if 3D load becomes costly. Keep canvas off non-3D pages.

### Interaction & accessibility

- Visible focus rings use Porcelain, 2px outline + 4px offset.
- Keyboard-accessible menus and project filters.
- Reduced-motion preference disables smooth scrolling and WebGL.
- Decorative 3D is never required for understanding or navigation.
- Ensure text contrast on dark surfaces and legibility at 320px width.
- Use semantic landmarks, native links, headers, and buttons.
- Avoid autoplay sound, scroll-jacking, and opaque cursor replacements.

### Page IA

| Route | Page |
| --- | --- |
| / | Sculptural hero, concise pitch, selected work, capabilities |
| /about | Personal story, LAUTECH background, working principles |
| /projects | Filterable projects |
| /projects/[slug] | One case study per project |
| /experience | SIWES, frontend internship, collaborative development |
| /stack | Capabilities and tools |
| /playground | Working 3D experiment, future prototypes |
| /contact | GitHub and LinkedIn; no fake form |

### SEO & discoverability

- Keep both **Oyewole Victor Ifeoluwa** and **OrbitNode** in the homepage title/body.
- JSON-LD Person.name + Person.alternateName; sameAs links to GitHub and LinkedIn.
- Individual title, description and canonical URL per standalone page.
- Dynamically generated robots.txt and sitemap.xml.
- Canonical base currently points to verified Vercel URL until ov-orbitnode.dev is purchased and DNS/SSL connected; then set NEXT_PUBLIC_SITE_URL.
- Search discovery and ranking cannot be guaranteed; verify through Search Console after domain connection.

### Content integrity

- Pipe Joint Inspection is collaborative: credit frontend/UI engineering, not full backend ownership.
- Do not claim chess or the Blockchain-Based Attendance System as individually created portfolio projects.
- Do not publish private email/phone data without consent.
- Project years/impact metrics should only be used with reliable evidence; do not fabricate user counts, percentages or clients.
- Do not claim awards, testimonials, team sizes or revenue without direct verification.

### Visual acceptance checklist

- Hero reads clearly before optional 3D initializes.
- Header usable on phone and with keyboard.
- All nav links resolve to real routes.
- All project cards lead to an actual page with a role and repository/live link.
- No horizontal overflow at 320px.
- Focus, reduced motion, CSS fallback and 3D behaviors checked.
- Lighthouse, Core Web Vitals, mobile, color contrast and device performance to be checked before deployment.

