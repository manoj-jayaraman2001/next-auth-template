"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import MenuIcon from "@/public/menu.svg";
import CloseIcon from "@/public/close.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import "@/app/(styles)/navbar.css";
import "@/app/globals.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen)
  const session = 1;
  const router = useRouter();
  return (
    <div className="nav">
      <div className="logo">
        <Image src={logo} alt="logo" />
        <p>App Name</p>
      </div>
      <div className="menu-icon" onClick={()=>{setMenuOpen(prev => !prev)}}>
        {menuOpen ? (
          <Image src={CloseIcon} alt="✖"/>
        ) : (
          <Image src={MenuIcon} alt="☰"/>
        )}
      </div>

      <div className={`links ${menuOpen ? 'menu-open' : 'menu-close'}`}>
        <Link href="/">Home</Link>
        <Link href="/protected/client">Protected (client)</Link>
        <Link href="/protected/server">Protected (server)</Link>
        {!session && (
          <button className="btn" onClick={() => router.push("/auth/login")}>
            Sign In
          </button>
        )}
        {session && (
          <>
            <Link href="/profile/client">Profile (client)</Link>
            <Link href="/profile/server">Profile (server)</Link>
            <Link href="/dashboard">Dashboard</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
