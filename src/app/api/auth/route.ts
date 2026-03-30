import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";

function safeCompare(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a, "utf-8");
    const bufB = Buffer.from(b, "utf-8");
    if (bufA.length !== bufB.length) {
      // 길이가 달라도 동일 시간 소요되도록 더미 비교
      timingSafeEqual(bufA, bufA);
      return false;
    }
    return timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

// serverless 환경에서도 동작하는 rate limit (짧은 수명이지만 없는 것보단 나음)
const attempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 5 * 60 * 1000;

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

  if (record.count >= MAX_ATTEMPTS) return false;

  record.count += 1;
  record.lastAttempt = now;
  return true;
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
        { error: "인증 실패" },
        { status: 500 }
      );
    }

    if (typeof password !== "string" || password.length > 100) {
      return NextResponse.json({ error: "인증 실패" }, { status: 401 });
    }

    if (safeCompare(password, adminPassword)) {
      attempts.delete(ip);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "비밀번호가 틀렸습니다" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "인증 실패" }, { status: 500 });
  }
}
