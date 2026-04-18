import Link from "next/link";
import Image from "next/image";
import HeartPump from "@/public/assets/Heart-Pump.svg";

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
        className="absolute top-[28%] -left-[13%] w-[37vw] -rotate-25"
      />

      <Image
        src={HeartPump}
        alt="Red heart shaped pump decoration"
        className="absolute top-[28%] left-[76%] w-[37vw] scale-x-[-1] rotate-25"
      />

      <div className="-mt-[2%] flex flex-col items-center text-center font-extrabold">
        <p className="text-ubiboard-red-300 text-[13vw]">{toptext}</p>
        <p className="text-ubi-navy text-[3vw]">{bottext}</p>
        <Link
          href="/"
          className="bg-ubi-lightpink text-ubi-darkred-100 mt-[7%] rounded-3xl px-[6%] pt-[2%] pb-[2%] text-center text-[3vw] drop-shadow-xl transition duration-300 hover:drop-shadow-none"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
