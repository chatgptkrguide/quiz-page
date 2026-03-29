"use client";

import { useState, useEffect } from "react";
import { quizzes } from "@/data/quizzes";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";

const STORAGE_KEY = "quiz-admin-password";

export default function Home() {
  const [password, setPassword] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      verifyPassword(saved).then((valid) => {
        if (valid) setPassword(saved);
        setChecking(false);
      });
    } else {
      setChecking(false);
    }
  }, []);

  const verifyPassword = async (pw: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      return res.ok;
    } catch {
      return false;
    }
  };

  const handleLogin = async (pw: string) => {
    const valid = await verifyPassword(pw);
    if (valid) {
      localStorage.setItem(STORAGE_KEY, pw);
      setPassword(pw);
      setError(null);
    } else {
      setError("비밀번호가 틀렸습니다");
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-stone-400">로딩 중...</p>
      </div>
    );
  }

  if (!password) {
    return <AdminLogin onLogin={handleLogin} error={error} />;
  }

  return <AdminDashboard quizzes={quizzes} password={password} />;
}
