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
          "우리 조의 **식단 기록을 한눈에**\n확인할 수 있는 공식 사이트예요.\n\n주소: **sikdan-hajo.vercel.app**\n\n하단에 **4개의 탭**이 있습니다.\n\n**홈** — 오늘 멤버들이 뭘 먹었는지\n**리포트** — 주간·누적 달성 현황 & 벌금\n**음식** — 영양소 정보 조회\n**목표** — 내 목표 & 벌금 규칙\n\n지금부터 하나씩 살펴볼게요.",
        highlight: "홈 / 리포트 / 음식 / 목표 — 4개 탭",
      },
      {
        id: "use-l2",
        title: "① 홈 — 오늘 식단 현황",
        content:
          "홈 탭은 **오늘 날짜 기준**으로\n멤버들의 식단 기록을 보여줍니다.\n\n상단의 **< 4월 14일 (화) >** 화살표로\n다른 날짜도 확인할 수 있어요.\n\n각 카드에서 볼 수 있는 정보\n· **이름**과 달성 여부(미달성 표시)\n· **총 칼로리** (예: 245kcal)\n· **탄수화물 / 단백질 / 지방** 그램 수\n· 목표 대비 부족한 양 (예: 단백질 44g 부족)\n\n**이름 검색**으로 특정 멤버만\n빠르게 찾을 수도 있어요.",
        highlight: "날짜 이동 + 멤버별 칼로리 & 탄단지 확인",
        image: {
          src: "/guide/01-home.png",
          alt: "식단하조 홈 화면 — 날짜별 멤버 칼로리와 탄단지 현황",
          caption: "홈 탭: 오늘 누가 얼마나 먹었는지 한눈에",
        },
      },
      {
        id: "use-l3",
        title: "② 리포트 — 주간 달성 & 벌금",
        content:
          "리포트 탭에는 **3개의 서브탭**이 있어요.\n\n**일간 / 주간 / 누적벌금**\n\n주간 탭에서는 **이번 주 총 벌금**과\n멤버별 **요일별 달성 상태**를 확인합니다.\n\n각 칸의 표시 의미\n· **O** — 목표 달성\n· **!** — 미달성\n· **X** — 미기록\n· **P** — 특별일 (pass, 자동 통과)\n\n미기록이면 **2,000원/일**,\n미달성이 **주 3회 이상**이면 **2,000원/회**\n벌금이 부과됩니다.",
        highlight: "O / ! / X / P 표시 + 주간 벌금 자동 집계",
        image: {
          src: "/guide/02-report.png",
          alt: "식단하조 리포트 화면 — 주간 달성 현황과 벌금 표시",
          caption: "리포트 탭: 요일별 O/△/X/★로 한눈에 달성 여부 확인",
        },
      },
      {
        id: "use-l4",
        title: "③ 음식 — 영양소 DB 조회",
        content:
          "음식 탭은 **영양소 정보 DB**입니다.\n현재 **664개** 음식이 저장되어 있어요.\n\n**검색** — 음식 이름으로 찾기\n예: 삼겹살, 신라면\n\n**카테고리 필터**\n전체 / 밥·곡류 / 고기 /\n생선·해산물 / 계란·유제품\n\n각 항목에서 확인 가능\n· **양 단위** (예: 1봉, 90g)\n· **탄수화물 / 단백질 / 지방** (g)\n· **총 칼로리**\n\n자주 먹는 음식은 **별표**로\n즐겨찾기 해두면 편리해요.",
        highlight: "음식 이름 검색 → 칼로리 & 탄단지 즉시 확인",
        image: {
          src: "/guide/03-foods.png",
          alt: "식단하조 음식 영양소 DB 화면 — 검색과 카테고리 필터",
          caption: "음식 탭: 내가 먹은 음식의 영양소를 바로 조회",
        },
      },
      {
        id: "use-l5",
        title: "④ 목표 — 내 목표 & 벌금 규칙",
        content:
          "목표 탭 상단엔 **벌금 규칙**이 있어요.\n\n· 하루 기록 안 하면 **2,000원 (즉시)**\n· 목표 미달성 **주 3회부터 2,000원/회**\n  (2회까지 면제)\n· **간헐적 단식** 미기록일 벌금 면제\n· 매주 **일요일** 정산\n\n아래는 **멤버별 개인 목표** 목록이에요.\n예시)\n· 단백질 50g 이상 · 간식 1회 이하\n· 2000kcal 이상 · 단백질 100g 이상\n· 1600kcal 이하 · 단백질 60g 이상\n\n내 이름을 찾아 **내 목표**를 확인하세요.",
        highlight: "벌금 규칙 + 멤버별 개인 목표 확인",
        image: {
          src: "/guide/04-goals.png",
          alt: "식단하조 목표 화면 — 벌금 규칙과 멤버별 개인 목표",
          caption: "목표 탭: 벌금 규칙 + 내 개인 목표 한눈에",
        },
      },
      {
        id: "use-l6",
        title: "하루 사용 흐름 정리",
        content:
          "실제로 하루는 이렇게 흘러갑니다.\n\n**아침/점심/저녁**\n카톡방에 먹은 음식을 **텍스트로 기록**\n(사진은 선택)\n\n**궁금할 때**\n음식 탭에서 영양소 조회\n\n**자기 전**\n홈에서 **내 오늘 기록** 확인\n필요하면 추가로 간식 기록\n\n**일요일 밤**\n리포트 주간 탭에서\n이번 주 달성 상태 & 벌금 확인\n\n카톡 기록 → 사이트 자동 반영.\n사이트 입력이 따로 필요하진 않아요.",
        highlight: "카톡 기록 → 사이트 자동 반영 (사이트 입력 불필요)",
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
    ],
    results: [
      { minScore: 0, maxScore: 3, title: "사이트 입문", description: "한번 더 둘러봐요!" },
      { minScore: 4, maxScore: 6, title: "사이트 활용러", description: "거의 다 파악했어요!" },
      { minScore: 7, maxScore: 9, title: "사이트 마스터", description: "완벽하게 쓸 수 있어요!" },
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
