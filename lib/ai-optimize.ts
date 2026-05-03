import type { AiOptimizeRequest, AiOptimizeResponse } from "@/types/ai-optimize";

export async function optimizeResumeText(payload: AiOptimizeRequest): Promise<AiOptimizeResponse> {
  const response = await fetch("/api/ai-optimize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as AiOptimizeResponse | null;

  if (!response.ok || !data) {
    throw new Error(data?.error ?? "Unable to generate AI suggestions right now.");
  }

  return data;
}
