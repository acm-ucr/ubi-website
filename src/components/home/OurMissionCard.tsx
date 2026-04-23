import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface cardProps {
  text: string;
  imageSrc: StaticImageData;
  imageSize: number;
  imageClassName: string;
}

const MissionCard = ({
  text,
  imageSrc,
  imageSize,
  imageClassName,
}: cardProps) => {
  return (
    <div className="relative flex h-48 w-60 flex-col items-center">
      <div className="bg-ubi-tan absolute bottom-0 h-28 w-full rounded-3xl"></div>
      <div className="absolute bottom-6 flex flex-col items-center">
        <Image
          src={imageSrc}
          alt="Mission image"
          width={imageSize}
          height={imageSize}
          className={imageClassName}
        />
        <p className="text-ubi-red-200 text-3xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default MissionCard;
