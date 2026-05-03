import type { ResumeData, ResumeSection } from "@/types/resume";

type TemplateClassicProps = {
  resume: ResumeData;
  hiddenSections: ResumeSection[];
};

export function TemplateClassic({ resume, hiddenSections }: TemplateClassicProps) {
  return (
    <div className="text-slate-800" style={{ fontSize: "10.5pt", lineHeight: 1.5 }}>
      {/* Header - always visible */}
      <header className="border-b-[3px] border-slate-800 pb-3 mb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold tracking-wider text-slate-900 mb-1">
              {resume.profile.name}
            </h1>
            <p className="text-sm font-medium text-slate-700 mb-2">{resume.profile.title}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10pt] text-slate-500">
              {resume.profile.email && <span>{resume.profile.email}</span>}
              {resume.profile.phone && <span>{resume.profile.phone}</span>}
              {resume.profile.city && <span>{resume.profile.city}</span>}
            </div>
          </div>
          {resume.profile.photo ? (
            <img
              src={resume.profile.photo}
              alt="照片"
              className="w-[80px] h-[100px] object-cover rounded-sm border border-slate-200 shrink-0"
            />
          ) : (
            <div className="w-[80px] h-[100px] rounded-sm border border-dashed border-slate-300 bg-slate-50 shrink-0 flex items-center justify-center text-[10pt] text-slate-400">
              照片
            </div>
          )}
        </div>
      </header>

      {/* Education */}
      {resume.education.length > 0 && !hiddenSections.includes("education") && (
        <section className="mb-3">
          <h2 className="mb-1.5 border-b border-slate-400 pb-0.5 text-base font-bold tracking-wider text-indigo-700">
            教育经历
          </h2>
          <div className="space-y-3">
            {resume.education.map((item) => (
              <div key={item.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-baseline min-w-0 text-[10.5pt]">
                    <span className="font-bold text-slate-800 truncate">{item.school}</span>
                    {item.major && (
                      <span className="text-slate-600 whitespace-nowrap shrink-0 ml-1.5">
                        <span className="text-slate-400 mr-1.5">|</span>{item.major}
                      </span>
                    )}
                    {item.degree && (
                      <span className="text-slate-500 whitespace-nowrap shrink-0 ml-1.5">
                        <span className="text-slate-400 mr-1.5">|</span>{item.degree}
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 text-xs text-slate-500 ml-auto">
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                {item.description && (
                  <div className="mt-1 space-y-0.5">
                    {item.description.split("\n").filter(Boolean).map((line, i) => (
                      <p key={i} className="text-[10pt] text-slate-600 pl-3 relative" style={{ lineHeight: 1.6 }}>
                        <span className="absolute left-0 top-[0.4em] w-1 h-1 bg-slate-400 rounded-full" />
                        {line.trim().replace(/^•\s*/, "")}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && !hiddenSections.includes("experience") && (
        <section className="mb-3">
          <h2 className="mb-1.5 border-b border-slate-400 pb-0.5 text-base font-bold tracking-wider text-indigo-700">
            工作经验
          </h2>
          <div className="space-y-3">
            {resume.experience.map((item) => (
              <div key={item.id}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-baseline min-w-0 text-[10.5pt]">
                    <span className="font-bold text-slate-800 truncate">{item.company}</span>
                    <span className="text-slate-600 whitespace-nowrap shrink-0 ml-1.5">
                      <span className="text-slate-400 mr-1.5">|</span>{item.role}
                    </span>
                  </div>
                  <span className="shrink-0 text-xs text-slate-500 ml-auto">
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                {item.description && (
                  <div className="space-y-0.5">
                    {item.description.split("\n").filter(Boolean).map((line, i) => (
                      <p key={i} className="text-[10pt] text-slate-600 pl-3 relative" style={{ lineHeight: 1.6 }}>
                        <span className="absolute left-0 top-[0.4em] w-1 h-1 bg-slate-400 rounded-full" />
                        {line.trim().replace(/^•\s*/, "")}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && !hiddenSections.includes("projects") && (
        <section className="mb-3">
          <h2 className="mb-1.5 border-b border-slate-400 pb-0.5 text-base font-bold tracking-wider text-indigo-700">
            项目经验
          </h2>
          <div className="space-y-3">
            {resume.projects.map((item) => (
              <div key={item.id}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-baseline min-w-0 text-[10.5pt]">
                    <span className="font-bold text-slate-800 truncate">{item.name}</span>
                    <span className="text-slate-600 whitespace-nowrap shrink-0 ml-1.5">
                      <span className="text-slate-400 mr-1.5">|</span>{item.role}
                    </span>
                  </div>
                  <span className="shrink-0 text-xs text-slate-500 ml-auto">
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                {item.description && (
                  <div className="space-y-0.5">
                    {item.description.split("\n").filter(Boolean).map((line, i) => (
                      <p key={i} className="text-[10pt] text-slate-600 pl-3 relative" style={{ lineHeight: 1.6 }}>
                        <span className="absolute left-0 top-[0.4em] w-1 h-1 bg-slate-400 rounded-full" />
                        {line.trim().replace(/^•\s*/, "")}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {resume.skills.length > 0 && !hiddenSections.includes("skills") && (
        <section className="mb-3">
          <h2 className="mb-1.5 border-b border-slate-400 pb-0.5 text-base font-bold tracking-wider text-indigo-700">
            专业技能
          </h2>
          <p className="text-[10pt] text-slate-600 leading-relaxed">
            {resume.skills.map((item) => item.name).join("、")}
          </p>
        </section>
      )}

      {/* Summary */}
      {resume.profile.summary && !hiddenSections.includes("summary") && (
        <section className="mb-3">
          <h2 className="mb-1.5 border-b border-slate-400 pb-0.5 text-base font-bold tracking-wider text-indigo-700">
            个人总结
          </h2>
          <p className="text-[10pt] text-slate-600" style={{ lineHeight: 1.6 }}>{resume.profile.summary}</p>
        </section>
      )}
    </div>
  );
}
