import { Button } from "@/components/ui/button";

type OptimizeButtonProps = {
  label?: string;
  active?: boolean;
};

export function OptimizeButton({ label = "运行 AI 润色", active = false }: OptimizeButtonProps) {
  return (
    <Button
      variant={active ? "primary" : "secondary"}
      className="px-3 py-1.5 text-xs tracking-[0.01em]"
    >
      {label}
    </Button>
  );
}
