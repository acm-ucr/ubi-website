import Image from "next/image";
import OurVisionImg from "@/public/assets/Vision-Photo.svg";

const OurVision = () => {
  return (
    <div className="bg-ubi-tan flex w-9/10 items-center justify-center pb-16 md:w-4/5 lg:w-4/5">
      <div className="lg:flew-row flex flex-col items-center gap-10 md:flex-row">
        <div className="relative h-50 w-4/5 shadow-[10px_8px_0px_#BEB1B1] md:h-97 md:w-9/20 lg:h-97 lg:w-9/20">
          <Image
            src={OurVisionImg}
            alt="OurVisionImg"
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-ubi-pink lg:1/2 flex w-9/10 flex-col justify-center rounded-[40px] p-10 shadow-[10px_8px_0px_#BEB1B1] md:w-1/2">
          <p className="font-volkhov text-ubi-blue pb-2 text-6xl font-bold">
            Our Vision
          </p>

          <p className="text-ubi-red-200 mt-2 text-3xl font-bold">
            UBI at UCR Goals
          </p>

          <p className="text-ubi-blue mt-4 text-2xl">
            Our goal is to help bring stability to the blood supply by
            mobilizing young donors to donate blood and advocate for the cause
            as well. In doing this, we hope to build a future generation of
            resilient blood donors rooted in education and engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
