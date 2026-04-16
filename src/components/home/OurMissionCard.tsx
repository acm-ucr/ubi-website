import React from "react";
import Image from "next/image";

//interface for text and image props
interface cardProps {
  text: string;
  imageSrc: string;
}

const MissionCard = ({ text, imageSrc }: cardProps) => {
  return (
    // desired flex box for organizing the entire card
    <div className="relative flex h-56 w-75 flex-col items-center">
      {/* Background bubble behind content */}
      <div className="bg-ubi-tan absolute bottom-0 h-35 w-full rounded-4xl"></div>

      {/* Actual displayed content */}
      <div className="absolute bottom-8 flex flex-col items-center">
        <Image src={imageSrc} alt="Mission image" />
        <p className="text-ubi-red-200 text-4xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default MissionCard;
