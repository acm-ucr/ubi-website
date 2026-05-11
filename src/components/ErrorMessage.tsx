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

      <div className="-mt-8 flex flex-col items-center text-center font-extrabold">
        <p className="text-ubiboard-red-300 text-[13vw]">
          <span className="hidden md:inline">{toptext}</span>
          <span className="md:hidden">404</span>
        </p>
        <p className="text-ubi-navy text-[3vw]">
          <span className="text-[5vw] md:hidden">Page Not Found</span>
          <span className="hidden md:inline">{bottext}</span>
        </p>

        <Image
          src={ErrorHeart}
          alt="Broken heart"
          className="w-1/2 pt-10 md:hidden"
        />
        <Link
          href="/"
          className="bg-ubi-lightpink text-ubi-darkred-100 mt-17 rounded-3xl px-15 pt-5 pb-5 text-center text-[3vw] drop-shadow-xl transition duration-300 hover:drop-shadow-none"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
