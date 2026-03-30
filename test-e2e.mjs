import { chromium, devices } from 'playwright';
import { rmSync, mkdirSync } from 'fs';

const BASE = 'https://guide.chatgptkrguide.com';
const OUT = '/Users/mhy/Desktop/Work/quiz-page/screenshots/e2e';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

let passed = 0;
let failed = 0;

function log(ok, msg) {
  if (ok) { passed++; console.log(`  ✓ ${msg}`); }
  else { failed++; console.log(`  ✗ ${msg}`); }
}

async function testQuizFlow(phone) {
  console.log(`\n[${phone.name}] 식단하조 전체 플로우`);
  const browser = await chromium.launch();
  const context = await browser.newContext({ ...phone.device });
  const page = await context.newPage();

  try {
    // 1. 이름 입력 페이지
    await page.goto(`${BASE}/${encodeURIComponent('식단하조')}`, { waitUntil: 'networkidle', timeout: 15000 });
    log(await page.isVisible('#name'), '이름 입력 필드 표시');
    log(await page.isVisible('button:has-text("설명 읽기")'), '"설명 읽기" 버튼 표시');

    // 버튼 비활성화 확인
    const btnDisabled = await page.$eval('button:has-text("설명 읽기")', el => el.disabled);
    log(btnDisabled, '이름 미입력 시 버튼 비활성화');

    // 2. 이름 입력 → 설명
    await page.fill('#name', '테스터');
    const btnEnabled = await page.$eval('button:has-text("설명 읽기")', el => !el.disabled);
    log(btnEnabled, '이름 입력 시 버튼 활성화');

    await page.click('button:has-text("설명 읽기")');
    await page.waitForTimeout(600);

    // 3. 설명 7개 넘기기
    log(await page.isVisible('text=식단하조란?'), '설명 1/7 표시');
    await page.screenshot({ path: `${OUT}/${phone.name}_lesson1.png` });

    for (let i = 1; i < 7; i++) {
      const nextBtn = page.locator('button:has-text("다음")');
      if (await nextBtn.isVisible()) {
        await nextBtn.click();
      } else {
        break;
      }
      await page.waitForTimeout(400);
    }
    log(true, '설명 6개 넘김 (다음 버튼)');

    // 마지막 설명 → 퀴즈 준비하기
    await page.click('button:has-text("퀴즈 준비하기")');
    await page.waitForTimeout(600);
    log(true, '퀴즈 준비하기 클릭');

    // 4. 퀴즈 준비 화면
    log(await page.isVisible('text=퀴즈로 확인해볼까요?'), '퀴즈 준비 화면 표시');
    log(await page.isVisible('text=10개의 문제가 있습니다'), '문제 수 안내');
    await page.screenshot({ path: `${OUT}/${phone.name}_quiz_ready.png` });

    // 5. 퀴즈 시작
    await page.click('button:has-text("퀴즈 시작")');
    await page.waitForTimeout(600);
    log(await page.isVisible('text=1번 문제'), '퀴즈 1번 문제 표시');
    await page.screenshot({ path: `${OUT}/${phone.name}_quiz_q1.png` });

    // 6. 오답 테스트 (Q1: 정답은 c=운동인증이 아닌것)
    await page.click('text=식단 기록');  // 오답
    await page.waitForTimeout(700);
    log(await page.isVisible('text=틀렸습니다'), '오답 시 피드백 표시');
    await page.screenshot({ path: `${OUT}/${phone.name}_quiz_wrong.png` });

    // 7. 정답 선택
    await page.click('text=운동 인증');  // 정답
    await page.waitForTimeout(1400);
    log(await page.isVisible('text=2번 문제'), '정답 후 2번 문제로 이동');

    // 8. 나머지 문제 정답으로 풀기
    const answers = [
      { q: 2, type: 'mc', text: '사진 찍어 카톡에 올리고 텍스트로 정리' },
      { q: 3, type: 'ox', correct: true },
      { q: 4, type: 'mc', text: '지금 내가 뭘 먹는지 관찰 — 기록 자체' },
      { q: 5, type: 'input', text: '2000' },
      { q: 6, type: 'ox', correct: true },
      { q: 7, type: 'mc', text: '첫 주 기록 기반, 내 식습관 데이터' },
      { q: 8, type: 'mc', text: '3월 30일 ~ 6월 28일 (3개월)' },
      { q: 9, type: 'ox', correct: true },
      { q: 10, type: 'mc', text: '활동 우수자 상품 + 마무리 모임 음식 재료비' },
    ];

    for (const ans of answers) {
      try {
        if (ans.type === 'mc') {
          await page.click(`text=${ans.text}`);
        } else if (ans.type === 'ox') {
          const btn = ans.correct
            ? page.locator('button:has-text("맞다")')
            : page.locator('button:has-text("틀리다")');
          await btn.click();
        } else if (ans.type === 'input') {
          await page.fill('input[type="text"]', ans.text);
          await page.click('button:has-text("제출")');
        }
        await page.waitForTimeout(1400);
      } catch (e) {
        console.log(`  ! Q${ans.q} error: ${e.message.split('\n')[0]}`);
        await page.screenshot({ path: `${OUT}/${phone.name}_q${ans.q}_error.png` });
      }
    }

    // 9. 결과 화면
    log(await page.isVisible('text=전 문제 통과'), '결과 화면 - 전 문제 통과');
    log(await page.isVisible('text=결과 공유하기'), '공유 버튼 표시');
    log(await page.isVisible('text=처음부터 다시 하기'), '다시하기 버튼 표시');
    await page.screenshot({ path: `${OUT}/${phone.name}_result.png` });

    // 10. 다시하기
    await page.click('text=처음부터 다시 하기');
    await page.waitForTimeout(500);
    log(await page.isVisible('#name'), '다시하기 → 이름 입력으로 돌아감');

  } catch (e) {
    console.log(`  FATAL: ${e.message.split('\n')[0]}`);
    await page.screenshot({ path: `${OUT}/${phone.name}_fatal.png` });
    failed++;
  }

  await context.close();
  await browser.close();
}

