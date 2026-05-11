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
        className={`rounded-md px-3 py-3 text-base font-semibold transition-colors duration-200 hover:bg-[color:var(--muted-surface)] hover:text-[var(--highlight)] md:px-0 md:py-0 md:text-sm md:font-medium md:hover:bg-transparent ${
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
        className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--cards)] text-[color:var(--primary-text)] md:hidden"
        onClick={() => setIsOpen((v) => !v)}
      >
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faBars}
          className="h-5 w-5"
        />
      </button>

      {isOpen && (
        <button
          aria-hidden
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[55] bg-black/40 md:hidden"
        />
      )}

      <div
        id="mobile-menu"
        className={`fixed left-0 top-16 z-[60] h-[calc(100dvh-4rem)] w-72 max-w-[82vw]
          border-r border-[color:var(--border)] bg-[var(--menu)] shadow-2xl 
          md:hidden
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <ul className="flex flex-col gap-1 p-4">
          {navBarRouterList.map((item) => navButtons(item.path, item.name))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
