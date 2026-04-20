import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface cardProps {
  text: string;
  imageSrc: StaticImageData;
}

const MissionCard = ({ text, imageSrc }: cardProps) => {
  return (
    <div className="relative flex h-56 w-75 flex-col items-center">
      <div className="bg-ubi-tan absolute bottom-0 h-35 w-full rounded-4xl"></div>
      <div className="absolute bottom-8 flex flex-col items-center">
        <Image src={imageSrc} alt="Mission image" />
        <p className="text-ubi-red-200 text-4xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default MissionCard;
