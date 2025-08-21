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
      <div
        className={`relative w-35 h-12 border-2 overflow-hidden 
           rounded-full bg-transparent border-[var(--primary)] flex items-center justify-between px-4 gap-1`}
      >
        <h2 className="whitespace-nowrap">Loading...</h2>
        <FontAwesomeIcon
          icon={faSpinner}
          size="lg"
          className="text-[var(--primary)]"
          spin
        />
      </div>
    );
  }

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-35 h-12 border-2 rounded-full overflow-hidden cursor-pointer
        transition-colors duration-300 bg-transparent border-[var(--primary)]"
    >
      <div
        className="absolute top-0 left-0 flex h-full w-fit transition-transform duration-500"
        style={{
          transform: isLight ? "translateX(0%)" : "translateX(-50%)",
        }}
      >
        {/* Light Mode */}
        <div className="flex items-center justify-between gap-1 w-1/2 px-4">
          <h2 className="whitespace-nowrap">Light Mode</h2>
          <div className="rounded-full flex items-center justify-center h-8 w-8 bg-[var(--primary)]">
            <FontAwesomeIcon icon={faSun} size="lg" color="white" />
          </div>
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between gap-1 w-1/2 px-4">
          <h2 className="whitespace-nowrap">Dark Mode</h2>
          <div className="rounded-full flex items-center justify-center h-8 w-8 bg-[var(--primary)]">
            <FontAwesomeIcon icon={faMoon} size="lg" color="black" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
