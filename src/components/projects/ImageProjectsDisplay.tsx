"use client";

import { faX, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageProjectsDisplay = ({
  imageUrl,
  name,
  closeDisplay,
}: {
  imageUrl: string[];
  name: string;
  closeDisplay?: () => void;
}) => {
  const [current, setCurrent] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const next = () => setCurrent((prev) => (prev + 1) % imageUrl.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? imageUrl.length - 1 : prev - 1));

  const currentProject = imageUrl[current];

  useEffect(() => {
    setImgLoaded(false);
  }, [currentProject]);

  return (
    <div className="fixed inset-0 z-[900] bg-[color:var(--display)] flex flex-col items-center justify-center p-4 sm:p-10">
      <button
        onClick={closeDisplay}
        className="absolute top-4 right-4 z-[1000] h-10 w-10 flex items-center justify-center rounded-full bg-black/40 hover:opacity-60 transition cursor-pointer"
      >
        <FontAwesomeIcon icon={faX} size="lg" color="white" />
      </button>

      <div className="w-full flex flex-row items-center justify-center relative">
        <div className="relative w-full max-w-5xl h-[80vh]">
          <Image
            src={currentProject}
            alt={name}
            fill
            className={`object-contain rounded-lg transition-opacity duration-300 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setImgLoaded(true)}
          />
          {!imgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-10 w-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Botón anterior */}
        {imageUrl.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[color:var(--primary)] text-[color:var(--button-text)] p-2 rounded-full shadow-md hover:opacity-80 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
          </button>
        )}

        {imageUrl.length > 1 && (
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[color:var(--primary)] text-[color:var(--button-text)] p-2 rounded-full shadow-md hover:opacity-80 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="mt-4 text-center px-2">
        <p className="text-[color:var(--button-text)] font-semibold text-sm sm:text-base md:text-lg">
          {name}
        </p>
        {imageUrl.length > 1 && (
          <p className="text-[color:var(--button-text)] text-xs mt-2">
            {current + 1} / {imageUrl.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageProjectsDisplay;
