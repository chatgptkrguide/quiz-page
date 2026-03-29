"use client";

import { Quiz, QuizResult as QuizResultType } from "@/types/quiz";

interface QuizResultProps {
  quiz: Quiz;
  name: string;
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

const PASS_THRESHOLD = 60;

function getResult(results: QuizResultType[], score: number): QuizResultType {
  return (
    results.find((r) => score >= r.minScore && score <= r.maxScore) ??
    results[results.length - 1]
  );
}

export default function QuizResult({
  quiz,
  name,
  score,
  totalQuestions,
  onRetry,
}: QuizResultProps) {
  const result = getResult(quiz.results, score);
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= PASS_THRESHOLD;

  const handleShare = async () => {
    const text = `[${quiz.title}]\n${name}님의 결과: ${result.emoji} ${result.title}\n${score}/${totalQuestions}문제 정답 (${percentage}%)\n${passed ? "✅ 통과!" : "❌ 미통과"}\n\n나도 테스트하기 👉 ${window.location.href}`;

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
    <div className="w-full max-w-md mx-auto text-center animate-fade-in">
      <div className="mb-6">
        <span className="text-7xl block mb-4 animate-slide-up">
          {result.emoji}
        </span>
        <p className="text-sm text-stone-400 mb-1">{name}님의 결과</p>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">
          {result.title}
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          {result.description}
        </p>
      </div>

      {/* Pass/Fail Badge */}
      <div
        className={`inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6 ${
          passed
            ? "bg-emerald-100 text-emerald-700"
            : "bg-red-100 text-red-600"
        }`}
      >
        {passed ? "✅ 통과" : "❌ 미통과"} (기준: {PASS_THRESHOLD}%)
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 p-6 mb-6">
        <div className="flex items-center justify-center gap-8">
          <div>
            <p className="text-3xl font-bold text-stone-900">
              {score}
              <span className="text-lg text-stone-400">/{totalQuestions}</span>
            </p>
            <p className="text-xs text-stone-400 mt-1">정답 수</p>
          </div>
          <div className="w-px h-12 bg-stone-200" />
          <div>
            <p className="text-3xl font-bold text-stone-900">{percentage}%</p>
            <p className="text-xs text-stone-400 mt-1">정답률</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleShare}
          className="w-full py-3 rounded-xl bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors"
        >
          결과 공유하기
        </button>
        <button
          onClick={onRetry}
          className="w-full py-3 rounded-xl border-2 border-stone-200 text-stone-700 font-medium hover:border-stone-400 transition-colors"
        >
          다시 풀기
        </button>
      </div>
    </div>
  );
}
