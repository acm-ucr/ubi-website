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
    <div className="relative flex h-55 w-60 flex-col items-center lg:h-72 lg:w-90">
      <div className="bg-ubi-tan absolute bottom-0 h-30 w-full rounded-4xl lg:h-42"></div>
      <div className="absolute bottom-6 flex flex-col items-center">
        <div className={imageClassName}>
          <Image
            src={imageSrc}
            alt="Mission image"
            width={imageSize}
            height={imageSize}
          />
        </div>
        <p className="text-ubi-red-200 text-4xl font-bold lg:text-5xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default MissionCard;
