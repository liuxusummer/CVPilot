import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClassMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border-transparent bg-[var(--accent)] text-white shadow-[0_4px_12px_rgba(79,70,229,0.2)] hover:bg-[var(--accent-strong)]",
  secondary:
    "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-soft)]",
  ghost:
    "border-transparent bg-transparent text-[var(--muted)] hover:bg-[rgba(15,23,42,0.04)] hover:text-[var(--foreground)]",
};

export function Button({
  children,
  className = "",
  type = "button",
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium tracking-[-0.01em] transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(79,70,229,0.18)] disabled:cursor-not-allowed disabled:opacity-60 ${variantClassMap[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
