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
  saveFailed,
  onRetrySave,
}: QuizResultProps) {
  const handleShare = async () => {
    const text = `🎉 ${quiz.slug} 퀴즈 전부 통과! 🎉\n\n${name}님이 ${totalQuestions}문제를\n모두 맞혔습니다 ✅\n\n조모임 내용 완벽 이해 👏\n다들 축하해주세요~ 🥳`;

    if (navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // fall through
      }
    }
    await navigator.clipboard.writeText(text);
    alert("복사되었습니다! 카톡에 붙여넣기 하세요.");
  };

  return (
    <div className="w-full max-w-sm mx-auto animate-fade-in px-1">
      {hadWrong ? (
        <div className="text-center mb-10">
          <p className="text-[13px] text-foreground/40 mb-3">{name}님</p>
          <h2 className="text-[22px] font-bold mb-4">
            전 문제 통과했지만
            <br />
            틀린 문제가 있었어요
          </h2>
          <p className="text-[14px] text-foreground/45 mt-3">
            한 번 더 풀어보면 완벽해질 거예요.
          </p>
        </div>
      ) : (
        <div className="text-center mb-10">
          <p className="text-[13px] text-foreground/40 mb-3">{name}님</p>
          <h2 className="text-[22px] font-bold mb-5">
            <span className="accent-underline">{totalQuestions}문제 전부 통과!</span>
          </h2>
          <p className="text-[15px] text-foreground/60 leading-relaxed">
            {quiz.slug} 조모임 내용을
            <br />
            완벽하게 이해하셨네요.
          </p>
          <p className="text-[14px] text-foreground/40 mt-4">
            조모임에서 만나요!
          </p>
        </div>
      )}

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
            onClick={handleShare}
            className="w-full py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 transition-opacity"
          >
            카톡에 자랑하기
          </button>
        )}
      </div>
    </div>
  );
}
