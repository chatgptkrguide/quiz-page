import Image from "next/image";

interface HubCard {
  href: string;
  badge: string;
  title: string;
  description: string;
  lessonCount: number;
  questionCount: number;
}

const CARDS: HubCard[] = [
  {
    href: "/식단하조-소개",
    badge: "① 기본 이해",
    title: "조모임 소개 & 규칙",
    description:
      "식단하조가 뭔지, 기록 방법, 벌금 규칙, 활동 기간까지 한 번에 이해해요.",
    lessonCount: 6,
    questionCount: 10,
  },
  {
    href: "/식단하조-사용법",
    badge: "② 웹 사용법",
    title: "사이트 기능 전부 익히기",
    description:
      "홈 · 리포트 · 음식 · 목표 + 계산기 + 카톡 숨은 기능까지 실제 화면으로 배워요.",
    lessonCount: 10,
    questionCount: 15,
  },
];

export default function SikdanHajoHub(): React.ReactElement {
  return (
    <div className="min-h-[100dvh] flex flex-col overflow-y-auto bg-background text-foreground">
      <main className="flex-1 flex flex-col items-center px-5 py-10">
        <div className="w-full max-w-sm">
          <header className="flex flex-col items-center mb-8">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/logo-식단하조.png"
                alt="식단하조 로고"
                fill
                sizes="96px"
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-[22px] font-bold text-center mb-2 leading-tight">
              식단하조 가이드
            </h1>
            <p className="text-[13px] text-foreground/50 text-center leading-relaxed whitespace-pre-line">
              {"원하는 퀴즈를 골라 시작하세요.\n둘 다 풀면 완벽!"}
            </p>
          </header>

          <nav className="space-y-3">
            {CARDS.map((card) => (
              <a
                key={card.href}
                href={encodeURI(card.href)}
                className="block rounded-xl border border-border/60 bg-surface p-5 hover:border-accent/60 hover:shadow-sm transition-all active:scale-[0.99]"
              >
                <span className="inline-block text-[11px] font-bold text-accent bg-accent/8 px-2 py-0.5 rounded-md mb-2">
                  {card.badge}
                </span>
                <h2 className="text-[16px] font-bold mb-1.5 leading-tight">
                  {card.title}
                </h2>
                <p className="text-[13px] text-foreground/55 leading-snug mb-3">
                  {card.description}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-foreground/40">
                  <span>📖 레슨 {card.lessonCount}개</span>
                  <span>✏️ 퀴즈 {card.questionCount}문제</span>
                  <span className="ml-auto text-accent font-semibold">
                    시작하기 →
                  </span>
                </div>
              </a>
            ))}
          </nav>

          <p className="text-center text-[11px] text-foreground/30 mt-8">
            처음이면 <span className="font-medium text-foreground/50">① 기본 이해</span>
            부터 추천해요.
          </p>
        </div>
      </main>
    </div>
  );
}
