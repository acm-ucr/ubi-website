import Link from "next/link";
import Image from "next/image";
import Heart from "@/public/assets/Heart-Pump-Splatter.svg";
import Logo from "@/public/assets/UBILogowShadow.svg";

const Intro = () => {
  return (
    <div className="flex w-full justify-center pt-7 md:items-center md:justify-center lg:flex-row">
      <div className="mt-0 flex w-full flex-col items-center text-center lg:-mt-20 lg:w-1/2 lg:items-start lg:pl-20 lg:text-left">
        <Image src={Logo} alt="logo" className="w-1/3 lg:w-auto" />

        <p className="font-volkhov text-ubi-blue mb-4 text-[4rem] font-bold lg:text-[7rem] lg:leading-snug">
          UCR Blood Initiative
        </p>

        <p className="text-ubi-red-100 items-center px-5 text-2xl lg:px-0 lg:text-4xl">
          <span className="font-extrabold">Donate blood. </span>Empower the next{" "}
          <br className="hidden lg:block" />
          generation to build a sustainable, <br className="hidden lg:block" />{" "}
          equitable blood supply for all.
        </p>

        <p className="text-ubi-blue px-5 py-10 text-2xl lg:px-0 lg:text-3xl">
          <span className="font-extrabold"> UC Riverside </span> Branch of
          University Blood <br className="hidden lg:block" /> Drive (UBI)
        </p>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdq8CkTO3FaaeW-ZlIC928K2Fp2nxQDhx71SWn-PtoLY5xGbg/viewform"
          target="_blank"
          className="text-ubi-white bg-ubi-red-100 w-max rounded-full px-8 py-3 text-3xl shadow-xl shadow-black/30"
        >
          Donate With Us
        </Link>
      </div>

      <div className="hidden lg:flex lg:w-1/2 lg:justify-end">
        <Image src={Heart} alt="heart" />
      </div>
    </div>
  );
};

export default Intro;
