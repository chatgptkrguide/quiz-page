"use client";

import { useState } from "react";
import {
  QuizQuestion as QuizQuestionType,
  MultipleChoiceQuestion,
  OXQuestion,
  ShortAnswerQuestion,
} from "@/types/quiz";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onCorrect: () => void;
}

function MultipleChoice({
  question,
  onCorrect,
}: {
  question: MultipleChoiceQuestion;
  onCorrect: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [wrongIds, setWrongIds] = useState<Set<string>>(new Set());
  const [shakeId, setShakeId] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);

  const handleSelect = (id: string) => {
    if (solved || wrongIds.has(id)) return;
    setSelected(id);

    if (id === question.correctAnswer) {
      setSolved(true);
      setTimeout(() => onCorrect(), 900);
    } else {
      setShakeId(id);
      setWrongIds((prev) => new Set(prev).add(id));
      setTimeout(() => {
        setShakeId(null);
        setSelected(null);
      }, 600);
    }
  };

  return (
    <div className="space-y-3">
      {question.options.map((option, i) => {
        const isWrong = wrongIds.has(option.id);
        const isCorrectAndSolved = solved && option.id === question.correctAnswer;
        const isShaking = shakeId === option.id;

        let style = "border-border bg-surface hover:border-muted cursor-pointer";
        if (isCorrectAndSolved) {
          style = "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/30 animate-pulse-success";
        } else if (isWrong) {
          style = "border-border bg-background text-muted opacity-50 cursor-not-allowed line-through";
        }

        return (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={solved || isWrong}
            className={`animate-slide-up animate-delay-${(i + 1) * 100} w-full text-left p-4 rounded-lg border-2 transition-all ${style} ${isShaking ? "animate-shake" : ""} disabled:cursor-not-allowed`}
          >
            <span className="text-sm">{option.text}</span>
          </button>
        );
      })}
      {wrongIds.size > 0 && !solved && (
        <p className="animate-fade-in text-xs text-accent mt-2 pl-1">
          틀렸어요, 다시 골라보세요
        </p>
      )}
      {solved && question.explanation && (
        <p className="animate-fade-in text-sm text-muted bg-surface border-l-3 border-accent pl-3 py-2 mt-3 rounded-r-md">
          {question.explanation}
        </p>
      )}
    </div>
  );
}

function OXChoice({
  question,
  onCorrect,
}: {
  question: OXQuestion;
  onCorrect: () => void;
}) {
  const [wrongValue, setWrongValue] = useState<boolean | null>(null);
  const [shaking, setShaking] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleSelect = (answer: boolean) => {
    if (solved || wrongValue === answer) return;

    if (answer === question.correctAnswer) {
      setSolved(true);
      setTimeout(() => onCorrect(), 900);
    } else {
      setWrongValue(answer);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
    }
  };

  const getStyle = (value: boolean): string => {
    if (solved && value === question.correctAnswer)
      return "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/30 animate-pulse-success";
    if (wrongValue === value)
      return "border-border bg-background opacity-50 cursor-not-allowed";
    return "border-border bg-surface hover:border-muted cursor-pointer";
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-5">
        <button
          onClick={() => handleSelect(true)}
          disabled={solved || wrongValue === true}
          className={`animate-slide-up animate-delay-100 p-7 rounded-lg border-2 transition-all text-center ${getStyle(true)} ${shaking && wrongValue === true ? "animate-shake" : ""} disabled:cursor-not-allowed`}
        >
          <span className="text-3xl block mb-1.5">O</span>
          <span className="text-xs font-medium text-muted">맞다</span>
        </button>
        <button
          onClick={() => handleSelect(false)}
          disabled={solved || wrongValue === false}
          className={`animate-slide-up animate-delay-200 p-7 rounded-lg border-2 transition-all text-center ${getStyle(false)} ${shaking && wrongValue === false ? "animate-shake" : ""} disabled:cursor-not-allowed`}
        >
          <span className="text-3xl block mb-1.5">X</span>
          <span className="text-xs font-medium text-muted">틀리다</span>
        </button>
      </div>
      {wrongValue !== null && !solved && (
        <p className="animate-fade-in text-xs text-accent mt-1 pl-1">
          아닙니다, 다시 생각해보세요
        </p>
      )}
      {solved && question.explanation && (
        <p className="animate-fade-in text-sm text-muted bg-surface border-l-3 border-accent pl-3 py-2 mt-3 rounded-r-md">
          {question.explanation}
        </p>
      )}
    </div>
  );
}

function ShortAnswer({
  question,
  onCorrect,
}: {
  question: ShortAnswerQuestion;
  onCorrect: () => void;
}) {
  const [value, setValue] = useState("");
  const [wrongAttempts, setWrongAttempts] = useState<string[]>([]);
  const [shaking, setShaking] = useState(false);
  const [solved, setSolved] = useState(false);

  const isCorrect = (v: string): boolean =>
    question.correctAnswers.some(
      (a) => a.toLowerCase() === v.trim().toLowerCase()
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || solved) return;

    if (isCorrect(value)) {
      setSolved(true);
      setTimeout(() => onCorrect(), 900);
    } else {
      setWrongAttempts((prev) => [...prev, value.trim()]);
      setShaking(true);
      setValue("");
      setTimeout(() => setShaking(false), 600);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className={`animate-slide-up animate-delay-100 ${shaking ? "animate-shake" : ""}`}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={solved}
          placeholder="답을 입력하세요"
          className={`w-full px-4 py-3 rounded-lg border-2 bg-surface placeholder:text-muted/50 focus:outline-none transition-all ${
            solved
              ? "border-emerald-600 bg-emerald-50"
              : "border-border focus:border-accent focus:ring-1 focus:ring-accent/30"
          }`}
          autoFocus
        />
      </div>
      {wrongAttempts.length > 0 && !solved && (
        <p className="animate-fade-in text-xs text-accent pl-1">
          &apos;{wrongAttempts[wrongAttempts.length - 1]}&apos;은(는) 정답이 아니에요. 다시 입력해보세요
        </p>
      )}
      {!solved && (
        <button
          type="submit"
          disabled={!value.trim()}
          className="animate-slide-up animate-delay-200 w-full py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        >
          제출
        </button>
      )}
      {solved && question.explanation && (
        <p className="animate-fade-in text-sm text-muted bg-surface border-l-3 border-accent pl-3 py-2 mt-3 rounded-r-md">
          {question.explanation}
        </p>
      )}
    </form>
  );
}

export default function QuizQuestionComponent({
  question,
  questionNumber,
  totalQuestions,
  onCorrect,
}: QuizQuestionProps) {
  return (
    <div className="w-full max-w-lg mx-auto animate-fade-in">
      {/* progress */}
      <div className="mb-8">
        <div className="flex items-end justify-between mb-3">
          <span className="font-serif text-xs text-muted tracking-wide">
            {questionNumber}번째 문제
          </span>
          <span className="text-[11px] text-muted/60">
            {questionNumber} / {totalQuestions}
          </span>
        </div>
        <div className="w-full h-0.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${(questionNumber / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      <h2 className="text-lg font-bold leading-relaxed mb-7">
        <span className="text-accent font-serif text-base mr-1.5">Q{questionNumber}.</span>
        {question.question}
      </h2>

      {question.type === "multiple-choice" && (
        <MultipleChoice question={question} onCorrect={onCorrect} />
      )}
      {question.type === "ox" && (
        <OXChoice question={question} onCorrect={onCorrect} />
      )}
      {question.type === "short-answer" && (
        <ShortAnswer question={question} onCorrect={onCorrect} />
      )}
    </div>
  );
}
