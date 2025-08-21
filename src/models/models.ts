export interface Skill {
  id: number;
  skillName: string;
  imageUrl: string;
}

export interface Profile {
  name: string;
  description: string;
  profilePicture: string;
  email: string;
  githubUrl: string;
  linkedUrl: string;
}

export interface Project {
    projectName: string,
    description: string,
    image: string,
}