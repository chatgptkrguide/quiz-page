"use client";

import { useState } from "react";
import { quizzes } from "@/data/quizzes";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";

export default function Home() {
  const [password, setPassword] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (pw: string) => {
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });

      if (res.ok) {
        setPassword(pw);
        setError(null);
      } else {
        const data = await res.json();
        setError(data.error || "비밀번호가 틀렸습니다");
      }
    } catch {
      setError("로그인에 실패했습니다");
    }
  };

  if (!password) {
    return <AdminLogin onLogin={handleLogin} error={error} />;
  }

  return <AdminDashboard quizzes={quizzes} password={password} />;
}
