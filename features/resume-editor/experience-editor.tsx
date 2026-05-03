import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";
import type { ResumeExperienceItem } from "@/types/resume";

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="mb-1.5 block text-xs font-medium text-slate-500">
      {children}
    </label>
  );
}

type ExperienceEditorProps = {
  items: ResumeExperienceItem[];
  onItemChange: (itemId: string, field: keyof ResumeExperienceItem, value: string) => void;
  onAdd: () => void;
  onRemove: (itemId: string) => void;
};

export function ExperienceEditor({ items, onItemChange, onAdd, onRemove }: ExperienceEditorProps) {
  return (
    <Section
      title="工作经验"
      eyebrow="经历"
      description="填写公司、职位、时间和成果描述。"
      action={
        <Button variant="secondary" className="px-3 py-1.5 text-xs" onClick={onAdd}>
          添加一项
        </Button>
      }
    >
      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-sm text-slate-400">
            还没有工作经历，添加一项来补齐简历主体内容。
          </div>
        ) : null}

        {items.map((item, index) => (
          <div key={item.id} className="group relative space-y-3 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-slate-400">
                工作经历 {index + 1}
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
                <FieldLabel>公司</FieldLabel>
                <Input
                  value={item.company}
                  aria-label="公司"
                  placeholder="公司名称"
                  onChange={(event) => onItemChange(item.id, "company", event.target.value)}
                />
              </div>
              <div>
                <FieldLabel>职位</FieldLabel>
                <Input
                  value={item.role}
                  aria-label="职位"
                  placeholder="职位名称"
                  onChange={(event) => onItemChange(item.id, "role", event.target.value)}
                />
              </div>
              <div>
                <FieldLabel>开始时间</FieldLabel>
                <Input
                  value={item.startDate}
                  aria-label="工作开始时间"
                  placeholder="开始时间"
                  onChange={(event) => onItemChange(item.id, "startDate", event.target.value)}
                />
              </div>
              <div>
                <FieldLabel>结束时间</FieldLabel>
                <Input
                  value={item.endDate}
                  aria-label="工作结束时间"
                  placeholder="结束时间"
                  onChange={(event) => onItemChange(item.id, "endDate", event.target.value)}
                />
              </div>
            </div>

            <div>
              <FieldLabel>工作描述</FieldLabel>
              <Textarea
                value={item.description}
                aria-label="工作描述"
                rows={4}
                placeholder="描述职责范围、项目背景和可量化成果……"
                onChange={(event) => onItemChange(item.id, "description", event.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
