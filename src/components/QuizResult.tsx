"use client";

import { Quiz } from "@/types/quiz";

interface QuizResultProps {
  quiz: Quiz;
  name: string;
  totalQuestions: number;
  hadWrong: boolean;
  onRetryWrong: () => void;
  onRetry: () => void;
  saveFailed?: boolean;
  onRetrySave?: () => void;
}

export default function QuizResult({
  quiz,
  name,
  totalQuestions,
  hadWrong,
  onRetryWrong,
  onRetry,
  saveFailed,
  onRetrySave,
}: QuizResultProps) {
  const handleShareKakao = async () => {
    const text = `[${quiz.title}]\n${name}님이 ${totalQuestions}문제 전부 통과!\n\n나도 도전하기: ${window.location.href}`;

    if (navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // fall through to clipboard
      }
    }
    await navigator.clipboard.writeText(text);
    alert("결과가 복사되었습니다! 카톡에 붙여넣기 하세요.");
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
        {hadWrong && (
          <p className="text-[13px] text-foreground/35 mt-2">
            틀린 문제가 있었지만 다시 맞혔어요.
          </p>
        )}
      </div>

      {saveFailed && (
        <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-[13px] text-red-600 mb-2">
            결과 저장에 실패했습니다.
          </p>
          <button
            onClick={onRetrySave}
            className="text-[13px] text-red-700 font-medium underline"
          >
            다시 시도
          </button>
        </div>
      )}

      <div className="space-y-3">
        {hadWrong ? (
          <button
            onClick={onRetryWrong}
            className="w-full py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 transition-opacity"
          >
            틀린 문제 다시 풀기
          </button>
        ) : (
          <button
            onClick={handleShareKakao}
            className="w-full py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 transition-opacity"
          >
            카톡에 자랑하기
          </button>
        )}
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
