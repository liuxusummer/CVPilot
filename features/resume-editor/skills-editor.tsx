import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import type { ResumeSkillItem } from "@/types/resume";

type SkillsEditorProps = {
  items: ResumeSkillItem[];
  onItemChange: (itemId: string, field: keyof ResumeSkillItem, value: string) => void;
  onAdd: () => void;
  onRemove: (itemId: string) => void;
};

export function SkillsEditor({ items, onItemChange, onAdd, onRemove }: SkillsEditorProps) {
  const [newSkill, setNewSkill] = useState("");

  function handleAddSkill() {
    if (newSkill.trim()) {
      onAdd();
      // 找到新添加的技能并设置名称
      setTimeout(() => {
        const lastItem = items[items.length - 1];
        if (lastItem) {
          onItemChange(lastItem.id, "name", newSkill.trim());
        }
      }, 0);
      setNewSkill("");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  }

  return (
    <Section
      title="专业技能"
      eyebrow="能力"
      description="添加技能标签，预览区会自动换行排列。"
    >
      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={newSkill}
            placeholder="输入技能名称，按回车添加"
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button variant="secondary" className="px-4 py-1.5 text-xs" onClick={handleAddSkill}>
            添加技能
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-sm text-slate-400">
            还没有技能，添加后会同步到预览区。
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm"
              >
                <span>{item.name || "未命名技能"}</span>
                <button
                  onClick={() => onRemove(item.id)}
                  className="rounded p-0.5 text-slate-400 opacity-0 transition hover:bg-slate-100 hover:text-red-500 group-hover:opacity-100"
                  title="删除"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
