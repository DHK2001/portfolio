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
    <div className="fixed inset-0 w-screen h-screen z-[900] bg-[color:var(--display)]">
      <div className="relative w-full h-full">
        <button
          onClick={closeDisplay}
          className="absolute top-5 left-5 z-[1000] h-8 w-8 flex items-center justify-center cursor-pointer hover:opacity-50"
        >
          <FontAwesomeIcon icon={faX} size="lg" color="white" />
        </button>
        <Image src={imageUrl} alt={name} fill className="object-contain p-4" />
      </div>
    </div>
  );
};

export default ImageDisplay;
