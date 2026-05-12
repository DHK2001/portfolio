"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { portfolioLabels } from "@/constants/portfolioData";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { navigation } = portfolioLabels;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navButtons = (link: string, name: string) => {
    const isActive = pathname === link;

    return (
      <li
        key={name}
        onClick={() => setIsOpen(false)}
      >
        <Link
          href={link}
          className={`block rounded-md px-3 py-3 text-base font-semibold transition-colors duration-200 hover:bg-[color:var(--muted-surface)] hover:text-[var(--highlight)] md:px-3 md:py-2 md:text-sm md:font-medium ${
            isActive
              ? "bg-[color:var(--muted-surface)] text-[var(--highlight)]"
              : "text-[var(--secondary-text)]"
          }`}
        >
          {name}
        </Link>
      </li>
    );
  };

  return (
    <nav className="w-fit">
      <ul className="hidden items-center rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-1 shadow-sm md:flex">
        {navigation.items.map((item) => navButtons(item.path, item.name))}
      </ul>

      <button
        aria-label={
          isOpen ? navigation.closeMenuLabel : navigation.openMenuLabel
        }
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--cards)] text-[color:var(--primary-text)] md:hidden"
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
        <div className="border-b border-[color:var(--border)] px-4 py-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--secondary-text)]">
            {navigation.navigationLabel}
          </p>
        </div>
        <ul className="flex flex-col gap-1 p-4">
          {navigation.items.map((item) => navButtons(item.path, item.name))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
