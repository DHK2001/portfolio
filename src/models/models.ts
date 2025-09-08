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
}

export interface Degree {
  name: string;
  src: string;
  issuer: string;
  date: string;
}
