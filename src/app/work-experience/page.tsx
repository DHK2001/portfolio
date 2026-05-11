"use client";

import React from "react";
import Title from "@/components/Title";
import {
  workExperienceData,
  workExperiencePageData,
} from "@/constants/portfolioData";

const WorkExperience = () => {
  return (
    <section className="flex w-full flex-col gap-10">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--cards)] px-4 py-2 text-sm font-medium text-[color:var(--secondary-text)] shadow-sm">
            {workExperiencePageData.badge}
          </div>
          <Title text={workExperiencePageData.title} classname="text-left" />
          <p className="max-w-2xl text-base leading-7 text-[color:var(--secondary-text)]">
            {workExperiencePageData.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-4 shadow-sm">
            <p className="text-2xl font-bold text-[color:var(--primary-text)]">
              4
            </p>
            <p className="mt-1 text-sm text-[color:var(--secondary-text)]">
              professional roles
            </p>
          </div>
          <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-4 shadow-sm">
            <p className="text-2xl font-bold text-[color:var(--primary-text)]">
              Mobile
            </p>
            <p className="mt-1 text-sm text-[color:var(--secondary-text)]">
              strongest focus
            </p>
          </div>
          <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-4 shadow-sm">
            <p className="text-2xl font-bold text-[color:var(--primary-text)]">
              Present
            </p>
            <p className="mt-1 text-sm text-[color:var(--secondary-text)]">
              active role
            </p>
          </div>
        </div>
      </div>

      <div className="relative space-y-6 border-l border-[color:var(--border)] pl-5 sm:pl-8">
        {workExperienceData.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[29px] top-6 h-4 w-4 rounded-full border-4 border-[color:var(--bg)] bg-[color:var(--primary)] sm:-left-10"></div>
            <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-5 shadow-sm transition duration-200 hover:border-[color:var(--primary)] hover:shadow-[0_10px_30px_var(--shadow-color)] sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[color:var(--primary-text)]">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[color:var(--highlight)]">
                    {exp.company}
                  </p>
                </div>
                <p className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted-surface)] px-3 py-1 text-sm font-medium text-[color:var(--secondary-text)]">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted-surface)] px-3 py-1 text-xs font-semibold text-[color:var(--primary-text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--secondary-text)]">
                {exp.description.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--primary)]" />
                    <span>{item}</span>
                  </li>
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
