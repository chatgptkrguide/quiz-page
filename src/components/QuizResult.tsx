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
    const text = `[${quiz.title}] ${name}님이 전 문제를 통과했습니다.\n${totalQuestions}문제 모두 정답\n\n나도 도전하기: ${window.location.href}`;

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
    <div className="w-full max-w-sm mx-auto animate-fade-in px-1">
      <div className="text-center mb-10">
        <p className="text-[13px] text-foreground/40 mb-3">{name}님의 결과</p>
        <h2 className="text-[24px] font-bold mb-4">
          <span className="accent-underline">전 문제 통과</span>
        </h2>
        <p className="text-[15px] text-foreground/50">
          {totalQuestions}문제를 모두 맞혔습니다.
        </p>
      </div>

      <div className="space-y-3 mt-8">
        <button
          onClick={handleShare}
          className="w-full py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 transition-opacity"
        >
          결과 공유하기
        </button>
        <button
          onClick={onRetry}
          className="w-full py-3.5 rounded-lg text-[14px] text-foreground/40 hover:text-foreground transition-colors"
        >
          처음부터 다시 하기
        </button>
      </div>
    </div>
  );
}
