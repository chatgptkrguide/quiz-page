"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LessonSection } from "@/types/quiz";

interface EnlargedImage {
  src: string;
  alt: string;
}

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
  const [enlarged, setEnlarged] = useState<EnlargedImage | null>(null);
  const isLast = current >= lessons.length;
  const lesson = lessons[current];

  const handleNext = (): void => setCurrent((prev) => prev + 1);
  const handlePrev = (): void => setCurrent((prev) => Math.max(0, prev - 1));

  useEffect(() => {
    if (!enlarged) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setEnlarged(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [enlarged]);

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

              {lesson.image && (
                <figure className="mb-4 rounded-lg overflow-hidden border border-border/40 bg-muted/30">
                  <button
                    type="button"
                    onClick={() =>
                      lesson.image &&
                      setEnlarged({ src: lesson.image.src, alt: lesson.image.alt })
                    }
                    className="relative block w-full h-[44dvh] max-h-[420px] min-h-[260px] cursor-zoom-in"
                    aria-label="이미지 크게 보기"
                  >
                    <Image
                      src={lesson.image.src}
                      alt={lesson.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 384px"
                      className="object-contain"
                      priority
                      quality={95}
                    />
                    <span className="absolute top-2 right-2 px-2 py-1 rounded-md bg-foreground/70 text-background text-[10px] font-medium pointer-events-none">
                      🔍 탭해서 크게
                    </span>
                  </button>
                  {lesson.image.caption && (
                    <figcaption className="px-3 py-2 text-[11px] text-foreground/50 text-center border-t border-border/30">
                      {lesson.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              <div className="text-[15px] text-foreground/55 leading-[1.75] whitespace-pre-line">
                {lesson.content.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                  part.startsWith('**') && part.endsWith('**') ? (
                    <strong key={i} className="text-foreground/90 font-bold">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </div>

              {lesson.highlight && (
                <div className="px-4 py-3.5 bg-accent/8 border-l-[3px] border-accent rounded-r-md mt-5">
                  <p className="text-[14px] font-bold text-accent leading-relaxed">
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

      {/* enlarged image modal */}
      {enlarged && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="확대된 이미지"
          onClick={() => setEnlarged(null)}
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-3 animate-fade-in"
        >
          <div className="relative w-full h-full max-w-3xl">
            <Image
              src={enlarged.src}
              alt={enlarged.alt}
              fill
              sizes="100vw"
              className="object-contain"
              quality={100}
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setEnlarged(null);
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white text-xl flex items-center justify-center"
            aria-label="닫기"
          >
            ✕
          </button>
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/60 text-[12px]">
            아무 곳이나 탭하면 닫힙니다
          </p>
        </div>
      )}

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
