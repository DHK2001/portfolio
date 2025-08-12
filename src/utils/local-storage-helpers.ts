export function localStorageSetTheme(theme: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }
  
  export function localStorageGetTheme() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme");
    }
    return "light";
  }