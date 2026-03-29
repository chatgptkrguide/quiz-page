import Link from "next/link";
import { quizzes } from "@/data/quizzes";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="pt-16 pb-10 px-6 text-center">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          퀴즈 테스트
        </h1>
        <p className="text-stone-500 text-sm">
          다양한 테스트를 풀어보세요
        </p>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        <div className="space-y-4">
          {quizzes.map((quiz, i) => (
            <Link
              key={quiz.slug}
              href={`/${encodeURIComponent(quiz.slug)}`}
              className="block group"
            >
              <div
                className="bg-white rounded-2xl border border-stone-200 p-6 hover:border-stone-300 hover:shadow-sm transition-all"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl shrink-0">{quiz.emoji}</span>
                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold text-stone-900 group-hover:text-stone-700 transition-colors">
                      {quiz.title}
                    </h2>
                    <p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      {quiz.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs text-stone-400">
                        {quiz.questions.length}문제
                      </span>
                      <span className="w-1 h-1 bg-stone-300 rounded-full" />
                      <span className="text-xs text-stone-400">
                        약 {Math.ceil(quiz.questions.length * 0.5)}분 소요
                      </span>
                    </div>
                  </div>
                  <span className="text-stone-300 group-hover:text-stone-500 transition-colors ml-auto shrink-0">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
