"use client";

import {
  faX,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const nextIndex = (index + imageUrl.length) % imageUrl.length;
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
      setCurrent(Math.min(Math.max(nextIndex, 0), imageUrl.length - 1));
    }
  };

  useEffect(() => {
    setCurrent(0);
    scrollRef.current?.scrollTo({ left: 0 });
  }, [imageUrl]);

  return (
    <div className="fixed inset-0 z-[900] flex flex-col items-center justify-center bg-[color:var(--display)] p-4 sm:p-8">
      <button
        onClick={closeDisplay}
        className="absolute right-4 top-4 z-[1000] flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-black/50 text-white transition hover:bg-black/70"
      >
        <FontAwesomeIcon icon={faX} className="h-4 w-4" />
      </button>

      <div className="relative flex w-full flex-row items-center justify-center">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative h-[76vh] w-full max-w-5xl snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-lg border border-white/10 bg-black/20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:h-[78vh]"
        >
          <div className="flex h-full">
            {imageUrl.map((src, index) => (
              <div
                key={src}
                className="relative h-full w-full shrink-0 snap-center"
              >
                <Image
                  src={src}
                  alt={`${name} ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="rounded-lg object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          {imageUrl.length > 1 && (
            <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {imageUrl.map((src, index) => (
                <span
                  key={`${src}-dot`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === current ? "w-5 bg-white" : "w-1.5 bg-white/45"
                  }`}
                />
              ))}
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
