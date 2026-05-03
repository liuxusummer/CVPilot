"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { EditorLayout } from "@/features/resume-editor/editor-layout";
import { ResumePreview } from "@/features/resume-preview/resume-preview";
import { APP_NAME, TEMPLATE_OPTIONS } from "@/lib/constants";
import {
  createEmptyEducationItem,
  createEmptyExperienceItem,
  createEmptyLinkItem,
  createEmptyProjectItem,
  createEmptyResume,
  createEmptySkillItem,
  createSampleResume,
} from "@/lib/resume-defaults";
import { printResume } from "@/lib/print";
import { loadResumeFromStorage, saveResumeToStorage } from "@/lib/resume-storage";
import type {
  ResumeData,
  ResumeEducationItem,
  ResumeExperienceItem,
  ResumeLink,
  ResumeProfile,
  ResumeProjectItem,
  ResumeSection,
  ResumeSkillItem,
} from "@/types/resume";

function subscribeToHydration() {
  return () => {};
}

function getInitialResume(): ResumeData {
  return loadResumeFromStorage() ?? createSampleResume();
}

export function ResumeBuilderShell() {
  const hasHydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const [resume, setResume] = useState<ResumeData>(getInitialResume);
  const visibleResume: ResumeData = hasHydrated
    ? resume
    : { ...createSampleResume(), hiddenSections: resume.hiddenSections ?? [] };
  const currentTemplateLabel =
    TEMPLATE_OPTIONS.find((item) => item.value === visibleResume.settings.template)?.label ??
    visibleResume.settings.template;

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    saveResumeToStorage(resume);
  }, [hasHydrated, resume]);

  function updateProfileField(field: keyof ResumeProfile, value: string) {
    setResume((currentResume) => ({
      ...currentResume,
      profile: {
        ...currentResume.profile,
        [field]: value,
      },
    }));
  }

  function updateTemplate(template: ResumeData["settings"]["template"]) {
    setResume((currentResume) => ({
      ...currentResume,
      settings: {
        ...currentResume.settings,
        template,
      },
    }));
  }

  function updateHiddenSections(section: ResumeSection) {
    setResume((currentResume) => {
      const hidden = new Set(currentResume.hiddenSections);
      if (hidden.has(section)) {
        hidden.delete(section);
      } else {
        hidden.add(section);
      }
      return {
        ...currentResume,
        hiddenSections: Array.from(hidden),
      };
    });
  }

  function importSampleResume() {
    setResume((currentResume) => {
      const nextResume = createSampleResume();

      return {
        ...nextResume,
        settings: {
          ...nextResume.settings,
          template: currentResume.settings.template,
        },
      };
    });
  }

  function clearResume() {
    setResume((currentResume) => {
      const emptyResume = createEmptyResume();

      return {
        ...emptyResume,
        settings: {
          ...emptyResume.settings,
          template: currentResume.settings.template,
        },
      };
    });
  }

  function updateEducationItem(
    itemId: string,
    field: keyof ResumeEducationItem,
    value: string,
  ) {
    setResume((currentResume) => ({
      ...currentResume,
      education: currentResume.education.map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item,
      ),
    }));
  }

  function addEducationItem() {
    setResume((currentResume) => ({
      ...currentResume,
      education: [...currentResume.education, createEmptyEducationItem()],
    }));
  }

  function removeEducationItem(itemId: string) {
    setResume((currentResume) => ({
      ...currentResume,
      education: currentResume.education.filter((item) => item.id !== itemId),
    }));
  }

  function updateExperienceItem(
    itemId: string,
    field: keyof ResumeExperienceItem,
    value: string,
  ) {
    setResume((currentResume) => ({
      ...currentResume,
      experience: currentResume.experience.map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item,
      ),
    }));
  }

  function addExperienceItem() {
    setResume((currentResume) => ({
      ...currentResume,
      experience: [...currentResume.experience, createEmptyExperienceItem()],
    }));
  }

  function removeExperienceItem(itemId: string) {
    setResume((currentResume) => ({
      ...currentResume,
      experience: currentResume.experience.filter((item) => item.id !== itemId),
    }));
  }

  function updateProjectItem(
    itemId: string,
    field: keyof ResumeProjectItem,
    value: string,
  ) {
    setResume((currentResume) => ({
      ...currentResume,
      projects: currentResume.projects.map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item,
      ),
    }));
  }

  function addProjectItem() {
    setResume((currentResume) => ({
      ...currentResume,
      projects: [...currentResume.projects, createEmptyProjectItem()],
    }));
  }

  function removeProjectItem(itemId: string) {
    setResume((currentResume) => ({
      ...currentResume,
      projects: currentResume.projects.filter((item) => item.id !== itemId),
    }));
  }

  function updateSkillItem(itemId: string, field: keyof ResumeSkillItem, value: string) {
    setResume((currentResume) => ({
      ...currentResume,
      skills: currentResume.skills.map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item,
      ),
    }));
  }

  function addSkillItem() {
    setResume((currentResume) => ({
      ...currentResume,
      skills: [...currentResume.skills, createEmptySkillItem()],
    }));
  }

  function removeSkillItem(itemId: string) {
    setResume((currentResume) => ({
      ...currentResume,
      skills: currentResume.skills.filter((item) => item.id !== itemId),
    }));
  }

  function updateLinkItem(itemId: string, field: keyof ResumeLink, value: string) {
    setResume((currentResume) => ({
      ...currentResume,
      links: currentResume.links.map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item,
      ),
    }));
  }

  function addLinkItem() {
    setResume((currentResume) => ({
      ...currentResume,
      links: [...currentResume.links, createEmptyLinkItem()],
    }));
  }

  function removeLinkItem(itemId: string) {
    setResume((currentResume) => ({
      ...currentResume,
      links: currentResume.links.filter((item) => item.id !== itemId),
    }));
  }

  return (
    <main className="min-h-screen bg-[#f1f5f9]">
      {/* Top Navigation Bar */}
      <header className="no-print sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1560px] items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              简
            </div>
            <h1 className="text-base font-semibold text-slate-800">{APP_NAME}</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 sm:block">
              当前模板 · {currentTemplateLabel}
            </div>
            <Button variant="ghost" className="px-3 py-1.5 text-xs" onClick={importSampleResume}>
              导入示例
            </Button>
            <Button variant="ghost" className="px-3 py-1.5 text-xs" onClick={clearResume}>
              清空
            </Button>
            <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
              {TEMPLATE_OPTIONS.map((template) => (
                <button
                  key={template.value}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition ${
                    visibleResume.settings.template === template.value
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  onClick={() => updateTemplate(template.value)}
                >
                  {template.label}
                </button>
              ))}
            </div>
            <Button variant="primary" className="px-4 py-1.5 text-xs" onClick={printResume}>
              导出 PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Responsive Three Column Layout */}
      <div className="print-container mx-auto max-w-[1560px] px-4 py-4 sm:px-6 sm:py-6">
        <div className="grid gap-4 xl:grid-cols-[160px_420px_1fr]">
          {/* Left Sidebar - Module Navigation */}
          <div className="no-print contents">
          <EditorLayout
            resume={visibleResume}
            hiddenSections={visibleResume.hiddenSections}
            onHiddenSectionsChange={updateHiddenSections}
            onProfileFieldChange={updateProfileField}
            onSummaryChange={(value) => updateProfileField("summary", value)}
            onEducationItemChange={updateEducationItem}
            onEducationAdd={addEducationItem}
            onEducationRemove={removeEducationItem}
            onExperienceItemChange={updateExperienceItem}
            onExperienceAdd={addExperienceItem}
            onExperienceRemove={removeExperienceItem}
            onProjectItemChange={updateProjectItem}
            onProjectAdd={addProjectItem}
            onProjectRemove={removeProjectItem}
            onSkillItemChange={updateSkillItem}
            onSkillAdd={addSkillItem}
            onSkillRemove={removeSkillItem}
            onLinkItemChange={updateLinkItem}
            onLinkAdd={addLinkItem}
            onLinkRemove={removeLinkItem}
          />
          </div>

          {/* Right Side - Preview */}
          <div className="print-preview xl:sticky xl:top-[72px] xl:self-start">
            <ResumePreview resume={visibleResume} hiddenSections={visibleResume.hiddenSections} />
          </div>
        </div>
      </div>
    </main>
  );
}
