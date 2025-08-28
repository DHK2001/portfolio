import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ text, onClick, disabled=false }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 bg-[color:var(--primary)] text-[var(--button-text)] shadow-md transition-transform duration-300 ease-in-out hover:shadow-[0_6px_20px_var(--shadow-color)] hover:-translate-y-1  text-base font-bold rounded-md cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
