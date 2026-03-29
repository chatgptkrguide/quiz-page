"use client";

import { useState } from "react";

interface NameInputProps {
  quizTitle: string;
  quizEmoji: string;
  quizDescription: string;
  onSubmit: (name: string) => void;
}

export default function NameInput({
  quizTitle,
  quizEmoji,
  quizDescription,
  onSubmit,
}: NameInputProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm animate-fade-in">
        <div className="mb-10">
          <span className="text-5xl block mb-5">{quizEmoji}</span>
          <h1 className="text-2xl font-bold leading-snug mb-2">
            {quizTitle}
          </h1>
          <p className="text-muted text-sm leading-relaxed max-w-[280px]">
            {quizDescription}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-muted mb-2 tracking-wide"
            >
              이름
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
              className="w-full px-4 py-3 rounded-lg border-2 border-border bg-surface text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
              autoFocus
              maxLength={20}
            />
          </div>
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            시작
          </button>
        </form>

        <p className="text-[11px] text-muted/50 mt-8">
          설명을 먼저 읽고, 퀴즈로 확인합니다
        </p>
      </div>
    </div>
  );
}
