import { IconType } from "react-icons";
import { FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export interface FooterLink {
  icon: IconType;
  url: string;
}

export const footerLinks: FooterLink[] = [
  {
    icon: SiLinktree,
    url: "https://linktr.ee/UCRBLOODINITIATIVE?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/ubi_ucr/",
  },
];
