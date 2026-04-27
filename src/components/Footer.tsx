import Link from "next/link";
import Image from "next/image";
import { footerLinks, FooterLink } from "@/data/FooterLinks";
import footer from "@/public/assets/footerLogo.svg";
const Footer = () => {
  return (
    <footer className="bg-ubi-red-100 relative w-full">
      <div className="relative flex items-center justify-between">
        <Image
          src={footer}
          alt="UCR Blood Initiative Logo"
          width={550}
          height={100}
        />

        <div className="text-ubi-white absolute left-[55%] -translate-x-1/2 text-center text-sm font-semibold">
          UCR Blood Initiative © 2026 All Rights Reserved
        </div>

        <div className="flex items-center gap-5 pr-6">
          {footerLinks.map(({ icon: Icon, url }: FooterLink, index: number) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              className="text-ubi-white"
            >
              <Icon className="h-10 w-10" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
