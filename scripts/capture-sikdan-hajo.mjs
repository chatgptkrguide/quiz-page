import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outDir = resolve(__dirname, "../public/guide");
mkdirSync(outDir, { recursive: true });

const BASE = "https://sikdan-hajo.vercel.app";

/**
 * fullPage: true → 전체 스크롤 영역 / false → 뷰포트만
 */
const routes = [
  { path: "/", file: "01-home.png", wait: 2500, fullPage: false },
  { path: "/weekly", file: "02-report.png", wait: 2500, fullPage: false },
  { path: "/foods", file: "03-foods.png", wait: 2500, fullPage: false },
  { path: "/goals", file: "04-goals.png", wait: 2500, fullPage: false },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  ...devices["iPhone 14"],
  locale: "ko-KR",
});
const page = await context.newPage();

async function tryGoto(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      return;
    } catch (err) {
      console.warn(`retry ${i + 1} for ${url}:`, err.message);
      await page.waitForTimeout(2000);
    }
  }
  throw new Error(`failed to navigate: ${url}`);
}

for (const r of routes) {
  const url = `${BASE}${r.path}`;
  console.log(`[capture] ${url}`);
  await tryGoto(url);
  await page.waitForTimeout(r.wait);
  const out = resolve(outDir, r.file);
  await page.screenshot({ path: out, fullPage: r.fullPage });
  console.log(`  -> ${out}`);
}

await browser.close();
console.log("done");
