import Title from "@/components/Title";
import { Skill } from "@/models/models";

export default function Skills() {
  const listSkills: Skill[] = [
    { id: 1, skillName: "React", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" },
    { id: 2, skillName: "Next.js", imageUrl: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" },
    { id: 3, skillName: "TailwindCSS", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
    { id: 4, skillName: "TypeScript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/250px-Typescript_logo_2020.svg.png" },
    { id: 5, skillName: "Node.js", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-6 px-4">
      <Title text="My Skills" />

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          w-full
          max-w-6xl
        "
      >
        {listSkills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center p-4 bg-[color:var(--cards)] shadow rounded-lg"
          >
            <img
              src={skill.imageUrl}
              alt={skill.skillName}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-center text-sm font-medium text-[color:var(--cards-text)]">
              {skill.skillName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
