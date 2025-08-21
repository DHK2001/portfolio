"use client";

import Button from "@/components/Button";
import Description from "@/components/Description";
import IconButton from "@/components/IconButton";
import Title from "@/components/Title";
import UserAvatar from "@/components/UserAvatar";
import { Profile } from "@/models/models";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  function iconOnClick(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const profile: Profile = {
    name: "Abhinay",
    description:
      "I have 2+ years of experience contributing to a low-code product’s core codebase, combining full-stack and mobile expertise to solve real-world challenges.",
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4">
      <UserAvatar imageUrl="" />
      <Title text={`Hello, I'm ${profile.name}`} />
      <div className="max-w-2xl text-center">
        <Description text={profile.description} />
      </div>
      <div className="flex gap-4">
        <IconButton
          icon={faGithub}
          onClick={() =>
            iconOnClick("https://github.com/DHK2001?tab=repositories")
          }
        />
        <IconButton
          icon={faLinkedin}
          onClick={() =>
            iconOnClick("https://www.linkedin.com/in/derek-galeas-00ba83358")
          }
        />
      </div>
      <Button text="Download CV" />
    </div>
  );
}
