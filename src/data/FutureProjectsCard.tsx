import Image from "next/image";
import { StaticImageData } from "next/image";

interface cardProps {
  text: string;
  imageSrc: StaticImageData;
  imageSize: number;
  imageClassName: string;
}

const FutureProjectsCard = ({
  text,
  imageSrc,
  imageSize,
  imageClassName,
}: cardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-ubi-lighttan h-[20.5vw] w-[20.5vw] justify-items-center rounded-4xl pt-6">
        <Image
          src={imageSrc}
          alt="Mission image"
          width={imageSize}
          height={imageSize}
          className={imageClassName}
        />
        <p className="text-ubi-lightnavy font-volkhov w-[18vw] text-center text-[1.9vw] font-bold">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FutureProjectsCard;
