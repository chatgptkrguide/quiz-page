import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    slug: "식단하조",
    title: "식단하조 이해도 테스트",
    description: "식단하조 모임에 대해 얼마나 알고 있나요? 테스트로 확인해보세요!",
    emoji: "🥗",
    color: "#4ade80",
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
        explanation: "식단하조는 함께 식단을 관리하며 건강한 식습관을 만들어가는 모임이에요!",
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
        explanation: "탄수화물, 단백질, 채소를 균형 있게 섭취하는 것이 가장 좋아요.",
      },
      {
        id: "diet-4",
        type: "ox",
        question: "식단 관리에서 '치팅데이'는 절대 하면 안 된다.",
        correctAnswer: false,
        explanation: "적절한 치팅데이는 오히려 장기적인 식단 관리에 도움이 됩니다!",
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
        description: "아직 식단하조에 대해 잘 모르시네요! 함께 배워가요 😊",
        emoji: "🌱",
      },
      {
        minScore: 2,
        maxScore: 3,
        title: "식단 중수",
        description: "어느 정도 알고 계시네요! 조금만 더 공부하면 식단 고수!",
        emoji: "🌿",
      },
      {
        minScore: 4,
        maxScore: 5,
        title: "식단 마스터",
        description: "식단하조를 완벽하게 이해하고 계시네요! 대단해요!",
        emoji: "🏆",
      },
    ],
  },
  {
    slug: "AI써보조",
    title: "AI 써보조 이해도 테스트",
    description: "AI 활용 능력을 테스트해보세요! AI 써보조 모임에 참여할 준비가 되었나요?",
    emoji: "🤖",
    color: "#818cf8",
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
        explanation: "현재 AI는 감정을 시뮬레이션할 수 있지만, 실제로 느끼지는 않습니다.",
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
        explanation: "프롬프트 엔지니어링(프롬프팅)은 AI에게 효과적으로 질문하는 기술입니다.",
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
        explanation: "AI 생성물의 저작권은 아직 법적으로 논쟁 중이며, 주의가 필요합니다.",
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 1,
        title: "AI 입문자",
        description: "AI 세계에 오신 걸 환영해요! 함께 배워봐요 🚀",
        emoji: "🔰",
      },
      {
        minScore: 2,
        maxScore: 3,
        title: "AI 활용러",
        description: "기본적인 AI 지식이 있으시네요! 더 깊이 파보아요!",
        emoji: "💡",
      },
      {
        minScore: 4,
        maxScore: 5,
        title: "AI 전문가",
        description: "AI에 대해 잘 알고 계시네요! AI 써보조의 핵심 멤버감!",
        emoji: "🧠",
      },
    ],
  },
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === decodeURIComponent(slug));
}
