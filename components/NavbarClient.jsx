"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import MenuIcon from "@/public/menu.svg";
import CloseIcon from "@/public/close.svg";
import Image from "next/image";
import "@/app/globals.css";
const NavbarClient = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isAuth = usePathname().includes("/auth");
    const session = null;
    const router = useRouter();
  return (
    <>
      <div className={`links ${menuOpen ? "menu-open" : "menu-close"}`}>
        <Link href="/">Home</Link>
        <Link href="/protected/client">Protected (client)</Link>
        <Link href="/protected/server">Protected (server)</Link>

        {session && (
          <>
            <Link href="/profile/client">Profile (client)</Link>
            <Link href="/profile/server">Profile (server)</Link>
            <Link href="/dashboard">Dashboard</Link>
          </>
        )}
        {!session && !isAuth && (
          <button className="btn" onClick={() => router.push("/auth/login")}>
            Sign In
          </button>
        )}
      </div>
      <div
        className="menu-icon"
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
      >
        {menuOpen ? (
          <Image src={CloseIcon} alt="✖" />
        ) : (
          <Image src={MenuIcon} alt="☰" />
        )}
      </div>
    </>
  );
};

export default NavbarClient;
