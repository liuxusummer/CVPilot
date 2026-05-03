import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = "", rows = 4, ...props }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={`w-full rounded-lg border border-[var(--border)] bg-slate-50 px-3.5 py-2.5 text-sm leading-6 text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted-soft)] focus:border-[var(--accent)] focus:bg-white focus:ring-2 focus:ring-[rgba(79,70,229,0.12)] ${className}`.trim()}
      {...props}
    />
  );
}
