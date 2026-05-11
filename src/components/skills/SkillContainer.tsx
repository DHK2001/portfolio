"use client";

import { Skill } from "@/models/models";
import React from "react";

type Props = {
  data: Skill;
};

const SkillContainer = ({ data }: Props) => {
  return (
    <div
      className="flex min-h-36 flex-col items-center justify-center rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-4 shadow-sm transition duration-200 ease-in-out hover:-translate-y-0.5 hover:border-[color:var(--primary)] hover:shadow-[0_10px_30px_var(--shadow-color)]"
    >
      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-md border border-slate-200 bg-white">
        <img
          src={data.imageUrl}
          alt={data.skillName}
          className="h-10 w-10 object-contain"
        />
      </div>
      <p className="text-center text-sm font-medium text-[color:var(--cards-text)]">
        {data.skillName}
      </p>
    </div>
  );
};

export default SkillContainer;
