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
  profilePictureAlt: string;
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
  stats: HomeHighlight[];
}

export interface ProjectRule {
  label: string;
  keywords: string[];
}

export interface ProjectsPageData {
  badge: string;
  title: string;
  description: string;
  filters: string[];
  defaultCategory: string;
  categoryRules: ProjectRule[];
  stackRules: ProjectRule[];
}

export interface ContactLinkData {
  type: string;
  label: string;
  value: string;
}

export interface ContactPageData {
  badge: string;
  title: string;
  description: string;
  availabilityTitle: string;
  availabilityDescription: string;
  links: ContactLinkData[];
}

export interface CertificateSectionData {
  title: string;
  description: string;
}

export interface NavigationItem {
  path: string;
  name: string;
}

export interface PortfolioLabels {
  site: SiteLabels;
  navigation: NavigationLabels;
  theme: ThemeLabels;
  homeActions: HomeActionLabels;
  projectActions: ProjectActionLabels;
}

export interface SiteLabels {
  metadataTitle: string;
  metadataDescription: string;
  footerText: string;
}

export interface NavigationLabels {
  navigationLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  items: NavigationItem[];
}

export interface ThemeLabels {
  switchToLightModeLabel: string;
  switchToDarkModeLabel: string;
}

export interface HomeActionLabels {
  primaryActionLabel: string;
  secondaryActionLabel: string;
  githubLabel: string;
  linkedInLabel: string;
  cvFileNamePrefix: string;
}

export interface ProjectActionLabels {
  viewScreenshotsLabel: string;
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
