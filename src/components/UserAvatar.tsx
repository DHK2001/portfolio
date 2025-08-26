"use client";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const UserAvatar = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative rounded-full overflow-hidden border-4 border-[var(--primary)] h-60 w-60 flex items-center justify-center bg-[var(--bg)]">
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
