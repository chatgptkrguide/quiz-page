import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import {
  saveResult,
  getAllResults,
  getResultsBySlug,
  deleteResult,
} from "@/lib/storage";
import { quizzes } from "@/data/quizzes";

function verifyAdmin(request: NextRequest): boolean {
  const password = request.headers.get("x-admin-password");
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || !password) return false;

  try {
    const bufA = Buffer.from(password, "utf-8");
    const bufB = Buffer.from(adminPassword, "utf-8");
    if (bufA.length !== bufB.length) {
      timingSafeEqual(bufA, bufA);
      return false;
    }
    return timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

// 허용된 slug 목록
const validSlugs = new Set(quizzes.map((q) => q.slug));

function sanitize(str: string, maxLen: number): string {
  return String(str).trim().slice(0, maxLen).replace(/[<>"'&]/g, "");
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { slug, name, score, totalQuestions, percentage, passed } = body;

    // 필수 필드
    if (!slug || !name || score === undefined || !totalQuestions) {
      return NextResponse.json(
        { error: "필수 필드가 누락되었습니다" },
        { status: 400 }
      );
    }

    // slug 화이트리스트 검증
    if (!validSlugs.has(slug)) {
      return NextResponse.json(
        { error: "유효하지 않은 퀴즈입니다" },
        { status: 400 }
      );
    }

    // 타입 및 범위 검증
    const safeName = sanitize(name, 20);
    if (!safeName) {
      return NextResponse.json(
        { error: "유효하지 않은 이름입니다" },
        { status: 400 }
      );
    }

    const safeScore = Number(score);
    const safeTotalQuestions = Number(totalQuestions);
    const safePercentage = Number(percentage);

    if (
      !Number.isInteger(safeScore) ||
      !Number.isInteger(safeTotalQuestions) ||
      safeScore < 0 ||
      safeScore > safeTotalQuestions ||
      safeTotalQuestions <= 0 ||
      safeTotalQuestions > 100 ||
      safePercentage < 0 ||
      safePercentage > 100
    ) {
      return NextResponse.json(
        { error: "유효하지 않은 점수입니다" },
        { status: 400 }
      );
    }

    const result = await saveResult({
      slug,
      name: safeName,
      score: safeScore,
      totalQuestions: safeTotalQuestions,
      percentage: safePercentage,
      passed: !!passed,
    });

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "결과 저장에 실패했습니다" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  if (!verifyAdmin(request)) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }

  try {
    const slug = request.nextUrl.searchParams.get("slug");
    const results = slug
      ? await getResultsBySlug(slug)
      : await getAllResults();

    return NextResponse.json(results);
  } catch {
    return NextResponse.json(
      { error: "결과 조회에 실패했습니다" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  if (!verifyAdmin(request)) {
    return NextResponse.json({ error: "인증 실패" }, { status: 401 });
  }

  try {
    const { slug, id } = await request.json();

    if (
      !slug ||
      !id ||
      typeof slug !== "string" ||
      typeof id !== "string" ||
      !validSlugs.has(slug)
    ) {
      return NextResponse.json(
        { error: "유효하지 않은 요청입니다" },
        { status: 400 }
      );
    }

    const deleted = await deleteResult(slug, id);

    if (!deleted) {
      return NextResponse.json(
        { error: "결과를 찾을 수 없습니다" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "삭제에 실패했습니다" },
      { status: 500 }
    );
  }
}
