interface Route {
  path: string;
  name: string;
}

export const navBarRouterList: Route[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/work-experience",
    name: "Work Experience",
  },
  {
    path: "/skills",
    name: "Skills",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];
