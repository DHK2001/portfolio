import React from "react";

const Description = ({ text }: { text: string }) => {
  return (
    <p className="text-base leading-7 text-[var(--secondary-text)] whitespace-pre-line">
      {text ?? ""}
    </p>
  );
};

export default Description;
