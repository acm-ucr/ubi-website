"use client";

declare global {
  interface Window {
    submitted: boolean;
  }
}

import { useState } from "react";
import Image from "next/image";
import FormBG from "@/public/assets/Contact-Form-BG.svg";
import ContactUsIcon from "@/public/assets/Contact-Icon.svg";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
          }
        }}
      ></iframe>

      <div className="grid w-4/5 grid-cols-2 items-center gap-12">
        <div>
          <p className="font-Poppins text-ubi-blue text-6xl font-bold">
            Contact Us
          </p>
          <div className="relative w-full">
            <Image
              src={ContactUsIcon}
              alt="Contact Us Icon"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="relative p-12">
          <div className="absolute inset-0 z-0">
            <Image
              src={FormBG}
              alt="Contact Form Background"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10 rounded-4xl bg-[#FFCDC5] p-12">
            {isSubmitted ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center text-2xl font-bold text-[#14213d] sm:text-3xl">
                Form Submitted!
              </div>
            ) : (
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSeqYtyUQ68ZIQUhFPDAPbVFTsEUhBjqjRAqhSv3NUUsABRE3w/formResponse"
                onSubmit={() => (window.submitted = true)}
                target="hidden_iframe"
              >
                <div>
                  <p className="text-ubi-blue mb-2 ml-1 block font-bold">
                    Full Name
                  </p>
                  <input
                    name="entry.613114370"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="border-ubi-red-100 w-full rounded-2xl border bg-white px-6 py-3 text-gray-700 outline-none"
                  />
                </div>

                <div>
                  <p className="text-ubi-blue mb-2 ml-1 block pt-3 font-bold">
                    Email
                  </p>
                  <input
                    name="entry.1925934543"
                    type="email"
                    placeholder="jdoe@ucr.edu"
                    required
                    className="border-ubi-red-100 w-full rounded-2xl border bg-white px-6 py-3 text-gray-700 outline-none"
                  />
                </div>

                <div>
                  <p className="text-ubi-blue mb-2 ml-1 block pt-3 font-bold">
                    Message
                  </p>
                  <textarea
                    name="entry.1027098586"
                    placeholder="Type your message"
                    required
                    className="border-ubi-red-100 w-full rounded-2xl border bg-white px-6 py-4 text-gray-700 outline-none"
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-ubi-red-100 rounded-full px-10 py-3 font-bold text-white shadow-md hover:brightness-110"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
