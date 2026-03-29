import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-6xl block mb-4">🔍</span>
        <h1 className="text-2xl font-bold text-stone-900 mb-2">
          테스트를 찾을 수 없어요
        </h1>
        <p className="text-stone-500 text-sm mb-6">
          잘못된 주소이거나 삭제된 테스트입니다
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors"
        >
          전체 테스트 보기
        </Link>
      </div>
    </div>
  );
}
