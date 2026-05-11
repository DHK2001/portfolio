"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const ImageDisplay = ({
  imageUrl,
  name,
  closeDisplay,
}: {
  imageUrl: string;
  name: string;
  closeDisplay?: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-[900] flex items-center justify-center bg-[color:var(--display)] p-4 sm:p-8">
      <button
        onClick={closeDisplay}
        className="absolute right-4 top-4 z-[1000] flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-black/50 text-white transition hover:bg-black/70"
      >
        <FontAwesomeIcon icon={faX} className="h-4 w-4" />
      </button>

      <div className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-black/20">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
