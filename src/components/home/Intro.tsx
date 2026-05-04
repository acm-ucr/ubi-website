import Link from "next/link";
import Image from "next/image";
import Heart from "@/public/assets/Heart-Pump-Splatter.svg";
import Logo from "@/public/assets/UBILogowShadow.svg";

const Intro = () => {
  return (
    <div className="flex items-center pt-7">
      <div className="-mt-20 flex w-1/2 flex-col pl-20">
        <Image src={Logo} alt="logo" />

        <p className="font-volkhov text-ubi-blue mb-4 text-[7rem] leading-snug font-bold">
          UCR Blood Initiative
        </p>

        <p className="text-ubi-red-100 text-4xl">
          <span className="font-extrabold">Donate blood. </span>Empower the next{" "}
          <br />
          generation to build a sustainable, <br /> equitable blood supply for
          all.
        </p>

        <p className="text-ubi-blue py-10 text-3xl">
          <span className="font-extrabold"> UC Riverside </span> Branch of
          University Blood <br /> Drive (UBI)
        </p>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdq8CkTO3FaaeW-ZlIC928K2Fp2nxQDhx71SWn-PtoLY5xGbg/viewform"
          target="_blank"
          className="text-ubi-white bg-ubi-red-100 w-max rounded-full px-8 py-3 text-3xl shadow-xl shadow-black/30"
        >
          Donate With Us
        </Link>
      </div>

      <div className="flex w-1/2 justify-end">
        <Image src={Heart} alt="heart" />
      </div>
    </div>
  );
};

export default Intro;
