import BoardCard from "@/components/board/BoardCard";
import { BoardCardInfo } from "@/data/BoardCardInfo";
import Image from "next/image";
import redBlob from "@/public/assets/redBlob.svg";
import BoardImage from "@/public/board/Board-Group.svg";

const BoardComp = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center pt-12">
      <Image
        src={BoardImage}
        alt="Photo of Board"
        className="-mt-10 w-5/6 md:w-2/3"
      />
      <div className="text-ubi-red-200 text-extrabold p-20 text-4xl md:text-6xl">
        <p>Your Officers</p>
      </div>
      <div className="absolute top-36 left-0 -z-10 hidden h-full flex-col justify-between md:flex">
        <Image src={redBlob} alt="blob" className="w-[10vw]" />
        <Image src={redBlob} alt="blob" className="w-[10vw]" />
      </div>

      <div className="g-16 absolute top-38 right-0 -z-10 hidden h-full flex-col justify-between md:flex">
        <div className="flex justify-end">
          <Image
            src={redBlob}
            alt="blob"
            className="w-[8vw] rotate-180 self-start"
          />
        </div>
        <Image src={redBlob} alt="blob" className="w-[9vw] rotate-180" />
      </div>

      <div className="block md:hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={redBlob}
            alt="blob"
            className="absolute top-[10%] left-0 w-[14vw]"
          />

          <Image
            src={redBlob}
            alt="blob"
            className="absolute top-[22%] right-0 w-[14vw] scale-x-[-1]"
          />

          <Image
            src={redBlob}
            alt="blob"
            className="absolute top-[34%] left-0 w-[14vw]"
          />

          <Image
            src={redBlob}
            alt="blob"
            className="absolute top-[41%] right-0 w-[14vw] scale-x-[-1]"
          />

          <Image
            src={redBlob}
            alt="blob"
            className="absolute top-[53%] left-0 w-[14vw]"
          />

          <Image
            src={redBlob}
            alt="blob"
            className="absolute top-[65%] right-0 w-[14vw] scale-x-[-1]"
          />

          <Image
            src={redBlob}
            alt="blob"
            className="absolute top-[77%] left-0 w-[14vw]"
          />

          <Image
            src={redBlob}
            alt="blob"
            className="absolute top-[89%] right-0 w-[14vw] scale-x-[-1]"
          />
        </div>
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
