"use client";

import { useState } from "react";
import Image from "next/image";

interface NameInputProps {
  quizTitle: string;
  quizLogo?: string;
  quizDescription: string;
  onSubmit: (name: string) => void;
}

export default function NameInput({
  quizTitle,
  quizLogo,
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
    <div className="min-h-[75vh] flex items-center justify-center px-5">
      <div className="w-full max-w-sm animate-fade-in">
        <div className="mb-10">
          {quizLogo && (
            <Image
              src={quizLogo}
              alt={quizTitle}
              width={48}
              height={48}
              className="mb-5 rounded-lg"
            />
          )}
          <h1 className="text-[22px] font-bold leading-snug mb-3">
            {quizTitle}
          </h1>
          <p className="text-[15px] text-foreground/60 leading-relaxed">
            {quizDescription}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-[13px] font-medium text-foreground/50 mb-2"
            >
              이름을 입력해주세요
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
              className="w-full px-4 py-3.5 rounded-lg border-2 border-border bg-surface text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all text-[15px]"
              autoFocus
              maxLength={20}
            />
          </div>
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full py-3.5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:opacity-90 disabled:opacity-20 disabled:cursor-not-allowed transition-opacity"
          >
            설명 읽기
          </button>
        </form>

        <p className="text-[12px] text-foreground/30 mt-8">
          설명을 읽은 뒤, 퀴즈로 확인합니다
        </p>
      </div>
    </div>
  );
}
