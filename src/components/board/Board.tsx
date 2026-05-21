import BoardCard from "@/components/board/BoardCard";
import { BoardCardInfo } from "@/components/board/BoardCardInfo";
import Image from "next/image";
import redBlob from "@/public/assets/redBlob.svg";

const BoardComp = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-[-60px] flex h-full flex-col justify-around">
        <Image src={redBlob} alt="blob" className="hidden w-[120px] md:block" />
        <Image src={redBlob} alt="blob" className="block w-[70px] md:hidden" />
        <Image src={redBlob} alt="blob" className="hidden w-[120px] md:block" />
      </div>

      <div className="absolute top-0 right-[-60px] flex h-full flex-col justify-around">
        <Image
          src={redBlob}
          alt="blob"
          className="hidden w-[120px] scale-x-[-1] md:block"
        />
        <Image
          src={redBlob}
          alt="blob"
          className="block w-[70px] scale-x-[-1] md:hidden"
        />
        <Image
          src={redBlob}
          alt="blob"
          className="hidden w-[120px] scale-x-[-1] md:block"
        />
      </div>
      <div className="grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2 md:gap-y-24 lg:grid-cols-3 lg:gap-x-40">
        {BoardCardInfo.map(({ image, name, position }, index) => (
          <BoardCard
            key={index}
            image={image}
            name={name}
            position={position}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardComp;
