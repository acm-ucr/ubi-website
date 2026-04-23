import Image from "next/image";
import OurVisionImg from "@/public/assets/Vision-Photo.svg"; // Ensure this path is correct based on your project structure

const OurVision = () => {
  return (
    <div className="bg-ubi-tan flex items-center justify-center py-16">
      <div className="flex w-5/6 items-center gap-10">
        {/* Our vision image */}
        <div className="w-1/2">
          <Image
            src={OurVisionImg}
            alt="OurVisionImg"
            width={650}
            height={420}
            className="shadow-[10px_8px_0px_#BEB1B1] backdrop-blur-[8px]"
          />
        </div>

        {/* Right text box */}
        <div className="bg-ubi-pink flex w-[635px] flex-col justify-center rounded-[40px] p-10 shadow-[10px_8px_0px_#BEB1B1] backdrop-blur-[8px]">
          <h1 className="font-volkhov text-ubi-blue text-5xl">Our Vision</h1>

          <h2 className="text-ubi-red-200 mt-2 text-2xl">UBI at UCR Goals</h2>

          <p className="text-ubi-blue mt-4 text-[20px] leading-relaxed">
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
