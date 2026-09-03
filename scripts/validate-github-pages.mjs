import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docs = path.join(root, "docs");
const requiredFiles = [
  "index.html",
  "404.html",
  ".nojekyll",
  "assets/css/styles.css",
  "assets/js/site.js",
];
const requiredCopy = [
  "Turn a one-off prompt into a repeatable Copilot agent",
  "Build a career source of truth—not another resume",
  "Write the rule that keeps Copilot honest",
  "Lock the output contract and test the whole system",
  "https://copilotskill-hovqben3.manus.space",
];

const failures = [];

for (const relativePath of requiredFiles) {
  if (!fs.existsSync(path.join(docs, relativePath))) {
    failures.push(`Missing required file: docs/${relativePath}`);
  }
}

const indexPath = path.join(docs, "index.html");
const index = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, "utf8") : "";

for (const text of requiredCopy) {
  if (!index.includes(text)) failures.push(`Missing required page content: ${text}`);
}

const rootRelativeAssets = [...index.matchAll(/(?:src|href)=["']\/(?!\/)/g)];
if (rootRelativeAssets.length > 0) {
  failures.push("Root-relative asset paths found; GitHub project pages require relative assets.");
}

const localAssetRefs = [...index.matchAll(/(?:src|href)=["'](assets\/[^"']+)/g)].map(
  (match) => match[1],
);
for (const asset of localAssetRefs) {
  if (!fs.existsSync(path.join(docs, asset))) failures.push(`Linked asset does not exist: docs/${asset}`);
}

const guidePath = path.join(root, "GITHUB_PAGES.md");
if (!fs.existsSync(guidePath)) {
  failures.push("Missing GITHUB_PAGES.md deployment guide.");
} else {
  const guide = fs.readFileSync(guidePath, "utf8");
  for (const text of [
    "DrVicki/copilot-resume-skill-course",
    "main",
    "/docs",
    "Deploy from a branch",
  ]) {
    if (!guide.includes(text)) failures.push(`Deployment guide is missing: ${text}`);
  }
}

if (failures.length > 0) {
  console.error("GitHub Pages validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("GitHub Pages validation passed.");
console.log(`Checked ${requiredFiles.length} required files, ${requiredCopy.length} content markers, and ${localAssetRefs.length} local asset references.`);
