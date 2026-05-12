"use client";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const UserAvatar = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--muted-surface)] shadow-[0_24px_60px_var(--shadow-color)] sm:h-72 sm:w-72">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Avatar"
          fill
          className="object-cover"
        />
      ) : (
        <FontAwesomeIcon
          icon={faUser}
          size="3x"
          className="text-[var(--primary)] h-40 w-40"
        />
      )}
    </div>
  );
};

export default UserAvatar;
