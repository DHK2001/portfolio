import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

const Button = ({ text, onClick, disabled = false, variant = "primary" }: Props) => {
  const styles =
    variant === "primary"
      ? "bg-[color:var(--primary)] text-[var(--button-text)] border-[color:var(--primary)]"
      : "bg-transparent text-[color:var(--primary-text)] border-[color:var(--border)]";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`min-h-11 w-full rounded-md border px-5 py-2.5 text-sm font-semibold shadow-sm transition duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_var(--shadow-color)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
