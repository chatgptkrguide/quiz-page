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
}

export interface QuizAttempt {
  name: string;
  answers: Record<string, string | boolean>;
  score: number;
  totalQuestions: number;
}
