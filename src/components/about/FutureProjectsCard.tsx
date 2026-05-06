import Image from "next/image";
import { StaticImageData } from "next/image";

interface cardProps {
  text: string;
  imageSrc: StaticImageData;
  imageClassName: string;
}

const FutureProjectsCard = ({ text, imageSrc, imageClassName }: cardProps) => {
  return (
    <div className="bg-ubi-lighttan flex h-[20.5vw] w-[20.5vw] flex-col items-center rounded-4xl pt-6">
      <Image src={imageSrc} alt="Mission image" className={imageClassName} />
      <p className="text-ubi-lightnavy font-volkhov w-[18vw] text-center text-[1.9vw] font-bold">
        {text}
      </p>
    </div>
  );
};

export default FutureProjectsCard;
