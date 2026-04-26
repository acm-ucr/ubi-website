import Link from "next/link";

const StillInterest = () => {
  return (
    <div className="relative items-center">
      <p className="text-ubi-blue font-volkhov flex flex-col justify-center py-5 text-center text-[6.5vw] font-bold tracking-wider">
        Still Interested?
      </p>

      <div className="bg-ubi-rose top-[90%] h-min w-min justify-self-center rounded-4xl drop-shadow-xl">
        <p className="text-ubi-darkred-100 px-18 pt-7 pb-4 text-left text-[4vw] font-extrabold tracking-wide">
          Visit our Parent Organization
        </p>
        <hr className="border-ubi-blue mx-18 w-[68vw] justify-self-center border-t-4 pb-5"></hr>
        <p className="text-ubi-darkred-100 font-volkhov px-20 text-left text-[2vw] font-extrabold">
          University Blood{" "}
          <span className="text-ubiboard-red-300">Initiative</span>
        </p>

        <div className="flex">
          <p className="text-ubi-blue w-[45vw] px-20 pt-2 pb-8 text-[2vw] text-wrap">
            Empowers a next generation of diverse blood donors and advocates.
          </p>
          <Link
            href="https://www.universitybloodinitiative.org/"
            className="bg-ubi-tan text-ubi-blue border-ubi-blue my-4 mb-15 justify-end rounded-3xl border-4 px-15 pt-5 pb-4 text-center text-[3vw] font-bold drop-shadow-xl"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StillInterest;
