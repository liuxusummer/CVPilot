import { A4Page } from "@/features/resume-preview/a4-page";
import { TemplateClassic } from "@/features/resume-preview/template-classic";
import { TemplateModern } from "@/features/resume-preview/template-modern";
import type { ResumeData, ResumeSection } from "@/types/resume";

type ResumePreviewProps = {
  resume: ResumeData;
  hiddenSections: ResumeSection[];
};

export function ResumePreview({ resume, hiddenSections }: ResumePreviewProps) {
  const template = resume.settings.template === "modern" ? (
    <TemplateModern resume={resume} hiddenSections={hiddenSections} />
  ) : (
    <TemplateClassic resume={resume} hiddenSections={hiddenSections} />
  );

  return (
    <div className="space-y-3">
      <A4Page>{template}</A4Page>
    </div>
  );
}
