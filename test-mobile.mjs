import { chromium, devices } from 'playwright';
import { mkdirSync, rmSync } from 'fs';

const BASE = 'https://guide.chatgptkrguide.com';
const OUT = '/Users/mhy/Desktop/Work/quiz-page/screenshots';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const phones = [
  { name: 'iPhone-SE', device: devices['iPhone SE'] },
  { name: 'iPhone-14', device: devices['iPhone 14'] },
  { name: 'Galaxy-S9', device: devices['Galaxy S9+'] },
];

async function run() {
  const browser = await chromium.launch();

  for (const phone of phones) {
    console.log(`Testing ${phone.name}...`);
    const context = await browser.newContext({ ...phone.device });
    const page = await context.newPage();

    try {
      await page.goto(`${BASE}/${encodeURIComponent('식단하조')}`, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${OUT}/${phone.name}_01_name.png` });

      await page.fill('#name', '테스터');
      await page.click('button:has-text("설명 읽기")');
      await page.waitForTimeout(600);
      await page.screenshot({ path: `${OUT}/${phone.name}_02_lesson1.png` });

      // lesson 4 (규칙&벌금 - 업데이트된 내용)
      for (let i = 0; i < 3; i++) {
        await page.click('button:has-text("다음")');
        await page.waitForTimeout(300);
      }
      await page.screenshot({ path: `${OUT}/${phone.name}_03_lesson4_rule.png` });

      // lesson 6 (목표2 - 축약된 내용)
      for (let i = 0; i < 2; i++) {
        await page.click('button:has-text("다음")');
        await page.waitForTimeout(300);
      }
      await page.screenshot({ path: `${OUT}/${phone.name}_04_lesson6_goal.png` });

      // lesson 7 → 퀴즈 준비
      await page.click('button:has-text("다음")');
      await page.waitForTimeout(300);
      await page.screenshot({ path: `${OUT}/${phone.name}_05_lesson7_period.png` });

      await page.click('button:has-text("퀴즈 준비하기")');
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${OUT}/${phone.name}_06_quiz_ready.png` });

      await page.click('button:has-text("퀴즈 시작")');
      await page.waitForTimeout(600);
      await page.screenshot({ path: `${OUT}/${phone.name}_07_quiz.png` });

      console.log(`  ${phone.name} OK`);
    } catch (e) {
      console.log(`  ${phone.name} error at: ${e.message.split('\n')[0]}`);
      await page.screenshot({ path: `${OUT}/${phone.name}_error.png` });
    }

    await context.close();
  }

  await browser.close();
  console.log(`Done! ${OUT}`);
}

run().catch(console.error);
