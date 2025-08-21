import { Profile, Project, Skill } from "@/models/models";

export const profileData: Profile = {
  name: "Abhinay",
  description:
    "I have 2+ years of experience contributing to a low-code product’s core codebase, combining full-stack and mobile expertise to solve real-world challenges.",
  profilePicture: "",
  email: "dhenrygl12@gmail.com",
  githubUrl: "https://github.com/DHK2001?tab=repositories",
  linkedUrl: "https://www.linkedin.com/in/derek-galeas-00ba83358",
};

export const listSkillsData: Skill[] = [
  {
    id: 1,
    skillName: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  },
  {
    id: 2,
    skillName: "Next.js",
    imageUrl:
      "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
  },
  {
    id: 3,
    skillName: "TailwindCSS",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
  },
  {
    id: 4,
    skillName: "TypeScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/250px-Typescript_logo_2020.svg.png",
  },
  {
    id: 5,
    skillName: "Node.js",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
  },
];

export const projectsData: Project[] = [
  {
    projectName: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js, TailwindCSS, and Framer Motion.",
    image:
      "https://ayushdas.vercel.app/_next/image?url=%2Fproject1.png&w=828&q=75",
  },
  {
    projectName: "E-commerce App",
    description:
      "A full-stack e-commerce application with product listing, cart, and checkout functionality.",
    image:
      "https://ayushdas.vercel.app/_next/image?url=%2Fproject2.png&w=828&q=75",
  },
  {
    projectName: "Chat Application",
    description:
      "A real-time chat app using WebSockets with support for rooms and private messaging.",
    image:
      "https://ayushdas.vercel.app/_next/image?url=%2Fproject3.png&w=828&q=75",
  },
];
