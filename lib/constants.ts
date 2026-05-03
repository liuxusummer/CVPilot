export const APP_NAME = "CV Make";

export const TEMPLATE_OPTIONS = [
  { value: "classic", label: "经典" },
  { value: "modern", label: "现代" },
] as const;

export const AI_TONES = [
  { value: "professional", label: "更专业" },
  { value: "concise", label: "更简洁" },
  { value: "achievement", label: "更突出成果" },
] as const;

export const RESUME_STORAGE_KEY = "cv-make:resume:v1";
