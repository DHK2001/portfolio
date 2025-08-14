import React from "react";

const Description = ({ text }: { text: string }) => {
  return <p className="text-[var(--muted)] text-base">{text ?? ""}</p>;
};

export default Description;
