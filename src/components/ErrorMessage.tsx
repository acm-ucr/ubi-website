import Link from "next/link";
import Image from "next/image";
import HeartPump from "@/public/assets/Heart-Pump.svg";
import ErrorHeart from "@/public/assets/mobile_error.svg";
interface errorProps {
  toptext: string;
  bottext: string;
}

const ErrorMessage = ({ toptext, bottext }: errorProps) => {
  return (
    <div className="relative flex min-h-[91vh] items-center justify-center overflow-hidden">
      <Image
        src={HeartPump}
        alt="Red heart shaped pump decoration"
        className="absolute top-[28%] -left-[13%] hidden w-[37vw] -rotate-25 md:block"
      />

      <Image
        src={HeartPump}
        alt="Red heart shaped pump decoration"
        className="absolute top-[28%] left-[76%] hidden w-[37vw] scale-x-[-1] rotate-25 md:block"
      />

      <div className="-mt-8 flex flex-col items-center py-10 text-center font-extrabold md:py-0">
        <p className="text-ubiboard-red-300 text-[15vw] md:text-[13vw]">
          {toptext}
        </p>
        <p className="text-ubi-navy text-[8vw] md:text-[3vw]">{bottext}</p>

        <Image
          src={ErrorHeart}
          alt="Broken heart"
          className="w-2/3 pt-15 md:hidden"
        />
        <Link
          href="/"
          className="md:bg-ubi-lightpink bg-ubi-tan text-ubi-darkred-100 mt-17 rounded-3xl px-15 pt-5 pb-5 text-center text-[5vw] drop-shadow-xl transition duration-300 hover:drop-shadow-none md:text-[3vw]"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
