import { Profile, Project, Skill, WorkExperience } from "@/models/models";

export const profileData: Profile = {
  name: "Derek Galeas",
  description:
    "Software Engineer with experience in mobile and web development. Skilled in implementing new features, maintaining applications, and ensuring seamless integration of designs using technologies such as Flutter, React, Next.js, and MongoDB.\n\nBachelor’s degree in Computer Systems Engineering, Unitec (2019 - 2024)",
  profilePicture: "/images/userImage.jpg",
  email: "dhenrygk12@gmail.com",
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
  degree: {
    name: "Bachelor’s degree in Computer Systems Engineering",
    src: "/images/certificates/diploma-unitec.jpg",
    issuer: "Unitec, San Pedro Sula, Honduras",
    date: "2024-06-15",
  },
};

export const workExperienceData: WorkExperience[] = [
  {
    role: "iOS Developer",
    company: "Sans Services",
    startDate: "April 2025",
    endDate: "Current",
    description: [
      "Hired as a full-time iOS Developer while continuing to contribute to Android development.",
      "Responsible for building and maintaining iOS features in Swift and Xcode.",
      "Collaborated with cross-functional teams to enhance app performance and user experience.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Project Collaboration",
    startDate: "January 2025",
    endDate: "March 2025",
    description: [
      "Contributed to frontend development on web projects using React, Next.js, HTML, CSS, and Tailwind CSS.",
      "Developed a QR code generator tool that allowed users to customize QR codes (colors, border styles, dot patterns) and download them.",
      "Debugged and fixed frontend issues to improve user experience in an existing web application.",
      "Collaborated remotely under the guidance of a lead freelancer working with multiple client contracts.",
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
      "A personal portfolio website built with Next.js (App Router) and TypeScript. Styled with TailwindCSS and featuring a global layout, responsive design, and a custom light/dark theme toggle. Includes smooth hover transitions for interactive elements, project showcase, and certificate viewer. Designed as my professional developer portfolio to highlight skills, experience, and projects.",
    image: "/images/projects/portfolio/portfolioHome.png",
  },
  {
    projectName: "Movie App",
    description:
      "A mobile movie application built with React Native, Expo Go, and TypeScript as a practice project to explore React Native. The app features a bottom navigation bar with sections for Home, Search, Saved, and Profile. The main functionality focuses on Home and Search, both integrated with TMDB APIs. The Search screen allows users to look up movies and displays results dynamically. Selecting a movie opens a detailed view showing overview, votes, genres, budget, revenue, and production companies, all fetched from TMDB. The app uses fetch with async/await promises for API requests and custom hooks for data management. Strongly typed interfaces were created to handle the API responses and ensure type safety throughout the project.",
    image: "/images/projects/movieApp/AppMovie.png",
  },
  {
    projectName: "Portfolio Website 2",
    description:
      "A second personal portfolio website built with Next.js and TypeScript as a simpler, more formal design tailored for a biomedical theme. Unlike the first portfolio, this version does not include an App Router or dark/light theme toggle. Navigation is handled through smooth scroll linking within a single-page layout. Each section features subtle animations using Framer Motion, and additional sections like Testimonials and Certificates are included. This project was created as practice to explore alternative approaches to portfolio design by building a single-page scroll-based site. The live version is deployed at https://portfolio-2-indol-seven.vercel.app/#home.",
    image: "/images/projects/portfolio2/portfolio1.png",
  },
  {
    projectName: "Favorite Places App",
    description:
      "A simple mobile application built with React Native, Expo Go, and JavaScript, created to practice the essentials of React Native and native device features. The app allows users to add favorite places by tapping the + icon, which opens a form to enter a title, capture a photo, and set a location. It integrates native mobile capabilities such as camera access for taking photos and geolocation. For location services, the app uses the free LocationIQ API to retrieve the user’s address when choosing 'Use Location,' or alternatively, users can pick a spot on a map with a live preview. Once saved, the place is added to the favorites list and displayed on the home screen. While small and simple in design, this project served as practice for working with native features like camera and location handling in both Android and iOS.",
    image: "/images/projects/FavoritePlacesApp/FavoritePlaces1.png",
  },
  {
    projectName: "Expense Tracker App",
    description:
      "A simple mobile application built with React Native, Expo Go, and JavaScript, designed to practice API integrations and database operations. The app features two main screens: 'Recent Expenses,' which displays expenses from the last 7 days, and 'All Expenses,' which lists all entries. Users can add new expenses via the + icon, entering a title, date, and description. Existing expenses can be selected to edit or delete. Data is displayed using FlatList for efficient rendering. The backend is powered by Firebase Realtime Database, allowing full CRUD functionality (GET, POST, PUT, DELETE) to add, update, and remove expense records. This project was created to gain hands-on experience working with remote databases and implementing CRUD operations in a mobile environment.",
    image: "/images/projects/expenseTracker/expenseTracker1.png",
  },
];
