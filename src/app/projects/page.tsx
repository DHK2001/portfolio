"use client";

import ImageProjectsDisplay from "@/components/projects/imageProjectsDisplay";
import Title from "@/components/Title";
import { projectsData } from "@/constants/infoExample";
import { Project } from "@/models/models";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleClick = (project: Project) => {
    setSelectedProject(project);
    setOpenDisplay(true);
  };
  const [openDisplay, setOpenDisplay] = useState(false);
  function handleCloseDisplay() {
    setOpenDisplay(false);
  }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-10 px-4 max-w-11/12 mx-auto">
      <Title text="My Projects" />
      {openDisplay ? (
        <ImageProjectsDisplay
          imageUrl={selectedProject?.image ?? []}
          name={selectedProject?.projectName ?? ""}
          closeDisplay={handleCloseDisplay}
        />
      ) : null}
      <div className="flex flex-col gap-12 w-full max-w-6xl">
        {projectsData.map((project, index) => (
          <div key={index}>
            <div
              key={project.projectName}
              onClick={() => handleClick(project)}
              className={`
              flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6 
              bg-[var(--cards)] text-[var(--cards-text)] 
              shadow-md rounded-xl p-6 
              cursor-pointer transition-transform duration-300 ease-in-out
              hover:shadow-[0_6px_20px_var(--shadow-color)] hover:-translate-y-2
            `}
            >
              <div className="w-full md:w-1/2 h-64 relative">
                <Image
                  src={project.image[0]}
                  alt={project.projectName}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-3 md:w-1/2">
                <h3 className="text-xl font-bold text-[var(--primary)]">
                  {project.projectName}
                </h3>
                <p className="text-base">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
