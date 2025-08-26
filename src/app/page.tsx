"use client";

import Button from "@/components/Button";
import Description from "@/components/Description";
import IconButton from "@/components/IconButton";
import ImageDisplay from "@/components/ImageDisplay";
import Title from "@/components/Title";
import UserAvatar from "@/components/UserAvatar";
import { profileData } from "@/constants/infoExample";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Home() {
  const [openDisplay, setOpenDisplay] = useState(false);

  function iconOnClick(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleCloseDisplay() {
    setOpenDisplay(false);
  }

  function downloadPdf(url: string, filename: string) {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {openDisplay ? (
        <ImageDisplay
          imageUrl={profileData.degree.src}
          name={profileData.degree.name}
          closeDisplay={handleCloseDisplay}
        />
      ) : null}
      <UserAvatar imageUrl={profileData.profilePicture} />
      <Title text={`Hello, I'm ${profileData.name}`} />
      <div className="max-w-2xl text-center pb-2">
        <Description text={profileData.description} />
      </div>
      <div className="flex gap-4">
        <IconButton
          icon={faGithub}
          onClick={() => iconOnClick(profileData.githubUrl)}
        />
        <IconButton
          icon={faLinkedin}
          onClick={() => iconOnClick(profileData.linkedUrl)}
        />
      </div>
      <div className="flex gap-4">
        <Button
          text="Download CV"
          onClick={() =>
            downloadPdf("/docs/CV-Derek Galeas.pdf", `CV-${profileData.name}`)
          }
        />
        <Button text="View Degree" onClick={() => setOpenDisplay(true)} />
      </div>
    </div>
  );
}
