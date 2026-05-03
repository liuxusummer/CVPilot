export type ResumeProfile = {
  name: string;
  title: string;
  phone: string;
  email: string;
  city: string;
  summary: string;
  photo?: string;
};

export type ResumeEducationItem = {
  id: string;
  school: string;
  major: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type ResumeExperienceItem = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type ResumeProjectItem = {
  id: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string;
};

export type ResumeSkillItem = {
  id: string;
  name: string;
  level: string;
  category?: string;
};

export type ResumeLink = {
  id: string;
  label: string;
  url: string;
};

export type ResumeSection =
  | "profile"
  | "summary"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "links";

export type ResumeData = {
  profile: ResumeProfile;
  education: ResumeEducationItem[];
  experience: ResumeExperienceItem[];
  projects: ResumeProjectItem[];
  skills: ResumeSkillItem[];
  links: ResumeLink[];
  settings: {
    template: "classic" | "modern";
    accentColor: string;
  };
  hiddenSections: ResumeSection[];
};
