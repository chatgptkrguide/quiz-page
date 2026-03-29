"use client";

import { useState, useCallback, useRef } from "react";
import { Quiz } from "@/types/quiz";
import NameInput from "./NameInput";
import LessonView from "./LessonView";
import QuizQuestionComponent from "./QuizQuestion";
import QuizResult from "./QuizResult";

type Phase = "name" | "lesson" | "quiz" | "result";

interface QuizPlayerProps {
  quiz: Quiz;
}

export default function QuizPlayer({ quiz }: QuizPlayerProps) {
  const [phase, setPhase] = useState<Phase>("name");
  const [name, setName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const savedRef = useRef(false);

  const hasLessons = quiz.lessons.length > 0;

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

  const saveResult = useCallback(async () => {
    if (savedRef.current) return;
    savedRef.current = true;

    try {
      await fetch("/api/results", {
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
    } catch {
      // 저장 실패해도 결과는 보여줌
    }
  }, [name, quiz]);

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
  }, []);

  if (phase === "lesson") {
    return (
      <LessonView
        lessons={quiz.lessons}
        quizTitle="퀴즈"
        totalQuestions={quiz.questions.length}
        onStartQuiz={handleStartQuiz}
      />
    );
  }

  return (
    <div className="h-[100dvh] flex flex-col overflow-hidden">
      <header className="py-3 px-6 border-b border-border/40 shrink-0">
        <div className="flex items-center justify-center gap-2.5">
          <p className="text-[13px] text-foreground/50 text-center">
            {quiz.title}
          </p>
          {phase === "quiz" && (
            <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded font-medium">
              퀴즈
            </span>
          )}
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
          />
        )}
      </main>
    </div>
  );
}
