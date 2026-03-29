import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    slug: "식단하조",
    title: "식단하조 이해도 테스트",
    description: "식단하조 모임에 대해 얼마나 알고 있나요? 테스트로 확인해보세요!",
    emoji: "🥗",
    color: "#4ade80",
    lessons: [
      {
        id: "diet-lesson-1",
        title: "식단하조란?",
        content:
          "식단하조는 함께 식단을 관리하며 건강한 식습관을 만들어가는 모임이에요. 혼자 하면 작심삼일이 되기 쉽지만, 서로 응원하고 공유하면 훨씬 오래 유지할 수 있죠.",
        highlight: "함께 식단 관리 → 건강한 식습관",
      },
      {
        id: "diet-lesson-2",
        title: "매일 식단 사진 공유",
        content:
          "식단하조에서는 매일 자신의 식단 사진을 공유해요. '오늘 뭐 먹었지?' 하고 올리는 것만으로도 서로에게 좋은 동기부여가 됩니다. 부담 없이 인증 한 장이면 충분해요.",
        highlight: "매일 식단 사진 공유 = 동기부여",
      },
      {
        id: "diet-lesson-3",
        title: "균형 잡힌 한 끼",
        content:
          "건강한 한 끼의 핵심은 탄수화물, 단백질, 채소를 골고루 섭취하는 거예요. 밥만 먹거나 샐러드만 먹는 게 아니라, 세 가지가 균형 있게 들어간 식사를 목표로 합니다.",
        highlight: "탄수화물 + 단백질 + 채소 = 균형",
      },
      {
        id: "diet-lesson-4",
        title: "치팅데이는 괜찮아요",
        content:
          "식단 관리에서 치팅데이는 '절대 안 되는 것'이 아니에요. 오히려 적절한 보상이 장기적인 식단 관리에 도움이 됩니다. 가끔 먹고 싶은 걸 먹으면서 스트레스를 줄이는 것도 전략이에요.",
        highlight: "적절한 치팅데이 → 장기 유지에 도움",
      },
      {
        id: "diet-lesson-5",
        title: "물, 하루에 얼마나?",
        content:
          "성인 기준 하루 약 2리터의 물을 마시는 것이 권장됩니다. 물을 충분히 마시면 신진대사가 활발해지고, 식사량 조절에도 도움이 돼요.",
        highlight: "하루 2리터",
      },
    ],
    questions: [
      {
        id: "diet-1",
        type: "multiple-choice",
        question: "식단하조의 주요 활동 목적은?",
        options: [
          { id: "a", text: "함께 식단 관리하며 건강한 식습관 만들기" },
          { id: "b", text: "맛집 탐방" },
          { id: "c", text: "요리 대회 참가" },
          { id: "d", text: "다이어트 약 공동구매" },
        ],
        correctAnswer: "a",
        explanation:
          "식단하조는 함께 식단을 관리하며 건강한 식습관을 만들어가는 모임이에요!",
      },
      {
        id: "diet-2",
        type: "ox",
        question: "식단하조에서는 매일 식단 사진을 공유해야 한다.",
        correctAnswer: true,
        explanation: "매일 식단 사진을 공유하며 서로 동기부여를 해요.",
      },
      {
        id: "diet-3",
        type: "multiple-choice",
        question: "건강한 한 끼 식사에 가장 적합한 구성은?",
        options: [
          { id: "a", text: "밥 + 국 + 반찬 3가지" },
          { id: "b", text: "탄수화물 + 단백질 + 채소의 균형 잡힌 구성" },
          { id: "c", text: "샐러드만 먹기" },
          { id: "d", text: "고기만 많이 먹기" },
        ],
        correctAnswer: "b",
        explanation:
          "탄수화물, 단백질, 채소를 균형 있게 섭취하는 것이 가장 좋아요.",
      },
      {
        id: "diet-4",
        type: "ox",
        question: "식단 관리에서 '치팅데이'는 절대 하면 안 된다.",
        correctAnswer: false,
        explanation:
          "적절한 치팅데이는 오히려 장기적인 식단 관리에 도움이 됩니다!",
      },
      {
        id: "diet-5",
        type: "short-answer",
        question: "하루 권장 물 섭취량은 약 몇 리터일까요? (숫자만 입력)",
        correctAnswers: ["2", "2L", "2리터"],
        explanation: "성인 기준 하루 약 2리터의 물을 마시는 것이 좋습니다.",
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 1,
        title: "식단 초보",
        description: "함께 배워가요",
        emoji: "🌱",
      },
      {
        minScore: 2,
        maxScore: 3,
        title: "식단 중수",
        description: "조금만 더!",
        emoji: "🌿",
      },
      {
        minScore: 4,
        maxScore: 5,
        title: "식단 마스터",
        description: "완벽하게 이해하셨네요!",
        emoji: "🏆",
      },
    ],
  },
  {
    slug: "AI써보조",
    title: "AI 써보조 이해도 테스트",
    description:
      "AI 활용 능력을 테스트해보세요! AI 써보조 모임에 참여할 준비가 되었나요?",
    emoji: "🤖",
    color: "#818cf8",
    lessons: [
      {
        id: "ai-lesson-1",
        title: "ChatGPT와 OpenAI",
        content:
          "ChatGPT는 OpenAI라는 회사에서 만든 대화형 AI입니다. 2022년 말에 공개된 이후 전 세계적으로 큰 반향을 일으켰어요. 질문에 답하고, 글을 쓰고, 코드를 작성하는 등 다양한 일을 할 수 있죠.",
        highlight: "ChatGPT = OpenAI가 만든 대화형 AI",
      },
      {
        id: "ai-lesson-2",
        title: "AI는 감정이 없어요",
        content:
          "AI는 사람처럼 대화하지만, 실제로 감정을 느끼지는 않습니다. '기쁘다'거나 '슬프다'고 말할 수 있지만 이것은 학습된 패턴이지, 진짜 감정 경험은 아니에요.",
        highlight: "AI의 감정 표현 = 패턴, 실제 감정 아님",
      },
      {
        id: "ai-lesson-3",
        title: "프롬프팅이 핵심",
        content:
          "AI에게 좋은 답변을 얻으려면 '어떻게 질문하느냐'가 중요해요. 이것을 프롬프팅(Prompting) 또는 프롬프트 엔지니어링이라고 합니다. 구체적이고 명확하게 요청할수록 더 좋은 결과를 얻을 수 있어요.",
        highlight: "프롬프팅 = AI에게 효과적으로 질문하는 기술",
      },
      {
        id: "ai-lesson-4",
        title: "생성형 AI vs 일반 프로그램",
        content:
          "ChatGPT, Midjourney, Claude는 모두 '생성형 AI'에요. 새로운 텍스트, 이미지, 코드를 만들어낼 수 있죠. 반면 Excel 같은 프로그램은 계산 도구이지 AI가 아닙니다.",
        highlight: "생성형 AI = 새로운 콘텐츠를 만드는 AI",
      },
      {
        id: "ai-lesson-5",
        title: "AI와 저작권",
        content:
          "AI가 만든 글이나 이미지에도 저작권 문제가 발생할 수 있어요. AI가 학습한 원본 데이터의 저작권, AI 생성물의 소유권 등 법적으로 아직 논쟁 중인 부분이 많습니다. AI를 활용할 때는 이 점을 항상 주의해야 해요.",
        highlight: "AI 생성물 저작권 → 아직 법적 논쟁 중, 주의 필요",
      },
    ],
    questions: [
      {
        id: "ai-1",
        type: "multiple-choice",
        question: "ChatGPT를 만든 회사는?",
        options: [
          { id: "a", text: "Google" },
          { id: "b", text: "OpenAI" },
          { id: "c", text: "Meta" },
          { id: "d", text: "Apple" },
        ],
        correctAnswer: "b",
        explanation: "ChatGPT는 OpenAI에서 개발했습니다.",
      },
      {
        id: "ai-2",
        type: "ox",
        question: "AI는 스스로 감정을 느낄 수 있다.",
        correctAnswer: false,
        explanation:
          "현재 AI는 감정을 시뮬레이션할 수 있지만, 실제로 느끼지는 않습니다.",
      },
      {
        id: "ai-3",
        type: "multiple-choice",
        question: "AI에게 좋은 결과를 얻기 위한 질문 방법을 뭐라고 하나요?",
        options: [
          { id: "a", text: "코딩" },
          { id: "b", text: "프롬프팅" },
          { id: "c", text: "해킹" },
          { id: "d", text: "서핑" },
        ],
        correctAnswer: "b",
        explanation:
          "프롬프트 엔지니어링(프롬프팅)은 AI에게 효과적으로 질문하는 기술입니다.",
      },
      {
        id: "ai-4",
        type: "multiple-choice",
        question: "다음 중 생성형 AI가 아닌 것은?",
        options: [
          { id: "a", text: "ChatGPT" },
          { id: "b", text: "Midjourney" },
          { id: "c", text: "Excel" },
          { id: "d", text: "Claude" },
        ],
        correctAnswer: "c",
        explanation: "Excel은 스프레드시트 프로그램이지 생성형 AI가 아닙니다.",
      },
      {
        id: "ai-5",
        type: "ox",
        question: "AI가 생성한 글이나 이미지에도 저작권 문제가 발생할 수 있다.",
        correctAnswer: true,
        explanation:
          "AI 생성물의 저작권은 아직 법적으로 논쟁 중이며, 주의가 필요합니다.",
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 1,
        title: "AI 입문자",
        description: "함께 배워봐요!",
        emoji: "🔰",
      },
      {
        minScore: 2,
        maxScore: 3,
        title: "AI 활용러",
        description: "더 깊이 파보아요!",
        emoji: "💡",
      },
      {
        minScore: 4,
        maxScore: 5,
        title: "AI 전문가",
        description: "AI 써보조의 핵심 멤버감!",
        emoji: "🧠",
      },
    ],
  },
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === decodeURIComponent(slug));
}
