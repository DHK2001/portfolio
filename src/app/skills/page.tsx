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
            className="flex flex-col items-center justify-center p-4 bg-[color:var(--cards)] rounded-lg shadow-md
            transition-transform duration-300 ease-in-out
            hover:shadow-[0_6px_20px_var(--shadow-color)] hover:-translate-y-2"
          >
            <div
              className="w-20 h-20 flex items-center justify-center rounded-full 
                       bg-[color:var(--image-bg)] shadow-sm mb-3"
            >
              <img
                src={skill.imageUrl}
                alt={skill.skillName}
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-center text-sm font-medium text-[color:var(--cards-text)]">
              {skill.skillName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
