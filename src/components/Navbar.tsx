import Image from "next/image";
import UBILogo from "@/public/UBI_Logo.png";

const Navbar = () => {
  return (
    <div>
      <Image src={UBILogo} alt="UBI Logo" width={100} height={100} />
    </div>
  );
};

export default Navbar;
