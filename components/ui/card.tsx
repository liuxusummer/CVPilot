import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 text-[var(--foreground)] shadow-[var(--shadow-ambient)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
