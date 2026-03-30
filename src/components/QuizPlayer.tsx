"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Quiz } from "@/types/quiz";
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

function saveProgress(slug: string, data: SavedProgress): void {
  try {
    localStorage.setItem(getStorageKey(slug), JSON.stringify(data));
  } catch {
    // storage full or unavailable
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
  const [saveFailed, setSaveFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const savedRef = useRef(false);

  const hasLessons = quiz.lessons.length > 0;

  // 진행상황 복원
  useEffect(() => {
    const saved = loadProgress(quiz.slug);
    if (saved && saved.phase !== "name") {
      setPhase(saved.phase);
      setName(saved.name);
      setCurrentIndex(saved.currentIndex);
      savedRef.current = saved.savedResult;
    }
    setLoaded(true);
  }, [quiz.slug]);

  // 진행상황 저장 (phase, name, currentIndex 변경 시)
  useEffect(() => {
    if (!loaded) return;
    if (phase === "name") return;
    saveProgress(quiz.slug, {
      phase,
      name,
      currentIndex,
      savedResult: savedRef.current,
    });
  }, [phase, name, currentIndex, loaded, quiz.slug]);

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

  // 설명 다시 보기
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
    if (currentIndex + 1 < quiz.questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      saveResult();
      setPhase("result");
    }
  }, [currentIndex, quiz.questions.length, saveResult]);

  const handleRetry = useCallback(() => {
    setPhase("name");
    setCurrentIndex(0);
    setName("");
    savedRef.current = false;
    setSaveFailed(false);
    clearProgress(quiz.slug);
  }, [quiz.slug]);

  // 로딩 중
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
                퀴즈
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
        {phase === "quiz" && (
          <QuizQuestionComponent
            key={`${quiz.questions[currentIndex].id}-${currentIndex}`}
            question={quiz.questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={quiz.questions.length}
            onCorrect={handleCorrect}
          />
        )}
        {phase === "result" && (
          <QuizResult
            quiz={quiz}
            name={name}
            totalQuestions={quiz.questions.length}
            onRetry={handleRetry}
            saveFailed={saveFailed}
            onRetrySave={handleRetrySave}
          />
        )}
      </main>
    </div>
  );
}
