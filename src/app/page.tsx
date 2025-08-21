"use client";

import Button from "@/components/Button";
import Description from "@/components/Description";
import IconButton from "@/components/IconButton";
import Title from "@/components/Title";
import UserAvatar from "@/components/UserAvatar";
import { profileData } from "@/constants/infoExample";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  function iconOnClick(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4">
      <UserAvatar imageUrl={profileData.profilePicture} />
      <Title text={`Hello, I'm ${profileData.name}`} />
      <div className="max-w-2xl text-center">
        <Description text={profileData.description} />
      </div>
      <div className="flex gap-4">
        <IconButton
          icon={faGithub}
          onClick={() =>
            iconOnClick(profileData.githubUrl)
          }
        />
        <IconButton
          icon={faLinkedin}
          onClick={() =>
            iconOnClick(profileData.linkedUrl)
          }
        />
      </div>
      <Button text="Download CV" />
    </div>
  );
}
