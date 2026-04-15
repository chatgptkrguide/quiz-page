import Image from "next/image";

interface HubButton {
  href: string;
  label: string;
}

const BUTTONS: HubButton[] = [
  { href: "/식단하조-소개", label: "조모임 소개" },
  { href: "/식단하조-사용법", label: "사이트 사용법" },
];

export default function SikdanHajoHub(): React.ReactElement {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-10">
            <div className="relative w-20 h-20 mb-3">
              <Image
                src="/logo-식단하조.png"
                alt="식단하조 로고"
                fill
                sizes="80px"
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-[20px] font-bold text-center">
              식단하조 가이드
            </h1>
          </div>

          <nav className="space-y-3">
            {BUTTONS.map((btn) => (
              <a
                key={btn.href}
                href={encodeURI(btn.href)}
                className="block w-full py-5 rounded-xl bg-foreground text-background text-center text-[16px] font-bold hover:opacity-90 active:scale-[0.98] transition-all"
              >
                {btn.label}
              </a>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}
