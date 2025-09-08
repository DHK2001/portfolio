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
  // 🌐 Web Projects
  {
    projectName: "Portfolio Website",
    description: `A personal portfolio website built with Next.js (App Router) and TypeScript.
    
Styled with TailwindCSS and featuring a global layout, responsive design, and a custom light/dark theme toggle.
    
Includes smooth hover transitions for interactive elements, project showcase, and certificate viewer.
    
Designed as my professional developer portfolio to highlight skills, experience, and projects.`,
    image: ["/images/projects/portfolio/home.png"],
  },
  {
    projectName: "Portfolio Website 2",
    description: `A second personal portfolio website built with Next.js and TypeScript as a simpler, more formal design tailored for a biomedical theme.
    
Unlike the first portfolio, this version does not include an App Router or dark/light theme toggle.
    
Navigation is handled through smooth scroll linking within a single-page layout. Each section features subtle animations using Framer Motion, and additional sections like Testimonials and Certificates are included.
    
This project was created as practice to explore alternative approaches to portfolio design by building a single-page scroll-based site.
    
Live version: https://portfolio-2-indol-seven.vercel.app/#home`,
    image: [
      "/images/projects/portfolio2/home.png",
      "/images/projects/portfolio2/about.png",
      "/images/projects/portfolio2/experience.png",
      "/images/projects/portfolio2/portfolio.png",
      "/images/projects/portfolio2/testimonials.png",
      "/images/projects/portfolio2/certificates.png",
      "/images/projects/portfolio2/contact.png",
    ],
  },
  {
    projectName: "Weather App (React – Next.js)",
    description: `A simple weather application built with React, Next.js, and TypeScript that fetches real-time weather data using the OpenWeatherMap API.
    
Users can search for cities across different countries and view current weather conditions, including temperature, humidity, and wind speed.
    
The app demonstrates how to perform API GET requests, handle JSON responses, and display the results in a clean and responsive React UI.
    
TypeScript was used throughout the project to define types and interfaces for the API responses, ensuring type safety.
    
This project was developed to practice React + Next.js development, REST API integration, and responsive UI design.`,
    image: [
      "/images/projects/weatherNextApp/nyf.png",
      "/images/projects/weatherNextApp/nyc.png",
      "/images/projects/weatherNextApp/list.png",
      "/images/projects/weatherNextApp/hours.png",
    ],
  },

  // 📱 React Native (Cross-Platform) Projects
  {
    projectName: "Movie App",
    description: `A mobile movie application built with React Native, Expo Go, and TypeScript as a practice project to explore React Native.
    
Features:
- Bottom navigation bar with sections for Home, Search, Saved, and Profile.
- TMDB API integration for movie data.
- Search screen with dynamic results.
    
Selecting a movie opens a detailed view showing overview, votes, genres, budget, revenue, and production companies (all fetched from TMDB).
    
The app uses fetch with async/await promises for API requests and custom hooks for data management.
    
Strongly typed interfaces were created to handle the API responses and ensure type safety.`,
    image: [
      "/images/projects/movieApp/home.png",
      "/images/projects/movieApp/search.png",
      "/images/projects/movieApp/details.png",
    ],
  },
  {
    projectName: "Favorite Places App",
    description: `A simple mobile application built with React Native, Expo Go, and JavaScript, created to practice the essentials of React Native and native device features.
    
Users can add favorite places by tapping the + icon, which opens a form to enter a title, capture a photo, and set a location.
    
It integrates native mobile capabilities such as:
- Camera access for taking photos
- Geolocation with LocationIQ API
- Map preview and manual selection
    
Once saved, the place is added to the favorites list and displayed on the home screen.
    
This project served as practice for working with native features like camera and location handling in both Android and iOS.`,
    image: [
      "/images/projects/favoritePlacesApp/home.png",
      "/images/projects/favoritePlacesApp/add.png",
      "/images/projects/favoritePlacesApp/map.png",
    ],
  },
  {
    projectName: "Expense Tracker App",
    description: `A simple mobile application built with React Native, Expo Go, and JavaScript, designed to practice API integrations and database operations.
    
Features:
- 'Recent Expenses' screen (last 7 days).
- 'All Expenses' screen (all entries).
- Add, edit, and delete expenses.
    
Data is displayed using FlatList for efficient rendering.
    
Backend: Firebase Realtime Database with full CRUD (GET, POST, PUT, DELETE).
    
This project was created to gain hands-on experience working with remote databases and implementing CRUD operations in a mobile environment.`,
    image: [
      "/images/projects/expenseTracker/recent.png",
      "/images/projects/expenseTracker/all.png",
      "/images/projects/expenseTracker/add.png",
      "/images/projects/expenseTracker/edit.png",
    ],
  },
  {
    projectName: "Goals App",
    description: `A very simple mobile application built with React Native, Expo Go, and JavaScript as an introductory practice project.
    
Users can manage personal goals by tapping 'Add New Goal,' which opens a form to enter a goal description.
    
Added goals are displayed in a scrollable list.
    
This project provided a basic but effective exercise in:
- Handling user input
- State management
- List rendering in React Native.`,
    image: [
      "/images/projects/goalsApp/all.png",
      "/images/projects/goalsApp/add.png",
    ],
  },
  {
    projectName: "Mini Game App",
    description: `A small mobile game built with React Native, Expo Go, and JavaScript.
    
Gameplay:
- A random number is generated at the start.
- Player must guess it with hints ('Lower' or 'Higher').
- Each attempt is logged in a list.
    
Once guessed correctly, the app displays the correct number and total rounds taken.
    
Compared to other projects, this one is more visually engaging, featuring:
- A background image
- Gradient overlay
- More polished visuals.`,
    image: [
      "/images/projects/miniGameApp/start.png",
      "/images/projects/miniGameApp/guess.png",
      "/images/projects/miniGameApp/end.png",
    ],
  },
  {
    projectName: "Meals App",
    description: `A mobile menu application built with React Native, Expo Go, and JavaScript, created to practice navigation patterns and parameter passing.
    
Features:
- Category-based browsing (All Categories).
- Meal detail view with ingredients and steps.
- Favorites screen (drawer navigation).
    
The app combines stack and drawer navigation, demonstrates passing parameters (such as meal IDs), and uses context for managing favorites.
    
It was developed primarily to gain experience with navigation flows, nested navigators, and route parameter handling.`,
    image: [
      "/images/projects/menuApp/all.png",
      "/images/projects/menuApp/details.png",
      "/images/projects/menuApp/favorites.png",
      "/images/projects/menuApp/list.png",
    ],
  },

  // 🍏 iOS UIKit Projects
  {
    projectName: "Random Card Game App",
    description: `A simple iOS card game built with Swift, UIKit, and Storyboards using Xcode.
    
Gameplay:
- Displays random cards until the user presses 'Stop.'
- 'Stop' turns into 'Reset' to restart.
- 'Rules' button explains the game.
    
Card assets are stored in Assets catalog and displayed dynamically with UIImageView.
    
Developed to practice storyboard-based UI creation, UIKit components (UIImageView, UIButton), and managing dynamic images.
    
It also served as a comparison between storyboard-driven interfaces and code-based UI development.`,
    image: [
      "/images/projects/randomCardGame/home.png",
      "/images/projects/randomCardGame/rules.png",
    ],
  },
  {
    projectName: "Random Card Game App (UIKit – Code-Based UI)",
    description: `A simple iOS card game built entirely with Swift, UIKit, and programmatic UI using Xcode.
    
Gameplay:
- Displays random cards in a continuous loop.
- 'Stop' button pauses the loop (turns into 'Reset').
- 'Rules' button explains the game.
    
All assets are stored in Assets catalog and displayed dynamically with UIImageView.
    
Purpose: Practice programmatic UIKit (UIImageView, UIButton), dynamic image rendering, and user interaction.
    
This project serves as a direct comparison to the storyboard version.`,
    image: [
      "/images/projects/randomCardGameCode/home.png",
      "/images/projects/randomCardGameCode/rules.png",
    ],
  },
  {
    projectName: "Random Color Table App (UIKit)",
    description: `A simple iOS app built with Swift, UIKit, and Xcode that displays a list of dynamically generated random colors in a table view.
    
Features:
- UITableView rendering custom cells with random colors.
- Detail screen shows selected color as background.
- UIColor extension for random color generation.
    
The project demonstrates UIKit fundamentals:
- Table views
- Navigation flows
- Passing data between controllers (segues).`,
    image: [
      "/images/projects/randomColorTable/colors.png",
      "/images/projects/randomColorTable/color.png",
    ],
  },
  {
    projectName: "Movie App (UIKit – VIPER Architecture)",
    description: `An iOS movie application built with Swift, UIKit, and Xcode, structured using the VIPER architecture for modularity and maintainability.
    
Features:
- Fetches popular movies from API.
- UITableView with custom cells showing images and titles.
- Detail view shows summary and poster.
    
Architecture: Two main modules (ListOfMovies, DetailMovie) with VIPER (View, Interactor, Presenter, Entity, Router).
    
Demonstrates:
- Networking with REST APIs
- Navigation via Router
- Data mapping into ViewModels
- Dynamic UITableViewCells`,
    image: [
      "/images/projects/viperMovieApp/all.png",
      "/images/projects/viperMovieApp/details.png",
    ],
  },

  // 🍎 iOS SwiftUI Projects
  {
    projectName: "Coffee Shop App (SwiftUI)",
    description: `A customizable coffee shop app built with SwiftUI.
    
Features:
- Menu and customization options loaded from local JSON.
- Personalize drinks (size, caffeine, milk, syrup, etc.).
- Estimated caffeine and calories shown dynamically.
- Save custom drinks to order history.
    
Demonstrates:
- SwiftUI state management
- Dynamic UI updates
- Multi-view navigation
- Local JSON handling`,
    image: [
      "/images/projects/coffeeApp/home.png",
      "/images/projects/coffeeApp/drinks.png",
      "/images/projects/coffeeApp/add.png",
      "/images/projects/coffeeApp/details.png",
    ],
  },
  {
    projectName: "Places Information App (SwiftUI)",
    description: `A simple iOS application built with SwiftUI.
    
Features:
- Discover: Static info about a place.
- Map: Multiple locations from local JSON with interactive pins.
- Tips: Helpful guidance from JSON file.
    
Demonstrates:
- Multi-view navigation
- MapKit integration
- Local JSON data parsing
- Dynamic SwiftUI UI updates`,
    image: [
      "/images/projects/placesInfoApp/discover.png",
      "/images/projects/placesInfoApp/locations.png",
      "/images/projects/placesInfoApp/details.png",
      "/images/projects/placesInfoApp/tips.png",
      "/images/projects/placesInfoApp/info.png",
    ],
  },
  {
    projectName: "Weather App (SwiftUI – VIPER Architecture)",
    description: `A weather application built with SwiftUI and structured using the VIPER architecture.
    
Features:
- View current weather and 5-day forecast.
- Integrates with free weather API.
- Local mode fallback (WeatherTest.json).
    
SwiftUI UI:
- Modern and responsive.
- VIPER ensures separation of concerns, maintainability, and scalability.
    
Demonstrates:
- SwiftUI for UI
- API integration
- VIPER modular architecture in real-world scenarios.`,
    image: [
      "/images/projects/weatherApp/ny.png",
      "/images/projects/weatherApp/list.png",
      "/images/projects/weatherApp/ak.png",
      "/images/projects/weatherApp/ca.png",
    ],
  },

  // 🤖 Android Native Projects
  {
    projectName: "Simple Login Interface (Android – Java)",
    description: `A basic Android Studio application developed with Java to demonstrate a simple login interface and navigation between multiple screens.
    
Features:
- Hardcoded username and password ('test' / 'test') for validation.
- Option to save credentials.
- Navigate between three blank screens after login.
    
Focus: Frontend development, UI creation, and navigation basics.
    
This project does not include backend integration or specific architecture (practice only).`,
    image: [
      "/images/projects/androidLogin/login.png",
      "/images/projects/androidLogin/home.png",
      "/images/projects/androidLogin/profile.png",
      "/images/projects/androidLogin/trash.png",
    ],
  },
];
