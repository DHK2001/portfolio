"use client";

import { useState } from "react";
import Title from "@/components/Title";
import Image from "next/image";
import { profileData } from "@/constants/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ImageDisplay from "../ImageDisplay";

const CertificateSection = () => {
  const certificates = profileData.certificates;
  const [current, setCurrent] = useState(0);
  const [openDisplay, setOpenDisplay] = useState(false);

  if (!certificates?.length) return null;

  const next = () => setCurrent((prev) => (prev + 1) % certificates.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  const currentCert = certificates[current];

  function handleCloseDisplay() {
    setOpenDisplay(false);
  }

  return (
    <section className="flex w-full flex-col gap-5">
      <div className="border-b border-[color:var(--border)] pb-4">
        <Title text="Certificates" classname="text-left" />
        <p className="mt-2 text-sm text-[color:var(--secondary-text)]">
          Certifications and academic documents that support my learning path.
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
        <Image
          src={currentCert.src}
          alt={currentCert.name}
          fill
          className="object-contain p-4 cursor-pointer"
          onClick={() => {
            setOpenDisplay(true);
          }}
        />

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
