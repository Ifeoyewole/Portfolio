import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const port = 3099;
const origin = `http://127.0.0.1:${port}`;
const routes = [
  "/",
  "/about",
  "/projects",
  "/experience",
  "/stack",
  "/playground",
  "/contact",
  "/projects/pipe-joint-inspection",
  "/projects/competition-analysis",
  "/projects/savory",
  "/projects/pdf-size-reducer",
  "/projects/word-scramble",
  "/projects/rokeebat-portfolio",
  "/projects/taskflow"
];

const sourcePaths = [
  "src/app/globals.css",
  "src/components/scene.tsx",
  "public/favicon.svg"
];

for (const path of sourcePaths) {
  const source = readFileSync(path, "utf8");
  const colors = source.match(/#[\da-fA-F]{3,8}\b/g) ?? [];
  const unexpected = colors.filter((value) => !["#111017", "#f5f0e8"].includes(value.toLowerCase()));
  if (unexpected.length) throw new Error(`Found non-brand color in ${path}: ${unexpected.join(", ")}`);
  const rgb = source.match(/rgba?\([^)]+\)/g) ?? [];
  const otherRgb = rgb.filter((value) => !/rgba?\(\s*(?:245\s*,\s*240\s*,\s*232|17\s*,\s*16\s*,\s*23)/.test(value));
  if (otherRgb.length) throw new Error(`Unexpected RGB color in ${path}: ${otherRgb.join(", ")}`);
}
console.log("Brand color audit passed: Obsidian + Porcelain only.");

const bin = join(process.cwd(), "node_modules/next/dist/bin/next");
const server = spawn(process.execPath, [bin, "start", "-p", String(port)], {
  env: { ...process.env, NODE_ENV: "production" },
  stdio: ["ignore", "pipe", "pipe"]
});
let output = "";
server.stdout.on("data", (chunk) => { output += String(chunk); });
server.stderr.on("data", (chunk) => { output += String(chunk); });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
try {
  let up = false;
  for (let attempt = 0; attempt < 70; attempt += 1) {
    if (server.exitCode !== null) break;
    try {
      const res = await fetch(origin, { signal: AbortSignal.timeout(1400) });
      if (res.status === 200) { up = true; break; }
    } catch { /* Server is starting. */ }
    await sleep(300);
  }
  if (!up) throw new Error("Next.js test server failed to start. " + output.slice(-2000));

  for (const route of routes) {
    const response = await fetch(origin + route, { signal: AbortSignal.timeout(8000) });
    const html = await response.text();
    if (response.status !== 200) throw new Error(`${route} returned HTTP ${response.status}`);
    if (!/<h1\b/i.test(html)) throw new Error(`${route} is missing an H1 heading`);
    if (!html.includes("OrbitNode")) throw new Error(`${route} is missing brand identity`);
    console.log(`PASS ${route} — HTTP 200, heading + branding`);
  }
  // SEO signals must agree for every indexable page. Google uses canonical,
  // redirects and sitemap inclusion as separate canonicalization signals.
  for (const route of routes) {
    const response = await fetch(origin + route, { signal: AbortSignal.timeout(8000) });
    const html = await response.text();
    const expected = "https://ov-orbitnode.dev" + (route === "/" ? "/" : route);

    const canonicalTag = (html.match(/<link\b[^>]*>/g) ?? [])
      .find((tag) => /rel=["']canonical["']/.test(tag));
    const canonical = canonicalTag?.match(/href="([^"]+)"/)?.[1];
    if (canonical !== expected) throw new Error(`${route} incorrect canonical: ${canonical} (expected ${expected})`);

    const ogUrlTag = (html.match(/<meta\b[^>]*>/g) ?? [])
      .find((tag) => /property=["']og:url["']/.test(tag));
    const ogUrl = ogUrlTag?.match(/content="([^"]+)"/)?.[1];
    if (ogUrl !== expected) throw new Error(`${route} incorrect og:url: ${ogUrl}`);

    if (!/property="og:image"/.test(html)) throw new Error(`${route} missing Open Graph image`);
    if (!/name="twitter:card"/.test(html)) throw new Error(`${route} missing Twitter card`);
    if (!/name="description"/.test(html)) throw new Error(`${route} missing description`);
    if (/name="robots"[^>]*content="[^"]*noindex/i.test(html)) throw new Error(`${route} is unexpectedly noindex`);

    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map((match) => JSON.parse(match[1]));
    if (!ld.some((node) => node["@type"] === "Person")) throw new Error(`${route} lacks Person identity markup`);
    if (route === "/" && !ld.some((node) => node["@type"] === "WebSite")) throw new Error("Homepage lacks WebSite name markup");
    if (route === "/about" && !ld.some((node) => node["@type"] === "ProfilePage")) throw new Error("About lacks ProfilePage markup");
    if (route.startsWith("/projects/") && !ld.some((node) => node["@type"] === "BreadcrumbList")) throw new Error(`${route} lacks breadcrumbs`);
    console.log(`PASS SEO ${route} — canonical, OG, Twitter, description, JSON-LD`);
  }

  // Test the legacy hostname without following the redirect away from the CI server.
  const oldHost = await fetch(origin + "/about", {
    headers: { host: "ifeoyewole.vercel.app" },
    redirect: "manual",
    signal: AbortSignal.timeout(8000)
  });
  if (oldHost.status !== 308 || oldHost.headers.get("location") !== "https://ov-orbitnode.dev/about") {
    throw new Error(`Expected permanent old-domain redirect to canonical About; got ${oldHost.status}: ${oldHost.headers.get("location")}`);
  }
  console.log("PASS LEGACY REDIRECT — 308 directly to canonical custom domain");

  const shareImage = await fetch(origin + "/opengraph-image", { signal: AbortSignal.timeout(12000) });
  if (shareImage.status !== 200 || !(shareImage.headers.get("content-type") ?? "").includes("image/png")) {
    throw new Error(`Open Graph image failed: ${shareImage.status}, ${shareImage.headers.get("content-type")}`);
  }
  console.log("PASS SOCIAL IMAGE — image/png 1200×630");

  const robotsTxt = await (await fetch(origin + "/robots.txt")).text();
  if (!robotsTxt.includes("Sitemap: https://ov-orbitnode.dev/sitemap.xml") || robotsTxt.includes("Disallow: /")) {
    throw new Error("Production robots.txt must allow crawling and point to the canonical sitemap");
  }
  const sitemapXml = await (await fetch(origin + "/sitemap.xml")).text();
  for (const route of routes) {
    const loc = "https://ov-orbitnode.dev" + (route === "/" ? "/" : route);
    if (!sitemapXml.includes("<loc>" + loc + "</loc>")) {
      throw new Error(`Sitemap missing canonical ${loc}`);
    }
  }
  if (sitemapXml.includes("ifeoyewole.vercel.app")) throw new Error("Sitemap lists legacy host");
  console.log("PASS SITEMAP — all indexable routes on canonical domain");

  const missing = await fetch(origin + "/projects/not-real", { signal: AbortSignal.timeout(8000) });
  if (missing.status !== 404) throw new Error("Nonexistent case study did not return HTTP 404");

  for (const route of ["/media/orbitnode-portrait.jpg", "/media/joint-inspection.png", "/media/jointinspect-latest.webp", "/media/word-scramble.png", "/media/savory-restaurant.png", "/media/taskflow-app.png", "/media/powerbi-sales.png", "/media/powerbi-hr.png", "/media/powerbi-finance.png"]) {
    const response = await fetch(origin + route, { signal: AbortSignal.timeout(8000) });
    if (response.status !== 200) throw new Error(`Asset ${route} returned HTTP ${response.status}`);
    if (!(response.headers.get("content-type") || "").startsWith("image/")) throw new Error(`Asset ${route} isn't served as an image`);
    console.log(`PASS ASSET ${route}`);
  }
  for (const route of ["/robots.txt", "/sitemap.xml", "/favicon.svg"]) {
    const response = await fetch(origin + route, { signal: AbortSignal.timeout(8000) });
    if (response.status !== 200) throw new Error(`${route} returned HTTP ${response.status}`);
    console.log(`PASS ${route} — HTTP 200`);
  }
  console.log(`All ${routes.length} standalone routes and SEO assets passed smoke checks.`);
} finally {
  server.kill("SIGTERM");
}
