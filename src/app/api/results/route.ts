import { NextRequest, NextResponse } from "next/server";
import { saveResult, getAllResults, getResultsBySlug } from "@/lib/storage";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { slug, name, score, totalQuestions, percentage, passed } = body;

    if (!slug || !name || score === undefined || !totalQuestions) {
      return NextResponse.json(
        { error: "필수 필드가 누락되었습니다" },
        { status: 400 }
      );
    }

    const result = await saveResult({
      slug,
      name,
      score,
      totalQuestions,
      percentage,
      passed,
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
  const password = request.headers.get("x-admin-password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
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
