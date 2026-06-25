import Link from "next/link";
import Image from "next/image";
import { footerLinks, FooterLink } from "@/data/FooterLinks";
import footer from "@/public/assets/footerLogo.svg";
import mobFooter from "@/public/assets/mobileFooter.svg";
const Footer = () => {
  return (
    <footer className="bg-ubi-red-100 relative mt-auto w-full overflow-hidden">
      <div className="relative flex items-center justify-between">
        <Image
          src={footer}
          alt="UCR Blood Initiative Logo"
          width={500}
          height={100}
          className="hidden md:block"
        />
        <Image
          src={mobFooter}
          alt="UCR Blood Initiative Logo"
          height={75}
          className="p-5 md:hidden"
        />

        <div className="text-ubi-white absolute left-[55%] hidden -translate-x-1/2 text-center text-sm font-semibold md:block">
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
