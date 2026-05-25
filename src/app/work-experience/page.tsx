"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Title from "@/components/Title";
import {
  workExperienceData,
  workExperiencePageData,
} from "@/constants/portfolioData";

const WorkExperience = () => {
  return (
    <section className="flex w-full flex-col gap-8 sm:gap-10">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <ScrollReveal className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--cards)] px-4 py-2 text-sm font-medium text-[color:var(--secondary-text)] shadow-sm">
            {workExperiencePageData.badge}
          </div>
          <Title
            text={workExperiencePageData.title}
            classname="text-center lg:text-left"
          />
          <p className="max-w-2xl text-base leading-7 text-[color:var(--secondary-text)]">
            {workExperiencePageData.description}
          </p>
        </ScrollReveal>

        <div className="grid gap-3 sm:grid-cols-3">
          {workExperiencePageData.stats.map((stat, index) => (
            <ScrollReveal
              key={stat.title}
              delay={index * 90}
              className="rounded-lg border border-(--border) bg-(--cards) p-4 shadow-sm"
            >
              <p className="text-2xl font-bold text-[color:var(--primary-text)]">
                {stat.title}
              </p>
              <p className="mt-1 text-sm text-[color:var(--secondary-text)]">
                {stat.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="relative space-y-5 border-l border-[color:var(--border)] pl-4 sm:space-y-6 sm:pl-8">
        {workExperienceData.map((exp, index) => (
          <ScrollReveal key={index} delay={(index % 3) * 90} className="relative">
            <div className="absolute -left-[25px] top-5 h-4 w-4 rounded-full border-4 border-[color:var(--bg)] bg-[color:var(--primary)] sm:-left-10 sm:top-6"></div>
            <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-4 shadow-sm transition duration-200 hover:border-[color:var(--primary)] hover:shadow-[0_10px_30px_var(--shadow-color)] sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[color:var(--primary-text)] sm:text-xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[color:var(--highlight)]">
                    {exp.company}
                  </p>
                </div>
                <p className="w-fit rounded-full border border-[color:var(--border)] bg-[color:var(--muted-surface)] px-3 py-1 text-xs font-medium text-[color:var(--secondary-text)] sm:text-sm">
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
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
