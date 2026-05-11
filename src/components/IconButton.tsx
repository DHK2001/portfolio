"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  icon: IconDefinition;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const IconButton = ({ icon, label = "Open link", onClick, disabled }: Props) => {
  return (
    <button
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--cards)] text-[var(--button-text)] shadow-sm transition duration-200 ease-in-out hover:-translate-y-0.5 hover:border-[color:var(--primary)] hover:shadow-[0_10px_30px_var(--shadow-color)] disabled:cursor-not-allowed disabled:opacity-50"
    >
      <FontAwesomeIcon
        icon={icon}
        color="var(--icon)"
        className="h-5 w-5"
      />
    </button>
  );
};

export default IconButton;
