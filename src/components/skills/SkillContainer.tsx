"use client";

import { Skill } from "@/models/models";
import React from "react";

type Props = {
  data: Skill;
};

const SkillContainer = ({ data }: Props) => {
  return (
    <div
      key={data.id}
      className="flex flex-col items-center justify-center p-4 bg-[color:var(--cards)] rounded-lg shadow-md
      transition-transform duration-300 ease-in-out
    hover:shadow-[0_6px_20px_var(--shadow-color)] hover:-translate-y-2"
    >
      <div
        className="w-20 h-20 flex items-center justify-center rounded-full 
               bg-[color:var(--image-bg)] shadow-sm mb-3"
      >
        <img
          src={data.imageUrl}
          alt={data.skillName}
          className="w-12 h-12 object-contain"
        />
      </div>
      <p className="text-center text-sm font-medium text-[color:var(--cards-text)]">
        {data.skillName}
      </p>
    </div>
  );
};

export default SkillContainer;
