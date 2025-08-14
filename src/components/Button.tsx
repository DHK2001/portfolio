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
      className="px-4 py-2 bg-[color:var(--button)] text-[var(--on-primary)] text-base font-bold rounded hover:bg-[var(--primary)] transition-colors cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;
