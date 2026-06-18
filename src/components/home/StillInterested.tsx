"use client";
import Link from "next/link";
import Image from "next/image";
import SquaresHorizontal from "@/public/assets/Checker-Border_Mobile.svg";
import Squares from "@/public/assets/vertical_checker.svg";
import { motion } from "motion/react";

const StillInterest = () => {
  return (
    <div className="relative mt-10 flex w-full flex-col items-center">
      <Image
        src={SquaresHorizontal}
        alt="Horizontal Square Border"
        className="absolute -top-20 w-full md:hidden"
      />
      <Image
        src={Squares}
        alt="Three red vertical squares"
        className="absolute -top-4 left-0 hidden w-[3.2vw] md:block"
      />
      <Image
        src={Squares}
        alt="Three red vertical squares"
        className="absolute -top-4 right-0 hidden w-[3.2vw] md:block"
      />

      <p className="text-ubi-blue font-volkhov flex w-3/4 flex-col justify-center py-5 text-center text-4xl font-bold tracking-wider md:w-full md:text-[6.5vw]">
        Still Interested?
      </p>

      <motion.div
        initial={{ scale: 0 }}
        viewport={{ once: true }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-ubi-rose top-[90%] h-min w-3/4 justify-self-center rounded-4xl shadow-xl shadow-black/20 md:w-min"
      >
        <p className="text-ubi-darkred-100 pt-7 pb-4 text-center text-[6vw] font-extrabold tracking-wide md:px-18 md:text-left md:text-[4vw]">
          Visit our Parent Organization
        </p>
        <hr className="border-ubi-blue mx-18 w-[68vw] justify-self-center border-t-4 pb-5"></hr>
        <p className="text-ubi-darkred-100 font-volkhov mr-5 text-center text-[4vw] font-extrabold md:px-20 md:text-left md:text-[2vw]">
          University Blood{" "}
          <span className="text-ubiboard-red-300">Initiative</span>
        </p>
        <div className="flex flex-col md:flex-row">
          <p className="text-ubi-blue px-10 pt-2 text-[3.5vw] text-wrap md:w-[45vw] md:px-20 md:pb-8 md:text-[2vw]">
            Empowers a next generation of diverse blood donors and advocates.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center md:block"
          >
            <Link
              href="https://www.universitybloodinitiative.org/"
              target="_blank"
              className="bg-ubi-tan text-ubi-blue border-ubi-blue my-4 mb-8 rounded-3xl border-2 px-5 py-1 text-center text-[4.5vw] font-bold shadow-xl shadow-black/20 md:mb-15 md:border-4 md:px-15 md:pt-5 md:pb-4 md:text-[3vw]"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default StillInterest;
