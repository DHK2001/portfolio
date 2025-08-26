import React from "react";

const Description = ({ text }: { text: string }) => {
  return (
    <p className="text-[var(--secondary-text)] text-base whitespace-pre-line">
      {text ?? ""}
    </p>
  );
};

export default Description;
