import { Dialog } from "@/components/ui/dialog";
import { OptimizeButton } from "@/features/ai-optimize/optimize-button";
import { AI_TONES } from "@/lib/constants";

export function OptimizePanel() {
  return (
    <Dialog title="AI 文案润色说明">
      <div className="space-y-5 text-sm text-[var(--muted)]">
        <div className="rounded-xl border border-[var(--border)] bg-slate-50 p-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--muted-soft)]">润色流程</p>
          <p className="mt-3 leading-6 text-[var(--muted)]">
            AI 润色现在已经支持直接在自我评价、工作经历描述和项目描述中使用。每次会返回三条候选文案，你可以直接应用回当前字段。
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--muted-soft)]">润色方向</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              为了便于比较与选择，系统会固定生成这三种方向的候选版本。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {AI_TONES.map((tone) => (
              <OptimizeButton key={tone.value} label={tone.label} />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-slate-50 p-4 text-sm leading-6 text-[var(--muted)]">
          使用方式：先输入内容 → 点击 <span className="font-medium text-[var(--foreground)]">AI 润色</span> → 查看三条候选文案 → 选择最合适的一条应用到表单中。
        </div>
      </div>
    </Dialog>
  );
}
