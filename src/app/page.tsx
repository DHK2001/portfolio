"use client";

import Button from "@/components/Button";
import CvPreviewDisplay from "@/components/CvPreviewDisplay";
import Description from "@/components/Description";
import IconButton from "@/components/IconButton";
import ImageDisplay from "@/components/ImageDisplay";
import ScrollReveal from "@/components/ScrollReveal";
import Title from "@/components/Title";
import UserAvatar from "@/components/UserAvatar";
import {
  homeData,
  portfolioLabels,
  profileData,
} from "@/constants/portfolioData";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Home() {
  const [openDegreeDisplay, setOpenDegreeDisplay] = useState(false);
  const [openCvDisplay, setOpenCvDisplay] = useState(false);
  const { homeActions } = portfolioLabels;
  const cvFileUrl = "/docs/CV-Derek Galeas.pdf";
  const cvFileName = `${homeActions.cvFileNamePrefix}-${profileData.name}.pdf`;

  function iconOnClick(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleCloseDisplay() {
    setOpenDegreeDisplay(false);
    setOpenCvDisplay(false);
  }

  return (
    <section className="flex min-h-0 flex-col justify-start gap-6 sm:gap-8 lg:min-h-[calc(100dvh-10rem)] lg:justify-center lg:gap-12">
      {openCvDisplay ? (
        <CvPreviewDisplay
          fileUrl={cvFileUrl}
          fileName={cvFileName}
          title={`${profileData.name} CV`}
          closeDisplay={handleCloseDisplay}
        />
      ) : null}

      {openDegreeDisplay ? (
        <ImageDisplay
          imageUrl={profileData.degree.src}
          name={profileData.degree.name}
          closeDisplay={handleCloseDisplay}
        />
      ) : null}

      <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <ScrollReveal className="order-2 flex flex-col items-center gap-5 text-center sm:gap-6 lg:order-1 lg:items-start lg:text-left">
          <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--cards)] px-4 py-2 text-sm font-medium text-[color:var(--secondary-text)] shadow-sm">
            {homeData.badge}
          </div>

          <div className="space-y-4">
            <Title
              text={`Hello, I'm ${profileData.name}`}
              classname="text-center sm:text-5xl lg:text-left"
            />
            <p className="max-w-2xl text-base leading-7 text-[color:var(--secondary-text)] sm:text-lg sm:leading-8">
              {homeData.subtitle}
            </p>
          </div>

          <div className="max-w-2xl">
            <Description text={profileData.description} />
          </div>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
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
              text={homeActions.primaryActionLabel}
              onClick={() => setOpenCvDisplay(true)}
            />
            <Button
              text={homeActions.secondaryActionLabel}
              variant="secondary"
              onClick={() => setOpenDegreeDisplay(true)}
            />
          </div>

          <div className="flex justify-center gap-3 lg:justify-start">
            <IconButton
              icon={faGithub}
              label={homeActions.githubLabel}
              onClick={() => iconOnClick(profileData.githubUrl)}
            />
            <IconButton
              icon={faLinkedin}
              label={homeActions.linkedInLabel}
              onClick={() => iconOnClick(profileData.linkedUrl)}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={120}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
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
        </ScrollReveal>
      </div>

      <div className="grid gap-3 border-t border-[color:var(--border)] pt-5 sm:grid-cols-3 sm:gap-4 sm:pt-8">
        {homeData.highlights.map((item, index) => (
          <ScrollReveal
            key={item.title}
            delay={index * 90}
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] p-4 shadow-sm sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none"
          >
            <p className="text-2xl font-bold text-[color:var(--primary-text)]">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-(--secondary-text)">
              {item.description}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
