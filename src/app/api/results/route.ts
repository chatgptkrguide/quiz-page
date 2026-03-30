import { NextRequest, NextResponse } from "next/server";
import {
  saveResult,
  getAllResults,
  getResultsBySlug,
  deleteResult,
} from "@/lib/storage";

function verifyAdmin(request: NextRequest): boolean {
  const password = request.headers.get("x-admin-password");
  const adminPassword = process.env.ADMIN_PASSWORD;
  return !!adminPassword && password === adminPassword;
}

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

    if (!slug || !id) {
      return NextResponse.json(
        { error: "slug와 id가 필요합니다" },
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
