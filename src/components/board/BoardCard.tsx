import { StaticImageData } from "next/image";
import Image from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  name: string;
  position: string;
}

const BoardCard: React.FC<BoardCardProps> = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center text-center text-2xl font-semibold">
      <div>
        <Image src={image} alt="Board Member" />
      </div>
      <div className="text-ubi-red-200 py-5">
        <p>{name}</p>
        <div className="text-ubi-red-200 py-3">
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};
export default BoardCard;
