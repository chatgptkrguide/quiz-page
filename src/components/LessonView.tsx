"use client";

import { useRef, useEffect, useState } from "react";
import { LessonSection } from "@/types/quiz";

interface LessonViewProps {
  lessons: LessonSection[];
  quizTitle: string;
  totalQuestions: number;
  onStartQuiz: () => void;
}

export default function LessonView({
  lessons,
  quizTitle,
  totalQuestions,
  onStartQuiz,
}: LessonViewProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setScrolledToBottom(true);
      },
      { threshold: 0.5 }
    );
    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* lessons */}
      <div className="max-w-lg mx-auto px-5 py-10 space-y-12">
        {lessons.map((lesson, i) => (
          <section
            key={lesson.id}
            className="animate-fade-in"
            style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}
          >
            <div className="flex items-baseline gap-2.5 mb-3">
              <span className="text-accent font-serif text-xs font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-base font-bold leading-snug">
                {lesson.title}
              </h2>
            </div>
            <p className="text-sm text-muted leading-[1.8] pl-7">
              {lesson.content}
            </p>
            {lesson.highlight && (
              <div className="mt-3 ml-7 px-3 py-2 bg-accent-light/40 border-l-3 border-accent rounded-r-md">
                <p className="text-xs font-medium text-accent">
                  {lesson.highlight}
                </p>
              </div>
            )}
          </section>
        ))}

        {/* bottom CTA */}
        <div ref={bottomRef} className="pt-6 pb-4">
          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted mb-1 font-serif">
              내용을 잘 읽으셨나요?
            </p>
            <p className="text-sm text-muted mb-6">
              이제 {totalQuestions}개의 문제로 확인해볼게요.
              <br />
              <span className="text-xs text-muted/60">
                모든 문제를 맞혀야 통과할 수 있어요.
              </span>
            </p>
            <button
              onClick={onStartQuiz}
              className={`w-full py-3.5 rounded-lg font-medium transition-all ${
                scrolledToBottom
                  ? "bg-foreground text-background hover:opacity-90"
                  : "bg-border text-muted cursor-default"
              }`}
              disabled={!scrolledToBottom}
            >
              {scrolledToBottom
                ? `${quizTitle} 시작`
                : "아래까지 읽어주세요"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
