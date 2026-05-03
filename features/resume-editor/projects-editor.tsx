import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";
import type { ResumeProjectItem } from "@/types/resume";

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="mb-1.5 block text-xs font-medium text-slate-500">
      {children}
    </label>
  );
}

type ProjectsEditorProps = {
  items: ResumeProjectItem[];
  onItemChange: (itemId: string, field: keyof ResumeProjectItem, value: string) => void;
  onAdd: () => void;
  onRemove: (itemId: string) => void;
};

export function ProjectsEditor({ items, onItemChange, onAdd, onRemove }: ProjectsEditorProps) {
  return (
    <Section
      title="项目经验"
      eyebrow="作品"
      description="填写项目名称、职责、技术栈与项目成果。"
      action={
        <Button variant="secondary" className="px-3 py-1.5 text-xs" onClick={onAdd}>
          添加一项
        </Button>
      }
    >
      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-sm text-slate-400">
            还没有项目经历，添加一项后会同步出现在预览中。
          </div>
        ) : null}

        {items.map((item, index) => (
          <div key={item.id} className="group relative space-y-3 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-slate-400">
                项目经验 {index + 1}
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
                <FieldLabel>项目名称</FieldLabel>
                <Input
                  value={item.name}
                  aria-label="项目名称"
                  placeholder="项目名称"
                  onChange={(event) => onItemChange(item.id, "name", event.target.value)}
                />
              </div>
              <div>
                <FieldLabel>项目角色</FieldLabel>
                <Input
                  value={item.role}
                  aria-label="项目角色"
                  placeholder="你的角色"
                  onChange={(event) => onItemChange(item.id, "role", event.target.value)}
                />
              </div>
              <div>
                <FieldLabel>开始时间</FieldLabel>
                <Input
                  value={item.startDate}
                  aria-label="项目开始时间"
                  placeholder="开始时间"
                  onChange={(event) => onItemChange(item.id, "startDate", event.target.value)}
                />
              </div>
              <div>
                <FieldLabel>结束时间</FieldLabel>
                <Input
                  value={item.endDate}
                  aria-label="项目结束时间"
                  placeholder="结束时间"
                  onChange={(event) => onItemChange(item.id, "endDate", event.target.value)}
                />
              </div>
            </div>

            <div>
              <FieldLabel>项目描述</FieldLabel>
              <Textarea
                value={item.description}
                aria-label="项目描述"
                rows={4}
                placeholder="总结项目背景、你的职责以及最终成果……"
                onChange={(event) => onItemChange(item.id, "description", event.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
