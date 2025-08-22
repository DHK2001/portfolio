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
    <h2 className={`font-bold text-4xl text-center ${classname}`}>{text}</h2>
  );
};

export default Title;
