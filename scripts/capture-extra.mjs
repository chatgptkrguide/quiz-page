import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outDir = resolve(__dirname, "../public/guide");
mkdirSync(outDir, { recursive: true });

const BASE = "https://sikdan-hajo.vercel.app";

/** 계산기·BMR·멤버상세 추가 캡처 */
const routes = [
  { path: "/calculator", file: "05-calculator.png", wait: 2500 },
  { path: "/bmr", file: "06-bmr.png", wait: 2500 },
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
  await page.screenshot({ path: out, fullPage: false });
  console.log(`  -> ${out}`);
}

// 홈 — 첫 번째 멤버 카드를 펼친 상태로 캡처
console.log(`[capture] home expanded`);
await tryGoto(`${BASE}/`);
await page.waitForTimeout(2500);
// 첫 번째 멤버 카드 클릭 (이름 영역)
const firstCard = page.locator("[role=button], .member-card, li").first();
await firstCard
  .click({ timeout: 3000 })
  .catch(() => console.warn("first card click failed — selector mismatch"));
await page.waitForTimeout(1500);
await page.screenshot({
  path: resolve(outDir, "07-home-expanded.png"),
  fullPage: false,
});

await browser.close();
console.log("done");
