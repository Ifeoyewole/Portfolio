# Portfolio — Deploy to Vercel

This is a simple static portfolio site. The project contains:

- `index.html` (entry)
- `style.css` (styles)
- `main.js` (site JavaScript — contains smooth-scroll behavior)
- `vercel.json` (static site config)

Quick deploy steps:

1. Install the Vercel CLI or use the Vercel web UI.
2. From the project root (this folder) run the Vercel CLI and follow prompts:

```powershell
vercel
```

When asked for the project root, choose this folder. The provided `vercel.json` will route all requests to `index.html`.

Notes and checks before deploying:

- Ensure `index.html` is the entry file (Vercel will serve it by default with the provided `vercel.json`).
- If you add build steps (React, Next.js, etc.), add a `package.json` and update `vercel.json` accordingly.
Notes:

- Ensure `index.html` is the entry file (the repo is configured for static hosting with `vercel.json`).
- The contact form currently uses `mailto:` (this opens the user's mail client). Consider a serverless form endpoint or Vercel integration if you need reliable submissions.

If you later add a build step (React, Next.js, etc.), add a `package.json` and update `vercel.json` accordingly.
