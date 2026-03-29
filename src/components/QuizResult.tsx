"use client";

import { Quiz } from "@/types/quiz";

interface QuizResultProps {
  quiz: Quiz;
  name: string;
  totalQuestions: number;
  onRetry: () => void;
}

export default function QuizResult({
  quiz,
  name,
  totalQuestions,
  onRetry,
}: QuizResultProps) {
  const handleShare = async () => {
    const text = `[${quiz.title}] ${name}님이 전 문��를 통과했습니다!\n${totalQuestions}문제 모두 정답\n\n나도 도전하기 👉 ${window.location.href}`;

    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {
        await navigator.clipboard.writeText(text);
        alert("결과가 복사되었습니다!");
      }
    } else {
      await navigator.clipboard.writeText(text);
      alert("결과가 복사되었습니다!");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto text-center animate-fade-in">
      <div className="mb-8">
        <span className="text-6xl block mb-5 animate-slide-up">
          🎉
        </span>
        <p className="text-sm text-muted mb-2 font-serif">{name}님</p>
        <h2 className="text-2xl font-bold mb-1.5">
          <span className="accent-underline">전 문제 통과!</span>
        </h2>
        <p className="text-muted text-sm mt-3">
          {totalQuestions}문제를 모두 맞혔습니다
        </p>
      </div>

      <div className="bg-surface rounded-xl border border-border p-5 mb-7">
        <div className="flex items-center justify-center gap-6">
          <div>
            <p className="text-3xl font-bold font-serif text-accent">
              {totalQuestions}
              <span className="text-base text-muted">/{totalQuestions}</span>
            </p>
            <p className="text-[11px] text-muted mt-1">정답 수</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <p className="text-3xl font-bold font-serif text-accent">100%</p>
            <p className="text-[11px] text-muted mt-1">정답률</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleShare}
          className="w-full py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
        >
          결과 공유하기
        </button>
        <button
          onClick={onRetry}
          className="w-full py-3 text-sm text-muted hover:text-foreground transition-colors"
        >
          다시 풀기
        </button>
      </div>
    </div>
  );
}
