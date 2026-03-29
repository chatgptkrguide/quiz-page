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
  onAnswer: (answer: string | boolean) => void;
}

function MultipleChoice({
  question,
  onSelect,
}: {
  question: MultipleChoiceQuestion;
  onSelect: (id: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    if (selected) return;
    setSelected(id);
    setTimeout(() => onSelect(id), 600);
  };

  return (
    <div className="space-y-3">
      {question.options.map((option, i) => {
        const isSelected = selected === option.id;
        const isCorrect = option.id === question.correctAnswer;
        const showResult = selected !== null;

        let style = "border-stone-200 bg-white hover:border-stone-400";
        if (showResult && isSelected && isCorrect) {
          style = "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500";
        } else if (showResult && isSelected && !isCorrect) {
          style = "border-red-400 bg-red-50 ring-1 ring-red-400";
        } else if (showResult && isCorrect) {
          style = "border-emerald-500 bg-emerald-50";
        }

        return (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={selected !== null}
            className={`animate-slide-up animate-delay-${(i + 1) * 100} w-full text-left p-4 rounded-xl border-2 transition-all ${style} disabled:cursor-default`}
          >
            <span className="text-sm text-stone-900">{option.text}</span>
          </button>
        );
      })}
      {selected && question.explanation && (
        <p className="animate-fade-in text-sm text-stone-500 bg-stone-100 rounded-lg p-3 mt-2">
          💡 {question.explanation}
        </p>
      )}
    </div>
  );
}

function OXChoice({
  question,
  onSelect,
}: {
  question: OXQuestion;
  onSelect: (answer: boolean) => void;
}) {
  const [selected, setSelected] = useState<boolean | null>(null);

  const handleSelect = (answer: boolean) => {
    if (selected !== null) return;
    setSelected(answer);
    setTimeout(() => onSelect(answer), 600);
  };

  const getStyle = (value: boolean): string => {
    const showResult = selected !== null;
    const isSelected = selected === value;
    const isCorrect = value === question.correctAnswer;

    if (showResult && isSelected && isCorrect)
      return "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500";
    if (showResult && isSelected && !isCorrect)
      return "border-red-400 bg-red-50 ring-1 ring-red-400";
    if (showResult && isCorrect)
      return "border-emerald-500 bg-emerald-50";
    return "border-stone-200 bg-white hover:border-stone-400";
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleSelect(true)}
          disabled={selected !== null}
          className={`animate-slide-up animate-delay-100 p-6 rounded-xl border-2 transition-all text-center ${getStyle(true)} disabled:cursor-default`}
        >
          <span className="text-3xl block mb-1">⭕</span>
          <span className="text-sm font-medium text-stone-700">맞다</span>
        </button>
        <button
          onClick={() => handleSelect(false)}
          disabled={selected !== null}
          className={`animate-slide-up animate-delay-200 p-6 rounded-xl border-2 transition-all text-center ${getStyle(false)} disabled:cursor-default`}
        >
          <span className="text-3xl block mb-1">❌</span>
          <span className="text-sm font-medium text-stone-700">틀리다</span>
        </button>
      </div>
      {selected !== null && question.explanation && (
        <p className="animate-fade-in text-sm text-stone-500 bg-stone-100 rounded-lg p-3">
          💡 {question.explanation}
        </p>
      )}
    </div>
  );
}

function ShortAnswer({
  question,
  onSelect,
}: {
  question: ShortAnswerQuestion;
  onSelect: (answer: string) => void;
}) {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || submitted) return;
    setSubmitted(true);
    setTimeout(() => onSelect(value.trim()), 600);
  };

  const isCorrect = question.correctAnswers.some(
    (a) => a.toLowerCase() === value.trim().toLowerCase()
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="animate-slide-up animate-delay-100">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={submitted}
          placeholder="답을 입력하세요"
          className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all ${
            submitted
              ? isCorrect
                ? "border-emerald-500 bg-emerald-50"
                : "border-red-400 bg-red-50"
              : "border-stone-200 focus:ring-2 focus:ring-stone-900 focus:border-transparent"
          }`}
          autoFocus
        />
      </div>
      {!submitted && (
        <button
          type="submit"
          disabled={!value.trim()}
          className="animate-slide-up animate-delay-200 w-full py-3 rounded-xl bg-stone-900 text-white font-medium hover:bg-stone-800 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors"
        >
          제출
        </button>
      )}
      {submitted && question.explanation && (
        <p className="animate-fade-in text-sm text-stone-500 bg-stone-100 rounded-lg p-3">
          💡 {question.explanation}
        </p>
      )}
    </form>
  );
}

export default function QuizQuestionComponent({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div className="w-full max-w-lg mx-auto animate-fade-in">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-stone-400">
            {questionNumber} / {totalQuestions}
          </span>
          <span className="text-xs text-stone-400">
            {question.type === "multiple-choice"
              ? "객관식"
              : question.type === "ox"
                ? "O/X"
                : "주관식"}
          </span>
        </div>
        <div className="w-full h-1 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-stone-900 rounded-full transition-all duration-500"
            style={{
              width: `${(questionNumber / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      <h2 className="text-lg font-semibold text-stone-900 mb-6 leading-relaxed">
        Q{questionNumber}. {question.question}
      </h2>

      {question.type === "multiple-choice" && (
        <MultipleChoice question={question} onSelect={onAnswer} />
      )}
      {question.type === "ox" && (
        <OXChoice question={question} onSelect={onAnswer} />
      )}
      {question.type === "short-answer" && (
        <ShortAnswer question={question} onSelect={onAnswer} />
      )}
    </div>
  );
}
