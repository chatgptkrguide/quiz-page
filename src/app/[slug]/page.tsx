import { notFound } from "next/navigation";
import { Metadata } from "next";
import { quizzes, getQuizBySlug } from "@/data/quizzes";
import QuizPlayer from "@/components/QuizPlayer";
import SikdanHajoHub from "@/components/SikdanHajoHub";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const HUB_SLUGS = ["식단하조"] as const;

export async function generateStaticParams() {
  return [
    ...quizzes.map((quiz) => ({ slug: quiz.slug })),
    ...HUB_SLUGS.map((slug) => ({ slug })),
  ];
}

const faviconMap: Record<string, string> = {
  "식단하조": "/favicon-식단하조.png?v=3",
};

const ogImageMap: Record<string, string> = {
  "식단하조": "/og-식단하조.png",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  if (decodedSlug === "식단하조") {
    return {
      title: "식단하조 — 조모임 소개 & 웹사이트 사용법",
      description:
        "식단하조 활동의 기본 이해와 웹사이트 사용법을 퀴즈로 확인해보세요.",
      icons: { icon: faviconMap["식단하조"] },
      openGraph: {
        title: "식단하조 가이드",
        description:
          "조모임 소개 + 웹사이트 사용법 — 원하는 퀴즈를 골라서 시작해요",
        type: "website",
        images: [
          {
            url: ogImageMap["식단하조"],
            width: 1200,
            height: 630,
            alt: "식단하조 가이드",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "식단하조 가이드",
        description: "조모임 소개 + 웹사이트 사용법",
        images: [ogImageMap["식단하조"]],
      },
    };
  }

  const quiz = getQuizBySlug(slug);
  if (!quiz) return { title: "퀴즈를 찾을 수 없습니다" };

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
  const decodedSlug = decodeURIComponent(slug);

  if (decodedSlug === "식단하조") {
    return <SikdanHajoHub />;
  }

  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    notFound();
  }

  return <QuizPlayer quiz={quiz} />;
}
