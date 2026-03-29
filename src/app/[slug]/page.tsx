import { notFound } from "next/navigation";
import { Metadata } from "next";
import { quizzes, getQuizBySlug } from "@/data/quizzes";
import QuizPlayer from "@/components/QuizPlayer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return quizzes.map((quiz) => ({
    slug: quiz.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) return { title: "퀴즈를 찾을 수 없습니다" };

  return {
    title: quiz.title,
    description: quiz.description,
  };
}

export default async function QuizPage({ params }: PageProps) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    notFound();
  }

  return <QuizPlayer quiz={quiz} />;
}
