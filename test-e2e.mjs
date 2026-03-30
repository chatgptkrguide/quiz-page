import { chromium, devices } from 'playwright';
import { rmSync, mkdirSync } from 'fs';

const BASE = 'https://guide.chatgptkrguide.com';
const OUT = '/Users/mhy/Desktop/Work/quiz-page/screenshots/e2e-final';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

let passed = 0;
let failed = 0;

function log(ok, msg) {
  if (ok) { passed++; console.log(`  ✓ ${msg}`); }
  else { failed++; console.log(`  ✗ ${msg}`); }
}

async function testFullFlow(phone) {
  console.log(`\n[${phone.name}] 식단하조 전체 플로우`);
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...phone.device });
  const page = await ctx.newPage();

  try {
    // 1. 이름 입력
    await page.goto(`${BASE}/${encodeURIComponent('식단하조')}`, { waitUntil: 'networkidle', timeout: 15000 });
    log(await page.isVisible('#name'), '이름 입력 필드');
    await page.fill('#name', '테스터');
    await page.click('button:has-text("설명 읽기")');
    await page.waitForTimeout(600);

    // 2. 설명 6개 넘기기
    for (let i = 0; i < 5; i++) {
      await page.click('button:has-text("다음")');
      await page.waitForTimeout(300);
    }
    await page.click('button:has-text("퀴즈 준비하기")');
    await page.waitForTimeout(500);
    log(await page.isVisible('text=퀴즈로 확인해볼까요?'), '퀴즈 준비 화면');

    // 3. 퀴즈 시작
    await page.click('button:has-text("퀴즈 시작")');
    await page.waitForTimeout(600);
    log(await page.isVisible('text=1번 문제'), '퀴즈 시작');
    await page.screenshot({ path: `${OUT}/${phone.name}_01_quiz.png` });

    // 4. Q1: 오답 테스트 → 선택지 유지 확인
    await page.click('text=식단 기록');  // 오답
    await page.waitForTimeout(700);
    // 오답 선택지가 빨간색으로 남아있는지
    log(await page.isVisible('text=식단 기록'), 'Q1 오답 후 선택지 유지됨');
    log(await page.isVisible('text=틀렸습니다'), 'Q1 오답 피드백');
    await page.screenshot({ path: `${OUT}/${phone.name}_02_wrong.png` });

    // 5. Q1: 정답 → 초록 + 다음 문제 버튼
    await page.click('text=운동 인증');  // 정답
    await page.waitForTimeout(500);
    log(await page.isVisible('text=운동 인증'), 'Q1 정답 후 선택지 유지됨');
    log(await page.isVisible('button:has-text("다음 문제")'), '"다음 문제" 버튼 표시');
    await page.screenshot({ path: `${OUT}/${phone.name}_03_correct.png` });

    // 6. 다음 문제 클릭
    await page.click('button:has-text("다음 문제")');
    await page.waitForTimeout(500);
    log(await page.isVisible('text=2번 문제'), 'Q2로 이동');

    // 7. 설명 다시 보기 테스트
    log(await page.isVisible('text=설명 다시 보기'), '"설명 다시 보기" 헤더에 있음');
    await page.click('text=설명 다시 보기');
    await page.waitForTimeout(600);
    log(await page.isVisible('text=식단하조란?'), '설명으로 돌아감');

    // 8. 다시 퀴즈로
    for (let i = 0; i < 5; i++) {
      await page.click('button:has-text("다음")');
      await page.waitForTimeout(200);
    }
    await page.click('button:has-text("퀴즈 준비하기")');
    await page.waitForTimeout(300);
    await page.click('button:has-text("퀴즈 시작")');
    await page.waitForTimeout(600);
    log(await page.isVisible('text=2번 문제'), '설명 후 퀴즈 이어서 진행');

    // 9. Q2~Q10 정답으로 풀기
    const answers = [
      // Q2: 사진 필수? → X
      { type: 'ox', correct: false },
      // Q3: 칼로리 누가? → 조장
      { type: 'mc', text: '조장이 정리' },
      // Q4: 칼로리 이상 시 → 톡방
      { type: 'mc', text: '톡방에 음식 단위와 함께 이상하다고 말한다' },
      // Q5: 1단계 집중 → 관찰
      { type: 'mc', text: '지금 내가 뭘 먹는지 관찰 — 기록 자체' },
      // Q6: 벌금 매번 송금? → X
      { type: 'ox', correct: false },
      // Q7: 1끼 기록 인정? → O
      { type: 'ox', correct: true },
      // Q8: 실패 확인 기준 → 일요일
      { type: 'mc', text: '매주 일요일' },
      // Q9: 활동 기간 → 3/30~6/28
      { type: 'mc', text: '3월 30일 ~ 6월 28일 (3개월)' },
      // Q10: 벌금 사용처
      { type: 'mc', text: '활동 우수자 상품 + 마무리 모임 음식 재료비' },
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
        }
        await page.waitForTimeout(500);
        // "다음 문제" 또는 "결과 보기" 클릭
        const nextBtn = page.locator('button:has-text("다음 문제"), button:has-text("결과 보기")');
        await nextBtn.click();
        await page.waitForTimeout(500);
      } catch (e) {
        console.log(`  ! 문제 풀기 에러: ${e.message.split('\n')[0]}`);
        await page.screenshot({ path: `${OUT}/${phone.name}_error.png` });
      }
    }

    // 10. 결과 화면 — 틀린 문제 있으므로 "틀린 문제 다시 풀기"
    log(await page.isVisible('text=전 문제 통과'), '결과: 전 문제 통과');
    log(await page.isVisible('text=틀린 문제가 있었지만'), '틀린 문제 있었다는 안내');
    log(await page.isVisible('button:has-text("틀린 문제 다시 풀기")'), '"틀린 문제 다시 풀기" 버튼');
    await page.screenshot({ path: `${OUT}/${phone.name}_04_result_wrong.png` });

    // 11. 틀린 문제 다시 풀기
    await page.click('button:has-text("틀린 문제 다시 풀기")');
    await page.waitForTimeout(600);
    log(await page.isVisible('text=재풀이'), '재풀이 뱃지');
    log(await page.isVisible('text=1 / 1'), '틀린 1문제만 출제');
    await page.screenshot({ path: `${OUT}/${phone.name}_05_retry.png` });

    // 12. 틀린 문제 맞추기 (Q1: 운동 인증)
    await page.click('text=운동 인증');
    await page.waitForTimeout(500);
    await page.click('button:has-text("결과 보기")');
    await page.waitForTimeout(500);

    // 13. 이번엔 안 틀렸으므로 "카톡에 자랑하기"
    log(await page.isVisible('button:has-text("카톡에 자랑하기")'), '"카톡에 자랑하기" 버튼');
    await page.screenshot({ path: `${OUT}/${phone.name}_06_result_perfect.png` });

    console.log(`  ${phone.name} 완료`);
  } catch (e) {
    console.log(`  FATAL: ${e.message.split('\n')[0]}`);
    await page.screenshot({ path: `${OUT}/${phone.name}_fatal.png` });
    failed++;
  }

  await ctx.close();
  await browser.close();
}

async function testAdmin() {
  console.log('\n[Admin] 관리자 페이지');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 });
    log(await page.isVisible('input[type="password"]'), '로그인 화면');

    // 로그인
    await page.fill('input[type="password"]', 'yeojoonsoo02@');
    await page.click('button:has-text("로그인")');
    await page.waitForTimeout(1500);
    log(await page.isVisible('text=퀴즈 관리'), '대시보드 로드');
    log(await page.isVisible('text=삭제'), '삭제 버튼 존재');
    await page.screenshot({ path: `${OUT}/admin.png` });
  } catch (e) {
    console.log(`  FATAL: ${e.message.split('\n')[0]}`);
    failed++;
  }

  await browser.close();
}

async function main() {
  await testFullFlow({ name: 'iPhone-SE', device: devices['iPhone SE'] });
  await testFullFlow({ name: 'iPhone-14', device: devices['iPhone 14'] });
  await testAdmin();

  console.log(`\n${'='.repeat(40)}`);
  console.log(`결과: ${passed} passed / ${failed} failed`);
}

main().catch(console.error);
