import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { error: "관리자 비밀번호가 설정되지 않았습니다" },
        { status: 500 }
      );
    }

    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "비밀번호가 틀렸습니다" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "인증 실패" }, { status: 500 });
  }
}
