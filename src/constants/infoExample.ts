import { Profile, Project, Skill, WorkExperience } from "@/models/models";

export const profileData: Profile = {
  name: "Derek Galeas",
  description:
    "Software Engineer with experience in mobile and web development. Skilled in implementing new features, maintaining applications, and ensuring seamless integration of designs using technologies such as Flutter, React, Next.js, and MongoDB.",
  profilePicture: "",
  email: "dhenrygk12@hotmail.com",
  githubUrl: "https://github.com/DHK2001?tab=repositories",
  linkedUrl: "https://www.linkedin.com/in/derek-galeas-00ba83358",
  certificates: [
    {
      name: "React Native - The Practical Guide [2025]",
      src: "/images/certificates/react-native-certificate.jpg",
      issuer: "Udemy",
      date: "07/29/2025",
    },
  ],
};

export const workExperienceData: WorkExperience[] = [
  {
    role: "Mobile Developer (Flutter)",
    company: "Grupo Incova",
    startDate: "August 2022",
    endDate: "September 2023",
    description: [
      "Developed and maintained cross-platform mobile applications for Android and iOS using Flutter.",
      "Led the introduction of messaging functionality in a pre-existing application, covering both backend and frontend integration.",
      "Implemented new UI designs provided by the design team, ensuring seamless integration with existing logic and structure.",
      "Managed and optimized the application's MongoDB database for efficiency and reliability.",
    ],
  },
  {
    role: "Mobile Developer Intern",
    company: "Sans Services",
    startDate: "April 2024",
    endDate: "September 2024",
    description: [
      "Worked as an intern in the mobile development department.",
      "Maintained iOS and Android applications, fixing bugs and improving UI.",
      "Collaborated with the development team using Android Studio and Xcode.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "Remote Project Collaboration",
    startDate: "January 2025",
    endDate: "March 2025",
    description: [
      "Contributed to frontend development on web projects using React, Next.js, HTML, and CSS.",
      "Developed a QR code generator tool that allowed users to customize QR codes (colors, border styles, dot patterns) and download them.",
      "Debugged and fixed frontend issues to improve user experience in an existing web application.",
      "Collaborated remotely under the guidance of a lead freelancer working with multiple client contracts.",
    ],
  },
  {
    role: "iOS Developer",
    company: "Sans Services",
    startDate: "April 2025",
    endDate: "Present",
    description: [
      "Hired as a full-time iOS Developer while continuing to contribute to Android development.",
      "Responsible for building and maintaining iOS features in Swift and Xcode.",
      "Collaborated with cross-functional teams to enhance app performance and user experience.",
    ],
  },
];

export const listSkillsData: Skill[] = [
  // 🚀 Lenguajes de Programación
  {
    id: 1,
    skillName: "Java",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    category: "Language",
  },
  {
    id: 2,
    skillName: "JavaScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    category: "Language",
  },
  {
    id: 3,
    skillName: "TypeScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    category: "Language",
  },
  {
    id: 4,
    skillName: "Dart",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    category: "Language",
  },
  {
    id: 5,
    skillName: "Swift",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
    category: "Language",
  },
  {
    id: 6,
    skillName: "HTML",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    category: "Language",
  },
  {
    id: 7,
    skillName: "CSS",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    category: "Language",
  },

  // ⚛️ Frameworks & Libraries
  {
    id: 8,
    skillName: "Flutter",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    category: "Framework",
  },
  {
    id: 9,
    skillName: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    category: "Framework",
  },
  {
    id: 10,
    skillName: "Next.js",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    category: "Framework",
  },

  // 🗄️ Base de Datos
  {
    id: 11,
    skillName: "MongoDB",
    imageUrl: "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
    category: "Database",
  },

  // 🛠️ Herramientas & IDEs
  {
    id: 12,
    skillName: "GitHub",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    category: "Tool/IDE",
  },
  {
    id: 13,
    skillName: "Postman",
    imageUrl:
      "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-svg-png-download-3030217.png?f=webp",
    category: "Tool/IDE",
  },
  {
    id: 14,
    skillName: "VS Code",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png",
    category: "Tool/IDE",
  },
  {
    id: 15,
    skillName: "Android Studio",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1200px-Android_Studio_icon_%282023%29.svg.png",
    category: "Tool/IDE",
  },
  {
    id: 16,
    skillName: "Xcode",
    imageUrl: "https://upload.wikimedia.org/wikipedia/ru/0/0c/Xcode_icon.png",
    category: "Tool/IDE",
  },
  {
    id: 17,
    skillName: "TailwindCSS",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    category: "Framework",
  },
  {
    id: 18,
    skillName: "React Native",
    imageUrl: "https://www.cdnlogo.com/logos/r/18/react-native.svg",
    category: "Framework",
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
