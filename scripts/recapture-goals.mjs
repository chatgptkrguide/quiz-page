import { chromium, devices } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outDir = resolve(__dirname, "../public/guide");

const browser = await chromium.launch();
const context = await browser.newContext({
  ...devices["iPhone 14"],
  locale: "ko-KR",
});
const page = await context.newPage();

const URL = "https://sikdan-hajo.vercel.app/goals";
console.log(`[capture] ${URL}`);
await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(2500);
const out = resolve(outDir, "04-goals.png");
await page.screenshot({ path: out, fullPage: false });
console.log(`  -> ${out}`);

await browser.close();
console.log("done");
