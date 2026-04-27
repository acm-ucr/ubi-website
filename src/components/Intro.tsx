import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="bg-ubi-tan flex items-center px-5 pt-20">
      <div className="flex w-1/2 flex-col gap-6">
        <Image src="/assets/UBI_Logo.svg" alt="logo" width={120} height={120} />

        <h1 className="font-volkhov text-ubi-blue mb-4 text-8xl font-bold">
          UCR Blood Initiative
        </h1>

        <p className="font-volkhov text-ubi-red-100 text-3xl">
          <span className="font-bold">Donate blood. </span>Empower the next{" "}
          <br />
          generation to build a sustainable, <br /> equitable blood supply for
          all.
        </p>

        <p className="font-volkhov text-ubi-blue text-3xl">
          <span className="font-bold"> UC Riverside </span> Branch of University
          Blood <br /> Drive (UBI)
        </p>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdq8CkTO3FaaeW-ZlIC928K2Fp2nxQDhx71SWn-PtoLY5xGbg/viewform"
          target="_blank"
          className="font-volkhov text-ubi-white bg-ubi-red-100 w-max rounded-full px-4 py-2 text-xl drop-shadow-2xl"
        >
          Donate With Us
        </Link>
      </div>

      <div className="flex flex-1 justify-end">
        <Image
          src="/assets/Heart-Pump-Splatter.svg"
          alt="heart"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Intro;
