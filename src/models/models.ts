export interface Skill {
  id: number;
  skillName: string;
  imageUrl: string;
  category: string;
}

export interface Profile {
  name: string;
  description: string;
  profilePicture: string;
  email: string;
  githubUrl: string;
  linkedUrl: string;
  certificates: Certificate[];
  degree: Degree;
}

export interface HomeHighlight {
  title: string;
  description: string;
}

export interface HomeData {
  badge: string;
  subtitle: string;
  featuredTech: string[];
  currentFocusTitle: string;
  currentFocusDescription: string;
  highlights: HomeHighlight[];
}

export interface SkillFocusGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface SkillSectionData {
  title: string;
  description: string;
  category: string;
}

export interface SkillsPageData {
  badge: string;
  title: string;
  description: string;
  focusGroups: SkillFocusGroup[];
  sections: SkillSectionData[];
}

export interface WorkExperiencePageData {
  badge: string;
  title: string;
  description: string;
}

export interface ProjectsPageData {
  badge: string;
  title: string;
  description: string;
  filters: string[];
}

export interface ContactPageData {
  badge: string;
  title: string;
  description: string;
  availabilityTitle: string;
  availabilityDescription: string;
}

export interface Project {
  projectName: string;
  description: string;
  image: string[];
}

export interface Certificate {
  name: string;
  src: string;
  issuer: string;
  date: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags: string[];
}

export interface Degree {
  name: string;
  src: string;
  issuer: string;
  date: string;
}
