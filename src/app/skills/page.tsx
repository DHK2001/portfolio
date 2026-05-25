"use client";

import CertificateSection from "@/components/skills/CertificateSection";
import GridTable from "@/components/skills/GridTable";
import ScrollReveal from "@/components/ScrollReveal";
import SkillContainer from "@/components/skills/SkillContainer";
import Title from "@/components/Title";
import { listSkillsData, skillsPageData } from "@/constants/portfolioData";
import Image from "next/image";
import { useMemo } from "react";

export default function Skills() {
  const dataByCategory = useMemo(() => {
    const groups = new Map<string, typeof listSkillsData>();
    for (const s of listSkillsData) {
      const arr = groups.get(s.category) ?? [];
      arr.push(s);
      groups.set(s.category, arr);
    }
    return groups;
  }, []);

  const dataByName = useMemo(() => {
    return new Map(listSkillsData.map((skill) => [skill.skillName, skill]));
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-8 sm:gap-10">
      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-8">
        <ScrollReveal className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--cards)] px-4 py-2 text-sm font-medium text-[color:var(--secondary-text)] shadow-sm">
            {skillsPageData.badge}
          </div>
          <Title
            text={skillsPageData.title}
            classname="text-center lg:text-left"
          />
          <p className="max-w-2xl text-base leading-7 text-[color:var(--secondary-text)]">
            {skillsPageData.description}
          </p>
        </ScrollReveal>

        <div className="grid gap-3 sm:grid-cols-3">
          {skillsPageData.focusGroups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              as="article"
              delay={index * 90}
              className="rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-4 shadow-sm"
            >
              <h3 className="text-base font-bold text-[color:var(--primary-text)]">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--secondary-text)]">
                {group.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skillName) => {
                  const skill = dataByName.get(skillName);

                  return (
                    <span
                      key={skillName}
                      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--muted-surface)] px-3 py-1 text-xs font-semibold text-[color:var(--primary-text)]"
                    >
                      {skill ? (
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-white">
                          <Image
                            src={skill.imageUrl}
                            alt=""
                            width={14}
                            height={14}
                            unoptimized
                            className="h-3.5 w-3.5 object-contain"
                          />
                        </span>
                      ) : null}
                      {skillName}
                    </span>
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {skillsPageData.sections.map(({ title, description, category }) => {
        const items = dataByCategory.get(category) ?? [];
        if (!items.length) return null;

        return (
          <ScrollReveal key={category} as="section" className="w-full">
            <div className="mb-5 flex flex-col gap-1 border-b border-[color:var(--border)] pb-4">
              <h2 className="text-2xl font-bold text-[color:var(--primary-text)]">
                {title}
              </h2>
              <p className="text-sm text-[color:var(--secondary-text)]">
                {description}
              </p>
            </div>

            <GridTable>
              {items.map((skill) => (
                <SkillContainer key={skill.id} data={skill} />
              ))}
            </GridTable>
          </ScrollReveal>
        );
      })}

      <CertificateSection />
    </div>
  );
}
