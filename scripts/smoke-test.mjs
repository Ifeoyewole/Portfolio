import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const port = 3099;
const origin = \`http://127.0.0.1:\${port}\`;
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
  "/projects/rokeebat-portfolio"
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
  if (unexpected.length) throw new Error(\`Found non-brand color in \${path}: \${unexpected.join(", ")}\`);
  const rgb = source.match(/rgba?\([^)]+\)/g) ?? [];
  const otherRgb = rgb.filter((value) => !/rgba?\(\s*(?:245\s*,\s*240\s*,\s*232|17\s*,\s*16\s*,\s*23)/.test(value));
  if (otherRgb.length) throw new Error(\`Unexpected RGB color in \${path}: \${otherRgb.join(", ")}\`);
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
    if (response.status !== 200) throw new Error(\`\${route} returned HTTP \${response.status}\`);
    if (!/<h1\b/i.test(html)) throw new Error(\`\${route} is missing an H1 heading\`);
    if (!html.includes("OrbitNode")) throw new Error(\`\${route} is missing brand identity\`);
    console.log(\`PASS \${route} — HTTP 200, heading + branding\`);
  }
  const missing = await fetch(origin + "/projects/not-real", { signal: AbortSignal.timeout(8000) });
  if (missing.status !== 404) throw new Error("Nonexistent case study did not return HTTP 404");

  for (const route of ["/robots.txt", "/sitemap.xml", "/favicon.svg"]) {
    const response = await fetch(origin + route, { signal: AbortSignal.timeout(8000) });
    if (response.status !== 200) throw new Error(\`\${route} returned HTTP \${response.status}\`);
    console.log(\`PASS \${route} — HTTP 200\`);
  }
  console.log(\`All \${routes.length} standalone routes and SEO assets passed smoke checks.\`);
} finally {
  server.kill("SIGTERM");
}
