import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import type { ResumeLink } from "@/types/resume";

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="mb-1.5 block text-xs font-medium text-slate-500">
      {children}
    </label>
  );
}

type LinksEditorProps = {
  items: ResumeLink[];
  onItemChange: (itemId: string, field: keyof ResumeLink, value: string) => void;
  onAdd: () => void;
  onRemove: (itemId: string) => void;
};

export function LinksEditor({ items, onItemChange, onAdd, onRemove }: LinksEditorProps) {
  return (
    <Section
      title="链接"
      eyebrow="展示"
      description="填写 GitHub、作品集或其他公开展示链接。"
      action={
        <Button variant="secondary" className="px-3 py-1.5 text-xs" onClick={onAdd}>
          添加一项
        </Button>
      }
    >
      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-sm text-slate-400">
            还没有链接，可以添加 GitHub、作品集或其他公开主页。
          </div>
        ) : null}

        {items.map((item, index) => (
          <div key={item.id} className="group relative space-y-3 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-slate-400">
                链接 {index + 1}
              </p>
              <button
                onClick={() => onRemove(item.id)}
                className="rounded p-1 text-slate-400 opacity-0 transition hover:bg-slate-100 hover:text-red-500 group-hover:opacity-100"
                title="删除"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <FieldLabel>链接名称</FieldLabel>
                <Input
                  value={item.label}
                  aria-label="链接名称"
                  placeholder="链接名称"
                  onChange={(event) => onItemChange(item.id, "label", event.target.value)}
                />
              </div>
              <div>
                <FieldLabel>链接地址</FieldLabel>
                <Input
                  value={item.url}
                  aria-label="链接地址"
                  placeholder="链接地址"
                  onChange={(event) => onItemChange(item.id, "url", event.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
