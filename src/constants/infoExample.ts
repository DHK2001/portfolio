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
    projectName: "Weather App (React – Next.js)",
    description:
      "A simple weather application built with React, Next.js, and TypeScript that fetches real-time weather data using the OpenWeatherMap API. Users can search for cities across different countries and view current weather conditions, including temperature, humidity, and wind speed. The app demonstrates how to perform API GET requests, handle JSON responses, and display the results in a clean and responsive React UI. TypeScript was used throughout the project to define types and interfaces for the API responses, ensuring type safety. This project was developed to practice React + Next.js development, REST API integration, and responsive UI design.",
    image: "/images/projects/weatherNextApp/WeatherNextApp1.png",
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
    projectName: "Random Card Game App",
    description:
      "A simple iOS card game built with Swift, UIKit, and Storyboards using Xcode. The app continuously displays random card images from a deck until the user presses the 'Stop' button, which then changes to 'Reset' to restart the card rotation. A 'Rules' button provides the game’s instructions. Card assets are stored in the Assets catalog and displayed dynamically with UIImageView. The project was developed to practice storyboard-based UI creation, working with UIKit components such as UIImageView and UIButton, and managing dynamic images. It also served as a comparison between Storyboard-driven interfaces and code-based UI development, highlighting the advantages and limitations of each approach.",
    image: "/images/projects/randomCardGame/RandomCardGame1.png",
  },
  {
    projectName: "Random Card Game App (UIKit – Code-Based UI)",
    description:
      "A simple iOS card game built entirely with Swift, UIKit, and programmatic UI using Xcode. The app displays random card images from a deck in a continuous loop until the 'Stop' button is pressed, which then changes to 'Reset' to restart the cycle. A 'Rules' button provides the game’s instructions. All card assets are stored in the Assets catalog and displayed dynamically using UIImageView. The purpose of this project was to gain experience building interfaces purely in code without Storyboards, practicing UIKit components such as UIImageView and UIButton, and learning to handle dynamic image rendering and user interactions programmatically. This project serves as a direct comparison to the storyboard-based version, highlighting the advantages and challenges of code-based UI development.",
    image: "/images/projects/randomCardGameCode/RandomCardGame1.png",
  },
  {
    projectName: "Random Color Table App (UIKit)",
    description:
      "A simple iOS app built with Swift, UIKit, and Xcode that displays a list of dynamically generated random colors in a table view. Each cell shows a unique color, and tapping a cell navigates to a detail screen where the background color matches the selected cell. The app demonstrates the use of UITableView for rendering custom cells, navigation between view controllers, and passing data using segues. It also includes a UIColor extension for random color generation. The project was developed to practice UIKit fundamentals such as table views, navigation flows, and data passing between controllers.",
    image: "/images/projects/randomColorTable/RandomColorTable1.png",
  },
  {
    projectName: "Movie App (UIKit – VIPER Architecture)",
    description:
      "An iOS movie application built with Swift, UIKit, and Xcode, structured using the VIPER architecture for modularity and maintainability. The app fetches popular movies from an external API and displays them in a UITableView with custom cells showing images and titles. Selecting a movie navigates to a detailed view with the movie’s image and summary. The project is organized into two main modules—ListOfMovies and DetailMovie—each following the VIPER pattern (View, Interactor, Presenter, Entity, Router). This approach ensures clear separation of concerns, easy scalability, and maintainable code. The app demonstrates networking with REST APIs, navigation via a router, data mapping into ViewModels, and the use of custom UITableViewCells to present movie data dynamically.",
    image: "/images/projects/viperMovieApp/ViperMovieApp1.png",
  },
  {
    projectName: "Coffee Shop App (SwiftUI)",
    description:
      "A customizable coffee shop app built with SwiftUI, allowing users to personalize drinks and view their order history. The menu and customization options are loaded locally from a JSON file (menu.json), without the use of external APIs or backends. Users can create new custom drinks by selecting a base drink and adjusting size, caffeine shots, decaf option, milk, and syrup, while viewing estimated caffeine and calorie values. Once customized, drinks can be saved to the order history for future reference. The app demonstrates SwiftUI concepts such as state management, dynamic UI updates, multi-view navigation, and local JSON data handling.",
    image: "/images/projects/coffeeApp/CoffeeApp1.png",
  },
  {
    projectName: "Places Information App (SwiftUI)",
    description:
      "A simple iOS application built with SwiftUI that displays information about various places across three main sections: Discover, Map, and Tips. The Discover view shows static information about a place, the Map view displays multiple locations from a local JSON file with interactive pins that navigate to detailed views, and the Tips view provides helpful guidance loaded from another JSON file. The project demonstrates working with multi-view navigation, MapKit integration, and local JSON data parsing. It was developed to practice core SwiftUI concepts such as navigation, map integration, and dynamic data handling without relying on external APIs or backends.",
    image: "/images/projects/placesInfoApp/PlacesInfoApp1.png",
  },
  {
    projectName: "Simple Login Interface (Android – Java)",
    description:
      "A basic Android Studio application developed with Java to demonstrate a simple login interface and navigation between multiple screens. The app includes a hardcoded username and password ('test' / 'test') for login validation, with an option to save the credentials. After a successful login, users can navigate between three blank screens as a way to practice screen-to-screen navigation. This project does not include backend integration or a specific architecture, as its main purpose was to focus on frontend development, UI creation, and basic navigation in Android Studio.",
    image: "/images/projects/androidLogin/AndroidLogin1.png",
  },
  {
    projectName: "Weather App (SwiftUI – VIPER Architecture)",
    description:
      "A weather application built with SwiftUI and structured using the VIPER architecture. The app allows users to view current weather conditions and a 5-day forecast for a selected city by integrating with a free weather API. To handle API request limits, the app can switch to a local mode that loads static weather data from a JSON file (WeatherTest.json). The SwiftUI interface provides a responsive and modern design, while the VIPER architecture ensures clear separation of concerns, maintainability, and scalability. This project demonstrates the practical use of SwiftUI for UI design, API integration for real-time data, and VIPER for modular architecture in a real-world scenario.",
    image: "/images/projects/weatherApp/WeatherApp1.png",
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
  {
    projectName: "Goals App",
    description:
      "A very simple mobile application built with React Native, Expo Go, and JavaScript as an introductory practice project. The app allows users to manage personal goals by tapping 'Add New Goal,' which opens a form to enter a goal description. Users can then add the goal to the list or cancel the action. Added goals are displayed in a scrollable list, providing a basic but effective exercise in working with user input, state management, and list rendering in React Native.",
    image: "/images/projects/goalsApp/GoalsApp1.png",
  },
  {
    projectName: "Mini Game App",
    description:
      "A small mobile game built with React Native, Expo Go, and JavaScript. At the start of the app, a random number is generated, and the player must guess it by entering numbers until the correct one is found. Each attempt is logged in a list showing the guessed numbers and the current round. The game provides hints with 'Lower' or 'Higher' feedback until the random number is guessed. Once completed, the app displays the correct number and the total number of rounds it took. Compared to other projects, this one is more visually engaging, featuring a background image with a gradient overlay for a more polished look.",
    image: "/images/projects/miniGameApp/MiniGame1.png",
  },
  {
    projectName: "Meals App",
    description:
      "A mobile menu application built with React Native, Expo Go, and JavaScript, created to practice navigation patterns and parameter passing in React Native. The app features category-based browsing with an 'All Categories' screen that lists available meal categories. Selecting a category displays a list of meals, and choosing a meal opens a detailed view showing its ingredients and preparation steps. Users can also mark meals as favorites, which are displayed in a dedicated 'Favorites' screen accessible via the drawer. The app combines stack and drawer navigation, demonstrates passing parameters (such as meal IDs) through routes, and uses context for managing favorite meals. It was developed primarily to gain experience with navigation flows, nested navigators, and route parameter handling.",
    image: "/images/projects/menuApp/MenuApp1.png",
  },
];
