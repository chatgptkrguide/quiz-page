export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestionBase {
  id: string;
  question: string;
  explanation?: string;
}

export interface MultipleChoiceQuestion extends QuizQuestionBase {
  type: "multiple-choice";
  options: QuizOption[];
  correctAnswer: string;
}

export interface OXQuestion extends QuizQuestionBase {
  type: "ox";
  correctAnswer: boolean;
}

export interface ShortAnswerQuestion extends QuizQuestionBase {
  type: "short-answer";
  correctAnswers: string[];
}

export type QuizQuestion = MultipleChoiceQuestion | OXQuestion | ShortAnswerQuestion;

export interface LessonSection {
  id: string;
  title: string;
  content: string;
  highlight?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface QuizResult {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
}

export interface Quiz {
  slug: string;
  title: string;
  description: string;
  logo?: string;
  theme: string;
  lessons: LessonSection[];
  questions: QuizQuestion[];
  results: QuizResult[];
  /** 다 푼 뒤 결과 화면에 보여 줄 다음 할 일. **굵게** 표기 가능 */
  resultNote?: string;
  /** 다음 할 일에 필요한 페이지 (결과 화면의 보조 버튼) */
  resultLink?: { href: string; label: string };
}

export interface QuizAttempt {
  name: string;
  answers: Record<string, string | boolean>;
  score: number;
  totalQuestions: number;
}
