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

const faviconMap: Record<string, string> = {
  "식단하조": "/favicon-식단하조.png?v=2",
};

const ogImageMap: Record<string, string> = {
  "식단하조": "/logo-식단하조.png",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) return { title: "퀴즈를 찾을 수 없습니다" };

  const decodedSlug = decodeURIComponent(slug);
  const favicon = faviconMap[decodedSlug];
  const ogImage = ogImageMap[decodedSlug] ?? quiz.logo;

  return {
    title: quiz.title,
    description: quiz.description?.replace(/\n/g, " "),
    ...(favicon && {
      icons: { icon: favicon },
    }),
    openGraph: {
      title: quiz.title,
      description: quiz.description?.replace(/\n/g, " "),
      type: "website",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: quiz.title }],
      }),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: quiz.title,
      description: quiz.description?.replace(/\n/g, " "),
      ...(ogImage && { images: [ogImage] }),
    },
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
