import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ text, onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-[color:var(--primary)] text-[var(--button-text)] hover:opacity-60 text-base font-bold rounded-md transition-colors cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
