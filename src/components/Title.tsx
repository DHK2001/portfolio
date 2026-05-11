"use client";

import React from "react";

const Title = ({
  text,
  classname = "",
}: {
  text: string;
  classname?: string;
}) => {
  return (
    <h2
      className={`text-center text-3xl font-bold leading-tight text-[color:var(--primary-text)] sm:text-4xl ${classname}`}
    >
      {text}
    </h2>
  );
};

export default Title;
