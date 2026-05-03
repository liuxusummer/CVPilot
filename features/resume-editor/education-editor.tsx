import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import type { ResumeEducationItem } from "@/types/resume";
import { Textarea } from "@/components/ui/textarea";

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="mb-1.5 block text-xs font-medium text-slate-500">
      {children}
    </label>
  );
}

type EducationEditorProps = {
  items: ResumeEducationItem[];
  onItemChange: (itemId: string, field: keyof ResumeEducationItem, value: string) => void;
  onAdd: () => void;
  onRemove: (itemId: string) => void;
};

export function EducationEditor({ items, onItemChange, onAdd, onRemove }: EducationEditorProps) {
  return (
    <Section
      title="教育经历"
      eyebrow="基础"
      description="填写学校、专业、学位与时间。"
      action={
        <Button variant="secondary" className="px-3 py-1.5 text-xs" onClick={onAdd}>
          添加一项
        </Button>
      }
    >
      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-sm text-slate-400">
            还没有教育经历，添加一项后会立即同步到右侧预览。
          </div>
        ) : null}

        {items.map((item, index) => (
          <div key={item.id} className="group relative space-y-3 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-slate-400">
                教育经历 {index + 1}
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
                <FieldLabel>学校</FieldLabel>
                <Input
                  value={item.school}
                  aria-label="学校"
                  placeholder="学校名称"
                  onChange={(event) => onItemChange(item.id, "school", event.target.value)}
                />
              </div>
              <div>
                <FieldLabel>学历</FieldLabel>
                <Input
                  value={item.degree}
                  aria-label="学历"
                  placeholder="学历"
                  onChange={(event) => onItemChange(item.id, "degree", event.target.value)}
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:col-span-2">
                <div>
                  <FieldLabel>开始时间</FieldLabel>
                  <Input
                    value={item.startDate}
                    aria-label="教育开始时间"
                    placeholder="开始时间"
                    onChange={(event) => onItemChange(item.id, "startDate", event.target.value)}
                  />
                </div>
                <div>
                  <FieldLabel>结束时间</FieldLabel>
                  <Input
                    value={item.endDate}
                    aria-label="教育结束时间"
                    placeholder="结束时间"
                    onChange={(event) => onItemChange(item.id, "endDate", event.target.value)}
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <FieldLabel>描述（可选）</FieldLabel>
                <Textarea
                  value={item.description}
                  aria-label="教育描述"
                  placeholder="填写在校经历、获奖情况、研究方向等（可选）"
                  rows={3}
                  onChange={(event) => onItemChange(item.id, "description", event.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
