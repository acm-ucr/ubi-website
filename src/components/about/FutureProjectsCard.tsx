import Image from "next/image";
import { StaticImageData } from "next/image";

interface cardProps {
  text: string;
  imageSrc: StaticImageData;
  mobileimageSrc?: StaticImageData;
  imageClassName: string;
}

const FutureProjectsCard = ({
  text,
  imageSrc,
  mobileimageSrc,
  imageClassName,
}: cardProps) => {
  return (
    <div className="bg-ubi-lighttan flex h-[42vw] flex-col-reverse items-center rounded-4xl shadow-xl shadow-black/20 md:h-[20.5vw] md:w-[20.5vw] md:flex-col md:pt-6">
      {mobileimageSrc && (
        <Image
          src={mobileimageSrc}
          alt="Future projects image"
          className={`${imageClassName} block md:hidden`}
        />
      )}
      <Image
        src={imageSrc}
        alt="Future projects image"
        className={`${imageClassName} ${mobileimageSrc ? "hidden md:block" : ""}`}
      />
      <p className="text-ubi-lightnavy font-volkhov w-[59vw] pb-2 text-center text-[5.5vw] font-bold md:w-[18vw] md:text-[1.6vw] lg:text-[1.9vw]">
        {text}
      </p>
    </div>
  );
};

export default FutureProjectsCard;
