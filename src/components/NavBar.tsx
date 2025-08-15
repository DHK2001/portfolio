"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navButtons = (link: string, name: string) => {
    return (
      <li
        key={name}
        className={`hover:text-[var(--highlight)] transition-colors duration-300 ${
          pathname === link ? "text-[var(--highlight)]" : ""
        } `}
        onClick={() => setIsOpen(false)}
      >
        <a href={link}>{name}</a>
      </li>
    );
  };

  return (
    <nav className="w-fit">
      <ul className="hidden sm:flex items-center gap-6">
        {navButtons("/", "Home")}
        {navButtons("/about", "About")}
        {navButtons("/projects", "Projects")}
        {navButtons("/contact", "Contact")}
      </ul>

      <button
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="sm:hidden p-2 rounded hover:bg-[color:var(--header-footer)] cursor-pointer"
        onClick={() => setIsOpen((v) => !v)}
      >
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faBars}
          size="xl"
          className="hover:opacity-40"
        />
      </button>

      {isOpen && (
        <button
          aria-hidden
          onClick={() => setIsOpen(false)}
          className="fixed inset-0"
        />
      )}

      <div
        id="mobile-menu"
        className={`fixed top-16 left-0 h-full w-1/2 max-w-xs
          bg-[var(--menu)] shadow-xl 
          sm:hidden z-50
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <ul className="flex flex-col gap-4 p-4">
          {navButtons("/", "Home")}
          {navButtons("/about", "About")}
          {navButtons("/projects", "Projects")}
          {navButtons("/contact", "Contact")}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
