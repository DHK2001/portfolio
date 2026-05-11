"use client";
import {
  localStorageGetTheme,
  localStorageSetTheme,
} from "@/utils/local-storage-helpers";
import { faMoon, faSun, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorageGetTheme() ?? "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    document.body.classList.remove(`${theme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);
    setTheme(newTheme);
    localStorageSetTheme(newTheme);
  };

  if (!theme) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[color:var(--cards)]">
        <FontAwesomeIcon
          icon={faSpinner}
          className="h-4 w-4 text-[var(--primary)]"
          spin
        />
      </div>
    );
  }

  const isLight = theme === "light";

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--cards)] text-[color:var(--primary-text)] transition duration-200 hover:border-[color:var(--primary)] hover:text-[color:var(--highlight)]"
    >
      <FontAwesomeIcon icon={isLight ? faSun : faMoon} className="h-4 w-4" />
    </button>
  );
};

export default ThemeToggle;
