import "@/app/(styles)/navbar.css";
import Image from "next/image";
import { signOut } from "next-auth/react";
import moonIcon from "@/public/dark.svg";
import lightIcon from "@/public/light.svg";
import signOutIcon from "@/public/signout.svg";
const PopOver = ({setClickedInside}) => {
  const isDark = false;
  return (
    <div>
      <div className="pop-over-option">
        {isDark ? (
          <Image src={lightIcon} alt="light icon" height={20} width={20}/>
        ) : (
          <Image src={moonIcon} alt="moon-icon" height={20} width={20}/>
        )}
        <p>{isDark ? "Light mode" : "Dark Mode"}</p>
      </div>
      <div className="pop-over-option" onClick={signOut}>
        <Image src={signOutIcon} alt="sign out" height={20} width={20}/>
        <p>Sign Out</p>
      </div>
    </div>
  );
};

export default PopOver;
