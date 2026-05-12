"use client";

import Button from "@/components/Button";
import Description from "@/components/Description";
import IconButton from "@/components/IconButton";
import ImageDisplay from "@/components/ImageDisplay";
import Title from "@/components/Title";
import UserAvatar from "@/components/UserAvatar";
import { homeData, profileData } from "@/constants/portfolioData";
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
    <section className="flex min-h-[calc(100dvh-10rem)] flex-col justify-start gap-8 lg:justify-center lg:gap-12">
      {openDisplay ? (
        <ImageDisplay
          imageUrl={profileData.degree.src}
          name={profileData.degree.name}
          closeDisplay={handleCloseDisplay}
        />
      ) : null}

      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="flex flex-col items-start gap-5 sm:gap-6">
          <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--cards)] px-4 py-2 text-sm font-medium text-[color:var(--secondary-text)] shadow-sm">
            {homeData.badge}
          </div>

          <div className="space-y-4">
            <Title
              text={`Hello, I'm ${profileData.name}`}
              classname="text-left sm:text-5xl"
            />
            <p className="max-w-2xl text-base leading-7 text-[color:var(--secondary-text)] sm:text-lg sm:leading-8">
              {homeData.subtitle}
            </p>
          </div>

          <div className="max-w-2xl">
            <Description text={profileData.description} />
          </div>

          <div className="flex flex-wrap gap-2">
            {homeData.featuredTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted-surface)] px-3 py-1 text-sm font-medium text-[color:var(--primary-text)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid w-full grid-cols-1 gap-3 sm:flex sm:w-auto sm:flex-row">
            <Button
              text={homeData.primaryActionLabel}
              onClick={() =>
                downloadPdf(
                  "/docs/CV-Derek Galeas.pdf",
                  `${homeData.cvFileNamePrefix}-${profileData.name}`
                )
              }
            />
            <Button
              text={homeData.secondaryActionLabel}
              variant="secondary"
              onClick={() => setOpenDisplay(true)}
            />
          </div>

          <div className="flex gap-3">
            <IconButton
              icon={faGithub}
              label={homeData.githubLabel}
              onClick={() => iconOnClick(profileData.githubUrl)}
            />
            <IconButton
              icon={faLinkedin}
              label={homeData.linkedInLabel}
              onClick={() => iconOnClick(profileData.linkedUrl)}
            />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex w-full max-w-xs flex-col items-center sm:relative sm:max-w-none">
            <UserAvatar
              imageUrl={profileData.profilePicture}
              alt={profileData.profilePictureAlt}
            />
            <div className="mt-3 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] px-4 py-3 shadow-lg sm:absolute sm:-bottom-5 sm:left-4 sm:right-4 sm:mt-0 sm:w-auto">
              <p className="text-xs font-semibold uppercase text-[color:var(--secondary-text)]">
                {homeData.currentFocusTitle}
              </p>
              <p className="mt-1 text-sm font-semibold text-[color:var(--primary-text)]">
                {homeData.currentFocusDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 border-t border-[color:var(--border)] pt-6 sm:grid-cols-3 sm:pt-8">
        {homeData.highlights.map((item) => (
          <div key={item.title}>
            <p className="text-2xl font-bold text-[color:var(--primary-text)]">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-[color:var(--secondary-text)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
