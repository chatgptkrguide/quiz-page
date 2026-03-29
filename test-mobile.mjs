import { chromium, devices } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'https://guide.chatgptkrguide.com';
const OUT = '/Users/mhy/Desktop/Work/quiz-page/screenshots';
mkdirSync(OUT, { recursive: true });

const phones = [
  { name: 'iPhone-SE', device: devices['iPhone SE'] },
  { name: 'iPhone-14', device: devices['iPhone 14'] },
  { name: 'iPhone-14-Pro-Max', device: devices['iPhone 14 Pro Max'] },
  { name: 'Galaxy-S9', device: devices['Galaxy S9+'] },
  { name: 'Pixel-7', device: devices['Pixel 7'] },
];

async function run() {
  const browser = await chromium.launch();

  for (const phone of phones) {
    console.log(`Testing ${phone.name}...`);
    const context = await browser.newContext({ ...phone.device });
    const page = await context.newPage();

    try {
      // 1. Name input
      await page.goto(`${BASE}/${encodeURIComponent('식단하조')}`, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${OUT}/${phone.name}_01_name.png` });

      // 2. Fill name → lesson
      await page.fill('#name', '테스터');
      await page.click('button:has-text("설명 읽기")');
      await page.waitForTimeout(800);
      await page.screenshot({ path: `${OUT}/${phone.name}_02_lesson1.png` });

      // 3. Lesson 2
      await page.click('button:has-text("다음")');
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${OUT}/${phone.name}_03_lesson2.png` });

      // 4. Long lesson (diet-l7)
      for (let i = 0; i < 4; i++) {
        await page.click('button:has-text("다음")');
        await page.waitForTimeout(300);
      }
      await page.screenshot({ path: `${OUT}/${phone.name}_04_lesson_long.png` });

      // 5. Quiz ready
      await page.click('button:has-text("퀴즈 준비하기")');
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${OUT}/${phone.name}_05_quiz_ready.png` });

      // 6. Quiz question
      await page.click('button:has-text("퀴즈 시작")');
      await page.waitForTimeout(800);
      await page.screenshot({ path: `${OUT}/${phone.name}_06_quiz.png` });

      console.log(`  ${phone.name} OK`);
    } catch (e) {
      console.log(`  ${phone.name} error: ${e.message.split('\n')[0]}`);
      await page.screenshot({ path: `${OUT}/${phone.name}_error.png` });
    }

    await context.close();
  }

  await browser.close();
  console.log(`\nDone! Screenshots: ${OUT}`);
}

run().catch(console.error);
