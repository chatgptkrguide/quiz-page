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
    <div className="min-h-screen flex flex-col">
      {/* progress */}
      <div className="w-full h-1 bg-border/60">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-md">
          {!isLast && lesson ? (
            <div key={lesson.id} className="animate-fade-in">
              {/* counter */}
              <p className="text-[12px] text-foreground/35 mb-8">
                {current + 1} / {lessons.length}
              </p>

              {/* title */}
              <h2 className="text-[22px] font-bold leading-snug mb-6">
                {lesson.title}
              </h2>

              {/* content */}
              <div className="text-[15px] text-foreground/70 leading-[1.85] mb-6 max-w-prose">
                {lesson.content.split('. ').map((sentence, i, arr) => (
                  <span key={i}>
                    {sentence}{i < arr.length - 1 ? '.' : ''}
                    {i < arr.length - 1 && (i + 1) % 2 === 0 && (
                      <>
                        <br /><br />
                      </>
                    )}
                    {i < arr.length - 1 && (i + 1) % 2 !== 0 && ' '}
                  </span>
                ))}
              </div>

              {/* highlight */}
              {lesson.highlight && (
                <div className="px-4 py-3.5 bg-accent/8 border-l-[3px] border-accent rounded-r-md mb-6">
                  <p className="text-[14px] font-semibold text-accent leading-relaxed">
                    {lesson.highlight}
                  </p>
                </div>
              )}

              {/* nav */}
              <div className="flex gap-3 mt-12">
                {current > 0 && (
                  <button
                    onClick={handlePrev}
                    className="px-6 py-3.5 text-[14px] text-foreground/40 hover:text-foreground transition-colors"
                  >
                    이전
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="flex-1 py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 transition-opacity"
                >
                  {current < lessons.length - 1 ? "다음" : "퀴즈 준비하기"}
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in text-center">
              <p className="text-[12px] text-foreground/35 mb-4">
                설명을 모두 읽었습니다
              </p>
              <h2 className="text-[22px] font-bold mb-3">
                퀴즈로 확인해볼까요?
              </h2>
              <p className="text-[15px] text-foreground/50 mb-2">
                {totalQuestions}개의 문제가 있습니다.
              </p>
              <p className="text-[13px] text-foreground/35 mb-10">
                틀리면 다시 풀 수 있어요. 모든 문제를 맞혀야 통과합니다.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="px-6 py-3.5 text-[14px] text-foreground/40 hover:text-foreground transition-colors"
                >
                  다시 읽기
                </button>
                <button
                  onClick={onStartQuiz}
                  className="flex-1 py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 transition-opacity"
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
