"use client";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const UserAvatar = () => {
  let imageUrl = null;
  const profileAvatar = () => {
    return imageUrl ? (
      <Image
        src="/images/user-icon.png"
        alt="Avatar"
        fill
        className="object-cover"
      />
    ) : (
      <FontAwesomeIcon icon={faUser} size="10x" className="text-[var(--fg)]" />
    );
  };

  return (
    <div className="relative rounded-full border-6 border-[var(--fg)] h-60 w-60 flex items-center justify-center">
      {profileAvatar()}
    </div>
  );
};

export default UserAvatar;
