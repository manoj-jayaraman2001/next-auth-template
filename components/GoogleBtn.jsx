"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
const GoogleButton = ({callbackUrl}) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyles = {
    margin: "20px auto",
    height: "48px",
    padding: "0 24px",
    border: "2px solid #ccc",
    borderRadius: "9999px",
    transition: "border-color 300ms, background-color 300ms",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: isHovered ? "rgba(66, 133, 244, 0.2)" : "transparent"
  };

  const textStyles = {
    display: "block",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "20px",
    color: isHovered ? "#4285F4" : "black",
    transition: "color 300ms",
  };

  const signInWithGoogle = () => {
    signIn("google", { callbackUrl: callbackUrl });
  };

  return (
    <button
      style={buttonStyles}
      onClick={signInWithGoogle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google logo"
          width={20}
          height={20}
        />
        <span style={textStyles}>Continue with Google</span>
      </div>
    </button>
  );
};

export default GoogleButton;