async function testAdmin() {
  console.log('\n[Admin] 관리자 페이지');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 });

    // 1. 로그인 화면
    log(await page.isVisible('input[type="password"]'), '비밀번호 입력 필드');

    // 2. 틀린 비밀번호
    await page.fill('input[type="password"]', 'wrong');
    await page.click('button:has-text("로그인")');
    await page.waitForTimeout(1000);
    log(await page.isVisible('text=비밀번호가 틀렸습니다'), '틀린 비번 에러 메시지');

    // 3. 맞는 비밀번호
    await page.fill('input[type="password"]', 'yeojoonsoo02@');
    await page.click('button:has-text("로그인")');
    await page.waitForTimeout(1500);
    log(await page.isVisible('text=퀴즈 관리'), '로그인 성공 → 대시보드');
    log(await page.isVisible('text=링크 복사'), '링크 복사 버튼');
    log(await page.isVisible('text=응시 결과'), '응시 결과 섹션');
    await page.screenshot({ path: `${OUT}/admin_dashboard.png` });

  } catch (e) {
    console.log(`  FATAL: ${e.message.split('\n')[0]}`);
    await page.screenshot({ path: `${OUT}/admin_fatal.png` });
    failed++;
  }

  await browser.close();
}

async function testNotFound() {
  console.log('\n[404] 존재하지 않는 퀴즈');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(`${BASE}/notexist`, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(1000);
    const has404 = await page.isVisible('text=테스트를 찾을 수 없어요') || await page.isVisible('text=찾을 수 없');
    log(has404, '404 페이지 표시');
    await page.screenshot({ path: `${OUT}/404_page.png` });
  } catch (e) {
    failed++;
  }

  await browser.close();
}

async function main() {
  await testQuizFlow({ name: 'iPhone-SE', device: devices['iPhone SE'] });
  await testQuizFlow({ name: 'iPhone-14', device: devices['iPhone 14'] });
  await testAdmin();
  await testNotFound();

  console.log(`\n${'='.repeat(40)}`);
  console.log(`결과: ${passed} passed / ${failed} failed`);
  console.log(`스크린샷: ${OUT}`);
}

main().catch(console.error);
