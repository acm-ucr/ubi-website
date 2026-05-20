"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Heart from "@/public/assets/Heart-Pump-Splatter.svg";
import Logo from "@/public/assets/UBILogowShadow.svg";

const fadeText = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

const Intro = () => {
  return (
    <div className="flex w-full justify-center pt-7 md:items-center md:justify-center lg:flex-row">
      <div className="flex w-full flex-col items-center text-center lg:-mt-20 lg:w-1/2 lg:items-start lg:pl-20 lg:text-left">
        <motion.div {...fadeText(0)}>
          <Image src={Logo} alt="logo" className="w-1/3 lg:w-auto" />
        </motion.div>

        <motion.p
          {...fadeText(0.15)}
          className="font-volkhov text-ubi-blue mb-4 text-[3rem] font-bold lg:text-[7rem] lg:leading-snug"
        >
          UCR Blood Initiative
        </motion.p>

        <motion.p
          {...fadeText(0.3)}
          className="text-ubi-red-100 items-center px-5 text-2xl lg:px-0 lg:text-4xl"
        >
          <span className="font-extrabold">Donate blood. </span>Empower the next{" "}
          <br className="hidden lg:block" />
          generation to build a sustainable, <br className="hidden lg:block" />{" "}
          equitable blood supply for all.
        </motion.p>

        <motion.p
          {...fadeText(0.45)}
          className="text-ubi-blue px-5 py-10 text-2xl lg:px-0 lg:text-3xl"
        >
          <span className="font-extrabold"> UC Riverside </span> Branch of
          University Blood <br className="hidden lg:block" /> Drive (UBI)
        </motion.p>

        <motion.p {...fadeText(0)}>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdq8CkTO3FaaeW-ZlIC928K2Fp2nxQDhx71SWn-PtoLY5xGbg/viewform"
            target="_blank"
            className="text-ubi-white bg-ubi-red-100 w-max rounded-full px-8 py-3 text-3xl shadow-xl shadow-black/30"
          >
            Donate With Us
          </Link>
        </motion.p>
      </div>

      <motion.div
        className="hidden lg:flex lg:w-1/2 lg:justify-end"
        whileInView={{ scale: [1, 1.05, 1, 1.05, 1] }}
        transition={{ duration: 0.6, times: [0, 0.25, 0.5, 0.75, 1] }}
        viewport={{ once: true }}
      >
        <Image src={Heart} alt="heart" />
      </motion.div>
    </div>
  );
};

export default Intro;
