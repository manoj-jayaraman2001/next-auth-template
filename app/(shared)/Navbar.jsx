import Image from "next/image";
import logo from "@/public/logo.svg";
import NavbarClient from "@/components/NavbarClient";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import "@/app/(styles)/navbar.css";
import "@/app/globals.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Image src={logo} alt="logo" />
        <p>App Name</p>
      </div>
      <NavbarClient />
    </div>
  );
};

export default Navbar;
