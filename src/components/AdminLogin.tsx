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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xs animate-fade-in">
        <div className="mb-8">
          <h1 className="text-lg font-bold">관리자</h1>
          <p className="text-xs text-muted mt-1">
            비밀번호를 입력하세요
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="w-full px-4 py-3 rounded-lg border-2 border-border bg-surface text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
            autoFocus
          />
          {error && (
            <p className="text-xs text-accent">{error}</p>
          )}
          <button
            type="submit"
            disabled={!password.trim()}
            className="w-full py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
