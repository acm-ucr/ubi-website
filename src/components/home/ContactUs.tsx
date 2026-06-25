"use client";

declare global {
  interface Window {
    submitted: boolean;
  }
}

import { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import FormBG from "@/public/assets/Contact-Form-BG.svg";
import ContactUsIcon from "@/public/assets/Contact-Icon.svg";

const animationY = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const animationScale = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

const animationX = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const transition = {
  duration: 0.7,
};

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_cprlbbg",
        "template_kak73mc",
        formRef.current!,
        "HqdlyTCovjWcjnDoE",
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="grid w-11/12 grid-cols-1 items-center md:w-4/5 md:grid-cols-2 md:gap-12">
        <motion.div
          variants={animationX}
          transition={{ ...transition, delay: 0.2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div>
            <p className="font-volkhov text-ubi-blue text-center text-5xl font-bold md:text-left md:font-[inherit] md:text-6xl">
              Contact Us
            </p>
            <div className="relative w-0 md:w-full">
              <Image
                src={ContactUsIcon}
                alt="Contact Us Icon"
                className="h-auto w-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative p-4 md:p-12"
          variants={animationScale}
          transition={{ ...transition, delay: 0.4 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={FormBG}
              alt="Contact Form Background"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10 overflow-hidden rounded-4xl bg-[#FFCDC5] p-6 md:p-12">
            {isSubmitted ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center text-2xl font-bold text-[#14213d] sm:text-3xl">
                Form Submitted!
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <motion.div
                  variants={animationY}
                  transition={{ ...transition, delay: 0.5 }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <p className="text-ubi-blue mb-2 ml-1 block font-bold">
                    Full Name
                  </p>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="border-ubi-red-100 w-full rounded-4xl border-2 bg-white px-6 py-3 text-gray-700 outline-none md:rounded-2xl md:border-1"
                  />
                </motion.div>

                <motion.div
                  variants={animationY}
                  transition={{ ...transition, delay: 0.6 }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <p className="text-ubi-blue mb-2 ml-1 block pt-3 font-bold">
                    Email
                  </p>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="jdoe@ucr.edu"
                    required
                    className="border-ubi-red-100 w-full rounded-4xl border-2 bg-white px-6 py-3 text-gray-700 outline-none md:rounded-2xl md:border-1"
                  />
                </motion.div>

                <motion.div
                  variants={animationY}
                  transition={{ ...transition, delay: 0.7 }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <p className="text-ubi-blue mb-2 ml-1 block pt-3 font-bold">
                    Message
                  </p>
                  <textarea
                    name="message"
                    placeholder="Type your message"
                    required
                    className="border-ubi-red-100 w-full rounded-3xl border-2 bg-white px-6 py-3 text-gray-700 outline-none md:rounded-2xl md:border-1"
                  />
                </motion.div>

                <div className="flex justify-center pt-4">
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="bg-ubi-red-100 rounded-full px-10 py-3 font-bold text-white shadow-md hover:brightness-110"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isLoading ? "Sending..." : "Submit"}
                  </motion.button>
                </div>

                <div className="pointer-events-none absolute right-0 bottom-0 w-26 md:w-0">
                  <Image
                    src={ContactUsIcon}
                    alt="Contact Us Icon"
                    className="h-auto w-full"
                  />
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
