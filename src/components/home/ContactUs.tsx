"use client";

declare global {
  interface Window {
    submitted: boolean;
  }
}

import { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import FormBG from "@/public/assets/Contact-Form-BG.svg";
import ContactUsIcon from "@/public/assets/Contact-Icon.svg";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "SERVICE_ID",
        "TEMPLATE_ID",
        formRef.current!,
        "PUBLIC_KEY",
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
              <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                  <p className="text-ubi-blue mb-2 ml-1 block font-bold">
                    Full Name
                  </p>
                  <input
                    name="user_name"
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
                    name="user_email"
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
                    name="message"
                    placeholder="Type your message"
                    required
                    className="border-ubi-red-100 w-full rounded-2xl border bg-white px-6 py-4 text-gray-700 outline-none"
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-ubi-red-100 rounded-full px-10 py-3 font-bold text-white shadow-md hover:brightness-110"
                  >
                    {isLoading ? "Sending..." : "Submit"}
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
