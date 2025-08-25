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
    <div className="fixed inset-0 z-[900] bg-[color:var(--display)] flex items-center justify-center p-4 sm:p-10">
      <button
        onClick={closeDisplay}
        className="absolute top-4 right-4 z-[1000] h-10 w-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition"
      >
        <FontAwesomeIcon icon={faX} size="lg" color="white" />
      </button>

      <div className="relative w-full max-w-5xl h-[80vh]">
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
