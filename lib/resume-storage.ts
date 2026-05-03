import { RESUME_STORAGE_KEY } from "@/lib/constants";
import type { ResumeData } from "@/types/resume";

export function loadResumeFromStorage(): ResumeData | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(RESUME_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    const data = JSON.parse(raw) as ResumeData;
    // 兼容旧数据没有 hiddenSections 字段
    if (!data.hiddenSections) {
      data.hiddenSections = [];
    }
    return data;
  } catch {
    return null;
  }
}

export function saveResumeToStorage(resume: ResumeData) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify(resume));
}
