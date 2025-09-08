"use client";

import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  icon: IconDefinition;
  onClick?: () => void;
  disabled?: boolean;
};

const IconButton = ({ icon, onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 bg-transparent border-2 border-[color:var(--primary)] text-[var(--button-text)] shadow-md transition-transform duration-300 ease-in-out hover:shadow-[0_6px_20px_var(--shadow-color)] hover:-translate-y-1 text-base font-bold rounded-md cursor-pointer`}
    >
      <FontAwesomeIcon
        icon={icon}
        size="xl"
        color="var(--icon)"
        className="h-6 w-6 text-xl"
      />
    </button>
  );
};

export default IconButton;
