import Image from "next/image";
import Link from "next/link";
import UBILogoTransparent from "@/public/assets/UBI_Logo_TranspBG.svg";
import Lifestream from "@/public/assets/Lifestream.svg";

const WhyDonate = () => {
  return (
    <div className="bg-ubi-pink flex w-4/5 items-center justify-center rounded-2xl px-6 py-12 shadow-xl shadow-black/20">
      <div className="w-3/5 flex-col pr-12">
        <p className="font-volkhov text-ubi-blue mb-4 text-6xl font-bold">
          Why Donate Blood
        </p>
        <p className="text-ubi-red-200 mb-6 text-3xl font-bold">
          Powered By University Blood Initiative
        </p>
        <p className="text-ubi-blue text-2xl">
          Donating blood is one of the simplest ways to save a life, as someone
          in need requires blood every few seconds for trauma care, chronic
          illness treatment, or surgery. A shortage in the nationwide blood
          supply has strained healthcare systems and even caused delays in
          patient care. By taking less than an hour to donate, you can make a
          meaningful difference and help sustain your community’s health.
        </p>
      </div>

      <div className="bg-ubi-tan flex flex-col items-center justify-between rounded-2xl p-6 shadow-xl">
        <div className="flex w-full items-center pb-3">
          <div className="relative h-40 w-40">
            <Image
              src={UBILogoTransparent}
              alt="UBI Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="font-volkhov text-ubi-blue text-4xl font-bold">
            University
            <br />
            Blood
            <br />
            Initiative
          </div>
        </div>

        <hr className="my-2 w-full border-[#BEB1B1]" />
        <div className="relative h-30 w-9/10">
          <Image
            src={Lifestream}
            alt="Lifestream"
            fill
            className="object-contain"
          />
        </div>

        <div className="bg-ubi-pink mt-4 flex w-full items-center justify-between rounded-2xl p-4">
          <div className="text-sm leading-tight">
            <span className="text-ubi-blue">In partnership with</span>
            <br />
            <span className="text-ubi-red-200 font-bold">
              LifeStream Blood Bank
            </span>
          </div>
          <Link href="https://www.lstream.org" target="_blank">
            <button className="border-ubi-red-200 text-ubi-red-200 hover:bg-ubi-red-200 rounded-full border bg-transparent px-4 py-2 text-sm shadow-xl transition-colors hover:text-white">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyDonate;
