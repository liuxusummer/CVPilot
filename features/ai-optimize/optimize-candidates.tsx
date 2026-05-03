import { Button } from "@/components/ui/button";
import type { AiOptimizeCandidate } from "@/types/ai-optimize";

type OptimizeCandidatesProps = {
  candidates: AiOptimizeCandidate[];
  onApply?: (value: string) => void;
};

export function OptimizeCandidates({ candidates, onApply }: OptimizeCandidatesProps) {
  return (
    <div className="space-y-2">
      {candidates.map((candidate, index) => (
        <div
          key={`${candidate.tone}-${index}`}
          className="rounded-xl border border-[var(--border)] bg-slate-50 p-4 transition hover:border-[rgba(79,70,229,0.24)] hover:bg-[rgba(79,70,229,0.03)]"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--muted-soft)]">
                候选 {index + 1} · {candidate.label}
              </p>
              <p className="mt-3 leading-6 text-[var(--foreground)]">{candidate.content}</p>
            </div>
            {onApply ? (
              <Button
                variant="ghost"
                className="px-3 py-1.5 text-[11px] uppercase tracking-[0.18em]"
                onClick={() => onApply(candidate.content)}
              >
                应用
              </Button>
            ) : (
              <span className="rounded-lg border border-[var(--border)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                应用
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
