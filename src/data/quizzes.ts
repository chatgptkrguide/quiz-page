import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    slug: "식단하조",
    title: "식단하조 조모임 상세 설명",
    description:
      "먹는 걸 기록하면, 몸이 달라진다.\n설명을 읽고 퀴즈로 확인해보세요.",
    logo: "/logo-식단하조.png",
    theme: "식단하조",
    lessons: [
      {
        id: "diet-l1",
        title: "식단하조란?",
        content:
          "밥 먹을 때마다 카톡에 올리고,\n서로 구경하는 모임이에요.\n\n**식단 기록**, **영양분 인식**, **함께 공유**\n이 세 가지가 핵심입니다.",
        highlight: "식단 기록 + 영양분 인식 + 함께 공유",
      },
      {
        id: "diet-l2",
        title: "기록 방법",
        content:
          "매번 먹는 음식을\n카톡에 **텍스트로 기록**합니다.\n\n뭘 얼마나 먹었는지 간단히 적으면 돼요.\n\n예시)\n점심 — 햇반 1개, 계란후라이 2개,\n닭가슴살 100g\n\n**사진은 필수가 아닙니다.**\n텍스트만 올려도 괜찮아요.",
        highlight: "텍스트로 간단히 기록 (사진 선택)",
      },
      {
        id: "diet-l3",
        title: "칼로리 확인",
        content:
          "칼로리 확인은 **조장이 정리**해주니\n조원은 기록만 하면 됩니다.\n\n단, 단위 문제로 칼로리가\n많거나 적게 나올 수 있어요.\n\n이상하면 **톡방에 음식 단위와 함께**\n이상하다고 말해주세요.",
        highlight: "칼로리는 조장 정리 / 이상하면 톡방에 말하기",
      },
      {
        id: "diet-l4",
        title: "활동 계획 — 3단계",
        content:
          "한 번에 다 바꾸는 게 아니라,\n**단계별**로 진행합니다.\n\n**01. 첫 한 주** — 관찰\n지금 뭘 먹는지, 기록 자체에 집중\n\n**02. 2주차** — 목표 설정\n칼로리 확인 후 나만의 목표\n예) 단백질 120g↑ / 2,000kcal↓ / 야식 주2↓\n\n**03. 3주차~** — 실천\n매일 기록, 서로 공유하며 꾸준히",
        highlight: "관찰 → 목표 설정 → 매일 기록 & 실천",
      },
      {
        id: "diet-l5",
        title: "규칙 & 벌금",
        content:
          "벌금 **2,000원**\n\n· **하루종일** 기록 안 하면 부과\n· 매주 **일요일 기준**, 주 3회 이상 목표 실패 시 부과\n\n1~2끼만 기록해도 **기록 인정**\n(단, 목표 달성에는 영향 있음)\n\n벌금은 **따로 기록**되며\n**나중에 한 번에** 걷습니다.\n매번 송금하지 않아요.\n\n모인 벌금 → **우수자 상품 + 마무리 모임 재료비**",
        highlight: "벌금 2,000원 / 따로 기록, 나중에 한번에",
      },
      {
        id: "diet-l6",
        title: "활동 기간 & 오프라인",
        content:
          "**3월 30일 ~ 6월 28일**, 딱 3개월\n매일 카톡방에 기록, 오프라인 총 2회\n\n**킥오프 — 4월 5일**\n첫 주 기록 돌아보기 + 개인 목표 선언\n이후 다 같이 맛있는 거 먹으러!\n\n**마무리 — 6월 26일**\n3개월 변화 공유 + 우수자 선정\n함께 음식 가져와서 먹는 시간",
        highlight: "3/30~6/28 (3개월) / 킥오프 4/5 + 마무리 6/26",
      },
    ],
    questions: [
      {
        id: "diet-q1",
        type: "multiple-choice",
        question: "식단하조의 핵심 활동 3가지가 아닌 것은?",
        options: [
          { id: "a", text: "식단 기록" },
          { id: "b", text: "영양분 인식" },
          { id: "c", text: "운동 인증" },
          { id: "d", text: "함께 공유" },
        ],
        correctAnswer: "c",
        explanation: "핵심은 식단 기록, 영양분 인식, 함께 공유 세 가지예요.",
      },
      {
        id: "diet-q2",
        type: "ox",
        question: "식단 기록 시 사진을 반드시 찍어서 올려야 한다.",
        correctAnswer: false,
        explanation: "사진은 필수가 아닙니다. 텍스트만 올려도 괜찮아요.",
      },
      {
        id: "diet-q3",
        type: "multiple-choice",
        question: "칼로리 확인은 누가 하나요?",
        options: [
          { id: "a", text: "각자 AI로 확인" },
          { id: "b", text: "조장이 정리" },
          { id: "c", text: "전용 앱이 자동 계산" },
          { id: "d", text: "안 함" },
        ],
        correctAnswer: "b",
        explanation: "칼로리 확인은 조장이 정리해주니, 조원은 기록만 하면 됩니다.",
      },
      {
        id: "diet-q4",
        type: "multiple-choice",
        question: "칼로리가 이상하게 나왔을 때 어떻게 해야 하나요?",
        options: [
          { id: "a", text: "그냥 넘어간다" },
          { id: "b", text: "톡방에 음식 단위와 함께 이상하다고 말한다" },
          { id: "c", text: "직접 다시 계산한다" },
          { id: "d", text: "조장에게 DM 보낸다" },
        ],
        correctAnswer: "b",
        explanation: "톡방에 음식 단위와 함께 이상하다고 말해주세요.",
      },
      {
        id: "diet-q5",
        type: "multiple-choice",
        question: "활동 1단계(첫 한 주)에 집중해야 할 것은?",
        options: [
          { id: "a", text: "칼로리 목표 달성" },
          { id: "b", text: "운동 병행" },
          { id: "c", text: "지금 내가 뭘 먹는지 관찰 — 기록 자체" },
          { id: "d", text: "체중 감량" },
        ],
        correctAnswer: "c",
        explanation: "첫 한 주는 뭘 먹는지 관찰하고, 기록 자체에 집중하는 단계예요.",
      },
      {
        id: "diet-q6",
        type: "ox",
        question: "벌금은 발생할 때마다 바로 송금해야 한다.",
        correctAnswer: false,
        explanation: "벌금은 따로 기록되며, 나중에 한 번에 걷습니다.",
      },
      {
        id: "diet-q7",
        type: "ox",
        question: "3끼 중 1끼만 기록해도 그 날은 기록한 것으로 인정된다.",
        correctAnswer: true,
        explanation: "1~2끼만 기록해도 기록으로 인정됩니다. 다만 목표 달성에는 영향이 있을 수 있어요.",
      },
      {
        id: "diet-q8",
        type: "multiple-choice",
        question: "목표 달성 실패 여부는 언제 기준으로 확인하나요?",
        options: [
          { id: "a", text: "매일 자정" },
          { id: "b", text: "매주 일요일" },
          { id: "c", text: "매월 말일" },
          { id: "d", text: "조장이 랜덤으로" },
        ],
        correctAnswer: "b",
        explanation: "매주 일요일 기준으로, 주 3회 이상 목표 실패 시 벌금이 부과됩니다.",
      },
      {
        id: "diet-q9",
        type: "multiple-choice",
        question: "식단하조 활동 기간은?",
        options: [
          { id: "a", text: "1월 ~ 3월 (3개월)" },
          { id: "b", text: "3월 30일 ~ 6월 28일 (3개월)" },
          { id: "c", text: "4월 ~ 7월 (4개월)" },
          { id: "d", text: "5월 ~ 8월 (3개월)" },
        ],
        correctAnswer: "b",
        explanation: "3월 30일부터 6월 28일까지, 딱 3개월간 활동합니다.",
      },
      {
        id: "diet-q10",
        type: "multiple-choice",
        question: "모인 벌금은 어디에 사용되나요?",
        options: [
          { id: "a", text: "조장 개인 용돈" },
          { id: "b", text: "활동 우수자 상품 + 마무리 모임 음식 재료비" },
          { id: "c", text: "다음 기수 운영비" },
          { id: "d", text: "기부" },
        ],
        correctAnswer: "b",
        explanation: "우수자 상품과 마무리 모임 음식 재료비로 사용합니다.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 3, title: "식단 초보", description: "함께 배워가요" },
      { minScore: 4, maxScore: 7, title: "식단 중수", description: "조금만 더!" },
      { minScore: 8, maxScore: 10, title: "식단 마스터", description: "완벽하게 이해하셨네요!" },
    ],
  },
  {
    slug: "식단하조-사용법",
    title: "식단하조 웹사이트 사용법",
    description:
      "홈 · 리포트 · 음식 · 목표 4개 탭,\n한 번에 감 잡기.\n화면을 보면서 따라와 주세요.",
    logo: "/logo-식단하조.png",
    theme: "식단하조",
    lessons: [
      {
        id: "use-l1",
        title: "식단하조 웹사이트는?",
        content:
          "우리 조의 **식단 기록을 한눈에**\n확인할 수 있는 공식 사이트예요.\n\n주소: **sikdan-hajo.vercel.app**\n\n하단에 **4개의 메인 탭**\n\n**홈** — 오늘 멤버들 식단 현황\n**리포트** — 일간/주간/누적 벌금\n**음식** — 영양소 정보 DB (664개+)\n**목표** — 내 목표 & 벌금 규칙\n\n+ **목표 탭 상단**에 칼로리/BMR\n  **계산기 바로가기** 카드\n+ 홈 카드에서 **멤버 상세 페이지**로 이동\n\n지금부터 하나씩 살펴볼게요.",
        highlight: "4개 메인 탭 + 목표 탭의 계산기 카드 + 멤버 상세",
      },
      {
        id: "use-l2",
        title: "① 홈 — 오늘 식단 현황",
        content:
          "홈 탭은 **오늘 날짜 기준**으로\n멤버들의 식단 기록을 보여줍니다.\n\n**날짜 이동**\n좌/우 화살표 = 전날/다음날\n**가운데 날짜 탭** = 오늘로 복귀\n\n**카드 정보**\n· 이름 + **달성/미달성** 뱃지\n· **IF** 보라 뱃지 = 간헐적 단식 멤버\n· 총 칼로리 · 탄·단·지 그램\n· 목표 대비 부족량 표시\n\n**특별일**이면 파란 배너\n\"오늘은 전원 자동 통과\" 표시\n\n자주 찾는 멤버는 **★ 즐겨찾기**로\n맨 위에 고정할 수 있어요.",
        highlight: "날짜 이동 / IF·달성 뱃지 / 즐겨찾기 고정 / 특별일 배너",
        image: {
          src: "/guide/01-home.png",
          alt: "식단하조 홈 화면 — 멤버별 칼로리와 탄단지 현황",
          caption: "홈 탭: 오늘 누가 얼마나 먹었는지 한눈에",
        },
      },
      {
        id: "use-l2b",
        title: "① 홈 — 카드 탭해서 더 보기",
        content:
          "**멤버 카드를 탭하면** 펼쳐지면서\n그날 먹은 **식사 목록**이 보여요.\n\n🌅 아침 / ☀️ 점심 / 🌙 저녁 / 🍪 간식\n각 식사별로 음식 이름 + 수량 + 칼로리\n\n맨 아래 **\"상세 영양소 보기\"** 버튼\n→ 멤버 전용 상세 페이지로 이동\n→ 하루 **4대 영양소** 외에 당류/식이섬유/\n칼슘/철분/비타민 D·C/마그네슘/오메가3/아연\n**추가 9개 영양소**까지 확인 가능\n\n**📸 식단 이미지 저장** 버튼으로\n오늘 전체 멤버 식단을 **PNG로 다운로드**\n해서 단톡방에 자랑할 수도 있어요.",
        highlight: "카드 탭 → 식사 목록 → 상세 영양소 13종 + PNG 저장",
      },
      {
        id: "use-l3",
        title: "② 리포트 — 3개의 서브탭",
        content:
          "리포트 탭에는 **일간 / 주간 / 누적벌금**\n3개의 서브탭이 있어요.\n\n**📅 일간 탭** (`/report`)\n그날 전체 멤버를 표로 한 번에\n**\"이미지 복사\" / \"이미지 저장\"** 버튼으로\n단톡방에 바로 공유 가능\n\n**📊 주간 탭** (`/weekly`)\n멤버별 월~일 **7칸 상태 표시**\n· **O** 달성 · **!** 미달성\n· **X** 미기록 · **P** 특별일(pass)\n(오늘 날짜는 초록 테두리 강조)\n\n**💰 누적벌금 탭**\n전체 누적 벌금 합계 & 멤버 **벌금 랭킹**\n(1위 = 벌금 최다, 빨간색 강조)",
        highlight: "일간=표+이미지공유 / 주간=O!XP / 누적=랭킹",
        image: {
          src: "/guide/02-report.png",
          alt: "식단하조 리포트 화면 — 주간 달성 현황과 벌금 표시",
          caption: "리포트 탭: 요일별 O / ! / X / P로 한눈에 달성 여부 확인",
        },
      },
      {
        id: "use-l3b",
        title: "② 리포트 — 주간 카드 탭해서 더 보기",
        content:
          "주간 탭에서 **멤버 카드를 탭**하면\n벌금 세부 내역이 펼쳐져요.\n\n**미기록 벌금**\n예: 2일 × 2,000원 = 4,000원\n+ 해당 날짜 목록\n\n**목표 미달성 내역**\n· 주 2회까지 → **\"2회까지 면제\"**\n· 3회부터 → 초과분만 2,000원씩 과금\n\n**일별 세부 기록**\n· 칼로리 · 단백질 (목표 있는 멤버)\n\n완벽한 주엔 **\"이번 주 완벽 달성!\"**\n초록 배너가 떠요. 🎉",
        highlight: "카드 탭 → 벌금 내역 + 면제 현황 + 일별 기록",
      },
      {
        id: "use-l4",
        title: "③ 음식 — 영양소 DB 조회",
        content:
          "**664개+ 음식**의 영양소가 저장돼 있어요.\n\n**🔍 검색** — 음식 이름으로 찾기\n예: \"삼겹살\", \"신라면\"\n\n**카테고리 16개** (가로 스크롤)\n전체 / 밥·곡류 / 고기 / 생선·해산물 /\n계란·유제품 / 면류 / 국·찌개 / 외식 /\n편의점 / 반찬 / 분식 / 간식 /\n과일 / 빵·디저트 / 음료 / 양념·소스\n\n**카드 기본**: 이름 · 제공량 · 탄·단·지 · kcal\n\n**카드를 탭하면** 상세 13개 영양소\n(당류/식이섬유/칼슘/철분/비타민D,C/\n마그네슘/오메가3/아연 등)\n\n자주 먹는 건 **★ 즐겨찾기** → 상단 고정",
        highlight: "16개 카테고리 · 카드 탭 → 13개 영양소 · ★ 즐겨찾기",
        image: {
          src: "/guide/03-foods.png",
          alt: "식단하조 음식 영양소 DB 화면 — 검색과 카테고리 필터",
          caption: "음식 탭: 내가 먹은 음식의 영양소를 바로 조회",
        },
      },
      {
        id: "use-l5",
        title: "④ 목표 — 벌금 규칙 & 계산기 & 개인 목표",
        content:
          "상단에 **벌금 규칙**\n\n· 하루 기록 안 하면 **2,000원 (즉시)**\n· 목표 미달성 **주 3회부터 2,000원/회**\n  (2회까지 면제)\n· **간헐적 단식(IF)** 멤버는\n  미기록일 벌금 **면제**\n· **신규 멤버 3일 유예기간**\n· 매주 **일요일** 자동 정산\n\n바로 아래 **🧮 계산기 바로가기** 카드 2개\n· **칼로리 계산기** — 내 목표 칼로리 계산\n· **BMR 계산기** — 기초대사량 계산\n(탭하면 계산기 페이지로 이동)\n\n그 아래는 **멤버별 개인 목표**\n예시) 단백질 50g 이상 · 간식 1회 이하 /\n2000kcal 이상 · 단백질 100g 이상\n\n내 목표는 조장이 **관리자 페이지**에서\n설정해요. 목표 탭은 **읽기 전용**이에요.",
        highlight: "벌금 규칙 · 🧮 계산기 바로가기 · 멤버별 개인 목표",
        image: {
          src: "/guide/04-goals.png",
          alt: "식단하조 목표 화면 — 벌금 규칙 + 계산기 바로가기 + 멤버 목표",
          caption: "목표 탭: 벌금 규칙 + 계산기 바로가기 + 내 개인 목표",
        },
      },
      {
        id: "use-l6",
        title: "🧮 보너스 — 계산기 2개",
        content:
          "**목표 탭 상단의 카드** 또는\n주소창에 **/calculator**, **/bmr** 직접 입력으로\n두 가지 계산기를 쓸 수 있어요.\n\n**칼로리 계산기** (`/calculator`)\n4단계 스텝 UI\n성별 → 나이·키·몸무게 → 활동량 → 목표\n결과: 하루 권장 kcal + 탄·단·지 그램 + 비율\n\n**BMR 계산기** (`/bmr`)\n한 화면 입력 (해리스-베네딕트 공식)\n성별·나이·키·몸무게\n결과: BMR + 활동량별 TDEE 4개\n+ 다이어트 목표별 권장 칼로리 4개\n\n계산기 페이지 상단의\n**\"칼로리 추천 / 기초대사량\"** 탭으로\n두 계산기 사이를 자유롭게 이동",
        highlight: "목표 탭 카드 → /calculator(4단계) · /bmr(공식 표시)",
        image: {
          src: "/guide/05-calculator.png",
          alt: "칼로리 추천 계산기 — 4단계 스텝 UI",
          caption: "계산기: 하루 권장 칼로리 & BMR 직접 계산",
        },
      },
      {
        id: "use-l7",
        title: "💬 카톡 자동 연동의 비밀",
        content:
          "카톡방에 **음식만 텍스트로 쓰면**\n자동으로 DB에 들어가요.\n사이트 직접 입력은 **불필요**.\n\n**⏰ 시간 기반 자동 분류**\n· 02~10시 → **아침**\n· 10~15시 → **점심**\n· 15~21시 → **저녁**\n· 21~02시 → **간식**\n(단어 \"아침/점심/저녁/간식\" 있으면 그게 우선)\n\n**⚠️ AI 추정값 경고**\n정보가 이상하면 경고 메시지가 와요.\n그럴 땐 카톡에 **\"수정\" 명령**으로 고치세요.\n\n**✏️ 수정 명령어 (숨은 기능)**\n`수정 돈까스 350kcal 단백질25g`\n이렇게 보내면 DB가 바로 업데이트돼요.",
        highlight: "시간별 자동 분류 + '수정' 명령어로 DB 직접 수정",
      },
      {
        id: "use-l8",
        title: "하루 사용 흐름 정리",
        content:
          "실제로 하루는 이렇게 흘러갑니다.\n\n**🌅 아침/점심/저녁**\n카톡방에 먹은 음식을 **텍스트로 기록**\n→ 시간 기반 자동 분류 + DB 저장\n\n**🔍 궁금할 때**\n**음식 탭**에서 영양소 조회\n**계산기**로 내 목표 칼로리 계산\n\n**🌙 자기 전**\n**홈**에서 오늘 기록 확인\n카드 탭해서 상세 영양소까지 점검\n\n**📅 일요일 밤**\n**리포트 주간**에서\n이번 주 달성 상태 & 벌금 확인\n\n**📸 자랑하고 싶을 때**\n홈/일간 리포트 → 이미지 저장/복사 → 단톡방",
        highlight: "카톡 기록 → 자동 DB / 홈·리포트에서 이미지 공유",
      },
    ],
    questions: [
      {
        id: "use-q1",
        type: "multiple-choice",
        question: "식단하조 사이트 하단의 4개 탭이 아닌 것은?",
        options: [
          { id: "a", text: "홈" },
          { id: "b", text: "리포트" },
          { id: "c", text: "채팅" },
          { id: "d", text: "목표" },
        ],
        correctAnswer: "c",
        explanation: "탭은 홈, 리포트, 음식, 목표 4개예요. 채팅은 없습니다.",
      },
      {
        id: "use-q2",
        type: "multiple-choice",
        question: "오늘 멤버들이 얼마나 먹었는지 확인하려면 어느 탭으로?",
        options: [
          { id: "a", text: "홈" },
          { id: "b", text: "리포트" },
          { id: "c", text: "음식" },
          { id: "d", text: "목표" },
        ],
        correctAnswer: "a",
        explanation: "홈 탭에서 오늘 날짜 기준 멤버별 칼로리와 탄단지를 볼 수 있어요.",
      },
      {
        id: "use-q3",
        type: "multiple-choice",
        question: "주간 리포트의 'O' 표시가 의미하는 것은?",
        options: [
          { id: "a", text: "특별일" },
          { id: "b", text: "미기록" },
          { id: "c", text: "목표 달성" },
          { id: "d", text: "미달성" },
        ],
        correctAnswer: "c",
        explanation: "O는 목표 달성, !는 미달성, X는 미기록, P는 특별일(pass)이에요.",
      },
      {
        id: "use-q3b",
        type: "multiple-choice",
        question: "주간 리포트의 'P' 표시가 의미하는 것은?",
        options: [
          { id: "a", text: "벌금(Penalty)" },
          { id: "b", text: "특별일 — 자동 통과(pass)" },
          { id: "c", text: "단백질(Protein) 달성" },
          { id: "d", text: "모임 대기(Pending)" },
        ],
        correctAnswer: "b",
        explanation: "P는 특별일(pass) — 조장이 지정한 자동 통과일이라 벌금이 면제돼요.",
      },
      {
        id: "use-q4",
        type: "multiple-choice",
        question: "음식 탭에서 할 수 있는 것은?",
        options: [
          { id: "a", text: "다른 멤버에게 DM 보내기" },
          { id: "b", text: "음식 이름으로 칼로리·탄단지 조회" },
          { id: "c", text: "주간 벌금 정산" },
          { id: "d", text: "오프라인 모임 일정 확인" },
        ],
        correctAnswer: "b",
        explanation: "음식 탭은 영양소 DB — 이름 검색으로 칼로리와 탄단지를 조회합니다.",
      },
      {
        id: "use-q5",
        type: "ox",
        question: "목표 탭에서는 멤버별 개인 목표와 벌금 규칙을 함께 볼 수 있다.",
        correctAnswer: true,
        explanation: "목표 탭 상단에 벌금 규칙, 아래에 멤버별 개인 목표 목록이 있어요.",
      },
      {
        id: "use-q6",
        type: "ox",
        question: "식단 기록을 사이트에 직접 입력해야 한다.",
        correctAnswer: false,
        explanation: "카톡방에 기록하면 사이트에 자동 반영됩니다. 사이트 직접 입력은 필요 없어요.",
      },
      {
        id: "use-q7",
        type: "multiple-choice",
        question: "주간 리포트에서 벌금 2,000원이 부과되는 '미달성' 조건은?",
        options: [
          { id: "a", text: "하루라도 미달성이면 즉시" },
          { id: "b", text: "주 2회 이상 미달성" },
          { id: "c", text: "주 3회 이상 미달성 (2회까지 면제)" },
          { id: "d", text: "매주 무조건" },
        ],
        correctAnswer: "c",
        explanation: "미달성은 주 3회부터 2,000원/회, 2회까지는 면제입니다.",
      },
      {
        id: "use-q8",
        type: "multiple-choice",
        question: "홈 탭에서 다른 날짜의 기록을 보려면?",
        options: [
          { id: "a", text: "리포트 탭으로 이동해서 확인" },
          { id: "b", text: "상단 날짜 옆 좌/우 화살표로 이동" },
          { id: "c", text: "달력 아이콘을 길게 눌러 선택" },
          { id: "d", text: "불가능 — 오늘만 볼 수 있음" },
        ],
        correctAnswer: "b",
        explanation: "홈 상단 '< 4월 14일 (화) >' 좌우 화살표로 다른 날짜를 볼 수 있어요.",
      },
      {
        id: "use-q9",
        type: "multiple-choice",
        question: "홈에서 멤버 카드를 탭하면 무엇이 보이나요?",
        options: [
          { id: "a", text: "멤버의 전화번호" },
          { id: "b", text: "식사별(아침/점심/저녁/간식) 목록 + 상세 영양소 보기 버튼" },
          { id: "c", text: "멤버 삭제 버튼" },
          { id: "d", text: "아무 변화 없음" },
        ],
        correctAnswer: "b",
        explanation:
          "카드 탭 시 식사별 목록이 펼쳐지고, 맨 아래 '상세 영양소 보기'로 멤버 상세 페이지(/detail)로 이동합니다.",
      },
      {
        id: "use-q10",
        type: "ox",
        question:
          "멤버 상세 페이지에서는 4대 영양소(탄단지+나트륨) 외에 비타민·미네랄 같은 추가 영양소 9개도 볼 수 있다.",
        correctAnswer: true,
        explanation:
          "상세 페이지는 당류/식이섬유/칼슘/철분/비타민D,C/마그네슘/오메가3/아연 등 9개 추가 영양소까지 보여줍니다.",
      },
      {
        id: "use-q11",
        type: "multiple-choice",
        question: "보라색 'IF' 뱃지가 붙은 멤버는?",
        options: [
          { id: "a", text: "벌금이 가장 많은 멤버" },
          { id: "b", text: "조장" },
          { id: "c", text: "간헐적 단식(IF) 멤버 — 미기록일 벌금 면제" },
          { id: "d", text: "신규 가입 멤버" },
        ],
        correctAnswer: "c",
        explanation:
          "IF = Intermittent Fasting. 간헐적 단식 멤버는 미기록일이 단식으로 인정되어 벌금이 면제됩니다.",
      },
      {
        id: "use-q12",
        type: "multiple-choice",
        question: "칼로리/BMR 계산기에 가장 빠르게 진입하는 방법은?",
        options: [
          { id: "a", text: "관리자 페이지 → 계산기 메뉴" },
          { id: "b", text: "목표 탭 상단의 '칼로리 계산기 / BMR 계산기' 바로가기 카드" },
          { id: "c", text: "홈 화면 우상단 톱니바퀴" },
          { id: "d", text: "음식 탭 검색창에 '계산기' 입력" },
        ],
        correctAnswer: "b",
        explanation:
          "목표 탭 상단의 2개 카드(칼로리 계산기 / BMR 계산기)로 바로 이동할 수 있어요. 직접 URL(/calculator, /bmr)도 가능합니다.",
      },
      {
        id: "use-q13",
        type: "ox",
        question:
          "카톡방에 음식 영양정보가 이상하게 들어왔을 때, 카톡으로 '수정 음식명 XXkcal 단백질XXg' 형식으로 보내면 DB가 바로 수정된다.",
        correctAnswer: true,
        explanation:
          "숨은 기능이에요. 예: '수정 돈까스 350kcal 단백질25g 탄수화물30g 지방15g' 입력 시 DB가 직접 업데이트되고, 이후 7일간 크론잡으로부터 보호됩니다.",
      },
      {
        id: "use-q14",
        type: "multiple-choice",
        question: "카톡에서 시간대별로 식사가 자동 분류되는 기준은?",
        options: [
          { id: "a", text: "매번 수동으로 선택" },
          { id: "b", text: "02~10=아침 / 10~15=점심 / 15~21=저녁 / 21~02=간식" },
          { id: "c", text: "아침/점심/저녁이 한 번씩 순서대로" },
          { id: "d", text: "조장이 수동 분류" },
        ],
        correctAnswer: "b",
        explanation:
          "메시지 보낸 시간대로 자동 분류되며, '아침/점심/저녁/간식' 단어가 있으면 그 단어가 우선 적용됩니다.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 5, title: "사이트 입문", description: "한번 더 둘러봐요!" },
      { minScore: 6, maxScore: 11, title: "사이트 활용러", description: "거의 다 파악했어요!" },
      { minScore: 12, maxScore: 15, title: "사이트 마스터", description: "숨은 기능까지 완벽!" },
    ],
  },
  {
    slug: "AI써보조",
    title: "AI 써보조 조모임 상세 설명",
    description:
      "직접 써보고, 진짜 내 것으로 만들자.\n설명을 읽고 퀴즈로 확인해보세요.",
    logo: "",
    theme: "AI써보조",
    lessons: [
      {
        id: "ai-l1",
        title: "AI 써보조란?",
        content:
          "AI가 좋다고는 들었는데\n뭘 어떻게 쓰는 건지 모르겠다면,\n여기서 같이 써보면 됩니다.\n\n자신이 써보고 활용한\n**AI 활용법을 공유**하고,\n**직접 따라 해보는** 모임이에요.\n\n**써본 사람이 압도적으로 빨라집니다.**\n지금 시작해도 충분해요.",
        highlight: "AI 활용 + 실습 중심 + 꿀팁 공유",
      },
      {
        id: "ai-l2",
        title: "이런 도구를 써봅니다",
        content:
          "**Gemini** (Google)\n이미지/영상 만들기\n\n**Suno**\nAI 작곡 + 보컬, 음악 생성\n\n**Claude** (Anthropic)\n문서, 일정, PPT, 코딩까지\n\n**일레븐랩스 · 타입캐스트**\n텍스트 → 사람 같은 목소리\n\n+ **프롬프트**, **자동화**, **도구 조합** 꿀팁도\n함께 배우고 공유합니다.",
        highlight: "Gemini / Suno / Claude / 음성도구 + 꿀팁",
      },
      {
        id: "ai-l3",
        title: "활동 흐름 & 오프라인",
        content:
          "**4월 11일** 오프라인 1회로\nAI 써보조는 마무리됩니다.\n\n오프라인에서는\n주요 도구를 함께 세팅하고,\n간단한 결과물을 하나씩 만들어봅니다.\n\n**노트북 지참 필수**\n\n이후 관심 있는 분은\n**AI 배워보조**(계획 중)로 이어갈 수 있어요.\n첫 주제: Claude Code — 코딩 없이 AI에게 시키는 법",
        highlight: "4월 11일 오프라인 (노트북 필수)",
      },
    ],
    questions: [
      {
        id: "ai-q1",
        type: "multiple-choice",
        question: "AI 써보조의 핵심 키워드 3가지가 아닌 것은?",
        options: [
          { id: "a", text: "AI 활용" },
          { id: "b", text: "실습 중심" },
          { id: "c", text: "이론 강의" },
          { id: "d", text: "꿀팁 공유" },
        ],
        correctAnswer: "c",
        explanation: "AI 활용, 실습 중심, 꿀팁 공유가 핵심이에요.",
      },
      {
        id: "ai-q2",
        type: "multiple-choice",
        question: "이미지/영상을 만들 수 있는 AI 도구는?",
        options: [
          { id: "a", text: "Suno" },
          { id: "b", text: "Claude" },
          { id: "c", text: "Gemini" },
          { id: "d", text: "타입캐스트" },
        ],
        correctAnswer: "c",
        explanation: "Gemini는 Google의 이미지·영상 생성 AI입니다.",
      },
      {
        id: "ai-q3",
        type: "multiple-choice",
        question: "Claude를 만든 회사는?",
        options: [
          { id: "a", text: "Google" },
          { id: "b", text: "OpenAI" },
          { id: "c", text: "Anthropic" },
          { id: "d", text: "Meta" },
        ],
        correctAnswer: "c",
        explanation: "Claude는 Anthropic이 만든 AI입니다.",
      },
      {
        id: "ai-q4",
        type: "ox",
        question: "텍스트를 사람 같은 목소리로 읽어주는 도구는 일레븐랩스와 타입캐스트다.",
        correctAnswer: true,
        explanation: "일레븐랩스는 영어, 타입캐스트는 한국어에 강합니다.",
      },
      {
        id: "ai-q5",
        type: "ox",
        question: "AI 써보조 오프라인 모임에는 노트북을 꼭 가져가야 한다.",
        correctAnswer: true,
        explanation: "도구를 함께 세팅하고 실습하므로 노트북 지참 필수입니다.",
      },
      {
        id: "ai-q6",
        type: "multiple-choice",
        question: "AI 써보조 이후 더 깊이 배우고 싶으면?",
        options: [
          { id: "a", text: "AI 써보조 2기" },
          { id: "b", text: "AI 배워보조" },
          { id: "c", text: "AI 마스터조" },
          { id: "d", text: "AI 만들조" },
        ],
        correctAnswer: "b",
        explanation: "관심 있는 분은 AI 배워보조로 이어갑니다.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "AI 입문자", description: "함께 배워봐요!" },
      { minScore: 3, maxScore: 4, title: "AI 활용러", description: "더 깊이 파보아요!" },
      { minScore: 5, maxScore: 6, title: "AI 전문가", description: "AI 써보조의 핵심 멤버감!" },
    ],
  },
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === decodeURIComponent(slug));
}
