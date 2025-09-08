"use client";

import { useState } from "react";
import Title from "@/components/Title";
import Image from "next/image";
import { profileData } from "@/constants/infoExample";
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
    <section className="w-full p-6 flex flex-col items-center">
      <Title text="Certificates" />
      {openDisplay ? (
        <ImageDisplay
          imageUrl={currentCert.src}
          name={currentCert.name}
          closeDisplay={handleCloseDisplay}
        />
      ) : null}

      <div
        className="mt-5 relative w-full max-w-[600px] h-[250px] sm:h-[300px] md:h-[400px] rounded-lg  shadow-md
      transition-transform duration-300 ease-in-out
    hover:shadow-[0_6px_20px_var(--shadow-color)] overflow-hidden bg-[color:var(--cards)]"
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
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[color:var(--primary)] text-[color:var(--button-text)] p-2 rounded-full shadow-md hover:opacity-80 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
          </button>
        )}

        {certificates.length > 1 && (
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[color:var(--primary)] text-[color:var(--button-text)] p-2 rounded-full shadow-md hover:opacity-80 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="mt-4 text-center px-2">
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
