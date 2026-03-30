"use client";

import { useState } from "react";
import { LessonSection } from "@/types/quiz";

interface LessonViewProps {
  lessons: LessonSection[];
  quizTitle: string;
  totalQuestions: number;
  onStartQuiz: () => void;
}

export default function LessonView({
  lessons,
  totalQuestions,
  onStartQuiz,
}: LessonViewProps) {
  const [current, setCurrent] = useState(0);
  const isLast = current >= lessons.length;
  const lesson = lessons[current];

  const handleNext = () => setCurrent((prev) => prev + 1);
  const handlePrev = () => setCurrent((prev) => Math.max(0, prev - 1));

  const progress = isLast
    ? 100
    : Math.round(((current + 1) / lessons.length) * 100);

  return (
    <div className="h-[100dvh] flex flex-col overflow-hidden bg-background text-foreground">
      {/* progress */}
      <div className="w-full h-1 bg-border/60 shrink-0">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* scrollable content */}
      <div className="flex-1 overflow-y-auto px-5">
        <div className="w-full max-w-sm mx-auto py-6">
          {!isLast && lesson ? (
            <div key={lesson.id} className="animate-fade-in">
              <p className="text-[12px] text-foreground/30 mb-4">
                {current + 1} / {lessons.length}
              </p>

              <h2 className="text-[20px] font-bold leading-tight mb-4">
                {lesson.title}
              </h2>

              <div className="text-[15px] text-foreground/65 leading-[1.75] whitespace-pre-line">
                {lesson.content.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                  part.startsWith('**') && part.endsWith('**') ? (
                    <strong key={i} className="text-foreground font-semibold">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </div>

              {lesson.highlight && (
                <div className="px-4 py-3 bg-accent/8 border-l-[3px] border-accent rounded-r-md mt-5">
                  <p className="text-[13px] font-semibold text-accent leading-relaxed">
                    {lesson.highlight}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-fade-in text-center pt-20">
              <p className="text-[12px] text-foreground/30 mb-4">
                설명을 모두 읽었습니다
              </p>
              <h2 className="text-[20px] font-bold mb-3">
                퀴즈로 확인해볼까요?
              </h2>
              <p className="text-[15px] text-foreground/50 mb-2">
                {totalQuestions}개의 문제가 있습니다.
              </p>
              <p className="text-[13px] text-foreground/30">
                틀리면 다시 풀 수 있어요.
                <br />
                모든 문제를 맞혀야 통과합니다.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* fixed bottom nav */}
      <div className="shrink-0 px-5 pb-6 pt-3 border-t border-border/30">
        <div className="max-w-sm mx-auto flex gap-3">
          {current > 0 && (
            <button
              onClick={handlePrev}
              className="px-5 py-3.5 text-[14px] text-foreground/40 hover:text-foreground transition-colors"
            >
              이전
            </button>
          )}
          <button
            onClick={isLast ? onStartQuiz : handleNext}
            className="flex-1 py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 transition-opacity"
          >
            {isLast
              ? "퀴즈 시작"
              : current < lessons.length - 1
                ? "다음"
                : "퀴즈 준비하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
