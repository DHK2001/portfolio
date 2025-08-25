"use client";

import GridTable from "@/components/skills/GridTable";
import SkillContainer from "@/components/skills/SkillContainer";
import Title from "@/components/Title";
import { listSkillsData } from "@/constants/infoExample";
import { Skill } from "@/models/models";
import { useMemo } from "react";

type Section = { title: string; category: Skill["category"] };

export default function Skills() {
  const sections: Section[] = useMemo(
    () => [
      { title: "Languages", category: "Language" },
      { title: "Frameworks", category: "Framework" },
      { title: "Tool/IDE", category: "Tool/IDE" },
      { title: "Databases", category: "Database" },
    ],
    []
  );

  const dataByCategory = useMemo(() => {
    const groups = new Map<Skill["category"], Skill[]>();
    for (const s of listSkillsData) {
      const arr = groups.get(s.category) ?? [];
      arr.push(s);
      groups.set(s.category, arr);
    }
    return groups;
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <Title text="My Skills" />

      {sections.map(({ title, category }) => {
        const items = dataByCategory.get(category) ?? [];
        if (!items.length) return null;

        return (
          <section key={category} className="w-full p-6">
            <h2 className="text-[var(--secondary-text)] text-2xl font-semibold mb-6 border-b border-[var(--shadow-color)] pb-2">
              {title}
            </h2>

            <GridTable>
              {items.map((skill) => (
                <SkillContainer key={skill.id} data={skill} />
              ))}
            </GridTable>
          </section>
        );
      })}
    </div>
  );
}
