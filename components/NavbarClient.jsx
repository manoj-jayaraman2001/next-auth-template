"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import MenuIcon from "@/public/menu.svg";
import CloseIcon from "@/public/close.svg";
import Image from "next/image";
import PopOver from "./PopOver";
import "@/app/globals.css";

const NavbarClient = ({ session }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayPopver, setDisplayPopver] = useState(false)
  const isAuth = usePathname().includes("/auth");
  const router = useRouter();

  const UserImage = ({ name }) => {
    return <div className="user-img">{name[0]}</div>;
  };

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
            <div onClick={() => {setDisplayPopver(prev => !prev)}}>
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name[0]}
                  className="user-img"
                  width={36}
                  height={36}
                />
              ) : (
                <UserImage name={session.user.name} />
              )}
              <div className={`pop-over ${displayPopver ? "" : "pop-close"}`}>
                <PopOver/>
              </div>
            </div>
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
