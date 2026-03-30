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
  onWrong?: (questionId: string) => void;
}

function MultipleChoice({
  question,
  onSolved,
  onWrong,
}: {
  question: MultipleChoiceQuestion;
  onSolved: () => void;
  onWrong?: () => void;
}) {
  const [wrongIds, setWrongIds] = useState<Set<string>>(new Set());
  const [shakeId, setShakeId] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);

  const handleSelect = (id: string) => {
    if (solved || wrongIds.has(id)) return;

    if (id === question.correctAnswer) {
      setSolved(true);
      onSolved();
    } else {
      setShakeId(id);
      setWrongIds((prev) => new Set(prev).add(id));
      onWrong?.();
      setTimeout(() => setShakeId(null), 600);
    }
  };

  return (
    <div className="space-y-2.5">
      {question.options.map((option, i) => {
        const isWrong = wrongIds.has(option.id);
        const isCorrect = option.id === question.correctAnswer;
        const isShaking = shakeId === option.id;

        let style = "border-border bg-surface hover:border-foreground/20 cursor-pointer";
        if (solved && isCorrect) {
          style = "border-emerald-600 bg-emerald-50 text-emerald-800";
        } else if (solved && isWrong) {
          style = "border-red-400 bg-red-50 text-red-500 line-through";
        } else if (isWrong) {
          style = "border-red-400 bg-red-50 text-red-500 line-through";
        } else if (solved) {
          style = "border-border/50 bg-surface/50 text-foreground/30";
        }

        return (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={solved || isWrong}
            className={`animate-slide-up animate-delay-${(i + 1) * 100} w-full text-left px-5 py-4 rounded-lg border-2 transition-all ${style} ${isShaking ? "animate-shake" : ""} disabled:cursor-default`}
          >
            <span className="text-[15px] leading-relaxed">{option.text}</span>
          </button>
        );
      })}
      {wrongIds.size > 0 && !solved && (
        <p className="animate-fade-in text-[13px] text-accent mt-3 pl-1 font-medium">
          틀렸습니다. 다른 선택지를 골라보세요.
        </p>
      )}
      {solved && question.explanation && (
        <p className="animate-fade-in text-[13px] text-emerald-700 mt-3 pl-1">
          {question.explanation}
        </p>
      )}
    </div>
  );
}

function OXChoice({
  question,
  onSolved,
  onWrong,
}: {
  question: OXQuestion;
  onSolved: () => void;
  onWrong?: () => void;
}) {
  const [wrongValue, setWrongValue] = useState<boolean | null>(null);
  const [shaking, setShaking] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleSelect = (answer: boolean) => {
    if (solved || wrongValue === answer) return;

    if (answer === question.correctAnswer) {
      setSolved(true);
      onSolved();
    } else {
      setWrongValue(answer);
      setShaking(true);
      onWrong?.();
      setTimeout(() => setShaking(false), 600);
    }
  };

  const getStyle = (value: boolean): string => {
    if (solved && value === question.correctAnswer)
      return "border-emerald-600 bg-emerald-50 text-emerald-800";
    if (solved && wrongValue === value)
      return "border-red-400 bg-red-50 text-red-500";
    if (wrongValue === value)
      return "border-red-400 bg-red-50 text-red-500";
    if (solved)
      return "border-border/50 bg-surface/50 text-foreground/30";
    return "border-border bg-surface hover:border-foreground/20 cursor-pointer";
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleSelect(true)}
          disabled={solved || wrongValue === true}
          className={`animate-slide-up animate-delay-100 py-6 rounded-lg border-2 transition-all text-center ${getStyle(true)} ${shaking && wrongValue === true ? "animate-shake" : ""} disabled:cursor-default`}
        >
          <span className="text-2xl font-bold block mb-1">O</span>
          <span className="text-[13px]">맞다</span>
        </button>
        <button
          onClick={() => handleSelect(false)}
          disabled={solved || wrongValue === false}
          className={`animate-slide-up animate-delay-200 py-6 rounded-lg border-2 transition-all text-center ${getStyle(false)} ${shaking && wrongValue === false ? "animate-shake" : ""} disabled:cursor-default`}
        >
          <span className="text-2xl font-bold block mb-1">X</span>
          <span className="text-[13px]">틀리다</span>
        </button>
      </div>
      {wrongValue !== null && !solved && (
        <p className="animate-fade-in text-[13px] text-accent mt-2 pl-1 font-medium">
          틀렸습니다. 다시 생각해보세요.
        </p>
      )}
      {solved && question.explanation && (
        <p className="animate-fade-in text-[13px] text-emerald-700 mt-3 pl-1">
          {question.explanation}
        </p>
      )}
    </div>
  );
}

function ShortAnswer({
  question,
  onSolved,
  onWrong,
}: {
  question: ShortAnswerQuestion;
  onSolved: () => void;
  onWrong?: () => void;
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
      onSolved();
    } else {
      setWrongAttempts((prev) => [...prev, value.trim()]);
      setShaking(true);
      onWrong?.();
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
          className={`w-full px-4 py-3.5 rounded-lg border-2 bg-surface placeholder:text-foreground/25 focus:outline-none transition-all text-[15px] ${
            solved
              ? "border-emerald-600 bg-emerald-50 text-emerald-800"
              : "border-border focus:border-accent focus:ring-2 focus:ring-accent/40"
          }`}
          autoFocus
        />
      </div>
      {wrongAttempts.length > 0 && !solved && (
        <p className="animate-fade-in text-[13px] text-accent pl-1 font-medium">
          틀렸습니다. 다시 입력해보세요.
        </p>
      )}
      {!solved && (
        <button
          type="submit"
          disabled={!value.trim()}
          className="animate-slide-up animate-delay-200 w-full py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 disabled:opacity-20 disabled:cursor-not-allowed transition-opacity"
        >
          제출
        </button>
      )}
      {solved && question.explanation && (
        <p className="animate-fade-in text-[13px] text-emerald-700 mt-1 pl-1">
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
  onWrong,
}: QuizQuestionProps) {
  const [solved, setSolved] = useState(false);

  const handleSolved = () => setSolved(true);
  const handleWrong = () => onWrong?.(question.id);

  return (
    <div className="w-full max-w-lg mx-auto px-1">
      <div className="mb-8">
        <div className="flex items-end justify-between mb-3">
          <p className="text-[13px] text-foreground/40">
            {questionNumber}번 문제
          </p>
          <p className="text-[12px] text-foreground/25">
            {questionNumber} / {totalQuestions}
          </p>
        </div>
        <div className="w-full h-1 bg-border/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${(questionNumber / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      <h2 className="text-[18px] font-bold leading-relaxed mb-7">
        {question.question}
      </h2>

      {question.type === "multiple-choice" && (
        <MultipleChoice question={question} onSolved={handleSolved} onWrong={handleWrong} />
      )}
      {question.type === "ox" && (
        <OXChoice question={question} onSolved={handleSolved} onWrong={handleWrong} />
      )}
      {question.type === "short-answer" && (
        <ShortAnswer question={question} onSolved={handleSolved} onWrong={handleWrong} />
      )}

      {solved && (
        <button
          onClick={onCorrect}
          className="animate-fade-in w-full mt-6 py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 transition-opacity"
        >
          {questionNumber < totalQuestions ? "다음 문제" : "결과 보기"}
        </button>
      )}
    </div>
  );
}
