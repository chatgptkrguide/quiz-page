export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div>
        <h1 className="text-lg font-bold mb-1">
          테스트를 찾을 수 없어요
        </h1>
        <p className="text-sm text-muted">
          잘못된 주소이거나 삭제된 테스트입니다
        </p>
      </div>
    </div>
  );
}
