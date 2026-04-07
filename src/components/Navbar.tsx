import Image from "next/image";
import Link from "next/link";
import UBILogo from "@/public/UBI_Logo.png";
import { navbarLinks } from "@/data/navbarLinks";

const Navbar = () => {
  return (
    <nav className="bg-ubi-red-100">
      <div className="flex items-center justify-between px-4 text-white">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full bg-white">
            <Image src={UBILogo} alt="logo" fill />
          </div>
          <div className="text-2xl">UBI</div>
        </Link>
        <div className="flex items-center gap-6 p-6 text-2xl">
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
      </div>
    </nav>
  );
};

export default Navbar;
