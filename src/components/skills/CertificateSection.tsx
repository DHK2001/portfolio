"use client";

import { useEffect, useRef, useState } from "react";
import Title from "@/components/Title";
import Image from "next/image";
import {
  certificateSectionData,
  profileData,
} from "@/constants/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ImageDisplay from "../ImageDisplay";

const CertificateSection = () => {
  const certificates = profileData.certificates;
  const certificateCount = certificates?.length ?? 0;
  const [current, setCurrent] = useState(0);
  const [openDisplay, setOpenDisplay] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!certificateCount) return;

    const nextIndex = (index + certificateCount) % certificateCount;
    setCurrent(nextIndex);
    scrollRef.current?.scrollTo({
      left: scrollRef.current.clientWidth * nextIndex,
      behavior: "smooth",
    });
  };

  const next = () => scrollToIndex(current + 1);
  const prev = () => scrollToIndex(current - 1);

  const handleScroll = () => {
    const element = scrollRef.current;
    if (!element) return;

    const nextIndex = Math.round(element.scrollLeft / element.clientWidth);
    if (nextIndex !== current) {
      setCurrent(Math.min(Math.max(nextIndex, 0), certificateCount - 1));
    }
  };

  function handleCloseDisplay() {
    setOpenDisplay(false);
  }

  useEffect(() => {
    setCurrent(0);
    scrollRef.current?.scrollTo({ left: 0 });
  }, [certificates]);

  if (!certificateCount) return null;

  const currentCert = certificates[current];

  return (
    <section className="flex w-full flex-col gap-5">
      <div className="border-b border-[color:var(--border)] pb-4">
        <Title text={certificateSectionData.title} classname="text-left" />
        <p className="mt-2 text-sm text-[color:var(--secondary-text)]">
          {certificateSectionData.description}
        </p>
      </div>
      {openDisplay ? (
        <ImageDisplay
          imageUrl={currentCert.src}
          name={currentCert.name}
          closeDisplay={handleCloseDisplay}
        />
      ) : null}

      <div
        className="relative h-[250px] w-full overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--cards)] shadow-sm transition duration-200 hover:border-[color:var(--primary)] hover:shadow-[0_10px_30px_var(--shadow-color)] sm:h-[340px] md:h-[420px]"
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex h-full">
            {certificates.map((cert, index) => (
              <button
                key={cert.src}
                type="button"
                className="relative h-full w-full shrink-0 snap-center cursor-pointer"
                onClick={() => {
                  setCurrent(index);
                  setOpenDisplay(true);
                }}
              >
                <Image
                  src={cert.src}
                  alt={cert.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain p-4"
                  priority={index === 0}
                />
              </button>
            ))}
          </div>
        </div>

        {certificates.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-[color:var(--primary)] text-[color:var(--button-text)] shadow-md transition hover:opacity-85"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
          </button>
        )}

        {certificates.length > 1 && (
          <button
            onClick={next}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-[color:var(--primary)] text-[color:var(--button-text)] shadow-md transition hover:opacity-85"
          >
            <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="px-2">
        <p className="text-[color:var(--primary-text)] font-semibold text-sm sm:text-base md:text-lg">
          {currentCert.name}
        </p>
        <p className="text-[color:var(--secondary-text)] text-xs sm:text-sm">
          {currentCert.issuer} • {currentCert.date}
        </p>

        {certificates.length > 1 && (
          <p className="text-[color:var(--secondary-text)] text-xs mt-2">
            {current + 1} / {certificates.length}
          </p>
        )}
      </div>
    </section>
  );
};

export default CertificateSection;
