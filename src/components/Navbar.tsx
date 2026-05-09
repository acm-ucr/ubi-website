"use client";
import Image from "next/image";
import Link from "next/link";
import UBILogo from "@/public/assets/UBI_Logo.svg";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { IoMdClose } from "react-icons/io";
import { navbarLinks } from "@/data/navbarLinks";
import { navbarMobileLinks } from "@/data/navbarMobileLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-ubi-red-100 relative">
      <div className="flex items-center justify-between px-3 py-3 text-white md:px-4">
        <Link href="/" className="flex items-center gap-4">
          <Image src={UBILogo} alt="logo" className="h-15 w-15" />
          <div className="text-2xl">UBI</div>
        </Link>
        <div className="hidden items-center gap-6 py-7 text-2xl md:flex">
          {navbarLinks.map(({ link, name }, index) => (
            <Link
              key={index}
              href={link}
              className={"flex items-center justify-center px-4 text-white"}
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="px-4 py-2 md:hidden">
          {!isOpen ? (
            <MenuIcon
              className="h-[12vw] w-[12vw]"
              onClick={() => setIsOpen(true)}
            />
          ) : (
            <IoMdClose
              className="h-[12vw] w-[12vw]"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>

      <div
        className={`bg-ubi-red-100 absolute right-0 w-[35vw] md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex w-full flex-col items-center divide-y font-semibold">
          {navbarMobileLinks.map(({ mlink, mname }, index) => (
            <Link
              key={index}
              href={mlink}
              onClick={() => setIsOpen(false)}
              className="w-full py-2 text-center text-[7vw] text-white"
            >
              {mname}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
