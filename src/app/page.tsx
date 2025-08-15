import Button from "@/components/Button";
import Description from "@/components/Description";
import Title from "@/components/Title";
import UserAvatar from "@/components/UserAvatar";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4">
      <UserAvatar imageUrl="" />
      <Title text="Hello, I'm Abhinay" />
      <div className="max-w-2xl text-center">
        <Description text="I have 2+ years of experience contributing to a low-code product’s core codebase, combining full-stack and mobile expertise to solve real-world challenges." />
      </div>
      <Button text="Download CV" />
    </div>
  );
}
