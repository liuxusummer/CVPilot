import { AI_TONES } from "@/lib/constants";
import type {
  AiOptimizeRequest,
  AiOptimizeResponse,
  AiOptimizeSectionType,
  AiOptimizeTone,
} from "@/types/ai-optimize";

function normalizeContent(content: string) {
  return content.replace(/\s+/g, " ").trim();
}

function replacePhrases(content: string, replacements: Array<[string, string]>) {
  return replacements.reduce(
    (current, [pattern, replacement]) => current.replace(new RegExp(pattern, "gi"), replacement),
    content,
  );
}

function makeConcise(content: string) {
  const compact = content
    .replace(/\b(really|very|successfully|various|multiple|significantly)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  const words = compact.split(" ").filter(Boolean);

  if (words.length <= 26) {
    return compact;
  }

  return `${words.slice(0, 26).join(" ")}.`;
}

function appendSectionSuffix(sectionType: AiOptimizeSectionType, tone: AiOptimizeTone) {
  if (sectionType === "summary" && tone === "professional") {
    return " Focused on disciplined execution, cross-functional collaboration, and high-quality delivery.";
  }

  if (sectionType === "summary" && tone === "achievement") {
    return " Emphasizes measurable impact, ownership, and clear business value.";
  }

  if (tone === "achievement") {
    return " Highlights ownership, execution quality, and tangible outcomes.";
  }

  if (tone === "professional") {
    return " Communicates scope and execution with a more polished professional tone.";
  }

  return "";
}

function buildCandidate(content: string, sectionType: AiOptimizeSectionType, tone: AiOptimizeTone) {
  const normalizedContent = normalizeContent(content);

  if (tone === "concise") {
    return makeConcise(normalizedContent);
  }

  if (tone === "professional") {
    return `${replacePhrases(normalizedContent, [
      ["\\bbuild\\b", "develop"],
      ["\\bbuilt\\b", "developed"],
      ["\\bmake\\b", "deliver"],
      ["\\bmade\\b", "delivered"],
      ["worked on", "contributed to"],
      ["\\bhelped\\b", "supported"],
      ["\\bfixed\\b", "resolved"],
      ["\\bimproved\\b", "enhanced"],
    ])}${appendSectionSuffix(sectionType, tone)}`.trim();
  }

  return `${replacePhrases(normalizedContent, [
    ["\\bbuild\\b", "drive"],
    ["\\bbuilt\\b", "delivered"],
    ["\\bcreated\\b", "launched"],
    ["\\bmade\\b", "generated"],
    ["worked on", "drove"],
    ["responsible for", "owned"],
    ["\\bimproved\\b", "increased"],
  ])}${appendSectionSuffix(sectionType, tone)}`.trim();
}

export async function GET() {
  return Response.json({
    ok: true,
    message: "AI 润色接口已就绪。",
    supportedSections: ["summary", "experience", "project"],
    tones: AI_TONES,
  });
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as Partial<AiOptimizeRequest>;
  const content = payload.content?.trim() ?? "";
  const sectionType = payload.sectionType ?? "summary";

  if (!content) {
    return Response.json(
      {
        ok: false,
        sectionType,
        candidates: [],
        error: "请先输入内容，再执行 AI 润色。",
      } satisfies AiOptimizeResponse,
      { status: 400 },
    );
  }

  return Response.json({
    ok: true,
    sectionType,
    candidates: AI_TONES.map((tone) => ({
      tone: tone.value,
      label: tone.label,
      content: buildCandidate(content, sectionType, tone.value),
    })),
  } satisfies AiOptimizeResponse);
}
