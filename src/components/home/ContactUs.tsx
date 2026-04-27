import Image from "next/image";
import FormBG from "@/public/assets/Contact-Form-BG.svg";
import ContactUsIcon from "@/public/assets/Contact-Icon.svg";

const ContactUs = () => {
  return (
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
          <div>
            <p className="text-ubi-blue mb-2 ml-1 block font-bold">Full Name</p>
            <input
              type="text"
              placeholder="John Doe"
              className="border-ubi-red-100 w-full rounded-2xl border bg-white px-6 py-3 text-gray-700 outline-none"
            />
          </div>

          <div>
            <p className="text-ubi-blue mb-2 ml-1 block pt-3 font-bold">
              Email
            </p>
            <input
              type="email"
              placeholder="jdoe@ucr.edu"
              className="border-ubi-red-100 w-full rounded-2xl border bg-white px-6 py-3 text-gray-700 outline-none"
            />
          </div>

          <div>
            <p className="text-ubi-blue mb-2 ml-1 block pt-3 font-bold">
              Message
            </p>
            <textarea
              placeholder="Type your message"
              className="border-ubi-red-100 w-full rounded-2xl border bg-white px-6 py-4 text-gray-700 outline-none"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button className="bg-ubi-red-100 rounded-full px-10 py-3 font-bold text-white shadow-md hover:brightness-110">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
