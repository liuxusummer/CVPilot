"use client";

import { useEffect, useState } from "react";

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

import { BasicInfoForm } from "@/features/resume-editor/basic-info-form";
import { EducationEditor } from "@/features/resume-editor/education-editor";
import { ExperienceEditor } from "@/features/resume-editor/experience-editor";
import { LinksEditor } from "@/features/resume-editor/links-editor";
import { ProjectsEditor } from "@/features/resume-editor/projects-editor";
import { SkillsEditor } from "@/features/resume-editor/skills-editor";
import { SummaryForm } from "@/features/resume-editor/summary-form";

type EditorLayoutProps = {
  resume: ResumeData;
  hiddenSections: ResumeSection[];
  onHiddenSectionsChange: (section: ResumeSection) => void;
  onProfileFieldChange: (field: keyof ResumeProfile, value: string) => void;
  onSummaryChange: (value: string) => void;
  onEducationItemChange: (itemId: string, field: keyof ResumeEducationItem, value: string) => void;
  onEducationAdd: () => void;
  onEducationRemove: (itemId: string) => void;
  onExperienceItemChange: (itemId: string, field: keyof ResumeExperienceItem, value: string) => void;
  onExperienceAdd: () => void;
  onExperienceRemove: (itemId: string) => void;
  onProjectItemChange: (itemId: string, field: keyof ResumeProjectItem, value: string) => void;
  onProjectAdd: () => void;
  onProjectRemove: (itemId: string) => void;
  onSkillItemChange: (itemId: string, field: keyof ResumeSkillItem, value: string) => void;
  onSkillAdd: () => void;
  onSkillRemove: (itemId: string) => void;
  onLinkItemChange: (itemId: string, field: keyof ResumeLink, value: string) => void;
  onLinkAdd: () => void;
  onLinkRemove: (itemId: string) => void;
};

export function EditorLayout({
  resume,
  hiddenSections,
  onHiddenSectionsChange,
  onProfileFieldChange,
  onSummaryChange,
  onEducationItemChange,
  onEducationAdd,
  onEducationRemove,
  onExperienceItemChange,
  onExperienceAdd,
  onExperienceRemove,
  onProjectItemChange,
  onProjectAdd,
  onProjectRemove,
  onSkillItemChange,
  onSkillAdd,
  onSkillRemove,
  onLinkItemChange,
  onLinkAdd,
  onLinkRemove,
}: EditorLayoutProps) {
  const [activeModuleId, setActiveModuleId] = useState("editor-basic");

  const modules = [
    { id: "editor-basic", label: "个人信息", icon: "👤", section: "profile" as ResumeSection },
    { id: "editor-summary", label: "个人总结", icon: "📝", section: "summary" as ResumeSection },
    { id: "editor-education", label: "教育经历", icon: "🎓", section: "education" as ResumeSection },
    { id: "editor-experience", label: "工作经验", icon: "💼", section: "experience" as ResumeSection },
    { id: "editor-projects", label: "项目经验", icon: "🚀", section: "projects" as ResumeSection },
    { id: "editor-skills", label: "专业技能", icon: "⚡", section: "skills" as ResumeSection },
    { id: "editor-links", label: "链接", icon: "🔗", section: "links" as ResumeSection },
  ];

  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveModuleId(hash);
      }
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return (
    <>
      {/* Left Sidebar - Module Navigation */}
      <aside className="no-print xl:sticky xl:top-[72px] xl:self-start">
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <p className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            简历模块
          </p>
          <div className="mt-3 space-y-1">
            {modules.map((module) => {
              const isHidden = hiddenSections.includes(module.section);
              return (
                <a
                  key={module.id}
                  href={`#${module.id}`}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`group flex items-center justify-between rounded-lg px-3 py-2.5 transition ${
                    activeModuleId === module.id
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-50"
                  } ${isHidden ? "opacity-50" : ""}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm">{module.icon}</span>
                    <span className={`text-sm font-medium ${isHidden ? "line-through" : ""}`}>
                      {module.label}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onHiddenSectionsChange(module.section);
                    }}
                    className="rounded p-1 opacity-0 transition hover:bg-slate-200 group-hover:opacity-100"
                    title={isHidden ? "显示模块" : "隐藏模块"}
                  >
                    {isHidden ? (
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </a>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Middle - Editor Forms */}
      <div className="space-y-4">
        {!hiddenSections.includes("profile") && (
          <div id="editor-basic" className="scroll-mt-24">
            <BasicInfoForm profile={resume.profile} onFieldChange={onProfileFieldChange} />
          </div>
        )}
        {!hiddenSections.includes("summary") && (
          <div id="editor-summary" className="scroll-mt-24">
            <SummaryForm summary={resume.profile.summary} onSummaryChange={onSummaryChange} />
          </div>
        )}
        {!hiddenSections.includes("education") && (
          <div id="editor-education" className="scroll-mt-24">
            <EducationEditor
              items={resume.education}
              onItemChange={onEducationItemChange}
              onAdd={onEducationAdd}
              onRemove={onEducationRemove}
            />
          </div>
        )}
        {!hiddenSections.includes("experience") && (
          <div id="editor-experience" className="scroll-mt-24">
            <ExperienceEditor
              items={resume.experience}
              onItemChange={onExperienceItemChange}
              onAdd={onExperienceAdd}
              onRemove={onExperienceRemove}
            />
          </div>
        )}
        {!hiddenSections.includes("projects") && (
          <div id="editor-projects" className="scroll-mt-24">
            <ProjectsEditor
              items={resume.projects}
              onItemChange={onProjectItemChange}
              onAdd={onProjectAdd}
              onRemove={onProjectRemove}
            />
          </div>
        )}
        {!hiddenSections.includes("skills") && (
          <div id="editor-skills" className="scroll-mt-24">
            <SkillsEditor
              items={resume.skills}
              onItemChange={onSkillItemChange}
              onAdd={onSkillAdd}
              onRemove={onSkillRemove}
            />
          </div>
        )}
        {!hiddenSections.includes("links") && (
          <div id="editor-links" className="scroll-mt-24">
            <LinksEditor
              items={resume.links}
              onItemChange={onLinkItemChange}
              onAdd={onLinkAdd}
              onRemove={onLinkRemove}
            />
          </div>
        )}
      </div>
    </>
  );
}
