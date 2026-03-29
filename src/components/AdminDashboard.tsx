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
    const url = `${window.location.origin}/${slug}`;
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
    <div className="min-h-screen">
      <header className="border-b border-border px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-lg font-bold">퀴즈 관리</h1>
          <p className="text-xs text-muted mt-0.5">
            링크 복사, 응시 결과 확인
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        <section>
          <h2 className="text-xs font-medium text-muted mb-4 tracking-wide">
            테스트 링크
          </h2>
          <div className="space-y-2">
            {quizzes.map((quiz, i) => (
              <div
                key={quiz.slug}
                className={`bg-surface rounded-lg border border-border p-4 flex items-center justify-between ${
                  i === 0 ? "pl-5 border-l-3 border-l-accent" : ""
                }`}
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">
                    {quiz.title}
                  </p>
                  <p className="text-[11px] text-muted">
                    {quiz.questions.length}문제
                  </p>
                </div>
                <button
                  onClick={() => copyLink(quiz.slug)}
                  className={`shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    copiedSlug === quiz.slug
                      ? "bg-emerald-100 text-emerald-700"
                      : "border border-border text-muted hover:text-foreground hover:border-muted"
                  }`}
                >
                  {copiedSlug === quiz.slug ? "복사됨" : "링크 복사"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-xs font-medium text-muted tracking-wide">
              응시 결과
            </h2>
            <button
              onClick={fetchResults}
              className="text-[11px] text-muted/60 hover:text-muted transition-colors"
            >
              새로고침
            </button>
          </div>

          <div className="flex gap-1.5 mb-5 flex-wrap">
            <button
              onClick={() => setSelectedSlug(null)}
              className={`px-3 py-1 rounded-md text-xs transition-all ${
                selectedSlug === null
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              전체
            </button>
            {quizzes.map((quiz) => (
              <button
                key={quiz.slug}
                onClick={() => setSelectedSlug(quiz.slug)}
                className={`px-3 py-1 rounded-md text-xs transition-all ${
                  selectedSlug === quiz.slug
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {quiz.slug}
              </button>
            ))}
          </div>

          {loading ? (
            <p className="text-xs text-muted py-8 text-center">로딩 중...</p>
          ) : filteredResults.length === 0 ? (
            <div className="border border-dashed border-border rounded-lg py-12 text-center">
              <p className="text-sm text-muted">아직 응시 결과가 없습니다</p>
            </div>
          ) : (
            <div className="space-y-1.5">
              {filteredResults.map((r) => (
                <div
                  key={r.id}
                  className="bg-surface border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        r.passed ? "bg-emerald-500" : "bg-red-400"
                      }`}
                    />
                    <span className="text-sm font-medium truncate">
                      {r.name}
                    </span>
                    <span className="text-[11px] text-muted shrink-0">
                      {r.slug}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-muted">
                      {r.score}/{r.totalQuestions}
                    </span>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                        r.passed
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {r.passed ? "통과" : "미통과"}
                    </span>
                    <span className="text-[11px] text-muted/50 w-16 text-right">
                      {formatDate(r.submittedAt)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
