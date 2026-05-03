import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="mb-1.5 block text-xs font-medium text-slate-500">
      {children}
    </label>
  );
}

type SummaryFormProps = {
  summary: string;
  onSummaryChange: (value: string) => void;
};

export function SummaryForm({ summary, onSummaryChange }: SummaryFormProps) {
  return (
    <Section
      title="个人总结"
      eyebrow="概述"
      description="用一段简洁介绍概括你的背景与优势。"
    >
      <div>
        <FieldLabel>内容</FieldLabel>
        <Textarea
          value={summary}
          aria-label="个人总结"
          rows={5}
          placeholder="写一段简洁的个人介绍，突出你的经验、方向与优势……"
          onChange={(event) => onSummaryChange(event.target.value)}
        />
      </div>
    </Section>
  );
}
