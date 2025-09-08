"use client";

import React from "react";
import Title from "@/components/Title";
import { workExperienceData } from "@/constants/infoExample";

const WorkExperience = () => {
  return (
    <section className="w-full flex flex-col items-center max-w-11/12 mx-auto">
      <Title text="Work Experience" classname="mb-8" />

      <div className="relative border-l-4 border-[color:var(--primary)] pl-6 space-y-10 w-full max-w-3xl">
        {workExperienceData.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[30px] top-2 w-5 h-5 rounded-full bg-[color:var(--primary)] border-4 border-[color:var(--bg)]"></div>
            <div className="bg-[color:var(--cards)] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[color:var(--highlight)]">
                {exp.role}
              </h3>
              <p className="text-[var(--secondary-text)] text-sm font-semibold mb-2">
                {exp.company} | {exp.startDate} - {exp.endDate}
              </p>
              <ul className="list-disc list-inside space-y-1 text-[var(--secondary-text)]">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
