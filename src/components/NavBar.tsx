"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { navBarRouterList } from "@/constants/constants";

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
        className={`text-sm font-medium transition-colors duration-200 hover:text-[var(--highlight)] ${
          pathname === link
            ? "text-[var(--highlight)]"
            : "text-[var(--secondary-text)]"
        } `}
        onClick={() => setIsOpen(false)}
      >
        <a href={link}>{name}</a>
      </li>
    );
  };

  return (
    <nav className="w-fit">
      <ul className="hidden items-center gap-5 md:flex">
        {navBarRouterList.map((item) => navButtons(item.path, item.name))}
      </ul>

      <button
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="rounded-md border border-[color:var(--border)] bg-[color:var(--cards)] p-2 md:hidden"
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
          border-r border-[color:var(--border)] bg-[var(--menu)] shadow-xl 
          md:hidden z-50
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <ul className="flex flex-col gap-4 p-4">
          {navBarRouterList.map((item) => navButtons(item.path, item.name))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
