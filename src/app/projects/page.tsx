"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  projectsData,
  projectsPageData,
} from "@/constants/portfolioData";
import Title from "@/components/Title";
import ImageProjectsDisplay from "@/components/projects/ImageProjectsDisplay";
import { Project } from "@/models/models";

function getProjectCategory(project: Project) {
  const content = `${project.projectName} ${project.description}`.toLowerCase();

  if (content.includes("react native") || content.includes("expo")) {
    return "React Native";
  }

  if (
    content.includes("swift") ||
    content.includes("uikit") ||
    content.includes("swiftui") ||
    content.includes("xcode")
  ) {
    return "iOS";
  }

  if (content.includes("android")) {
    return "Android";
  }

  return "Web";
}

function getProjectStack(project: Project) {
  const content = `${project.projectName} ${project.description}`.toLowerCase();
  const stackMap = [
    ["React Native", "react native"],
    ["Expo", "expo"],
    ["TypeScript", "typescript"],
    ["JavaScript", "javascript"],
    ["Next.js", "next.js"],
    ["React", "react"],
    ["SwiftUI", "swiftui"],
    ["UIKit", "uikit"],
    ["Swift", "swift"],
    ["Flutter", "flutter"],
    ["Java", "java"],
    ["MongoDB", "mongodb"],
    ["Firebase", "firebase"],
  ];

  return stackMap
    .filter(([, needle]) => content.includes(needle))
    .map(([label]) => label)
    .slice(0, 4);
}

function getProjectSummary(project: Project) {
  return project.description
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.length > 0 && !line.endsWith(":")) ?? "";
}

function ProjectCard({
  project,
  priority,
  onClick,
}: {
  project: Project;
  priority: boolean;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const category = getProjectCategory(project);
  const stack = getProjectStack(project);
  const summary = getProjectSummary(project);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--primary)] hover:shadow-[0_10px_30px_var(--shadow-color)]"
    >
      <div className="relative aspect-[16/10] w-full bg-[color:var(--muted-surface)]">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-9 w-9 animate-spin rounded-full border-4 border-[var(--primary)] border-t-transparent" />
          </div>
        )}

        <Image
          src={project.image[0]}
          alt={project.projectName}
          fill
          className={`object-contain p-4 transition duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          priority={priority}
          onLoadingComplete={() => setLoaded(true)}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-[color:var(--primary-text)]">
            {project.projectName}
          </h3>
          <span className="shrink-0 rounded-full border border-[color:var(--border)] bg-[color:var(--muted-surface)] px-3 py-1 text-xs font-semibold text-[color:var(--secondary-text)]">
            {category}
          </span>
        </div>

        <p className="line-clamp-4 text-sm leading-6 text-[color:var(--secondary-text)]">
          {summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted-surface)] px-3 py-1 text-xs font-semibold text-[color:var(--primary-text)]"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-sm font-semibold text-[color:var(--highlight)]">
          View screenshots
        </p>
      </div>
    </button>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState(projectsPageData.filters[0]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectsData;
    }

    return projectsData.filter(
      (project) => getProjectCategory(project) === activeFilter
    );
  }, [activeFilter]);

  const handleClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section className="flex h-full w-full flex-col gap-10">
      {selectedProject ? (
        <ImageProjectsDisplay
          imageUrl={selectedProject.image}
          name={selectedProject.projectName}
          closeDisplay={() => setSelectedProject(null)}
        />
      ) : null}

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--cards)] px-4 py-2 text-sm font-medium text-[color:var(--secondary-text)] shadow-sm">
            {projectsPageData.badge}
          </div>
          <Title text={projectsPageData.title} classname="text-left" />
          <p className="max-w-2xl text-base leading-7 text-[color:var(--secondary-text)]">
            {projectsPageData.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          {projectsPageData.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-[color:var(--primary)] bg-[color:var(--primary)] text-[color:var(--button-text)]"
                  : "border-[color:var(--border)] bg-[color:var(--cards)] text-[color:var(--secondary-text)] hover:border-[color:var(--primary)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.projectName}
            project={project}
            priority={index < 3}
            onClick={() => handleClick(project)}
          />
        ))}
      </div>
    </section>
  );
}
