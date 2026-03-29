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

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrent((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* progress bar */}
      <div className="w-full h-0.5 bg-border">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{
            width: `${((current + 1) / (lessons.length + 1)) * 100}%`,
          }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          {!isLast && lesson ? (
            <div key={lesson.id} className="animate-fade-in">
              {/* counter */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-accent font-serif text-sm font-bold">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] text-muted">
                  / {String(lessons.length).padStart(2, "0")}
                </span>
              </div>

              {/* title */}
              <h2 className="text-xl font-bold leading-snug mb-5">
                {lesson.title}
              </h2>

              {/* content */}
              <div className="text-sm text-muted leading-[1.9] mb-6 whitespace-pre-line">
                {lesson.content}
              </div>

              {/* highlight */}
              {lesson.highlight && (
                <div className="px-4 py-3 bg-accent-light/30 border-l-3 border-accent rounded-r-md mb-8">
                  <p className="text-sm font-semibold text-accent leading-relaxed">
                    {lesson.highlight}
                  </p>
                </div>
              )}

              {/* nav */}
              <div className="flex gap-3 mt-10">
                {current > 0 && (
                  <button
                    onClick={handlePrev}
                    className="px-5 py-3 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    이전
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="flex-1 py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  {current < lessons.length - 1 ? "다음" : "설명 완료"}
                </button>
              </div>
            </div>
          ) : (
            /* quiz start prompt */
            <div className="animate-fade-in text-center">
              <p className="text-xs text-muted mb-2 font-serif">
                내용을 모두 읽었습니다
              </p>
              <h2 className="text-xl font-bold mb-3">
                퀴즈로 확인해볼까요?
              </h2>
              <p className="text-sm text-muted mb-8">
                {totalQuestions}개의 문제가 있어요.
                <br />
                <span className="text-xs text-muted/60">
                  모든 문제를 맞혀야 통과할 수 있습니다.
                </span>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="px-5 py-3 text-sm text-muted hover:text-foreground transition-colors"
                >
                  다시 읽기
                </button>
                <button
                  onClick={onStartQuiz}
                  className="flex-1 py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  퀴즈 시작
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
