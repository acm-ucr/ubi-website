import Image from "next/image";
import Link from "next/link";
import UBILogoTransparant from "@/public/assets/UBI_Logo_TranspBG.svg";
import Lifestream from "@/public/assets/Lifestream.svg";
import Border from "@/public/assets/Checker-Border_Mobile.svg";

const WhyDonate = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-screen pb-12 lg:hidden">
        <Image src={Border} alt="border" className="w-full" />
      </div>

      <div className="bg-ubi-pink flex w-[20rem] items-center justify-center rounded-4xl px-6 py-12 shadow-xl shadow-black/20 lg:w-4/5 lg:rounded-2xl">
        <div className="w-full flex-col text-center lg:w-3/5 lg:pr-12 lg:text-left">
          <p className="font-volkhov text-ubi-blue mb-4 text-5xl font-bold lg:text-6xl">
            Why Donate Blood
          </p>
          <p className="text-ubi-red-200 mb-6 text-3xl font-bold">
            Powered By University Blood Initiative
          </p>
          <p className="text-ubi-blue text-xl leading-relaxed lg:text-2xl lg:leading-normal">
            Donating blood is one of the simplest ways to save a life, as
            someone in need requires blood every few seconds for trauma care,
            chronic illness treatment, or surgery. A shortage in the nationwide
            blood supply has strained healthcare systems and even caused delays
            in patient care. By taking less than an hour to donate, you can make
            a meaningful difference and help sustain your community’s health.
          </p>
        </div>

        <div className="bg-ubi-tan flex hidden flex-col items-center justify-between rounded-2xl p-6 shadow-xl lg:block">
          <div className="flex w-full items-center pb-3">
            <div className="relative h-40 w-40">
              <Image
                src={UBILogoTransparant}
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

      <div className="bg-ubi-tan mt-12 flex flex-col items-center rounded-4xl p-6 shadow-xl lg:hidden">
        <div className="flex w-full items-center pb-3">
          <div className="relative mr-4 h-40 w-[5rem]">
            <Image
              src={UBILogoTransparant}
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

        <hr className="w-full border-2 border-[#BEB1B1]" />
        <div className="relative h-30 w-9/10">
          <Image
            src={Lifestream}
            alt="Lifestream"
            fill
            className="object-contain"
          />
        </div>

        <div className="bg-ubi-pink flex w-full items-center rounded-4xl p-4">
          <div className="w-full text-center text-xl">
            <span className="text-ubi-blue">In partnership with</span>
            <br />
            <span className="text-ubi-red-200 font-bold">
              LifeStream Blood Bank
            </span>
          </div>
        </div>
        <Link href="https://www.lstream.org" target="_blank">
          <button className="border-ubi-red-200 bg-ubi-pink text-ubi-red-200 hover:bg-ubi-red-200 mt-6 rounded-full border-4 px-16 py-2 text-xl shadow-xl transition-colors hover:text-white">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhyDonate;
