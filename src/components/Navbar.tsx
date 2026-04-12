import Image from "next/image";
import Link from "next/link";
import UBILogo from "@/public/img/UBI_Logo.svg";
import { navbarLinks } from "@/data/navbarLinks";

const Navbar = () => {
  return (
    <nav className="bg-ubi-red-100">
      <div className="flex items-center justify-between px-4 text-white">
        <Link href="/" className="flex items-center gap-4">
          <Image src={UBILogo} alt="logo" className="h-15 w-15" />
          <div className="text-2xl">UBI</div>
        </Link>
        <div className="flex items-center gap-6 py-7 text-2xl">
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
