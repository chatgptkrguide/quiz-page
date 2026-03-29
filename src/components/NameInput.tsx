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
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <span className="text-6xl block mb-4">{quizEmoji}</span>
          <h1 className="text-2xl font-bold text-stone-900 mb-2">
            {quizTitle}
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed">
            {quizDescription}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-stone-700 mb-1.5"
            >
              이름을 입력해주세요
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
              autoFocus
              maxLength={20}
            />
          </div>
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full py-3 rounded-xl bg-stone-900 text-white font-medium hover:bg-stone-800 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors"
          >
            테스트 시작하기
          </button>
        </form>

        <p className="text-center text-xs text-stone-400 mt-6">
          총 문제 수와 소요 시간은 테스트마다 다릅니다
        </p>
      </div>
    </div>
  );
}
