import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="bg-ubi-tan flex items-center gap-5 px-5">
      <div className="flex w-1/2 flex-col gap-10">
        <Image src="/assets/UBI_Logo.svg" alt="logo" width={100} height={100} />

        <h1 className="font-volkhov text-ubi-blue mb-4 text-5xl font-bold">
          UCR Blood Initiative
        </h1>

        <p className="font-volkhov text-ubi-red-100 text-2xl">
          <span className="font-bold">Donate blood. </span>Empower the next
          generation to build a sustainable, equitable blood supply for all.
        </p>

        <p className="font-volkhov text-ubi-blue text-2xl">
          <span className="font-bold"> UC Riverside </span> Branch of University
          Blood Drive (UBI)
        </p>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdq8CkTO3FaaeW-ZlIC928K2Fp2nxQDhx71SWn-PtoLY5xGbg/viewform"
          target="_blank"
          className="font-volkhov text-ubi-white bg-ubi-red-100 w-max rounded-full px-4 py-2 text-xl shadow-lg"
        >
          Donate with us
        </Link>
      </div>

      <div className="flex flex-1 justify-end">
        <Image
          src="/assets/Heart-Pump-Splatter.svg"
          alt="heart"
          width={450}
          height={500}
        />
      </div>
    </div>
  );
};

export default Intro;
