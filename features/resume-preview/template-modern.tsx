import type { ResumeData, ResumeSection } from "@/types/resume";

type TemplateModernProps = {
  resume: ResumeData;
  hiddenSections: ResumeSection[];
};

export function TemplateModern({ resume, hiddenSections }: TemplateModernProps) {
  const accent = resume.settings.accentColor || "#5a7fa8";

  return (
    <div className="flex gap-0 text-slate-800" style={{ fontSize: "10pt", lineHeight: 1.6 }}>
      {/* Left Sidebar - Personal Info */}
      <aside
        className="w-[170px] shrink-0 p-4 text-white"
        style={{ backgroundColor: accent }}
      >
        {/* Photo */}
        <div className="mb-4 flex justify-center">
          {resume.profile.photo ? (
            <img
              src={resume.profile.photo}
              alt="照片"
              className="w-[90px] h-[110px] object-cover rounded-sm border-2 border-white/30"
            />
          ) : (
            <div className="w-[90px] h-[110px] rounded-sm border-2 border-dashed border-white/30 bg-white/10 flex items-center justify-center text-[9pt] text-white/60">
              照片
            </div>
          )}
        </div>

        {/* Name */}
        <h1 className="text-[16pt] font-bold tracking-tight leading-tight text-center mb-1">
          {resume.profile.name}
        </h1>
        <p className="text-[9pt] font-medium text-center text-white/80 tracking-wide uppercase mb-4">
          {resume.profile.title}
        </p>

        {/* Contact Info */}
        <div className="space-y-2.5 text-[8.5pt] text-white/85">
          {resume.profile.email && (
            <div className="flex items-start gap-2">
              <svg className="w-3 h-3 mt-0.5 shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="break-all">{resume.profile.email}</span>
            </div>
          )}
          {resume.profile.phone && (
            <div className="flex items-start gap-2">
              <svg className="w-3 h-3 mt-0.5 shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{resume.profile.phone}</span>
            </div>
          )}
          {resume.profile.city && (
            <div className="flex items-start gap-2">
              <svg className="w-3 h-3 mt-0.5 shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{resume.profile.city}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {resume.skills.length > 0 && !hiddenSections.includes("skills") && (
          <div className="mt-5">
            <h2 className="text-[9pt] font-bold tracking-[0.12em] uppercase mb-2.5 pb-1.5 border-b border-white/20">
              专业技能
            </h2>
            <div className="flex flex-wrap gap-1">
              {resume.skills.map((item) => (
                <span
                  key={item.id}
                  className="text-[7.5pt] px-1.5 py-[2px] rounded-sm border border-white/20 bg-white/10 text-white/90"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Summary */}
        {resume.profile.summary && !hiddenSections.includes("summary") && (
          <div className="mt-4">
            <h2 className="text-[9pt] font-bold tracking-[0.12em] uppercase mb-2.5 pb-1.5 border-b border-white/20">
              个人总结
            </h2>
            <p className="text-[8.5pt] text-white/80" style={{ lineHeight: 1.65 }}>
              {resume.profile.summary}
            </p>
          </div>
        )}

        {/* Links */}
        {resume.links.length > 0 && !hiddenSections.includes("links") && (
          <div className="mt-4">
            <h2 className="text-[9pt] font-bold tracking-[0.12em] uppercase mb-2.5 pb-1.5 border-b border-white/20">
              链接
            </h2>
            <div className="space-y-1.5">
              {resume.links.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[8pt] truncate text-white/80 hover:text-white hover:underline"
                >
                  {item.label || item.url}
                </a>
              ))}
            </div>
          </div>
        )}
      </aside>

      {/* Right Column - Main Content */}
      <div className="flex-1 min-w-0 p-5 space-y-4 bg-white">
        {/* Education */}
        {resume.education.length > 0 && !hiddenSections.includes("education") && (
          <section>
            <SectionTitle accent={accent}>教育经历</SectionTitle>
            <div className="space-y-2.5">
              {resume.education.map((item) => (
                <div key={item.id} className="relative pl-3.5">
                  <div
                    className="absolute left-0 top-[0.35em] w-[5px] h-[5px] rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-bold text-slate-800 text-[10.5pt]">{item.school}</span>
                        <span className="text-[9.5pt] text-slate-500">{item.major}</span>
                        <span className="text-[9pt] text-slate-400">{item.degree}</span>
                      </div>
                    </div>
                    <span className="shrink-0 text-[8pt] text-slate-400 font-medium tracking-wide whitespace-nowrap">
                      {item.startDate} – {item.endDate}
                    </span>
                  </div>
                  {item.description && (
                    <div className="mt-1.5 space-y-1">
                      {item.description.split("\n").filter(Boolean).map((line, i) => (
                        <p key={i} className="text-[9pt] text-slate-600 pl-3 relative" style={{ lineHeight: 1.65 }}>
                          <span className="absolute left-0 top-[0.5em] w-[3px] h-[3px] rounded-full bg-slate-300" />
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
          <section>
            <SectionTitle accent={accent}>工作经验</SectionTitle>
            <div className="space-y-3.5">
              {resume.experience.map((item) => (
                <div key={item.id} className="relative pl-3.5">
                  <div
                    className="absolute left-0 top-[0.35em] w-[5px] h-[5px] rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-bold text-slate-800 text-[10.5pt]">{item.company}</span>
                        <span className="text-[9.5pt] text-slate-500">{item.role}</span>
                      </div>
                    </div>
                    <span className="shrink-0 text-[8pt] text-slate-400 font-medium tracking-wide whitespace-nowrap">
                      {item.startDate} – {item.endDate}
                    </span>
                  </div>
                  {item.description && (
                    <div className="mt-1.5 space-y-1">
                      {item.description.split("\n").filter(Boolean).map((line, i) => (
                        <p key={i} className="text-[9pt] text-slate-600 pl-3 relative" style={{ lineHeight: 1.65 }}>
                          <span className="absolute left-0 top-[0.5em] w-[3px] h-[3px] rounded-full bg-slate-300" />
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
          <section>
            <SectionTitle accent={accent}>项目经验</SectionTitle>
            <div className="space-y-3.5">
              {resume.projects.map((item) => (
                <div key={item.id} className="relative pl-3.5">
                  <div
                    className="absolute left-0 top-[0.35em] w-[5px] h-[5px] rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-bold text-slate-800 text-[10.5pt]">{item.name}</span>
                        <span className="text-[9.5pt] text-slate-500">{item.role}</span>
                      </div>
                    </div>
                    <span className="shrink-0 text-[8pt] text-slate-400 font-medium tracking-wide whitespace-nowrap">
                      {item.startDate} – {item.endDate}
                    </span>
                  </div>
                  {item.description && (
                    <div className="mt-1.5 space-y-1">
                      {item.description.split("\n").filter(Boolean).map((line, i) => (
                        <p key={i} className="text-[9pt] text-slate-600 pl-3 relative" style={{ lineHeight: 1.65 }}>
                          <span className="absolute left-0 top-[0.5em] w-[3px] h-[3px] rounded-full bg-slate-300" />
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
      </div>
    </div>
  );
}

function SectionTitle({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h2
      className="text-[9.5pt] font-bold tracking-[0.15em] uppercase mb-2.5 pb-1.5 border-b"
      style={{ color: accent, borderColor: accent + "30" }}
    >
      {children}
    </h2>
  );
}
