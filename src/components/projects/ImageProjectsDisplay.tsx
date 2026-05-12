"use client";

import {
  faX,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
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
    <div className="fixed inset-0 z-[900] flex flex-col items-center justify-center bg-[color:var(--display)] p-4 sm:p-8">
      <button
        onClick={closeDisplay}
        className="absolute right-4 top-4 z-[1000] flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-black/50 text-white transition hover:bg-black/70"
      >
        <FontAwesomeIcon icon={faX} className="h-4 w-4" />
      </button>

      <div className="relative flex w-full flex-row items-center justify-center">
        <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-black/20">
          <Image
            src={currentProject}
            alt={name}
            fill
            sizes="100vw"
            className={`object-contain rounded-lg transition-opacity duration-300 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
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
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-[color:var(--primary)] text-[color:var(--button-text)] shadow-md transition hover:opacity-85"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
          </button>
        )}

        {imageUrl.length > 1 && (
          <button
            onClick={next}
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-[color:var(--primary)] text-[color:var(--button-text)] shadow-md transition hover:opacity-85"
          >
            <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="mt-4 rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-center">
        <p className="text-sm font-semibold text-white sm:text-base md:text-lg">
          {name}
        </p>
        {imageUrl.length > 1 && (
          <p className="mt-1 text-xs text-white/70">
            {current + 1} / {imageUrl.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageProjectsDisplay;
