"use client";

import { useState } from "react";

interface AdminLoginProps {
  onLogin: (password: string) => void;
  error: string | null;
}

export default function AdminLogin({ onLogin, error }: AdminLoginProps) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      onLogin(password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-stone-50">
      <div className="w-full max-w-sm animate-fade-in">
        <div className="text-center mb-8">
          <span className="text-4xl block mb-3">🔐</span>
          <h1 className="text-xl font-bold text-stone-900">관리자 로그인</h1>
          <p className="text-sm text-stone-400 mt-1">
            비밀번호를 입력하세요
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
            autoFocus
          />
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={!password.trim()}
            className="w-full py-3 rounded-xl bg-stone-900 text-white font-medium hover:bg-stone-800 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
