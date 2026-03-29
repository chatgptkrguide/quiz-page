import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    slug: "식단하조",
    title: "식단하조 이해도 테스트",
    description:
      "먹는 걸 기록하면, 몸이 달라진다. 식단하조 모임을 잘 이해했는지 확인해보세요.",
    emoji: "🥗",
    color: "#4ade80",
    lessons: [
      {
        id: "diet-l1",
        title: "식단하조란?",
        content:
          "밥 먹을 때마다 사진 찍고, 카톡에 올리고, 서로 구경하는 모임이에요. 식단 기록, 영양분 인식, 함께 공유 — 이 세 가지가 핵심입니다.",
        highlight: "식단 기록 + 영양분 인식 + 함께 공유",
      },
      {
        id: "diet-l2",
        title: "활동 내용",
        content:
          "매번 먹는 음식을 사진으로 찍어 카톡에 올리고, 텍스트로 정리합니다. 사진은 음식 사진 찍어 카톡방에 바로 업로드하고, 텍스트로 뭘 얼마나 먹었는지 간단히 적어요. 예를 들어 '점심 — 햇반 1개, 계란후라이 2개, 닭가슴살 100g' 이런 식으로요. 거창하게 적을 필요 없어요. 뭘 먹었는지만 남기면 됩니다. 칼로리 확인은 카톡 내용을 복사해서 AI에게 정리 요청하면 끝!",
        highlight:
          "사진 찍기 → 카톡 업로드 → 텍스트 정리 → AI로 칼로리 확인",
      },
      {
        id: "diet-l3",
        title: "활동 계획 — 3단계",
        content:
          "한 번에 다 바꾸는 게 아니라, 단계별로 진행합니다. 1단계(첫 한 주)는 지금 내가 뭘 먹는지 관찰 — 기록 자체에 집중해요. 2단계(2주차)는 평소 칼로리 확인 후 나만의 목표를 설정합니다. 3단계(3주차~)부터 매일 기록하고, 서로 공유하며 꾸준히 실천합니다.",
        highlight:
          "1단계: 관찰 → 2단계: 목표 설정 → 3단계: 매일 기록 & 실천",
      },
      {
        id: "diet-l4",
        title: "규칙 & 벌금",
        content:
          "벌금은 2,000원이에요. 음식 미기록 시, 또는 매주 7일 중 3회 이상 목표 달성 실패 시 부과됩니다. 벌금이 무서워서가 아니라, 습관이 생겨서 안 걷히게 되는 게 목표예요. 모인 벌금은 활동 우수자 상품 + 마무리 모임 음식 재료비로 사용합니다.",
        highlight:
          "벌금 2,000원 — 미기록 시 / 주 3회 이상 목표 실패 시",
      },
      {
        id: "diet-l5",
        title: "목표 1 — 인식",
        content:
          "자신이 먹는 음식의 영양분을 인식하고, 식단의 중요성을 느끼는 것이 첫 번째 목표입니다. 적게 먹거나 맛없는 걸 참는 게 아니에요. 풀만 먹는 것도 아니에요. 그냥 뭘 먹는지 알고 먹는 것, 그게 전부입니다. 우리가 할 것은 음식 기록하기, 서로 공유하기, 영양분 살펴보기예요.",
        highlight: "뭘 먹는지 알고 먹는 것 = 인식의 시작",
      },
      {
        id: "diet-l6",
        title: "목표 2 — 변화",
        content:
          "인식한 뒤에는 나만의 칼로리 목표를 세워 실천하기. 첫 주 기록을 기반으로 내가 평소 얼마나 먹는지 확인하고, 거기서부터 현실적인 목표를 잡습니다. 예시 목표: 하루 단백질 120g 이상 섭취, 하루 총 칼로리 2,000kcal 이하 유지, 야식 주 2회 이하로 줄이기. 남의 기준이 아니라 내 식습관 데이터에서 출발하는 목표입니다.",
        highlight:
          "내 데이터 기반 현실적 목표 설정",
      },
      {
        id: "diet-l7",
        title: "활동 기간 & 오프라인 모임",
        content:
          "3월 30일부터 6월 28일까지, 딱 3개월입니다. 매일 카톡방에 기록을 올리고, 오프라인 모임은 총 2회 진행합니다. 킥오프(4월 5일): 첫 한 주 기록을 돌아보고, 칼로리와 영양 패턴을 확인하고, 3개월간의 개인 목표를 선언합니다. 목표 선언이 끝나면 다 같이 맛있는 거 먹으러 갑니다. 마무리(6월 26일): 3개월간의 변화를 공유하고, 우수자 선정 후, 맛있었던 음식이나 제품을 가져오거나 직접 요리해서 함께 먹는 시간을 가집니다.",
        highlight:
          "3월 30일~6월 28일 (3개월) / 오프라인 2회: 킥오프(4/5) + 마무리(6/26)",
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
        explanation:
          "식단하조의 핵심은 식단 기록, 영양분 인식, 함께 공유 세 가지예요.",
      },
      {
        id: "diet-q2",
        type: "multiple-choice",
        question: "매일 식단을 기록하는 방법은?",
        options: [
          { id: "a", text: "전용 앱에 입력" },
          { id: "b", text: "사진 찍어 카톡에 올리고 텍스트로 정리" },
          { id: "c", text: "엑셀에 정리해서 이메일 전송" },
          { id: "d", text: "일기장에 손으로 적기" },
        ],
        correctAnswer: "b",
        explanation:
          "음식 사진을 찍어 카톡방에 올리고, 뭘 얼마나 먹었는지 텍스트로 간단히 적으면 됩니다.",
      },
      {
        id: "diet-q3",
        type: "ox",
        question:
          "칼로리 확인은 카톡 내용을 복사해서 AI에게 정리 요청하면 된다.",
        correctAnswer: true,
        explanation:
          "기록한 카톡 내용을 복사해서 AI에게 정리 요청하면 칼로리를 쉽게 확인할 수 있어요.",
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
        explanation:
          "첫 한 주는 뭘 먹는지 관찰하고, 기록 자체에 집중하는 단계예요.",
      },
      {
        id: "diet-q5",
        type: "short-answer",
        question: "음식 미기록 시 벌금은 얼마인가요? (숫자만 입력)",
        correctAnswers: ["2000", "2,000", "2000원"],
        explanation: "벌금은 2,000원이에요. 미기록 시 또는 주 3회 이상 목표 실패 시 부과됩니다.",
      },
      {
        id: "diet-q6",
        type: "ox",
        question:
          "매주 7일 중 3회 이상 목표 달성에 실패하면 벌금이 부과된다.",
        correctAnswer: true,
        explanation:
          "미기록뿐만 아니라, 매주 7일 중 3회 이상 목표 달성 실패 시에도 벌금 2,000원이 부과됩니다.",
      },
      {
        id: "diet-q7",
        type: "multiple-choice",
        question: "2단계에서 목표를 세우는 기준은?",
        options: [
          { id: "a", text: "인터넷에서 찾은 평균 칼로리" },
          { id: "b", text: "다른 조원의 식단" },
          { id: "c", text: "첫 주 기록 기반, 내 식습관 데이터" },
          { id: "d", text: "의사 상담 결과" },
        ],
        correctAnswer: "c",
        explanation:
          "남의 기준이 아니라, 내 식습관 데이터에서 출발하는 현실적인 목표를 세웁니다.",
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
        question:
          "킥오프 오프라인 모임에서 3개월간의 개인 목표를 선언한다.",
        correctAnswer: true,
        explanation:
          "4월 5일 킥오프에서 첫 주 기록을 돌아보고, 개인 목표를 정해서 선언합니다.",
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
        explanation:
          "모인 벌금은 활동 우수자 상품과 마무리 모임 음식 재료비로 사용합니다.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 3, title: "식단 초보", description: "함께 배워가요", emoji: "🌱" },
      { minScore: 4, maxScore: 7, title: "식단 중수", description: "조금만 더!", emoji: "🌿" },
      { minScore: 8, maxScore: 10, title: "식단 마스터", description: "완벽하게 이해하셨네요!", emoji: "🏆" },
    ],
  },
  {
    slug: "AI써보조",
    title: "AI 써보조 이해도 테스트",
    description:
      "직접 써보고, 진짜 내 것으로 만들자. AI 써보조 모임 내용을 잘 이해했는지 확인해보세요.",
    emoji: "🤖",
    color: "#818cf8",
    lessons: [
      {
        id: "ai-l1",
        title: "AI 써보조란?",
        content:
          "AI가 좋다고는 들었는데 뭘 어떻게 쓰는 건지 모르겠다면, 여기서 같이 써보면 됩니다. 자신이 써보고 활용한 AI 활용법을 공유하고, 직접 따라 해보는 모임이에요. AI 활용, 실습 중심, 꿀팁 공유 — 이 세 가지가 핵심입니다.",
        highlight: "AI 활용 + 실습 중심 + 꿀팁 공유",
      },
      {
        id: "ai-l2",
        title: "왜 지금 AI를 써봐야 할까",
        content:
          "대학생 과제, 직장인 보고서 — 이미 AI로 작성하고 있어요. 유튜브 썸네일, 릴스 영상도 AI가 제작합니다. 이력서, 포트폴리오에서도 AI 활용 능력이 스펙이 됩니다. 써본 사람이 압도적으로 빨라집니다. 지금 시작해도 충분해요.",
        highlight: "써본 사람이 압도적으로 빨라진다",
      },
      {
        id: "ai-l3",
        title: "활동 내용 — 이런 도구를 써봅니다",
        content:
          "Gemini(Google): 이미지/영상 만들기. 떠오른 아이디어를 텍스트 한 줄로 시각화합니다. Suno: AI가 작곡부터 보컬까지 해주는 음악 생성 도구예요. 친구 생일 축하곡을 직접 만들 수도 있어요. Claude(Anthropic): 긴 문서 처리, 일정 정리, PPT 제작, 심지어 코딩까지. 비서가 생긴 느낌이에요. 일레븐랩스·타입캐스트: 텍스트만 입력하면 사람 같은 목소리로 읽어줍니다. 릴스/숏폼 내레이션 제작에 활용해요.",
        highlight:
          "Gemini(이미지) / Suno(음악) / Claude(문서·개발) / 일레븐랩스·타입캐스트(음성)",
      },
      {
        id: "ai-l4",
        title: "AI 기본설정 & 꿀팁",
        content:
          "도구를 아는 것과 잘 쓰는 것은 완전히 다릅니다. 프롬프트 잘 쓰는 법 — 질문에 따라 결과가 달라요. 자동화 세팅 — 반복 작업을 AI에게 맡기기. 도구 조합 — 여러 AI를 연결해서 쓰는 법. 여기에 조원들이 찾은 꿀팁도 함께 공유합니다.",
        highlight:
          "프롬프트 잘 쓰는 법 + 자동화 세팅 + 도구 조합 + 조원 꿀팁",
      },
      {
        id: "ai-l5",
        title: "목표",
        content:
          "AI 시대에 빠르게 적응하고, 자신만의 강력한 무기를 탑재하기. 직접 써보기 — 들어만 보지 말고. 서로 공유하기 — 써본 경험을. 내 무기로 만들기 — 나한테 맞는 AI를.",
        highlight: "직접 써보기 → 서로 공유하기 → 내 무기로 만들기",
      },
      {
        id: "ai-l6",
        title: "활동 흐름 & 오프라인",
        content:
          "4월 11일 오프라인 1회로 AI 써보조는 마무리됩니다. 오프라인에서는 주요 도구를 함께 세팅하고, 간단한 결과물을 하나씩 만들어봅니다. 노트북 지참 필수예요. 이후 관심 있는 분은 AI 배워보조(계획 중)로 이어갈 수 있어요.",
        highlight:
          "4월 11일 오프라인 (노트북 필수) / 이후 → AI 배워보조",
      },
      {
        id: "ai-l7",
        title: "다음 단계 — AI 배워보조",
        content:
          "AI 써보조 이후, 더 깊이 배우고 싶은 분을 위한 과정입니다. 첫 번째 주제는 Claude Code — 코딩을 몰라도 AI에게 시키는 법을 배웁니다. 터미널에서 한국어로 지시하면 AI가 코드를 짜줍니다. '포트폴리오 웹사이트 만들어줘' → 웹사이트 완성. 개발자의 도구가 아닙니다. 누구나 쓸 수 있는 AI 비서입니다. 코딩 경험 없어도 OK. 시키는 법만 배우면 됩니다.",
        highlight:
          "Claude Code = 한국어로 시키면 AI가 코딩 / 코딩 경험 불필요",
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
        explanation:
          "AI 써보조는 이론 강의가 아니라 AI 활용, 실습 중심, 꿀팁 공유가 핵심이에요.",
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
        explanation:
          "Gemini는 Google이 만든 이미지·영상 생성 AI로, 텍스트 한 줄로 아이디어를 시각화할 수 있어요.",
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
        explanation:
          "Suno는 AI가 작곡부터 보컬까지 해주는 음악 생성 도구예요.",
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
        question:
          "텍스트를 사람 같은 목소리로 읽어주는 도구는 일레븐랩스와 타입캐스트다.",
        correctAnswer: true,
        explanation:
          "일레븐랩스는 영어에 강하고, 타입캐스트는 한국어에 강합니다.",
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
        explanation:
          "프롬프트, 자동화, 도구 조합이 핵심이지, 프로그래밍 언어를 배울 필요는 없어요.",
      },
      {
        id: "ai-q7",
        type: "ox",
        question:
          "AI 써보조 오프라인 모임에는 노트북을 꼭 가져가야 한다.",
        correctAnswer: true,
        explanation:
          "4월 11일 오프라인에서 주요 도구를 함께 세팅하고 실습하므로, 노트북 지참이 필수예요.",
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
        explanation:
          "AI 써보조 이후 관심 있는 분은 AI 배워보조(계획 중)로 이어갑니다.",
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
        explanation:
          "첫 번째 주제는 Claude Code — 코딩을 몰라도 AI에게 시키는 법을 배웁니다.",
      },
      {
        id: "ai-q10",
        type: "ox",
        question:
          "Claude Code는 개발자만 쓸 수 있는 전문 도구다.",
        correctAnswer: false,
        explanation:
          "개발자의 도구가 아닙니다. 한국어로 지시하면 AI가 코딩해주므로 누구나 쓸 수 있어요.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 3, title: "AI 입문자", description: "함께 배워봐요!", emoji: "🔰" },
      { minScore: 4, maxScore: 7, title: "AI 활용러", description: "더 깊이 파보아요!", emoji: "💡" },
      { minScore: 8, maxScore: 10, title: "AI 전문가", description: "AI 써보조의 핵심 멤버감!", emoji: "🧠" },
    ],
  },
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === decodeURIComponent(slug));
}
