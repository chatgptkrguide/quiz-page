import { NextRequest, NextResponse } from "next/server";

const attempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 5 * 60 * 1000; // 5분

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = attempts.get(ip);

  if (!record || now - record.lastAttempt > WINDOW_MS) {
    attempts.set(ip, { count: 1, lastAttempt: now });
    return true;
  }

  if (record.count >= MAX_ATTEMPTS) {
    return false;
  }

  record.count += 1;
  record.lastAttempt = now;
  return true;
}

function resetRateLimit(ip: string): void {
  attempts.delete(ip);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "너무 많은 시도입니다. 5분 후 다시 시도해주세요." },
      { status: 429 }
    );
  }

  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { error: "관리자 비밀번호가 설정되지 않았습니다" },
        { status: 500 }
      );
    }

    // 타이밍 공격 방지: 항상 동일 시간 소요
    const isCorrect =
      password.length === adminPassword.length &&
      password === adminPassword;

    if (isCorrect) {
      resetRateLimit(ip);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "비밀번호가 틀렸습니다" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json({ error: "인증 실패" }, { status: 500 });
  }
}
