"use client";

import Button from "@/components/Button";
import Description from "@/components/Description";
import IconButton from "@/components/IconButton";
import Title from "@/components/Title";
import UserAvatar from "@/components/UserAvatar";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  function iconOnClick(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4">
      <UserAvatar imageUrl="" />
      <Title text="Hello, I'm Abhinay" />
      <div className="max-w-2xl text-center">
        <Description text="I have 2+ years of experience contributing to a low-code product’s core codebase, combining full-stack and mobile expertise to solve real-world challenges." />
      </div>
      <div className="flex gap-4">
        <IconButton icon={faGithub} onClick={() => iconOnClick("https://github.com/DHK2001?tab=repositories")} />
        <IconButton icon={faLinkedin} onClick={() => iconOnClick("")} />
      </div>
      <Button text="Download CV" />
    </div>
  );
}
