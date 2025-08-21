import Title from "@/components/Title";
import { listSkillsData } from "@/constants/infoExample";

export default function Skills() {


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
        {listSkillsData.map((skill) => (
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
