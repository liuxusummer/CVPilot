import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  eyebrow?: string;
  action?: ReactNode;
  className?: string;
};

export function Section({ id, title, description, children, eyebrow, action, className = "" }: SectionProps) {
  return (
    <section id={id} className={`space-y-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm ${className}`.trim()}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-5 w-1 rounded-full bg-indigo-500" />
          {eyebrow ? (
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{eyebrow}</p>
              <h2 className="mt-1 text-[0.95rem] font-semibold tracking-[-0.02em] text-slate-800">
                {title}
              </h2>
            </div>
          ) : (
            <h2 className="mt-0.5 text-[0.95rem] font-semibold tracking-[-0.02em] text-slate-800">
              {title}
            </h2>
          )}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      <div>
        {description ? (
          <p className="text-sm leading-6 text-slate-500">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
