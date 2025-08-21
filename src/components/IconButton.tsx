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
      className={`px-3 py-2 bg-transparent border-2 border-[color:var(--primary)] text-[var(--button-text)] hover:opacity-60 text-base font-bold rounded-md transition-colors cursor-pointer`}
    >
      <FontAwesomeIcon icon={icon} size="xl" color="var(--icon)" className="h-6 w-6" />
    </button>
  );
};

export default IconButton;
