"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { Quiz, QuizQuestion } from "@/types/quiz";
import NameInput from "./NameInput";
import LessonView from "./LessonView";
import QuizQuestionComponent from "./QuizQuestion";
import QuizResult from "./QuizResult";

type Phase = "name" | "lesson" | "quiz" | "result";

interface QuizPlayerProps {
  quiz: Quiz;
}

interface SavedProgress {
  phase: Phase;
  name: string;
  currentIndex: number;
  savedResult: boolean;
  wrongIds: string[];
  retryMode: boolean;
}

function getStorageKey(slug: string): string {
  return `quiz-progress-${slug}`;
}

function loadProgress(slug: string): SavedProgress | null {
  try {
    const raw = localStorage.getItem(getStorageKey(slug));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveProgressData(slug: string, data: SavedProgress): void {
  try {
    localStorage.setItem(getStorageKey(slug), JSON.stringify(data));
  } catch {
    // storage full
  }
}

function clearProgress(slug: string): void {
  try {
    localStorage.removeItem(getStorageKey(slug));
  } catch {
    // ignore
  }
}

export default function QuizPlayer({ quiz }: QuizPlayerProps) {
  const [phase, setPhase] = useState<Phase>("name");
  const [name, setName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongIds, setWrongIds] = useState<Set<string>>(new Set());
  const [retryMode, setRetryMode] = useState(false);
  const [saveFailed, setSaveFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const savedRef = useRef(false);

  const hasLessons = quiz.lessons.length > 0;

  // 현재 풀어야 할 문제 목록
  const activeQuestions: QuizQuestion[] = useMemo(() => {
    if (retryMode) {
      return quiz.questions.filter((q) => wrongIds.has(q.id));
    }
    return quiz.questions;
  }, [retryMode, wrongIds, quiz.questions]);

  useEffect(() => {
    const saved = loadProgress(quiz.slug);
    if (saved && saved.phase !== "name") {
      setPhase(saved.phase);
      setName(saved.name);
      setCurrentIndex(saved.currentIndex);
      savedRef.current = saved.savedResult;
      if (saved.wrongIds) setWrongIds(new Set(saved.wrongIds));
      if (saved.retryMode) setRetryMode(true);
    }
    setLoaded(true);
  }, [quiz.slug]);

  useEffect(() => {
    if (!loaded) return;
    if (phase === "name") return;
    saveProgressData(quiz.slug, {
      phase,
      name,
      currentIndex,
      savedResult: savedRef.current,
      wrongIds: Array.from(wrongIds),
      retryMode,
    });
  }, [phase, name, currentIndex, loaded, quiz.slug, wrongIds, retryMode]);

  const handleNameSubmit = useCallback(
    (submittedName: string) => {
      setName(submittedName);
      setPhase(hasLessons ? "lesson" : "quiz");
    },
    [hasLessons]
  );

  const handleStartQuiz = useCallback(() => {
    setPhase("quiz");
  }, []);

  const handleBackToLesson = useCallback(() => {
    setPhase("lesson");
  }, []);

  const saveResult = useCallback(async () => {
    if (savedRef.current) return;

    try {
      const res = await fetch("/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: quiz.slug,
          name,
          score: quiz.questions.length,
          totalQuestions: quiz.questions.length,
          percentage: 100,
          passed: true,
        }),
      });
      if (res.ok) {
        savedRef.current = true;
        setSaveFailed(false);
      } else {
        setSaveFailed(true);
      }
    } catch {
      setSaveFailed(true);
    }
  }, [name, quiz]);

  const handleRetrySave = useCallback(async () => {
    setSaveFailed(false);
    await saveResult();
  }, [saveResult]);

  const handleCorrect = useCallback(() => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      saveResult();
      setPhase("result");
    }
  }, [currentIndex, activeQuestions.length, saveResult]);

  const handleWrong = useCallback((questionId: string) => {
    setWrongIds((prev) => new Set(prev).add(questionId));
  }, []);

  // 틀린 문제만 다시 풀기
  const handleRetryWrong = useCallback(() => {
    setRetryMode(true);
    setCurrentIndex(0);
    setPhase("quiz");
  }, []);

  const handleRetry = useCallback(() => {
    setPhase("name");
    setCurrentIndex(0);
    setName("");
    setWrongIds(new Set());
    setRetryMode(false);
    savedRef.current = false;
    setSaveFailed(false);
    clearProgress(quiz.slug);
  }, [quiz.slug]);

  if (!loaded) {
    return (
      <div data-theme={quiz.theme} className="h-[100dvh] flex items-center justify-center bg-background">
        <p className="text-[13px] text-foreground/30">로딩 중...</p>
      </div>
    );
  }

  if (phase === "lesson") {
    return (
      <div data-theme={quiz.theme}>
        <LessonView
          lessons={quiz.lessons}
          quizTitle="퀴즈"
          totalQuestions={quiz.questions.length}
          onStartQuiz={handleStartQuiz}
        />
      </div>
    );
  }

  const currentQuestion = activeQuestions[currentIndex];

  return (
    <div data-theme={quiz.theme} className="h-[100dvh] flex flex-col overflow-hidden bg-background text-foreground">
      <header className="py-3 px-6 border-b border-border/40 shrink-0">
        <div className="flex items-center justify-between">
          {phase === "quiz" && hasLessons ? (
            <button
              onClick={handleBackToLesson}
              className="text-[12px] text-foreground/35 hover:text-foreground/60 transition-colors"
            >
              설명 다시 보기
            </button>
          ) : (
            <div />
          )}
          <div className="flex items-center gap-2">
            <p className="text-[13px] text-foreground/50">
              {quiz.title}
            </p>
            {phase === "quiz" && (
              <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded font-medium">
                {retryMode ? "재풀이" : "퀴즈"}
              </span>
            )}
          </div>
          <div className="w-[80px]" />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-5 overflow-y-auto">
        {phase === "name" && (
          <NameInput
            quizTitle={quiz.title}
            quizLogo={quiz.logo}
            quizDescription={quiz.description}
            onSubmit={handleNameSubmit}
          />
        )}
        {phase === "quiz" && currentQuestion && (
          <QuizQuestionComponent
            key={`${currentQuestion.id}-${currentIndex}-${retryMode}`}
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={activeQuestions.length}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        )}
        {phase === "result" && (
          <QuizResult
            quiz={quiz}
            name={name}
            totalQuestions={quiz.questions.length}
            hadWrong={wrongIds.size > 0}
            onRetryWrong={handleRetryWrong}
            onRetry={handleRetry}
            saveFailed={saveFailed}
            onRetrySave={handleRetrySave}
          />
        )}
      </main>
    </div>
  );
}
