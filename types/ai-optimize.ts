export type AiOptimizeSectionType = "summary" | "experience" | "project";

export type AiOptimizeTone = "professional" | "concise" | "achievement";

export type AiOptimizeCandidate = {
  tone: AiOptimizeTone;
  label: string;
  content: string;
};

export type AiOptimizeRequest = {
  sectionType: AiOptimizeSectionType;
  content: string;
};

export type AiOptimizeResponse = {
  ok: boolean;
  sectionType: AiOptimizeSectionType;
  candidates: AiOptimizeCandidate[];
  error?: string;
};
