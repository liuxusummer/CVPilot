import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-[var(--border)] bg-slate-50 px-3.5 py-2.5 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted-soft)] focus:border-[var(--accent)] focus:bg-white focus:ring-2 focus:ring-[rgba(79,70,229,0.12)] ${className}`.trim()}
      {...props}
    />
  );
}
