"use client";

import { useState, useEffect, useCallback } from "react";
import { Quiz } from "@/types/quiz";

interface ResultRecord {
  id: string;
  slug: string;
  name: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  submittedAt: string;
}

interface AdminDashboardProps {
  quizzes: Quiz[];
  password: string;
}

export default function AdminDashboard({
  quizzes,
  password,
}: AdminDashboardProps) {
  const [results, setResults] = useState<ResultRecord[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const fetchResults = useCallback(async () => {
    setLoading(true);
    try {
      const url = selectedSlug
        ? `/api/results?slug=${encodeURIComponent(selectedSlug)}`
        : "/api/results";
      const res = await fetch(url, {
        headers: { "x-admin-password": password },
      });
      if (res.ok) {
        const data = await res.json();
        setResults(data);
      }
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  }, [password, selectedSlug]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const copyLink = async (slug: string) => {
    const url = `${window.location.origin}/${encodeURIComponent(slug)}`;
    await navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const formatDate = (iso: string): string => {
    const d = new Date(iso);
    return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  };

  const filteredResults = selectedSlug
    ? results.filter((r) => r.slug === selectedSlug)
    : results;

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 px-6 py-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold text-stone-900">퀴즈 관리</h1>
          <p className="text-sm text-stone-400 mt-1">
            테스트 링크를 복사하고 응시 결과를 확인하세요
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Quiz Links */}
        <section>
          <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
            테스트 링크
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {quizzes.map((quiz) => (
              <div
                key={quiz.slug}
                className="bg-white rounded-xl border border-stone-200 p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl shrink-0">{quiz.emoji}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-stone-900 truncate">
                      {quiz.title}
                    </p>
                    <p className="text-xs text-stone-400">
                      {quiz.questions.length}문제
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyLink(quiz.slug)}
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    copiedSlug === quiz.slug
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  {copiedSlug === quiz.slug ? "복사됨!" : "링크 복사"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Filter */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider">
              응시 결과
            </h2>
            <button
              onClick={fetchResults}
              className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
            >
              새로고침
            </button>
          </div>

          <div className="flex gap-2 mb-4 flex-wrap">
            <button
              onClick={() => setSelectedSlug(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedSlug === null
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-500 border border-stone-200 hover:border-stone-300"
              }`}
            >
              전체
            </button>
            {quizzes.map((quiz) => (
              <button
                key={quiz.slug}
                onClick={() => setSelectedSlug(quiz.slug)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedSlug === quiz.slug
                    ? "bg-stone-900 text-white"
                    : "bg-white text-stone-500 border border-stone-200 hover:border-stone-300"
                }`}
              >
                {quiz.emoji} {quiz.slug}
              </button>
            ))}
          </div>

          {/* Results Table */}
          {loading ? (
            <div className="text-center py-12 text-stone-400 text-sm">
              로딩 중...
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="bg-white rounded-xl border border-stone-200 p-12 text-center">
              <p className="text-stone-400 text-sm">아직 응시 결과가 없습니다</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-100 bg-stone-50">
                      <th className="text-left px-4 py-3 text-stone-500 font-medium">
                        이름
                      </th>
                      <th className="text-left px-4 py-3 text-stone-500 font-medium">
                        테스트
                      </th>
                      <th className="text-center px-4 py-3 text-stone-500 font-medium">
                        점수
                      </th>
                      <th className="text-center px-4 py-3 text-stone-500 font-medium">
                        결과
                      </th>
                      <th className="text-right px-4 py-3 text-stone-500 font-medium">
                        응시일
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResults.map((r) => (
                      <tr
                        key={r.id}
                        className="border-b border-stone-50 last:border-0"
                      >
                        <td className="px-4 py-3 font-medium text-stone-900">
                          {r.name}
                        </td>
                        <td className="px-4 py-3 text-stone-500">{r.slug}</td>
                        <td className="px-4 py-3 text-center text-stone-700">
                          {r.score}/{r.totalQuestions}{" "}
                          <span className="text-stone-400">
                            ({r.percentage}%)
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                              r.passed
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {r.passed ? "통과" : "미통과"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right text-stone-400 text-xs">
                          {formatDate(r.submittedAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
