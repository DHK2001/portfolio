import { Profile, Project, Skill } from "@/models/models";

export const profileData: Profile = {
  name: "Derek Galeas",
  description:
    "Software Engineer with experience in mobile and web development. Skilled in implementing new features, maintaining applications, and ensuring seamless integration of designs using technologies such as Flutter, React, Next.js, and MongoDB.",
  profilePicture: "",
  email: "dhenrygk12@hotmail.com",
  githubUrl: "https://github.com/DHK2001?tab=repositories",
  linkedUrl: "https://www.linkedin.com/in/derek-galeas-00ba83358",
};

export const listSkillsData: Skill[] = [
  {
    id: 1,
    skillName: "C++",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    id: 2,
    skillName: "C#",
    imageUrl:
      "https://images.icon-icons.com/2415/PNG/512/csharp_plain_logo_icon_146577.png",
  },
  {
    id: 3,
    skillName: "Java",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    id: 4,
    skillName: "JavaScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 5,
    skillName: "TypeScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: 6,
    skillName: "Dart",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
  },
  {
    id: 7,
    skillName: "Swift",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
  },
  {
    id: 8,
    skillName: "Python",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: 9,
    skillName: "Flutter",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
  },
  {
    id: 10,
    skillName: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 11,
    skillName: "Next.js",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    id: 12,
    skillName: "HTML",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    id: 13,
    skillName: "CSS",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    id: 14,
    skillName: "MongoDB",
    imageUrl:
      "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
  },
  {
    id: 15,
    skillName: "GitHub",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    id: 16,
    skillName: "Postman",
    imageUrl:
      "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-svg-png-download-3030217.png?f=webp",
  },
  {
    id: 17,
    skillName: "Visual Studio / VS Code",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Visual_Studio_Logo_%282013-2017%29.svg",
  },
  {
    id: 18,
    skillName: "Android Studio",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1200px-Android_Studio_icon_%282023%29.svg.png",
  },
  {
    id: 19,
    skillName: "Xcode",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/ru/0/0c/Xcode_icon.png",
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
