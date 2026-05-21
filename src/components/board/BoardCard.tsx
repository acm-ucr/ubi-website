import { StaticImageData } from "next/image";
import Image from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  name: string;
  position: string;
}

const BoardCard: React.FC<BoardCardProps> = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center text-center text-xl font-semibold md:text-2xl">
      <div className="w-[120px] md:w-auto">
        <Image src={image} alt="Board Member" className="h-auto w-full" />
      </div>
      <div className="text-ubi-red-200 py-3 md:py-5">
        <p>{name}</p>
        <div className="text-ubi-red-200 py-2 text-sm md:py-3 md:text-base lg:text-xl">
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};
export default BoardCard;
