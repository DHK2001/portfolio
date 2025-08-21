"use client";

import Title from "@/components/Title";
import { projectsData } from "@/constants/infoExample";

export default function Projects() {

  const handleClick = (projectName: string) => {
    console.log(`Clicked project: ${projectName}`);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-10 px-4">
      <Title text="My Projects" />

      <div className="flex flex-col gap-12 w-full max-w-6xl">
        {projectsData.map((project, index) => (
          <div
            key={project.projectName}
            onClick={() => handleClick(project.projectName)}
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
            <img
              src={project.image}
              alt={project.projectName}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />

            <div className="flex flex-col gap-3 md:w-1/2">
              <h3 className="text-xl font-bold text-[var(--primary)]">
                {project.projectName}
              </h3>
              <p className="text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
