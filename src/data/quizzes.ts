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
        title: "활동 내용",
        content:
          "매번 먹는 음식을\n카톡에 **텍스트로 기록**합니다.\n\n뭘 얼마나 먹었는지 간단히 적으면 돼요.\n\n예시)\n점심 — 햇반 1개, 계란후라이 2개,\n닭가슴살 100g\n\n**사진은 필수가 아닙니다.**\n찍어서 올려도 좋지만,\n텍스트만 올려도 괜찮아요.\n\n칼로리 확인은 **조장이 정리**해주니\n조원은 기록만 하면 됩니다.",
        highlight: "텍스트 기록 (사진 선택) / 칼로리는 조장이 정리",
      },
      {
        id: "diet-l3",
        title: "활동 계획 — 3단계",
        content:
          "한 번에 다 바꾸는 게 아니라,\n**단계별**로 진행합니다.\n\n**01. 첫 한 주** — 관찰\n지금 뭘 먹는지, 기록 자체에 집중\n\n**02. 2주차** — 목표 설정\n칼로리 확인 후 나만의 목표\n\n**03. 3주차~** — 실천\n매일 기록, 서로 공유하며 꾸준히",
        highlight: "1단계: 관찰 → 2단계: 목표 설정 → 3단계: 매일 기록",
      },
      {
        id: "diet-l4",
        title: "규칙 & 벌금",
        content:
          "벌금 **2,000원**\n\n· **하루종일** 기록 안 하면 부과\n· 매주 **일요일 기준**, 주 3회 이상 목표 실패 시 부과\n\n1~2끼만 기록해도 **기록 인정**\n(단, 목표 달성에는 영향 있음)\n\n모인 벌금 → **우수자 상품 + 마무리 모임 재료비**",
        highlight: "벌금 2,000원 / 일요일 기준 확인",
      },
      {
        id: "diet-l5",
        title: "목표 — 인식에서 변화로",
        content:
          "그냥 **뭘 먹는지 알고 먹는 것**,\n그게 시작입니다.\n\n인식이 되면 **나만의 목표**를 세워요.\n첫 주 기록 기반으로 현실적으로.\n\n예시 목표:\n· 하루 단백질 **120g** 이상\n· 총 칼로리 **2,000kcal** 이하\n· 야식 주 **2회** 이하",
        highlight: "인식 → 나만의 현실적 목표 설정 → 실천",
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
        id: "diet-q5",
        type: "short-answer",
        question: "하루종일 미기록 시 벌금은 얼마인가요? (숫자만 입력)",
        correctAnswers: ["2000", "2,000", "2000원"],
        explanation: "벌금은 2,000원입니다.",
      },
      {
        id: "diet-q6",
        type: "ox",
        question: "3끼 중 1끼만 기록해도 그 날은 기록한 것으로 인정된다.",
        correctAnswer: true,
        explanation: "1~2끼만 기록해도 기록으로 인정됩니다. 다만 목표 달성에는 영향이 있을 수 있어요.",
      },
      {
        id: "diet-q7",
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
        id: "diet-q8",
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
        id: "diet-q9",
        type: "ox",
        question: "킥오프 오프라인 모임에서 3개월간의 개인 목표를 선언한다.",
        correctAnswer: true,
        explanation: "4월 5일 킥오프에서 개인 목표를 정해서 선언합니다.",
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
          "AI가 좋다고는 들었는데\n뭘 어떻게 쓰는 건지 모르겠다면,\n여기서 같이 써보면 됩니다.\n\n자신이 써보고 활용한\n**AI 활용법을 공유**하고,\n**직접 따라 해보는** 모임이에요.",
        highlight: "AI 활용 + 실습 중심 + 꿀팁 공유",
      },
      {
        id: "ai-l2",
        title: "왜 지금 AI를 써봐야 할까",
        content:
          "대학생 과제, 직장인 보고서\n— 이미 **AI로 작성**하고 있어요.\n\n유튜브 썸네일, 릴스 영상\n— **AI가 제작**합니다.\n\n이력서, 포트폴리오\n— **AI 활용 능력이 스펙**이 됩니다.\n\n**써본 사람이 압도적으로 빨라집니다.**\n지금 시작해도 충분해요.",
        highlight: "써본 사람이 압도적으로 빨라진다",
      },
      {
        id: "ai-l3",
        title: "이런 도구를 써봅니다",
        content:
          "**Gemini** (Google)\n이미지/영상 만들기\n\n**Suno**\nAI 작곡 + 보컬, 음악 생성\n\n**Claude** (Anthropic)\n문서, 일정, PPT, 코딩까지\n\n**일레븐랩스 · 타입캐스트**\n텍스트 → 사람 같은 목소리",
        highlight: "Gemini(이미지) / Suno(음악) / Claude(문서) / 음성도구",
      },
      {
        id: "ai-l4",
        title: "AI 기본설정 & 꿀팁",
        content:
          "도구를 아는 것과 **잘 쓰는 것**은\n완전히 다릅니다.\n\n· **프롬프트** 잘 쓰는 법\n  질문에 따라 결과가 달라요\n\n· **자동화 세팅**\n  반복 작업을 AI에게 맡기기\n\n· **도구 조합**\n  여러 AI를 연결해서 쓰는 법\n\n+ 조원들이 찾은 **꿀팁**도 함께 공유합니다.",
        highlight: "프롬프트 + 자동화 + 도구 조합 + 꿀팁 공유",
      },
      {
        id: "ai-l5",
        title: "목표",
        content:
          "AI 시대에 빠르게 적응하고,\n자신만의 **강력한 무기**를 탑재하기.\n\n· **직접 써보기**\n  들어만 보지 말고\n\n· **서로 공유하기**\n  써본 경험을\n\n· **내 무기로 만들기**\n  나한테 맞는 AI를",
        highlight: "직접 써보기 → 서로 공유 → 내 무기로",
      },
      {
        id: "ai-l6",
        title: "활동 흐름 & 오프라인",
        content:
          "**4월 11일** 오프라인 1회로\nAI 써보조는 마무리됩니다.\n\n오프라인에서는\n주요 도구를 함께 세팅하고,\n간단한 결과물을 하나씩 만들어봅니다.\n\n**노트북 지참 필수**\n\n이후 관심 있는 분은\n**AI 배워보조**(계획 중)로 이어갈 수 있어요.",
        highlight: "4월 11일 오프라인 (노트북 필수) → 이후 AI 배워보조",
      },
      {
        id: "ai-l7",
        title: "다음 단계 — AI 배워보조",
        content:
          "AI 써보조 이후,\n더 깊이 배우고 싶은 분을 위한 과정.\n\n첫 번째 주제: **Claude Code**\n코딩을 몰라도 AI에게 시키는 법\n\n한국어로 지시하면 AI가 코드를 짜줍니다.\n'웹사이트 만들어줘' → 완성\n\n**개발자 도구가 아니에요.**\n누구나 쓸 수 있는 AI 비서.",
        highlight: "Claude Code = 한국어로 시키면 AI가 코딩",
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
        question: "이미지/영상을 만들 수 있는 Google의 AI 도구는?",
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
        question: "AI가 작곡부터 보컬까지 해주는 음악 생성 도구는?",
        options: [
          { id: "a", text: "Gemini" },
          { id: "b", text: "Suno" },
          { id: "c", text: "일레븐랩스" },
          { id: "d", text: "Claude" },
        ],
        correctAnswer: "b",
        explanation: "Suno는 작곡부터 보컬까지 해주는 음악 생성 도구예요.",
      },
      {
        id: "ai-q4",
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
        id: "ai-q5",
        type: "ox",
        question: "텍스트를 사람 같은 목소리로 읽어주는 도구는 일레븐랩스와 타입캐스트다.",
        correctAnswer: true,
        explanation: "일레븐랩스는 영어, 타입캐스트는 한국어에 강합니다.",
      },
      {
        id: "ai-q6",
        type: "multiple-choice",
        question: "AI를 잘 쓰기 위해 배워야 할 것이 아닌 것은?",
        options: [
          { id: "a", text: "프롬프트 잘 쓰는 법" },
          { id: "b", text: "자동화 세팅" },
          { id: "c", text: "프로그래밍 언어" },
          { id: "d", text: "도구 조합" },
        ],
        correctAnswer: "c",
        explanation: "프롬프트, 자동화, 도구 조합이 핵심이에요.",
      },
      {
        id: "ai-q7",
        type: "ox",
        question: "AI 써보조 오프라인 모임에는 노트북을 꼭 가져가야 한다.",
        correctAnswer: true,
        explanation: "도구를 함께 세팅하고 실습하므로 노트북 지참 필수입니다.",
      },
      {
        id: "ai-q8",
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
      {
        id: "ai-q9",
        type: "multiple-choice",
        question: "AI 배워보조의 첫 번째 주제는?",
        options: [
          { id: "a", text: "Gemini 고급 활용" },
          { id: "b", text: "Python 프로그래밍" },
          { id: "c", text: "Claude Code" },
          { id: "d", text: "AI 윤리학" },
        ],
        correctAnswer: "c",
        explanation: "코딩을 몰라도 AI에게 시키는 법을 배웁니다.",
      },
      {
        id: "ai-q10",
        type: "ox",
        question: "Claude Code는 개발자만 쓸 수 있는 전문 도구다.",
        correctAnswer: false,
        explanation: "한국어로 지시하면 AI가 코딩해주므로 누구나 쓸 수 있어요.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 3, title: "AI 입문자", description: "함께 배워봐요!" },
      { minScore: 4, maxScore: 7, title: "AI 활용러", description: "더 깊이 파보아요!" },
      { minScore: 8, maxScore: 10, title: "AI 전문가", description: "AI 써보조의 핵심 멤버감!" },
    ],
  },
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === decodeURIComponent(slug));
}
