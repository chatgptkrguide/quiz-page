"use client";

import { useState, useCallback, useRef } from "react";
import { Quiz, QuizQuestion } from "@/types/quiz";
import NameInput from "./NameInput";
import QuizQuestionComponent from "./QuizQuestion";
import QuizResult from "./QuizResult";

type Phase = "name" | "quiz" | "result";

const PASS_THRESHOLD = 0.6; // 60% 이상이면 통과

interface QuizPlayerProps {
  quiz: Quiz;
}

function calculateScore(
  questions: QuizQuestion[],
  answers: Record<string, string | boolean>
): number {
  return questions.reduce((score, q) => {
    const answer = answers[q.id];
    if (answer === undefined) return score;

    switch (q.type) {
      case "multiple-choice":
        return score + (answer === q.correctAnswer ? 1 : 0);
      case "ox":
        return score + (answer === q.correctAnswer ? 1 : 0);
      case "short-answer":
        return (
          score +
          (q.correctAnswers.some(
            (a) => a.toLowerCase() === String(answer).toLowerCase()
          )
            ? 1
            : 0)
        );
      default:
        return score;
    }
  }, 0);
}

export default function QuizPlayer({ quiz }: QuizPlayerProps) {
  const [phase, setPhase] = useState<Phase>("name");
  const [name, setName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | boolean>>({});
  const savedRef = useRef(false);

  const handleNameSubmit = useCallback((submittedName: string) => {
    setName(submittedName);
    setPhase("quiz");
  }, []);

  const saveResult = useCallback(
    async (finalAnswers: Record<string, string | boolean>) => {
      if (savedRef.current) return;
      savedRef.current = true;

      const score = calculateScore(quiz.questions, finalAnswers);
      const percentage = Math.round(
        (score / quiz.questions.length) * 100
      );

      try {
        await fetch("/api/results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug: quiz.slug,
            name,
            score,
            totalQuestions: quiz.questions.length,
            percentage,
            passed: percentage >= PASS_THRESHOLD * 100,
          }),
        });
      } catch {
        // 저장 실패해도 결과는 보여줌
      }
    },
    [name, quiz]
  );

  const handleAnswer = useCallback(
    (answer: string | boolean) => {
      const questionId = quiz.questions[currentIndex].id;
      const newAnswers = { ...answers, [questionId]: answer };
      setAnswers(newAnswers);

      setTimeout(() => {
        if (currentIndex + 1 < quiz.questions.length) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          saveResult(newAnswers);
          setPhase("result");
        }
      }, 1200);
    },
    [currentIndex, quiz.questions, answers, saveResult]
  );

  const handleRetry = useCallback(() => {
    setPhase("name");
    setCurrentIndex(0);
    setAnswers({});
    setName("");
    savedRef.current = false;
  }, []);

  const score = calculateScore(quiz.questions, answers);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 border-b border-stone-100">
        <p className="text-sm text-stone-400 text-center">
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
            key={quiz.questions[currentIndex].id}
            question={quiz.questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={quiz.questions.length}
            onAnswer={handleAnswer}
          />
        )}
        {phase === "result" && (
          <QuizResult
            quiz={quiz}
            name={name}
            score={score}
            totalQuestions={quiz.questions.length}
            onRetry={handleRetry}
          />
        )}
      </main>
    </div>
  );
}
