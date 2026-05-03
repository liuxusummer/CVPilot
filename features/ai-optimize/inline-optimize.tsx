"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { OptimizeCandidates } from "@/features/ai-optimize/optimize-candidates";
import { optimizeResumeText } from "@/lib/ai-optimize";
import type { AiOptimizeCandidate, AiOptimizeSectionType } from "@/types/ai-optimize";

type InlineOptimizeProps = {
  sectionType: AiOptimizeSectionType;
  content: string;
  onApply: (value: string) => void;
};

export function InlineOptimize({ sectionType, content, onApply }: InlineOptimizeProps) {
  const [candidates, setCandidates] = useState<AiOptimizeCandidate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasContent = content.trim().length > 0;

  async function handleOptimize() {
    if (!hasContent || isLoading) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await optimizeResumeText({ sectionType, content });
      setCandidates(result.candidates);
    } catch (optimizeError) {
      setError(optimizeError instanceof Error ? optimizeError.message : "AI 润色失败，请稍后重试。");
      setCandidates([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-3 rounded-xl border border-[rgba(79,70,229,0.16)] bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--muted-soft)]">AI 润色</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            生成三种定向改写建议：更专业、更简洁、更突出成果。
          </p>
        </div>
        <Button
          variant="secondary"
          className="px-3 py-1.5 text-xs"
          onClick={handleOptimize}
          disabled={!hasContent || isLoading}
        >
          {isLoading ? "润色中..." : "AI 润色"}
        </Button>
      </div>

      {!hasContent ? (
        <p className="text-sm text-[var(--muted)]">请先输入内容，再生成润色建议。</p>
      ) : null}

      {error ? <p className="text-sm text-rose-500">{error}</p> : null}

      {candidates.length > 0 ? <OptimizeCandidates candidates={candidates} onApply={onApply} /> : null}
    </div>
  );
}
