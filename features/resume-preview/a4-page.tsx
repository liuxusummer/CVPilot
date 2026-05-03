import type { ReactNode } from "react";

type A4PageProps = {
  children: ReactNode;
};

export function A4Page({ children }: A4PageProps) {
  return (
    <div className="flex justify-center">
      <div
        className="preview-paper-wrapper w-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-lg"
        style={{ maxWidth: "210mm" }}
      >
        <div
          className="preview-paper w-full overflow-hidden"
          style={{
            padding: "6mm 8mm",
            minHeight: "297mm",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
