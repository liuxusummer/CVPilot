import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";

type DialogProps = {
  title: string;
  children: ReactNode;
};

export function Dialog({ title, children }: DialogProps) {
  return (
    <Card className="space-y-4 overflow-hidden border-[var(--border)] bg-[var(--surface)] shadow-none">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(79,70,229,0.16)] bg-[rgba(79,70,229,0.08)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
          AI
        </span>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted-soft)]">智能助手模块</p>
          <h3 className="mt-1 text-base font-semibold tracking-[-0.02em] text-[var(--foreground)]">{title}</h3>
        </div>
      </div>
      <div>{children}</div>
    </Card>
  );
}
