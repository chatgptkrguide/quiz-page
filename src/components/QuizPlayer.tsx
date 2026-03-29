"use client";

import { useState, useCallback, useRef } from "react";
import { Quiz } from "@/types/quiz";
import NameInput from "./NameInput";
import QuizQuestionComponent from "./QuizQuestion";
import QuizResult from "./QuizResult";

type Phase = "name" | "quiz" | "result";

interface QuizPlayerProps {
  quiz: Quiz;
}

export default function QuizPlayer({ quiz }: QuizPlayerProps) {
  const [phase, setPhase] = useState<Phase>("name");
  const [name, setName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const savedRef = useRef(false);

  const handleNameSubmit = useCallback((submittedName: string) => {
    setName(submittedName);
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

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 border-b border-border/50">
        <p className="text-sm text-muted text-center font-serif tracking-wide">
          {quiz.emoji} {quiz.title}
        </p>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        {phase === "name" && (
          <NameInput
            quizTitle={quiz.title}
            quizEmoji={quiz.emoji}
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
